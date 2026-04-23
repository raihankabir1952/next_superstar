import AppHeader from "@/components/layout/AppHeader";
import SubmissionSuccessSection from "@/components/sections/SubmissionSuccessSection";

export const metadata = {
  title: "Application Submitted — Next Superstar",
  description:
    "Your Next Superstar application has been submitted successfully. Our team will review and contact shortlisted contestants for the next stage.",
};

export default function ApplySuccessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <AppHeader />
      <SubmissionSuccessSection />
    </main>
  );
}