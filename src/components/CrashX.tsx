import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";

const GAME_API = "https://functions.poehali.dev/64bf4a3e-c7fb-44f5-a1a9-b70cae660400";
const MIN_BET_USDT = 1;
const MIN_BET_STARS = 5;
const QUICK_BETS_USDT = [1, 5, 10, 50];
const QUICK_BETS_STARS = [5, 25, 50, 100];
const ROUND_WAIT = 5000;

type Cur = "usdt" | "stars";
type Phase = "loading" | "roundWait" | "flying" | "crashed" | "cashedOut";

async function apiBalance(userId: string, action: "bet" | "win", amount: number, currency: Cur) {
  try {
    const res = await fetch(GAME_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, action, amount, currency }),
    });
    return await res.json();
  } catch { return null; }
}

interface Props {
  onClose: () => void;
  userId: string;
  usdtBalance: number;
  starsBalance: number;
  onBalanceChange: (c: Cur, d: number) => void;
  onRefreshBalance: () => void;
  initialCurrency: Cur;
}

function generateCrashPoint(): number {
  const r = Math.random();
  if (r < 0.35) return +(1 + Math.random() * 0.5).toFixed(2);
  if (r < 0.6) return +(1.5 + Math.random() * 1.5).toFixed(2);
  if (r < 0.8) return +(3 + Math.random() * 5).toFixed(2);
  if (r < 0.95) return +(8 + Math.random() * 15).toFixed(2);
  return +(23 + Math.random() * 80).toFixed(2);
}

function generateHistory(): number[] {
  return Array.from({ length: 30 }, () => generateCrashPoint());
}

export default function CrashX({ onClose, userId, usdtBalance, starsBalance, onBalanceChange, onRefreshBalance, initialCurrency }: Props) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [loadProg, setLoadProg] = useState(0);
  const [cur, setCur] = useState<Cur>(initialCurrency);
  const [betInput, setBetInput] = useState(initialCurrency === "usdt" ? "1" : "5");
  const [multiplier, setMultiplier] = useState(1.0);
  const [history, setHistory] = useState<number[]>(generateHistory);
  const [autoBet, setAutoBet] = useState(false);
  const [autoCashOut, setAutoCashOut] = useState(false);
  const [autoCashOutVal, setAutoCashOutVal] = useState("2.00");
  const [betPlaced, setBetPlaced] = useState(0);
  const [roundProgress, setRoundProgress] = useState(0);
  const [rocketPos, setRocketPos] = useState({ x: 0, y: 100 });
  const [flyAway, setFlyAway] = useState(false);
  const [currentWin, setCurrentWin] = useState(0);

  const animRef = useRef<number>(0);
  const startTimeRef = useRef(0);
  const crashRef = useRef(0);
  const cashedOutRef = useRef(false);
  const autoCashRef = useRef(false);
  const autoValRef = useRef(2);
  const roundTimerRef = useRef<ReturnType<typeof setInterval>>();
  const autoBetRef = useRef(false);
  const betInputRef = useRef(betInput);

  const bal = cur === "usdt" ? usdtBalance : starsBalance;
  const betVal = parseFloat(betInput) || 0;
  const sym = cur === "usdt" ? "$" : "★";
  const minBet = cur === "usdt" ? MIN_BET_USDT : MIN_BET_STARS;
  const quickBets = cur === "usdt" ? QUICK_BETS_USDT : QUICK_BETS_STARS;

  useEffect(() => { autoCashRef.current = autoCashOut; autoValRef.current = parseFloat(autoCashOutVal) || 2; }, [autoCashOut, autoCashOutVal]);
  useEffect(() => { autoBetRef.current = autoBet; }, [autoBet]);
  useEffect(() => { betInputRef.current = betInput; }, [betInput]);

  useEffect(() => {
    if (phase !== "loading") return;
    const t = setInterval(() => {
      setLoadProg(p => {
        if (p >= 100) { clearInterval(t); setTimeout(() => startRoundWait(), 300); return 100; }
        return p + Math.random() * 12 + 4;
      });
    }, 50);
    return () => clearInterval(t);
  }, [phase]);

  const startRoundWait = useCallback(() => {
    setPhase("roundWait");
    setMultiplier(1.0);
    setRocketPos({ x: 0, y: 100 });
    setFlyAway(false);
    setCurrentWin(0);
    setRoundProgress(0);
    const start = Date.now();
    roundTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const prog = Math.min((elapsed / ROUND_WAIT) * 100, 100);
      setRoundProgress(prog);
      if (prog >= 100) {
        clearInterval(roundTimerRef.current);
        startFlight();
      }
    }, 50);
  }, []);

  const startFlight = useCallback(() => {
    const cp = generateCrashPoint();
    crashRef.current = cp;
    cashedOutRef.current = false;
    startTimeRef.current = Date.now();
    setMultiplier(1.0);
    setFlyAway(false);
    setRocketPos({ x: 0, y: 100 });
    setPhase("flying");

    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const m = +(1 + elapsed * 0.15).toFixed(2);

      const xPct = Math.min((elapsed / 20) * 80, 80);
      const yPct = Math.max(100 - elapsed * 8, 10);

      setRocketPos({ x: xPct, y: yPct });

      if (m >= crashRef.current) {
        setMultiplier(crashRef.current);
        if (!cashedOutRef.current) {
          setFlyAway(true);
          setTimeout(() => {
            setPhase("crashed");
            setHistory(prev => [crashRef.current, ...prev.slice(0, 29)]);
            onRefreshBalance();
            setTimeout(() => {
              if (autoBetRef.current) {
                autoPlaceBet().then(() => {});
              } else {
                setBetPlaced(0);
                startRoundWait();
              }
            }, 2500);
          }, 600);
        }
        return;
      }

      if (autoCashRef.current && m >= autoValRef.current && !cashedOutRef.current) {
        cashedOutRef.current = true;
        const bp = betPlaced || parseFloat(betInputRef.current) || 0;
        const winnings = +(bp * autoValRef.current).toFixed(2);
        setCurrentWin(winnings);
        apiBalance(userId, "win", winnings, cur).then(() => onRefreshBalance());
        onBalanceChange(cur, winnings);
        setMultiplier(autoValRef.current);
        setPhase("cashedOut");
        return;
      }

      if (betPlaced > 0) {
        setCurrentWin(+(betPlaced * m).toFixed(2));
      }

      setMultiplier(m);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
  }, [betPlaced, cur, onBalanceChange, onRefreshBalance, userId, startRoundWait]);

  const autoPlaceBet = useCallback(async () => {
    const bv = parseFloat(betInputRef.current) || 0;
    const b = cur === "usdt" ? usdtBalance : starsBalance;
    const mb = cur === "usdt" ? MIN_BET_USDT : MIN_BET_STARS;
    if (bv < mb || bv > b) { setBetPlaced(0); startRoundWait(); return; }
    const res = await apiBalance(userId, "bet", bv, cur);
    if (!res || !res.ok) { setBetPlaced(0); startRoundWait(); return; }
    onBalanceChange(cur, -bv);
    setBetPlaced(bv);
    startRoundWait();
  }, [cur, usdtBalance, starsBalance, userId, onBalanceChange, startRoundWait]);

  const placeBet = useCallback(async () => {
    const bv = parseFloat(betInput) || 0;
    const b = cur === "usdt" ? usdtBalance : starsBalance;
    const mb = cur === "usdt" ? MIN_BET_USDT : MIN_BET_STARS;
    if (bv < mb || bv > b) return;
    const res = await apiBalance(userId, "bet", bv, cur);
    if (!res || !res.ok) return;
    onBalanceChange(cur, -bv);
    setBetPlaced(bv);
    setCurrentWin(0);
  }, [betInput, cur, usdtBalance, starsBalance, userId, onBalanceChange]);

  const cashOut = useCallback(async () => {
    if (phase !== "flying" || cashedOutRef.current || betPlaced <= 0) return;
    cashedOutRef.current = true;
    cancelAnimationFrame(animRef.current);
    const winnings = +(betPlaced * multiplier).toFixed(2);
    setCurrentWin(winnings);
    await apiBalance(userId, "win", winnings, cur);
    onBalanceChange(cur, winnings);
    onRefreshBalance();
    setPhase("cashedOut");
    setHistory(prev => [crashRef.current, ...prev.slice(0, 29)]);
  }, [phase, betPlaced, multiplier, cur, userId, onBalanceChange, onRefreshBalance]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animRef.current);
      if (roundTimerRef.current) clearInterval(roundTimerRef.current);
    };
  }, []);

  const renderGraph = () => {
    const w = 360;
    const h = 200;
    const px = (rocketPos.x / 100) * w;
    const py = (rocketPos.y / 100) * h;
    const isCrashedOrAway = phase === "crashed" || flyAway;

    return (
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.02" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {[0.2, 0.4, 0.6, 0.8].map(f => (
          <line key={f} x1="0" y1={h * f} x2={w} y2={h * f} stroke="white" strokeOpacity="0.04" strokeDasharray="4 4" />
        ))}
        {[0.2, 0.4, 0.6, 0.8].map(f => (
          <line key={f} x1={w * f} y1="0" x2={w * f} y2={h} stroke="white" strokeOpacity="0.04" strokeDasharray="4 4" />
        ))}

        {!isCrashedOrAway && (
          <>
            <polygon points={`0,${h} 0,${py} ${px},${py} ${px},${h}`} fill="url(#fillGrad)" />
            <path d={`M 0 ${h} Q ${px * 0.3} ${h - (h - py) * 0.2} ${px} ${py}`} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
          </>
        )}

        {isCrashedOrAway ? (
          <g className="transition-all duration-500" style={{ transform: `translate(${w + 50}px, ${-80}px)` }}>
            <text x="0" y="0" fontSize="28" textAnchor="middle">🚀</text>
          </g>
        ) : (
          <g style={{ transform: `translate(${px}px, ${py - 16}px)` }}>
            <text x="0" y="0" fontSize="28" textAnchor="middle" style={{ filter: "drop-shadow(0 0 8px rgba(74,222,128,0.6))" }}>🚀</text>
          </g>
        )}
      </svg>
    );
  };

  if (phase === "loading") {
    return (
      <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-14 h-14 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-green-400 font-extrabold text-2xl tracking-widest">CRASH X</span>
          <div className="w-52 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-green-400 rounded-full transition-all" style={{ width: `${Math.min(loadProg, 100)}%` }} />
          </div>
        </div>
      </div>
    );
  }

  const isFlying = phase === "flying";
  const isCrashed = phase === "crashed";
  const isCashedOut = phase === "cashedOut";
  const isWaiting = phase === "roundWait";
  const hasBet = betPlaced > 0;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0c0c24] flex flex-col overflow-auto">
      <div className="flex items-center justify-between px-4 py-3 bg-[#10102a] border-b border-white/5">
        <button onClick={onClose} className="flex items-center gap-1.5 text-white/70 active:scale-95 transition">
          <Icon name="ChevronLeft" size={20} />
          <span className="text-sm font-medium">Назад</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-white/40 text-xs uppercase">{cur === "usdt" ? "USDT" : "Stars"}</span>
          <span className="text-white font-bold">{bal.toFixed(2)} {sym}</span>
        </div>
        <button
          onClick={() => { setCur(c => c === "usdt" ? "stars" : "usdt"); setBetInput(cur === "usdt" ? "5" : "1"); }}
          className="bg-white/10 rounded-full px-3 py-1.5 text-xs text-white/60 active:scale-95 transition"
        >
          {cur === "usdt" ? "★ Stars" : "$ USDT"}
        </button>
      </div>

      <div className="px-4 pt-2 pb-1">
        <h1 className="text-white font-extrabold text-lg tracking-[0.2em] text-center">CRASH X</h1>
      </div>

      <div className="px-4 py-1.5">
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {history.slice(0, 20).map((h, i) => (
            <span key={i} className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${
              h < 1.5 ? "bg-red-500/20 text-red-400" : h < 2 ? "bg-orange-500/20 text-orange-400" : h < 5 ? "bg-purple-500/20 text-purple-300" : "bg-green-500/20 text-green-400"
            }`}>
              {h.toFixed(2)}x
            </span>
          ))}
          <button className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/5">
            <Icon name="Clock" size={14} className="text-white/30" />
          </button>
        </div>
      </div>

      <div className="mx-4 mt-1 rounded-2xl border border-purple-500/20 bg-[#12122e] relative overflow-hidden" style={{ height: 240 }}>
        <div className="absolute top-2 right-2 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/10" />
          ))}
        </div>

        {isWaiting && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="text-5xl mb-3 animate-bounce">🚀</div>
            <span className="text-white font-extrabold text-base tracking-wider uppercase">Ожидание</span>
            <span className="text-white font-extrabold text-base tracking-wider uppercase">следующего раунда</span>
            <div className="w-48 h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-green-400 rounded-full transition-all duration-100" style={{ width: `${roundProgress}%` }} />
            </div>
          </div>
        )}

        {isFlying && (
          <div className="absolute inset-0 z-10">
            {renderGraph()}
            <div className="absolute top-4 left-4">
              <div className="text-white font-extrabold text-4xl leading-none" style={{ textShadow: "0 0 20px rgba(139,92,246,0.5)" }}>
                x{multiplier.toFixed(2)}
              </div>
              {hasBet && (
                <div className="text-green-400 font-bold text-lg mt-1">{currentWin.toFixed(2)} {sym}</div>
              )}
            </div>
          </div>
        )}

        {isCrashed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="text-red-500 font-extrabold text-5xl leading-none animate-pulse">x{multiplier.toFixed(2)}</div>
            <div className="text-red-400 font-bold text-lg mt-2 uppercase tracking-wider">Улетел!</div>
            {hasBet && !cashedOutRef.current && (
              <div className="text-red-400/70 text-sm mt-1">-{betPlaced.toFixed(2)} {sym}</div>
            )}
          </div>
        )}

        {isCashedOut && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="text-green-400 font-extrabold text-5xl leading-none">x{multiplier.toFixed(2)}</div>
            <div className="text-green-300 font-bold text-xl mt-2">+{currentWin.toFixed(2)} {sym}</div>
            <div className="text-green-400/60 text-sm mt-1">Забрано!</div>
          </div>
        )}
      </div>

      <div className="px-4 pt-3 space-y-2.5 flex-1">
        <div className="bg-[#12122e] border border-purple-500/10 rounded-2xl p-3 space-y-3">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <div onClick={() => setAutoBet(v => !v)} className={`w-9 h-[22px] rounded-full relative transition-colors ${autoBet ? 'bg-purple-500' : 'bg-white/10'}`}>
                <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white transition-transform ${autoBet ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
              </div>
              <span className="text-white/60 text-sm">Автоставка</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div onClick={() => setAutoCashOut(v => !v)} className={`w-9 h-[22px] rounded-full relative transition-colors ${autoCashOut ? 'bg-purple-500' : 'bg-white/10'}`}>
                <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white transition-transform ${autoCashOut ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
              </div>
              <span className="text-white/60 text-sm">Автовывод</span>
            </label>
            {autoCashOut && (
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-2 py-1 ml-auto">
                <span className="text-white/40 text-xs mr-1">x</span>
                <input type="number" value={autoCashOutVal} onChange={e => setAutoCashOutVal(e.target.value)} className="w-12 bg-transparent text-white text-sm font-bold text-center outline-none" step="0.1" min="1.1" />
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center bg-[#0c0c24] border border-white/10 rounded-xl overflow-hidden">
                <button onClick={() => setBetInput(v => String(Math.max(minBet, +(parseFloat(v) || 0) - (cur === "usdt" ? 1 : 5))))} className="px-3 py-3 text-white/40 active:text-white transition">
                  <Icon name="Minus" size={16} />
                </button>
                <input type="number" value={betInput} onChange={e => setBetInput(e.target.value)} className="flex-1 bg-transparent text-white text-center font-bold text-lg outline-none" min={minBet} />
                <button onClick={() => setBetInput(v => String(Math.min(bal, +(parseFloat(v) || 0) + (cur === "usdt" ? 1 : 5))))} className="px-3 py-3 text-white/40 active:text-white transition">
                  <Icon name="Plus" size={16} />
                </button>
              </div>
              <div className="flex gap-1.5">
                {quickBets.map(q => (
                  <button key={q} onClick={() => setBetInput(String(q))} className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/50 text-xs font-bold active:bg-white/10 transition">
                    {q >= 1000 ? `${q / 1000}K` : q}
                  </button>
                ))}
              </div>
            </div>

            {isFlying && hasBet ? (
              <button onClick={cashOut} className="w-[120px] rounded-xl bg-gradient-to-b from-green-400 to-green-600 text-black font-extrabold text-base active:scale-[0.96] transition-transform flex flex-col items-center justify-center gap-0.5">
                <span>ЗАБРАТЬ</span>
                <span className="text-sm font-bold opacity-80">{currentWin.toFixed(2)} {sym}</span>
              </button>
            ) : (isWaiting || (isFlying && !hasBet)) && !hasBet ? (
              <button onClick={placeBet} disabled={betVal < minBet || betVal > bal} className="w-[120px] rounded-xl bg-gradient-to-b from-purple-500 to-purple-700 text-white font-extrabold text-base active:scale-[0.96] transition-transform disabled:opacity-40">
                СТАВКА
              </button>
            ) : (isCrashed || isCashedOut) ? (
              <button onClick={() => { setBetPlaced(0); startRoundWait(); }} className={`w-[120px] rounded-xl font-extrabold text-base active:scale-[0.96] transition-transform ${isCrashed ? 'bg-gradient-to-b from-red-500 to-red-700 text-white' : 'bg-gradient-to-b from-purple-500 to-purple-700 text-white'}`}>
                {isCrashed ? "ЗАНОВО" : "ЕЩЁ"}
              </button>
            ) : (
              <button disabled className="w-[120px] rounded-xl bg-white/5 text-white/30 font-extrabold text-sm flex items-center justify-center">
                ЖДИТЕ...
              </button>
            )}
          </div>
        </div>

        <div className="bg-[#12122e] border border-purple-500/10 rounded-2xl p-3 space-y-3">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <div onClick={() => setAutoBet(v => !v)} className={`w-9 h-[22px] rounded-full relative transition-colors ${autoBet ? 'bg-purple-500' : 'bg-white/10'}`}>
                <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white transition-transform ${autoBet ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
              </div>
              <span className="text-white/60 text-sm">Автоставка</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div onClick={() => setAutoCashOut(v => !v)} className={`w-9 h-[22px] rounded-full relative transition-colors ${autoCashOut ? 'bg-purple-500' : 'bg-white/10'}`}>
                <div className={`absolute top-[3px] w-4 h-4 rounded-full bg-white transition-transform ${autoCashOut ? 'translate-x-[18px]' : 'translate-x-[3px]'}`} />
              </div>
              <span className="text-white/60 text-sm">Автовывод</span>
            </label>
            {autoCashOut && (
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-2 py-1 ml-auto">
                <span className="text-white/40 text-xs mr-1">x</span>
                <input type="number" value={autoCashOutVal} onChange={e => setAutoCashOutVal(e.target.value)} className="w-12 bg-transparent text-white text-sm font-bold text-center outline-none" step="0.1" min="1.1" />
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center bg-[#0c0c24] border border-white/10 rounded-xl overflow-hidden">
                <button onClick={() => setBetInput(v => String(Math.max(minBet, +(parseFloat(v) || 0) - (cur === "usdt" ? 1 : 5))))} className="px-3 py-3 text-white/40 active:text-white transition">
                  <Icon name="Minus" size={16} />
                </button>
                <input type="number" value={betInput} onChange={e => setBetInput(e.target.value)} className="flex-1 bg-transparent text-white text-center font-bold text-lg outline-none" min={minBet} />
                <button onClick={() => setBetInput(v => String(Math.min(bal, +(parseFloat(v) || 0) + (cur === "usdt" ? 1 : 5))))} className="px-3 py-3 text-white/40 active:text-white transition">
                  <Icon name="Plus" size={16} />
                </button>
              </div>
              <div className="flex gap-1.5">
                {quickBets.map(q => (
                  <button key={q} onClick={() => setBetInput(String(q))} className="flex-1 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/50 text-xs font-bold active:bg-white/10 transition">
                    {q >= 1000 ? `${q / 1000}K` : q}
                  </button>
                ))}
              </div>
            </div>

            {isFlying && hasBet ? (
              <button onClick={cashOut} className="w-[120px] rounded-xl bg-gradient-to-b from-green-400 to-green-600 text-black font-extrabold text-base active:scale-[0.96] transition-transform flex flex-col items-center justify-center gap-0.5">
                <span>ЗАБРАТЬ</span>
                <span className="text-sm font-bold opacity-80">{currentWin.toFixed(2)} {sym}</span>
              </button>
            ) : (isWaiting || (isFlying && !hasBet)) && !hasBet ? (
              <button onClick={placeBet} disabled={betVal < minBet || betVal > bal} className="w-[120px] rounded-xl bg-gradient-to-b from-purple-500 to-purple-700 text-white font-extrabold text-base active:scale-[0.96] transition-transform disabled:opacity-40">
                СТАВКА
              </button>
            ) : (isCrashed || isCashedOut) ? (
              <button onClick={() => { setBetPlaced(0); startRoundWait(); }} className={`w-[120px] rounded-xl font-extrabold text-base active:scale-[0.96] transition-transform ${isCrashed ? 'bg-gradient-to-b from-red-500 to-red-700 text-white' : 'bg-gradient-to-b from-purple-500 to-purple-700 text-white'}`}>
                {isCrashed ? "ЗАНОВО" : "ЕЩЁ"}
              </button>
            ) : (
              <button disabled className="w-[120px] rounded-xl bg-white/5 text-white/30 font-extrabold text-sm flex items-center justify-center">
                ЖДИТЕ...
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-2 mt-auto">
        <div className="flex items-center justify-between text-white/20 text-[10px]">
          <span>Мин. ставка: {minBet} {sym}</span>
          <span>Crash X — Turbo Games</span>
        </div>
      </div>
    </div>
  );
}
