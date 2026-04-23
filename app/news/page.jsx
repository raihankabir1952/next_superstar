import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import NewsListingSection from "@/components/sections/NewsListingSection";
import FollowJourneySection from "@/components/sections/FollowJourneySection";

export const metadata = {
  title: "News — Next Superstar",
  description:
    "Stay up to date with the latest announcements, audition schedules, and finale updates from Next Superstar.",
};

export default function NewsPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar variant="light" />
      <NewsListingSection />
      <FollowJourneySection />
      <Footer />
    </main>
  );
}