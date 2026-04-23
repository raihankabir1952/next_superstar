"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { ChevronLeft, Play, Check } from "lucide-react";

const MAX_VOTES = 3;
const STORAGE_KEY = "votedContestants";

function StarIcon({ size = 24 }) {
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

export default function ContestantProfileSection({ contestant }) {
  const [mounted, setMounted] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  // Load vote state from localStorage after mount (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const votedList = stored ? JSON.parse(stored) : [];
      setHasVoted(votedList.includes(contestant.slug));
    } catch (e) {
      setHasVoted(false);
    }
  }, [contestant.slug]);

  const toggleVote = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const votedList = stored ? JSON.parse(stored) : [];

      if (hasVoted) {
        const newList = votedList.filter((s) => s !== contestant.slug);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
        setHasVoted(false);
      } else {
        if (votedList.length >= MAX_VOTES) {
          alert("You can only vote for up to " + MAX_VOTES + " contestants a day");
          return;
        }
        const newList = [...votedList, contestant.slug];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
        setHasVoted(true);
      }
    } catch (e) {
      console.error("Voting error:", e);
    }
  };

  return (
    <section className="bg-white pt-20 pb-[140px]">
      <Container>
        <div className="flex flex-col gap-[50px]">
          <Link
            href="/contestants"
            className="inline-flex w-fit items-center gap-[10px] text-[#666666] transition hover:text-black"
          >
            <ChevronLeft size={24} strokeWidth={2} />
            <span className="text-[16px] leading-none">Back to Contestants</span>
          </Link>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="relative h-[340px] w-full max-w-[320px] shrink-0 overflow-hidden rounded-[72px]">
              <Image
                src={contestant.profileImage}
                alt={contestant.name}
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <StarIcon size={24} />
                <p className="text-[24px] font-medium leading-[33px] tracking-[0.44px] text-[#AF8F5B]">
                  Contestant No. {contestant.number}
                </p>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-3">
                  <p className="text-[20px] font-normal tracking-[0.44px] text-black">
                    {contestant.name}, {contestant.age}
                  </p>
                  <p className="text-[20px] font-normal tracking-[0.44px] text-black">
                    {contestant.city}, {contestant.country}
                  </p>
                </div>

                <p className="text-[20px] font-normal leading-[33px] tracking-[0.44px] text-black">
                  Current Stage: {contestant.stage}
                </p>

                <div className="inline-flex w-fit items-center justify-center rounded-[10px] bg-[rgba(227,203,166,0.2)] px-[10px] py-[3px]">
                  <span className="text-[16px] font-medium text-[#AF8F5B]">
                    {contestant.category}
                  </span>
                </div>
              </div>

              {/* Vote UI — changes based on state */}
              {mounted && hasVoted ? (
                <div className="flex w-full max-w-[332px] flex-col gap-5">
                  <div className="flex w-[158px] flex-col gap-3">
                    <div className="flex items-center justify-center gap-[10px]">
                      <Check size={24} strokeWidth={2.5} className="text-[#AF8F5B]" />
                      <span className="text-[16px] font-semibold text-[#AF8F5B]">
                        You Voted
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={toggleVote}
                      className="inline-flex h-[48px] w-full items-center justify-center rounded-[12px] border border-[#AF8F5B] px-6 text-[16px] font-semibold text-[#AF8F5B] transition hover:bg-[#AF8F5B]/10"
                    >
                      Remove Vote
                    </button>
                  </div>
                  <p className="text-[16px] text-[#666666]">
                    Users Can Vote Up to {MAX_VOTES} Participants a Day
                  </p>
                </div>
              ) : (
                <PrimaryButton className="w-fit" onClick={toggleVote}>
                  Vote Contestant No. {contestant.number}
                </PrimaryButton>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[20px] font-normal text-black">Photos</p>
            <div className="flex flex-wrap items-center gap-5">
              {contestant.photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative h-[170px] w-[160px] overflow-hidden rounded-[50px]"
                >
                  <Image
                    src={photo}
                    alt="Contestant photo"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-[20px] font-normal text-black">Videos</p>
            <div className="flex flex-wrap items-center gap-5">
              <div className="group relative h-[170px] w-[160px] cursor-pointer overflow-hidden rounded-[50px]">
                <Image
                  src={contestant.videoThumbnail}
                  alt="Video thumbnail"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                  <Play
                    size={40}
                    strokeWidth={1.5}
                    className="text-white drop-shadow-lg"
                    fill="rgba(255,255,255,0.3)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}