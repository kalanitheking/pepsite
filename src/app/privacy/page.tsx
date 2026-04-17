export const metadata = { title: "Privacy Policy | King Research" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-dark-text mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-text mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">1. Introduction</h2>
            <p>King Research ("we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">2. Information We Collect</h2>
            <p className="mb-3"><strong>Personal Information you provide:</strong></p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Name, email address, phone number</li>
              <li>Billing and shipping address</li>
              <li>Payment information (processed securely; we do not store card numbers)</li>
              <li>Account credentials</li>
              <li>Communications you send us</li>
            </ul>
            <p className="mb-3"><strong>Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address, browser type, and operating system</li>
              <li>Pages visited, time spent, and referring URLs</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Communicate about your order status and account</li>
              <li>Send newsletters and promotional emails (with your consent)</li>
              <li>Improve our Site and product offerings</li>
              <li>Comply with legal obligations and prevent fraud</li>
              <li>Enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">4. Cookies</h2>
            <p>We use cookies and similar technologies to enhance your experience. You may disable cookies in your browser settings; however, some features of the Site may not function properly without them. We use cookies for session management, preferences, and analytics.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">5. Sharing Your Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share it with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Service providers</strong> — payment processors, shipping carriers, email platforms — who assist in operating our Site and fulfilling orders</li>
              <li><strong>Legal authorities</strong> — when required by law, subpoena, or to protect the rights and safety of King Research or others</li>
              <li><strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes described in this Policy, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and associated data by contacting us.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">7. Security</h2>
            <p>We implement commercially reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">8. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">9. Children&apos;s Privacy</h2>
            <p>Our Site is not directed to individuals under 21 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, contact us immediately and we will delete it.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">10. Third-Party Links</h2>
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the Site after changes constitutes acceptance of the revised Policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">12. Contact Us</h2>
            <p>King Research<br />123 Research Blvd, Suite 100<br />Miami, FL 33101<br /><a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a><br /><a href="tel:+10000000000" className="underline hover:text-dark-text">+1 (000) 000-0000</a></p>
          </section>

        </div>
      </div>
    </div>
  );
}
