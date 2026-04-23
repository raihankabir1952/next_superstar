"use client";

import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function ForgotPasswordSuccessStep() {
  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-[28px] font-light leading-[40px] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px]">
          Password Reset Successful
        </h1>
        <p className="max-w-[480px] text-[16px] leading-normal text-[#666666]">
          Your password has been successfully reset
        </p>
      </div>

      <PrimaryButton as={Link} href="/login">
        Continue to Sign In
      </PrimaryButton>
    </div>
  );
}