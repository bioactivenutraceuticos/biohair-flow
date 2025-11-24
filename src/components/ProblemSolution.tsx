import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Heart } from "lucide-react";

const ProblemSolution = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Mais Rápido",
      description: "Crescimento capilar acelerado",
    },
    {
      icon: Shield,
      title: "Mais Forte",
      description: "Fios resistentes e saudáveis",
    },
    {
      icon: Heart,
      title: "Mais Saudável",
      description: "Nutrição completa do cabelo",
    },
  ];

  const scrollToComposition = () => {
    const element = document.getElementById("composicao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beneficios" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Cansada de sofrer com cabelos que quebram, caem e não crescem?
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Com Bio Active Hair, você além de solucionar seus problemas capilares, também irá proporcionar para sua pele elementos para eliminar linhas de expressão e fortalecimento de suas unhas.
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
            A fórmula Bio Active Hair foi estrategicamente pensada em cada elemento afim de proporcionar ao seu organismo os ativos que ele precisa para seu cabelo crescer:
          </h3>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToComposition}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Entenda como Bio Active Hair irá solucionar seu problema capilar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
