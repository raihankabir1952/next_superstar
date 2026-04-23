import AuthHeader from "@/components/layout/AuthHeader";
import SignInSection from "@/components/sections/SignInSection";

export const metadata = {
  title: "Sign In — Next Superstar",
  description:
    "Sign into your Next Superstar account to continue your journey — vote for contestants, track your applications, and stay updated on the show.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <AuthHeader />
      <div className="flex flex-1 flex-col">
        <SignInSection />
      </div>
    </main>
  );
}