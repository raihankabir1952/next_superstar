"use client";

import { ChevronDown } from "lucide-react";

export default function SelectField({
  id,
  label,
  value,
  onChange,
  options = [],
  required = false,
  className = "",
}) {
  const hasValue = value != null && value.toString().length > 0;

  return (
    <div
      className={`relative border-b border-solid border-[#666666] focus-within:border-[#AF8F5B] ${className}`}
    >
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full appearance-none border-0 bg-transparent pb-[20px] pr-8 pt-6 text-[16px] text-black outline-none focus:ring-0"
      >
        <option value="" disabled hidden></option>
        {options.map((opt) => {
          const optValue = typeof opt === "string" ? opt : opt.value;
          const optLabel = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={optValue} value={optValue}>
              {optLabel}
            </option>
          );
        })}
      </select>

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

      <ChevronDown
        size={24}
        strokeWidth={1.5}
        className="pointer-events-none absolute bottom-[22px] right-0 text-[#666666]"
      />
    </div>
  );
}