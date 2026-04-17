"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import ProductVialImage from "./ProductVialImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showGate, setShowGate] = useState(false);

  return (
    <>
      <div className="bg-cream border border-[rgba(0,0,0,0.08)] rounded-[20px] overflow-hidden flex flex-col h-full">
        {/* Product image — empty alt intentional: prevents crawler indexing of product names */}
        <div className="aspect-square rounded-t-[10px] overflow-hidden">
          <ProductVialImage name={product.name} />
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <h3 className="font-bold text-[19px] leading-tight text-dark-text">
            {product.name}
          </h3>
          <p className="font-bold text-[18px] text-dark-text">
            {product.price}
          </p>
          <p className="text-muted-text text-sm leading-relaxed flex-1">
            {product.shortDescription}
          </p>
          <button
            onClick={() => setShowGate(true)}
            className="mt-2 text-center bg-dark-text text-white text-sm px-4 py-2 rounded-[6px] hover:bg-opacity-80 transition-opacity"
          >
            Select options
          </button>
        </div>
      </div>

      {/* Account gate modal */}
      {showGate && (
        <div
          className="fixed inset-0 z-[9997] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setShowGate(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/images/logo.svg"
              alt="King Research"
              width={160}
              height={40}
              className="h-10 w-auto mx-auto mb-5"
            />
            <h2 className="text-xl font-bold text-dark-text mb-2">
              Account Required
            </h2>
            <p className="text-muted-text text-sm mb-6 leading-relaxed">
              Create a free account to view pricing options and complete your
              purchase. Account verification helps us ensure compliance and
              protects our research community.
            </p>
            <div className="flex flex-col gap-3 w-full">
              <a
                href="/register"
                className="w-full bg-dark-text text-white py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity text-center"
              >
                Create Account
              </a>
              <a
                href="/login"
                className="w-full border border-gray-300 text-dark-text py-3 rounded-md font-semibold text-sm hover:bg-gray-50 transition-colors text-center"
              >
                Sign In
              </a>
            </div>
            <button
              onClick={() => setShowGate(false)}
              className="mt-4 text-xs text-gray-400 hover:text-dark-text transition-colors"
            >
              Continue browsing
            </button>
          </div>
        </div>
      )}
    </>
  );
}
