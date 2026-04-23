import AppHeader from "@/components/layout/AppHeader";
import ShortlistedProfileSection from "@/components/sections/ShortlistedProfileSection";

export const metadata = {
  title: "Your Profile — Next Superstar",
  description:
    "Your Next Superstar contestant profile. View your number, current stage, photos, and videos.",
};

export default function ShortlistedProfilePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <AppHeader />
      <ShortlistedProfileSection />
    </main>
  );
}