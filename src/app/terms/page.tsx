export const metadata = { title: "Terms of Service | King Research" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-dark-text mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-text mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the King Research website (the "Site") or placing an order, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Site.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">2. Research Use Only</h2>
            <p className="mb-3">All products sold by King Research are intended <strong>solely for in vitro laboratory research and scientific study</strong>. They are not intended for human or animal consumption, diagnosis, treatment, cure, or prevention of any disease or condition. Our products:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Have not been approved by the U.S. Food and Drug Administration (FDA)</li>
              <li>Are not drugs, food, dietary supplements, or cosmetics</li>
              <li>Are not intended to be administered to humans or animals</li>
              <li>Are sold exclusively for in vitro research purposes</li>
            </ul>
            <p className="mt-3">By purchasing from King Research, you represent and warrant that you are a qualified researcher, scientist, or institution procuring these compounds for legitimate scientific research.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">3. Age and Eligibility Requirements</h2>
            <p>You must be at least 21 years of age to purchase from King Research. By creating an account or placing an order, you confirm that you meet this requirement. King Research reserves the right to request proof of age or identity at any time.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">4. Account Registration</h2>
            <p>An account is required to view pricing and complete purchases. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">5. Prohibited Uses</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Purchase products for human or animal consumption or administration</li>
              <li>Resell products without prior written authorization</li>
              <li>Use the Site for any unlawful purpose or in violation of any applicable laws or regulations</li>
              <li>Provide false or misleading information during account registration or checkout</li>
              <li>Attempt to gain unauthorized access to any portion of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">6. Compliance with Laws</h2>
            <p>You are solely responsible for ensuring that your purchase, possession, and use of our products comply with all applicable federal, state, local, and international laws and regulations. King Research makes no representations regarding the legality of its products in your jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">7. Product Descriptions and Pricing</h2>
            <p>King Research makes every effort to accurately describe products; however, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free. We reserve the right to correct errors and update information at any time without notice. Prices are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">8. Payment and Ordering</h2>
            <p>By placing an order, you authorize King Research to charge your selected payment method. All sales are subject to verification and acceptance. We reserve the right to refuse or cancel any order at our sole discretion, including orders that appear to involve resale for human use.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">9. Disclaimer of Warranties</h2>
            <p>THE SITE AND ALL PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. KING RESEARCH DISCLAIMS ALL WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">10. Limitation of Liability</h2>
            <p>TO THE FULLEST EXTENT PERMITTED BY LAW, KING RESEARCH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OUR PRODUCTS OR SITE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE SPECIFIC PRODUCT AT ISSUE.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">11. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless King Research, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorney's fees) arising from your use of the Site or products, your violation of these Terms, or your violation of any law or the rights of a third party.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">12. Intellectual Property</h2>
            <p>All content on the Site, including text, graphics, logos, and images, is the property of King Research or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">13. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Miami-Dade County, Florida.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">14. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Site. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">15. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a> or at 123 Research Blvd, Suite 100, Miami, FL 33101.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
