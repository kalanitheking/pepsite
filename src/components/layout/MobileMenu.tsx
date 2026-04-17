"use client";

import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ open, onClose, navLinks }: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`mobile-menu-panel fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl flex flex-col ${
          open ? "open" : ""
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
          <Image src="/images/logo.svg" alt="King Research" width={140} height={36} className="h-8 w-auto" />
          <button onClick={onClose} aria-label="Close menu" className="p-1 text-dark-text">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col py-4 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block px-5 py-3 text-dark-text font-medium hover:text-gold hover:bg-cream transition-colors"
              >
                {link.label}
              </Link>
              {link.submenu?.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  onClick={onClose}
                  className="block px-8 py-2 text-sm text-mid-text hover:text-gold hover:bg-cream transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="px-5 py-4 border-t border-gray-100 flex items-center gap-4">
          <Link
            href="/products"
            onClick={onClose}
            className="flex items-center gap-2 text-sm text-dark-text hover:text-gold transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Cart ($0.00)
          </Link>
          <Link
            href="#"
            onClick={onClose}
            className="flex items-center gap-2 text-sm text-dark-text hover:text-gold transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Account
          </Link>
        </div>
      </div>
    </>
  );
}
