import PrimaryButton from "@/components/ui/PrimaryButton";

export default function StepNav({
  onBack,
  onContinue,
  continueLabel = "Continue",
  showBack = true,
}) {
  return (
    <div className="flex items-center justify-between">
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="text-[14px] uppercase leading-[16.5px] text-[#666666] transition hover:text-black"
        >
          Back
        </button>
      ) : (
        <span />
      )}
      <PrimaryButton
        type={onContinue ? "button" : "submit"}
        onClick={onContinue}
        className={showBack ? "" : "ml-auto"}
      >
        {continueLabel}
      </PrimaryButton>
    </div>
  );
}