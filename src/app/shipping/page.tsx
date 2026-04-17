export const metadata = { title: "Shipping Policy | King Research" };

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-dark-text mb-2">Shipping Policy</h1>
        <p className="text-sm text-muted-text mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Processing Time</h2>
            <p>Orders are processed Monday through Friday, excluding federal holidays. Most orders are processed and shipped within <strong>1–2 business days</strong> of payment confirmation. Orders placed after 12:00 PM EST may be processed the following business day.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Shipping Methods &amp; Timeframes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-dark-text">Method</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-dark-text">Estimated Delivery</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-dark-text">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">USPS First Class</td>
                    <td className="p-3 border border-gray-200">3–5 business days</td>
                    <td className="p-3 border border-gray-200">Calculated at checkout</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">USPS Priority Mail</td>
                    <td className="p-3 border border-gray-200">2–3 business days</td>
                    <td className="p-3 border border-gray-200">Calculated at checkout</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">UPS Ground</td>
                    <td className="p-3 border border-gray-200">3–7 business days</td>
                    <td className="p-3 border border-gray-200">Calculated at checkout</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">UPS 2-Day Air</td>
                    <td className="p-3 border border-gray-200">2 business days</td>
                    <td className="p-3 border border-gray-200">Calculated at checkout</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-text">Delivery timeframes are estimates and not guaranteed. Delays may occur due to carrier issues, weather, or high order volume.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Free Shipping</h2>
            <p>Free standard shipping is available on orders of <strong>$200 or more</strong> (before taxes and after any applicable discounts) shipped within the contiguous United States.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Order Tracking</h2>
            <p>Once your order ships, you will receive a confirmation email with a tracking number. You can track your shipment directly on the carrier&apos;s website. Please allow up to 24 hours for tracking information to update after receiving your shipping confirmation.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Packaging</h2>
            <p>All products are shipped in discreet, unmarked packaging. Contents are not identified on the exterior of the package. Products requiring temperature stability are packaged with appropriate cold packs or insulation as needed.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Domestic Shipping</h2>
            <p>We ship to all 50 U.S. states and territories. Shipping is available to P.O. boxes for USPS methods. Some products may be restricted in certain states due to local regulations; we will contact you if your order cannot be fulfilled in your location.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">International Shipping</h2>
            <p>At this time, King Research ships <strong>within the United States only</strong>. We do not ship internationally. We are not responsible for any customs, duties, or import taxes for shipments outside the U.S.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Lost or Damaged Packages</h2>
            <p>If your package is lost in transit or arrives damaged, please contact us within <strong>7 days</strong> of the expected delivery date. We will work with the carrier to investigate and, where applicable, arrange a replacement shipment. King Research is not responsible for packages marked as delivered by the carrier.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Incorrect Address</h2>
            <p>Please ensure your shipping address is correct at checkout. King Research is not responsible for orders shipped to an incorrectly entered address. If you notice an error, contact us immediately at <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a> — we can make corrections before shipment but cannot intercept packages once dispatched.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Contact Us</h2>
            <p>For shipping inquiries, contact:<br />Email: <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a><br />Phone: <a href="tel:+10000000000" className="underline hover:text-dark-text">+1 (000) 000-0000</a><br />123 Research Blvd, Suite 100, Miami, FL 33101</p>
          </section>

        </div>
      </div>
    </div>
  );
}
