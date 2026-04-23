import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import { Clapperboard, Music, Camera } from "lucide-react";

const categories = [
  {
    title: "Acting",
    description:
      "Express yourself through movement and mesmerize with your choreography",
    image: "/images/categories/category-acting.jpg",
    Icon: Clapperboard,
  },
  {
    title: "Dancing",
    description:
      "Showcase your emotions and expressions and captivate audiences with your acting",
    image: "/images/categories/category-dancing.jpg",
    Icon: Music,
  },
  {
    title: "Modelling",
    description: "Display grace, confidence, and style on the runway",
    image: "/images/categories/category-modelling.jpg",
    Icon: Camera,
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categories"
      className="bg-[#F5F5F3] py-20 sm:py-24 lg:py-[140px]"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-5">
            <SectionBadge>Talent</SectionBadge>
            <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
              Competition Categories
            </h2>
          </div>

          <div className="mt-[50px] grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
            {categories.map(({ title, description, image, Icon }) => (
              <article
                key={title}
                className="group relative h-[477px] w-full overflow-hidden rounded-[50px] bg-black xl:max-w-[407px]"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Brown overlay - matches Figma rgba(98,76,41,0.54) */}
                <div className="absolute inset-0 bg-[rgba(98,76,41,0.54)]" />

                {/* Content bottom */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-[30px] pb-10 text-left text-white">
                  {/* Icon circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                    <Icon size={24} strokeWidth={1.75} className="text-white" />
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <h3 className="text-[20px] font-medium leading-none text-white">
                      {title}
                    </h3>
                    <p className="text-[14px] leading-[22.75px] text-white/90">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}