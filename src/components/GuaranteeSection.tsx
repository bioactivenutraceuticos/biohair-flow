import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("precos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="garantia" className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <div className="bg-background rounded-2xl p-8 md:p-12 border-l-8 border-primary shadow-xl animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <ShieldCheck className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                GARANTIA DE RESULTADOS!
              </h2>
              <p className="text-xl text-foreground font-semibold">
                Aproveite agora mesmo nossa garantia de 30 dias exclusiva!
              </p>
              <p className="text-lg text-muted-foreground">
                Comprando agora seu kit, você terá o prazo de 30 dias para conferir os benefícios do Bio Active, e caso não os obtenha devolvemos seu dinheiro!
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto whitespace-nowrap"
              >
                Compre com Garantia!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
