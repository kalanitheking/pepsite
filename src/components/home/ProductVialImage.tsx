interface Props {
  name: string;
}

function splitLines(s: string): [string, string] {
  if (s.length <= 18) return [s, ""];
  const slash = s.indexOf("/");
  if (slash > 3 && slash < s.length - 3) return [s.slice(0, slash + 1), s.slice(slash + 1)];
  const mid = Math.round(s.length / 2);
  const sp = s.lastIndexOf(" ", mid + 5);
  return sp > 2 ? [s.slice(0, sp), s.slice(sp + 1)] : [s.slice(0, 18), s.slice(18)];
}

export default function ProductVialImage({ name }: Props) {
  const parts = name.split(" | ");
  const primary = parts[0];
  const sub = parts[1] ?? "";

  const [l1, l2] = splitLines(primary);
  const maxLen = Math.max(l1.length, l2 ? l2.length : 0);
  const fs = maxLen <= 9 ? 20 : maxLen <= 14 ? 17 : 14;

  const uid = "v" + primary.replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase();

  /*
    Crown geometry — matches image 3 / reference logo EXACTLY:
    • Center peak is the TALLEST point  (y = 0)
    • Outer peaks are shorter            (y = 22% of crown height)
    • Deep valleys                        (y = 75% of crown height)
    • Inner lines: outer-peak → opposite valley (creates the X crossing)
    • Two parallel base bars

    All in a 144-wide × 80-tall master space, scaled by w/144.
  */
  function crownPaths(w: number, x: number, y: number, sw: number) {
    const s = w / 144;
    const n = (v: number) => +(v * s).toFixed(2);
    // key x coords
    const lc = 0,       lop = n(16),  lv = n(42),  cp = n(72),
          rv = n(102), rop = n(128), rc = n(144);
    // key y coords
    const cpy = 0,  opy = n(22), vy = n(60), by = n(80);
    const b1  = n(87), b2 = n(95);

    const pts = `${lc},${by} ${lop},${opy} ${lv},${vy} ${cp},${cpy} ${rv},${vy} ${rop},${opy} ${rc},${by}`;
    return (
      <g transform={`translate(${x},${y})`} stroke="#1e293b" strokeWidth={sw}
         fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={pts} />
        {/* outer-peak → opposite valley */}
        <line x1={lop} y1={opy} x2={rv}  y2={vy} />
        <line x1={rop} y1={opy} x2={lv}  y2={vy} />
        {/* double base bars */}
        <line x1={lc} y1={b1} x2={rc} y2={b1} />
        <line x1={lc} y1={b2} x2={rc} y2={b2} />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", height: "100%", display: "block" }}
         aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#f6f6f4" />
          <stop offset="100%" stopColor="#e0e0de" />
        </linearGradient>
        {/* Silver crimp ring */}
        <linearGradient id={`${uid}cr`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#707070" />
          <stop offset="20%"  stopColor="#c8c8c8" />
          <stop offset="50%"  stopColor="#f0f0f0" />
          <stop offset="80%"  stopColor="#b8b8b8" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        {/* Glass body sheen */}
        <linearGradient id={`${uid}gl`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#c8c8c6" stopOpacity="0.55" />
          <stop offset="12%"  stopColor="#f4f4f4" stopOpacity="0.25" />
          <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="88%"  stopColor="#f0f0f0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#b8b8b6" stopOpacity="0.50" />
        </linearGradient>
      </defs>

      {/* ── Dark outer frame ── */}
      <rect width="400" height="400" rx="24" fill="#1a1919" />

      {/* ── Light inner background ── */}
      <rect x="8" y="8" width="384" height="384" rx="18" fill={`url(#${uid}bg)`} />

      {/* ── Crown — top-left corner (inside light area, well above the vial) ── */}
      {crownPaths(52, 18, 16, 2.0)}

      {/* ── Drop shadow under vial ── */}
      <ellipse cx="200" cy="368" rx="70" ry="8" fill="rgba(0,0,0,0.16)" />

      {/* ════ WHITE STOPPER (dome-shaped, large) ════ */}
      {/* Dome top face */}
      <ellipse cx="200" cy="46" rx="64" ry="20" fill="#f8f8f6" />
      {/* Stopper cylindrical body */}
      <rect x="136" y="46" width="128" height="32" fill="#f8f8f6" />
      {/* Subtle inner dome shading */}
      <ellipse cx="200" cy="48" rx="28" ry="10" fill="rgba(0,0,0,0.04)" />

      {/* ════ SILVER CRIMP RING ════ */}
      <rect x="132" y="72" width="136" height="20" rx="2" fill={`url(#${uid}cr)`} />
      {/* Crimp lower shadow */}
      <rect x="132" y="88" width="136" height="4" rx="1" fill="rgba(0,0,0,0.10)" />

      {/* ════ GLASS NECK ════ */}
      <rect x="160" y="90" width="80" height="20" rx="4" fill="#d8d8d6" />
      <rect x="160" y="90" width="11" height="20" rx="4" fill="white" opacity="0.45" />

      {/* ════ GLASS BODY ════ */}
      <rect x="116" y="108" width="168" height="256" rx="14" fill="#ebebea" />
      {/* Glass sheen overlay */}
      <rect x="116" y="108" width="168" height="256" rx="14" fill={`url(#${uid}gl)`} />
      {/* Left edge highlight streak */}
      <rect x="116" y="122" width="14" height="228" rx="7" fill="white" opacity="0.4" />
      {/* Right edge shadow streak */}
      <rect x="270" y="122" width="14" height="228" rx="7" fill="#a8a8a8" opacity="0.18" />

      {/* ════ WHITE PAPER LABEL ════ */}
      <rect x="122" y="186" width="156" height="162" rx="4" fill="white" />

      {/* Crown on label — 70 px wide, left-aligned, upper portion */}
      {crownPaths(70, 131, 195, 2.4)}

      {/* Product name — line 1 */}
      <text x="131" y="264"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="300" fontSize={fs} fill="#1a1a1a">
        {l1}
      </text>

      {/* Product name — line 2 (long names only) */}
      {l2 && (
        <text x="131" y={264 + fs + 4}
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="300" fontSize={fs} fill="#1a1a1a">
          {l2}
        </text>
      )}

      {/* Subtitle */}
      {sub && (
        <text x="131" y={l2 ? 264 + (fs + 4) * 2 - 1 : 282}
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="300" fontSize="11" fill="#666">
          {sub.length > 24 ? sub.slice(0, sub.lastIndexOf(" ", 22) || 22) : sub}
        </text>
      )}

      {/* RESEARCH USE ONLY — pinned to bottom of label */}
      <text x="131" y="337"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="400" fontSize="8.5" fill="#aaa" letterSpacing="1.4">
        RESEARCH USE ONLY
      </text>

      {/* ── Diamond accent — bottom-right ── */}
      <path d="M376,376 L379,369 L386,366 L379,363 L376,356 L373,363 L366,366 L373,369 Z"
            fill="white" opacity="0.45" />
    </svg>
  );
}
