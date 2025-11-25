import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-product-real.png";
import anvisaSeal from "@/assets/Selo AVNISA - 2.png";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("precos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-20 pb-20 px-4 bg-gradient-to-br from-[#fce7f3] via-background to-accent"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              <span className="font-bold">ESTÁ TENDO</span><br />
              <span className="font-bold">DIFICULDADE PARA</span><br />
              <span className="text-primary font-black">RESOLVER SEU PROBLEMA</span><br />
              <span className="font-bold">DE QUEDA CAPILAR?</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-primary font-semibold">
              ADQUIRA AGORA O SEU E VEJA VOCÊ MESMA!!!
            </h3>

            {/* Benefits List */}
            <div className="flex flex-wrap gap-4">
              {[
                "Certificado pela ANVISA",
                "Fórmula ultra avançada",
                "Sem efeitos colaterais",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="h-3 w-3 text-secondary-foreground" />
                  </div>
                  <span className="text-base text-foreground font-medium whitespace-nowrap">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 py-6 h-auto animate-pulse-glow rounded-full"
            >
              Quero <span className="font-bold">parar de sofrer</span> com meu cabelo!
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
