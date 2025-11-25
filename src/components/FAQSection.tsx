import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Devo usar o Bio Active Hair todos os dias?",
      answer:
        "Sim, para obter os melhores resultados, é recomendado o uso diário e contínuo do Bio Active Hair, seguindo as instruções da embalagem.",
    },
    {
      question: "O Bio Active Hair tem efeitos colaterais?",
      answer:
        "Não, o Bio Active Hair possui uma fórmula ultra avançada e é liberado pela ANVISA, garantindo que não há efeitos colaterais conhecidos quando utilizado conforme as recomendações.",
    },
    {
      question: "Posso comprar o Bio Active Hair na farmácia?",
      answer:
        "O Bio Active Hair é vendido exclusivamente através do nosso site oficial para garantir a originalidade e os melhores preços. Não está disponível em farmácias ou lojas físicas.",
    },
    {
      question: "Quanto tempo preciso usar o Bio Active Hair?",
      answer:
        "Os resultados podem variar, mas muitos usuários notam melhorias significativas a partir do primeiro mês. Para resultados completos e duradouros, recomendamos um tratamento de 3 a 6 meses.",
    },
    {
      question: "Tem garantia?",
      answer:
        "Sim! Oferecemos garantia de 30 dias. Se não ficar satisfeito com os resultados, devolvemos seu dinheiro, sem burocracia.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-muted rounded-lg px-6 border-none"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
