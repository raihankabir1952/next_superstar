import Link from "next/link";
import Image from "next/image";

export default function AuthHeader() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center px-5 py-6 sm:px-8 lg:px-20">
        <Link href="/" className="flex shrink-0 items-center gap-[10px]">
          <Image
            src="/images/logo/logo-star.svg"
            alt="Next Superstar logo"
            width={35}
            height={35}
            className="shrink-0"
            priority
          />
          <span className="whitespace-nowrap text-[24px] font-normal leading-none text-black sm:text-[30px]">
            Next Superstar
          </span>
        </Link>
      </div>
    </header>
  );
}