import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

export default function AboutHeroSection() {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-[140px]">
          {/* Left: Image with gold decoration */}
          <div className="flex min-w-0 justify-center lg:justify-start">
            <div
              className="relative w-full max-w-[420px] lg:max-w-[463px]"
              style={{ aspectRatio: "463 / 446" }}
            >
              <div
                className="absolute rounded-br-[50px] rounded-tl-[50px] bg-[rgba(200,173,85,0.37)]"
                style={{ left: "6.3%", top: "9.9%", right: "3.9%", bottom: "5.2%" }}
              />
              <div
                className="absolute overflow-hidden rounded-br-[50px] rounded-tl-[50px]"
                style={{ left: "0", top: "0", right: "9.3%", bottom: "10.3%" }}
              >
                <Image
                  src="/images/about/about-page-hero.png"
                  alt="Next Superstar contestants on stage"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left lg:gap-[50px]">
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <SectionBadge>About</SectionBadge>
              <h1 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[45px]">
                Discover the Next Superstar of Bangladesh
              </h1>
            </div>

            <p className="text-[15px] leading-[1.6] text-[#666666] sm:text-[16px] sm:leading-[23px]">
              Next Superstar is a completely new genre of reality talent show,
              where new stars of the country will be discovered in three
              categories- Modeling, Dance, and Acting. There will be
              opportunities to register from any corner of the country. From the
              registration phase to the Grand Live Finale throughout the entire
              journey, viewers will be able to see how the contestants are
              improving themselves, transforming, and emerging as true stars. A
              first-of-its-kind reality talent show that uncovers extraordinary
              performers across Modelling, Dance, and Acting from every corner
              of the country. This is not just a competition, but a unique
              platform for talent development and dream fulfillment.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}