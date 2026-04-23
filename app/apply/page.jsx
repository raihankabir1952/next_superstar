import AppHeader from "@/components/layout/AppHeader";
import ApplySection from "@/components/sections/apply/ApplySection";

export const metadata = {
  title: "Application — Next Superstar",
  description:
    "Build your Next Superstar contestant profile. Complete 5 steps to submit your application.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <AppHeader />
      <ApplySection />
    </main>
  );
}