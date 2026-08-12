import Banner from "@/app/components/ui/banner";
import OurVision from "@/app/components/layout/vision/ourvision";
import HomeCta from "@/app/components/ui/homecta";

export default function VisionPage() {
  return (
    <>
      <Banner pageKey="vision" />
      <OurVision />
      <HomeCta />
    </>
  );
}
