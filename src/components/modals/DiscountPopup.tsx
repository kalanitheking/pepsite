"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DiscountPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem("promo-dismissed");
      if (dismissed) return;
    } catch {
      return;
    }
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem("promo-dismissed", "1");
    } catch {
      // ignore
    }
    setShow(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      sessionStorage.setItem("promo-dismissed", "1");
    } catch {
      // ignore
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative flex flex-col items-center text-center">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark-text transition-colors"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Logo */}
        <div className="mb-4">
          <Image src="/images/logo.svg" alt="King Research" width={160} height={40} className="h-10 w-auto mx-auto" />
        </div>

        {submitted ? (
          <>
            <h2 className="text-xl font-bold text-dark-text mb-2">
              You&apos;re in! 🎉
            </h2>
            <p className="text-muted-text text-sm">
              Check your email for your 10% off discount code.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-dark-text mb-1">
              Get{" "}
              <span className="gold-gradient-text">10% OFF</span>{" "}
              Your First Order
            </h2>
            <p className="text-muted-text text-sm mb-5">
              Subscribe and receive an exclusive discount code.
            </p>

            {/* Trust row */}
            <div className="flex items-center justify-center gap-4 mb-6 text-xs text-mid-text">
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8892d" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Lab-Tested
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8892d" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Ships in 24h
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8892d" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                1000+ Orders
              </span>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="w-full bg-dark-text text-white py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
              >
                Subscribe &amp; Get 10% Off
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
