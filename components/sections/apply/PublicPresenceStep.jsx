"use client";

import FloatingInput from "@/components/ui/FloatingInput";
import SelectField from "@/components/ui/SelectField";
import PhotoUploadField from "@/components/ui/PhotoUploadField";
import StepNav from "./StepNav";

const YES_NO = ["Yes", "No"];

export default function PublicPresenceStep({ data, onChange, onBack, onContinue }) {
  const handleField = (field) => (e) => onChange({ ...data, [field]: e.target.value });

  const handlePhotos = (photos) => onChange({ ...data, photos });

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10" noValidate>
      <SelectField
        id="pp-influencer"
        label="Are You an Influencer"
        value={data.isInfluencer}
        onChange={handleField("isInfluencer")}
        options={YES_NO}
      />
      <FloatingInput
        id="pp-facebook"
        label="Facebook Profile Link"
        type="url"
        value={data.facebookLink}
        onChange={handleField("facebookLink")}
      />
      <FloatingInput
        id="pp-instagram"
        label="Instagram Profile Link"
        type="url"
        value={data.instagramLink}
        onChange={handleField("instagramLink")}
      />
      <FloatingInput
        id="pp-other-social"
        label="Any Other Social Media Link"
        type="url"
        value={data.otherSocialLink}
        onChange={handleField("otherSocialLink")}
      />
      <FloatingInput
        id="pp-portfolio"
        label="Portfolio Link"
        type="url"
        value={data.portfolioLink}
        onChange={handleField("portfolioLink")}
      />
      <FloatingInput
        id="pp-why-join"
        label="Why Do You Want to Join Next Superstar?"
        value={data.whyJoin}
        onChange={handleField("whyJoin")}
        multiline
      />
      <FloatingInput
        id="pp-ultimate-goal"
        label="Ultimate goal in entertainment"
        value={data.ultimateGoal}
        onChange={handleField("ultimateGoal")}
        multiline
      />
      <FloatingInput
        id="pp-performance-type"
        label="Preferred Performance Type"
        value={data.performanceType}
        onChange={handleField("performanceType")}
        multiline
      />
      <FloatingInput
        id="pp-past-competition"
        label="Past Competition Experience"
        value={data.pastCompetition}
        onChange={handleField("pastCompetition")}
        multiline
      />
      <FloatingInput
        id="pp-three-words"
        label="3 Words to Describe Yourself"
        value={data.threeWords}
        onChange={handleField("threeWords")}
      />

      <PhotoUploadField
        id="pp-photos"
        label="Upload Up to 5 High Quality Photos (jpg or png preferred)"
        photos={data.photos || []}
        onChange={handlePhotos}
      />

      <FloatingInput
        id="pp-video"
        label="Performance Video Link"
        type="url"
        value={data.performanceVideoLink}
        onChange={handleField("performanceVideoLink")}
      />

      <StepNav onBack={onBack} />
    </form>
  );
}