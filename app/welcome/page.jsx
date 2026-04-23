import WelcomeSection from "@/components/sections/WelcomeSection";

export const metadata = {
  title: "Welcome — Next Superstar",
  description:
    "Welcome to Next Superstar. Let's build your contestant profile and start your journey to stardom.",
};

export default function WelcomePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <WelcomeSection />
    </main>
  );
}