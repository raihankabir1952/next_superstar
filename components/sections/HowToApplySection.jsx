import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "1",
    title: "Create Account",
    description: "Sign up with your name, email and password. Takes under 2 minutes.",
  },
  {
    number: "2",
    title: "Choose Your Category",
    description: "Select Modeling, Dance, or Acting. You may only apply in one category.",
  },
  {
    number: "3",
    title: "Upload Photos / Video",
    description: "Upload two high-quality photos and a link to your performance video.",
  },
  {
    number: "4",
    title: "Submit Application",
    description: "Review your details and submit. Save progress and return any time.",
  },
  {
    number: "5",
    title: "Shortlisting",
    description: "Shortlisted contestants will be notified by email with next steps.",
  },
];

export default function HowToApplySection() {
  return (
    <section id="apply" className="bg-[#F5F5F3] py-20 sm:py-24 lg:py-[140px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-5">
            <SectionBadge>Process</SectionBadge>
            <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
              How to Apply
            </h2>
          </div>

          {/* Circles with connecting dashed lines (desktop) */}
          <div className="mt-[50px] hidden w-full max-w-[1098px] items-center xl:flex">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-1 items-center">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#AF8F5B] bg-[#F5F5F3] font-sans text-[18px] font-semibold text-[#AF8F5B]">
                  {step.number}
                </div>
                {index !== steps.length - 1 && (
                  <div className="h-px flex-1 border-t border-dashed border-[#AF8F5B]/70" />
                )}
              </div>
            ))}
          </div>

          {/* Step contents */}
          <div className="mt-[30px] grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-[30px]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center gap-3 text-center"
              >
                {/* Mobile-only circle */}
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#AF8F5B] bg-[#F5F5F3] text-[18px] font-semibold text-[#AF8F5B] xl:hidden">
                  {step.number}
                </div>
                <h3 className="text-[20px] font-medium leading-[1.2] text-black">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-[#666666]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}