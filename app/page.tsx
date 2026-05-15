import { Navbar1 } from "@/components/ui/navbar-1";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Features } from "@/components/site/Features";
import { NetProfitSpotlight } from "@/components/site/NetProfitSpotlight";
import { Chains } from "@/components/site/Chains";
import { Commission } from "@/components/site/Commission";
import { Comparison } from "@/components/site/Comparison";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar1 />
      <main>
        <Hero />
        <Problem />
        <Features />
        <NetProfitSpotlight />
        <Chains />
        <Commission />
        <Comparison />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
