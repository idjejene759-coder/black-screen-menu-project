import { useState, useRef, useEffect, useCallback } from "react";

const GAME_BALANCE_URL = "https://functions.poehali.dev/64bf4a3e-c7fb-44f5-a1a9-b70cae660400";
const WHEEL_SPIN_URL = "https://functions.poehali.dev/bb728db8-6b3f-4150-ad06-b922870c3644";

const SEGMENTS = 12;
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 часа
const PAID_COST_USDT = 3;
const PAID_COST_STARS = 35;

const SEGMENT_COLORS = [
  "#e74c3c", "#e67e22", "#f39c12", "#f1c40f",
  "#2ecc71", "#1abc9c", "#27ae60", "#3498db",
  "#2980b9", "#8e44ad", "#9b59b6", "#c0392b",
];
const SEGMENT_GLOWS = [
  "#ff6b6b", "#ffaa44", "#ffcc44", "#ffe844",
  "#55ff88", "#44ffdd", "#44ff88", "#44aaff",
  "#44aaff", "#cc66ff", "#cc66ff", "#ff5555",
];
const SEGMENT_LABELS = [
  "1$", "15$", "50✦", "30$", "50$", "100✦",
  "70$", "200✦", "350$", "500✦", "1000$", "2000✦",
];
const SEGMENT_VALUES = [1, 15, 50, 30, 50, 100, 70, 200, 350, 500, 1000, 2000];
const SEGMENT_IS_STARS = [false, false, true, false, false, true, false, true, false, true, false, true];
const SEGMENT_WEIGHTS = [90, 20, 80, 15, 10, 40, 4, 3, 1, 1, 0, 0];
const SEGMENT_ANGLE = 360 / SEGMENTS;

function pickWeightedSegment(): number {
  const total = SEGMENT_WEIGHTS.reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  for (let i = 0; i < SEGMENT_WEIGHTS.length; i++) {
    rand -= SEGMENT_WEIGHTS[i];
    if (rand <= 0) return i;
  }
  return 0;
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function segmentPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
}

interface Props {
  userId: string;
  userBalance: number;
  starsBalance: number;
  currency: "usdt" | "stars";
  onWin: () => void;
}

export default function FortuneWheel({ userId, userBalance, starsBalance, currency, onWin }: Props) {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [crediting, setCrediting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [freeUsed, setFreeUsed] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);
  const animRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cx = 160, cy = 160, outerR = 138, innerR = 38, rimR = 144;

  // Загрузка таймера с сервера
  const fetchTimer = useCallback(async () => {
    if (!userId) return;
    try {
      const res = await fetch(`${WHEEL_SPIN_URL}?user_id=${encodeURIComponent(userId)}`);
      const data = await res.json();
      const secsLeft = data.seconds_left || 0;
      const msLeft = secsLeft * 1000;
      setCountdown(msLeft);
      setFreeUsed(secsLeft > 0);
    } catch {/* ignore */}
  }, [userId]);

  // Инициализация + тикер каждую секунду
  useEffect(() => {
    if (!userId) return;
    fetchTimer();

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        const next = Math.max(0, prev - 1000);
        if (next <= 0) setFreeUsed(false);
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [userId, fetchTimer]);

  function easeInOut(t: number) {
    if (t < 0.3) return (t / 0.3) ** 3 * 0.3;
    if (t < 0.7) return 0.3 + (t - 0.3) / 0.4 * 0.5;
    const s = (t - 0.7) / 0.3;
    return 0.8 + (1 - (1 - s) ** 4) * 0.2;
  }

  async function creditWin(segIndex: number) {
    if (!userId) return;
    setCrediting(true);
    try {
      await fetch(GAME_BALANCE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          action: "win",
          amount: SEGMENT_VALUES[segIndex],
          currency: SEGMENT_IS_STARS[segIndex] ? "stars" : "usdt",
        }),
      });
      onWin();
    } catch {/* ignore */}
    setCrediting(false);
  }

  async function chargePaid(): Promise<boolean> {
    if (!userId) return false;
    const isStars = currency === "stars";
    const cost = isStars ? PAID_COST_STARS : PAID_COST_USDT;
    try {
      const res = await fetch(GAME_BALANCE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          action: "bet",
          amount: cost,
          currency: isStars ? "stars" : "usdt",
        }),
      });
      if (!res.ok) return false;
      onWin(); // обновить баланс в хедере
      return true;
    } catch { return false; }
  }

  function doSpin() {
    setResult(null);
    setSpinning(true);

    const winSeg = pickWeightedSegment();
    const midAngle = winSeg * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const jitter = (Math.random() - 0.5) * (SEGMENT_ANGLE * 0.6);
    const extraSpins = (6 + Math.floor(Math.random() * 4)) * 360;
    const startRot = rotationRef.current;
    const currentMod = startRot % 360;
    const neededAngle = (360 - midAngle + jitter + 360) % 360;
    const delta = (neededAngle - currentMod + 360) % 360;
    const targetRot = startRot + extraSpins + delta;
    const duration = 5000 + Math.random() * 1000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOut(progress);
      const current = startRot + (targetRot - startRot) * eased;
      if (svgRef.current) svgRef.current.style.transform = `rotate(${current}deg)`;

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        rotationRef.current = targetRot;
        setResult(winSeg);
        setSpinning(false);
        creditWin(winSeg);
      }
    }
    animRef.current = requestAnimationFrame(animate);
  }

  async function spinFree() {
    if (spinning || freeUsed) return;
    // Фиксируем кручение на сервере
    try {
      const res = await fetch(WHEEL_SPIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });
      if (res.status === 429) {
        // Cooldown ещё не прошёл — обновляем таймер
        const data = await res.json();
        setCountdown((data.seconds_left || 0) * 1000);
        setFreeUsed(true);
        return;
      }
    } catch {/* ignore */}
    setFreeUsed(true);
    setCountdown(COOLDOWN_MS);
    doSpin();
  }

  async function spinPaid() {
    if (spinning) return;
    const isStars = currency === "stars";
    const hasEnough = isStars ? starsBalance >= PAID_COST_STARS : userBalance >= PAID_COST_USDT;
    if (!hasEnough) return;
    const ok = await chargePaid();
    if (ok) doSpin();
  }

  useEffect(() => () => { if (animRef.current) cancelAnimationFrame(animRef.current); }, []);

  const rimDots = Array.from({ length: 24 }, (_, i) => polarToCartesian(cx, cy, rimR, (i * 360) / 24));
  const winColor = result !== null ? SEGMENT_COLORS[result] : "#22c55e";
  const winGlow = result !== null ? SEGMENT_GLOWS[result] : "#4ade80";

  const isStarsCurrency = currency === "stars";
  const canAffordPaid = isStarsCurrency ? starsBalance >= PAID_COST_STARS : userBalance >= PAID_COST_USDT;

  return (
    <div className="flex flex-col items-center gap-4 py-4 px-3">
      <h2 className="text-white text-xl font-bold tracking-wide">Колесо Фортуны</h2>

      {/* Таймер */}
      {freeUsed && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/50 text-xs">Бесплатное вращение через</span>
          <span
            className="text-2xl font-bold tabular-nums"
            style={{ color: "#4ade80", textShadow: "0 0 10px rgba(74,222,128,0.6)" }}
          >
            {formatCountdown(countdown)}
          </span>
        </div>
      )}

      {/* Колесо */}
      <div className="relative flex items-center justify-center w-full" style={{ maxWidth: 320 }}>
        <div className="w-full" style={{ paddingTop: "100%", position: "relative" }}>
          <div className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)", filter: "blur(12px)" }} />

          {/* Pointer */}
          <div className="absolute left-1/2 z-20" style={{ top: -2, transform: "translateX(-50%)" }}>
            <svg width="26" height="34" viewBox="0 0 34 44">
              <defs>
                <linearGradient id="ptr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#b39ddb" />
                  <stop offset="100%" stopColor="#7c4dff" />
                </linearGradient>
              </defs>
              <polygon points="17,44 2,8 32,8" fill="url(#ptr)" stroke="#22c55e" strokeWidth="1.5" />
              <ellipse cx="17" cy="8" rx="12" ry="10" fill="url(#ptr)" stroke="#22c55e" strokeWidth="1.5" />
              <ellipse cx="17" cy="8" rx="6" ry="5" fill="#ede7f6" opacity="0.6" />
            </svg>
          </div>

          {/* Wheel SVG */}
          <svg ref={svgRef} viewBox="0 0 320 320"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", transformOrigin: "center center", willChange: "transform" }}>
            <defs>
              <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#166534" /><stop offset="50%" stopColor="#22c55e" />
                <stop offset="80%" stopColor="#16a34a" /><stop offset="100%" stopColor="#15803d" />
              </radialGradient>
              <radialGradient id="centerGem" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#c3b1e1" /><stop offset="40%" stopColor="#7c4dff" />
                <stop offset="100%" stopColor="#311b92" />
              </radialGradient>
              <radialGradient id="innerRim" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#166534" /><stop offset="80%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </radialGradient>
              {SEGMENT_COLORS.map((color, i) => (
                <radialGradient key={i} id={`seg${i}`} cx="50%" cy="30%" r="80%">
                  <stop offset="0%" stopColor={SEGMENT_GLOWS[i]} />
                  <stop offset="100%" stopColor={color} />
                </radialGradient>
              ))}
            </defs>

            <circle cx={cx} cy={cy} r={rimR + 10} fill="url(#rimGrad)"
              style={{ filter: "drop-shadow(0 0 8px rgba(34,197,94,0.6))" }} />
            <circle cx={cx} cy={cy} r={rimR + 1} fill="none" stroke="#4ade80" strokeWidth="1.5" opacity="0.6" />

            {rimDots.map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r={i % 2 === 0 ? 4 : 2.8}
                fill={i % 2 === 0 ? "#4ade80" : "#86efac"} stroke="#166534" strokeWidth="0.6" />
            ))}

            {SEGMENT_COLORS.map((_, i) => {
              const start = i * SEGMENT_ANGLE;
              const end = start + SEGMENT_ANGLE;
              const midAngle = start + SEGMENT_ANGLE / 2;
              const labelPt = polarToCartesian(cx, cy, outerR * 0.66, midAngle);
              const textRot = midAngle - 90;
              return (
                <g key={i}>
                  <path d={segmentPath(cx, cy, outerR, start, end)} fill={`url(#seg${i})`}
                    stroke="#22c55e" strokeWidth="1.5"
                    style={{ filter: `drop-shadow(0 0 6px ${SEGMENT_GLOWS[i]}88)` }} />
                  <g transform={`translate(${labelPt.x}, ${labelPt.y}) rotate(${textRot})`}>
                    <text x="0" y="1" textAnchor="middle" dominantBaseline="central"
                      fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif"
                      style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9))" }}>
                      {SEGMENT_LABELS[i]}
                    </text>
                  </g>
                </g>
              );
            })}

            {Array.from({ length: SEGMENTS }, (_, i) => {
              const angle = i * SEGMENT_ANGLE;
              const inner = polarToCartesian(cx, cy, innerR + 2, angle);
              const outer2 = polarToCartesian(cx, cy, outerR, angle);
              return <line key={i} x1={inner.x} y1={inner.y} x2={outer2.x} y2={outer2.y} stroke="#22c55e" strokeWidth="1.2" opacity="0.7" />;
            })}

            <circle cx={cx} cy={cy} r={innerR + 11} fill="url(#innerRim)" />
            <circle cx={cx} cy={cy} r={innerR + 8} fill="#0f0a1e" />
            <circle cx={cx} cy={cy} r={innerR} fill="url(#centerGem)" stroke="#22c55e" strokeWidth="2.5"
              style={{ filter: "drop-shadow(0 0 10px rgba(124,77,255,0.8))" }} />
            <polygon points={`${cx},${cy - 24} ${cx + 20},${cy + 12} ${cx - 20},${cy + 12}`} fill="rgba(255,255,255,0.08)" />
            <ellipse cx={cx - 8} cy={cy - 9} rx="8" ry="5" fill="rgba(255,255,255,0.2)"
              transform={`rotate(-30,${cx - 8},${cy - 9})`} />
          </svg>

          {/* Play button */}
          <button onClick={spinFree} disabled={spinning || crediting || freeUsed}
            className="absolute z-10 flex items-center justify-center rounded-full transition-transform active:scale-95"
            style={{
              width: 46, height: 46, top: "50%", left: "50%", transform: "translate(-50%, -50%)",
              background: (spinning || freeUsed)
                ? "radial-gradient(circle at 35% 35%, #4a4a6a, #1a1a3a)"
                : "radial-gradient(circle at 35% 35%, #c3b1e1, #7c4dff, #311b92)",
              boxShadow: "0 0 20px rgba(124,77,255,0.8), 0 0 40px rgba(124,77,255,0.4)",
              border: "2.5px solid #22c55e",
            }}>
            {spinning
              ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              : <svg width="18" height="18" viewBox="0 0 22 22"><polygon points="7,4 19,11 7,18" fill="white" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex flex-col gap-3 w-full" style={{ maxWidth: 320 }}>
        {/* Бесплатно */}
        {!freeUsed ? (
          <button onClick={spinFree} disabled={spinning || crediting}
            className="w-full py-3 rounded-2xl font-bold text-base text-white transition-all active:scale-95"
            style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", boxShadow: "0 0 16px rgba(34,197,94,0.4)" }}>
            Бесплатно
          </button>
        ) : (
          <div className="w-full py-3 rounded-2xl text-center text-white/30 text-sm border border-white/10">
            Бесплатное вращение использовано
          </div>
        )}

        {/* Платно */}
        <button onClick={spinPaid} disabled={spinning || crediting || !canAffordPaid}
          className="w-full py-3 rounded-2xl font-bold text-base transition-all active:scale-95"
          style={{
            background: canAffordPaid && !spinning
              ? "linear-gradient(135deg, #7c4dff, #311b92)"
              : "rgba(255,255,255,0.05)",
            color: canAffordPaid && !spinning ? "white" : "rgba(255,255,255,0.3)",
            boxShadow: canAffordPaid && !spinning ? "0 0 16px rgba(124,77,255,0.4)" : "none",
            border: canAffordPaid && !spinning ? "none" : "1px solid rgba(255,255,255,0.1)",
          }}>
          Крутить за {isStarsCurrency ? `${PAID_COST_STARS} ⭐` : `${PAID_COST_USDT}$`}
        </button>
      </div>

      {/* Результат */}
      {result !== null && (
        <div className="w-full px-6 py-3 rounded-2xl text-white text-2xl font-bold text-center"
          style={{
            maxWidth: 320,
            background: `linear-gradient(135deg, ${winColor}cc, #0f0a1edd)`,
            boxShadow: `0 0 24px ${winGlow}99, 0 0 48px ${winGlow}44`,
            border: `2px solid ${winGlow}`,
          }}>
          {crediting ? <span className="text-base opacity-70">Начисляем...</span> : <>+{SEGMENT_LABELS[result]}</>}
        </div>
      )}
    </div>
  );
}