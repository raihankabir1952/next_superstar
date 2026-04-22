import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const partners = [
  {
    name: "Apex",
    logo: "/images/partners/logo-apex.svg",
  },
  {
    name: "Keya",
    logo: "/images/partners/logo-keya.svg",
  },
  {
    name: "Lux",
    logo: "/images/partners/logo-lux.svg",
  },
  {
    name: "Pond's",
    logo: "/images/partners/logo-ponds.svg",
  },
  {
    name: "Lux",
    logo: "/images/partners/logo-lux.svg",
  },
  {
    name: "Pond's",
    logo: "/images/partners/logo-ponds.svg",
  },
  {
    name: "Apex",
    logo: "/images/partners/logo-apex.svg",
  },
  {
    name: "Keya",
    logo: "/images/partners/logo-keya.svg",
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-[#F5F5F3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Partners</SectionBadge>

          <h2 className="mt-6 text-[34px] font-light leading-[1.1] tracking-[0.02em] text-black sm:text-[40px] lg:text-[56px]">
            Official Partners
          </h2>

          <div className="mt-14 grid w-full grid-cols-2 items-center gap-y-12 gap-x-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-16">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center"
              >
                <div className="relative h-10 w-[110px] sm:h-12 sm:w-[140px]">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}