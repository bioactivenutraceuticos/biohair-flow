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
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Certificações e Garantias
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
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
    </section>
  );
};

export default CertificationsSection;
