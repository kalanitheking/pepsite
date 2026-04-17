import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: text */}
        <div
          className="order-2 lg:order-1"
          style={{ animation: "fadeInUp 0.8s ease both" }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold text-dark-text leading-tight mb-5"
            style={{ animation: "fadeInUp 0.8s ease both" }}
          >
            Premium Research Peptides,{" "}
            <span className="gold-gradient-text">Third-Party Verified</span>
          </h2>
          <p
            className="text-mid-text text-lg leading-relaxed mb-8"
            style={{ animation: "fadeInDown 0.8s 0.2s ease both" }}
          >
            King Research supplies research-grade peptides and compounds with
            full documentation. Every batch is independently tested for purity
            and potency — because rigorous science demands a reliable source.
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeInUp 0.8s 0.35s ease both" }}
          >
            <Link
              href="/products"
              className="inline-block bg-dark-text text-white px-7 py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
            >
              Shop Peptides
            </Link>
            <Link
              href="/certificates"
              className="inline-block border border-gold text-gold px-7 py-3 rounded-md font-semibold text-sm hover:bg-cream transition-colors"
            >
              View COAs
            </Link>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          style={{ animation: "fadeInRight 0.9s 0.1s ease both" }}
        >
          {/* Placeholder until real hero image is provided */}
          <div className="w-full max-w-sm lg:max-w-none lg:w-96 aspect-[3/4] bg-gradient-to-br from-cream to-gray-200 rounded-2xl flex items-center justify-center">
            <span className="text-muted-text text-sm">Hero Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
