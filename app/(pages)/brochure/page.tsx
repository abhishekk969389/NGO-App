import Banner from "@/app/components/ui/banner";
import BrochureSec from "@/app/components/layout/brochure/brochuresec";
import HomeCta from "@/app/components/ui/homecta";

export default function BrochurePage() {
  return (
    <>
      <Banner pageKey="brochure" />
      <BrochureSec />
      <HomeCta />
    </>
  );
}
