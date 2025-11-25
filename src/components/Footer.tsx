import { Phone, MessageCircle, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & Manufacturing */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Bio Active Hair</h3>
            <div className="space-y-2">
              <h4 className="font-bold text-background uppercase text-sm">
                Fabricação e Distribuição
              </h4>
              <p className="text-sm text-background/80">
                Capsul Brasil Ltda ME<br />
                Rua Avenida Progresso nº 1397<br />
                Bairro – São Bento<br />
                Arcos – Minas Gerais<br />
                CNPJ: 29.822.523/0001-03
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-background uppercase text-sm">
              Fale Conosco
            </h4>
            <p className="text-sm text-background/80">
              Fale conosco através dos nossos canais de atendimento das 09h às 18h.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">(37) 3351-5181</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a
                  href="https://wa.me/5546920016522?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Bio%20Active%20Hair."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Information */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-background uppercase text-sm mb-2">
                Entrega Garantida
              </h4>
              <p className="text-sm text-background/80">
                O prazo de entrega é de 1 a 2 semanas para você receber o poderoso Kit Bio Active Hair no conforto da sua casa.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-background uppercase text-sm mb-2">
                Site Seguro
              </h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  🔒
                </div>
                <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center">
                  ✓
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Legal */}
          <div className="space-y-4">
            <h4 className="font-bold text-background uppercase text-sm">
              Siga-nos
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bio.activehair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5 text-background" />
              </a>
              <a
                href="https://www.instagram.com/bio.activehair/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5 text-background" />
              </a>
              <a
                href="https://wa.me/5546920016522?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Bio%20Active%20Hair."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-background" />
              </a>
            </div>
            <div className="space-y-2 pt-4">
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-primary transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="border-t border-background/20 pt-8 space-y-4">
          <p className="text-xs text-background/60 leading-relaxed">
            As informações contidas neste site são publicadas exclusivamente para fins informativos e não podem ser consideradas como aconselhamento médico pessoal. O leitor deve, para qualquer questão relativa à sua saúde e bem-estar, consultar um profissional devidamente credenciado pelas autoridades de saúde. O editor deste conteúdo não é médico ou pratica a medicina a qualquer título, ou qualquer outra profissão terapêutica.
          </p>
          <p className="text-xs text-background/60">
            O Ministério da Saúde Adverte: não existem evidências científicas comprovadas de que estes alimentos previnam, trate ou cure doenças.
          </p>
          <p className="text-xs text-background/60">
            This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-6 mt-6 text-center">
          <p className="text-sm text-background/80">
            2021 © Bio Active Hair. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
