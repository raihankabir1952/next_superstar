"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FloatingInput from "@/components/ui/FloatingInput";

export default function ForgotPasswordEmailStep({ email, onEmailChange, onContinue }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    onContinue();
  };

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-[28px] font-light leading-[40px] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px]">
          Reset Your Password
        </h1>
        <p className="text-[16px] leading-normal text-[#666666]">
          Enter your email address to continue
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-[624px] rounded-[12px] bg-white px-6 py-10 shadow-[0px_0px_3px_7px_rgba(0,0,0,0.05)] sm:px-10 sm:py-[50px]">
        <div className="flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
            <FloatingInput
              id="forgot-email"
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => {
                onEmailChange(e.target.value);
                if (error) setError("");
              }}
              autoComplete="email"
              required
            />

            {error && (
              <p role="alert" className="-mt-5 text-[14px] text-red-600">
                {error}
              </p>
            )}

            <PrimaryButton type="submit" className="w-full">
              Send Reset Link
            </PrimaryButton>
          </form>

          <p className="text-center text-[14px] leading-5 text-[#666666]">
            Remember your password?{" "}
            <Link href="/login" className="text-[#AF8F5B] hover:underline">
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}