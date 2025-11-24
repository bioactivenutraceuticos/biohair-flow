import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Leaf, Droplet, Star, Pill, Heart } from "lucide-react";
import biotinImg from "@/assets/ingredients-biotin.jpg";
import collagenImg from "@/assets/ingredients-collagen.jpg";
import vitaminEImg from "@/assets/ingredients-vitamin-e.jpg";
import zincImg from "@/assets/ingredients-zinc.jpg";
import vitaminCImg from "@/assets/ingredients-vitamin-c.jpg";
import folicAcidImg from "@/assets/ingredients-folic-acid.jpg";
import anvisaSeal from "@/assets/anvisa-seal.jpg";

const CompositionSection = () => {
  const ingredients = [
    {
      icon: Sparkles,
      name: "Biotina",
      benefit: "Fortalece os fios e estimula o crescimento",
      image: biotinImg,
    },
    {
      icon: Leaf,
      name: "Colágeno Hidrolisado",
      benefit: "Melhora a elasticidade e reduz a quebra",
      image: collagenImg,
    },
    {
      icon: Droplet,
      name: "Vitamina E",
      benefit: "Antioxidante poderoso para proteção capilar",
      image: vitaminEImg,
    },
    {
      icon: Star,
      name: "Zinco",
      benefit: "Previne a queda e fortalece o bulbo capilar",
      image: zincImg,
    },
    {
      icon: Pill,
      name: "Vitamina C",
      benefit: "Favorece a absorção de nutrientes essenciais",
      image: vitaminCImg,
    },
    {
      icon: Heart,
      name: "Ácido Fólico",
      benefit: "Promove o crescimento saudável dos fios",
      image: folicAcidImg,
    },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ingredients.map((ingredient, index) => {
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
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">
                    {ingredient.name}
                  </h4>
                  <p className="text-muted-foreground">{ingredient.benefit}</p>
                </CardContent>
              </Card>
            );
          })}
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
