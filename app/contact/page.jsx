import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FollowJourneySection from "@/components/sections/FollowJourneySection";

export const metadata = {
  title: "Contact — Next Superstar",
  description:
    "Get in touch with the Next Superstar team. Reach out for press, partnerships, auditions, or general queries — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar variant="light" />
      <ContactSection />
      <FollowJourneySection />
      <Footer />
    </main>
  );
}