import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
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
          Termos de Uso
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o site Bio Active Hair, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou adquirir nossos produtos.
            </p>
            <p className="mt-4">
              Estes Termos de Uso aplicam-se a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Sobre a Empresa
            </h2>
            <div className="bg-muted p-6 rounded-lg">
              <p><strong>Razão Social:</strong> X1 Agência</p>
              <p><strong>CNPJ:</strong> 33.109.665/0001-97 (temporário)</p>
              <p><strong>Endereço:</strong> Rua Vereador Alexandre Antonello, 323 - Dois Vizinhos - PR</p>
              <p><strong>Email:</strong> contato@bioactivehair.com</p>
              <p><strong>Telefone:</strong> +55 (46) 92001-6522</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Sobre o Produto
            </h2>
            <p>
              O Bio Active Hair é um suplemento nutricional desenvolvido para auxiliar no crescimento capilar, fortalecimento das unhas e saúde da pele. A fórmula foi estrategicamente pensada para proporcionar ao organismo os ativos necessários para o crescimento saudável do cabelo.
            </p>
            <p className="mt-4">
              <strong>Características do produto:</strong>
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Fórmula ultra avançada</li>
              <li>Aprovado pela ANVISA</li>
              <li>Sem efeitos colaterais conhecidos quando usado conforme recomendações</li>
              <li>Auxilia no crescimento capilar</li>
              <li>Fortalece unhas</li>
              <li>Contribui para eliminação de linhas de expressão</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Compra e Pagamento
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              4.1 Formas de Pagamento
            </h3>
            <p>
              Aceitamos as seguintes formas de pagamento:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Cartão de Crédito (parcelamento em até 12x)</li>
              <li>PIX (pagamento à vista)</li>
            </ul>
            <p className="mt-4">
              Todos os pagamentos são processados de forma segura através da plataforma BRAIP.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              4.2 Confirmação do Pedido
            </h3>
            <p>
              Após a confirmação do pagamento, você receberá um email de confirmação com os detalhes do seu pedido e informações sobre o prazo de entrega.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              4.3 Preços
            </h3>
            <p>
              Todos os preços estão em Reais (R$) e podem estar sujeitos a alterações sem aviso prévio. Os preços vigentes são aqueles apresentados no momento da compra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Entrega
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              5.1 Prazo de Entrega
            </h3>
            <p>
              O prazo de entrega é de <strong>1 a 2 semanas</strong> para você receber o poderoso Kit Bio Active Hair no conforto da sua casa, contados a partir da confirmação do pagamento.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              5.2 Área de Entrega
            </h3>
            <p>
              Realizamos entregas para todo o território nacional brasileiro.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              5.3 Rastreamento
            </h3>
            <p>
              Após o envio do produto, você receberá um código de rastreamento para acompanhar a entrega.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Política de Devolução e Garantia
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              6.1 Garantia de 30 Dias
            </h3>
            <p>
              Oferecemos garantia de <strong>30 dias</strong> para problemas relacionados à fabricação do produto. Se você identificar qualquer defeito de fabricação, entre em contato conosco dentro deste prazo.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              6.2 Condições para Devolução
            </h3>
            <p>
              Para solicitar devolução por defeito de fabricação:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>O produto deve estar dentro do prazo de garantia (30 dias)</li>
              <li>O defeito deve ser comprovadamente de fabricação</li>
              <li>O produto não deve ter sido usado de forma inadequada</li>
              <li>A embalagem deve estar em boas condições</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              6.3 Processo de Devolução
            </h3>
            <p>
              Para solicitar devolução, entre em contato através do email contato@bioactivehair.com ou WhatsApp (37) 3351-5181 informando:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Número do pedido</li>
              <li>Motivo da devolução</li>
              <li>Fotos do produto (se aplicável)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Uso do Produto
            </h2>
            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              7.1 Recomendações de Uso
            </h3>
            <p>
              Para obter os melhores resultados, recomendamos:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Uso diário e contínuo do produto</li>
              <li>Seguir as instruções da embalagem</li>
              <li>Tratamento de 3 a 6 meses para resultados completos</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              7.2 Contraindicações
            </h3>
            <p>
              Consulte um médico antes de usar se você:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Estiver grávida ou amamentando</li>
              <li>Tiver alguma condição médica pré-existente</li>
              <li>Estiver tomando outros medicamentos</li>
              <li>Tiver alergia a algum componente da fórmula</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">
              7.3 Resultados
            </h3>
            <p>
              Os resultados podem variar de pessoa para pessoa. Muitos usuários notam melhorias significativas a partir do primeiro mês de uso. O Bio Active Hair não é um medicamento e não substitui orientação médica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo presente neste site, incluindo mas não limitado a textos, gráficos, logos, imagens, vídeos e software, é propriedade da Bio Active Hair ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais brasileiras e internacionais.
            </p>
            <p className="mt-4">
              É proibido copiar, reproduzir, distribuir ou criar trabalhos derivados sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Limitação de Responsabilidade
            </h2>
            <p>
              A Bio Active Hair não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Uso inadequado do produto</li>
              <li>Resultados individuais que podem variar</li>
              <li>Atrasos na entrega causados por transportadoras</li>
              <li>Problemas técnicos temporários no site</li>
              <li>Danos indiretos ou consequenciais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Privacidade e Proteção de Dados
            </h2>
            <p>
              O uso de seus dados pessoais é regido por nossa <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>, que faz parte integrante destes Termos de Uso.
            </p>
            <p className="mt-4">
              Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/18).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Alterações nos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar periodicamente estes termos.
            </p>
            <p className="mt-4">
              O uso continuado do site após alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Lei Aplicável e Foro
            </h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida no foro da comarca de Dois Vizinhos - PR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Contato
            </h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="bg-muted p-6 rounded-lg mt-4">
              <p><strong>Email:</strong> contato@bioactivehair.com</p>
              <p><strong>Telefone:</strong> +55 (46) 92001-6522</p>
              <p><strong>WhatsApp:</strong> (37) 3351-5181</p>
              <p><strong>Endereço:</strong> Rua Vereador Alexandre Antonello, 323 - Dois Vizinhos - PR</p>
            </div>
          </section>

          <section className="bg-accent p-6 rounded-lg">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Declaração de Aceitação
            </h2>
            <p>
              Ao realizar uma compra em nosso site, você declara que leu, compreendeu e concordou com todos os termos e condições aqui estabelecidos.
            </p>
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

export default TermsOfUse;
