import Container from "@/components/layout/Container";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Contestants", href: "#" },
  { label: "How to Apply", href: "#apply" },
  { label: "News", href: "#" },
];

const supportLinks = [
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white pb-5 pt-[60px]">
      <Container>
        <div className="flex flex-col gap-[50px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Brand column */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/logo/logo-star.svg"
                  alt="Next Superstar logo"
                  width={24}
                  height={24}
                  className="shrink-0"
                />
                <span className="whitespace-nowrap text-[20px] font-normal leading-none text-black">
                  Next Superstar
                </span>
              </div>

              <p className="max-w-[405px] text-[14px] leading-[22.75px] text-[#666666]">
                Where talent meets opportunity. Discover your path to stardom
                with guidance from industry leaders.
              </p>

              <div className="flex items-center gap-5">
                <Link href="#">
                  <Image
                    src="/images/icons/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="opacity-80 transition hover:opacity-100"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/twitter.svg"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="opacity-80 transition hover:opacity-100"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="opacity-80 transition hover:opacity-100"
                  />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-semibold leading-5 text-[#AF8F5B]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-5 text-[#666666] transition hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-semibold leading-5 text-[#AF8F5B]">
                Support
              </h4>
              <ul className="flex flex-col gap-2">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] leading-5 text-[#666666] transition hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#AF8F5B] pt-4 text-[14px] text-[#666666] sm:flex-row">
            <p>© 2026 Next Superstar. ATN Bangla. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made by <span className="text-[#AF8F5B]">ApplyingNext</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}