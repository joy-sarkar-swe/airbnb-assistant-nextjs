import GetStarted from "@/components/get-started";
import HeroSection from "@/components/hero";
import OurService from "@/components/our-service";
import OurTools from "@/components/our-tools";
import Pricing from "@/components/pricing";
import TrustedIndustries from "@/components/trusted-industries";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedIndustries />
      <OurService />
      <Pricing />
      <OurTools />
      <GetStarted />
    </>
  );
}
