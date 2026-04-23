import AppHeader from "@/components/layout/AppHeader";
import RejectionStatusSection from "@/components/sections/RejectionStatusSection";

export const metadata = {
  title: "Application Update — Next Superstar",
  description:
    "Your Next Superstar application status update.",
};

export default function ApplyRejectedPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <AppHeader />
      <RejectionStatusSection />
    </main>
  );
}