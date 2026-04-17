export const metadata = { title: "Refund & Return Policy | King Research" };

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-bold text-dark-text mb-2">Refund &amp; Return Policy</h1>
        <p className="text-sm text-muted-text mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 text-sm text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Overview</h2>
            <p>Due to the nature of our products — research-grade peptides and compounds — all sales are <strong>final</strong> unless an error occurs on our part or a product arrives damaged or defective. We take quality seriously and will work with you to resolve any legitimate issues.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Eligibility for Refund or Replacement</h2>
            <p className="mb-3">We will issue a refund or send a replacement at no charge in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Wrong item shipped</strong> — You received a product different from what you ordered.</li>
              <li><strong>Damaged in transit</strong> — Product arrived visibly damaged due to carrier mishandling.</li>
              <li><strong>Defective product</strong> — Product fails to meet our stated purity or quality specifications (COA documentation required).</li>
              <li><strong>Lost in transit</strong> — Package is confirmed lost by the carrier after investigation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Non-Refundable Items</h2>
            <p className="mb-3">We are unable to offer refunds or returns for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Change of mind or accidental orders (please review your cart carefully before purchasing)</li>
              <li>Products that have been opened, used, or tampered with</li>
              <li>Orders where incorrect shipping addresses were provided</li>
              <li>Delays caused by carriers, customs, or circumstances outside our control</li>
              <li>Products purchased during promotional or sale events (unless defective)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">How to Request a Refund or Replacement</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Contact us within <strong>7 days</strong> of receiving your order (or within 7 days of expected delivery for lost packages).</li>
              <li>Email <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a> with your order number, a description of the issue, and photos of any damaged or incorrect items.</li>
              <li>Our team will respond within 1–2 business days to review your request.</li>
              <li>If approved, a refund will be issued to your original payment method or a replacement will be shipped, at our discretion.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Refund Processing Time</h2>
            <p>Approved refunds are processed within <strong>5–7 business days</strong> of approval. Please allow an additional 3–5 business days for your bank or card issuer to post the credit to your account. We will notify you by email when the refund has been issued.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Returns</h2>
            <p>Due to regulatory and safety considerations, we do not accept physical returns of any peptide or research compound products. Do not ship any products back to us without prior written authorization. Unauthorized returns will not be accepted and will be discarded.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Order Cancellations</h2>
            <p>Orders may be cancelled for a full refund if the request is made before the order has been shipped. Once a shipping label has been created, we are unable to cancel the order. To request a cancellation, contact us immediately at <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a> with your order number.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Chargebacks</h2>
            <p>We strongly encourage you to contact us before initiating a chargeback with your bank. We are committed to resolving issues fairly and quickly. Fraudulent chargebacks may result in account suspension and reporting to relevant authorities.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark-text mb-3">Contact Us</h2>
            <p>For all refund and order inquiries:<br />Email: <a href="mailto:orders@kingresearch.com" className="underline hover:text-dark-text">orders@kingresearch.com</a><br />Phone: <a href="tel:+10000000000" className="underline hover:text-dark-text">+1 (000) 000-0000</a><br />123 Research Blvd, Suite 100, Miami, FL 33101</p>
          </section>

        </div>
      </div>
    </div>
  );
}
