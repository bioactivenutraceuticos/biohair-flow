import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o site
        </Button>

        <h1 className="text-4xl font-bold text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Informações Gerais
            </h2>
            <p>
              A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes do site Bio Active Hair, com a finalidade de demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir as suas informações pessoais.
            </p>
            <p className="mt-4">
              Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site Bio Active Hair e integra os Termos e Condições Gerais de Uso do site.
            </p>
            <p className="mt-4">
              O presente documento foi elaborado em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da Internet (Lei 12.965/14) e o Regulamento da UE n. 2016/679.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Responsável pelo Tratamento de Dados
            </h2>
            <div className="bg-muted p-6 rounded-lg">
              <p><strong>Razão Social:</strong> X1 Agência</p>
              <p><strong>CNPJ:</strong> 33.109.665/0001-97 (temporário)</p>
              <p><strong>Endereço:</strong> Rua Vereador Alexandre Antonello, 323 - Dois Vizinhos - PR</p>
              <p><strong>Email:</strong> bioactivenutraceuticos@gmail.com</p>
              <p><strong>Telefone:</strong> +55 (46) 92001-6522</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Quais Dados Coletamos
            </h2>
            <p>
              Coletamos os seguintes dados pessoais dos nossos usuários:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Dados de identificação:</strong> Nome completo, CPF</li>
              <li><strong>Dados de contato:</strong> Email, telefone</li>
              <li><strong>Dados de endereço:</strong> Endereço completo para entrega</li>
              <li><strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
              <li><strong>Cookies e tecnologias similares:</strong> Utilizamos Google Tag Manager para análise de comportamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Como Coletamos os Dados
            </h2>
            <p>
              Os dados pessoais são coletados quando você:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Realiza uma compra através do nosso checkout (processado pela BRAIP)</li>
              <li>Navega pelo nosso site (através de cookies e Google Tag Manager)</li>
              <li>Entra em contato conosco por email ou telefone</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Para Que Usamos Seus Dados
            </h2>
            <p>
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Processar e entregar seu pedido</li>
              <li>Enviar atualizações sobre o status do pedido</li>
              <li>Prestar suporte ao cliente</li>
              <li>Cumprir obrigações legais e fiscais</li>
              <li>Melhorar nosso site e experiência do usuário</li>
              <li>Enviar comunicações de marketing (com seu consentimento)</li>
              <li>Prevenir fraudes e garantir a segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados pessoais podem ser compartilhados com:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>BRAIP:</strong> Processador de pagamentos para finalizar transações</li>
              <li><strong>Transportadoras:</strong> Para entrega dos produtos</li>
              <li><strong>Autoridades governamentais:</strong> Quando exigido por lei</li>
            </ul>
            <p className="mt-4">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu consentimento explícito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares (Google Tag Manager) para:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Melhorar a funcionalidade do site</li>
              <li>Analisar o tráfego e comportamento dos usuários</li>
              <li>Personalizar sua experiência</li>
              <li>Medir a eficácia de campanhas de marketing</li>
            </ul>
            <p className="mt-4">
              Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Segurança dos Dados
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Criptografia de dados sensíveis</li>
              <li>Acesso restrito aos dados pessoais</li>
              <li>Monitoramento regular de segurança</li>
              <li>Uso de processadores de pagamento certificados (BRAIP)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Seus Direitos (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
              <li>Solicitar a portabilidade dos dados</li>
              <li>Revogar o consentimento</li>
              <li>Opor-se ao tratamento de dados</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato conosco através do email: bioactivenutraceuticos@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Retenção de Dados
            </h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo se um período de retenção maior for exigido ou permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Alterações nesta Política
            </h2>
            <p>
              Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato conosco:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> bioactivenutraceuticos@gmail.com</p>
              <p><strong>Telefone:</strong> +55 (46) 92001-6522</p>
              <p><strong>WhatsApp:</strong> (37) 3351-5181</p>
            </div>
          </section>
        </div>

        <Button
          onClick={() => navigate("/")}
          className="mt-12 bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Voltar para o site
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
