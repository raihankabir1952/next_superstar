"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepProgress from "./StepProgress";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PhysicalInfoStep from "./PhysicalInfoStep";
import BackgroundSkillsStep from "./BackgroundSkillsStep";
import PublicPresenceStep from "./PublicPresenceStep";
import ReviewStep from "./ReviewStep";

const STEP_TITLES = {
  1: "Personal Details",
  2: "Physical Information",
  3: "Background & Skills",
  4: "Public Presence & Participation",
  5: "Review & Agreement",
};

const INITIAL_DATA = {
  personal: {
    fullName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    emergencyPhone: "",
    fatherName: "",
    motherName: "",
    district: "",
    address: "",
  },
  physical: {
    heightFt: "",
    weightKg: "",
    birthmark: "",
    hairColor: "",
    eyeColor: "",
    disability: "",
    allergies: "",
  },
  background: {
    skill: "",
    languages: [],
    highestEducation: "",
    currentProfession: "",
  },
  publicPresence: {
    isInfluencer: "",
    facebookLink: "",
    instagramLink: "",
    otherSocialLink: "",
    portfolioLink: "",
    whyJoin: "",
    ultimateGoal: "",
    performanceType: "",
    pastCompetition: "",
    threeWords: "",
    photos: [],
    performanceVideoLink: "",
  },
};

export default function ApplySection() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);

  // Scroll to top on step change for better UX
  const goToStep = (nextStep) => {
    setStep(nextStep);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const updateSection = (section) => (data) => {
    setFormData((prev) => ({ ...prev, [section]: data }));
  };

  const handleSubmit = () => {
    // TODO: wire up to real submission endpoint
    console.log("Application submitted", formData);
    router.push("/apply/success");
  };

  return (
    <section className="bg-white pb-[80px]">
      <div className="mx-auto flex w-full max-w-[576px] flex-col gap-[50px] px-5 pt-[60px] sm:px-8 lg:pt-[80px]">
        <StepProgress currentStep={step} />

        <div className="flex flex-col gap-[50px]">
          <h2 className="text-[24px] leading-[33px] tracking-[0.44px] text-black">
            {STEP_TITLES[step]}
          </h2>

          {step === 1 && (
            <PersonalDetailsStep
              data={formData.personal}
              onChange={updateSection("personal")}
              onContinue={() => goToStep(2)}
            />
          )}

          {step === 2 && (
            <PhysicalInfoStep
              data={formData.physical}
              onChange={updateSection("physical")}
              onBack={() => goToStep(1)}
              onContinue={() => goToStep(3)}
            />
          )}

          {step === 3 && (
            <BackgroundSkillsStep
              data={formData.background}
              onChange={updateSection("background")}
              onBack={() => goToStep(2)}
              onContinue={() => goToStep(4)}
            />
          )}

          {step === 4 && (
            <PublicPresenceStep
              data={formData.publicPresence}
              onChange={updateSection("publicPresence")}
              onBack={() => goToStep(3)}
              onContinue={() => goToStep(5)}
            />
          )}

          {step === 5 && (
            <ReviewStep
              formData={formData}
              onBack={() => goToStep(4)}
              onEdit={(stepIndex) => goToStep(stepIndex)}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </section>
  );
}