"use client";

import { useState } from "react";

export default function FooterEmailForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-dark-text font-medium">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        required
        className="flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400"
      />
      <button
        type="submit"
        className="px-6 py-2.5 bg-dark-text text-white text-sm font-semibold rounded-md hover:bg-gray-700 transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
