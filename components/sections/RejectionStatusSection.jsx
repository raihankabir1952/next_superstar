export default function RejectionStatusSection() {
  return (
    <section className="bg-white pb-[80px] pt-[60px] lg:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[576px] flex-col px-5 sm:px-8">
        <div className="flex flex-col items-center gap-[30px] rounded-[12px] border border-solid border-[#AF8F5B] p-[30px] text-center">
          <h2 className="text-[24px] font-medium leading-[33px] tracking-[0.44px] text-black">
            Application Update
          </h2>

          <div className="flex flex-col gap-4 text-[16px] leading-normal tracking-[0.44px] text-[#666666]">
            <p>Thank you for your interest in Next Superstar.</p>
            <p>
              After careful review, your application was not selected for this
              season.
            </p>
          </div>

          <p className="text-[16px] leading-normal tracking-[0.44px] text-[#666666]">
            We encourage you to apply again in future seasons.
          </p>
        </div>
      </div>
    </section>
  );
}