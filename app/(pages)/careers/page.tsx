import Banner from "@/app/components/ui/banner";
import CareerSec from "@/app/components/layout/careers/careersec";
import HomeCta from "@/app/components/ui/homecta";

export default function CareersPage() {
  return (
    <>
      <Banner pageKey="careers" />
      <CareerSec />
      <HomeCta />
    </>
  );
}
