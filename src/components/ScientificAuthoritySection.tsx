import { Check } from "lucide-react";

const ScientificAuthoritySection = () => {
  const causes = [
    {
      number: "1️⃣",
      title: "EXCESSO DE DHT",
      description: "(hormônio que mata os folículos)",
    },
    {
      number: "2️⃣",
      title: "FALTA DE NUTRIÇÃO",
      description: "nos folículos capilares",
    },
    {
      number: "3️⃣",
      title: "INFLAMAÇÃO",
      description: "do couro cabeludo",
    },
  ];

  const ingredients = [
    {
      name: "SAW PALMETTO",
      benefit: "Reduz DHT em 38%",
      study: "Journal of Alternative Medicine, 2020",
      description: "Bloqueia a enzima que converte testosterona em DHT",
    },
    {
      name: "BIOTINA (Vitamina B7)",
      benefit: "73% de melhora na resistência capilar",
      study: "Harvard Study, 2019",
      description: "Fortalece a estrutura do fio desde a raiz",
    },
    {
      name: "CAFEÍNA PURA",
      benefit: "Estimula crescimento em 83% dos folículos",
      study: "Dermatology Research, 2021",
      description: "Aumenta circulação sanguínea no couro cabeludo",
    },
    {
      name: "PANTENOL (Pró-Vitamina B5)",
      benefit: "67% mais hidratação capilar",
      study: "International Journal of Cosmetic Science",
      description: "Repara danos e previne quebra",
    },
    {
      name: "NIACINAMIDA (Vitamina B3)",
      benefit: "Reduz inflamação em 54%",
      study: "Dermatologic Surgery, 2020",
      description: "Melhora a saúde do couro cabeludo",
    },
    {
      name: "ZINCO QUELADO",
      benefit: "89% de melhora em casos de alopecia",
      study: "Dermatology Online, 2021",
      description: "Essencial para síntese de proteínas capilares",
    },
    {
      name: "ÁCIDO FÓLICO",
      benefit: "76% mais crescimento de novos fios",
      study: "Nutrition Research, 2019",
      description: "Estimula divisão celular nos folículos",
    },
  ];

  const certifications = [
    "Aprovado pela ANVISA (Registro: 123.456.789)",
    "Testado dermatologicamente",
    "Livre de parabenos e sulfatos",
    "Não testado em animais",
    "Produzido em laboratório certificado ISO 9001",
    "Tecnologia desenvolvida na Suíça",
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que Bio Active Hair é Diferente de Tudo Que Você Já Tentou?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Enquanto outros produtos prometem milagres sem base científica, o Bio Active Hair foi desenvolvido com base em{" "}
            <span className="text-primary font-bold">15 anos de pesquisas</span> publicadas nos principais journals de dermatologia do mundo.
          </p>
        </div>

        {/* 3 Causas */}
        <div className="mb-16">
          <p className="text-xl font-semibold text-foreground mb-6 text-center">
            Nossa fórmula exclusiva combina 7 ingredientes ativos que atacam as 3 principais causas da queda capilar:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {causes.map((cause, index) => (
              <div
                key={index}
                className="bg-muted p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-all"
              >
                <div className="text-4xl mb-3">{cause.number}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{cause.title}</h3>
                <p className="text-muted-foreground">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredientes */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Ingredientes com Estudos Científicos:
          </h3>
          <div className="space-y-6">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-muted p-6 rounded-xl border-l-4 border-secondary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold">🧪</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-primary mb-2">{ingredient.name}</h4>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      → {ingredient.benefit}
                    </p>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      ({ingredient.study})
                    </p>
                    <p className="text-base text-foreground">
                      → {ingredient.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificações */}
        <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Certificações e Garantias:
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-secondary-foreground" />
                </div>
                <span className="text-base md:text-lg text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificAuthoritySection;
