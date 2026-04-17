import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-cream border border-[rgba(173,128,41,0.2)] rounded-[20px] overflow-hidden flex flex-col h-full">
      {/* Product image */}
      <div className="aspect-square bg-white flex items-center justify-center rounded-t-[10px] overflow-hidden">
        {/* Placeholder — swap with <Image> when product photos are provided */}
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <span className="text-muted-text text-xs text-center px-2">
            {product.name.split("|")[0].trim()}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="gold-gradient-text font-bold text-[19px] leading-tight">
          {product.name}
        </h3>
        <p className="gold-gradient-text font-bold text-[18px]">
          {product.price}
        </p>
        <p className="text-muted-text text-sm leading-relaxed flex-1">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-2 inline-block text-center bg-dark-text text-white text-sm px-4 py-2 rounded-[6px] hover:bg-opacity-80 transition-opacity"
        >
          Select options
        </Link>
      </div>
    </div>
  );
}
