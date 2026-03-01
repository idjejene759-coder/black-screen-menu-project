import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ADMIN_URL = "https://functions.poehali.dev/6eb840f4-abc2-453e-a7d9-5f9a989722bf";
const WITHDRAWAL_URL = "https://functions.poehali.dev/9cfe3eb3-a1dd-4e28-806b-4476909e4725";
const VOUCHER_URL = "https://functions.poehali.dev/67465d27-c387-428b-a82c-c47b677094b2";

const ROLE_OWNER = 0;
const ROLE_CHIEF = 1;
const ROLE_ADMIN = 2;
const ROLE_TECH = 3;

const ROLE_NAMES: Record<number, string> = {
  [ROLE_OWNER]: "Владелец",
  [ROLE_CHIEF]: "Гл.Администратор",
  [ROLE_ADMIN]: "Администратор",
  [ROLE_TECH]: "Тех.Специалист",
};

const ROLE_COLORS: Record<number, { bg: string; text: string; border: string }> = {
  [ROLE_OWNER]: { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/30" },
  [ROLE_CHIEF]: { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/30" },
  [ROLE_ADMIN]: { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/30" },
  [ROLE_TECH]: { bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/30" },
};

interface Player {
  id: number;
  display_id: number;
  name: string;
  telegram_id: string;
  is_blocked: boolean;
  created_at: string | null;
  balance: number;
}

interface Stats {
  total_users: number;
  blocked_users: number;
  total_balance: number;
  total_payments: number;
}

interface AdminUser {
  id: number;
  display_id: number;
  role: number;
  role_name: string;
  created_at: string | null;
  custom_name: string;
  user_name: string;
  telegram_id: string;
}

interface Withdrawal {
  id: number;
  user_id: number;
  display_id: number;
  user_name: string;
  network: string;
  address: string;
  amount: number;
  status: string;
  created_at: string | null;
  processed_at: string | null;
}

interface Voucher {
  id: number;
  code: string;
  amount: number;
  is_active: boolean;
  used_by: number | null;
  used_at: string | null;
  created_at: string | null;
}

interface AdminPanelProps {
  adminDisplayId: string | number;
  adminRole: number;
  onClose: () => void;
}

type Screen = "home" | "players" | "stats" | "admins" | "withdrawals" | "vouchers";

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "2-digit" });
}

export default function AdminPanel({ adminDisplayId, adminRole, onClose }: AdminPanelProps) {
  const [screen, setScreen] = useState<Screen>("home");

  const [players, setPlayers] = useState<Player[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [newBalance, setNewBalance] = useState("");
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [addAdminOpen, setAddAdminOpen] = useState(false);
  const [addAdminId, setAddAdminId] = useState("");
  const [addAdminRole, setAddAdminRole] = useState(ROLE_ADMIN);
  const [addAdminError, setAddAdminError] = useState("");
  const [addAdminLoading, setAddAdminLoading] = useState(false);
  const [changeRoleAdmin, setChangeRoleAdmin] = useState<AdminUser | null>(null);
  const [changeRoleValue, setChangeRoleValue] = useState(ROLE_ADMIN);
  const [withdrawals, setWithdrawals] = useState<Withdrawal[]>([]);
  const [withdrawalsLoading, setWithdrawalsLoading] = useState(false);
  const [wdFilter, setWdFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [vouchersLoading, setVouchersLoading] = useState(false);
  const [voucherModalOpen, setVoucherModalOpen] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherAmount, setVoucherAmount] = useState("");
  const [voucherCreating, setVoucherCreating] = useState(false);
  const [voucherError, setVoucherError] = useState("");
  const [pendingCount, setPendingCount] = useState(0);

  const canManagePlayers = adminRole <= ROLE_ADMIN;
  const canManageAdmins = adminRole <= ROLE_CHIEF;
  const isOwner = adminRole === ROLE_OWNER;

  // Загрузка кол-ва ожидающих выводов для бейджа на главном экране
  const fetchPendingCount = useCallback(async () => {
    if (!canManagePlayers) return;
    try {
      const res = await fetch(`${WITHDRAWAL_URL}?action=list&status=pending`);
      const data = await res.json();
      if (res.ok) setPendingCount((data.withdrawals || []).length);
    } catch { /* */ }
  }, [canManagePlayers]);

  useEffect(() => { fetchPendingCount(); }, [fetchPendingCount]);

  const fetchPlayers = useCallback(async (q = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ action: "players", admin_id: String(adminDisplayId) });
      if (q) params.set("search", q);
      const res = await fetch(`${ADMIN_URL}?${params}`);
      const data = await res.json();
      if (res.ok) setPlayers(data.players || []);
    } catch { /* */ }
    setLoading(false);
  }, [adminDisplayId]);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${ADMIN_URL}?action=stats&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setStats(data);
    } catch { /* */ }
    setLoading(false);
  }, [adminDisplayId]);

  const fetchAdmins = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${ADMIN_URL}?action=list_admins&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setAdmins(data.admins || []);
    } catch { /* */ }
    setLoading(false);
  }, [adminDisplayId]);

  const fetchWithdrawals = useCallback(async (status = "pending") => {
    setWithdrawalsLoading(true);
    try {
      const res = await fetch(`${WITHDRAWAL_URL}?action=list&status=${status}`);
      const data = await res.json();
      if (res.ok) setWithdrawals(data.withdrawals || []);
    } catch { /* */ }
    setWithdrawalsLoading(false);
  }, []);

  const fetchVouchers = useCallback(async () => {
    setVouchersLoading(true);
    try {
      const res = await fetch(`${VOUCHER_URL}?action=list&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setVouchers(data.vouchers || []);
    } catch { /* */ }
    setVouchersLoading(false);
  }, [adminDisplayId]);

  const goTo = (s: Screen) => {
    setScreen(s);
    if (s === "players") fetchPlayers();
    if (s === "stats") fetchStats();
    if (s === "admins") fetchAdmins();
    if (s === "withdrawals") fetchWithdrawals("pending");
    if (s === "vouchers") fetchVouchers();
  };

  const goBack = () => setScreen("home");

  const handleBlock = async (player: Player) => {
    setActionLoading(player.id);
    try {
      await fetch(`${ADMIN_URL}?action=block`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), user_id: String(player.id) }) });
      await fetchPlayers(search);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleUnblock = async (player: Player) => {
    setActionLoading(player.id);
    try {
      await fetch(`${ADMIN_URL}?action=unblock`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), user_id: String(player.id) }) });
      await fetchPlayers(search);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleSetBalance = async () => {
    if (!editingPlayer || newBalance === "") return;
    setActionLoading(editingPlayer.id);
    try {
      await fetch(`${ADMIN_URL}?action=set_balance`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), user_id: String(editingPlayer.id), balance: parseFloat(newBalance) }) });
      await fetchPlayers(search);
      setEditingPlayer(null);
      setNewBalance("");
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleAddAdmin = async () => {
    if (!addAdminId.trim()) { setAddAdminError("Введите ID игрока"); return; }
    setAddAdminError("");
    setAddAdminLoading(true);
    try {
      const res = await fetch(`${ADMIN_URL}?action=add_admin`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), display_id: parseInt(addAdminId.trim()), role: addAdminRole }) });
      const data = await res.json();
      if (!res.ok) { setAddAdminError(data.error || "Ошибка"); setAddAdminLoading(false); return; }
      await fetchAdmins();
      setAddAdminOpen(false);
      setAddAdminId("");
      setAddAdminRole(ROLE_ADMIN);
    } catch { setAddAdminError("Ошибка соединения"); }
    setAddAdminLoading(false);
  };

  const handleRemoveAdmin = async (admin: AdminUser) => {
    setActionLoading(admin.id);
    try {
      await fetch(`${ADMIN_URL}?action=remove_admin`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), display_id: admin.display_id }) });
      await fetchAdmins();
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleChangeRole = async () => {
    if (!changeRoleAdmin) return;
    setActionLoading(changeRoleAdmin.id);
    try {
      await fetch(`${ADMIN_URL}?action=change_role`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), display_id: changeRoleAdmin.display_id, role: changeRoleValue }) });
      await fetchAdmins();
      setChangeRoleAdmin(null);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleApproveWithdrawal = async (w: Withdrawal) => {
    setActionLoading(w.id);
    try {
      await fetch(`${WITHDRAWAL_URL}?action=approve`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ withdrawal_id: w.id, admin_id: String(adminDisplayId) }) });
      await fetchWithdrawals(wdFilter);
      fetchPendingCount();
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleRejectWithdrawal = async (w: Withdrawal) => {
    setActionLoading(w.id);
    try {
      await fetch(`${WITHDRAWAL_URL}?action=reject`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ withdrawal_id: w.id, admin_id: String(adminDisplayId) }) });
      await fetchWithdrawals(wdFilter);
      fetchPendingCount();
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleCreateVoucher = async () => {
    if (!voucherAmount) { setVoucherError("Укажите сумму"); return; }
    setVoucherError("");
    setVoucherCreating(true);
    try {
      const res = await fetch(`${VOUCHER_URL}?action=create`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), code: voucherCode.trim().toUpperCase() || undefined, amount: parseFloat(voucherAmount) }) });
      const data = await res.json();
      if (!res.ok) { setVoucherError(data.error || "Ошибка"); setVoucherCreating(false); return; }
      await fetchVouchers();
      setVoucherModalOpen(false);
      setVoucherCode("");
      setVoucherAmount("");
    } catch { setVoucherError("Ошибка соединения"); }
    setVoucherCreating(false);
  };

  const handleDeactivateVoucher = async (v: Voucher) => {
    setActionLoading(v.id);
    try {
      await fetch(`${VOUCHER_URL}?action=deactivate`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ admin_id: String(adminDisplayId), voucher_id: v.id }) });
      await fetchVouchers();
    } catch { /* */ }
    setActionLoading(null);
  };

  const roleOptions = [
    { role: ROLE_CHIEF, label: "Гл.Администратор" },
    { role: ROLE_ADMIN, label: "Администратор" },
    { role: ROLE_TECH, label: "Тех.Специалист" },
  ];

  const roleDotColor = (role: number) =>
    role === ROLE_OWNER ? "rgb(192 132 252)" : role === ROLE_CHIEF ? "rgb(248 113 113)" : role === ROLE_ADMIN ? "rgb(96 165 250)" : "rgb(250 204 21)";

  // ── Шапка с кнопкой Назад ──────────────────────────────────────────────────
  const Header = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 px-4 pt-5 pb-4 border-b border-white/[0.06]">
      <button
        onClick={goBack}
        className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center active:bg-white/10 transition-colors shrink-0"
      >
        <Icon name="ChevronLeft" size={18} className="text-white/60" />
      </button>
      <h2 className="text-white font-bold text-[18px]">{title}</h2>
    </div>
  );

  // ── Спиннер ────────────────────────────────────────────────────────────────
  const Spinner = () => (
    <div className="flex items-center justify-center h-48">
      <Icon name="Loader2" size={30} className="text-[#4ade80] animate-spin" />
    </div>
  );

  // ══════════════════════════════════════════════════════════════════════════
  // ГЛАВНЫЙ ЭКРАН — плитки разделов
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "home") {
    const tiles = [
      { id: "players" as Screen, icon: "Users", label: "Игроки", desc: "Управление аккаунтами", color: "text-[#4ade80]", bg: "bg-[#4ade80]/10", show: canManagePlayers },
      { id: "stats" as Screen, icon: "BarChart3", label: "Аналитика", desc: "Статистика платформы", color: "text-blue-400", bg: "bg-blue-500/10", show: true },
      { id: "admins" as Screen, icon: "ShieldCheck", label: "Админы", desc: "Управление командой", color: "text-purple-400", bg: "bg-purple-500/10", show: canManagePlayers },
      { id: "withdrawals" as Screen, icon: "ArrowUpRight", label: "Выводы", desc: "Заявки на вывод", color: "text-yellow-400", bg: "bg-yellow-500/10", badge: pendingCount, show: canManagePlayers },
      { id: "vouchers" as Screen, icon: "Ticket", label: "Ваучеры", desc: "Промокоды с балансом", color: "text-pink-400", bg: "bg-pink-500/10", show: canManagePlayers },
    ].filter(t => t.show);

    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        {/* Шапка */}
        <div className="flex items-center justify-between px-4 pt-5 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#4ade80]/12 flex items-center justify-center">
              <Icon name="Shield" size={18} className="text-[#4ade80]" />
            </div>
            <div>
              <div className="text-white font-bold text-[16px] leading-tight">Админ-панель</div>
              <div className="text-white/30 text-[11px]">{ROLE_NAMES[adminRole]}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center active:bg-white/10 transition-colors"
          >
            <Icon name="X" size={17} className="text-white/50" />
          </button>
        </div>

        {/* Плитки */}
        <div className="flex-1 overflow-y-auto px-4 pb-8">
          <div className="grid grid-cols-2 gap-3 pt-1">
            {tiles.map((t) => (
              <button
                key={t.id}
                onClick={() => goTo(t.id)}
                className="relative bg-white/[0.04] border border-white/[0.07] rounded-2xl p-4 text-left active:bg-white/[0.07] transition-colors"
              >
                {t.badge !== undefined && t.badge > 0 && (
                  <span className="absolute top-3 right-3 min-w-[20px] h-5 bg-red-500 rounded-full text-[10px] text-white font-bold flex items-center justify-center px-1">
                    {t.badge}
                  </span>
                )}
                <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center mb-3`}>
                  <Icon name={t.icon} size={20} className={t.color} />
                </div>
                <div className="text-white font-bold text-[15px] leading-tight mb-0.5">{t.label}</div>
                <div className="text-white/30 text-[12px]">{t.desc}</div>
                <div className="absolute bottom-4 right-4">
                  <Icon name="ChevronRight" size={14} className="text-white/15" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // ИГРОКИ
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "players") {
    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        <Header title="Игроки" />

        {/* Поиск */}
        <div className="px-4 py-3">
          <div className="flex gap-2">
            <div className="flex-1 flex items-center bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 gap-2">
              <Icon name="Search" size={15} className="text-white/25 shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchPlayers(search)}
                placeholder="ID, имя или Telegram..."
                className="bg-transparent text-white text-[14px] py-3 outline-none w-full placeholder:text-white/20"
              />
            </div>
            <button
              onClick={() => fetchPlayers(search)}
              className="bg-[#4ade80] text-black font-semibold text-[13px] rounded-xl px-4 active:bg-[#3ecb6e] transition-colors"
            >
              <Icon name="Search" size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {loading ? <Spinner /> : players.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40">
              <Icon name="UserX" size={44} className="text-white/10 mb-3" />
              <span className="text-white/30 text-[14px]">Игроки не найдены</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {players.map((p) => (
                <div key={p.id} className={`bg-white/[0.04] border rounded-2xl px-4 py-3.5 ${p.is_blocked ? "border-red-500/20" : "border-white/[0.07]"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${p.is_blocked ? "bg-red-500/10" : "bg-[#4ade80]/8"}`}>
                      <Icon name={p.is_blocked ? "Ban" : "User"} size={16} className={p.is_blocked ? "text-red-400" : "text-[#4ade80]/60"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-white font-semibold text-[14px] truncate">{p.name || "Без имени"}</span>
                        {p.is_blocked && <span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded-full shrink-0">Блок</span>}
                      </div>
                      <div className="text-white/30 text-[11px]">ID: {p.display_id} · TG: {p.telegram_id || "—"}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-[#4ade80] font-bold text-[14px]">{p.balance.toFixed(2)}</div>
                      <div className="text-white/20 text-[10px]">USDT</div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => { setEditingPlayer(p); setNewBalance(String(p.balance)); }}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-blue-500/10 text-blue-400 text-[12px] font-semibold rounded-xl py-2 active:bg-blue-500/20 transition-colors"
                    >
                      <Icon name="Pencil" size={13} />
                      Баланс
                    </button>
                    {p.is_blocked ? (
                      <button
                        onClick={() => handleUnblock(p)}
                        disabled={actionLoading === p.id}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#4ade80]/10 text-[#4ade80] text-[12px] font-semibold rounded-xl py-2 active:bg-[#4ade80]/20 transition-colors disabled:opacity-40"
                      >
                        {actionLoading === p.id ? <Icon name="Loader2" size={13} className="animate-spin" /> : <Icon name="Unlock" size={13} />}
                        Разблок
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlock(p)}
                        disabled={actionLoading === p.id}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/10 text-red-400 text-[12px] font-semibold rounded-xl py-2 active:bg-red-500/20 transition-colors disabled:opacity-40"
                      >
                        {actionLoading === p.id ? <Icon name="Loader2" size={13} className="animate-spin" /> : <Icon name="Ban" size={13} />}
                        Блок
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Модал: баланс */}
        {editingPlayer && (
          <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/60">
            <div className="bg-[#111] border border-white/[0.08] rounded-t-3xl p-5 w-full">
              <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-5" />
              <h3 className="text-white font-bold text-[16px] mb-1">Изменить баланс</h3>
              <p className="text-white/35 text-[12px] mb-4">{editingPlayer.name || "Игрок"} · ID {editingPlayer.display_id}</p>
              <input
                type="number"
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
                placeholder="Новый баланс USDT"
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-[15px] outline-none focus:border-[#4ade80]/40 mb-4 placeholder:text-white/20"
              />
              <div className="flex gap-2">
                <button onClick={() => setEditingPlayer(null)} className="flex-1 bg-white/[0.06] text-white/50 font-semibold text-[14px] rounded-xl py-3">Отмена</button>
                <button onClick={handleSetBalance} disabled={actionLoading === editingPlayer.id} className="flex-1 bg-[#4ade80] text-black font-bold text-[14px] rounded-xl py-3 disabled:opacity-50">
                  {actionLoading === editingPlayer.id ? "..." : "Сохранить"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // АНАЛИТИКА
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "stats") {
    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        <Header title="Аналитика" />
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {loading || !stats ? <Spinner /> : (
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Игроков", value: stats.total_users, icon: "Users", color: "text-[#4ade80]", bg: "bg-[#4ade80]/10", border: "border-[#4ade80]/15" },
                { label: "Заблокировано", value: stats.blocked_users, icon: "Ban", color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/15" },
                { label: "Общий баланс", value: `${stats.total_balance.toFixed(2)} USDT`, icon: "Wallet", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/15" },
                { label: "Платежей", value: stats.total_payments, icon: "CreditCard", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/15" },
              ].map((item) => (
                <div key={item.label} className={`bg-white/[0.03] border ${item.border} rounded-2xl p-4`}>
                  <div className={`w-9 h-9 rounded-xl ${item.bg} flex items-center justify-center mb-3`}>
                    <Icon name={item.icon} size={18} className={item.color} />
                  </div>
                  <div className="text-white/40 text-[11px] mb-1">{item.label}</div>
                  <div className={`font-bold text-[22px] leading-tight ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // АДМИНЫ
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "admins") {
    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-4 pt-5 pb-4 border-b border-white/[0.06]">
          <button onClick={goBack} className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center active:bg-white/10 transition-colors shrink-0">
            <Icon name="ChevronLeft" size={18} className="text-white/60" />
          </button>
          <h2 className="text-white font-bold text-[18px] flex-1">Админы</h2>
          {canManageAdmins && (
            <button
              onClick={() => setAddAdminOpen(true)}
              className="flex items-center gap-1.5 bg-[#4ade80] text-black font-semibold text-[12px] rounded-xl px-3 py-2 active:bg-[#3ecb6e] transition-colors"
            >
              <Icon name="Plus" size={14} />
              Добавить
            </button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {loading ? <Spinner /> : admins.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40">
              <Icon name="ShieldOff" size={44} className="text-white/10 mb-3" />
              <span className="text-white/30 text-[14px]">Нет администраторов</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {admins.map((a) => {
                const rc = ROLE_COLORS[a.role] || ROLE_COLORS[ROLE_TECH];
                const isMe = a.display_id === Number(adminDisplayId);
                return (
                  <div key={a.id} className={`bg-white/[0.04] border ${rc.border} rounded-2xl px-4 py-3.5`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${rc.bg}`}>
                        <Icon name="Shield" size={16} className={rc.text} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-white font-semibold text-[14px] truncate">{a.user_name || a.custom_name || "Администратор"}</span>
                          {isMe && <span className="text-[10px] text-white/25 bg-white/5 px-1.5 py-0.5 rounded-full">Вы</span>}
                        </div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className={`text-[11px] font-semibold ${rc.text}`}>{ROLE_NAMES[a.role]}</span>
                          <span className="text-white/20 text-[11px]">· ID {a.display_id}</span>
                        </div>
                      </div>
                    </div>
                    {!isMe && canManageAdmins && a.role > adminRole && (
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => { setChangeRoleAdmin(a); setChangeRoleValue(a.role); }}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-blue-500/10 text-blue-400 text-[12px] font-semibold rounded-xl py-2 active:bg-blue-500/20 transition-colors"
                        >
                          <Icon name="Pencil" size={13} />
                          Роль
                        </button>
                        <button
                          onClick={() => handleRemoveAdmin(a)}
                          disabled={actionLoading === a.id}
                          className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/10 text-red-400 text-[12px] font-semibold rounded-xl py-2 active:bg-red-500/20 transition-colors disabled:opacity-40"
                        >
                          {actionLoading === a.id ? <Icon name="Loader2" size={13} className="animate-spin" /> : <Icon name="Trash2" size={13} />}
                          Удалить
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Модал: добавить */}
        {addAdminOpen && (
          <div className="fixed inset-0 z-[70] flex items-end bg-black/60">
            <div className="bg-[#111] border border-white/[0.08] rounded-t-3xl p-5 w-full">
              <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-5" />
              <h3 className="text-white font-bold text-[16px] mb-4">Добавить администратора</h3>
              <input
                type="number"
                value={addAdminId}
                onChange={(e) => setAddAdminId(e.target.value)}
                placeholder="ID игрока"
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-[15px] outline-none focus:border-[#4ade80]/40 mb-3 placeholder:text-white/20"
              />
              <div className="flex flex-col gap-1.5 mb-4">
                {roleOptions.map((r) => {
                  if (!isOwner && r.role === ROLE_CHIEF) return null;
                  const rc = ROLE_COLORS[r.role];
                  return (
                    <button key={r.role} onClick={() => setAddAdminRole(r.role)} className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors text-left ${addAdminRole === r.role ? `${rc.border} ${rc.bg}` : "border-white/[0.05] bg-white/[0.02]"}`}>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${addAdminRole === r.role ? rc.border : "border-white/20"}`}>
                        {addAdminRole === r.role && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: roleDotColor(r.role) }} />}
                      </div>
                      <span className={`text-[13px] font-semibold ${addAdminRole === r.role ? rc.text : "text-white/50"}`}>{r.label}</span>
                    </button>
                  );
                })}
              </div>
              {addAdminError && <div className="text-red-400 text-[12px] mb-3">{addAdminError}</div>}
              <div className="flex gap-2">
                <button onClick={() => { setAddAdminOpen(false); setAddAdminError(""); }} className="flex-1 bg-white/[0.06] text-white/50 font-semibold text-[14px] rounded-xl py-3">Отмена</button>
                <button onClick={handleAddAdmin} disabled={addAdminLoading} className="flex-1 bg-[#4ade80] text-black font-bold text-[14px] rounded-xl py-3 disabled:opacity-50">
                  {addAdminLoading ? "..." : "Добавить"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Модал: изменить роль */}
        {changeRoleAdmin && (
          <div className="fixed inset-0 z-[70] flex items-end bg-black/60">
            <div className="bg-[#111] border border-white/[0.08] rounded-t-3xl p-5 w-full">
              <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-5" />
              <h3 className="text-white font-bold text-[16px] mb-1">Изменить роль</h3>
              <p className="text-white/35 text-[12px] mb-4">{changeRoleAdmin.user_name || "Админ"} · ID {changeRoleAdmin.display_id}</p>
              <div className="flex flex-col gap-1.5 mb-4">
                {roleOptions.map((r) => {
                  const rc = ROLE_COLORS[r.role];
                  return (
                    <button key={r.role} onClick={() => setChangeRoleValue(r.role)} className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-colors text-left ${changeRoleValue === r.role ? `${rc.border} ${rc.bg}` : "border-white/[0.05] bg-white/[0.02]"}`}>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${changeRoleValue === r.role ? rc.border : "border-white/20"}`}>
                        {changeRoleValue === r.role && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: roleDotColor(r.role) }} />}
                      </div>
                      <span className={`text-[13px] font-semibold ${changeRoleValue === r.role ? rc.text : "text-white/50"}`}>{r.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setChangeRoleAdmin(null)} className="flex-1 bg-white/[0.06] text-white/50 font-semibold text-[14px] rounded-xl py-3">Отмена</button>
                <button onClick={handleChangeRole} disabled={actionLoading === changeRoleAdmin.id} className="flex-1 bg-[#4ade80] text-black font-bold text-[14px] rounded-xl py-3 disabled:opacity-50">
                  {actionLoading === changeRoleAdmin.id ? "..." : "Сохранить"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // ВЫВОДЫ
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "withdrawals") {
    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        <Header title="Выводы" />

        {/* Фильтры */}
        <div className="px-4 pt-3 pb-2 flex gap-1.5 overflow-x-auto scrollbar-none">
          {(["pending", "approved", "rejected", "all"] as const).map((f) => {
            const labels = { pending: "Ожидают", approved: "Одобрены", rejected: "Отклонены", all: "Все" };
            return (
              <button
                key={f}
                onClick={() => { setWdFilter(f); fetchWithdrawals(f); }}
                className={`shrink-0 px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors ${wdFilter === f ? "bg-[#4ade80] text-black" : "bg-white/[0.05] text-white/40"}`}
              >
                {labels[f]}
                {f === "pending" && pendingCount > 0 && (
                  <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${wdFilter === "pending" ? "bg-black/20 text-black" : "bg-red-500 text-white"}`}>{pendingCount}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {withdrawalsLoading ? <Spinner /> : withdrawals.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40">
              <Icon name="Inbox" size={44} className="text-white/10 mb-3" />
              <span className="text-white/30 text-[14px]">Заявок нет</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              {withdrawals.map((w) => (
                <div key={w.id} className={`bg-white/[0.04] border rounded-2xl px-4 py-3.5 ${w.status === "pending" ? "border-yellow-500/20" : w.status === "approved" ? "border-[#4ade80]/15" : "border-white/[0.07]"}`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-white font-semibold text-[14px]">{w.user_name || "Игрок"}</span>
                        <span className="text-[10px] font-mono text-white/30 bg-white/[0.05] px-1.5 py-0.5 rounded-full">{w.network}</span>
                        {w.status === "pending" && <span className="text-[10px] text-yellow-400 bg-yellow-500/10 px-1.5 py-0.5 rounded-full">Ожидает</span>}
                        {w.status === "approved" && <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-1.5 py-0.5 rounded-full">Одобрен</span>}
                        {w.status === "rejected" && <span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded-full">Отклонён</span>}
                      </div>
                      <div className="text-white/20 text-[11px] font-mono truncate">{w.address}</div>
                      <div className="text-white/20 text-[11px] mt-0.5">ID: {w.display_id} · {formatDate(w.created_at)}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-yellow-400 font-bold text-[16px]">{w.amount.toFixed(2)}</div>
                      <div className="text-white/20 text-[10px]">USDT</div>
                    </div>
                  </div>
                  {w.status === "pending" && (
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleApproveWithdrawal(w)}
                        disabled={actionLoading === w.id}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#4ade80]/10 text-[#4ade80] text-[12px] font-semibold rounded-xl py-2.5 active:bg-[#4ade80]/20 transition-colors disabled:opacity-40"
                      >
                        {actionLoading === w.id ? <Icon name="Loader2" size={13} className="animate-spin" /> : <Icon name="Check" size={13} />}
                        Одобрить
                      </button>
                      <button
                        onClick={() => handleRejectWithdrawal(w)}
                        disabled={actionLoading === w.id}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-red-500/10 text-red-400 text-[12px] font-semibold rounded-xl py-2.5 active:bg-red-500/20 transition-colors disabled:opacity-40"
                      >
                        <Icon name="X" size={13} />
                        Отклонить
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════
  // ВАУЧЕРЫ
  // ══════════════════════════════════════════════════════════════════════════
  if (screen === "vouchers") {
    return (
      <div className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-4 pt-5 pb-4 border-b border-white/[0.06]">
          <button onClick={goBack} className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center active:bg-white/10 transition-colors shrink-0">
            <Icon name="ChevronLeft" size={18} className="text-white/60" />
          </button>
          <h2 className="text-white font-bold text-[18px] flex-1">Ваучеры</h2>
          <button
            onClick={() => { setVoucherModalOpen(true); setVoucherCode(""); setVoucherAmount(""); setVoucherError(""); }}
            className="flex items-center gap-1.5 bg-[#4ade80] text-black font-semibold text-[12px] rounded-xl px-3 py-2 active:bg-[#3ecb6e] transition-colors"
          >
            <Icon name="Plus" size={14} />
            Создать
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {vouchersLoading ? <Spinner /> : vouchers.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40">
              <Icon name="Ticket" size={44} className="text-white/10 mb-3" />
              <span className="text-white/30 text-[14px]">Ваучеров нет</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {vouchers.map((v) => (
                <div key={v.id} className={`bg-white/[0.04] border rounded-2xl px-4 py-3.5 ${v.is_active ? "border-[#4ade80]/15" : "border-white/[0.06]"}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${v.is_active ? "bg-[#4ade80]/10" : "bg-white/[0.04]"}`}>
                      <Icon name="Ticket" size={17} className={v.is_active ? "text-[#4ade80]" : "text-white/20"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-bold text-white text-[14px] tracking-widest">{v.code}</span>
                        {v.is_active
                          ? <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-1.5 py-0.5 rounded-full">Активен</span>
                          : <span className="text-[10px] text-white/25 bg-white/[0.05] px-1.5 py-0.5 rounded-full">Использован</span>}
                      </div>
                      <div className="text-white/25 text-[11px] mt-0.5">
                        {v.used_by ? `Активирован · ${formatDate(v.used_at)}` : `Создан · ${formatDate(v.created_at)}`}
                      </div>
                    </div>
                    <div className="text-right shrink-0 flex items-center gap-2">
                      <div>
                        <div className="text-[#4ade80] font-bold text-[15px]">{v.amount.toFixed(2)}</div>
                        <div className="text-white/20 text-[10px]">USDT</div>
                      </div>
                      {v.is_active && (
                        <button
                          onClick={() => handleDeactivateVoucher(v)}
                          disabled={actionLoading === v.id}
                          className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center active:bg-red-500/20 transition-colors disabled:opacity-40"
                        >
                          {actionLoading === v.id ? <Icon name="Loader2" size={13} className="text-red-400 animate-spin" /> : <Icon name="X" size={13} className="text-red-400" />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Модал: создать ваучер */}
        {voucherModalOpen && (
          <div className="fixed inset-0 z-[70] flex items-end bg-black/60">
            <div className="bg-[#111] border border-white/[0.08] rounded-t-3xl p-5 w-full">
              <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-5" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4ade80]/10 flex items-center justify-center shrink-0">
                  <Icon name="Ticket" size={20} className="text-[#4ade80]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[16px] leading-tight">Создать ваучер</h3>
                  <p className="text-white/30 text-[12px]">Игрок введёт код и получит деньги</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <div>
                  <label className="text-white/35 text-[11px] uppercase tracking-wide mb-1.5 block">Код (необязательно)</label>
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                    placeholder="Авто-генерация"
                    maxLength={20}
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white font-mono text-[15px] tracking-widest outline-none focus:border-[#4ade80]/40 placeholder:font-sans placeholder:tracking-normal placeholder:text-white/15"
                  />
                </div>
                <div>
                  <label className="text-white/35 text-[11px] uppercase tracking-wide mb-1.5 block">Сумма USDT</label>
                  <input
                    type="number"
                    value={voucherAmount}
                    onChange={(e) => setVoucherAmount(e.target.value)}
                    placeholder="Например: 100"
                    min="0.01"
                    step="0.01"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-[15px] outline-none focus:border-[#4ade80]/40 placeholder:text-white/15"
                  />
                </div>
              </div>
              {voucherError && <div className="text-red-400 text-[12px] mb-3">{voucherError}</div>}
              <div className="flex gap-2">
                <button onClick={() => setVoucherModalOpen(false)} className="flex-1 bg-white/[0.06] text-white/50 font-semibold text-[14px] rounded-xl py-3">Отмена</button>
                <button onClick={handleCreateVoucher} disabled={voucherCreating} className="flex-1 bg-[#4ade80] text-black font-bold text-[14px] rounded-xl py-3 disabled:opacity-50">
                  {voucherCreating ? "Создаём..." : "Применить"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
