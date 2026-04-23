"use client";

import { useState } from "react";
import { Pencil, Check } from "lucide-react";
import StepNav from "./StepNav";

// Calculate % completion for each section based on how many fields have values
function percentComplete(fields) {
  if (!fields.length) return 0;
  const filled = fields.filter((v) => {
    if (Array.isArray(v)) return v.length > 0;
    return v != null && v.toString().trim().length > 0;
  }).length;
  return Math.round((filled / fields.length) * 100);
}

export default function ReviewStep({ formData, onBack, onEdit, onSubmit }) {
  const [eligibilityConfirmed, setEligibilityConfirmed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState("");

  const sections = [
    {
      title: "Personal Details",
      stepIndex: 1,
      percent: percentComplete([
        formData.personal.fullName,
        formData.personal.dateOfBirth,
        formData.personal.email,
        formData.personal.phone,
        formData.personal.emergencyPhone,
        formData.personal.fatherName,
        formData.personal.motherName,
        formData.personal.district,
        formData.personal.address,
      ]),
    },
    {
      title: "Physical Information",
      stepIndex: 2,
      percent: percentComplete([
        formData.physical.heightFt,
        formData.physical.weightKg,
        formData.physical.birthmark,
        formData.physical.hairColor,
        formData.physical.eyeColor,
      ]),
    },
    {
      title: "Background & Skills",
      stepIndex: 3,
      percent: percentComplete([
        formData.background.skill,
        formData.background.languages,
        formData.background.highestEducation,
        formData.background.currentProfession,
      ]),
    },
    {
      title: "Public Presence & Participation",
      stepIndex: 4,
      percent: percentComplete([
        formData.publicPresence.facebookLink,
        formData.publicPresence.instagramLink,
        formData.publicPresence.whyJoin,
        formData.publicPresence.ultimateGoal,
        formData.publicPresence.photos,
      ]),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eligibilityConfirmed) {
      setError("Please confirm your eligibility.");
      return;
    }
    if (!termsAgreed) {
      setError("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }
    setError("");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[70px]" noValidate>
      <div className="flex flex-col gap-10">
        {sections.map(({ title, stepIndex, percent }) => (
          <div key={title} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="text-[20px] leading-[19.5px] text-black">{title}</h3>
              <button
                type="button"
                onClick={() => onEdit(stepIndex)}
                aria-label={`Edit ${title}`}
                className="text-[#666666] transition hover:text-black"
              >
                <Pencil size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="relative h-[2px] w-full bg-[#EEEEEE]">
                <div
                  className="absolute left-0 top-0 h-[2px] bg-[#AF8F5B] transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-[16px] leading-[19.5px] text-[#666666]">
                {percent}% complete
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {/* Eligibility checkbox */}
        <label
          htmlFor="review-eligibility"
          className="flex cursor-pointer select-none items-start gap-[10px]"
        >
          <input
            id="review-eligibility"
            type="checkbox"
            checked={eligibilityConfirmed}
            onChange={(e) => {
              setEligibilityConfirmed(e.target.checked);
              if (error) setError("");
            }}
            className="peer sr-only"
          />
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-solid border-[#AF8F5B] transition ${
              eligibilityConfirmed ? "bg-[#AF8F5B]" : "bg-white"
            }`}
          >
            {eligibilityConfirmed && (
              <Check size={14} strokeWidth={3} className="text-white" />
            )}
          </span>
          <span className="flex-1 text-[16px] leading-[19.2px] text-[#666666]">
            I confirm I am between 18–27 years of age and meet all eligibility
            requirements.
          </span>
        </label>

        {/* Terms checkbox */}
        <label
          htmlFor="review-terms"
          className="flex cursor-pointer select-none items-start gap-[10px]"
        >
          <input
            id="review-terms"
            type="checkbox"
            checked={termsAgreed}
            onChange={(e) => {
              setTermsAgreed(e.target.checked);
              if (error) setError("");
            }}
            className="peer sr-only"
          />
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border border-solid border-[#AF8F5B] transition ${
              termsAgreed ? "bg-[#AF8F5B]" : "bg-white"
            }`}
          >
            {termsAgreed && <Check size={14} strokeWidth={3} className="text-white" />}
          </span>
          <span className="flex-1 text-[16px] leading-[19.2px] text-[#666666]">
            I agree to the Terms &amp; Conditions and Privacy Policy of Next
            Superstar.
          </span>
        </label>

        <p className="pt-[30px] text-[14px] leading-[19.2px] text-[#666666]">
          Please ensure that all information provided is accurate and complete. Each
          applicant is permitted to submit only one application.
        </p>

        {error && (
          <p role="alert" className="text-[14px] text-red-600">
            {error}
          </p>
        )}
      </div>

      <StepNav onBack={onBack} continueLabel="Submit Application" />
    </form>
  );
}