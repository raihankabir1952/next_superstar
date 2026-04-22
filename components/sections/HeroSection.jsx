import Image from "next/image";
import Navbar from "../ui/Navbar";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Navbar */}

      <Navbar />

      {/* Hero Content */}

      <Container className="flex h-full items-center justify-center text-center">
        <div className="max-w-[820px] text-white">
          {/* Title */}

          <h1 className="font-heading text-[46px] font-light leading-[1.05] sm:text-[58px] md:text-[68px] lg:text-[76px]">
            Next
            <br />
            Superstar
          </h1>

          {/* Subtitle */}

          <p className="mt-6 text-[15px] leading-[1.7] text-white/90 sm:text-[17px] md:text-[19px]">
            Discover the Next Superstars of Bangladesh
          </p>

          {/* Button */}

          <PrimaryButton className="mt-8 lg:mt-10">
            Start Your Journey
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}