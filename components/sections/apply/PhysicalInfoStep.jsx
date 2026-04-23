"use client";

import FloatingInput from "@/components/ui/FloatingInput";
import SelectField from "@/components/ui/SelectField";
import StepNav from "./StepNav";

const HAIR_COLORS = ["Black", "Brown", "Blonde", "Red", "Grey", "Other"];
const EYE_COLORS = ["Brown", "Black", "Blue", "Green", "Hazel", "Grey"];

export default function PhysicalInfoStep({ data, onChange, onBack, onContinue }) {
  const handleField = (field) => (e) => onChange({ ...data, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
      <div className="grid grid-cols-2 gap-[30px]">
        <FloatingInput
          id="physical-height"
          label="Height (ft)"
          type="number"
          value={data.heightFt}
          onChange={handleField("heightFt")}
          required
        />
        <FloatingInput
          id="physical-weight"
          label="Weight (kg)"
          type="number"
          value={data.weightKg}
          onChange={handleField("weightKg")}
          required
        />
      </div>

      <FloatingInput
        id="physical-birthmark"
        label="Birthmark"
        value={data.birthmark}
        onChange={handleField("birthmark")}
      />

      <div className="grid grid-cols-2 gap-[30px]">
        <SelectField
          id="physical-hair"
          label="Hair Color"
          value={data.hairColor}
          onChange={handleField("hairColor")}
          options={HAIR_COLORS}
          required
        />
        <SelectField
          id="physical-eye"
          label="Eye Color"
          value={data.eyeColor}
          onChange={handleField("eyeColor")}
          options={EYE_COLORS}
          required
        />
      </div>

      <FloatingInput
        id="physical-disability"
        label="Disability (if any)"
        value={data.disability}
        onChange={handleField("disability")}
      />
      <FloatingInput
        id="physical-allergies"
        label="Allergies or Medical Conditions (if any)"
        value={data.allergies}
        onChange={handleField("allergies")}
      />

      <StepNav onBack={onBack} />
    </form>
  );
}