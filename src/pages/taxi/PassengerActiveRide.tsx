import Icon from "@/components/ui/icon";
import YandexMap from "@/components/YandexMap";
import { Order, Driver, LOGO_URL, PaymentMethod } from "./types";

type OrderStep = "form" | "searching" | "found" | "arrived" | "inprogress" | "rating";

interface PassengerActiveRideProps {
  step: OrderStep;
  from: string;
  to: string;
  isDelivery: boolean;
  deliveryAddress: string;
  routeLabel: string;
  calcPrice: () => number;
  routeDistanceKm: number | null;
  currentDistanceKm: number;
  pickMode: "from" | "to" | null;
  onMapPick: (address: string) => void;
  activeOrder: Order | undefined;
  assignedDriver: Driver | null | undefined;
  etaMinutes: number;
  tips: number;
  setTips: (v: number) => void;
  paymentMethod: PaymentMethod;
  chatOpen: boolean;
  chatMessages: { from: string; text: string }[];
  chatInput: string;
  setChatInput: (v: string) => void;
  unreadChat: number;
  openChat: () => void;
  setChatOpen: (v: boolean) => void;
  sendChatMessage: () => void;
  hoverStar: number;
  setHoverStar: (v: number) => void;
  selectedStar: number;
  setSelectedStar: (v: number) => void;
  handleRate: (stars: number) => void;
  handleCancel: () => void;
  confirmAction: { type: string; action: () => void } | null;
  setConfirmAction: (v: { type: string; action: () => void } | null) => void;
  scheduledAtStr: string | undefined;
}

export default function PassengerActiveRide({
  step, from, to, isDelivery, deliveryAddress, routeLabel, calcPrice,
  routeDistanceKm, currentDistanceKm, pickMode, onMapPick,
  activeOrder, assignedDriver, etaMinutes, tips, setTips,
  chatOpen, chatMessages, chatInput, setChatInput, unreadChat,
  openChat, setChatOpen, sendChatMessage,
  hoverStar, setHoverStar, selectedStar, setSelectedStar, handleRate,
  handleCancel, confirmAction, setConfirmAction, scheduledAtStr,
}: PassengerActiveRideProps) {
  return (
    <>
      {confirmAction && (
        <div style={{ position: "absolute", inset: 0, zIndex: 250, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--page-px)" }}>
          <div className="taxi-card animate-fade-slide-up" style={{ maxWidth: 320, width: "100%", textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>
              {confirmAction.type === "cancel" ? "⚠️" : "🚖"}
            </div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 16, color: "#F0F2F5", marginBottom: 6 }}>
              {confirmAction.type === "cancel" ? "Отменить заказ?" : confirmAction.type === "order" ? "Подтвердить заказ?" : "Подтвердить?"}
            </div>
            <div style={{ fontSize: 13, color: "var(--taxi-muted)", marginBottom: 16, lineHeight: 1.5 }}>
              {confirmAction.type === "cancel"
                ? "Вы уверены, что хотите отменить заказ?"
                : confirmAction.type === "order"
                  ? `Маршрут: ${routeLabel}${routeDistanceKm !== null ? ` (${routeDistanceKm} км)` : ""}\nСтоимость: ≈ ${calcPrice()} ₽`
                  : "Подтвердите действие"}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => setConfirmAction(null)}
                style={{ flex: 1, padding: "12px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "var(--taxi-muted)", fontSize: 14, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}
              >
                Назад
              </button>
              <button
                onClick={() => { confirmAction.action(); setConfirmAction(null); }}
                style={{ flex: 1, padding: "12px", background: confirmAction.type === "cancel" ? "rgba(239,68,68,0.2)" : "var(--taxi-yellow)", border: confirmAction.type === "cancel" ? "1px solid rgba(239,68,68,0.4)" : "none", borderRadius: 12, color: confirmAction.type === "cancel" ? "var(--taxi-red)" : "var(--taxi-dark)", fontSize: 14, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 700 }}
              >
                {confirmAction.type === "cancel" ? "Отменить" : "Да, заказать"}
              </button>
            </div>
          </div>
        </div>
      )}

      {chatOpen && (
        <div style={{ position: "absolute", inset: 0, zIndex: 300, background: "var(--taxi-dark)", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "14px var(--page-px)", borderBottom: "1px solid var(--taxi-border)", display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setChatOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--taxi-yellow)" }}>
              <Icon name="ArrowLeft" size={20} />
            </button>
            <div style={{ width: 36, height: 36, background: "var(--taxi-yellow)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🚗</div>
            <div>
              <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, color: "#F0F2F5" }}>{assignedDriver?.name ?? "Водитель"}</div>
              <div style={{ fontSize: 11, color: "var(--taxi-green)" }}>Онлайн</div>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "var(--page-px)", display: "flex", flexDirection: "column", gap: 10 }}>
            {chatMessages.length === 0 && <div style={{ textAlign: "center", color: "var(--taxi-muted)", fontSize: 13, marginTop: 40 }}>Напишите водителю</div>}
            {chatMessages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.from === "passenger" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "75%", padding: "10px 14px",
                  borderRadius: msg.from === "passenger" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  background: msg.from === "passenger" ? "var(--taxi-yellow)" : "var(--taxi-card)",
                  color: msg.from === "passenger" ? "var(--taxi-dark)" : "#F0F2F5", fontSize: 14,
                  border: msg.from === "passenger" ? "none" : "1px solid var(--taxi-border)",
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{ padding: "12px var(--page-px) 24px", borderTop: "1px solid var(--taxi-border)", display: "flex", gap: 10 }}>
            <input className="taxi-input" placeholder="Сообщение..." value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendChatMessage()} style={{ flex: 1 }} />
            <button onClick={sendChatMessage} style={{ width: 48, height: 48, background: "var(--taxi-yellow)", border: "none", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon name="Send" size={18} color="var(--taxi-dark)" fallback="ArrowRight" />
            </button>
          </div>
        </div>
      )}

      {step === "rating" && activeOrder && (
        <div style={{ position: "absolute", inset: 0, zIndex: 50, background: "var(--taxi-dark)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--page-px)" }} className="animate-fade-slide-up">
          <img src={LOGO_URL} alt="" style={{ width: 56, height: 56, borderRadius: "var(--card-radius)", objectFit: "cover", marginBottom: 14 }} />
          <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: 20, color: "#F0F2F5", textAlign: "center", marginBottom: 4 }}>
            Спасибо за поездку!
          </div>
          <div style={{ fontSize: 13, color: "var(--taxi-muted)", textAlign: "center", marginBottom: 20, lineHeight: 1.5 }}>
            Мы ценим, что вы выбрали наш сервис
          </div>
          {assignedDriver && (
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>{assignedDriver.name}</div>
              <div style={{ fontSize: 12, color: "var(--taxi-muted)", marginTop: 2 }}>{assignedDriver.car}</div>
            </div>
          )}
          <div style={{ fontSize: 13, color: "var(--taxi-muted)", marginBottom: 10 }}>Оцените водителя</div>
          <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star}
                onMouseEnter={() => setHoverStar(star)} onMouseLeave={() => setHoverStar(0)}
                onClick={() => setSelectedStar(star)}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "var(--star-size)", transition: "transform 0.15s", transform: (hoverStar >= star || selectedStar >= star) ? "scale(1.15)" : "scale(1)", filter: (hoverStar >= star || selectedStar >= star) ? "none" : "grayscale(1) opacity(0.3)" }}>
                ⭐
              </button>
            ))}
          </div>
          <button className="btn-yellow" onClick={() => handleRate(selectedStar || 5)} style={{ maxWidth: 280, width: "100%" }}>
            {selectedStar > 0 ? `Оценить на ${selectedStar} ★` : "Пропустить"}
          </button>
        </div>
      )}

      <div style={{ flex: step === "form" ? (pickMode ? "1 1 60%" : "0 0 200px") : 1, position: "relative", overflow: "hidden", transition: "flex 0.4s" }}>
        <YandexMap fromAddress={isDelivery ? "" : from} toAddress={isDelivery ? deliveryAddress : to} height="100%" pickMode={step === "form" ? pickMode : null} onMapPick={onMapPick} />

        {step === "searching" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, background: "rgba(13,15,20,0.85)", backdropFilter: "blur(4px)" }}>
            <div className="taxi-card" style={{ padding: "var(--page-px)", textAlign: "center", maxWidth: "min(300px, 85vw)" }}>
              <div style={{ fontSize: 12, color: "var(--taxi-muted)", marginBottom: 6 }}>{routeLabel}</div>
              {scheduledAtStr && <div style={{ fontSize: 11, color: "var(--taxi-yellow)", marginBottom: 6 }}>📅 {scheduledAtStr}</div>}
              <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 18, color: "var(--taxi-yellow)", marginBottom: 10 }}>≈ {calcPrice()} ₽</div>
              <div style={{ borderTop: "1px solid var(--taxi-border)", paddingTop: 10 }}>
                <div style={{ fontSize: 11, color: "var(--taxi-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Чаевые для быстрого поиска</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
                  <input type="number" min={0} max={999999} value={tips || ""} onChange={(e) => setTips(Math.min(999999, Math.max(0, parseInt(e.target.value) || 0)))} placeholder="0" className="taxi-input" style={{ width: 90, textAlign: "center", fontFamily: "Montserrat", fontWeight: 700 }} />
                  <span style={{ color: "var(--taxi-muted)", fontSize: 13 }}>₽</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--taxi-yellow)", opacity: 0.5, animation: `blink 1s ${i * 0.3}s infinite` }} />
              ))}
            </div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>Ищем водителя...</div>
            <button onClick={() => setConfirmAction({ type: "cancel", action: handleCancel })} style={{ padding: "10px 24px", background: "transparent", border: "1px solid var(--taxi-red)", borderRadius: 12, color: "var(--taxi-red)", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}>
              Отменить
            </button>
          </div>
        )}

        {step === "found" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }} />
            <div className="animate-fade-slide-up" style={{ background: "var(--taxi-card)", borderRadius: "20px 20px 0 0", padding: "var(--page-px)", borderTop: "2px solid var(--taxi-yellow)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>Водитель едет к вам</div>
                <div style={{ background: "rgba(255,204,0,0.15)", border: "1px solid rgba(255,204,0,0.3)", borderRadius: 20, padding: "4px 10px", fontFamily: "Montserrat", fontWeight: 700, fontSize: 13, color: "var(--taxi-yellow)" }}>
                  ~{etaMinutes} мин
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", background: "var(--taxi-surface)", borderRadius: 14, marginBottom: 12 }}>
                <div style={{ width: 50, height: 50, background: "var(--taxi-yellow)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🚗</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>{assignedDriver?.name ?? "Водитель"}</div>
                  <div style={{ fontSize: 12, color: "var(--taxi-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{assignedDriver?.car ?? ""}</div>
                </div>
                <div style={{ color: "var(--taxi-yellow)", fontSize: 14, fontWeight: 700 }}>★ {assignedDriver?.rating ?? "4.8"}</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {assignedDriver?.phone && (
                  <a href={`tel:${assignedDriver.phone.replace(/\s/g, "")}`} style={{ width: 48, height: 48, flexShrink: 0, background: "var(--taxi-green)", border: "none", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    <Icon name="Phone" size={20} color="#fff" />
                  </a>
                )}
                <button onClick={() => openChat()} style={{ flex: 1, padding: "13px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, position: "relative" }}>
                  <Icon name="MessageCircle" size={16} color="var(--taxi-yellow)" /> Чат
                  {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
                </button>
                <button onClick={() => setConfirmAction({ type: "cancel", action: handleCancel })} style={{ flex: 1, padding: "13px", background: "transparent", border: "1px solid var(--taxi-red)", borderRadius: 12, color: "var(--taxi-red)", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}>
                  Отменить
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "arrived" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }} />
            <div className="animate-fade-slide-up" style={{ background: "var(--taxi-card)", borderRadius: "20px 20px 0 0", padding: "var(--page-px)", borderTop: "2px solid var(--taxi-green)" }}>
              <div style={{ textAlign: "center", marginBottom: 14 }}>
                <div style={{ fontSize: 36, marginBottom: 6 }}>🚕</div>
                <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: 16, color: "var(--taxi-green)" }}>Вас ожидает</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", background: "var(--taxi-surface)", borderRadius: 14, marginBottom: 12 }}>
                <div style={{ width: 50, height: 50, background: "var(--taxi-yellow)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🚗</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>{assignedDriver?.name ?? "Водитель"}</div>
                  <div style={{ fontSize: 12, color: "var(--taxi-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{assignedDriver?.car ?? ""}</div>
                </div>
                <div style={{ color: "var(--taxi-yellow)", fontSize: 14, fontWeight: 700 }}>★ {assignedDriver?.rating ?? "4.8"}</div>
              </div>
              <div style={{ padding: "10px 12px", background: "var(--taxi-surface)", borderRadius: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 11, color: "var(--taxi-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>Заказ</div>
                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 3 }}>
                    <div style={{ width: 8, height: 8, background: "var(--taxi-green)", borderRadius: "50%" }} />
                    <div style={{ width: 1, height: 16, background: "var(--taxi-border)", margin: "2px 0" }} />
                    <div style={{ width: 8, height: 8, background: "var(--taxi-yellow)", borderRadius: 2 }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, color: "#F0F2F5", marginBottom: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{activeOrder?.from || from}</div>
                    <div style={{ fontSize: 13, color: "var(--taxi-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{activeOrder?.to || to}</div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--taxi-border)", paddingTop: 8 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-muted)" }}>{currentDistanceKm} км</span>
                    {activeOrder?.options.children && <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-yellow)" }}>👶 {activeOrder.options.childrenCount}</span>}
                    {activeOrder?.options.luggage && <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-yellow)" }}>🧳</span>}
                  </div>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 16, color: "var(--taxi-yellow)" }}>{calcPrice()} ₽</div>
                </div>
                {activeOrder?.options.comment && (
                  <div style={{ marginTop: 8, padding: "6px 10px", background: "var(--taxi-card)", borderRadius: 8, fontSize: 12, color: "var(--taxi-muted)", fontStyle: "italic" }}>
                    {activeOrder.options.comment}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {assignedDriver?.phone && (
                  <a href={`tel:${assignedDriver.phone.replace(/\s/g, "")}`} style={{ width: 48, height: 48, flexShrink: 0, background: "var(--taxi-green)", border: "none", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    <Icon name="Phone" size={20} color="#fff" />
                  </a>
                )}
                <button onClick={() => openChat()} style={{ flex: 1, padding: "13px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, position: "relative" }}>
                  <Icon name="MessageCircle" size={16} color="var(--taxi-yellow)" /> Написать водителю
                  {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "inprogress" && (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1 }} />
            <div style={{ background: "var(--taxi-card)", borderRadius: "20px 20px 0 0", padding: "var(--page-px)", borderTop: "1px solid var(--taxi-border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span className="animate-blink" style={{ color: "var(--taxi-yellow)" }}>●</span>
                <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, color: "#F0F2F5" }}>В пути</span>
              </div>
              <div style={{ fontSize: 12, color: "var(--taxi-muted)", marginBottom: 4 }}>{routeLabel}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderTop: "1px solid var(--taxi-border)", marginTop: 6 }}>
                <div style={{ width: 40, height: 40, background: "var(--taxi-yellow)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🚗</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: 13, color: "#F0F2F5" }}>{assignedDriver?.name ?? "Водитель"}</div>
                  <div style={{ fontSize: 11, color: "var(--taxi-muted)" }}>{assignedDriver?.car ?? ""}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "var(--taxi-yellow)" }}>{calcPrice()} ₽</div>
                  {activeOrder?.waitingMinutes && activeOrder.waitingMinutes > 0 && (
                    <div style={{ fontSize: 11, color: "var(--taxi-muted)", textAlign: "right" }}>+ожидание</div>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                {assignedDriver?.phone && (
                  <a href={`tel:${assignedDriver.phone.replace(/\s/g, "")}`} style={{ width: 44, height: 44, flexShrink: 0, background: "var(--taxi-green)", border: "none", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    <Icon name="Phone" size={18} color="#fff" />
                  </a>
                )}
                <button onClick={() => openChat()} style={{ flex: 1, padding: "11px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 12, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, position: "relative" }}>
                  <Icon name="MessageCircle" size={15} color="var(--taxi-yellow)" /> Чат
                  {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
