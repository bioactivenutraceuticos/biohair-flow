import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GuiaCompletoQuedaCapilar = () => {
  const scrollToPricing = () => {
    window.location.href = "/#precos";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="text-primary font-semibold">Guias</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>15 de Janeiro, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 min de leitura</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Guia Completo: Causas da Queda Capilar em 2025
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Descubra as principais causas da queda capilar e como identificar cada uma delas. Guia completo baseado em estudos científicos recentes.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A queda capilar afeta milhões de pessoas em todo o mundo e pode ter diversas causas. Entender o que está causando sua queda de cabelo é o primeiro passo para encontrar o tratamento adequado. Neste guia completo, vamos explorar as principais causas da queda capilar em 2025, baseado nos estudos científicos mais recentes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">1. Deficiência Nutricional</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uma das causas mais comuns e frequentemente negligenciadas da queda capilar é a deficiência de nutrientes essenciais. Estudos recentes mostram que a falta de vitaminas e minerais específicos pode levar à queda significativa dos fios.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-3">Nutrientes Essenciais:</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Biotina (Vitamina B7):</strong> Fundamental para a produção de queratina</li>
                <li><strong>Ferro:</strong> Essencial para o transporte de oxigênio aos folículos</li>
                <li><strong>Zinco:</strong> Importante para o crescimento e reparação capilar</li>
                <li><strong>Vitamina D:</strong> Regula o ciclo de crescimento do cabelo</li>
                <li><strong>Proteínas:</strong> Componente estrutural principal dos fios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">2. Estresse e Fatores Emocionais</h2>
              <p className="text-muted-foreground leading-relaxed">
                O estresse crônico pode desencadear um tipo de queda capilar chamado eflúvio telógeno, onde os folículos entram prematuramente na fase de repouso. Estudos mostram que até 70% dos fios podem entrar nessa fase durante períodos de estresse intenso.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">3. Alterações Hormonais</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desequilíbrios hormonais são uma causa significativa de queda capilar, especialmente em mulheres. Condições como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Síndrome dos Ovários Policísticos (SOP)</li>
                <li>Alterações na tireoide (hipo ou hipertireoidismo)</li>
                <li>Pós-parto</li>
                <li>Menopausa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">4. Genética e Alopecia Androgenética</h2>
              <p className="text-muted-foreground leading-relaxed">
                A alopecia androgenética, também conhecida como calvície de padrão, é a forma mais comum de perda capilar. Afeta tanto homens quanto mulheres e tem forte componente genético. Estudos recentes identificaram mais de 200 genes relacionados à calvície.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">5. Danos Químicos e Mecânicos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tratamentos químicos agressivos, uso excessivo de calor e penteados muito apertados podem causar danos permanentes aos folículos capilares. Isso inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Alisamentos e relaxamentos frequentes</li>
                <li>Colorações com produtos de baixa qualidade</li>
                <li>Uso diário de chapinha e secador em alta temperatura</li>
                <li>Tranças e penteados que tracionam os fios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Como Identificar a Causa da Sua Queda</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para identificar a causa específica da sua queda capilar, observe:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Padrão da queda (difusa ou localizada)</li>
                <li>Quantidade de fios que caem diariamente</li>
                <li>Presença de outros sintomas (coceira, descamação)</li>
                <li>Histórico familiar de calvície</li>
                <li>Mudanças recentes na dieta ou estilo de vida</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Tratamento e Prevenção</h2>
              <p className="text-muted-foreground leading-relaxed">
                O tratamento adequado depende da causa identificada. No entanto, uma abordagem nutricional completa, como o Bio Active Hair, pode ajudar em múltiplas causas ao fornecer todos os nutrientes essenciais para a saúde capilar.
              </p>
            </section>

            <section className="bg-accent p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">Conclusão</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Entender as causas da queda capilar é fundamental para escolher o tratamento mais adequado. Se você identificou alguma dessas causas, considere uma abordagem nutricional completa para fortalecer seus fios desde a raiz.
              </p>
              <Button
                onClick={scrollToPricing}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto rounded-full font-bold"
              >
                Conhecer Bio Active Hair
              </Button>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default GuiaCompletoQuedaCapilar;
