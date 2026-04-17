import MarqueeBanner from "@/components/home/MarqueeBanner";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ProductCarousel from "@/components/home/ProductCarousel";
import DifferenceSection from "@/components/home/DifferenceSection";
import FaqAccordion from "@/components/home/FaqAccordion";

export default function HomePage() {
  return (
    <>
      <MarqueeBanner />
      <HeroSection />
      <FeatureSection />
      <ProductCarousel />
      <DifferenceSection />
      <FaqAccordion />
    </>
  );
}
