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
    <section id="about" className="bg-[#F5F5F3] py-20 lg:py-[100px]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[520px_minmax(0,1fr)]">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute left-6 top-6 h-full w-full rounded-[34px] bg-[rgba(200,173,85,0.37)]" />

            <div className="relative z-10 overflow-hidden rounded-[34px]">
              <Image
                src="/images/about/about-models.jpg"
                alt="Contestants in traditional attire"
                width={520}
                height={620}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-center">
            <SectionBadge>About</SectionBadge>

            <h2 className="mt-6 text-[34px] font-light leading-[1.1] tracking-[0.02em] text-black sm:text-[42px] lg:text-[64px]">
              What is Next Superstar
            </h2>

            <p className="mx-auto mt-8 max-w-[760px] text-base leading-[1.9] text-[#666666]">
              Next Superstar is a completely new genre of reality talent show,
              where new stars of the country will be discovered in three
              categories- Modeling, Dance, and Acting. There will be opportunities
              to register from any corner of the country. From the registration
              phase to the Grand Live Finale- throughout the entire journey,
              viewers will be able to see how the contestants are improving
              themselves, transforming, and emerging as true stars. This is not
              just a competition, but a unique platform for talent development and
              dream fulfillment.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-[56px] font-medium leading-none text-[#AF8F5B]">
                    {item.value}
                  </div>
                  <div className="mt-4 text-[18px] text-[#666666]">
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