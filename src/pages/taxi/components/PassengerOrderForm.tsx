import Icon from "@/components/ui/icon";
import AddressInput from "@/components/AddressInput";
import { Order, PaymentMethod } from "../types";

const TARIFFS = [
  { id: "economy" as const, name: "Эконом", icon: "🚗" },
  { id: "hourly" as const, name: "Грузовой", icon: "🚛" },
  { id: "delivery" as const, name: "Доставка", icon: "📦" },
];

interface PassengerOrderFormProps {
  orders: Order[];
  userId: string;
  from: string;
  to: string;
  tariff: "economy" | "hourly" | "delivery";
  children: boolean;
  childrenCount: number;
  luggage: boolean;
  comment: string;
  deliveryWhat: string;
  deliveryAddress: string;
  cargoDesc: string;
  scheduleType: "now" | "scheduled";
  scheduleDay: string;
  scheduleMonth: string;
  scheduleHour: string;
  scheduleMin: string;
  paymentMethod: PaymentMethod;
  pickMode: "from" | "to" | null;
  routeDistanceKm: number | null;
  routeLoading: boolean;
  canOrder: boolean;
  isDelivery: boolean;
  isCargo: boolean;
  calcPrice: () => number;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
  onTariffChange: (v: "economy" | "hourly" | "delivery") => void;
  onChildrenChange: (v: boolean) => void;
  onChildrenCountChange: (v: number) => void;
  onLuggageChange: (v: boolean) => void;
  onCommentChange: (v: string) => void;
  onDeliveryWhatChange: (v: string) => void;
  onDeliveryAddressChange: (v: string) => void;
  onCargoDescChange: (v: string) => void;
  onScheduleTypeChange: (v: "now" | "scheduled") => void;
  onScheduleDayChange: (v: string) => void;
  onScheduleMonthChange: (v: string) => void;
  onScheduleHourChange: (v: string) => void;
  onScheduleMinChange: (v: string) => void;
  onPaymentMethodChange: (v: PaymentMethod) => void;
  onPickModeChange: (v: "from" | "to" | null) => void;
  onOrderCancel: (id: string) => void;
  onConfirmOrder: () => void;
}

export default function PassengerOrderForm({
  orders, userId, from, to, tariff, children, childrenCount, luggage, comment,
  deliveryWhat, deliveryAddress, cargoDesc, scheduleType, scheduleDay, scheduleMonth,
  scheduleHour, scheduleMin, paymentMethod, pickMode, routeDistanceKm, routeLoading,
  canOrder, isDelivery, isCargo, calcPrice,
  onFromChange, onToChange, onTariffChange, onChildrenChange, onChildrenCountChange,
  onLuggageChange, onCommentChange, onDeliveryWhatChange, onDeliveryAddressChange,
  onCargoDescChange, onScheduleTypeChange, onScheduleDayChange, onScheduleMonthChange,
  onScheduleHourChange, onScheduleMinChange, onPaymentMethodChange, onPickModeChange,
  onOrderCancel, onConfirmOrder,
}: PassengerOrderFormProps) {
  return (
    <div style={{ background: "var(--taxi-card)", borderRadius: "20px 20px 0 0", borderTop: "1px solid var(--taxi-border)", padding: "14px var(--page-px)", paddingBottom: 80, overflowY: "auto", maxHeight: "calc(100% - 200px)" }}>
      {orders.filter((o) => o.passengerId === userId && o.status === "pending" && o.scheduledAt).length > 0 && (
        <div style={{ background: "rgba(255,204,0,0.08)", border: "1px solid rgba(255,204,0,0.2)", borderRadius: 12, padding: "8px 12px", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 16 }}>📅</span>
          <div style={{ flex: 1 }}>
            {orders.filter((o) => o.passengerId === userId && o.status === "pending" && o.scheduledAt).map((o) => (
              <div key={o.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--taxi-yellow)", padding: "2px 0" }}>
                <span>{o.from} → {o.to} на {o.scheduledAt}</span>
                <button onClick={() => onOrderCancel(o.id)} style={{ background: "none", border: "none", color: "var(--taxi-red)", fontSize: 11, cursor: "pointer", padding: "2px 6px" }}>✕</button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {TARIFFS.map((t) => (
          <button key={t.id} onClick={() => onTariffChange(t.id)}
            style={{
              flex: 1, padding: "10px 4px", border: `1.5px solid ${tariff === t.id ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
              borderRadius: 14, background: tariff === t.id ? "rgba(255,204,0,0.1)" : "var(--taxi-surface)",
              cursor: "pointer", textAlign: "center", transition: "all 0.2s",
            }}>
            <div style={{ fontSize: 18, marginBottom: 2 }}>{t.icon}</div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 11, color: tariff === t.id ? "var(--taxi-yellow)" : "#F0F2F5" }}>{t.name}</div>
          </button>
        ))}
      </div>

      {isDelivery ? (
        <>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <AddressInput value={deliveryAddress} onChange={onDeliveryAddressChange} placeholder="Куда доставить?" dotColor="var(--taxi-yellow)" />
            </div>
            <button onClick={() => onPickModeChange(pickMode === "to" ? null : "to")}
              style={{ width: 44, height: 44, flexShrink: 0, background: pickMode === "to" ? "var(--taxi-yellow)" : "var(--taxi-surface)", border: `1px solid ${pickMode === "to" ? "var(--taxi-yellow)" : "var(--taxi-border)"}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon name="MapPin" size={18} color={pickMode === "to" ? "var(--taxi-dark)" : "var(--taxi-yellow)"} />
            </button>
          </div>
          <div style={{ height: 8 }} />
          <textarea className="taxi-input" placeholder="Что нужно доставить?" value={deliveryWhat} onChange={(e) => onDeliveryWhatChange(e.target.value)} rows={2} style={{ resize: "none", marginBottom: 10 }} />
        </>
      ) : (
        <>
          <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 14, gap: 2 }}>
              <div style={{ width: 10, height: 10, background: "var(--taxi-green)", borderRadius: "50%" }} />
              <div style={{ width: 1, flex: 1, background: "var(--taxi-border)", minHeight: 14 }} />
              <div style={{ width: 10, height: 10, background: "var(--taxi-yellow)", borderRadius: 2 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <AddressInput value={from} onChange={onFromChange} placeholder="Откуда едем?" dotColor="var(--taxi-green)" />
                </div>
                <button onClick={() => onPickModeChange(pickMode === "from" ? null : "from")}
                  style={{ width: 44, height: 44, flexShrink: 0, background: pickMode === "from" ? "var(--taxi-green)" : "var(--taxi-surface)", border: `1px solid ${pickMode === "from" ? "var(--taxi-green)" : "var(--taxi-border)"}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Icon name="MapPin" size={18} color={pickMode === "from" ? "#fff" : "var(--taxi-green)"} />
                </button>
              </div>
              <div style={{ height: 6 }} />
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                  <AddressInput value={to} onChange={onToChange} placeholder="Куда едем?" dotColor="var(--taxi-yellow)" />
                </div>
                <button onClick={() => onPickModeChange(pickMode === "to" ? null : "to")}
                  style={{ width: 44, height: 44, flexShrink: 0, background: pickMode === "to" ? "var(--taxi-yellow)" : "var(--taxi-surface)", border: `1px solid ${pickMode === "to" ? "var(--taxi-yellow)" : "var(--taxi-border)"}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <Icon name="MapPin" size={18} color={pickMode === "to" ? "var(--taxi-dark)" : "var(--taxi-yellow)"} />
                </button>
              </div>
            </div>
          </div>

          {isCargo && (
            <textarea className="taxi-input" placeholder="Опишите груз" value={cargoDesc} onChange={(e) => onCargoDescChange(e.target.value)} rows={2} style={{ resize: "none", marginBottom: 10 }} />
          )}

          {!isCargo && (
            <>
              <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" }}>
                <button onClick={() => onChildrenChange(!children)}
                  style={{
                    padding: "7px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer", fontFamily: "Golos Text",
                    background: children ? "rgba(255,204,0,0.15)" : "var(--taxi-surface)",
                    border: `1px solid ${children ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
                    color: children ? "var(--taxi-yellow)" : "var(--taxi-muted)",
                  }}>
                  👶 Дети до 7
                </button>
                {children && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <button onClick={() => onChildrenCountChange(Math.max(1, childrenCount - 1))} style={{ width: 28, height: 28, borderRadius: 8, background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", color: "#F0F2F5", cursor: "pointer", fontSize: 14 }}>−</button>
                    <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 14, color: "#F0F2F5", minWidth: 18, textAlign: "center" }}>{childrenCount}</span>
                    <button onClick={() => onChildrenCountChange(Math.min(4, childrenCount + 1))} style={{ width: 28, height: 28, borderRadius: 8, background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", color: "#F0F2F5", cursor: "pointer", fontSize: 14 }}>+</button>
                  </div>
                )}
                <button onClick={() => onLuggageChange(!luggage)}
                  style={{
                    padding: "7px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer", fontFamily: "Golos Text",
                    background: luggage ? "rgba(255,204,0,0.15)" : "var(--taxi-surface)",
                    border: `1px solid ${luggage ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
                    color: luggage ? "var(--taxi-yellow)" : "var(--taxi-muted)",
                  }}>
                  🧳 Багаж
                </button>
              </div>
              <input className="taxi-input" placeholder="Комментарий к заказу" value={comment} onChange={(e) => onCommentChange(e.target.value)} style={{ marginBottom: 10 }} />
            </>
          )}
        </>
      )}

      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 11, color: "var(--taxi-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Время заказа</div>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => onScheduleTypeChange("now")}
            style={{
              flex: 1, padding: "10px", borderRadius: 12, fontSize: 13, cursor: "pointer", fontFamily: "Golos Text", fontWeight: 500,
              background: scheduleType === "now" ? "rgba(255,204,0,0.15)" : "var(--taxi-surface)",
              border: `1.5px solid ${scheduleType === "now" ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
              color: scheduleType === "now" ? "var(--taxi-yellow)" : "var(--taxi-muted)",
            }}>
            Сейчас
          </button>
          <button onClick={() => onScheduleTypeChange("scheduled")}
            style={{
              flex: 1, padding: "10px", borderRadius: 12, fontSize: 13, cursor: "pointer", fontFamily: "Golos Text", fontWeight: 500,
              background: scheduleType === "scheduled" ? "rgba(255,204,0,0.15)" : "var(--taxi-surface)",
              border: `1.5px solid ${scheduleType === "scheduled" ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
              color: scheduleType === "scheduled" ? "var(--taxi-yellow)" : "var(--taxi-muted)",
            }}>
            📅 Предварительный
          </button>
        </div>
        {scheduleType === "scheduled" && (
          <div style={{ display: "flex", gap: 6, marginTop: 8, alignItems: "center" }}>
            <input className="taxi-input" placeholder="ДД" maxLength={2} value={scheduleDay} onChange={e => onScheduleDayChange(e.target.value.replace(/\D/g, "").slice(0, 2))} style={{ width: 48, textAlign: "center", padding: "10px 6px" }} />
            <span style={{ color: "var(--taxi-muted)", fontWeight: 700 }}>.</span>
            <input className="taxi-input" placeholder="ММ" maxLength={2} value={scheduleMonth} onChange={e => onScheduleMonthChange(e.target.value.replace(/\D/g, "").slice(0, 2))} style={{ width: 48, textAlign: "center", padding: "10px 6px" }} />
            <div style={{ width: 16 }} />
            <input className="taxi-input" placeholder="ЧЧ" maxLength={2} value={scheduleHour} onChange={e => onScheduleHourChange(e.target.value.replace(/\D/g, "").slice(0, 2))} style={{ width: 48, textAlign: "center", padding: "10px 6px" }} />
            <span style={{ color: "var(--taxi-muted)", fontWeight: 700 }}>:</span>
            <input className="taxi-input" placeholder="ММ" maxLength={2} value={scheduleMin} onChange={e => onScheduleMinChange(e.target.value.replace(/\D/g, "").slice(0, 2))} style={{ width: 48, textAlign: "center", padding: "10px 6px" }} />
          </div>
        )}
      </div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 11, color: "var(--taxi-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Оплата (для водителя)</div>
        <div style={{ display: "flex", gap: 6 }}>
          {([{ id: "cash" as const, label: "💵 Наличные" }, { id: "transfer" as const, label: "📱 Перевод" }]).map((pm) => (
            <button key={pm.id} onClick={() => onPaymentMethodChange(pm.id)}
              style={{
                flex: 1, padding: "10px", borderRadius: 12, fontSize: 13, cursor: "pointer", fontFamily: "Golos Text", fontWeight: 500,
                background: paymentMethod === pm.id ? "rgba(255,204,0,0.15)" : "var(--taxi-surface)",
                border: `1.5px solid ${paymentMethod === pm.id ? "var(--taxi-yellow)" : "var(--taxi-border)"}`,
                color: paymentMethod === pm.id ? "var(--taxi-yellow)" : "var(--taxi-muted)",
              }}>
              {pm.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4, padding: "8px 0", borderTop: "1px solid var(--taxi-border)" }}>
        <div style={{ fontSize: 13, color: "var(--taxi-muted)" }}>Предварительная стоимость:</div>
        <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: 20, color: "var(--taxi-yellow)" }}>
          {routeLoading ? "..." : `≈ ${calcPrice()} ₽`}
        </div>
      </div>
      {routeDistanceKm !== null && !isDelivery && !isCargo && (
        <div style={{ fontSize: 11, color: "var(--taxi-muted)", marginBottom: 10, textAlign: "right" }}>
          {routeDistanceKm} км по маршруту
        </div>
      )}

      <button className="btn-yellow" onClick={onConfirmOrder} disabled={!canOrder} style={{ opacity: canOrder ? 1 : 0.5 }}>
        {isDelivery ? "Заказать доставку" : isCargo ? "Заказать грузовое" : "Заказать такси"}
      </button>
    </div>
  );
}
