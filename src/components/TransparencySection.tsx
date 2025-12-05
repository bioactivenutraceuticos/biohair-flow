import { Check, X } from "lucide-react";

const TransparencySection = () => {
  const notPromises = [
    "Bio Active Hair NÃO é milagre",
    "NÃO funciona em 100% dos casos",
    "NÃO recupera cabelo perdido há mais de 5 anos",
    "NÃO mostra resultados em 48 horas",
    "NÃO faz cabelo crescer 10cm por mês",
  ];

  const realResults = [
    "Reduz a queda capilar em 80-87% dos casos em 30 dias",
    "Fortalece os fios existentes em 100% dos usuários",
    "Estimula crescimento de novos fios em 73% dos casos",
    "Melhora a espessura e brilho em 2-3 semanas",
    "Funciona em calvície inicial e intermediária",
    "Seguro para uso contínuo sem efeitos colaterais",
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            ATENÇÃO: Leia Isto Antes de Comprar
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            (transparência total - sem enganação)
          </p>
        </div>

        <div className="mb-12 text-center">
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Diferente de outros produtos que prometem milagres, vou ser{" "}
            <span className="text-primary font-bold">100% honesto</span> com você:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-muted p-8 rounded-2xl border-2 border-destructive/20">
            <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
              <X className="h-6 w-6" />
              O QUE NÃO É
            </h3>
            <div className="space-y-4">
              {notPromises.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 uppercase">
              <Check className="h-6 w-6" />
              O QUE ELE REALMENTE FAZ
            </h3>
            <div className="space-y-4">
              {realResults.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
