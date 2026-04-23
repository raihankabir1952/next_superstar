import Link from "next/link";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function WelcomeSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-start bg-white px-5 pt-[120px] sm:px-8 lg:pt-[150px]">
      <div className="flex flex-col items-center gap-[30px] text-center">
        {/* Tagline */}
        <p className="px-[34px] text-[12px] font-normal uppercase leading-[16.5px] tracking-[3.85px] text-[#AF8F5B]">
          Your Journey Begins
        </p>

        {/* Heading */}
        <h1 className="text-[28px] font-light leading-[46.8px] tracking-[0.72px] text-[#1A1A1A] sm:text-[32px] lg:text-[36px]">
          Welcome to
          <br />
          Next Superstar
        </h1>

        {/* Subtitle */}
        <p className="text-[16px] font-normal leading-[23.8px] tracking-[0.28px] text-[#666666]">
          Let&apos;s build your contestant profile. It only takes a few minutes.
        </p>

        {/* CTA */}
        <PrimaryButton as={Link} href="/apply">
          Start Your Application
        </PrimaryButton>

        {/* Subtle divider */}
        <span aria-hidden="true" className="h-px w-12 bg-[#E8E8E8]" />
      </div>
    </section>
  );
}