import { DollarSign, Clock, AlertTriangle, Target, MapPin, Home, Sparkles } from "lucide-react";

const PriceComparisonSection = () => {
  const options = [
    {
      title: "TRANSPLANTE CAPILAR",
      icon: "💸",
      items: [
        { icon: DollarSign, label: "Investimento", value: "R$ 15.000 - R$ 35.000" },
        { icon: Clock, label: "Tempo", value: "1 dia (cirurgia) + 6 meses recuperação" },
        { icon: AlertTriangle, label: "Dor", value: "Alta (anestesia + pós-operatório)" },
        { icon: Target, label: "Taxa de sucesso", value: "70-80%" },
        { icon: AlertTriangle, label: "Riscos", value: "Infecção, cicatrizes, rejeição" },
      ],
      highlight: false,
    },
    {
      title: "TRATAMENTO EM CLÍNICA",
      icon: "🏥",
      items: [
        { icon: DollarSign, label: "Investimento", value: "R$ 400/mês x 12 meses = R$ 4.800" },
        { icon: Clock, label: "Tempo", value: "2-3 horas/semana por 1 ano" },
        { icon: MapPin, label: "Deslocamento", value: "Sim (clínica especializada)" },
        { icon: Target, label: "Taxa de sucesso", value: "60-70%" },
        { icon: AlertTriangle, label: "Riscos", value: "Dependência do tratamento" },
      ],
      highlight: false,
    },
    {
      title: "PRODUTOS DE FARMÁCIA",
      icon: "💊",
      items: [
        { icon: DollarSign, label: "Investimento", value: "R$ 180/mês x 6 meses = R$ 1.080" },
        { icon: Clock, label: "Tempo", value: "Uso diário por 6+ meses" },
        { icon: Sparkles, label: "Composição", value: "Ingredientes básicos" },
        { icon: Target, label: "Taxa de sucesso", value: "30-40%" },
        { icon: AlertTriangle, label: "Riscos", value: "Resultados temporários" },
      ],
      highlight: false,
    },
    {
      title: "BIO ACTIVE HAIR",
      icon: "✨",
      items: [
        { icon: DollarSign, label: "Investimento", value: "R$ 97 (tratamento completo 3 meses)", highlight: true },
        { icon: Clock, label: "Tempo", value: "30 segundos/dia por 3 meses" },
        { icon: Home, label: "Uso", value: "Em casa, quando quiser" },
        { icon: Target, label: "Taxa de sucesso", value: "87% (baseado em estudos)" },
        { icon: AlertTriangle, label: "Riscos", value: "ZERO - 120 dias de garantia" },
      ],
      highlight: true,
      footer: "= R$ 32 por mês para recuperar seus cabelos",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 uppercase">
            Compare os Investimentos:
            você vai se surpreender
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                option.highlight
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105 border-4 border-secondary"
                  : "bg-background border-2 border-border"
              }`}
            >
              {option.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-6 py-2 rounded-full font-bold text-sm uppercase shadow-lg">
                  Melhor Custo-Benefício
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{option.icon}</div>
                <h3
                  className={`text-xl font-bold uppercase ${
                    option.highlight ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {option.title}
                </h3>
              </div>

              <div className="space-y-4">
                {option.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <Icon
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          option.highlight ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <div className="flex-1">
                        <div
                          className={`text-xs font-semibold mb-1 ${
                            option.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </div>
                        <div
                          className={`text-sm font-medium ${
                            option.highlight
                              ? item.highlight
                                ? "text-secondary font-bold text-base"
                                : "text-primary-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {option.footer && (
                <div className="mt-6 pt-6 border-t-2 border-secondary">
                  <p className="text-center text-lg font-bold text-secondary">{option.footer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            Por que pagar mais quando você pode ter resultados comprovados por menos?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;
