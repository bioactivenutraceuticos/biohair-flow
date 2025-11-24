import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import GuaranteeSection from "@/components/GuaranteeSection";
import ProductShowcase from "@/components/ProductShowcase";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CompositionSection from "@/components/CompositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <ProductShowcase />
      <BeforeAfterSection />
      <GuaranteeSection />
      <CompositionSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
