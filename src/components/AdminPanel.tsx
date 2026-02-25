import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ADMIN_URL = "https://functions.poehali.dev/6eb840f4-abc2-453e-a7d9-5f9a989722bf";
const WITHDRAWAL_URL = "https://functions.poehali.dev/9cfe3eb3-a1dd-4e28-806b-4476909e4725";

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

interface AdminPanelProps {
  adminDisplayId: string | number;
  adminRole: number;
  onClose: () => void;
}

export default function AdminPanel({ adminDisplayId, adminRole, onClose }: AdminPanelProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [newBalance, setNewBalance] = useState("");
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [tab, setTab] = useState<"players" | "stats" | "admins" | "withdrawals">(adminRole <= ROLE_ADMIN ? "players" : "stats");
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

  const canManagePlayers = adminRole <= ROLE_ADMIN;
  const canManageAdmins = adminRole <= ROLE_CHIEF;
  const isOwner = adminRole === ROLE_OWNER;

  const fetchPlayers = useCallback(async (q = "") => {
    if (!canManagePlayers) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({ action: "players", admin_id: String(adminDisplayId) });
      if (q) params.set("search", q);
      const res = await fetch(`${ADMIN_URL}?${params}`);
      const data = await res.json();
      if (res.ok) setPlayers(data.players || []);
    } catch { /* */ }
    setLoading(false);
  }, [adminDisplayId, canManagePlayers]);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch(`${ADMIN_URL}?action=stats&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setStats(data);
    } catch { /* */ }
  }, [adminDisplayId]);

  const fetchAdmins = useCallback(async () => {
    if (!canManagePlayers) return;
    try {
      const res = await fetch(`${ADMIN_URL}?action=list_admins&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setAdmins(data.admins || []);
    } catch { /* */ }
  }, [adminDisplayId, canManagePlayers]);

  const fetchWithdrawals = useCallback(async (status = "pending") => {
    if (!canManagePlayers) return;
    setWithdrawalsLoading(true);
    try {
      const res = await fetch(`${WITHDRAWAL_URL}?action=list&status=${status}`);
      const data = await res.json();
      if (res.ok) setWithdrawals(data.withdrawals || []);
    } catch { /* */ }
    setWithdrawalsLoading(false);
  }, [canManagePlayers]);

  useEffect(() => {
    fetchStats();
    if (canManagePlayers) {
      fetchPlayers();
      fetchAdmins();
      fetchWithdrawals("pending");
    } else {
      setLoading(false);
    }
  }, [fetchPlayers, fetchStats, fetchAdmins, fetchWithdrawals, canManagePlayers]);

  const handleSearch = () => fetchPlayers(search);

  const handleBlock = async (player: Player) => {
    setActionLoading(player.id);
    try {
      await fetch(`${ADMIN_URL}?action=block`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_id: String(adminDisplayId), user_id: String(player.id) }),
      });
      await fetchPlayers(search);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleUnblock = async (player: Player) => {
    setActionLoading(player.id);
    try {
      await fetch(`${ADMIN_URL}?action=unblock`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_id: String(adminDisplayId), user_id: String(player.id) }),
      });
      await fetchPlayers(search);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleSetBalance = async () => {
    if (!editingPlayer || newBalance === "") return;
    setActionLoading(editingPlayer.id);
    try {
      await fetch(`${ADMIN_URL}?action=set_balance`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admin_id: String(adminDisplayId),
          user_id: String(editingPlayer.id),
          balance: parseFloat(newBalance),
        }),
      });
      await fetchPlayers(search);
      await fetchStats();
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
      const res = await fetch(`${ADMIN_URL}?action=add_admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admin_id: String(adminDisplayId),
          display_id: parseInt(addAdminId.trim()),
          role: addAdminRole,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAddAdminError(data.error || "Ошибка");
        setAddAdminLoading(false);
        return;
      }
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
      await fetch(`${ADMIN_URL}?action=remove_admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ admin_id: String(adminDisplayId), display_id: admin.display_id }),
      });
      await fetchAdmins();
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleChangeRole = async () => {
    if (!changeRoleAdmin) return;
    setActionLoading(changeRoleAdmin.id);
    try {
      await fetch(`${ADMIN_URL}?action=change_role`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          admin_id: String(adminDisplayId),
          display_id: changeRoleAdmin.display_id,
          role: changeRoleValue,
        }),
      });
      await fetchAdmins();
      setChangeRoleAdmin(null);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleApproveWithdrawal = async (w: Withdrawal) => {
    setActionLoading(w.id);
    try {
      await fetch(`${WITHDRAWAL_URL}?action=approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: w.id }),
      });
      await fetchWithdrawals(wdFilter);
    } catch { /* */ }
    setActionLoading(null);
  };

  const handleRejectWithdrawal = async (w: Withdrawal) => {
    setActionLoading(w.id);
    try {
      await fetch(`${WITHDRAWAL_URL}?action=reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: w.id }),
      });
      await fetchWithdrawals(wdFilter);
    } catch { /* */ }
    setActionLoading(null);
  };

  const formatDate = (d: string | null) => {
    if (!d) return "—";
    return new Date(d).toLocaleString("ru-RU", {
      day: "2-digit", month: "2-digit", year: "2-digit",
      hour: "2-digit", minute: "2-digit",
    });
  };

  const roleBadge = (role: number) => {
    const c = ROLE_COLORS[role] || ROLE_COLORS[ROLE_TECH];
    return (
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.bg} ${c.text}`}>
        {ROLE_NAMES[role] || "Неизвестно"}
      </span>
    );
  };

  const roleOptions = [
    { role: ROLE_CHIEF, label: "Гл.Администратор", desc: "Все возможности платформы" },
    { role: ROLE_ADMIN, label: "Администратор", desc: "Все функции админ-панели" },
    { role: ROLE_TECH, label: "Тех.Специалист", desc: "Только аналитика" },
  ];

  const roleDotColor = (role: number) =>
    role === ROLE_OWNER ? "rgb(192 132 252)" : role === ROLE_CHIEF ? "rgb(248 113 113)" : role === ROLE_ADMIN ? "rgb(96 165 250)" : "rgb(250 204 21)";

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[#4ade80]/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#4ade80]/15 flex items-center justify-center">
            <Icon name="Shield" size={18} className="text-[#4ade80]" />
          </div>
          <div>
            <h1 className="text-white font-bold text-[16px] leading-tight">Админ-панель</h1>
            <span className="text-white/30 text-[10px]">{ROLE_NAMES[adminRole]}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
        >
          <Icon name="X" size={16} className="text-white/60" />
        </button>
      </div>

      <div className="flex gap-1 px-4 pt-3 pb-2">
        {canManagePlayers && (
          <button
            onClick={() => setTab("players")}
            className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-colors ${
              tab === "players" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
            }`}
          >
            <Icon name="Users" size={13} className="inline mr-1" />
            Игроки
          </button>
        )}
        <button
          onClick={() => { setTab("stats"); fetchStats(); }}
          className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-colors ${
            tab === "stats" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
          }`}
        >
          <Icon name="BarChart3" size={13} className="inline mr-1" />
          Аналитика
        </button>
        {canManagePlayers && (
          <button
            onClick={() => { setTab("admins"); fetchAdmins(); }}
            className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-colors ${
              tab === "admins" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
            }`}
          >
            <Icon name="ShieldCheck" size={13} className="inline mr-1" />
            Админы
          </button>
        )}
        {canManagePlayers && (
          <button
            onClick={() => { setTab("withdrawals"); fetchWithdrawals(wdFilter); }}
            className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-colors relative ${
              tab === "withdrawals" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
            }`}
          >
            <Icon name="ArrowUpRight" size={13} className="inline mr-1" />
            Выводы
            {withdrawals.filter(w => w.status === "pending").length > 0 && tab !== "withdrawals" && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white font-bold flex items-center justify-center">
                {withdrawals.filter(w => w.status === "pending").length}
              </span>
            )}
          </button>
        )}
      </div>

      {tab === "stats" && stats && (
        <div className="px-4 pt-2 pb-4 flex flex-col gap-2 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-white/40 text-[11px] mb-1">Всего игроков</div>
              <div className="text-white font-bold text-[22px]">{stats.total_users}</div>
            </div>
            <div className="bg-white/5 border border-red-500/20 rounded-xl p-3">
              <div className="text-white/40 text-[11px] mb-1">Заблокировано</div>
              <div className="text-red-400 font-bold text-[22px]">{stats.blocked_users}</div>
            </div>
            <div className="bg-white/5 border border-[#4ade80]/20 rounded-xl p-3">
              <div className="text-white/40 text-[11px] mb-1">Общий баланс</div>
              <div className="text-[#4ade80] font-bold text-[18px]">{stats.total_balance.toFixed(2)} <span className="text-[12px] text-white/30">USDT</span></div>
            </div>
            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-3">
              <div className="text-white/40 text-[11px] mb-1">Оплаченных платежей</div>
              <div className="text-blue-400 font-bold text-[22px]">{stats.total_payments}</div>
            </div>
          </div>
        </div>
      )}

      {tab === "players" && canManagePlayers && (
        <>
          <div className="px-4 pt-2 pb-2">
            <div className="flex gap-2">
              <div className="flex-1 flex items-center bg-white/5 border border-white/10 rounded-xl px-3 gap-2">
                <Icon name="Search" size={16} className="text-white/30 shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="ID, имя или telegram"
                  className="bg-transparent text-white text-[13px] py-2.5 outline-none w-full placeholder:text-white/25"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-[#4ade80] text-black font-semibold text-[13px] rounded-xl px-4 active:bg-[#3ecb6e] transition-colors"
              >
                <Icon name="Search" size={16} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-20">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <Icon name="Loader2" size={28} className="text-[#4ade80] animate-spin" />
              </div>
            ) : players.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-32">
                <Icon name="UserX" size={40} className="text-white/15 mb-3" />
                <span className="text-white/40 text-[13px]">Игроки не найдены</span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {players.map((p) => (
                  <div
                    key={p.id}
                    className={`bg-white/[0.04] border rounded-xl px-3.5 py-3 ${
                      p.is_blocked ? "border-red-500/30" : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          p.is_blocked ? "bg-red-500/15" : "bg-[#4ade80]/10"
                        }`}>
                          <Icon
                            name={p.is_blocked ? "Ban" : "User"}
                            size={16}
                            className={p.is_blocked ? "text-red-400" : "text-[#4ade80]/60"}
                          />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-[13px] leading-tight">
                            {p.name || "Без имени"}
                            {p.is_blocked && (
                              <span className="ml-1.5 text-[10px] text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded-full">
                                Заблокирован
                              </span>
                            )}
                          </div>
                          <div className="text-white/30 text-[11px]">
                            ID: {p.display_id} · TG: {p.telegram_id || "—"}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#4ade80] font-bold text-[14px]">{p.balance.toFixed(2)}</div>
                        <div className="text-white/20 text-[10px]">USDT</div>
                      </div>
                    </div>
                    <div className="text-white/20 text-[10px] mb-2">
                      Регистрация: {formatDate(p.created_at)}
                    </div>
                    <div className="flex gap-2">
                      <button
                        disabled={actionLoading === p.id}
                        onClick={() => { setEditingPlayer(p); setNewBalance(String(p.balance)); }}
                        className="flex-1 flex items-center justify-center gap-1 bg-blue-500/15 text-blue-400 text-[12px] font-semibold rounded-lg py-2 active:bg-blue-500/25 transition-colors disabled:opacity-50"
                      >
                        <Icon name="Pencil" size={12} />
                        Баланс
                      </button>
                      {p.is_blocked ? (
                        <button
                          disabled={actionLoading === p.id}
                          onClick={() => handleUnblock(p)}
                          className="flex-1 flex items-center justify-center gap-1 bg-[#4ade80]/15 text-[#4ade80] text-[12px] font-semibold rounded-lg py-2 active:bg-[#4ade80]/25 transition-colors disabled:opacity-50"
                        >
                          <Icon name="Unlock" size={12} />
                          Разблокировать
                        </button>
                      ) : (
                        <button
                          disabled={actionLoading === p.id}
                          onClick={() => handleBlock(p)}
                          className="flex-1 flex items-center justify-center gap-1 bg-red-500/15 text-red-400 text-[12px] font-semibold rounded-lg py-2 active:bg-red-500/25 transition-colors disabled:opacity-50"
                        >
                          <Icon name="Ban" size={12} />
                          Заблокировать
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {tab === "admins" && canManagePlayers && (
        <div className="flex-1 overflow-y-auto px-4 pt-2 pb-20">
          {canManageAdmins && (
            <button
              onClick={() => { setAddAdminOpen(true); setAddAdminError(""); setAddAdminId(""); setAddAdminRole(ROLE_ADMIN); }}
              className="w-full flex items-center justify-center gap-2 bg-[#4ade80]/10 border border-[#4ade80]/30 text-[#4ade80] font-semibold text-[13px] rounded-xl py-3 mb-3 active:bg-[#4ade80]/20 transition-colors"
            >
              <Icon name="UserPlus" size={16} />
              Добавить админа
            </button>
          )}

          {admins.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32">
              <Icon name="ShieldOff" size={40} className="text-white/15 mb-3" />
              <span className="text-white/40 text-[13px]">Админов нет</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {admins.map((a) => {
                const rc = ROLE_COLORS[a.role] || ROLE_COLORS[ROLE_TECH];
                const isSelf = String(a.display_id) === String(adminDisplayId);
                return (
                  <div key={a.id} className={`bg-white/[0.04] border ${rc.border} rounded-xl px-3.5 py-3`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${rc.bg}`}>
                          <Icon name="Shield" size={16} className={rc.text} />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-[13px] leading-tight flex items-center gap-1.5">
                            {a.user_name || a.custom_name || "Админ"}
                            {isSelf && <span className="text-[9px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded-full">Вы</span>}
                          </div>
                          <div className="text-white/30 text-[11px]">
                            ID: {a.display_id} {a.telegram_id ? `· TG: ${a.telegram_id}` : ""}
                          </div>
                        </div>
                      </div>
                      {roleBadge(a.role)}
                    </div>
                    <div className="text-white/20 text-[10px] mb-2">
                      Назначен: {formatDate(a.created_at)}
                    </div>
                    {canManageAdmins && !isSelf && a.role !== ROLE_OWNER && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => { setChangeRoleAdmin(a); setChangeRoleValue(a.role); }}
                          className="flex-1 flex items-center justify-center gap-1 bg-blue-500/15 text-blue-400 text-[12px] font-semibold rounded-lg py-2 active:bg-blue-500/25 transition-colors"
                        >
                          <Icon name="ArrowUpDown" size={12} />
                          Роль
                        </button>
                        <button
                          disabled={actionLoading === a.id}
                          onClick={() => handleRemoveAdmin(a)}
                          className="flex-1 flex items-center justify-center gap-1 bg-red-500/15 text-red-400 text-[12px] font-semibold rounded-lg py-2 active:bg-red-500/25 transition-colors disabled:opacity-50"
                        >
                          <Icon name="UserMinus" size={12} />
                          Убрать
                        </button>
                      </div>
                    )}
                    {a.role === ROLE_OWNER && !isSelf && (
                      <div className="text-white/20 text-[10px] italic">Роль защищена от изменений</div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {tab === "withdrawals" && canManagePlayers && (
        <div className="flex-1 overflow-y-auto px-4 pt-2 pb-20">
          <div className="flex gap-1 mb-3">
            {(["pending", "approved", "rejected", "all"] as const).map((f) => {
              const labels = { pending: "Ожидание", approved: "Одобрено", rejected: "Отклонено", all: "Все" };
              return (
                <button
                  key={f}
                  onClick={() => { setWdFilter(f); fetchWithdrawals(f); }}
                  className={`flex-1 py-1.5 rounded-lg text-[11px] font-semibold transition-colors ${
                    wdFilter === f ? "bg-white/10 text-white" : "bg-white/[0.03] text-white/30"
                  }`}
                >
                  {labels[f]}
                </button>
              );
            })}
          </div>

          {withdrawalsLoading ? (
            <div className="flex items-center justify-center h-32">
              <Icon name="Loader2" size={28} className="text-[#4ade80] animate-spin" />
            </div>
          ) : withdrawals.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32">
              <Icon name="ArrowUpRight" size={40} className="text-white/15 mb-3" />
              <span className="text-white/40 text-[13px]">Заявок нет</span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {withdrawals.map((w) => {
                const isPending = w.status === "pending";
                const isApproved = w.status === "approved";
                const statusColor = isPending ? "text-yellow-400" : isApproved ? "text-[#4ade80]" : "text-red-400";
                const statusBg = isPending ? "bg-yellow-400/10" : isApproved ? "bg-[#4ade80]/10" : "bg-red-400/10";
                const statusLabel = isPending ? "Ожидание" : isApproved ? "Одобрено" : "Отклонено";
                return (
                  <div key={w.id} className={`bg-white/[0.04] border ${isPending ? "border-yellow-500/30" : "border-white/10"} rounded-xl px-3.5 py-3`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${statusBg}`}>
                          <Icon name="ArrowUpRight" size={16} className={statusColor} />
                        </div>
                        <div>
                          <div className="text-white font-semibold text-[13px]">{w.user_name || "Игрок"}</div>
                          <div className="text-white/30 text-[11px]">ID: {w.display_id}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 font-bold text-[14px]">−{w.amount.toFixed(2)}</div>
                        <div className="text-white/20 text-[10px]">USDT</div>
                      </div>
                    </div>

                    <div className="bg-white/[0.03] rounded-lg px-3 py-2 mb-2">
                      <div className="text-white/40 text-[10px] mb-0.5">Сеть: <span className="text-white/60">{w.network}</span></div>
                      <div className="text-white/40 text-[10px]">Адрес:</div>
                      <div className="text-white/80 text-[11px] font-mono break-all">{w.address}</div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/20 text-[10px]">{formatDate(w.created_at)}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusBg} ${statusColor}`}>
                        {statusLabel}
                      </span>
                    </div>

                    {isPending && (
                      <div className="flex gap-2">
                        <button
                          disabled={actionLoading === w.id}
                          onClick={() => handleApproveWithdrawal(w)}
                          className="flex-1 flex items-center justify-center gap-1 bg-[#4ade80]/15 text-[#4ade80] text-[12px] font-semibold rounded-lg py-2 active:bg-[#4ade80]/25 transition-colors disabled:opacity-50"
                        >
                          <Icon name="Check" size={12} />
                          Одобрить
                        </button>
                        <button
                          disabled={actionLoading === w.id}
                          onClick={() => handleRejectWithdrawal(w)}
                          className="flex-1 flex items-center justify-center gap-1 bg-red-500/15 text-red-400 text-[12px] font-semibold rounded-lg py-2 active:bg-red-500/25 transition-colors disabled:opacity-50"
                        >
                          <Icon name="X" size={12} />
                          Отклонить
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {editingPlayer && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80" onClick={() => setEditingPlayer(null)} />
          <div className="relative bg-[#111] border border-white/10 rounded-2xl p-5 w-full max-w-[340px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-[15px]">Изменить баланс</h3>
              <button onClick={() => setEditingPlayer(null)} className="text-white/40">
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="text-white/50 text-[12px] mb-1">
              {editingPlayer.name || "Без имени"} · ID {editingPlayer.display_id}
            </div>
            <div className="text-white/30 text-[11px] mb-3">
              Текущий баланс: <span className="text-[#4ade80]">{editingPlayer.balance.toFixed(2)} USDT</span>
            </div>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-3 gap-2 mb-4">
              <span className="text-white/30 text-[13px]">USDT</span>
              <input
                type="number"
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
                className="bg-transparent text-white text-[15px] font-bold py-2.5 outline-none w-full text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="flex gap-2">
              <button onClick={() => setEditingPlayer(null)} className="flex-1 bg-white/5 text-white/60 font-semibold text-[13px] rounded-xl py-2.5">
                Отмена
              </button>
              <button
                disabled={actionLoading === editingPlayer.id}
                onClick={handleSetBalance}
                className="flex-1 bg-[#4ade80] text-black font-bold text-[13px] rounded-xl py-2.5 active:bg-[#3ecb6e] transition-colors disabled:opacity-50"
              >
                {actionLoading === editingPlayer.id ? "..." : "Сохранить"}
              </button>
            </div>
          </div>
        </div>
      )}

      {addAdminOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80" onClick={() => setAddAdminOpen(false)} />
          <div className="relative bg-[#111] border border-white/10 rounded-2xl p-5 w-full max-w-[340px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-[15px]">Добавить админа</h3>
              <button onClick={() => setAddAdminOpen(false)} className="text-white/40">
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="text-white/50 text-[12px] mb-1.5">ID игрока (display_id)</div>
            <input
              type="number"
              value={addAdminId}
              onChange={(e) => setAddAdminId(e.target.value)}
              placeholder="Например: 5311810"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-white text-[14px] outline-none mb-3 placeholder:text-white/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className="text-white/50 text-[12px] mb-1.5">Роль</div>
            <div className="flex flex-col gap-1.5 mb-3">
              {roleOptions.map((r) => {
                const rc = ROLE_COLORS[r.role];
                return (
                  <button
                    key={r.role}
                    onClick={() => setAddAdminRole(r.role)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${
                      addAdminRole === r.role ? `${rc.border} ${rc.bg}` : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      addAdminRole === r.role ? rc.border : "border-white/20"
                    }`}>
                      {addAdminRole === r.role && (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: roleDotColor(r.role) }} />
                      )}
                    </div>
                    <div className="text-left">
                      <div className={`text-[12px] font-semibold ${addAdminRole === r.role ? rc.text : "text-white/70"}`}>{r.label}</div>
                      <div className="text-white/30 text-[10px]">{r.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            {addAdminError && <div className="text-red-400 text-[12px] mb-3 font-medium">{addAdminError}</div>}
            <div className="flex gap-2">
              <button onClick={() => setAddAdminOpen(false)} className="flex-1 bg-white/5 text-white/60 font-semibold text-[13px] rounded-xl py-2.5">
                Отмена
              </button>
              <button
                disabled={addAdminLoading}
                onClick={handleAddAdmin}
                className="flex-1 bg-[#4ade80] text-black font-bold text-[13px] rounded-xl py-2.5 active:bg-[#3ecb6e] transition-colors disabled:opacity-50"
              >
                {addAdminLoading ? "..." : "Добавить"}
              </button>
            </div>
          </div>
        </div>
      )}

      {changeRoleAdmin && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80" onClick={() => setChangeRoleAdmin(null)} />
          <div className="relative bg-[#111] border border-white/10 rounded-2xl p-5 w-full max-w-[340px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-[15px]">Изменить роль</h3>
              <button onClick={() => setChangeRoleAdmin(null)} className="text-white/40">
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="text-white/50 text-[12px] mb-3">
              {changeRoleAdmin.user_name || "Админ"} · ID {changeRoleAdmin.display_id}
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              {roleOptions.map((r) => {
                const rc = ROLE_COLORS[r.role];
                return (
                  <button
                    key={r.role}
                    onClick={() => setChangeRoleValue(r.role)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-colors ${
                      changeRoleValue === r.role ? `${rc.border} ${rc.bg}` : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      changeRoleValue === r.role ? rc.border : "border-white/20"
                    }`}>
                      {changeRoleValue === r.role && (
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: roleDotColor(r.role) }} />
                      )}
                    </div>
                    <span className={`text-[12px] font-semibold ${changeRoleValue === r.role ? rc.text : "text-white/70"}`}>{r.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setChangeRoleAdmin(null)} className="flex-1 bg-white/5 text-white/60 font-semibold text-[13px] rounded-xl py-2.5">
                Отмена
              </button>
              <button
                disabled={actionLoading === changeRoleAdmin.id}
                onClick={handleChangeRole}
                className="flex-1 bg-[#4ade80] text-black font-bold text-[13px] rounded-xl py-2.5 active:bg-[#3ecb6e] transition-colors disabled:opacity-50"
              >
                {actionLoading === changeRoleAdmin.id ? "..." : "Сохранить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}