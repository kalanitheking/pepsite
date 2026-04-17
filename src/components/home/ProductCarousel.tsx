"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container-main">
        <h2 className="text-center gold-gradient-text text-3xl lg:text-4xl font-bold mb-10">
          Our Top Selling Products
        </h2>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            544: { slidesPerView: 2 },
            921: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          className="!pb-10"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
