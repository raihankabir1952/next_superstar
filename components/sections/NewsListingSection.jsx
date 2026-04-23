import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import { ArrowRight } from "lucide-react";
import { newsArticles } from "@/lib/news";

export default function NewsListingSection() {
  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px]">
          {/* Heading */}
          <div className="flex flex-col items-center gap-5">
            <SectionBadge>News</SectionBadge>
            <h1 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
              Latest Updates
            </h1>
          </div>

          {/* News grid */}
          <div className="grid w-full grid-cols-1 gap-[30px] pt-[30px] md:grid-cols-2 lg:gap-y-[70px]">
            {newsArticles.map((article) => (
              <article
                key={article.slug}
                className="flex w-full flex-col overflow-hidden rounded-[12px]"
              >
                {/* Image */}
                <div className="relative h-[290px] w-full overflow-hidden rounded-t-[12px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 625px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 rounded-b-[12px] border border-t-0 border-[#AF8F5B] bg-white p-[30px]">
                  <p className="text-[14px] text-[#666666]">{article.date}</p>

                  <div className="flex flex-col gap-[10px]">
                    <h2 className="text-[20px] font-medium leading-[1.3] text-black">
                      {article.title}
                    </h2>
                    <p className="text-[16px] leading-[1.6] text-[#666666]">
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    href={"/news/" + article.slug}
                    className="inline-flex w-fit items-center gap-[6px] text-[16px] font-medium text-[#AF8F5B] transition hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={20} strokeWidth={2} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}