import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import ContestantProfileSection from "@/components/sections/ContestantProfileSection";
import { contestants, getContestantBySlug } from "@/lib/contestants";

export function generateStaticParams() {
  return contestants.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const contestant = getContestantBySlug(slug);

  if (!contestant) {
    return { title: "Contestant Not Found — Next Superstar" };
  }

  return {
    title: contestant.name + " — Contestant No. " + contestant.number + " — Next Superstar",
    description:
      contestant.name +
      ", " +
      contestant.age +
      ", from " +
      contestant.city +
      ". Competing in " +
      contestant.category +
      " category at Next Superstar.",
  };
}

export default async function ContestantProfilePage({ params }) {
  const { slug } = await params;
  const contestant = getContestantBySlug(slug);

  if (!contestant) {
    notFound();
  }

  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar variant="light" isAuthenticated={true} />
      <ContestantProfileSection contestant={contestant} />
      <Footer />
    </main>
  );
}