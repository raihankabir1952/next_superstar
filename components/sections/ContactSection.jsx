"use client";

import { useState } from "react";
import { Mail, Phone, Building2 } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import PrimaryButton from "@/components/ui/PrimaryButton";

const contactDetails = [
  {
    label: "Email",
    value: "info@nextsuperstar.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "1-800-SUPERSTAR",
    icon: Phone,
  },
  {
    label: "Headquarters",
    value: "3 Avenue, Dhaka 1207",
    icon: Building2,
  },
];

const officeHours = [
  { day: "Weekdays", hours: "9:00 AM - 6:00 PM BST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM BST" },
  { day: "Sunday", hours: "Closed" },
];

function FloatingInput({ id, label, type = "text", value, onChange, required, multiline = false }) {
  const hasValue = value && value.length > 0;
  const commonClasses =
    "peer w-full border-0 bg-transparent pb-[20px] pt-6 text-[16px] text-black outline-none placeholder-transparent focus:ring-0";

  return (
    <div className="relative border-b border-solid border-[#666666] focus-within:border-[#AF8F5B]">
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          rows={1}
          placeholder={label}
          className={`${commonClasses} resize-none min-h-[28px]`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={label}
          className={commonClasses}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 text-[16px] leading-[19.5px] text-[#666666] transition-all duration-200 ${
          hasValue
            ? "top-0 text-[12px] text-[#AF8F5B]"
            : "top-6 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-[#AF8F5B]"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: wire up to real submit endpoint
    setSubmitted(true);
    setForm({ fullName: "", email: "", message: "" });
  };

  return (
    <section className="bg-white pb-[80px] pt-[60px] lg:pb-[100px] lg:pt-[80px]">
      <Container>
        <div className="flex flex-col items-center gap-5">
          <SectionBadge>Contact</SectionBadge>
          <h1 className="text-center text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
            Get in Touch
          </h1>
        </div>

        <div className="mt-[30px] grid gap-12 lg:grid-cols-2 lg:gap-x-[80px] xl:gap-x-[113px]">
          {/* Left: Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
              <div className="flex flex-col gap-10">
                <FloatingInput
                  id="contact-full-name"
                  label="Full Name"
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  required
                />
                <FloatingInput
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
                <FloatingInput
                  id="contact-message"
                  label="Message"
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                  multiline
                />
              </div>

              <PrimaryButton type="submit" className="w-full">
                Send Message
              </PrimaryButton>

              {submitted && (
                <p
                  role="status"
                  aria-live="polite"
                  className="-mt-5 text-[16px] text-[#91713D]"
                >
                  Message sent successfully.
                </p>
              )}
            </form>
          </div>

          {/* Right: Info + Office Hours */}
          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-[15px]">
              {contactDetails.map(({ label, value, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-5 border-l-2 border-solid border-[#AF8F5B] pl-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#F9F9F8]">
                    <Icon size={24} strokeWidth={1.5} className="text-black" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[18px] font-medium leading-tight text-black">
                      {label}
                    </p>
                    <p className="text-[16px] leading-tight text-[#666666]">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-[12px] border border-solid border-[#AF8F5B] px-[30px] py-5">
              <div className="flex flex-col gap-5">
                <p className="text-[16px] font-medium text-black">Office Hours</p>
                <ul className="flex flex-col gap-3">
                  {officeHours.map(({ day, hours }) => (
                    <li
                      key={day}
                      className="flex items-center justify-between text-[16px] text-[#666666]"
                    >
                      <span>{day}</span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}