import { BlogContainer } from "@/components/section/blog-container";
import { HeroHeaderV2 } from "@/components/section/hero-header-v2";
import { Brands } from "@/components/section/brands";
import { Testimonials } from "@/components/section/testimonials";
import { WhyChoose2 } from "@/components/section/why-choose-2";
import HowItWorks3 from "@/components/section/how-it-works-3";
import { HeroQuote } from "@/components/section/hero-quote";
import VaServices from "@/components/section/va-services-section";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeaderV2 />
      {/* How it works Section */}
      <HowItWorks3 />
      {/* Why Choose Section */}
      <WhyChoose2 />
      {/* Brands section */}
      <Brands />
      {/* Testimonials Section */}
      <Testimonials />
      {/* VA Services Section */}
      <VaServices />
      {/* Feature 1 Section  */}
      <HeroQuote />
      {/* Blog Container Section*/}
      <BlogContainer />
    </main>
  );
}
