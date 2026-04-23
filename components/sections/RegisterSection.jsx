"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, Check } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FloatingInput from "@/components/ui/FloatingInput";
import SocialAuthButtons from "@/components/ui/SocialAuthButtons";

const accountTypes = [
  {
    id: "participant",
    title: "Participant",
    description: "Showcase your talent and compete",
  },
  {
    id: "voter",
    title: "Voter",
    description: "Support and vote for talent",
  },
];

export default function RegisterSection() {
  const router = useRouter();
  const [accountType, setAccountType] = useState("participant");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    // TODO: wire up to real signup endpoint
    setError("");
    console.log("Register submit", { accountType, ...form });

    // Route users based on account type: participants start their application,
    // voters go straight to the home page.
    if (accountType === "participant") {
      router.push("/welcome");
    } else {
      router.push("/");
    }
  };

  return (
    <section className="bg-[rgba(238,231,209,0.24)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[30px] px-5 pb-[30px] pt-[60px] sm:px-8 lg:px-20 lg:pt-[80px]">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
            Create Your Account
          </h1>
          <p className="text-[16px] leading-6 text-[#666666]">
            Join the journey to stardom
          </p>
        </div>

        {/* Card */}
        <div className="w-full max-w-[624px] rounded-[12px] bg-white px-6 py-10 shadow-[0px_0px_3px_7px_rgba(0,0,0,0.05)] sm:px-10 sm:py-[50px]">
          <div className="flex flex-col gap-8">
            {/* Tab switcher — Sign Up active, Sign In links to /login */}
            <div
              role="tablist"
              aria-label="Authentication"
              className="flex h-14 items-center gap-[10px] rounded-[12px] bg-[#FAF8F5] p-1"
            >
              <Link
                href="/login"
                role="tab"
                aria-selected="false"
                className="flex h-12 flex-1 items-center justify-center rounded-[8px] text-[16px] font-medium text-[#666666] transition hover:text-black"
              >
                Sign In
              </Link>
              <div
                role="tab"
                aria-selected="true"
                className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-white text-[16px] font-medium text-black shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              >
                Sign Up
              </div>
            </div>

            {/* Account Type */}
            <div className="flex flex-col gap-3">
              <p className="text-[14px] leading-5 text-[#666666]">
                Select Account Type
              </p>
              <div
                role="radiogroup"
                aria-label="Account type"
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                {accountTypes.map(({ id, title, description }) => {
                  const selected = accountType === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setAccountType(id)}
                      className={`flex flex-col items-start gap-1 rounded-[14px] border-2 border-solid px-5 py-[26px] text-left transition ${
                        selected
                          ? "border-[#C9A366] bg-[#FAF8F5]"
                          : "border-[#E5D9C6] bg-white hover:border-[#C9A366]/60"
                      }`}
                    >
                      <span className="text-[18px] leading-[27px] text-black">
                        {title}
                      </span>
                      <span className="text-[12px] font-medium leading-4 text-[#666666]">
                        {description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <FloatingInput
                id="register-full-name"
                label="Full Name"
                value={form.fullName}
                onChange={handleChange("fullName")}
                autoComplete="name"
                required
              />
              <FloatingInput
                id="register-email"
                label="Email Address"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                autoComplete="email"
                required
              />
              <FloatingInput
                id="register-password"
                label="Password"
                type="password"
                value={form.password}
                onChange={handleChange("password")}
                autoComplete="new-password"
                required
              />
              <FloatingInput
                id="register-confirm-password"
                label="Confirm Password"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                autoComplete="new-password"
                required
              />
              {accountType === "participant" && (
                <FloatingInput
                  id="register-dob"
                  label="Date of Birth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={handleChange("dateOfBirth")}
                  required
                  rightIcon={<Calendar size={24} strokeWidth={1.5} />}
                />
              )}

              {/* Terms checkbox */}
              <label
                htmlFor="register-terms"
                className="flex cursor-pointer select-none items-center justify-center gap-[10px]"
              >
                <input
                  id="register-terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (error) setError("");
                  }}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-solid border-[#AF8F5B] transition ${
                    agreed ? "bg-[#AF8F5B]" : "bg-white"
                  }`}
                >
                  {agreed && <Check size={14} strokeWidth={3} className="text-white" />}
                </span>
                <span className="text-[16px] font-medium text-[#666666]">
                  I agree to the{" "}
                  <Link href="#" className="text-[#AF8F5B] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#AF8F5B] hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {error && (
                <p role="alert" className="text-[14px] text-red-600">
                  {error}
                </p>
              )}

              <PrimaryButton type="submit" className="w-full">
                Create Account
              </PrimaryButton>
            </form>

            <SocialAuthButtons />
          </div>
        </div>

        {/* Copyright */}
        <p className="pt-5 text-center text-[14px] leading-5 text-[#666666]">
          © 2026 Next Superstar. ATN Bangla. All rights reserved.
        </p>
      </div>
    </section>
  );
}