"use client";

import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";
import FloatingInput from "@/components/ui/FloatingInput";
import SocialAuthButtons from "@/components/ui/SocialAuthButtons";

export default function SignInSection() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up to real sign-in endpoint
    setError("");
    console.log("Sign in submit", form);
  };

  return (
    <section className="bg-[rgba(238,231,209,0.24)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[30px] px-5 pb-[30px] pt-[60px] sm:px-8 lg:px-20 lg:pt-[80px]">
        {/* Heading */}
        <h1 className="text-center text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
          Sign Into Your Account
        </h1>

        {/* Card */}
        <div className="w-full max-w-[624px] rounded-[12px] bg-white px-6 py-10 shadow-[0px_0px_3px_7px_rgba(0,0,0,0.05)] sm:px-10 sm:py-[50px]">
          <div className="flex flex-col gap-8">
            {/* Tab switcher — Sign In active, Sign Up links to /register */}
            <div
              role="tablist"
              aria-label="Authentication"
              className="flex h-14 items-center gap-[10px] rounded-[12px] bg-[#FAF8F5] p-1"
            >
              <div
                role="tab"
                aria-selected="true"
                className="flex h-12 flex-1 items-center justify-center rounded-[8px] bg-white text-[16px] font-medium text-black shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]"
              >
                Sign In
              </div>
              <Link
                href="/register"
                role="tab"
                aria-selected="false"
                className="flex h-12 flex-1 items-center justify-center rounded-[8px] text-[16px] font-medium text-[#666666] transition hover:text-black"
              >
                Sign Up
              </Link>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
              <div className="flex flex-col gap-10">
                <FloatingInput
                  id="signin-email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                  required
                />
                <div className="flex flex-col gap-5">
                  <FloatingInput
                    id="signin-password"
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange("password")}
                    autoComplete="current-password"
                    required
                  />
                  <Link
                    href="#"
                    className="self-end text-[14px] leading-5 text-[#AF8F5B] transition hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {error && (
                <p role="alert" className="text-[14px] text-red-600">
                  {error}
                </p>
              )}

              <PrimaryButton type="submit" className="w-full">
                Sign In
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