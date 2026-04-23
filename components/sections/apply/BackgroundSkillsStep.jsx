"use client";

import FloatingInput from "@/components/ui/FloatingInput";
import SelectField from "@/components/ui/SelectField";
import TagsInput from "@/components/ui/TagsInput";
import StepNav from "./StepNav";

const SKILLS = ["Modelling", "Dance", "Acting"];
const EDUCATION_LEVELS = [
  "Secondary (SSC)",
  "Higher Secondary (HSC)",
  "Diploma",
  "Bachelor's",
  "Master's",
  "PhD",
  "Other",
];
const LANGUAGE_SUGGESTIONS = ["English", "Bangla", "Hindi", "Urdu", "Arabic"];

export default function BackgroundSkillsStep({ data, onChange, onBack, onContinue }) {
  const handleField = (field) => (e) => onChange({ ...data, [field]: e.target.value });

  const handleLanguages = (languages) => {
    onChange({ ...data, languages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
      <SelectField
        id="bg-skill"
        label="Choose Your Skill"
        value={data.skill}
        onChange={handleField("skill")}
        options={SKILLS}
        required
      />
      <TagsInput
        id="bg-languages"
        label="Languages"
        values={data.languages || []}
        onChange={handleLanguages}
        suggestions={LANGUAGE_SUGGESTIONS}
      />
      <SelectField
        id="bg-education"
        label="Highest Education"
        value={data.highestEducation}
        onChange={handleField("highestEducation")}
        options={EDUCATION_LEVELS}
        required
      />
      <FloatingInput
        id="bg-profession"
        label="Current Profession"
        value={data.currentProfession}
        onChange={handleField("currentProfession")}
      />

      <StepNav onBack={onBack} />
    </form>
  );
}