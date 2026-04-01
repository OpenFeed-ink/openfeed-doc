import { PricingSection } from "@/components/landing/PricingSection";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { Navbar } from "@/components/navbar";

export default function page() {
  return (
    <div className="flex flex-col w-full">
    <Navbar />
    <SectionWrapper bg='light-gray'>
      <PricingSection />
    </SectionWrapper>
    </div>
  )
}
