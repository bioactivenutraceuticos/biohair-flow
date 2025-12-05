import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Check, Mail, CreditCard, Clock } from "lucide-react";

const GuaranteeSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("kit3");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const benefits = [
    "Redução de pelo menos 70% na queda capilar",
    "Cabelos mais fortes e brilhantes",
    "Melhora visível na densidade",
  ];

  const steps = [
    { icon: Mail, title: "1. Envie um e-mail", text: "garantia@bioactivehair.com" },
    { icon: CreditCard, title: "2. Informe", text: "Seu número do pedido" },
    { icon: Clock, title: "3. Receba", text: "Estorno em até 5 dias úteis" },
  ];

  return (
    <section id="garantia" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
            <span className="text-primary font-black">GARANTIA BLINDADA DE 60 DIAS</span><br />
            <span className="font-bold uppercase">(A Mais Forte do Mercado)</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-1"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-5xl mx-auto">
            Estamos <span className="font-black text-primary uppercase">TÃO confiantes</span> nos resultados do Bio Active Hair que oferecemos 60 dias de garantia total, se você não notar esses resultados:
          </p>
        </div>

        {/* Benefits */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-base text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-xl p-6 text-center space-y-2 mb-4">
            <p className="text-xl md:text-2xl font-black">
              Nós devolvemos 100% do seu investimento.
            </p>
            <p className="text-lg font-bold">
              SEM PERGUNTAS. SEM BUROCRACIA. SEM ENROLAÇÃO.
            </p>
          </div>
          
          <p className="text-center text-lg text-muted-foreground">
            É só mandar um e-mail e devolvemos tudo.
          </p>
        </div>

        {/* How to Request */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-foreground">
            COMO SOLICITAR O REEMBOLSO:
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-xl font-bold text-foreground mb-8">
          É isso. Simples assim.
        </p>

        {/* Final Question */}
        <div className="text-center mb-8 space-y-3">
          <p className="text-2xl md:text-3xl font-black text-foreground">
            PERGUNTA:
          </p>
          <p className="text-xl md:text-2xl text-foreground font-bold max-w-4xl mx-auto">
            Que empresa daria uma garantia dessas se o produto não funcionasse?
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto animate-pulse-glow rounded-full font-bold"
          >
            GARANTIR MEU DESCONTO AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
