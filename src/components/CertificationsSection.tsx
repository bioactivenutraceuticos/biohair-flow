import { Shield, Award, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById("precos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Certificações */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Certificações e Garantias
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Aprovado ANVISA</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Certificação GMP</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              <span>Testado Dermatologicamente</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Sem Efeitos Colaterais</span>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-background rounded-2xl p-8 md:p-12 border-l-8 border-primary">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <ShieldCheck className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
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

export default CertificationsSection;
