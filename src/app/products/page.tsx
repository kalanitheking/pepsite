import { products } from "@/data/products";
import ProductCard from "@/components/home/ProductCard";

export const metadata = { title: "All Products | King Research" };

const categories = [
  { label: "GLP / Metabolic", slugs: ["glp3-rta", "tesamorelin", "mots-c", "nad-plus"] },
  { label: "Repair & Recovery", slugs: ["bpc-157", "tb-500", "bpc-tb-blend", "kpv", "glow-70", "klow-80"] },
  { label: "Skin & Anti-Aging", slugs: ["ghk-cu", "glutathione", "melanotan-ii", "epithalon"] },
  { label: "Cognitive & Neuro", slugs: ["semax", "selank"] },
  { label: "Growth Hormone", slugs: ["cjc-1295-ipamorelin", "cjc-1295-no-dac", "ipamorelin"] },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-text mb-1">King Research</p>
          <h1 className="text-3xl font-bold text-dark-text mb-3">Research Peptides &amp; Compounds</h1>
          <p className="text-muted-text text-sm max-w-2xl">
            Third-party tested, COA-verified research peptides. All products are sold for in vitro
            laboratory research purposes only. An account is required to view pricing and place orders.
          </p>
        </div>

        {/* Category sections */}
        {categories.map((cat) => {
          const catProducts = products.filter((p) => cat.slugs.includes(p.slug));
          if (!catProducts.length) return null;
          return (
            <section key={cat.label} className="mb-12">
              <h2 className="text-lg font-bold text-dark-text mb-5 pb-3 border-b border-gray-200">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Catch-all for any uncategorised products */}
        {(() => {
          const categorised = categories.flatMap((c) => c.slugs);
          const rest = products.filter((p) => !categorised.includes(p.slug));
          if (!rest.length) return null;
          return (
            <section className="mb-12">
              <h2 className="text-lg font-bold text-dark-text mb-5 pb-3 border-b border-gray-200">
                Other
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {rest.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          );
        })()}

        {/* Legal footer */}
        <div className="mt-4 p-6 bg-white rounded-xl border border-gray-100 text-xs text-gray-400 leading-relaxed">
          <strong className="text-gray-500">Research Use Only.</strong> All products sold by King Research
          are intended solely for in vitro research and laboratory use. They are not approved by the FDA
          for human or animal consumption and are not drugs, food, dietary supplements, or cosmetics.
          King Research makes no representations as to the therapeutic efficacy of any compound.
          Researchers are responsible for ensuring compliance with all applicable laws in their jurisdiction.
        </div>
      </div>
    </div>
  );
}
