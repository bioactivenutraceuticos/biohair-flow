import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "E se não funcionar comigo?",
      answer:
        "Temos 60 dias de garantia. Se não funcionar, devolvemos 100% do seu dinheiro. Você literalmente não tem nada a perder e tudo a ganhar.",
    },
    {
      question: "É muito caro comparado a outros produtos?",
      answer:
        "Na verdade é 67% mais barato. Outros produtos custam R$ 150-300 e você precisa comprar todo mês. Bio Active Hair são apenas R$ 247 para 3 meses completos (R$ 82/mês).",
    },
    {
      question: "Quanto tempo demora para ver resultados?",
      answer:
        "A maioria dos nossos clientes nota redução na queda entre 7-14 dias. Resultados mais significativos aparecem entre 30-60 dias.",
    },
    {
      question: "É seguro? Tem efeitos colaterais?",
      answer:
        "100% seguro. Aprovado pela ANVISA, testado dermatologicamente. Ingredientes naturais sem contraindicações. Pode usar durante gravidez e amamentação.",
    },
    {
      question: "Como sei que vocês são confiáveis?",
      answer:
        "Temos CNPJ ativo, nota fiscal, suporte via WhatsApp, garantia de 60 dias e mais de 12.847 frascos vendidos. Empresa registrada e auditada.",
    },
    {
      question: "Funciona para queda de cabelo intensa?",
      answer:
        "Sim! Bio Active Hair foi desenvolvido especialmente para combater a queda capilar em mulheres. Ele fortalece os fios desde a raiz, reduz a queda e estimula o crescimento de novos cabelos. Funciona tanto para queda moderada quanto intensa.",
    },
    {
      question: "Preciso usar para sempre?",
      answer:
        "Não. Após 3-6 meses de uso, muitos clientes fazem apenas manutenção (1-2 vezes por semana). O cabelo fica mais resistente e saudável naturalmente.",
    },
    {
      question: "Quanto tempo demora para chegar?",
      answer:
        "O prazo de entrega varia conforme a localidade. Em média, de 3 a 10 dias úteis para capitais e regiões metropolitanas. Para algumas localidades mais distantes, pode levar até 20 dias. Frete grátis para todo Brasil. Você recebe código de rastreamento por e-mail e WhatsApp.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 whitespace-nowrap">
            Respondendo Suas Principais Dúvidas
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
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
