import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import IndustryNetwork from "@/components/IndustryNetwork";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhyJoin from "@/components/WhyJoin";
import Portfolio from "@/components/Portfolio";
import ForColleges from "@/components/ForColleges";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBar />
      <IndustryNetwork />
      <WhatWeDo />
      <HowItWorks />
      <WhyJoin />
      <Portfolio />
      <ForColleges />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
