import Banner from "@/app/components/ui/banner";
import BlogSection from "@/app/components/layout/blog/blogsection";
import HomeCta from "@/app/components/ui/homecta";

export default function BlogPage() {
  return (
    <>
      <Banner pageKey="blog" />
      <BlogSection />
      <HomeCta />
    </>
  );
}
