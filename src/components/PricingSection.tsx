import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import product1Bottle from "@/assets/product-1-bottle.png";
import product3Bottles from "@/assets/product-3-bottles.png";
import product5Bottles from "@/assets/product-5-bottles.png";

const PricingSection = () => {
  const plans = [
    {
      id: "kit1",
      name: "Básico",
      description: "com 60 cápsulas.",
      installments: "12x DE R$12,10",
      total: "R$117,00",
      discount: null,
      isRecommended: false,
      image: product1Bottle,
      checkoutUrl: "https://ev.braip.com/checkout/pla9xzqy/chene9ov?currency=BRL",
    },
    {
      id: "kit3",
      name: "Recomendado",
      description: "com 180 cápsulas.",
      oldPrice: "R$591,00",
      installments: "12x DE R$25,55",
      total: "R$247,00",
      discount: "49% OFF",
      isRecommended: true,
      image: product3Bottles,
      checkoutUrl: "https://ev.braip.com/checkout/plakrvxl/chene9ov?currency=BRL",
    },
    {
      id: "kit5",
      name: "Avançado",
      description: "com 300 cápsulas.",
      oldPrice: "R$993,00",
      installments: "12x DE R$35,89",
      total: "R$347,00",
      discount: "60% OFF",
      isRecommended: false,
      image: product5Bottles,
      checkoutUrl: "https://ev.braip.com/checkout/plagzgrj/chene9ov?currency=BRL",
    },
  ];

  return (
    <section id="precos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Escolha o melhor kit para você:
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <Card
              key={index}
              id={plan.id}
              className={`relative hover:scale-105 transition-all duration-300 ${
                plan.isRecommended
                  ? "bg-muted border-2 border-primary"
                  : ""
              }`}
            >
              {/* Discount Badge */}
              {plan.discount && (
                <Badge className="absolute -top-3 -right-3 bg-destructive text-destructive-foreground px-4 py-2 text-lg font-bold z-10">
                  {plan.discount}
                </Badge>
              )}

              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold z-10">
                  Mais Vendido
                </div>
              )}

              <CardContent className="p-8 space-y-6 pt-10">
                {/* Product Image */}
                <div className="flex justify-center mb-4 h-56">
                  <img
                    src={plan.image}
                    alt={`Bio Active Hair - ${plan.name}`}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-0">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mt-0">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center space-y-1">
                  {plan.oldPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      DE {plan.oldPrice}
                    </p>
                  )}
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-sm text-muted-foreground uppercase font-semibold">
                      POR APENAS 12x DE
                    </span>
                  </div>
                  <p className="text-6xl text-primary leading-none" style={{ fontWeight: 900 }}>
                    {plan.installments.split(' ').pop()}
                  </p>
                  <p className="text-base text-foreground font-semibold pt-2">
                    OU {plan.total} À VISTA
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 py-4">
                  {[
                    "Fórmula Ultra Avançada",
                    "Aprovado pela ANVISA",
                    "Garantia de 30 dias",
                    "Entrega Garantida",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className={`w-full h-14 text-lg font-bold ${
                    plan.isRecommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                      : "bg-accent text-primary hover:bg-accent/80"
                  }`}
                >
                  <a href={plan.checkoutUrl} target="_blank" rel="noopener noreferrer">
                    COMPRE AGORA
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
