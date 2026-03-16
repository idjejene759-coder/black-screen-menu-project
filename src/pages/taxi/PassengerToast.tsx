import Icon from "@/components/ui/icon";
import { LOGO_URL } from "./types";

interface PassengerToastProps {
  toast: { text: string; sub?: string } | null;
  onClose: () => void;
}

export default function PassengerToast({ toast, onClose }: PassengerToastProps) {
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
