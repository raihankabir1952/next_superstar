import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHeroSection from "@/components/sections/AboutHeroSection";
import EligibilitySection from "@/components/sections/EligibilitySection";
import JudgesSection from "@/components/sections/JudgesSection";
import AboutCtaSection from "@/components/sections/AboutCtaSection";

export const metadata = {
  title: "About — Next Superstar",
  description:
    "Discover the Next Superstar of Bangladesh. Learn about eligibility, our expert panel of judges, and how to apply for the country's biggest talent show.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar variant="light" />
      <AboutHeroSection />
      <EligibilitySection />
      <JudgesSection />
      <AboutCtaSection />
      <Footer />
    </main>
  );
}