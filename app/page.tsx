import HeroSection from "@/components/hero";
import OurService from "@/components/our-service";
import Pricing from "@/components/pricing";
import TrustedIndustries from "@/components/trusted-industries";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedIndustries />
      <OurService />
      <Pricing />
    </>
  );
}
