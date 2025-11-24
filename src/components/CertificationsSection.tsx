import anvisaSeal from "@/assets/anvisa-seal.jpg";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Shield,
      title: "Aprovado ANVISA",
      description: "Registro e aprovação oficial da Agência Nacional de Vigilância Sanitária",
    },
    {
      icon: Award,
      title: "Certificação GMP",
      description: "Boas Práticas de Fabricação garantindo qualidade e segurança",
    },
    {
      icon: FileCheck,
      title: "Testado Dermatologicamente",
      description: "Produtos testados e aprovados por profissionais especializados",
    },
    {
      icon: CheckCircle,
      title: "Sem Efeitos Colaterais",
      description: "Fórmula natural sem contraindicações comprovadas",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary font-semibold mb-2">CERTIFICAÇÕES E GARANTIAS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Qualidade Comprovada e Aprovada
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bio Active Hair possui todas as certificações necessárias para garantir
            segurança, eficácia e qualidade superior
          </p>
        </div>

        {/* ANVISA Seal - Destaque */}
        <div className="flex justify-center mb-16 animate-scale-in">
          <div className="bg-accent rounded-2xl p-8 text-center max-w-md border border-border">
            <img
              src={anvisaSeal}
              alt="Selo de Aprovação ANVISA"
              className="w-32 h-32 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Aprovado pela ANVISA
            </h3>
            <p className="text-muted-foreground">
              Produto regulamentado e aprovado pela Agência Nacional de Vigilância
              Sanitária, garantindo segurança e eficácia
            </p>
          </div>
        </div>

        {/* Grid de Certificações */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-accent rounded-xl p-6 text-center animate-fade-in border border-border hover:border-primary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Fórmula Natural</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Compra Protegida</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Entrega Garantida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
