import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import HowToApplySection from "@/components/sections/HowToApplySection";
import PartnersSection from "@/components/sections/PartnersSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <HowToApplySection />
      <PartnersSection />
      <CtaSection />
      <Footer />
    </main>
  );
}