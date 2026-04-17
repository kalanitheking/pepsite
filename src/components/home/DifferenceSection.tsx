import { differenceCards } from "@/data/differenceCards";

export default function DifferenceSection() {
  return (
    <section className="bg-cream py-14 lg:py-20">
      <div className="container-main">
        <h2 className="text-center gold-gradient-text text-3xl lg:text-4xl font-bold mb-3">
          The King Research Difference
        </h2>
        <p className="text-center text-mid-text max-w-2xl mx-auto mb-12">
          We hold every product to the same standard we&apos;d demand as
          researchers ourselves.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differenceCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-[rgba(173,128,41,0.1)]"
            >
              {/* Icon */}
              <div
                dangerouslySetInnerHTML={{ __html: card.icon }}
                className="w-8 h-8"
              />
              <h3 className="font-bold text-dark-text text-lg">{card.title}</h3>
              <p className="text-muted-text text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
