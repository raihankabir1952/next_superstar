import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: "/images/icons/facebook.svg",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "/images/icons/twitter.svg",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "/images/icons/instagram.svg",
  },
];

export default function FollowJourneySection() {
  return (
    <section className="bg-[rgba(238,231,209,0.24)] py-[50px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px] text-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="[font-family:var(--font-montserrat),sans-serif] text-[32px] font-medium leading-[1.15] text-black sm:text-[40px] lg:text-[50px]">
              Follow Our Journey
            </h2>
            <p className="[font-family:var(--font-montserrat),sans-serif] max-w-[720px] text-[16px] font-medium leading-[1.6] text-black sm:text-[18px] lg:text-[20px]">
              Stay connected on social media for daily updates,
              behind-the-scenes content, and live show announcements
            </p>
          </div>

          <div className="flex items-center gap-[30px]">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[#AF8F5B] p-[2px] transition hover:opacity-90"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="brightness-0 invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}