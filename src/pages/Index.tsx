import HeroSection from "@/components/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import ProductShowcase from "@/components/ProductShowcase";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CompositionSection from "@/components/CompositionSection";
import TransparencySection from "@/components/TransparencySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PriceAnchoringSection from "@/components/PriceAnchoringSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="como-funciona">
        <ProblemSolution />
      </div>
      <div id="produto">
        <ProductShowcase />
      </div>
      <div id="resultados">
        <BeforeAfterSection />
      </div>
      <div id="anvisa">
        <CompositionSection />
      </div>
      <TransparencySection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <PriceAnchoringSection />
      <GuaranteeSection />
      <div id="comprar">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
