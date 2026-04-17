import Link from "next/link";
import Image from "next/image";
import FooterEmailForm from "./FooterEmailForm";

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white">
      {/* Email capture bar */}
      <div className="bg-[#111827] py-8">
        <div className="container-main text-center">
          <p className="text-sm text-gray-300 mb-3 font-medium uppercase tracking-wider">
            Join the King Research newsletter
          </p>
          <FooterEmailForm />
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-main py-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-8">
          {/* Brand + contact info */}
          <div className="sm:col-span-1">
            <Image
              src="/images/logo.svg"
              alt="King Research"
              width={160}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium research peptides with third-party verified purity. For
              laboratory and research use only.
            </p>
            {/* GMC-required contact info */}
            <ul className="space-y-1 text-gray-500 text-xs">
              <li>📞 <a href="tel:+10000000000" className="hover:text-gray-300 transition-colors">+1 (000) 000-0000</a></li>
              <li>📍 123 Research Blvd, Suite 100</li>
              <li className="pl-4">Miami, FL 33101</li>
              <li>✉️ <a href="mailto:orders@kingresearch.com" className="hover:text-gray-300 transition-colors">orders@kingresearch.com</a></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {[
                { label: "All Products", href: "/products" },
                { label: "Certificates (COAs)", href: "/certificates" },
                { label: "Affiliate Program", href: "/affiliate" },
                { label: "Wholesale", href: "/contact#wholesale" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:opacity-70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Account
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Create Account", href: "/register" },
                { label: "Sign In", href: "/login" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:opacity-70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Policies
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Shipping Policy", href: "/shipping" },
                { label: "Refund & Return Policy", href: "/refund" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:opacity-70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-4 max-w-4xl">
            <strong className="text-gray-400">Research Use Only.</strong> All
            products sold by King Research are intended solely for in vitro
            research and laboratory use. They are not approved by the FDA for
            human or animal consumption, and are not drugs, food, or cosmetics.
            King Research makes no representations as to the therapeutic
            efficacy of any compound. Researchers are responsible for ensuring
            compliance with all applicable laws and regulations in their
            jurisdiction.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
                { label: "Shipping", href: "/shipping" },
                { label: "Refunds", href: "/refund" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 text-xs hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} King Research. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
