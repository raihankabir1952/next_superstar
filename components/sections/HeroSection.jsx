import Image from "next/image";
import Navbar from "../ui/Navbar";
import Container from "../layout/Container";
import PrimaryButton from "../ui/PrimaryButton";

function StarIcon({ size = 40 }) {
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
        fill="#C8AD55"
        stroke="#C8AD55"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-black/40" />

      <Navbar />

      <Container className="flex h-full items-center justify-center text-center">
        <div className="flex flex-col items-center gap-[30px] text-white">
          {/* Title with stars on both sides */}
          <div className="flex items-center justify-center gap-8 sm:gap-14 md:gap-20">
            <StarIcon size={40} />
            <h1 className="[font-family:var(--font-montserrat),sans-serif] text-[36px] font-medium leading-[1.1] text-white whitespace-nowrap sm:text-[44px] lg:text-[50px]">
              Next
              <br />
              Superstar
            </h1>
            <StarIcon size={40} />
          </div>

          {/* Subtitle */}
          <p className="text-[18px] font-medium text-white sm:text-[22px] md:text-[24px]">
            Discover the Next Superstars of Bangladesh
          </p>

          {/* Button */}
          <PrimaryButton>Start Your Journey</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}