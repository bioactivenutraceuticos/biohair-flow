import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import anvisaSeal from "@/assets/anvisa-seal.jpg";

const CompositionSection = () => {
  const ingredients = [
    "Ácido Hialurônico",
    "L-Cisteína",
    "Astaxantina",
    "L-Arginina",
    "Metilsulfonilmetano",
    "Silício",
    "Vitamina E (Tocoferol)",
    "Vitamina B1 (Tiamina)",
    "Vitamina B2 (Riboflavina)",
    "Vitamina B12 (Cobalamina)",
    "Vitamina A (Retinol)",
    "Vitamina D (Colecalciferol)",
    "Vitamina C (Ác. Ascórbico)",
    "Cromo",
    "Selênio",
    "Cobre",
    "Ferro",
    "Zinco",
  ];

  return (
    <section id="composicao" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sua fórmula contempla os seguintes elementos:
          </h2>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-4 text-center border border-border hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">
                {ingredient}
              </p>
            </div>
          ))}
        </div>

        {/* ANVISA Badge */}
        <div className="bg-background rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Badge className="text-3xl">✓</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                BIO ACTIVE é aprovado pela ANVISA!
              </h3>
              <p className="text-lg text-foreground max-w-2xl">
                Tenha certeza de que o Ministério da Saúde, por meio da ANVISA, fez todo o acompanhamento desse produto e ele não causa riscos.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={anvisaSeal}
                alt="Selo ANVISA"
                className="w-32 h-32 object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompositionSection;
