interface Props {
  name: string;
}

function splitLines(s: string): [string, string] {
  if (s.length <= 14) return [s, ""];
  const slash = s.indexOf("/");
  if (slash > 3 && slash < s.length - 3) return [s.slice(0, slash + 1), s.slice(slash + 1)];
  const mid = Math.round(s.length / 2);
  const sp = s.lastIndexOf(" ", mid + 4);
  return sp > 2 ? [s.slice(0, sp), s.slice(sp + 1)] : [s.slice(0, 14), s.slice(14)];
}

export default function ProductVialImage({ name }: Props) {
  const parts = name.split(" | ");
  const primary = parts[0];
  // Use last segment as dosage/subtitle (e.g. "10mg" or "GHRH Analogue")
  const sub = parts.length > 1 ? parts[parts.length - 1] : "";

  const [l1, l2] = splitLines(primary);
  const maxLen = Math.max(l1.length, l2 ? l2.length : 0);
  const fs = maxLen <= 7 ? 24 : maxLen <= 10 ? 20 : maxLen <= 14 ? 17 : 14;

  const uid = "v" + primary.replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase();

  // Crown geometry matching the brand logo exactly:
  // center peak tallest (y=0), outer peaks at y=22%, deep valleys at y=60%
  // inner lines: outer-peak → opposite valley
  function crownPaths(w: number, x: number, y: number, sw: number) {
    const s = w / 144;
    const n = (v: number) => +(v * s).toFixed(2);
    const lc = 0, lop = n(16), lv = n(42), cp = n(72),
          rv = n(102), rop = n(128), rc = n(144);
    const cpy = 0, opy = n(22), vy = n(60), by = n(80);
    const b1 = n(87), b2 = n(95);
    const pts = `${lc},${by} ${lop},${opy} ${lv},${vy} ${cp},${cpy} ${rv},${vy} ${rop},${opy} ${rc},${by}`;
    return (
      <g transform={`translate(${x},${y})`} stroke="#1e293b" strokeWidth={sw}
         fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={pts} />
        <line x1={lop} y1={opy} x2={rv}  y2={vy} />
        <line x1={rop} y1={opy} x2={lv}  y2={vy} />
        <line x1={lc}  y1={b1}  x2={rc}  y2={b1} />
        <line x1={lc}  y1={b2}  x2={rc}  y2={b2} />
      </g>
    );
  }

  // Crown height at given width (base bar y2 = w/144 * 95)
  const crownH = (w: number) => +(w / 144 * 95).toFixed(0);

  const labelX = 118, labelW = 168, labelY = 168, labelH = 180;
  const labelCX = labelX + labelW / 2; // = 202

  // Crown on label: 64px wide, centered
  const labelCrownW = 64;
  const labelCrownX = labelCX - labelCrownW / 2; // 202 - 32 = 170
  const labelCrownY = labelY + 10;
  const labelCrownBottom = labelCrownY + crownH(labelCrownW); // ~170+42 = 212

  // Text positions
  const textX = 126;
  const nameY = labelCrownBottom + 46; // gap below crown
  const subY = l2 ? nameY + (fs + 3) * 2 + 3 : nameY + fs + 6;
  const ruoY = labelY + labelH - 10; // pinned to label bottom

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", height: "100%", display: "block" }}
         aria-hidden="true">
      <defs>
        {/* Background gradient */}
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f2f2f0" />
          <stop offset="100%" stopColor="#e0e0de" />
        </linearGradient>
        {/* Stopper gradient — white with side shading */}
        <linearGradient id={`${uid}st`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#ccccca" />
          <stop offset="12%"  stopColor="#f0f0ee" />
          <stop offset="40%"  stopColor="#fafafa" />
          <stop offset="60%"  stopColor="#f8f8f6" />
          <stop offset="88%"  stopColor="#e4e4e2" />
          <stop offset="100%" stopColor="#b8b8b6" />
        </linearGradient>
        {/* Silver crimp ring — brushed aluminum */}
        <linearGradient id={`${uid}cr`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#585858" />
          <stop offset="10%"  stopColor="#a0a0a0" />
          <stop offset="28%"  stopColor="#d8d8d8" />
          <stop offset="50%"  stopColor="#f4f4f4" />
          <stop offset="72%"  stopColor="#cecece" />
          <stop offset="90%"  stopColor="#989898" />
          <stop offset="100%" stopColor="#525252" />
        </linearGradient>
        {/* Crimp vertical shading */}
        <linearGradient id={`${uid}crv`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.28)" />
          <stop offset="50%"  stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.14)" />
        </linearGradient>
        {/* Glass body left-right sheen */}
        <linearGradient id={`${uid}gl`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#909090" stopOpacity="0.45" />
          <stop offset="8%"   stopColor="#f0f0f0" stopOpacity="0.28" />
          <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="92%"  stopColor="#e8e8e8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#888888" stopOpacity="0.40" />
        </linearGradient>
      </defs>

      {/* ── Dark outer frame ── */}
      <rect width="400" height="400" rx="26" fill="#1a1a1a" />

      {/* ── Light warm-gray background ── */}
      <rect x="8" y="8" width="384" height="384" rx="20" fill={`url(#${uid}bg)`} />

      {/* ── Crown — top-left ── */}
      {crownPaths(52, 14, 14, 2.1)}

      {/* ── Drop shadow beneath vial ── */}
      <ellipse cx="202" cy="362" rx="74" ry="8" fill="rgba(0,0,0,0.16)" />

      {/* ════ WHITE RUBBER STOPPER ════ */}
      {/* Cylindrical body with side-shading gradient */}
      <rect x="120" y="56" width="164" height="50" fill={`url(#${uid}st)`} />
      {/* Top ellipse — flat face */}
      <ellipse cx="202" cy="56" rx="82" ry="16" fill={`url(#${uid}st)`} />
      {/* Top highlight spot */}
      <ellipse cx="188" cy="52" rx="32" ry="9" fill="white" opacity="0.38" />
      {/* Bottom rim (where stopper meets crimp) */}
      <ellipse cx="202" cy="106" rx="82" ry="13" fill="#c0c0be" />

      {/* ════ SILVER ALUMINUM CRIMP RING ════ */}
      <rect x="116" y="96" width="172" height="40" rx="3" fill={`url(#${uid}cr)`} />
      {/* Vertical lighting overlay */}
      <rect x="116" y="96" width="172" height="40" rx="3" fill={`url(#${uid}crv)`} />
      {/* Fine horizontal lines simulating brushed metal */}
      <line x1="116" y1="104" x2="288" y2="104" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      <line x1="116" y1="110" x2="288" y2="110" stroke="rgba(0,0,0,0.07)"       strokeWidth="1" />
      <line x1="116" y1="116" x2="288" y2="116" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <line x1="116" y1="122" x2="288" y2="122" stroke="rgba(0,0,0,0.06)"       strokeWidth="1" />
      {/* Bottom edge shadow */}
      <rect x="116" y="132" width="172" height="4" rx="1" fill="rgba(0,0,0,0.13)" />

      {/* ════ SHORT GLASS NECK ════ */}
      <rect x="148" y="134" width="108" height="18" rx="5" fill="#d0d0ce" />
      <rect x="148" y="134" width="14"  height="18" rx="5" fill="white" opacity="0.3" />

      {/* ════ GLASS BODY ════ */}
      <rect x="112" y="148" width="180" height="206" rx="18" fill="#ebebea" />
      {/* Glass sheen overlay */}
      <rect x="112" y="148" width="180" height="206" rx="18" fill={`url(#${uid}gl)`} />
      {/* Left edge highlight */}
      <rect x="112" y="164" width="15" height="178" rx="7" fill="white" opacity="0.44" />
      {/* Right edge shadow */}
      <rect x="277" y="164" width="15" height="178" rx="7" fill="#808080" opacity="0.14" />

      {/* ════ WHITE PAPER LABEL ════ */}
      <rect x={labelX} y={labelY} width={labelW} height={labelH} rx="5" fill="white" />

      {/* Crown on label — centered */}
      {crownPaths(labelCrownW, labelCrownX, labelCrownY, 2.3)}

      {/* Product name — line 1 */}
      <text x={textX} y={nameY}
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="300" fontSize={fs} fill="#1a1a1a">
        {l1}
      </text>

      {/* Product name — line 2 (long names) */}
      {l2 && (
        <text x={textX} y={nameY + fs + 3}
              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
              fontWeight="300" fontSize={fs} fill="#1a1a1a">
          {l2}
        </text>
      )}

      {/* Dosage / subtitle */}
      {sub && (
        <text x={textX} y={subY}
              fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
              fontWeight="400" fontSize="11" fill="#555">
          {sub.length > 20 ? sub.slice(0, sub.lastIndexOf(" ", 18) || 18) : sub}
        </text>
      )}

      {/* RESEARCH USE ONLY — pinned to bottom of label */}
      <text x={textX} y={ruoY}
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="400" fontSize="8.5" fill="#999" letterSpacing="1.5">
        RESEARCH USE ONLY
      </text>

      {/* ── Diamond accent — bottom-right ── */}
      <path d="M378,378 L381,371 L388,368 L381,365 L378,358 L375,365 L368,368 L375,371 Z"
            fill="white" opacity="0.40" />
    </svg>
  );
}
