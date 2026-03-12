import Icon from "@/components/ui/icon";
import { Order, Driver } from "../types";

interface SearchingPanelProps {
  visible: boolean;
  routeLabel: string;
  scheduledAtStr: string | undefined;
  calcPrice: () => number;
  tips: number;
  onTipsChange: (v: number) => void;
  onCancel: () => void;
}

export function SearchingPanel({ visible, routeLabel, scheduledAtStr, calcPrice, tips, onTipsChange, onCancel }: SearchingPanelProps) {
  if (!visible) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, background: "rgba(13,15,20,0.85)", backdropFilter: "blur(4px)" }}>
      <div className="taxi-card" style={{ padding: "var(--page-px)", textAlign: "center", maxWidth: "min(300px, 85vw)" }}>
        <div style={{ fontSize: 12, color: "var(--taxi-muted)", marginBottom: 6 }}>{routeLabel}</div>
        {scheduledAtStr && <div style={{ fontSize: 11, color: "var(--taxi-yellow)", marginBottom: 6 }}>📅 {scheduledAtStr}</div>}
        <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 18, color: "var(--taxi-yellow)", marginBottom: 10 }}>≈ {calcPrice()} ₽</div>
        <div style={{ borderTop: "1px solid var(--taxi-border)", paddingTop: 10 }}>
          <div style={{ fontSize: 11, color: "var(--taxi-muted)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 6 }}>Чаевые для быстрого поиска</div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
            <input type="number" min={0} max={999999} value={tips || ""} onChange={(e) => onTipsChange(Math.min(999999, Math.max(0, parseInt(e.target.value) || 0)))} placeholder="0" className="taxi-input" style={{ width: 90, textAlign: "center", fontFamily: "Montserrat", fontWeight: 700, fontSize: 15 }} />
            <span style={{ fontSize: 14, color: "var(--taxi-muted)" }}>₽</span>
          </div>
          {tips > 0 && <div style={{ fontSize: 12, color: "var(--taxi-green)", marginTop: 4 }}>+{tips} ₽ чаевые</div>}
        </div>
      </div>
      <div style={{ width: 56, height: 56, border: "3px solid var(--taxi-border)", borderTop: "3px solid var(--taxi-yellow)", borderRadius: "50%", animation: "spin-slow 1s linear infinite" }} />
      <div style={{ color: "#F0F2F5", fontFamily: "Montserrat", fontWeight: 600, fontSize: 14 }}>Ищем водителя...</div>
      <button onClick={onCancel} style={{ background: "transparent", border: "1px solid var(--taxi-red)", borderRadius: 12, padding: "10px 24px", color: "var(--taxi-red)", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}>
        Отменить
      </button>
    </div>
  );
}

interface FoundPanelProps {
  visible: boolean;
  assignedDriver: Driver | null | undefined;
  activeOrder: Order | undefined;
  from: string;
  to: string;
  etaMinutes: number;
  currentDistanceKm: number;
  calcPrice: () => number;
  unreadChat: number;
  onOpenChat: () => void;
  onCancel: () => void;
}

export function FoundPanel({ visible, assignedDriver, activeOrder, from, to, etaMinutes, currentDistanceKm, calcPrice, unreadChat, onOpenChat, onCancel }: FoundPanelProps) {
  if (!visible) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }} />
      <div className="animate-fade-slide-up" style={{ background: "var(--taxi-card)", borderRadius: "20px 20px 0 0", padding: "var(--page-px)", borderTop: "1px solid var(--taxi-border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
          <span className="animate-blink" style={{ color: "var(--taxi-green)" }}>●</span>
          <span style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>Водитель найден</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px", background: "var(--taxi-surface)", borderRadius: 14, marginBottom: 12 }}>
          <div style={{ width: 50, height: 50, background: "var(--taxi-yellow)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🚗</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 15, color: "#F0F2F5" }}>{assignedDriver?.name ?? "Водитель"}</div>
            <div style={{ fontSize: 12, color: "var(--taxi-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{assignedDriver?.car ?? ""}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
              <span style={{ color: "var(--taxi-yellow)", fontSize: 12, fontWeight: 700 }}>★ {assignedDriver?.rating ?? "4.8"}</span>
              <span style={{ fontSize: 11, color: "var(--taxi-muted)" }}>{assignedDriver?.tripsCount ?? 0} поездок</span>
            </div>
          </div>
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <div style={{ fontFamily: "Montserrat", fontWeight: 800, fontSize: 22, color: "var(--taxi-yellow)" }}>{activeOrder?.etaMinutes ?? etaMinutes}</div>
            <div style={{ fontSize: 10, color: "var(--taxi-muted)", marginTop: -2 }}>мин</div>
          </div>
        </div>

        <div style={{ padding: "10px 12px", background: "var(--taxi-surface)", borderRadius: 12, marginBottom: 12 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--taxi-border)", paddingTop: 8, marginTop: 4 }}>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-muted)" }}>{currentDistanceKm} км</span>
              {activeOrder?.options.children && <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-yellow)" }}>👶 {activeOrder.options.childrenCount}</span>}
              {activeOrder?.options.luggage && <span style={{ fontSize: 11, padding: "2px 8px", background: "var(--taxi-card)", borderRadius: 6, color: "var(--taxi-yellow)" }}>🧳</span>}
            </div>
            <div style={{ fontFamily: "Montserrat", fontWeight: 700, fontSize: 16, color: "var(--taxi-yellow)" }}>{calcPrice()} ₽</div>
          </div>
        </div>

        {activeOrder?.options.comment && (
          <div style={{ padding: "8px 12px", background: "var(--taxi-surface)", borderRadius: 10, fontSize: 12, color: "var(--taxi-muted)", marginBottom: 12, fontStyle: "italic" }}>
            {activeOrder.options.comment}
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          {assignedDriver?.phone && (
            <a href={`tel:${assignedDriver.phone.replace(/\s/g, "")}`} style={{ width: 48, height: 48, flexShrink: 0, background: "var(--taxi-green)", border: "none", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
              <Icon name="Phone" size={20} color="#fff" />
            </a>
          )}
          <button onClick={onOpenChat} style={{ flex: 1, padding: "13px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, position: "relative" }}>
            <Icon name="MessageCircle" size={16} color="var(--taxi-yellow)" /> Чат
            {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
          </button>
          <button onClick={onCancel} style={{ flex: 1, padding: "13px", background: "transparent", border: "1px solid var(--taxi-red)", borderRadius: 12, color: "var(--taxi-red)", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600 }}>
            Отменить
          </button>
        </div>
      </div>
    </div>
  );
}

interface ArrivedPanelProps {
  visible: boolean;
  assignedDriver: Driver | null | undefined;
  activeOrder: Order | undefined;
  from: string;
  to: string;
  currentDistanceKm: number;
  calcPrice: () => number;
  unreadChat: number;
  onOpenChat: () => void;
}

export function ArrivedPanel({ visible, assignedDriver, activeOrder, from, to, currentDistanceKm, calcPrice, unreadChat, onOpenChat }: ArrivedPanelProps) {
  if (!visible) return null;
  return (
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
          <button onClick={onOpenChat} style={{ flex: 1, padding: "13px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 13, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, position: "relative" }}>
            <Icon name="MessageCircle" size={16} color="var(--taxi-yellow)" /> Написать водителю
            {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

interface InProgressPanelProps {
  visible: boolean;
  assignedDriver: Driver | null | undefined;
  activeOrder: Order | undefined;
  routeLabel: string;
  calcPrice: () => number;
  unreadChat: number;
  onOpenChat: () => void;
}

export function InProgressPanel({ visible, assignedDriver, activeOrder, routeLabel, calcPrice, unreadChat, onOpenChat }: InProgressPanelProps) {
  if (!visible) return null;
  return (
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
          <button onClick={onOpenChat} style={{ flex: 1, padding: "11px", background: "var(--taxi-surface)", border: "1px solid var(--taxi-border)", borderRadius: 12, color: "#F0F2F5", fontSize: 12, cursor: "pointer", fontFamily: "Montserrat", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, position: "relative" }}>
            <Icon name="MessageCircle" size={15} color="var(--taxi-yellow)" /> Чат
            {unreadChat > 0 && <span style={{ position: "absolute", top: -6, right: -6, minWidth: 18, height: 18, background: "var(--taxi-red)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff", fontWeight: 700, padding: "0 4px" }}>{unreadChat}</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
