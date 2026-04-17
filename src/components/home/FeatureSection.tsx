import Link from "next/link";

export default function FeatureSection() {
  return (
    <section className="bg-cream py-14 lg:py-20">
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: image */}
        <div
          className="flex justify-center lg:justify-start"
          style={{ animation: "fadeInLeft 0.9s ease both" }}
        >
          {/* Placeholder until real feature image is provided */}
          <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-white to-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
            <span className="text-muted-text text-sm">Feature Image Placeholder</span>
          </div>
        </div>

        {/* Right: text */}
        <div style={{ animation: "fadeInRight 0.9s 0.1s ease both" }}>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-text leading-tight mb-5">
            Backed by Science,{" "}
            <span className="gold-gradient-text">Built for Researchers</span>
          </h2>
          <p className="text-mid-text text-lg leading-relaxed mb-6">
            Every compound in our catalog is selected based on peer-reviewed
            literature. We provide full molecular data, HPLC purity reports, and
            mass spectrometry validation so your research can move forward with
            confidence.
          </p>
          <p className="text-mid-text leading-relaxed mb-8">
            From individual peptides to complex blends, King Research is your
            single source for high-purity compounds with traceable
            documentation.
          </p>
          <Link
            href="/products"
            className="inline-block bg-dark-text text-white px-7 py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
          >
            Explore Our Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
