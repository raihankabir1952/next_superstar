import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const stats = [
  { value: "3", label: "Categories" },
  { value: "64", label: "Districts" },
  { value: "1", label: "Grand Finale" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F5F3] py-20 lg:py-[120px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* ========== LEFT: Image with gold decoration ========== */}
          <div className="flex min-w-0 justify-center lg:justify-start">
            <div
              className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[589px]"
              style={{ aspectRatio: "589 / 591" }}
            >
              {/* Gold decoration shape */}
              <div
                className="absolute rounded-br-[40px] rounded-tl-[40px] bg-[rgba(200,173,85,0.37)] lg:rounded-br-[50px] lg:rounded-tl-[50px]"
                style={{
                  left: "10.5%",
                  top: "13.5%",
                  right: "0",
                  bottom: "0",
                }}
              />

              {/* Photo */}
              <div
                className="absolute overflow-hidden rounded-br-[40px] rounded-tl-[40px] lg:rounded-br-[50px] lg:rounded-tl-[50px]"
                style={{
                  left: "0",
                  top: "0",
                  right: "6.6%",
                  bottom: "6.9%",
                }}
              >
                <Image
                  src="/images/about/about-models.jpg"
                  alt="Next Superstar contestants in traditional attire"
                  fill
                  sizes="(max-width: 1024px) 90vw, 550px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ========== RIGHT: Text ========== */}
          <div className="flex min-w-0 flex-col items-center gap-10 text-center lg:gap-[50px]">
            <div className="flex flex-col items-center gap-5">
              <SectionBadge>About</SectionBadge>
              <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
                What is Next Superstar
              </h2>
            </div>

            <p className="text-[15px] leading-[1.8] text-[#666666] sm:text-[16px] sm:leading-[1.75]">
              Next Superstar is a completely new genre of reality talent show,
              where new stars of the country will be discovered in three
              categories- Modeling, Dance, and Acting. There will be
              opportunities to register from any corner of the country. From the
              registration phase to the Grand Live Finale- throughout the entire
              journey, viewers will be able to see how the contestants are
              improving themselves, transforming, and emerging as true stars.
              This is not just a competition, but a unique platform for talent
              development and dream fulfillment.
            </p>

            <div className="flex w-full items-start justify-around pt-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-[6px]"
                >
                  <div className="text-[32px] font-medium leading-none text-[#AF8F5B] sm:text-[36px] lg:text-[40px]">
                    {item.value}
                  </div>
                  <div className="text-[15px] text-[#666666] sm:text-[18px] lg:text-[20px]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}