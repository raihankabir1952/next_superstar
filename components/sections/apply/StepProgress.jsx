export default function StepProgress({ currentStep, totalSteps = 5 }) {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="flex w-full items-center gap-3">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepIndex = index + 1;
          let fillPercent = 0;
          if (stepIndex < currentStep) fillPercent = 100;
          else if (stepIndex === currentStep) fillPercent = 15;
          // Current step shows a partial fill for visual progress indication
          return (
            <div
              key={stepIndex}
              className="relative h-[2px] flex-1 overflow-hidden bg-[#EEEEEE]"
            >
              <div
                className="absolute left-0 top-0 h-[2px] bg-[#AF8F5B] transition-all"
                style={{ width: `${fillPercent}%` }}
              />
            </div>
          );
        })}
      </div>
      <p className="text-[12px] uppercase tracking-[3px] text-[#666666]">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
}