"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

function StarIcon({ size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M15.124 1.47965C15 1.25834 14.8192 1.07409 14.6003 0.945844C14.3814 0.8176 14.1323 0.75 13.8786 0.75C13.6249 0.75 13.3758 0.8176 13.1569 0.945844C12.938 1.07409 12.7573 1.25834 12.6332 1.47965C12.3415 2.01048 12.0611 2.54812 11.7918 3.09256C10.9433 4.81479 10.2219 6.59677 9.63342 8.42423C9.43071 9.05277 8.82988 9.48882 8.14155 9.50777C6.05499 9.56263 3.97522 9.76977 1.91884 10.1276C0.790087 10.3259 0.365712 11.6121 1.1678 12.3967C1.35057 12.5766 1.5353 12.754 1.72196 12.929C3.11768 14.2471 4.5934 15.4779 6.14071 16.6142C6.67592 17.0065 6.89613 17.6788 6.69196 18.2942C5.91422 20.632 5.35761 23.0376 5.02946 25.4794C4.88363 26.5805 6.06196 27.3578 7.08571 26.8328C9.11577 25.7919 11.057 24.5862 12.8899 23.2278C13.177 23.0182 13.5232 22.9053 13.8786 22.9053C14.2341 22.9053 14.5803 23.0182 14.8674 23.2278C16.6999 24.5867 18.6412 25.7924 20.6715 26.8328C21.6938 27.3578 22.8736 26.5805 22.7278 25.4794C22.6714 25.0662 22.6097 24.6555 22.5426 24.2471C22.2057 22.2274 21.7118 20.2371 21.0653 18.2942C20.8611 17.6788 21.0799 17.0065 21.6165 16.6142C23.372 15.328 25.0338 13.9186 26.5895 12.3967C27.3915 11.6121 26.9686 10.3259 25.8384 10.1276C23.7823 9.76769 21.7024 9.56052 19.6157 9.50777C19.2858 9.50252 18.9655 9.39566 18.6985 9.20176C18.4316 9.00786 18.2309 8.73635 18.1238 8.42423C17.349 6.01896 16.3445 3.6924 15.124 1.47965Z"
        fill="#AF8F5B"
        stroke="#AF8F5B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Demo data — swap these paths for real profile/photos/videos once the API is wired up.
const demoProfile = {
  contestantNumber: 12,
  name: "Nusrat Rahman",
  age: 22,
  location: "Khulna, Bangladesh",
  currentStage: "Round 1",
  category: "Dancing",
  avatar: "/images/contestants/samira-azad.png",
  photos: [
    "/images/contestants/samira-azad-1.png",
    "/images/contestants/samira-azad-2.png",
    "/images/contestants/samira-azad-3.png",
  ],
  videos: [
    {
      thumbnail: "/images/contestants/samira-azad-video.png",
      url: "#",
    },
  ],
};

export default function ShortlistedProfileSection({ profile = demoProfile }) {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-white pb-[80px] pt-[60px] lg:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[576px] flex-col gap-10 px-5 sm:px-8">
        <h2 className="text-[24px] font-medium leading-[23.8px] tracking-[0.28px] text-black">
          Your Profile
        </h2>

        {/* Profile header */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start">
          <div className="relative h-[234px] w-[220px] shrink-0 overflow-hidden rounded-[50px]">
            <Image
              src={profile.avatar}
              alt={`${profile.name} — profile photo`}
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[10px]">
              <StarIcon size={24} />
              <p className="text-[24px] font-medium leading-[33px] tracking-[0.44px] text-[#AF8F5B]">
                Contestant No. {profile.contestantNumber}
              </p>
            </div>

            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col gap-3 text-[20px] leading-normal tracking-[0.44px] text-[#666666]">
                <p>
                  {profile.name}, {profile.age}
                </p>
                <p>{profile.location}</p>
              </div>
              <p className="text-[20px] leading-[33px] tracking-[0.44px] text-[#666666]">
                Current Stage: {profile.currentStage}
              </p>
              <span className="inline-flex w-fit items-center justify-center rounded-[10px] bg-[rgba(227,203,166,0.2)] px-[10px] py-[3px] text-[16px] font-medium text-[#AF8F5B]">
                {profile.category}
              </span>
            </div>
          </div>
        </div>

        {/* Photos gallery */}
        {profile.photos?.length > 0 && (
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] leading-normal text-[#666666]">Photos</h3>
            <div className="flex flex-wrap gap-5">
              {profile.photos.map((src, index) => (
                <div
                  key={src + index}
                  className="relative h-[170px] w-[160px] overflow-hidden rounded-[50px]"
                >
                  <Image
                    src={src}
                    alt={`${profile.name} photo ${index + 1}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos gallery */}
        {profile.videos?.length > 0 && (
          <div className="flex flex-col gap-5">
            <h3 className="text-[20px] leading-normal text-[#666666]">Videos</h3>
            <div className="flex flex-wrap gap-5">
              {profile.videos.map((video, index) => (
                <button
                  type="button"
                  key={video.url + index}
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Play video ${index + 1}`}
                  className="relative h-[170px] w-[160px] shrink-0 overflow-hidden rounded-[50px] transition hover:opacity-90"
                >
                  <Image
                    src={video.thumbnail}
                    alt={`Video ${index + 1} thumbnail`}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black/30 backdrop-blur-sm">
                      <Play
                        size={28}
                        strokeWidth={2}
                        className="translate-x-0.5 text-[#AF8F5B]"
                        fill="#AF8F5B"
                      />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Simple video modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-[900px] overflow-hidden rounded-[12px] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {activeVideo.url && activeVideo.url !== "#" ? (
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="h-auto w-full"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center p-8 text-center text-white">
                  Video preview not available in demo.
                </div>
              )}
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black transition hover:bg-white"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}