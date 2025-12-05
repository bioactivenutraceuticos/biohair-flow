import { Check, X } from "lucide-react";

const PriceAnchoringSection = () => {
  const comparisons = [
    {
      name: "Transplante capilar",
      price: "R$ 8.000 - R$ 25.000",
      isExpensive: true,
    },
    {
      name: "Tratamento em clínica",
      price: "R$ 300-500/mês",
      isExpensive: true,
    },
    {
      name: "Produtos farmácia",
      price: "R$ 150-300/mês",
      isExpensive: true,
    },
    {
      name: "Bio Active Hair",
      price: "Apenas R$ 97 (solução completa)",
      isExpensive: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
            Compare os custos:
          </h2>
        </div>

        <div className="space-y-4">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-6 rounded-xl border-2 transition-all ${
                item.isExpensive
                  ? "bg-background border-muted-foreground/20"
                  : "bg-primary/10 border-primary shadow-lg scale-105"
              }`}
            >
              <div className="flex items-center gap-4">
                {item.isExpensive ? (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="h-5 w-5 text-destructive" />
                  </div>
                ) : (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <Check className="h-5 w-5 text-secondary-foreground" />
                  </div>
                )}
                <span
                  className={`text-lg md:text-xl font-semibold ${
                    item.isExpensive ? "text-muted-foreground" : "text-primary"
                  }`}
                >
                  {item.name}:
                </span>
              </div>
              <span
                className={`text-lg md:text-xl font-bold ${
                  item.isExpensive
                    ? "text-muted-foreground line-through"
                    : "text-primary"
                }`}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceAnchoringSection;
