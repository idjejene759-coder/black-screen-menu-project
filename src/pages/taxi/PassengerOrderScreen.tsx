import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";
import YandexMap from "@/components/YandexMap";
import { shortenAddress } from "@/lib/address";
import { Order, User, AppSettings, Driver, PaymentMethod, calcOrderPrice } from "./types";
import { playNotificationSound, sendPush } from "./notifications";
import api from "./api";
import { ToastOverlay, ConfirmDialog, ChatOverlay, RatingScreen } from "./components/PassengerOrderOverlays";
import { SearchingPanel, FoundPanel, ArrivedPanel, InProgressPanel } from "./components/PassengerOrderStatusPanels";
import PassengerOrderForm from "./components/PassengerOrderForm";

interface Props {
  user: User;
  orders: Order[];
  settings: AppSettings;
  drivers: Driver[];
  onOrderCreate: (order: Order) => void;
  onOrderCancel: (id: string) => void;
  onRateDriver?: (driverId: string, rating: number) => void;
  initialFrom?: string;
  initialTo?: string;
}

type OrderStep = "form" | "searching" | "found" | "arrived" | "inprogress" | "rating";

export default function PassengerOrderScreen({ user, orders, settings, drivers, onOrderCreate, onOrderCancel, onRateDriver, initialFrom = "", initialTo = "" }: Props) {
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [tariff, setTariff] = useState<"economy" | "hourly" | "delivery">("economy");
  const [children, setChildren] = useState(false);
  const [childrenCount, setChildrenCount] = useState(1);
  const [luggage, setLuggage] = useState(false);
  const [comment, setComment] = useState("");
  const [deliveryWhat, setDeliveryWhat] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [cargoDesc, setCargoDesc] = useState("");
  const [scheduleType, setScheduleType] = useState<"now" | "scheduled">("now");
  const [scheduleDay, setScheduleDay] = useState("");
  const [scheduleMonth, setScheduleMonth] = useState("");
  const [scheduleHour, setScheduleHour] = useState("");
  const [scheduleMin, setScheduleMin] = useState("");
  const [step, setStep] = useState<OrderStep>("form");
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [toast, setToast] = useState<{ text: string; sub?: string } | null>(null);
  const [hoverStar, setHoverStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{from: string; text: string}[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [unreadChat, setUnreadChat] = useState(0);
  const [etaMinutes, setEtaMinutes] = useState(5);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [tips, setTips] = useState(0);
  const [pickMode, setPickMode] = useState<"from" | "to" | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ type: string; action: () => void } | null>(null);
  const [fromCoords, setFromCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [toCoords, setToCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [routeDistanceKm, setRouteDistanceKm] = useState<number | null>(null);
  const [routeLoading, setRouteLoading] = useState(false);

  const showToast = (text: string, sub?: string) => {
    setToast({ text, sub });
    setTimeout(() => setToast(null), 4000);
  };

  const restoredRef = useRef(false);
  useEffect(() => {
    if (restoredRef.current) return;
    restoredRef.current = true;
    const active = orders.find(
      (o) => o.passengerId === user.id && !["done", "cancelled"].includes(o.status) && !(o.status === "pending" && o.scheduledAt)
    );
    if (active) {
      setActiveOrderId(active.id);
      setFrom(active.from || "");
      setTo(active.to || "");
      setTariff(active.tariff);
      const statusToStep: Record<string, OrderStep> = {
        pending: "searching",
        assigned: "found",
        waiting: "found",
        arrived: "arrived",
        inprogress: "inprogress",
      };
      setStep(statusToStep[active.status] || "searching");
      if (active.etaMinutes) setEtaMinutes(active.etaMinutes);
    }
  }, [orders, user.id]);

  const autoLocatedRef = useRef(false);
  useEffect(() => {
    if (autoLocatedRef.current || step !== "form" || from) return;
    autoLocatedRef.current = true;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setFromCoords({ lat: latitude, lng: longitude });
        try {
          await new Promise<void>((resolve) => {
            if (window.ymaps) window.ymaps.ready(() => resolve());
            else resolve();
          });
          if (window.ymaps) {
            const res = await window.ymaps.geocode([latitude, longitude], { results: 1 });
            const obj = res?.geoObjects?.get(0);
            if (obj) setFrom(shortenAddress(obj.getAddressLine()));
          }
        } catch (_e) { void _e; }
      },
      () => {},
      { timeout: 8000, enableHighAccuracy: true }
    );
  }, [step, from]);

  useEffect(() => {
    if (step === "found") {
      setEtaMinutes((prev) => prev || Math.floor(Math.random() * 6) + 3);
      showToast("Водитель найден!", "Едет к вам");
      playNotificationSound("arrive");
      sendPush("Taxi", "Водитель найден и едет к вам!");
    }
    if (step === "arrived") {
      playNotificationSound("arrive");
      sendPush("Taxi", "Водитель на месте!");
    }
  }, [step]);

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setFromCoords({ lat: latitude, lng: longitude });
        try {
          await new Promise<void>((resolve) => {
            if (window.ymaps) window.ymaps.ready(() => resolve());
            else resolve();
          });
          if (window.ymaps) {
            const res = await window.ymaps.geocode([latitude, longitude], { results: 1 });
            const obj = res?.geoObjects?.get(0);
            if (obj) setFrom(shortenAddress(obj.getAddressLine()));
            else setFrom(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          } else {
            setFrom(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
          }
        } catch {
          setFrom(`${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
        }
        setLocating(false);
      },
      () => {
        setLocating(false);
        showToast("Не удалось определить", "Разрешите доступ к геолокации");
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  };

  const geocodeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const geocodeAddress = useCallback(async (address: string): Promise<{ lat: number; lng: number } | null> => {
    if (!address || address.length < 3 || !window.ymaps) return null;
    try {
      await new Promise<void>((resolve) => window.ymaps.ready(() => resolve()));
      const res = await window.ymaps.geocode(address, { results: 1 });
      const obj = res?.geoObjects?.get(0);
      if (!obj) return null;
      const coords = obj.geometry.getCoordinates();
      return { lat: coords[0], lng: coords[1] };
    } catch {
      return null;
    }
  }, []);

  const calcRoute = useCallback(async (fCoords: { lat: number; lng: number }, tCoords: { lat: number; lng: number }) => {
    if (!window.ymaps) return;
    setRouteLoading(true);
    try {
      await new Promise<void>((resolve) => window.ymaps.ready(() => resolve()));
      const route = await window.ymaps.route(
        [[fCoords.lat, fCoords.lng], [tCoords.lat, tCoords.lng]],
        { mapStateAutoApply: false }
      );
      const dist = route.getLength() / 1000;
      setRouteDistanceKm(Math.round(dist * 10) / 10);
    } catch {
      const R = 6371;
      const dLat = ((tCoords.lat - fCoords.lat) * Math.PI) / 180;
      const dLng = ((tCoords.lng - fCoords.lng) * Math.PI) / 180;
      const a = Math.sin(dLat / 2) ** 2 + Math.cos((fCoords.lat * Math.PI) / 180) * Math.cos((tCoords.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
      const straight = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      setRouteDistanceKm(Math.round(straight * 1.3 * 10) / 10);
    }
    setRouteLoading(false);
  }, []);

  useEffect(() => {
    if (step !== "form" || tariff === "delivery") return;
    if (geocodeTimerRef.current) clearTimeout(geocodeTimerRef.current);
    if (!from || from.length < 3 || !to || to.length < 3) {
      setRouteDistanceKm(null);
      return;
    }
    geocodeTimerRef.current = setTimeout(async () => {
      const fC = fromCoords || await geocodeAddress(from);
      if (fC && !fromCoords) setFromCoords(fC);
      const tC = await geocodeAddress(to);
      if (tC) setToCoords(tC);
      if (fC && tC) await calcRoute(fC, tC);
    }, 600);
    return () => { if (geocodeTimerRef.current) clearTimeout(geocodeTimerRef.current); };
  }, [from, to, tariff, step, fromCoords, geocodeAddress, calcRoute]);

  const activeOrder = orders.find((o) => o.id === activeOrderId);
  const assignedDriver = activeOrder?.driverId ? drivers.find(d => d.id === activeOrder.driverId) : null;

  const currentDistanceKm = routeDistanceKm ?? 10;
  const calcPrice = () => calcOrderPrice(currentDistanceKm, settings, tariff);

  const isDelivery = tariff === "delivery";
  const isCargo = tariff === "hourly";

  const handleMapPick = async (address: string) => {
    if (pickMode === "from") {
      setFrom(shortenAddress(address));
      const c = await geocodeAddress(address);
      if (c) setFromCoords(c);
    } else if (pickMode === "to") {
      if (isDelivery) setDeliveryAddress(address);
      else {
        setTo(shortenAddress(address));
        const c = await geocodeAddress(address);
        if (c) setToCoords(c);
      }
    }
    setPickMode(null);
  };

  const scheduledAtStr = scheduleType === "scheduled" && scheduleDay && scheduleMonth && scheduleHour && scheduleMin
    ? `${scheduleDay.padStart(2, "0")}.${scheduleMonth.padStart(2, "0")} ${scheduleHour.padStart(2, "0")}:${scheduleMin.padStart(2, "0")}`
    : undefined;

  const canOrder = isDelivery
    ? !!deliveryAddress && !!deliveryWhat
    : (!!from && !!to);

  const handleOrder = () => {
    if (!canOrder) return;
    const order: Order = {
      id: `o_${Date.now()}`,
      passengerId: user.id,
      passengerName: user.name,
      passengerPhone: user.phone,
      from: isDelivery ? "" : from,
      to: isDelivery ? deliveryAddress : to,
      tariff,
      options: {
        children: (isDelivery || isCargo) ? false : children,
        childrenCount: (isDelivery || isCargo) ? 0 : (children ? childrenCount : 0),
        luggage: (isDelivery || isCargo) ? false : luggage,
        comment: isDelivery ? "" : comment,
        deliveryDescription: isDelivery ? deliveryWhat : undefined,
        cargoDescription: isCargo ? cargoDesc : undefined,
      },
      status: "pending",
      paymentMethod,
      tips,
      discount: 0,
      distanceKm: currentDistanceKm,
      price: calcPrice(),
      createdAt: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
      createdTimestamp: Date.now(),
      freeAt: Date.now(),
      acceptedVia: undefined,
      scheduledAt: scheduledAtStr,
      fromLat: fromCoords?.lat ?? null,
      fromLng: fromCoords?.lng ?? null,
      toLat: toCoords?.lat ?? null,
      toLng: toCoords?.lng ?? null,
    };
    onOrderCreate(order);
    if (scheduledAtStr) {
      showToast(`Заказ на ${scheduledAtStr} оформлен`, "Водитель будет назначен ближе к времени");
      resetOrder();
    } else {
      setActiveOrderId(order.id);
      setStep("searching");
    }
  };

  const handleCancel = () => {
    if (activeOrderId) onOrderCancel(activeOrderId);
    resetOrder();
  };

  const resetOrder = () => {
    setActiveOrderId(null);
    setStep("form");
    setFrom(""); setTo(""); setComment(""); setDeliveryAddress(""); setDeliveryWhat("");
    setChildren(false); setLuggage(false); setCargoDesc("");
    setSelectedStar(0); setHoverStar(0);
    setChatOpen(false); setChatMessages([]);
    setPaymentMethod("cash"); setTips(0);
    setRouteDistanceKm(null); setFromCoords(null); setToCoords(null);
    setScheduleType("now"); setScheduleDay(""); setScheduleMonth(""); setScheduleHour(""); setScheduleMin("");
    setPickMode(null);
  };

  const handleRate = (stars: number) => {
    if (activeOrder?.driverId && onRateDriver) onRateDriver(activeOrder.driverId, stars);
    resetOrder();
    showToast("Спасибо за оценку!", "Это помогает улучшать сервис");
  };

  const prevStatusRef = useRef<string | null>(null);
  useEffect(() => {
    if (!activeOrderId) {
      const justAssigned = orders.find(
        (o) => o.passengerId === user.id && o.scheduledAt && o.status === "assigned"
      );
      if (justAssigned) {
        setActiveOrderId(justAssigned.id);
        setFrom(justAssigned.from || "");
        setTo(justAssigned.to || "");
        setTariff(justAssigned.tariff);
        setStep("found");
        playNotificationSound("arrive");
        sendPush("Taxi", "Водитель назначен на ваш предварительный заказ!");
      }
      return;
    }
    const order = orders.find((o) => o.id === activeOrderId);
    if (!order) return;
    const prevStatus = prevStatusRef.current;
    prevStatusRef.current = order.status;
    if (prevStatus === order.status) return;
    if (order.status === "assigned" && step === "searching") {
      setStep("found");
    } else if (order.status === "arrived" && (step === "searching" || step === "found")) {
      setStep("arrived");
    } else if (order.status === "inprogress" && step !== "inprogress") {
      setStep("inprogress");
    } else if (order.status === "done" && step !== "rating") {
      setStep("rating");
    } else if (order.status === "cancelled") {
      resetOrder();
    }
  }, [orders, activeOrderId, step, user.id]);

  const prevChatCountRef = useRef(0);
  const loadRideChat = useCallback(async () => {
    if (!activeOrderId) return;
    const res = await api.getRideChat(activeOrderId);
    if (res?.messages) {
      setChatMessages(res.messages.map((m: { from: string; text: string; senderName?: string }) => ({ from: m.from, text: m.text })));
      if (res.messages.length > prevChatCountRef.current) {
        const newMsgs = res.messages.slice(prevChatCountRef.current);
        const incoming = newMsgs.filter((m: { from: string }) => m.from === "driver");
        if (incoming.length > 0 && prevChatCountRef.current > 0) {
          playNotificationSound("message");
          if (!chatOpen) {
            setUnreadChat((prev) => prev + incoming.length);
            showToast("Сообщение от водителя", incoming[incoming.length - 1].text.slice(0, 60));
          }
          sendPush("Водитель", incoming[incoming.length - 1].text.slice(0, 80));
        }
      }
      prevChatCountRef.current = res.messages.length;
    }
  }, [activeOrderId, chatOpen]);

  useEffect(() => {
    if (!activeOrderId || step === "form" || step === "rating") return;
    loadRideChat();
    const interval = setInterval(loadRideChat, 3000);
    return () => clearInterval(interval);
  }, [activeOrderId, step, loadRideChat]);

  const openChat = () => {
    setChatOpen(true);
    setUnreadChat(0);
  };

  const sendChatMessage = async () => {
    if (!chatInput.trim() || !activeOrderId) return;
    const text = chatInput.trim();
    setChatMessages(prev => [...prev, { from: "passenger", text }]);
    setChatInput("");
    await api.sendRideChat(activeOrderId, "passenger", user.id, user.name, text);
  };

  const routeLabel = isDelivery ? `Доставка: ${deliveryAddress}` : `${from} → ${to}`;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
      <ToastOverlay toast={toast} onClose={() => setToast(null)} />

      <ConfirmDialog
        confirmAction={confirmAction}
        routeLabel={routeLabel}
        routeDistanceKm={routeDistanceKm}
        calcPrice={calcPrice}
        onClose={() => setConfirmAction(null)}
      />

      <ChatOverlay
        chatOpen={chatOpen}
        chatMessages={chatMessages}
        chatInput={chatInput}
        assignedDriver={assignedDriver}
        onClose={() => setChatOpen(false)}
        onInputChange={setChatInput}
        onSend={sendChatMessage}
      />

      <RatingScreen
        visible={step === "rating" && !!activeOrder}
        assignedDriver={assignedDriver}
        hoverStar={hoverStar}
        selectedStar={selectedStar}
        onHoverStar={setHoverStar}
        onSelectStar={setSelectedStar}
        onRate={handleRate}
      />

      <div style={{ flex: step === "form" ? (pickMode ? "1 1 60%" : "0 0 200px") : 1, position: "relative", overflow: "hidden", transition: "flex 0.4s" }}>
        <YandexMap fromAddress={isDelivery ? "" : from} toAddress={isDelivery ? deliveryAddress : to} height="100%" pickMode={step === "form" ? pickMode : null} onMapPick={handleMapPick} />

        <SearchingPanel
          visible={step === "searching"}
          routeLabel={routeLabel}
          scheduledAtStr={scheduledAtStr}
          calcPrice={calcPrice}
          tips={tips}
          onTipsChange={setTips}
          onCancel={() => setConfirmAction({ type: "cancel", action: handleCancel })}
        />

        <FoundPanel
          visible={step === "found"}
          assignedDriver={assignedDriver}
          activeOrder={activeOrder}
          from={from}
          to={to}
          etaMinutes={etaMinutes}
          currentDistanceKm={currentDistanceKm}
          calcPrice={calcPrice}
          unreadChat={unreadChat}
          onOpenChat={openChat}
          onCancel={() => setConfirmAction({ type: "cancel", action: handleCancel })}
        />

        <ArrivedPanel
          visible={step === "arrived"}
          assignedDriver={assignedDriver}
          activeOrder={activeOrder}
          from={from}
          to={to}
          currentDistanceKm={currentDistanceKm}
          calcPrice={calcPrice}
          unreadChat={unreadChat}
          onOpenChat={openChat}
        />

        <InProgressPanel
          visible={step === "inprogress"}
          assignedDriver={assignedDriver}
          activeOrder={activeOrder}
          routeLabel={routeLabel}
          calcPrice={calcPrice}
          unreadChat={unreadChat}
          onOpenChat={openChat}
        />

        {step === "form" && (
          <button onClick={handleLocate} disabled={locating}
            style={{ position: "absolute", right: 14, top: 14, width: 40, height: 40, background: "var(--taxi-card)", border: "1px solid var(--taxi-border)", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10, opacity: locating ? 0.6 : 1 }}
          >
            {locating
              ? <div style={{ width: 18, height: 18, border: "2px solid var(--taxi-border)", borderTop: "2px solid var(--taxi-yellow)", borderRadius: "50%", animation: "spin-slow 0.8s linear infinite" }} />
              : <Icon name="Locate" size={18} color="var(--taxi-yellow)" fallback="MapPin" />
            }
          </button>
        )}
      </div>

      {step === "form" && (
        <PassengerOrderForm
          orders={orders}
          userId={user.id}
          from={from}
          to={to}
          tariff={tariff}
          children={children}
          childrenCount={childrenCount}
          luggage={luggage}
          comment={comment}
          deliveryWhat={deliveryWhat}
          deliveryAddress={deliveryAddress}
          cargoDesc={cargoDesc}
          scheduleType={scheduleType}
          scheduleDay={scheduleDay}
          scheduleMonth={scheduleMonth}
          scheduleHour={scheduleHour}
          scheduleMin={scheduleMin}
          paymentMethod={paymentMethod}
          pickMode={pickMode}
          routeDistanceKm={routeDistanceKm}
          routeLoading={routeLoading}
          canOrder={canOrder}
          isDelivery={isDelivery}
          isCargo={isCargo}
          calcPrice={calcPrice}
          onFromChange={setFrom}
          onToChange={setTo}
          onTariffChange={setTariff}
          onChildrenChange={setChildren}
          onChildrenCountChange={setChildrenCount}
          onLuggageChange={setLuggage}
          onCommentChange={setComment}
          onDeliveryWhatChange={setDeliveryWhat}
          onDeliveryAddressChange={setDeliveryAddress}
          onCargoDescChange={setCargoDesc}
          onScheduleTypeChange={setScheduleType}
          onScheduleDayChange={setScheduleDay}
          onScheduleMonthChange={setScheduleMonth}
          onScheduleHourChange={setScheduleHour}
          onScheduleMinChange={setScheduleMin}
          onPaymentMethodChange={setPaymentMethod}
          onPickModeChange={setPickMode}
          onOrderCancel={onOrderCancel}
          onConfirmOrder={() => setConfirmAction({ type: "order", action: handleOrder })}
        />
      )}
    </div>
  );
}
