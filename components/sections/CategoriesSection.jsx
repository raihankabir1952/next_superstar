import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";

const categories = [
  {
    title: "Acting",
    description:
      "Express yourself through movement and mesmerize with your choreography.",
    image: "/images/categories/category-acting.jpg",
  },
  {
    title: "Dancing",
    description:
      "Showcase your emotions and expressions and captivate audiences with your acting.",
    image: "/images/categories/category-dancing.jpg",
  },
  {
    title: "Modelling",
    description:
      "Display grace, confidence, and style on the runway.",
    image: "/images/categories/category-modelling.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="bg-[#F5F5F3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionBadge>Talent</SectionBadge>

          <h2 className="mt-6 text-[34px] font-light leading-[1.1] tracking-[0.02em] text-black sm:text-[40px] lg:text-[56px]">
            Competition Categories
          </h2>

          <div className="mt-14 grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] bg-black"
              >
                <div className="relative h-[420px] w-full sm:h-[460px] lg:h-[500px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/25 transition duration-300 group-hover:bg-black/35" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-left text-white sm:p-7">
                  <h3 className="text-[28px] font-light leading-none sm:text-[32px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[290px] text-sm leading-[1.7] text-white/85 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}