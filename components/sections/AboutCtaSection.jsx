import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function AboutCtaSection() {
  return (
    <section className="bg-[rgba(238,231,209,0.24)] py-[50px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px] text-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="[font-family:var(--font-montserrat),sans-serif] text-[32px] font-medium leading-[1.15] text-black sm:text-[40px] lg:text-[50px]">
              Your Story Starts Right Here
            </h2>
            <p className="[font-family:var(--font-montserrat),sans-serif] max-w-[720px] text-[16px] font-medium leading-[1.6] text-black sm:text-[18px] lg:text-[20px]">
              Applications open April 20, 2026. Limited spots available across
              all 64 districts. Free to apply.
            </p>
          </div>

          <PrimaryButton>Start Your Journey</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}