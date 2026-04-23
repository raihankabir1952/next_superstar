import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function VoteCtaSection() {
  return (
    <section className="bg-[rgba(238,231,209,0.24)] py-[50px]">
      <Container>
        <div className="flex flex-col items-center gap-[50px] text-center">
          <div className="flex flex-col items-center gap-5">
            <h2 className="[font-family:var(--font-montserrat),sans-serif] text-[32px] font-medium leading-[1.15] text-black sm:text-[40px] lg:text-[50px]">
              Vote for Your Favorite Contestant
            </h2>
            <p className="[font-family:var(--font-montserrat),sans-serif] max-w-[720px] text-[16px] font-medium leading-[1.6] text-black sm:text-[18px] lg:text-[20px]">
              Public voting opens during live shows. Create a free account to
              support your favorite contestant.
            </p>
          </div>

          <PrimaryButton>Create Voting Account</PrimaryButton>
        </div>
      </Container>
    </section>
  );
}