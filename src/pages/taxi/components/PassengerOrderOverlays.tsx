import Icon from "@/components/ui/icon";
import { Driver, LOGO_URL } from "../types";

interface ToastProps {
  toast: { text: string; sub?: string } | null;
  onClose: () => void;
}

export function ToastOverlay({ toast, onClose }: ToastProps) {
  if (!toast) return null;
  return (
    <div style={{
      position: "absolute", top: 16, left: 12, right: 12, zIndex: 200,
      background: "#1C1F2A", border: "1px solid var(--taxi-yellow)",
      borderRadius: 16, padding: "12px 14px",
      display: "flex", alignItems: "center", gap: 10,
      boxShadow: "0 8px 32px rgba(0,0,0,0.5)", animation: "fade-slide-up 0.3s ease",
    }}>
      <img src={LOGO_URL} alt="" style={{ width: 32, height: 32, borderRadius: 8, objectFit: "cover" }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 13, color: "#F0F2F5" }}>{toast.text}</div>
        {toast.sub && <div style={{ fontSize: 11, color: "var(--taxi-muted)", marginTop: 1 }}>{toast.sub}</div>}
      </div>
      <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--taxi-muted)", cursor: "pointer", padding: 4 }}>
        <Icon name="X" size={14} />
      </button>
    </div>
  );
}

interface ConfirmDialogProps {
  confirmAction: { type: string; action: () => void } | null;
  routeLabel: string;
  routeDistanceKm: number | null;
  calcPrice: () => number;
  onClose: () => void;
}

export function ConfirmDialog({ confirmAction, routeLabel, routeDistanceKm, calcPrice, onClose }: ConfirmDialogProps) {
  if (!confirmAction) return null;
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 250, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--page-px)" }}>
      <div className="taxi-card animate-fade-slide-up" style={{ maxWidth: 320, width: "100%", textAlign: "center" }}>
        <div style={{ fontSize: 28, marginBottom: 10 }}>
          {confirmAction.type === "cancel" ? "\u26A0\uFE0F" : "\uD83D\uDE96"}
        </div>
        <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 16, color: "#F0F2F5", marginBottom: 6 }}>
          {confirmAction.type === "cancel" ? "Отменить заказ?" : confirmAction.type === "order" ? "Подтвердить заказ?" : "Подтвердить?"}
        </div>
        <div style={{ fontSize: 13, color: "var(--taxi-muted)", marginBottom: 16, lineHeight: 1.5 }}>
          {confirmAction.type === "cancel" ? "Вы уверены, что хотите отменить заказ?" : confirmAction.type === "order" ? `Маршрут: ${routeLabel}${routeDistanceKm !== null ? ` (${routeDistanceKm} км)` : ""}\nСтоимость: ≈ ${calcPrice()} ₽` : "Подтвердите действие"}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={onClose}
            style={{ flex: 1, padding: "12px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "var(--taxi-muted)", fontSize: 14, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}
          >
            Назад
          </button>
          <button
            onClick={() => { confirmAction.action(); onClose(); }}
            style={{ flex: 1, padding: "12px", background: confirmAction.type === "cancel" ? "rgba(239,68,68,0.2)" : "var(--taxi-yellow)", border: confirmAction.type === "cancel" ? "1px solid rgba(239,68,68,0.4)" : "none", borderRadius: 12, color: confirmAction.type === "cancel" ? "var(--taxi-red)" : "var(--taxi-dark)", fontSize: 14, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 700 }}
          >
            {confirmAction.type === "cancel" ? "Отменить" : "Да, заказать"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface ChatOverlayProps {
  chatOpen: boolean;
  chatMessages: { from: string; text: string }[];
  chatInput: string;
  assignedDriver: Driver | null | undefined;
  onClose: () => void;
  onInputChange: (v: string) => void;
  onSend: () => void;
}

export function ChatOverlay({ chatOpen, chatMessages, chatInput, assignedDriver, onClose, onInputChange, onSend }: ChatOverlayProps) {
  if (!chatOpen) return null;
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 300, background: "var(--taxi-dark)", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "14px var(--page-px)", borderBottom: "1px solid var(--taxi-border)", display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--taxi-yellow)" }}>
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
        <input className="taxi-input" placeholder="Сообщение..." value={chatInput} onChange={e => onInputChange(e.target.value)} onKeyDown={e => e.key === "Enter" && onSend()} style={{ flex: 1 }} />
        <button onClick={onSend} style={{ width: 48, height: 48, background: "var(--taxi-yellow)", border: "none", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icon name="Send" size={18} color="var(--taxi-dark)" fallback="ArrowRight" />
        </button>
      </div>
    </div>
  );
}

interface RatingScreenProps {
  visible: boolean;
  assignedDriver: Driver | null | undefined;
  hoverStar: number;
  selectedStar: number;
  onHoverStar: (s: number) => void;
  onSelectStar: (s: number) => void;
  onRate: (s: number) => void;
}

export function RatingScreen({ visible, assignedDriver, hoverStar, selectedStar, onHoverStar, onSelectStar, onRate }: RatingScreenProps) {
  if (!visible) return null;
  return (
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
            onMouseEnter={() => onHoverStar(star)} onMouseLeave={() => onHoverStar(0)}
            onClick={() => onSelectStar(star)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "var(--star-size)", transition: "transform 0.15s", transform: (hoverStar >= star || selectedStar >= star) ? "scale(1.15)" : "scale(1)", filter: (hoverStar >= star || selectedStar >= star) ? "none" : "grayscale(1) opacity(0.3)" }}>
            ⭐
          </button>
        ))}
      </div>
      <button className="btn-yellow" onClick={() => onRate(selectedStar || 5)} style={{ maxWidth: 280, width: "100%" }}>
        {selectedStar > 0 ? `Оценить на ${selectedStar} ★` : "Пропустить"}
      </button>
    </div>
  );
}
