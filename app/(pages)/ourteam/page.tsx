import Banner from "@/app/components/ui/banner";
import TeamSection from "@/app/components/layout/ourteam/teamsection";
import HomeCta from "@/app/components/ui/homecta";

export default function OurTeamPage() {
  return (
    <>
      <Banner pageKey="ourteam" />
      <TeamSection />
      <HomeCta />
    </>
  );
}
