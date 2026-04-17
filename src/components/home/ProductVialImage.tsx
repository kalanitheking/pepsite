interface Props {
  name: string;
}

export default function ProductVialImage({ name }: Props) {
  const parts = name.split(" | ");
  const line1 = parts[0];
  const line2 = parts[1] ?? "";
  const line3 = parts[2] ?? "";

  const fs = line1.length <= 10 ? 26 : line1.length <= 16 ? 22 : line1.length <= 22 ? 18 : 15;

  // Crown icon scaled to 80 wide (original 144 wide, scale = 80/144 ≈ 0.556)
  // Scaled coords: peaks (10,0)(40,0)(70,0), valleys (24,31)(56,31), corners (0,44)
  // Base bars at y=48 and y=54, all x 0→80
  const sw = 3.5; // visual stroke width at this scale

  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    >
      {/* Background */}
      <rect width="300" height="300" fill="#e9e9e7" />

      {/* White label panel */}
      <rect x="22" y="18" width="256" height="264" rx="7" fill="white" />

      {/* Crown icon centred in label — 80 wide, placed at x=110 */}
      <g
        transform="translate(110, 34)"
        stroke="#1e293b"
        strokeWidth={sw}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="0,44 10,0 24,31 40,0 56,31 70,0 80,44" />
        <line x1="10" y1="0" x2="56" y2="31" />
        <line x1="70" y1="0" x2="24" y2="31" />
        <line x1="0" y1="48" x2="80" y2="48" />
        <line x1="0" y1="54" x2="80" y2="54" />
      </g>

      {/* Divider */}
      <line x1="40" y1="108" x2="260" y2="108" stroke="#e0e0de" strokeWidth="1" />

      {/* Product name — main identifier */}
      <text
        x="150"
        y="142"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize={fs}
        fill="#1e293b"
      >
        {line1}
      </text>

      {/* Subtitle */}
      {line2 && (
        <text
          x="150"
          y="168"
          textAnchor="middle"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="400"
          fontSize="13"
          fill="#666"
        >
          {line2}
        </text>
      )}

      {/* Dosage / third segment */}
      {line3 && (
        <text
          x="150"
          y="188"
          textAnchor="middle"
          fontFamily="'Helvetica Neue', Arial, sans-serif"
          fontWeight="400"
          fontSize="12"
          fill="#888"
        >
          {line3}
        </text>
      )}

      {/* Bottom divider */}
      <line x1="40" y1="252" x2="260" y2="252" stroke="#e0e0de" strokeWidth="1" />

      {/* RESEARCH USE ONLY */}
      <text
        x="150"
        y="272"
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="400"
        fontSize="9.5"
        fill="#aaa"
        letterSpacing="1.8"
      >
        RESEARCH USE ONLY
      </text>
    </svg>
  );
}
