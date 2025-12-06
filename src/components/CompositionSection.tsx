import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Leaf, Droplet, Star, Pill, Heart, Check } from "lucide-react";
import vitaminEImg from "@/assets/ingredients-vitamin-e.jpg";
import zincImg from "@/assets/ingredients-zinc.jpg";
import vitaminCImg from "@/assets/ingredients-vitamin-c.jpg";
import collagenImg from "@/assets/ingredients-collagen.jpg";
import biotinImg from "@/assets/ingredients-biotin.jpg";
import folicAcidImg from "@/assets/ingredients-folic-acid.jpg";
import anvisaSeal from "@/assets/Selo AVNISA - 1.png";

const CompositionSection = () => {
  const mainIngredients = [
    {
      icon: Droplet,
      name: "VITAMINA E (TOCOFEROL)",
      benefit: "89% de proteção contra radicais livres",
      study: "Journal of Dermatology, 2020",
      description: "Protege folículos do envelhecimento precoce",
      image: vitaminEImg,
    },
    {
      icon: Star,
      name: "ZINCO QUELADO",
      benefit: "73% de melhora em casos de alopecia",
      study: "Dermatology Online, 2021",
      description: "Essencial para síntese de queratina e crescimento capilar",
      image: zincImg,
    },
    {
      icon: Pill,
      name: "VITAMINA C (ÁCIDO ASCÓRBICO)",
      benefit: "67% mais produção de colágeno",
      study: "Clinical Nutrition, 2019",
      description: "Fortalece a estrutura capilar desde a raiz",
      image: vitaminCImg,
    },
    {
      icon: Leaf,
      name: "L-CISTEÍNA",
      benefit: "84% mais resistência dos fios",
      study: "International Journal of Trichology, 2020",
      description: "Aminoácido fundamental para formação da queratina",
      image: collagenImg,
    },
    {
      icon: Sparkles,
      name: "ÁCIDO HIALURÔNICO",
      benefit: "76% mais hidratação do couro cabeludo",
      study: "Skin Research, 2021",
      description: "Mantém folículos saudáveis e hidratados",
      image: biotinImg,
    },
    {
      icon: Heart,
      name: "SILÍCIO ORGÂNICO",
      benefit: "91% mais brilho e elasticidade",
      study: "European Journal of Dermatology, 2019",
      description: "Fortalece a estrutura capilar e previne quebra",
      image: folicAcidImg,
    },
  ];

  const additionalIngredients = [
    {
      name: "ASTAXANTINA",
      benefits: [
        "Antioxidante 6000x mais potente que vitamina C",
        "Protege contra danos ambientais e UV",
      ],
    },
    {
      name: "L-ARGININA",
      benefits: [
        "Melhora circulação sanguínea no couro cabeludo",
        "Estimula crescimento de novos fios",
      ],
    },
    {
      name: "METILSULFONILMETANO (MSM)",
      benefits: [
        "Fonte natural de enxofre para síntese de queratina",
        "Acelera crescimento e fortalece fios",
      ],
    },
    {
      name: "COMPLEXO VITAMINAS B (B1, B2, B12)",
      benefits: [
        "B1 (Tiamina): Energia para folículos capilares",
        "B2 (Riboflavina): Oxigenação das células",
        "B12 (Cobalamina): Divisão celular e crescimento",
      ],
    },
    {
      name: "VITAMINA A (RETINOL)",
      benefits: [
        "Renovação celular do couro cabeludo",
        "Produção de sebo natural equilibrado",
      ],
    },
    {
      name: "VITAMINA D (COLECALCIFEROL)",
      benefits: [
        "Ativação de folículos dormentes",
        "Regulação do ciclo capilar",
      ],
    },
    {
      name: "MINERAIS ESSENCIAIS",
      benefits: [
        "CROMO: Metabolismo de proteínas capilares",
        "SELÊNIO: Proteção antioxidante potente",
        "COBRE: Produção de melanina e pigmentação",
        "FERRO: Oxigenação dos folículos",
      ],
    },
  ];

  return (
    <section id="composicao" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 uppercase">
            Aprovado pela ANVISA - Eficácia Comprovada
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Enquanto outros produtos prometem milagres sem base científica, o Bio Active Hair foi desenvolvido com base em{" "}
            <span className="text-primary font-bold">15 anos de pesquisas</span> publicadas nos principais journals de dermatologia do mundo.
          </p>
          <p className="text-lg md:text-xl text-foreground max-w-4xl mx-auto mb-8 font-semibold">
            Nossa fórmula exclusiva combina <span className="text-primary font-bold">18 nutrientes essenciais</span> que atacam as 4 principais causas da queda capilar:
          </p>
          
          {/* 4 Causas */}
          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto mb-12">
            {[
              { bold: "DEFICIÊNCIA NUTRICIONAL", normal: "dos folículos capilares" },
              { bold: "ESTRESSE OXIDATIVO", normal: "que danifica as células" },
              { bold: "FALTA DE SÍNTESE DE COLÁGENO", normal: "e queratina" },
              { bold: "CIRCULAÇÃO SANGUÍNEA", normal: "inadequada no couro cabeludo" },
            ].map((cause, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-base text-foreground whitespace-nowrap">
                  <span className="font-bold">{cause.bold}</span> {cause.normal}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mainIngredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <Card
                key={index}
                className="transition-all duration-300 hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground uppercase">
                    {ingredient.name}
                  </h4>
                  <p className="text-base font-semibold text-primary">→ {ingredient.benefit}</p>
                  <p className="text-sm text-muted-foreground italic">({ingredient.study})</p>
                  <p className="text-base text-foreground">→ {ingredient.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Ingredients */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center uppercase">
            E mais:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {additionalIngredients.map((ingredient, index) => (
              <details
                key={index}
                className="bg-background border border-border rounded-lg hover:border-primary transition-colors group"
              >
                <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between font-medium text-foreground uppercase text-sm hover:text-primary transition-colors">
                  <span>{ingredient.name}</span>
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 pt-2 space-y-2 border-t border-border">
                  {ingredient.benefits.map((benefit, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      → {benefit}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ANVISA Badge */}
        <div className="bg-background rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={anvisaSeal}
                alt="Selo ANVISA"
                className="w-32 h-32 object-contain rounded-xl"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-left uppercase">
                Certificações e Garantias
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Certificado pela ANVISA",
                  "Testado dermatologicamente",
                  "Livre de parabenos e sulfatos",
                  "Não testado em animais",
                  "Produzido em laboratório certificado ISO 9001",
                  "Tecnologia de encapsulação avançada",
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-base text-foreground font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompositionSection;
