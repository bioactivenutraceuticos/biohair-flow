import productBottle from "@/assets/product-1-bottle.png";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("precos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative animate-scale-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={productBottle}
                alt="Bio Active Hair - Frasco do Suplemento"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm">
              ORIGINAL
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-primary font-semibold mb-2">PRODUTO ORIGINAL</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Bio Active Hair
              </h2>
              <p className="text-xl text-muted-foreground">
                O suplemento capilar mais completo do mercado
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Fórmula com 6 ativos poderosos",
                "Resultados visíveis em 30 dias",
                "Aprovado pela ANVISA",
                "Sem efeitos colaterais",
                "Garantia de satisfação",
                "Entrega em todo Brasil",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToPricing}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
            >
              Garanta o Seu Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
