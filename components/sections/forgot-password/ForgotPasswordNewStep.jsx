"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FloatingInput from "@/components/ui/FloatingInput";

const RULES = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (pw) => pw.length >= 8,
  },
  {
    id: "uppercase",
    label: "One uppercase letter",
    test: (pw) => /[A-Z]/.test(pw),
  },
  {
    id: "number",
    label: "One number",
    test: (pw) => /\d/.test(pw),
  },
];

export default function ForgotPasswordNewStep({ onContinue }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const allRulesPass = RULES.every((rule) => rule.test(password));
    if (!allRulesPass) {
      setError("Please meet all the password requirements.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // TODO: call real password-reset endpoint when backend is ready
    onContinue();
  };

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-[28px] font-light leading-[40px] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px]">
          Create New Password
        </h1>
        <p className="max-w-[400px] text-[16px] leading-normal text-[#666666]">
          Your new password must be different from previously used passwords.
        </p>
      </div>

      {/* Card */}
      <div className="w-full max-w-[624px] rounded-[12px] bg-white px-6 py-10 shadow-[0px_0px_3px_7px_rgba(0,0,0,0.05)] sm:px-10 sm:py-[50px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
          <div className="flex flex-col gap-10">
            <FloatingInput
              id="new-password"
              label="New Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              autoComplete="new-password"
              required
            />
            <FloatingInput
              id="confirm-new-password"
              label="Confirm New Password"
              type="password"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
                if (error) setError("");
              }}
              autoComplete="new-password"
              required
            />
          </div>

          {/* Requirements list */}
          <div className="flex flex-col gap-3">
            <p className="text-[14px] leading-[19.5px] text-[#666666]">
              Password must contain:
            </p>
            <ul className="flex flex-col gap-1">
              {RULES.map((rule) => {
                const passed = rule.test(password);
                return (
                  <li
                    key={rule.id}
                    className={`flex items-center gap-[6px] text-[14px] leading-[19.5px] ${
                      passed ? "text-[#AF8F5B]" : "text-[#666666]"
                    }`}
                  >
                    {passed ? (
                      <Check size={16} strokeWidth={2.5} className="shrink-0" />
                    ) : (
                      <span aria-hidden="true" className="inline-block w-4 text-center">
                        •
                      </span>
                    )}
                    <span>{rule.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {error && (
            <p role="alert" className="-mt-5 text-[14px] text-red-600">
              {error}
            </p>
          )}

          <PrimaryButton type="submit" className="w-full">
            Reset Password
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}