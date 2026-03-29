import { AIAdvisorSpotlight } from '@/components/landing/AIAdvisorSpotlight';
import { ComparisonTable } from '@/components/landing/ComparisonTable';
import { FAQSection } from '@/components/landing/FAQSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { InstallSection } from '@/components/landing/InstallSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { SectionWrapper } from '@/components/landing/SectionWrapper';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return (<div className="flex flex-col w-full">
    <Navbar />
    <HeroSection />
    <SectionWrapper>
      <FeaturesSection />
    </SectionWrapper>
    <SectionWrapper bg="dark">
      <InstallSection />
    </SectionWrapper>
    <SectionWrapper bg="dark">
      <AIAdvisorSpotlight />
    </SectionWrapper>
    <SectionWrapper bg="light-gray">
      <HowItWorks />
    </SectionWrapper>
    <SectionWrapper>
      <ComparisonTable />
    </SectionWrapper>
    <SectionWrapper bg='light-gray'>
      <PricingSection />
    </SectionWrapper>
    <SectionWrapper>
      <FAQSection />
    </SectionWrapper>
    <SectionWrapper bg="dark">
      <FinalCTA />
    </SectionWrapper>
    <Footer/>
  </div>
  );
}
