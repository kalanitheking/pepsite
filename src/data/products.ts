import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: 1,
    slug: "glp3-rta",
    name: "GLP-3 RTA",
    price: "$55–$220",
    shortDescription:
      "Tri-agonist targeting GLP-1R, GIPR, and GCGR receptors. 39 amino acids. C₂₁₀H₃₄₅N₅₉O₆₃S.",
    image: "/images/products/glp3-rta.png",
    featured: true,
  },
  {
    id: 2,
    slug: "tesamorelin",
    name: "Tesamorelin | GHRH Analogue",
    price: "$75–$125",
    shortDescription:
      "Growth hormone-releasing hormone analogue. 44 amino acids. C₂₂₃H₃₇₀N₇₂O₆₉S, 5,195.9 g/mol.",
    image: "/images/products/tesamorelin.png",
    featured: true,
  },
  {
    id: 3,
    slug: "ghk-cu",
    name: "GHK-Cu | Copper Tripeptide-1",
    price: "$55–$90",
    shortDescription:
      "Gly-His-Lys·Cu²⁺ tripeptide complex. C₁₄H₂₃CuN₆O₄, ~402 g/mol. Blue-green lyophilized powder.",
    image: "/images/products/ghk-cu.png",
    featured: true,
  },
  {
    id: 4,
    slug: "glow-70",
    name: "Glow-70 | Triple Peptide Blend | 70mg",
    price: "$160.00",
    shortDescription:
      "BPC-157 / TB-500 / GHK-Cu triple blend. Synergistic healing, recovery, and regeneration support.",
    image: "/images/products/glow-70.png",
    featured: true,
  },
  {
    id: 5,
    slug: "mots-c",
    name: "MOTS-C | Mitochondrial-Derived Peptide",
    price: "$95–$150",
    shortDescription:
      "16 amino acid mitochondrial peptide. C₁₀₁H₁₅₂N₂₈O₂₂S₂, 2,174.6 g/mol. Metabolic and cellular support.",
    image: "/images/products/mots-c.png",
    featured: true,
  },
  {
    id: 6,
    slug: "cjc-1295-ipamorelin",
    name: "CJC-1295/Ipamorelin Blend | 10mg",
    price: "$85–$140",
    shortDescription:
      "Dual secretagogue blend (5mg/5mg). Synergistic GHRH + GHRP action for growth hormone optimization.",
    image: "/images/products/cjc-1295-ipamorelin.png",
    featured: true,
  },
  {
    id: 7,
    slug: "nad-plus",
    name: "NAD+ | Nicotinamide Adenine Dinucleotide | 1000mg",
    price: "$90–$160",
    shortDescription:
      "C₂₁H₂₇N₇O₁₄P₂, 663.43 g/mol. Essential coenzyme for cellular energy metabolism and DNA repair.",
    image: "/images/products/nad-plus.png",
  },
  {
    id: 8,
    slug: "bpc-157",
    name: "BPC-157 | Gastric Pentadecapeptide",
    price: "$50–$95",
    shortDescription:
      "15 amino acid body protection compound. C₆₂H₉₈N₁₆O₂₂, 1,419.53 g/mol. Research-grade purity.",
    image: "/images/products/bpc-157.png",
  },
  {
    id: 9,
    slug: "bpc-tb-blend",
    name: "BPC-157/TB-500 Blend | 10mg",
    price: "$80–$135",
    shortDescription:
      "Dual regenerative peptide blend (5mg/5mg). BPC-157 and Thymosin Beta-4 in a single vial.",
    image: "/images/products/bpc-tb-blend.png",
  },
  {
    id: 10,
    slug: "melanotan-ii",
    name: "Melanotan II | α-MSH Analogue | 10mg",
    price: "$45–$80",
    shortDescription:
      "C₅₀H₆₉N₁₅O₉, 1,024.2 g/mol. Cyclic heptapeptide alpha-melanocyte-stimulating hormone analogue.",
    image: "/images/products/melanotan-ii.png",
  },
  {
    id: 11,
    slug: "klow-80",
    name: "KLOW 80 | Quad Peptide Blend | 80mg",
    price: "$175.00",
    shortDescription:
      "BPC-157 / TB-500 / KPV / GHK-Cu quad blend. Comprehensive repair and anti-inflammatory support.",
    image: "/images/products/klow-80.png",
  },
  {
    id: 12,
    slug: "semax",
    name: "Semax | ACTH(4-10) Analogue | 10mg",
    price: "$55–$95",
    shortDescription:
      "MEHFPGP heptapeptide. C₃₇H₅₁N₉O₁₀S, 813.9 g/mol. Synthetic ACTH(4-10) analogue.",
    image: "/images/products/semax.png",
  },
  {
    id: 13,
    slug: "tb-500",
    name: "TB-500 | Thymosin Beta-4",
    price: "$60–$110",
    shortDescription:
      "43 amino acid naturally occurring peptide. C₂₁₂H₃₅₀N₅₆O₇₈S, ~4,963 g/mol. Tissue repair research.",
    image: "/images/products/tb-500.png",
  },
  {
    id: 14,
    slug: "kpv",
    name: "KPV | Anti-Inflammatory Tripeptide | 10mg",
    price: "$45–$75",
    shortDescription:
      "Lys-Pro-Val tripeptide. C₁₆H₃₁N₅O₄, ~357.45 g/mol. Derived from α-MSH C-terminal sequence.",
    image: "/images/products/kpv.png",
  },
  {
    id: 15,
    slug: "glutathione",
    name: "Glutathione | Reduced Tripeptide | 1500mg",
    price: "$65–$120",
    shortDescription:
      "γ-Glu-Cys-Gly. C₁₀H₁₇N₃O₆S, 307.32 g/mol. Master antioxidant tripeptide in reduced form.",
    image: "/images/products/glutathione.png",
  },
  {
    id: 16,
    slug: "ipamorelin",
    name: "Ipamorelin | Selective GHRP | 5mg",
    price: "$40–$70",
    shortDescription:
      "C₃₈H₄₉N₉O₅, 711.9 g/mol. Selective growth hormone releasing peptide with clean receptor profile.",
    image: "/images/products/ipamorelin.png",
  },
  {
    id: 17,
    slug: "selank",
    name: "Selank | Synthetic Tuftsin Analogue | 10mg",
    price: "$50–$90",
    shortDescription:
      "TKPRPGP heptapeptide. ~751.9 g/mol. Synthetic analogue of the immunomodulatory peptide tuftsin.",
    image: "/images/products/selank.png",
  },
  {
    id: 18,
    slug: "epithalon",
    name: "Epithalon | Bioregulator Tetrapeptide | 10mg",
    price: "$45–$80",
    shortDescription:
      "Ala-Glu-Asp-Gly tetrapeptide. C₁₄H₂₂N₄O₉, 390.35 g/mol. Pineal bioregulator peptide.",
    image: "/images/products/epithalon.png",
  },
  {
    id: 19,
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 (No DAC) | Modified GRF (1-29) | 10mg",
    price: "$55–$100",
    shortDescription:
      "C₁₅₂H₂₅₂N₄₄O₄₂, 3,368.7 g/mol. Modified GRF(1-29) without drug affinity complex.",
    image: "/images/products/cjc-1295-no-dac.png",
  },
];

export const featuredProducts = products.filter((p) => p.featured);
