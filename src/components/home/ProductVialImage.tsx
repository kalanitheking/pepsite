interface Props {
  name: string;
}

// Split product identifier into up to 2 display lines for long names
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
  const fs = maxLen <= 10 ? 18 : maxLen <= 14 ? 16 : 14;

  // Unique gradient/clip IDs per product to avoid conflicts in the same DOM
  const uid = "v" + primary.replace(/[^a-z0-9]/gi, "").slice(0, 8).toLowerCase();

  // Crown paths (scaled to width w from original 144-wide design)
  // Original key points: peaks (18,0)(72,0)(126,0), valleys (44,56)(100,56), corners y=80
  // Inner cross: (18,0)→(100,56) and (126,0)→(44,56)
  // Bars: y=87 and y=97
  function crown(w: number, x: number, y: number, sw: number) {
    const s = w / 144;
    const p = (v: number) => +(v * s).toFixed(1);
    return (
      <g transform={`translate(${x},${y})`} stroke="#1e293b" strokeWidth={sw}
         fill="none" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={`0,${p(80)} ${p(18)},0 ${p(44)},${p(56)} ${p(72)},0 ${p(100)},${p(56)} ${p(126)},0 ${p(144)},${p(80)}`} />
        <line x1={p(18)} y1={0} x2={p(100)} y2={p(56)} />
        <line x1={p(126)} y1={0} x2={p(44)} y2={p(56)} />
        <line x1={0} y1={p(87)} x2={p(144)} y2={p(87)} />
        <line x1={0} y1={p(97)} x2={p(144)} y2={p(97)} />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"
         style={{ width: "100%", height: "100%", display: "block" }}
         aria-hidden="true">
      <defs>
        {/* Background gradient */}
        <linearGradient id={`${uid}bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f8f6" />
          <stop offset="100%" stopColor="#e0e0de" />
        </linearGradient>
        {/* Metal cap gradient */}
        <linearGradient id={`${uid}cp`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#686868" />
          <stop offset="18%"  stopColor="#bebebe" />
          <stop offset="50%"  stopColor="#ebebeb" />
          <stop offset="82%"  stopColor="#a8a8a8" />
          <stop offset="100%" stopColor="#585858" />
        </linearGradient>
        {/* Cap top face */}
        <linearGradient id={`${uid}ct`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#909090" />
          <stop offset="35%"  stopColor="#d4d4d4" />
          <stop offset="55%"  stopColor="#f0f0f0" />
          <stop offset="75%"  stopColor="#c0c0c0" />
          <stop offset="100%" stopColor="#787878" />
        </linearGradient>
        {/* Glass sheen */}
        <linearGradient id={`${uid}gl`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#b8b8b8" stopOpacity="0.65" />
          <stop offset="10%"  stopColor="#f2f2f2" stopOpacity="0.30" />
          <stop offset="50%"  stopColor="#fafafa" stopOpacity="0.07" />
          <stop offset="90%"  stopColor="#eeeeee" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#b0b0b0" stopOpacity="0.58" />
        </linearGradient>
      </defs>

      {/* ── Outer dark frame ── */}
      <rect width="400" height="400" rx="22" fill="#181717" />

      {/* ── Light inner background ── */}
      <rect x="8" y="8" width="384" height="384" rx="16" fill={`url(#${uid}bg)`} />

      {/* Vial drop shadow */}
      <ellipse cx="200" cy="368" rx="73" ry="9" fill="rgba(0,0,0,0.17)" />

      {/* ════ CAP (crimped aluminium) ════ */}
      <rect x="128" y="22" width="144" height="68" rx="11" fill={`url(#${uid}cp)`} />
      {/* Top face ellipse */}
      <ellipse cx="200" cy="25" rx="72" ry="13" fill={`url(#${uid}ct)`} />
      {/* Crimp base shadow */}
      <rect x="128" y="82" width="144" height="8" rx="3" fill="rgba(0,0,0,0.12)" />

      {/* White rubber stopper (visible through cap) */}
      <rect x="152" y="28" width="96" height="52" rx="5" fill="#f4f4f2" />
      <ellipse cx="200" cy="55" rx="34" ry="8" fill="#e6e6e4" />

      {/* ════ NECK ════ */}
      <rect x="157" y="88" width="86" height="22" rx="5" fill="#d4d4d2" />
      <rect x="157" y="88" width="13" height="22" rx="4" fill="white" opacity="0.4" />

      {/* ════ GLASS BODY ════ */}
      <rect x="112" y="106" width="176" height="256" rx="13" fill="#eeeeec" />
      {/* Glass sheen overlay */}
      <rect x="112" y="106" width="176" height="256" rx="13" fill={`url(#${uid}gl)`} />
      {/* Left highlight streak */}
      <rect x="112" y="120" width="16" height="228" rx="8" fill="white" opacity="0.36" />
      {/* Right shadow streak */}
      <rect x="272" y="120" width="16" height="228" rx="8" fill="#a0a0a0" opacity="0.18" />
      {/* Bottom inner shadow */}
      <ellipse cx="200" cy="355" rx="68" ry="8" fill="rgba(0,0,0,0.06)" />

      {/* ════ WHITE LABEL ════ */}
      <rect x="120" y="184" width="160" height="158" rx="4" fill="white" />

      {/* Crown on label — 62 px wide, left-aligned */}
      {crown(62, 128, 192, 2.3)}

      {/* ── Label text ── */}
      {/* Product name line 1 */}
      <text x="128" y="258"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="300" fontSize={fs} fill="#1a1a1a">
        {l1}
      </text>

      {/* Product name line 2 (only for long names) */}
      {l2 && (
        <text x="128" y={258 + fs + 3}
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="300" fontSize={fs} fill="#1a1a1a">
          {l2}
        </text>
      )}

      {/* Subtitle / secondary info */}
      {sub && (
        <text x="128" y={l2 ? 258 + (fs + 3) * 2 - 2 : 276}
              fontFamily="'Helvetica Neue', Arial, sans-serif"
              fontWeight="300" fontSize="11.5" fill="#555">
          {sub.length > 26 ? sub.slice(0, sub.lastIndexOf(" ", 24) || 24) : sub}
        </text>
      )}

      {/* RESEARCH USE ONLY — pinned to label bottom */}
      <text x="128" y="332"
            fontFamily="'Helvetica Neue', Arial, sans-serif"
            fontWeight="400" fontSize="9" fill="#999" letterSpacing="1.2">
        RESEARCH USE ONLY
      </text>

      {/* ════ Crown — top-left corner of image ════ */}
      {crown(44, 20, 18, 1.8)}

      {/* Diamond star — bottom right */}
      <path d="M376,376 L379,369 L386,366 L379,363 L376,356 L373,363 L366,366 L373,369 Z"
            fill="white" opacity="0.5" />
    </svg>
  );
}
