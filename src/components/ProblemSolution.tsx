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
    const element = document.getElementById("kit3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="beneficios" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            <span className="text-primary font-black">CANSADA DE SOFRER</span> <span className="font-bold">COM CABELOS QUE QUEBRAM, CAEM E NÃO CRESCEM?</span>
          </h3>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Com <span className="font-bold">Bio Active Hair</span>, você além de solucionar seus problemas capilares, também irá proporcionar para sua pele elementos para eliminar <span className="font-bold">linhas de expressão</span> e <span className="font-bold">fortalecimento de suas unhas</span>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto pt-2">
            A fórmula <span className="font-bold">Bio Active Hair</span> foi estrategicamente pensada em cada elemento afim de proporcionar ao seu organismo os <span className="font-bold">ativos que ele precisa</span> para seu cabelo crescer:
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12 hidden">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A fórmula <span className="font-bold">Bio Active Hair</span> foi estrategicamente pensada em cada elemento afim de proporcionar ao seu organismo os <span className="font-bold">ativos que ele precisa</span> para seu cabelo crescer:
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
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

        {/* Subtitle */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-foreground">
            ENTENDA COMO <span className="text-primary">BIO ACTIVE HAIR</span> IRÁ SOLUCIONAR SEU PROBLEMA CAPILAR
          </h3>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToComposition}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-6 py-6 h-auto animate-pulse-glow rounded-full"
          >
            Quero conhecer esse Bio Active!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
