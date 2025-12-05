import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-product-real.png";
import anvisaSeal from "@/assets/Selo AVNISA - 2.png";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("kit3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="inicio"
      className="py-20 px-4 bg-gradient-to-br from-[#fce7f3] via-background to-accent"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight font-bold uppercase">
              Método Científico Reduz Queda Capilar em{" "}
              <span className="text-primary font-black">87% dos Casos</span> em Apenas{" "}
              <span className="text-primary font-black">30 Dias</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              (Baseado em 15 estudos internacionais + garantia de 60 Dias)
            </p>

            <h2 className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              Descubra como <span className="text-primary font-bold">10.000+ brasileiros</span> pararam a queda capilar usando a fórmula desenvolvida com tecnologia suíça, aprovada pela ANVISA e testada dermatologicamente
            </h2>

            {/* Benefits List */}
            <div className="space-y-3 py-4">
              {[
                "Reduz queda em até 87% em 30 dias (comprovado cientificamente)",
                "18 ingredientes ativos com estudos publicados internacionalmente",
                "Certificado pela ANVISA - 100% seguro e natural",
                "Garantia blindada de 60 dias ou 100% do seu dinheiro de volta",
                "Frete grátis para todo o Brasil",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-base md:text-lg text-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto animate-pulse-glow rounded-full font-black"
            >
              GARANTIR MINHA TRANSFORMAÇÃO CAPILAR
            </Button>
          </div>

          {/* Product Image */}
          <div className="relative animate-scale-in flex justify-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Bio Active Hair - Produto Original"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-5 py-4 rounded-xl flex flex-col items-center gap-2">
                <p className="text-sm font-semibold">Aprovado pela</p>
                <img
                  src={anvisaSeal}
                  alt="ANVISA"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
