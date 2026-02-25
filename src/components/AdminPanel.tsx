import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ADMIN_URL = "https://functions.poehali.dev/6eb840f4-abc2-453e-a7d9-5f9a989722bf";

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

interface AdminPanelProps {
  adminDisplayId: string | number;
  onClose: () => void;
}

export default function AdminPanel({ adminDisplayId, onClose }: AdminPanelProps) {
  const [players, setPlayers] = useState<Player[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingPlayer, setEditingPlayer] = useState<Player | null>(null);
  const [newBalance, setNewBalance] = useState("");
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [tab, setTab] = useState<"players" | "stats">("players");

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
    try {
      const res = await fetch(`${ADMIN_URL}?action=stats&admin_id=${adminDisplayId}`);
      const data = await res.json();
      if (res.ok) setStats(data);
    } catch { /* */ }
  }, [adminDisplayId]);

  useEffect(() => {
    fetchPlayers();
    fetchStats();
  }, [fetchPlayers, fetchStats]);

  const handleSearch = () => {
    fetchPlayers(search);
  };

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

  const formatDate = (d: string | null) => {
    if (!d) return "—";
    return new Date(d).toLocaleString("ru-RU", {
      day: "2-digit", month: "2-digit", year: "2-digit",
      hour: "2-digit", minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[#4ade80]/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#4ade80]/15 flex items-center justify-center">
            <Icon name="Shield" size={18} className="text-[#4ade80]" />
          </div>
          <div>
            <h1 className="text-white font-bold text-[16px] leading-tight">Админ-панель</h1>
            <span className="text-white/30 text-[10px]">Управление платформой</span>
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
        <button
          onClick={() => setTab("players")}
          className={`flex-1 py-2 rounded-lg text-[13px] font-semibold transition-colors ${
            tab === "players" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
          }`}
        >
          <Icon name="Users" size={14} className="inline mr-1" />
          Игроки
        </button>
        <button
          onClick={() => { setTab("stats"); fetchStats(); }}
          className={`flex-1 py-2 rounded-lg text-[13px] font-semibold transition-colors ${
            tab === "stats" ? "bg-[#4ade80] text-black" : "bg-white/5 text-white/50"
          }`}
        >
          <Icon name="BarChart3" size={14} className="inline mr-1" />
          Статистика
        </button>
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

      {tab === "players" && (
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
                        onClick={() => {
                          setEditingPlayer(p);
                          setNewBalance(String(p.balance));
                        }}
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
              <button
                onClick={() => setEditingPlayer(null)}
                className="flex-1 bg-white/5 text-white/60 font-semibold text-[13px] rounded-xl py-2.5"
              >
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
    </div>
  );
}
