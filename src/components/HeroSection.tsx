import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

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
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-accent"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Está tendo dificuldade para resolver seu problema de queda capilar?
            </h1>
            <h3 className="text-xl md:text-2xl text-muted-foreground font-semibold">
              Adquira agora o seu e veja você mesma !!
            </h3>

            {/* Benefits List */}
            <div className="space-y-4">
              {[
                "Liberado pela ANVISA",
                "Fórmula ultra avançada",
                "Sem efeitos colaterais",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-lg text-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto animate-pulse-glow"
            >
              Quero parar de sofrer com meu cabelo!
            </Button>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden bg-accent">
              <img
                src={heroImage}
                alt="Mulher com cabelo saudável e brilhante"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-4 rounded-xl">
              <p className="text-sm font-semibold">Aprovado pela</p>
              <p className="text-2xl font-bold">ANVISA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
