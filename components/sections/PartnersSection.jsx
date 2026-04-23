import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const partners = [
  { name: "Apex", logo: "/images/partners/logo-apex.svg" },
  { name: "Keya", logo: "/images/partners/logo-keya.svg" },
  { name: "Lux", logo: "/images/partners/logo-lux.svg" },
  { name: "Pond's", logo: "/images/partners/logo-ponds.svg" },
  { name: "Lux", logo: "/images/partners/logo-lux.svg" },
  { name: "Pond's", logo: "/images/partners/logo-ponds.svg" },
  { name: "Apex", logo: "/images/partners/logo-apex.svg" },
  { name: "Keya", logo: "/images/partners/logo-keya.svg" },
];

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className="bg-white py-20 sm:py-24 lg:py-[140px]"
    >
      <Container>
        <div className="flex flex-col items-center gap-[50px] text-center">
          <div className="flex flex-col items-center gap-5">
            <SectionBadge>Sponsors</SectionBadge>
            <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
              Official Partners
            </h2>
          </div>

          <div className="grid w-full grid-cols-2 items-center gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-16">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center"
              >
                <div className="relative h-[100px] w-[102px]">
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