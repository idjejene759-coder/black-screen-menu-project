import { useState, useRef, useEffect } from "react";

const SEGMENTS = 12;

const SEGMENT_COLORS = [
  "#e74c3c",
  "#e67e22",
  "#f39c12",
  "#f1c40f",
  "#2ecc71",
  "#1abc9c",
  "#27ae60",
  "#3498db",
  "#2980b9",
  "#8e44ad",
  "#9b59b6",
  "#c0392b",
];

const SEGMENT_LABELS = [
  "", "", "", "", "", "",
  "", "", "", "", "", "",
];

const SEGMENT_ANGLE = 360 / SEGMENTS;

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

export default function FortuneWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);
  const animRef = useRef<number | null>(null);

  const cx = 160;
  const cy = 160;
  const outerR = 138;
  const innerR = 38;
  const rimR = 144;

  function easeOut(t: number) {
    return 1 - Math.pow(1 - t, 4);
  }

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    const extraSpins = (5 + Math.floor(Math.random() * 5)) * 360;
    const randomAngle = Math.floor(Math.random() * 360);
    const startRot = rotationRef.current;
    const targetRot = startRot + extraSpins + randomAngle;
    const duration = 4000 + Math.random() * 1500;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = startRot + (targetRot - startRot) * eased;

      // Напрямую меняем transform без setState — нет перерисовки React
      if (svgRef.current) {
        svgRef.current.style.transform = `rotate(${current}deg)`;
      }

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        rotationRef.current = targetRot;
        const finalAngle = ((360 - (targetRot % 360)) + 90) % 360;
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

  const rimDots = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    return polarToCartesian(cx, cy, rimR, angle);
  });

  return (
    <div className="flex flex-col items-center gap-4 py-4 px-3">
      <h2 className="text-white text-xl font-bold tracking-wide">Колесо Фортуны</h2>

      <div className="relative flex items-center justify-center w-full" style={{ maxWidth: 320 }}>
        <div className="w-full" style={{ paddingTop: "100%", position: "relative" }}>

          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />

          {/* Pointer */}
          <div
            className="absolute left-1/2 z-20"
            style={{ top: -2, transform: "translateX(-50%)" }}
          >
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
          <svg
            ref={svgRef}
            viewBox="0 0 320 320"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transformOrigin: "center center",
              willChange: "transform",
            }}
          >
            <defs>
              <radialGradient id="rimGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#166534" />
                <stop offset="50%" stopColor="#22c55e" />
                <stop offset="80%" stopColor="#16a34a" />
                <stop offset="100%" stopColor="#15803d" />
              </radialGradient>
              <radialGradient id="centerGem" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#c3b1e1" />
                <stop offset="40%" stopColor="#7c4dff" />
                <stop offset="100%" stopColor="#311b92" />
              </radialGradient>
              <radialGradient id="innerRim" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="#166534" />
                <stop offset="80%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#15803d" />
              </radialGradient>
            </defs>

            {/* Outer green rim */}
            <circle cx={cx} cy={cy} r={rimR + 10} fill="url(#rimGrad)" />
            {/* Inner rim border */}
            <circle cx={cx} cy={cy} r={rimR + 1} fill="none" stroke="#4ade80" strokeWidth="1.5" opacity="0.6" />

            {/* Rim dots — зелёные */}
            {rimDots.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={i % 2 === 0 ? 4 : 2.8}
                fill={i % 2 === 0 ? "#4ade80" : "#86efac"}
                stroke="#166534"
                strokeWidth="0.6"
              />
            ))}

            {/* Segments */}
            {SEGMENT_COLORS.map((color, i) => {
              const start = i * SEGMENT_ANGLE;
              const end = start + SEGMENT_ANGLE;
              const midAngle = start + SEGMENT_ANGLE / 2;
              const labelPt = polarToCartesian(cx, cy, outerR * 0.66, midAngle);
              const textRot = midAngle - 90;

              return (
                <g key={i}>
                  <path
                    d={segmentPath(cx, cy, outerR, start, end)}
                    fill={color}
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                  {SEGMENT_LABELS[i] ? (
                    <g transform={`translate(${labelPt.x}, ${labelPt.y}) rotate(${textRot})`}>
                      <text
                        x="0" y="0"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="Arial, sans-serif"
                      >
                        {SEGMENT_LABELS[i]}
                      </text>
                    </g>
                  ) : null}
                </g>
              );
            })}

            {/* Divider lines */}
            {Array.from({ length: SEGMENTS }, (_, i) => {
              const angle = i * SEGMENT_ANGLE;
              const inner = polarToCartesian(cx, cy, innerR + 2, angle);
              const outer2 = polarToCartesian(cx, cy, outerR, angle);
              return (
                <line key={i} x1={inner.x} y1={inner.y} x2={outer2.x} y2={outer2.y} stroke="#22c55e" strokeWidth="1.2" opacity="0.7" />
              );
            })}

            {/* Inner gold ring */}
            <circle cx={cx} cy={cy} r={innerR + 11} fill="url(#innerRim)" />
            <circle cx={cx} cy={cy} r={innerR + 8} fill="#0f0a1e" />

            {/* Center gem */}
            <circle cx={cx} cy={cy} r={innerR} fill="url(#centerGem)" stroke="#22c55e" strokeWidth="2.5" />
            <polygon points={`${cx},${cy - 24} ${cx + 20},${cy + 12} ${cx - 20},${cy + 12}`} fill="rgba(255,255,255,0.08)" />
            <ellipse cx={cx - 8} cy={cy - 9} rx="8" ry="5" fill="rgba(255,255,255,0.18)" transform={`rotate(-30,${cx - 8},${cy - 9})`} />
          </svg>

          {/* Play button — не вращается */}
          <button
            onClick={spin}
            disabled={spinning}
            className="absolute z-10 flex items-center justify-center rounded-full transition-transform active:scale-95"
            style={{
              width: 46,
              height: 46,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: spinning
                ? "radial-gradient(circle at 35% 35%, #9b59b6, #311b92)"
                : "radial-gradient(circle at 35% 35%, #c3b1e1, #7c4dff, #311b92)",
              boxShadow: "0 0 16px rgba(124,77,255,0.7), 0 0 30px rgba(124,77,255,0.3)",
              border: "2.5px solid #22c55e",
            }}
          >
            {spinning ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 22 22">
                <polygon points="7,4 19,11 7,18" fill="white" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Result */}
      {result !== null && !spinning && (
        <div
          className="px-6 py-2.5 rounded-2xl text-white text-lg font-bold text-center"
          style={{
            background: `linear-gradient(135deg, ${SEGMENT_COLORS[result]}, #0f0a1e)`,
            boxShadow: `0 0 16px ${SEGMENT_COLORS[result]}88`,
            border: "2px solid #22c55e",
          }}
        >
          {SEGMENT_LABELS[result] || "Результат получен!"}
        </div>
      )}

      <p className="text-white/40 text-xs text-center">Нажми ▶ чтобы крутить</p>
    </div>
  );
}
