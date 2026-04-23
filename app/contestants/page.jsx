import Navbar from "@/components/ui/Navbar";
import ContestantsSection from "@/components/sections/ContestantsSection";
import VoteCtaSection from "@/components/sections/VoteCtaSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Contestants — Next Superstar",
  description:
    "Meet the Next Superstar contestants competing across Modeling, Dance, and Acting from all 64 districts of Bangladesh.",
};

export default function ContestantsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar variant="light" />
      <ContestantsSection />
      <VoteCtaSection />
      <Footer />
    </main>
  );
}