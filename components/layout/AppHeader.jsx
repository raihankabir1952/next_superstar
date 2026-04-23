"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppHeader({ onLogOut }) {
  const router = useRouter();

  const handleLogOut = () => {
    if (onLogOut) {
      onLogOut();
      return;
    }
    // Default behavior: clear local state and go home
    if (typeof window !== "undefined") {
      localStorage.removeItem("votedContestants");
    }
    router.push("/");
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-20">
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

        <button
          type="button"
          onClick={handleLogOut}
          className="text-[16px] text-[#666666] transition hover:text-black"
        >
          Log Out
        </button>
      </div>
    </header>
  );
}