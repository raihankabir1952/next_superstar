import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { CalendarDays, Award, MapPin } from "lucide-react";

const highlights = [
  { title: "Application Deadline", value: "April 20, 2026", icon: CalendarDays },
  { title: "Prize Package", value: "BDT 1 Lakh", icon: Award },
  { title: "Audition Cities", value: "All 64 Districts", icon: MapPin },
];

export default function CtaSection() {
  return (
    <section className="bg-[rgba(238,231,209,0.24)] py-[50px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px] text-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="[font-family:var(--font-montserrat),sans-serif] text-[32px] font-medium leading-[1.15] text-black sm:text-[36px] lg:text-[40px]">
              Begin Your Stardom
            </h2>
            <p className="[font-family:var(--font-montserrat),sans-serif] text-[20px] font-medium text-black sm:text-[24px] lg:text-[30px]">
              Applications open April 20, 2026 · Limited spots available
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <PrimaryButton>
              Create Account &amp; Start Application
            </PrimaryButton>
            <p className="text-[16px] text-black">
              Free · Under 2 minutes · All 64 districts welcome
            </p>
          </div>

          <div className="h-px w-full bg-[#AF8F5B]/40" />

          <div className="flex w-full flex-col items-center gap-10 sm:flex-row sm:justify-center sm:gap-[100px]">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex w-[158px] flex-col items-center gap-5 text-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#AF8F5B] p-[2px]">
                    <Icon size={22} strokeWidth={1.5} className="text-[#AF8F5B]" />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h3 className="text-[16px] font-medium text-black">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-black">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}