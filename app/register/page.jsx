import AuthHeader from "@/components/layout/AuthHeader";
import RegisterSection from "@/components/sections/RegisterSection";

export const metadata = {
  title: "Register — Next Superstar",
  description:
    "Create your Next Superstar account. Sign up as a participant to showcase your talent, or as a voter to support contestants on the journey to stardom.",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <AuthHeader />
      <div className="flex flex-1 flex-col">
        <RegisterSection />
      </div>
    </main>
  );
}