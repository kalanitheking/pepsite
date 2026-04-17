"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AgeGate() {
  const [show, setShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    try {
      const confirmed =
        localStorage.getItem("age-confirmed") ||
        sessionStorage.getItem("age-confirmed");
      if (!confirmed) setShow(true);
    } catch {
      // localStorage unavailable (e.g. private mode block)
      setShow(true);
    }
  }, []);

  const handleYes = () => {
    try {
      if (rememberMe) {
        localStorage.setItem("age-confirmed", "1");
      } else {
        sessionStorage.setItem("age-confirmed", "1");
      }
    } catch {
      // ignore storage errors
    }
    setShow(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image src="/images/logo.svg" alt="King Research" width={200} height={50} className="h-12 w-auto mx-auto" />
        </div>

        <h2 className="text-xl font-bold text-dark-text mb-2">
          Age Verification Required
        </h2>
        <p className="text-muted-text text-sm mb-6">
          Are you 21 years of age or older?
        </p>

        {/* Buttons */}
        <div className="flex gap-4 w-full mb-5">
          <button
            onClick={handleNo}
            className="flex-1 border border-gray-300 text-mid-text py-3 rounded-md font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            No
          </button>
          <button
            onClick={handleYes}
            className="flex-1 bg-dark-text text-white py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
          >
            Yes, I am 21+
          </button>
        </div>

        {/* Remember me */}
        <label className="flex items-center gap-2 text-sm text-muted-text cursor-pointer mb-5">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="accent-gold"
          />
          Remember me
        </label>

        {/* Disclaimer */}
        <p className="text-gray-400 text-xs leading-relaxed">
          By entering this site you confirm you are 21 or older and agree to our
          Terms of Service. All products are sold for research purposes only and
          are not intended for human consumption.
        </p>
      </div>
    </div>
  );
}
