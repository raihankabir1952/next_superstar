function StarCheckIcon({ size = 80 }) {
  // Gold star (same shape as logo-star) with a white checkmark overlay inside
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M43.21 4.23c-.354-.632-.87-1.158-1.496-1.524a4.108 4.108 0 0 0-4.094 0c-.625.366-1.142.892-1.496 1.524-.833 1.517-1.634 3.053-2.404 4.609a96.73 96.73 0 0 0-5.977 15.244c-.579 1.796-2.296 3.042-4.263 3.096-5.963.157-11.907.749-17.784 1.771-3.224.566-4.437 4.24-2.145 6.484.522.514 1.05 1.021 1.584 1.521 3.987 3.766 8.204 7.282 12.624 10.529 1.53 1.12 2.159 3.042 1.575 4.801a121.49 121.49 0 0 0-5.04 20.818c-.417 3.145 2.95 5.366 5.874 3.866A119.64 119.64 0 0 0 36.537 66.37c.82-.599 1.81-.922 2.825-.922 1.016 0 2.005.323 2.825.922 5.235 3.884 10.781 7.33 16.583 10.304 2.921 1.5 6.292-.721 5.876-3.866a74.92 74.92 0 0 0-.54-3.496 121.86 121.86 0 0 0-4.213-13.796c-.583-1.759.041-3.681 1.574-4.801 5.016-3.675 9.765-7.702 14.21-12.05 2.293-2.243 1.085-5.918-2.144-6.484a120.66 120.66 0 0 0-17.782-1.771c-.943-.015-1.857-.32-2.619-.874a4.54 4.54 0 0 1-1.636-2.238A96.56 96.56 0 0 0 43.21 4.23Z"
        fill="#C8AD55"
        stroke="#C8AD55"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark inside the star */}
      <path
        d="M29 40.5 36.5 48 51 33.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function SubmissionSuccessSection() {
  return (
    <section className="bg-white pb-[80px] pt-[60px] lg:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[576px] flex-col gap-[50px] px-5 sm:px-8">
        <div className="flex flex-col items-center gap-[10px] text-center">
          <StarCheckIcon size={80} />

          <p className="pt-5 text-[20px] leading-[33px] tracking-[0.44px] text-black">
            Application Submitted Successfully
          </p>

          <p className="text-[24px] leading-[33px] tracking-[0.44px] text-black">
            <span className="font-medium">Thank You for Applying to </span>
            <span className="font-medium text-[#AF8F5B]">Next Superstar</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 text-center text-[16px] leading-normal tracking-[0.44px] text-[#666666]">
          <p>A confirmation email has been sent to your email.</p>
          <p>
            Our team will review all applications and shortlisted contestants will
            be contacted for the next stage.
          </p>
        </div>
      </div>
    </section>
  );
}