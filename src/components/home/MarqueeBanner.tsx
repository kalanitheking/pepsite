const TruckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const marqueeItems = [
  { Icon: TruckIcon, text: "Free shipping on orders $200+" },
  { Icon: ShieldIcon, text: "Third-Party Tested & COA Verified" },
  { Icon: TruckIcon, text: "Free shipping on orders $200+" },
  { Icon: ShieldIcon, text: "Third-Party Tested & COA Verified" },
  { Icon: TruckIcon, text: "Free shipping on orders $200+" },
  { Icon: ShieldIcon, text: "Third-Party Tested & COA Verified" },
];

export default function MarqueeBanner() {
  return (
    <div className="overflow-hidden bg-slate-900 py-2.5">
      <div
        className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {/* Render twice for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 text-white text-sm font-medium"
          >
            <item.Icon />
            {item.text}
            <span className="mx-4 text-white/30">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
