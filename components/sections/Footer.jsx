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
    <footer className="bg-[#F5F5F3] pt-[60px] pb-[50px]">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo-star.svg"
                alt="Next Superstar logo"
                width={26}
                height={26}
                className="shrink-0"
              />

              <span className="whitespace-nowrap text-[20px] font-normal leading-none text-black">
                Next Superstar
              </span>
            </div>

            <p className="mt-5 max-w-[320px] text-sm leading-[1.8] text-[#666666]">
              Where talent meets opportunity. Discover your path to
              stardom with guidance from industry leaders.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link href="#">
                <Image
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
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
                  width={20}
                  height={20}
                  className="opacity-80 transition hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#AF8F5B]">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#666666] transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-[#AF8F5B]">
              Support
            </h4>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#666666] transition hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-[#AF8F5B]/40" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-[#666666] sm:flex-row">
          <p>© 2026 Next Superstar. ATN Bangla. All rights reserved.</p>

          <p>
            Made by <span className="text-[#AF8F5B]">ApplyingNext</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}