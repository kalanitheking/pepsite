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
  const sub = parts.length > 1 ? parts[parts.length - 1] : "";

  const [l1, l2] = splitLines(primary);
  const maxLen = Math.max(l1.length, l2 ? l2.length : 0);
  const fs = maxLen <= 7 ? 24 : maxLen <= 10 ? 20 : maxLen <= 14 ? 17 : 14;

  const uid = "v" + primary.replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase();

  // Crown geometry: center peak tallest (y=0), outer peaks at y=22%, deep valleys at y=60%
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

  // Layout constants — vial center x=202
  const vCX = 202;
  const bodyX = 112, bodyW = 180, bodyY = 150, bodyH = 202, bodyR = 16;
  const labelX = 118, labelW = 168, labelY = 170, labelH = 176;
  const labelCrownW = 66;
  const labelCrownX = vCX - labelCrownW / 2; // 169
  const labelCrownY = labelY + 10;
  // crown height (base-bar bottom) = w/144 * 95
  const labelCrownH = +(labelCrownW / 144 * 95).toFixed(0);
  const labelCrownBottom = labelCrownY + labelCrownH;

  const textX = 126;
  const nameY = labelCrownBottom + 40;
  const subY = l2 ? nameY + (fs + 3) * 2 + 2 : nameY + fs + 5;
  const ruoY = labelY + labelH - 9;

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", height: "100%", display: "block" }}
         aria-hidden="true">
      <defs>
        {/* ── Background ── */}
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f2f2f0" />
          <stop offset="100%" stopColor="#dcdcda" />
        </linearGradient>

        {/* ── Stopper: radial for 3-D dome top ── */}
        <radialGradient id={`${uid}rt`} cx="36%" cy="30%" r="68%">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="30%"  stopColor="#f4f4f2" />
          <stop offset="70%"  stopColor="#dcdcda" />
          <stop offset="100%" stopColor="#b4b4b2" />
        </radialGradient>
        {/* Stopper cylinder: left-right shading */}
        <linearGradient id={`${uid}sc`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#a8a8a6" />
          <stop offset="10%"  stopColor="#e4e4e2" />
          <stop offset="38%"  stopColor="#f8f8f6" />
          <stop offset="56%"  stopColor="#f6f6f4" />
          <stop offset="88%"  stopColor="#d4d4d2" />
          <stop offset="100%" stopColor="#9c9c9a" />
        </linearGradient>

        {/* ── Crimp: brushed-aluminum horizontal metallic ── */}
        <linearGradient id={`${uid}cr`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#424242" />
          <stop offset="8%"   stopColor="#888888" />
          <stop offset="24%"  stopColor="#d0d0d0" />
          <stop offset="42%"  stopColor="#f0f0f0" />
          <stop offset="50%"  stopColor="#fafafa" />
          <stop offset="58%"  stopColor="#ececec" />
          <stop offset="76%"  stopColor="#b4b4b4" />
          <stop offset="92%"  stopColor="#767676" />
          <stop offset="100%" stopColor="#383838" />
        </linearGradient>
        {/* Crimp top-to-bottom shading */}
        <linearGradient id={`${uid}cv`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.34)" />
          <stop offset="45%"  stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.20)" />
        </linearGradient>

        {/* ── Glass: left-right cylindrical sheen ── */}
        <linearGradient id={`${uid}gl`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#606060" stopOpacity="0.55" />
          <stop offset="5%"   stopColor="#a8a8a8" stopOpacity="0.30" />
          <stop offset="14%"  stopColor="#e0e0e0" stopOpacity="0.12" />
          <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="86%"  stopColor="#c8c8c8" stopOpacity="0.10" />
          <stop offset="95%"  stopColor="#909090" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#505050" stopOpacity="0.50" />
        </linearGradient>

        {/* ── Label edge wrap-shadow (left / right) ── */}
        <linearGradient id={`${uid}ll`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.10)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
        <linearGradient id={`${uid}lr`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.09)" />
        </linearGradient>

        {/* ── Clip path — glass body outline ── */}
        <clipPath id={`${uid}gc`}>
          <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={bodyR} />
        </clipPath>

        {/* ── Filters ── */}
        {/* Soft Gaussian blur for specular highlights */}
        <filter id={`${uid}hl`} x="-150%" y="-5%" width="400%" height="110%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
        {/* Drop-shadow for vial (bottom) */}
        <filter id={`${uid}sh`} x="-30%" y="-10%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* ── Dark outer frame ── */}
      <rect width="400" height="400" rx="26" fill="#1a1a1a" />

      {/* ── Light inner background ── */}
      <rect x="8" y="8" width="384" height="384" rx="20" fill={`url(#${uid}bg)`} />

      {/* ── Crown top-left ── */}
      {crownPaths(52, 14, 14, 2.1)}

      {/* ────────────────────────────────────────
          VIAL SHADOW — blurred ellipse behind
      ──────────────────────────────────────── */}
      <ellipse cx={vCX + 3} cy="358" rx="80" ry="14"
               fill="rgba(0,0,0,0.28)" filter={`url(#${uid}sh)`} />

      {/* ════════════════════════════════════════
          WHITE RUBBER STOPPER
      ════════════════════════════════════════ */}
      {/* Cylindrical sides */}
      <rect x="122" y="58" width="160" height="50" fill={`url(#${uid}sc)`} />
      {/* Top dome — radial gradient gives 3-D roundness */}
      <ellipse cx={vCX} cy="58" rx="80" ry="16" fill={`url(#${uid}rt)`} />
      {/* Soft highlight spot on top */}
      <ellipse cx="185" cy="51" rx="28" ry="9" fill="white" opacity="0.38"
               filter={`url(#${uid}hl)`} />
      {/* Bottom rim of stopper */}
      <ellipse cx={vCX} cy="108" rx="80" ry="12" fill="#a2a2a0" />

      {/* ════════════════════════════════════════
          SILVER ALUMINUM CRIMP RING
      ════════════════════════════════════════ */}
      <rect x="117" y="98" width="170" height="40" rx="3" fill={`url(#${uid}cr)`} />
      {/* Top-bottom shading overlay */}
      <rect x="117" y="98" width="170" height="40" rx="3" fill={`url(#${uid}cv)`} />
      {/* Brushed-metal texture: alternating light/dark thin lines */}
      {([102,106,110,114,118,122,126,130] as number[]).map((yy) => (
        <line key={`cl${yy}`} x1="117" y1={yy} x2="287" y2={yy}
              stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" />
      ))}
      {([104,108,112,116,120,124,128] as number[]).map((yy) => (
        <line key={`cd${yy}`} x1="117" y1={yy} x2="287" y2={yy}
              stroke="rgba(0,0,0,0.07)" strokeWidth="0.5" />
      ))}
      {/* Bottom shadow band */}
      <rect x="117" y="134" width="170" height="5" rx="1" fill="rgba(0,0,0,0.18)" />

      {/* ════════════════════════════════════════
          SHORT GLASS NECK
      ════════════════════════════════════════ */}
      <rect x="150" y="137" width="104" height="17" rx="5" fill="#c8c8c6" />
      <rect x="150" y="137" width="13"  height="17" rx="5" fill="white" opacity="0.22" />

      {/* ════════════════════════════════════════
          GLASS BODY
      ════════════════════════════════════════ */}
      {/* Base fill — light warm gray */}
      <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={bodyR} fill="#e8e8e6" />
      {/* Interior "content" — slightly cooler to suggest depth */}
      <rect x="130" y={bodyY + 4} width="144" height={bodyH - 8} rx="12" fill="#f0efee" opacity="0.55" />
      {/* Cylindrical glass sheen overlay */}
      <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={bodyR} fill={`url(#${uid}gl)`} />

      {/* ════════════════════════════════════════
          WHITE PAPER LABEL
      ════════════════════════════════════════ */}
      <rect x={labelX} y={labelY} width={labelW} height={labelH} rx="5" fill="white" />
      {/* Wrap-around curvature shadows */}
      <rect x={labelX} y={labelY} width="18" height={labelH} fill={`url(#${uid}ll)`} />
      <rect x={labelX + labelW - 18} y={labelY} width="18" height={labelH} fill={`url(#${uid}lr)`} />

      {/* ════════════════════════════════════════
          GLASS SPECULAR HIGHLIGHTS
          (drawn above label so they float over the glass)
      ════════════════════════════════════════ */}
      {/* Primary left-edge specular — blurred so it looks like real glass refraction */}
      <rect x="113" y={bodyY + 4} width="12" height={bodyH - 8}
            rx="6" fill="white" opacity="0.92"
            clipPath={`url(#${uid}gc)`}
            filter={`url(#${uid}hl)`} />
      {/* Secondary softer highlight just inside the primary */}
      <rect x="127" y={bodyY + 8} width="5" height={bodyH - 16}
            rx="3" fill="white" opacity="0.48"
            clipPath={`url(#${uid}gc)`}
            filter={`url(#${uid}hl)`} />

      {/* ════════════════════════════════════════
          LABEL CONTENT
      ════════════════════════════════════════ */}
      {/* Crown centered on label */}
      {crownPaths(labelCrownW, labelCrownX, labelCrownY, 2.3)}

      {/* Product name — line 1 */}
      <text x={textX} y={nameY}
            fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
            fontWeight="300" fontSize={fs} fill="#1a1a1a">
        {l1}
      </text>
      {/* Product name — line 2 */}
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
            fill="white" opacity="0.38" />
    </svg>
  );
}
