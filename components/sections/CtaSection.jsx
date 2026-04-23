import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { CalendarDays, Award, MapPin } from "lucide-react";

const highlights = [
  {
    title: "Application Deadline",
    value: "April 20, 2026",
    icon: CalendarDays,
  },
  {
    title: "Prize Package",
    value: "BDT 1 Lakh",
    icon: Award,
  },
  {
    title: "Audition Cities",
    value: "All 64 Districts",
    icon: MapPin,
  },
];

export default function CtaSection() {
  return (
    <section className="bg-[#EDE8DF] py-20 sm:py-24 lg:py-[88px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[38px] font-light leading-[1.1] tracking-[0.01em] text-black sm:text-[48px] lg:text-[60px]">
            Begin Your Stardom
          </h2>

          <p className="mt-4 text-base leading-[1.7] text-black sm:text-lg">
            Applications open April 20, 2026 · Limited spots available
          </p>

          <PrimaryButton className="mt-8">
            Create Account &amp; Start Application
          </PrimaryButton>

          <p className="mt-4 text-sm leading-[1.6] text-[#666666]">
            Free · Under 2 minutes · All 64 districts welcome
          </p>

          <div className="mt-10 h-px w-full bg-[#D8CFBF]" />

          <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D8CFBF] bg-white">
                    <Icon size={18} strokeWidth={1.75} className="text-[#AF8F5B]" />
                  </div>

                  <h3 className="text-sm font-medium uppercase tracking-[0.08em] text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#666666] sm:text-[15px]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}