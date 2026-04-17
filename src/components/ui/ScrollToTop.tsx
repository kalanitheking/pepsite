"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`scroll-top-btn fixed bottom-6 right-6 z-40 w-10 h-10 bg-dark-text text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-all ${
        visible ? "visible" : ""
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
