import AuthHeader from "@/components/layout/AuthHeader";
import ForgotPasswordFlow from "@/components/sections/forgot-password/ForgotPasswordFlow";

export const metadata = {
  title: "Reset Password — Next Superstar",
  description:
    "Reset your Next Superstar account password. Enter your email, verify with OTP, and set a new password.",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <AuthHeader />
      <ForgotPasswordFlow />
    </main>
  );
}