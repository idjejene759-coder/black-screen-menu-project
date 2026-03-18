import { useState, useRef, useEffect } from "react";

const SEGMENTS = 12;

const SEGMENT_COLORS = [
  "#e74c3c", // red
  "#e67e22", // orange
  "#f39c12", // yellow-orange
  "#f1c40f", // yellow
  "#2ecc71", // green
  "#1abc9c", // teal
  "#27ae60", // dark green
  "#3498db", // blue
  "#2980b9", // dark blue
  "#8e44ad", // purple
  "#9b59b6", // violet
  "#c0392b", // dark red
];

const SEGMENT_LABELS = [
  "?", "?", "?", "?", "?", "?",
  "?", "?", "?", "?", "?", "?",
];

const SEGMENT_ANGLE = 360 / SEGMENTS;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function segmentPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const s = polarToCartesian(cx, cy, r, startAngle);
  const e = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
}

export default function FortuneWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const animRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const startRotRef = useRef<number>(0);
  const targetRotRef = useRef<number>(0);
  const durationRef = useRef<number>(4500);

  const cx = 200;
  const cy = 200;
  const outerR = 175;
  const innerR = 50;
  const rimR = 182;

  function easeOut(t: number) {
    return 1 - Math.pow(1 - t, 4);
  }

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    const extraSpins = (5 + Math.floor(Math.random() * 5)) * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    const target = rotation + extraSpins + randomAngle;

    startTimeRef.current = performance.now();
    startRotRef.current = rotation;
    targetRotRef.current = target;
    durationRef.current = 4000 + Math.random() * 1500;

    function animate(now: number) {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / durationRef.current, 1);
      const eased = easeOut(progress);
      const current = startRotRef.current + (targetRotRef.current - startRotRef.current) * eased;
      setRotation(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setRotation(targetRotRef.current);
        const finalAngle = ((360 - (targetRotRef.current % 360)) + 90) % 360;
        const segIndex = Math.floor(finalAngle / SEGMENT_ANGLE) % SEGMENTS;
        setResult(segIndex);
        setSpinning(false);
      }
    }

    animRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Rim dots positions
  const rimDots = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    return polarToCartesian(cx, cy, rimR, angle);
  });

  return (
    <div className="flex flex-col items-center gap-6 py-6 px-4">
      <h2 className="text-white text-2xl font-bold tracking-wide">Колесо Фортуны</h2>

      <div className="relative flex items-center justify-center" style={{ width: 420, height: 420 }}>
        {/* Glow background */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,200,50,0.18) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />

        {/* Pointer at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ marginTop: -6 }}>
          <svg width="34" height="44" viewBox="0 0 34 44">
            <defs>
              <linearGradient id="ptr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b39ddb" />
                <stop offset="100%" stopColor="#7c4dff" />
              </linearGradient>
            </defs>
            <polygon points="17,44 2,8 32,8" fill="url(#ptr)" stroke="#ffd700" strokeWidth="1.5" />
            <ellipse cx="17" cy="8" rx="12" ry="10" fill="url(#ptr)" stroke="#ffd700" strokeWidth="1.5" />
            <ellipse cx="17" cy="8" rx="6" ry="5" fill="#ede7f6" opacity="0.6" />
          </svg>
        </div>

        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          style={{ transform: `rotate(${rotation}deg)`, transition: "none" }}
        >
          <defs>
            <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#c8a800" />
              <stop offset="85%" stopColor="#ffe066" />
              <stop offset="95%" stopColor="#b8860b" />
              <stop offset="100%" stopColor="#ffd700" />
            </radialGradient>
            <radialGradient id="centerGem" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#c3b1e1" />
              <stop offset="40%" stopColor="#7c4dff" />
              <stop offset="100%" stopColor="#311b92" />
            </radialGradient>
            <radialGradient id="innerRim" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#b8860b" />
              <stop offset="80%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#c8a800" />
            </radialGradient>
            <filter id="segShadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgba(0,0,0,0.4)" />
            </filter>
          </defs>

          {/* Outer gold rim */}
          <circle cx={cx} cy={cy} r={rimR + 10} fill="url(#rimGrad)" />
          <circle cx={cx} cy={cy} r={rimR + 6} fill="#1a0a00" opacity="0.15" />

          {/* Rim dots */}
          {rimDots.map((pt, i) => (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={i % 2 === 0 ? 5 : 3.5}
              fill={i % 2 === 0 ? "#ffd700" : "#ffe066"}
              stroke="#b8860b"
              strokeWidth="0.8"
            />
          ))}

          {/* Segments */}
          {SEGMENT_COLORS.map((color, i) => {
            const start = i * SEGMENT_ANGLE;
            const end = start + SEGMENT_ANGLE;
            const midAngle = start + SEGMENT_ANGLE / 2;
            const labelPt = polarToCartesian(cx, cy, outerR * 0.68, midAngle);
            const iconPt = polarToCartesian(cx, cy, outerR * 0.88, midAngle);
            const textRot = midAngle - 90;

            return (
              <g key={i}>
                <path
                  d={segmentPath(cx, cy, outerR, start, end)}
                  fill={color}
                  stroke="#ffd700"
                  strokeWidth="1.5"
                  filter="url(#segShadow)"
                />
                {/* Segment label */}
                <g transform={`translate(${labelPt.x}, ${labelPt.y}) rotate(${textRot})`}>
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="white"
                    fontSize="15"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.7)" }}
                  >
                    {SEGMENT_LABELS[i]}
                  </text>
                </g>
                {/* Coin icon placeholder */}
                <g transform={`translate(${iconPt.x}, ${iconPt.y}) rotate(${textRot})`}>
                  <circle cx="0" cy="0" r="7" fill="#ffd700" opacity="0.85" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="central" fontSize="8" fill="#a0620a" fontWeight="bold">$</text>
                </g>
              </g>
            );
          })}

          {/* Divider lines */}
          {Array.from({ length: SEGMENTS }, (_, i) => {
            const angle = i * SEGMENT_ANGLE;
            const inner = polarToCartesian(cx, cy, innerR + 2, angle);
            const outer = polarToCartesian(cx, cy, outerR, angle);
            return (
              <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#ffd700" strokeWidth="1.5" opacity="0.7" />
            );
          })}

          {/* Inner gold ring */}
          <circle cx={cx} cy={cy} r={innerR + 14} fill="url(#innerRim)" />
          <circle cx={cx} cy={cy} r={innerR + 10} fill="#1a0533" />

          {/* Center gem */}
          <circle cx={cx} cy={cy} r={innerR} fill="url(#centerGem)" stroke="#ffd700" strokeWidth="3" />
          {/* Gem facets */}
          <polygon points={`${cx},${cy - 30} ${cx + 26},${cy + 15} ${cx - 26},${cy + 15}`} fill="rgba(255,255,255,0.08)" />
          <polygon points={`${cx},${cy - 30} ${cx + 26},${cy + 15} ${cx},${cy}`} fill="rgba(255,255,255,0.06)" />
          <ellipse cx={cx - 10} cy={cy - 12} rx="10" ry="6" fill="rgba(255,255,255,0.18)" transform={`rotate(-30,${cx - 10},${cy - 12})`} />
        </svg>

        {/* Play button overlay (not rotating) */}
        <button
          onClick={spin}
          disabled={spinning}
          className="absolute z-10 flex items-center justify-center rounded-full transition-transform active:scale-95"
          style={{
            width: 60,
            height: 60,
            background: spinning
              ? "radial-gradient(circle at 35% 35%, #9b59b6, #311b92)"
              : "radial-gradient(circle at 35% 35%, #c3b1e1, #7c4dff, #311b92)",
            boxShadow: "0 0 20px rgba(124,77,255,0.6), 0 0 40px rgba(124,77,255,0.3)",
            border: "3px solid #ffd700",
          }}
        >
          {spinning ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22">
              <polygon points="7,4 19,11 7,18" fill="white" />
            </svg>
          )}
        </button>
      </div>

      {/* Result */}
      {result !== null && !spinning && (
        <div
          className="px-8 py-3 rounded-2xl text-white text-xl font-bold text-center"
          style={{
            background: `linear-gradient(135deg, ${SEGMENT_COLORS[result]}, #1a0533)`,
            boxShadow: `0 0 20px ${SEGMENT_COLORS[result]}88`,
            border: "2px solid #ffd700",
          }}
        >
          Результат: {SEGMENT_LABELS[result]}
        </div>
      )}

      <p className="text-white/40 text-sm text-center">Нажми кнопку ▶ чтобы крутить</p>
    </div>
  );
}
