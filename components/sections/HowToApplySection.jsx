import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const steps = [
  {
    number: "1",
    title: "Create Account",
    description:
      "Sign up with your name, email, and password. It takes under 2 minutes.",
  },
  {
    number: "2",
    title: "Choose Your Category",
    description:
      "Select Modeling, Dance, or Acting. You may only join in one category.",
  },
  {
    number: "3",
    title: "Upload Photos / Video",
    description:
      "Upload your high-quality photos and a short performance video.",
  },
  {
    number: "4",
    title: "Submit Application",
    description:
      "Review your details and submit. Save progress and return any time.",
  },
  {
    number: "5",
    title: "Shortlisting",
    description:
      "Our team will review all applications and shortlist the next stars.",
  },
];

export default function HowToApplySection() {
  return (
    <section id="apply" className="bg-[#F5F5F3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Process</SectionBadge>

          <h2 className="mt-6 text-[34px] font-light leading-[1.1] tracking-[0.02em] text-black sm:text-[40px] lg:text-[56px]">
            How to Apply
          </h2>

          <div className="mt-16 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-5 xl:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#AF8F5B] bg-[#F5F5F3] text-base font-medium text-[#AF8F5B]">
                  {step.number}
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute top-6 left-[50%] hidden h-px w-full border-t border-dashed border-[#AF8F5B]/50 xl:block" />
                )}

                <h3 className="mt-6 text-[22px] font-light leading-[1.2] text-black">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[220px] text-sm leading-[1.7] text-[#666666]">
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