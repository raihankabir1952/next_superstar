"use client";

import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

const FIXED_OTP = "123456";
const OTP_LENGTH = 6;

export default function ForgotPasswordOtpStep({ email, onContinue }) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  useEffect(() => {
    // Focus first input on mount
    inputsRef.current[0]?.focus();
  }, []);

  const updateDigit = (index, value) => {
    // Allow only a single digit character
    const ch = value.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[index] = ch;
      return next;
    });

    if (ch && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    if (error) setError("");
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = Array(OTP_LENGTH).fill("");
    pasted.split("").forEach((ch, i) => {
      next[i] = ch;
    });
    setDigits(next);
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputsRef.current[focusIndex]?.focus();
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length !== OTP_LENGTH) {
      setError("Please enter all 6 digits.");
      return;
    }
    if (code !== FIXED_OTP) {
      setError("Invalid OTP. Hint: the code is 123456.");
      return;
    }
    setError("");
    onContinue();
  };

  const handleResend = () => {
    setDigits(Array(OTP_LENGTH).fill(""));
    inputsRef.current[0]?.focus();
    if (error) setError("");
    // TODO: call resend OTP endpoint when backend is ready
    console.log("Resend OTP to", email);
  };

  const displayEmail = email || "you@example.com";

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-[28px] font-light leading-[40px] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px]">
          Enter OTP
        </h1>
        <p className="max-w-[400px] text-[16px] leading-[22.75px] text-[#666666]">
          We&apos;ve sent a 6-digit code to {displayEmail}. Please enter it below to
          continue.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-[624px] rounded-[12px] bg-white px-6 py-10 shadow-[0px_0px_3px_7px_rgba(0,0,0,0.05)] sm:px-10 sm:py-[50px]">
        <div className="flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
            {/* 6 digit boxes */}
            <div
              className="flex items-center justify-between gap-2"
              onPaste={handlePaste}
            >
              {digits.map((d, i) => {
                const filled = d !== "";
                return (
                  <input
                    key={i}
                    ref={(el) => {
                      inputsRef.current[i] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={d}
                    onChange={(e) => updateDigit(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    aria-label={`OTP digit ${i + 1}`}
                    className={`h-[60px] w-[48px] rounded-[12px] border bg-white text-center text-[24px] font-medium outline-none transition focus:border-[#AF8F5B] focus:ring-0 sm:w-[70px] ${
                      filled
                        ? "border-2 border-[#AF8F5B] text-[#AF8F5B]"
                        : "border border-[#BBBBBB] text-black"
                    }`}
                  />
                );
              })}
            </div>

            {error && (
              <p role="alert" className="-mt-5 text-[14px] text-red-600">
                {error}
              </p>
            )}

            <PrimaryButton type="submit" className="w-full">
              Verify Code
            </PrimaryButton>
          </form>

          <p className="text-center text-[14px] leading-normal text-[#666666]">
            Didn&apos;t receive the code?{" "}
            <button
              type="button"
              onClick={handleResend}
              className="px-[3px] text-[#AF8F5B] hover:underline"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </>
  );
}