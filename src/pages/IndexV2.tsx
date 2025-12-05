import HeroSection from "@/components/v2/HeroSection";
import ProblemSolution from "@/components/ProblemSolution";
import ProductShowcase from "@/components/ProductShowcase";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import CertificationsSection from "@/components/CertificationsSection";
import CompositionSection from "@/components/v2/CompositionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/v2/PricingSection";
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
        <CertificationsSection />
      </div>
      <CompositionSection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="comprar">
        <div id="garantia">
          <PricingSection />
        </div>
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
