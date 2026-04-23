"use client";

import { Calendar } from "lucide-react";
import FloatingInput from "@/components/ui/FloatingInput";
import SelectField from "@/components/ui/SelectField";
import StepNav from "./StepNav";

const DISTRICTS = [
  "Dhaka",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Sylhet",
  "Barishal",
  "Rangpur",
  "Mymensingh",
];

export default function PersonalDetailsStep({ data, onChange, onContinue }) {
  const handleField = (field) => (e) => onChange({ ...data, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
      <FloatingInput
        id="personal-full-name"
        label="Full Name"
        value={data.fullName}
        onChange={handleField("fullName")}
        autoComplete="name"
        required
      />
      <FloatingInput
        id="personal-dob"
        label="Date of Birth"
        type="date"
        value={data.dateOfBirth}
        onChange={handleField("dateOfBirth")}
        required
        rightIcon={<Calendar size={24} strokeWidth={1.5} />}
      />
      <FloatingInput
        id="personal-email"
        label="Email"
        type="email"
        value={data.email}
        onChange={handleField("email")}
        autoComplete="email"
        required
      />
      <FloatingInput
        id="personal-phone"
        label="Phone Number"
        type="tel"
        value={data.phone}
        onChange={handleField("phone")}
        autoComplete="tel"
        required
      />
      <FloatingInput
        id="personal-emergency"
        label="Emergency Number"
        type="tel"
        value={data.emergencyPhone}
        onChange={handleField("emergencyPhone")}
        required
      />
      <FloatingInput
        id="personal-father"
        label="Father's Name"
        value={data.fatherName}
        onChange={handleField("fatherName")}
        required
      />
      <FloatingInput
        id="personal-mother"
        label="Mother's Name"
        value={data.motherName}
        onChange={handleField("motherName")}
        required
      />
      <SelectField
        id="personal-district"
        label="District"
        value={data.district}
        onChange={handleField("district")}
        options={DISTRICTS}
        required
      />
      <FloatingInput
        id="personal-address"
        label="Address"
        value={data.address}
        onChange={handleField("address")}
        required
        multiline
      />
      <StepNav showBack={false} />
    </form>
  );
}