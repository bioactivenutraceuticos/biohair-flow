import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      description: "com 60 cápsulas.",
      installments: "12x DE R$19,70",
      total: "R$197,00",
      discount: null,
      isRecommended: false,
    },
    {
      name: "Recomendado",
      description: "com 180 cápsulas.",
      oldPrice: "R$591,00",
      installments: "12x DE R$29,70",
      total: "R$297,00",
      discount: "49% OFF",
      isRecommended: true,
    },
    {
      name: "Avançado",
      description: "com 300 cápsulas.",
      oldPrice: "R$993,00",
      installments: "12x DE R$39,70",
      total: "R$397,00",
      discount: "60% OFF",
      isRecommended: false,
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
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:scale-105 transition-all duration-300 ${
                plan.isRecommended
                  ? "shadow-2xl scale-105 bg-muted border-2 border-primary"
                  : "shadow-lg"
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
                {/* Plan Name */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Old Price */}
                {plan.oldPrice && (
                  <div className="text-center">
                    <p className="text-xl text-muted-foreground line-through">
                      DE {plan.oldPrice}
                    </p>
                  </div>
                )}

                {/* Pricing */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground uppercase font-semibold">
                    Por apenas
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {plan.installments}
                  </p>
                  <p className="text-lg text-foreground font-semibold">
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
                  className={`w-full h-14 text-lg font-bold ${
                    plan.isRecommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
                      : "bg-accent text-primary hover:bg-accent/80"
                  }`}
                >
                  COMPRE AGORA
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
