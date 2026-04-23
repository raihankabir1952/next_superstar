"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "@/components/layout/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import { contestants } from "@/lib/contestants";

const filters = ["All", "Acting", "Dancing", "Modeling"];

function StarIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M15.124 1.47965C15 1.25834 14.8192 1.07409 14.6003 0.945844C14.3814 0.8176 14.1323 0.75 13.8786 0.75C13.6249 0.75 13.3758 0.8176 13.1569 0.945844C12.938 1.07409 12.7573 1.25834 12.6332 1.47965C12.3415 2.01048 12.0611 2.54812 11.7918 3.09256C10.9433 4.81479 10.2219 6.59677 9.63342 8.42423C9.43071 9.05277 8.82988 9.48882 8.14155 9.50777C6.05499 9.56263 3.97522 9.76977 1.91884 10.1276C0.790087 10.3259 0.365712 11.6121 1.1678 12.3967C1.35057 12.5766 1.5353 12.754 1.72196 12.929C3.11768 14.2471 4.5934 15.4779 6.14071 16.6142C6.67592 17.0065 6.89613 17.6788 6.69196 18.2942C5.91422 20.632 5.35761 23.0376 5.02946 25.4794C4.88363 26.5805 6.06196 27.3578 7.08571 26.8328C9.11577 25.7919 11.057 24.5862 12.8899 23.2278C13.177 23.0182 13.5232 22.9053 13.8786 22.9053C14.2341 22.9053 14.5803 23.0182 14.8674 23.2278C16.6999 24.5867 18.6412 25.7924 20.6715 26.8328C21.6938 27.3578 22.8736 26.5805 22.7278 25.4794C22.6714 25.0662 22.6097 24.6555 22.5426 24.2471C22.2057 22.2274 21.7118 20.2371 21.0653 18.2942C20.8611 17.6788 21.0799 17.0065 21.6165 16.6142C23.372 15.328 25.0338 13.9186 26.5895 12.3967C27.3915 11.6121 26.9686 10.3259 25.8384 10.1276C23.7823 9.76769 21.7024 9.56052 19.6157 9.50777C19.2858 9.50252 18.9655 9.39566 18.6985 9.20176C18.4316 9.00786 18.2309 8.73635 18.1238 8.42423C17.349 6.01896 16.3445 3.6924 15.124 1.47965Z"
        fill="#C8AD55"
        stroke="#C8AD55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContestantsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredContestants =
    activeFilter === "All"
      ? contestants
      : contestants.filter(
          (c) => c.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="bg-white py-20 lg:py-[100px]">
      <Container>
        <div className="flex flex-col items-center gap-5">
          <SectionBadge>Contestant Search</SectionBadge>
          <h2 className="text-[28px] font-light leading-[1.15] tracking-[0.72px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[40px]">
            Meet the Contestants
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex h-[48px] items-center justify-center rounded-[10px] px-6 transition ${
                  isActive
                    ? "bg-[#AF8F5B] text-[16px] font-semibold text-white"
                    : "border border-[#AF8F5B] text-[16px] font-medium text-[#AF8F5B] hover:bg-[#AF8F5B]/10"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Contestant cards */}
        <div className="mt-10 grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {filteredContestants.map((contestant) => (
            <Link
              key={contestant.slug}
              href={`/contestants/${contestant.slug}`}
              className="group relative block h-[450px] overflow-hidden rounded-[50px] bg-black"
            >
              <Image
                src={contestant.profileImage}
                alt={contestant.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 407px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-[30px] pb-10 text-white">
                <div className="flex items-center gap-[6px]">
                  <StarIcon size={20} />
                  <span className="text-[16px] font-normal">
                    {contestant.category}
                  </span>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[20px] font-medium leading-none">
                    {contestant.name}, {contestant.age}
                  </h3>
                  <p className="text-[18px] font-normal">{contestant.city}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex h-[48px] items-center justify-center rounded-[12px] border border-[#AF8F5B] px-6 text-[16px] font-semibold text-[#AF8F5B] transition hover:bg-[#AF8F5B]/10"
          >
            View All Contestants
          </button>
        </div>
      </Container>
    </section>
  );
}