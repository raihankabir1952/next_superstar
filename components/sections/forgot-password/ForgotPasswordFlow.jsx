"use client";

import { useState } from "react";
import ForgotPasswordEmailStep from "./ForgotPasswordEmailStep";
import ForgotPasswordOtpStep from "./ForgotPasswordOtpStep";
import ForgotPasswordNewStep from "./ForgotPasswordNewStep";
import ForgotPasswordSuccessStep from "./ForgotPasswordSuccessStep";

export default function ForgotPasswordFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  // Scroll to top on step change for better UX
  const goToStep = (nextStep) => {
    setStep(nextStep);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="flex min-h-[calc(100vh-96px)] flex-col bg-[rgba(238,231,209,0.24)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center gap-[30px] px-5 pb-[30px] pt-[60px] sm:px-8 lg:px-20 lg:pt-[80px]">
        {step === 1 && (
          <ForgotPasswordEmailStep
            email={email}
            onEmailChange={setEmail}
            onContinue={() => goToStep(2)}
          />
        )}

        {step === 2 && (
          <ForgotPasswordOtpStep
            email={email}
            onContinue={() => goToStep(3)}
          />
        )}

        {step === 3 && (
          <ForgotPasswordNewStep onContinue={() => goToStep(4)} />
        )}

        {step === 4 && <ForgotPasswordSuccessStep />}

        {/* Copyright footer */}
        <p className="mt-auto pt-5 text-center text-[14px] leading-5 text-[#666666]">
          © 2026 Next Superstar. ATN Bangla. All rights reserved.
        </p>
      </div>
    </section>
  );
}