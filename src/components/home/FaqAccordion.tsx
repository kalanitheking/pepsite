"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main max-w-3xl">
        <h2 className="text-center gold-gradient-text text-3xl lg:text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-1">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-gray-200"
              >
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="font-semibold text-dark-text text-[15px]">
                    {faq.question}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p className="pb-5 text-muted-text text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faqs"
            className="inline-block border border-gray-400 text-dark-text px-8 py-3 rounded-md font-semibold text-sm hover:bg-gray-50 transition-colors"
          >
            Want to learn more? Explore our full FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
