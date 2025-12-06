import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const articles = [
    {
      slug: "guia-completo-queda-capilar",
      title: "Guia Completo: Causas da Queda Capilar em 2025",
      excerpt: "Descubra as principais causas da queda capilar e como identificar cada uma delas. Guia completo baseado em estudos científicos.",
      date: "2025-01-15",
      readTime: "10 min",
      category: "Guias",
    },
    {
      slug: "como-parar-queda-cabelo",
      title: "Como Parar Queda de Cabelo: 5 Estratégias Comprovadas",
      excerpt: "Estratégias cientificamente comprovadas para parar a queda de cabelo e recuperar a saúde capilar.",
      date: "2025-01-10",
      readTime: "8 min",
      category: "Tratamentos",
    },
    {
      slug: "alopecia-vs-queda-normal",
      title: "Alopecia vs Queda Normal: Como Diferenciar",
      excerpt: "Aprenda a identificar se sua queda é normal ou se pode ser alopecia. Sinais de alerta e quando procurar ajuda.",
      date: "2025-01-05",
      readTime: "7 min",
      category: "Diagnóstico",
    },
    {
      slug: "melhor-tratamento-calvicie",
      title: "Melhor Tratamento para Calvície: Comparativo 2025",
      excerpt: "Comparativo completo dos principais tratamentos para calvície disponíveis no mercado. Eficácia, custos e resultados.",
      date: "2024-12-28",
      readTime: "10 min",
      category: "Comparativos",
    },
    {
      slug: "perguntas-frequentes-queda-capilar",
      title: "FAQ: 10 Perguntas Frequentes sobre Queda Capilar",
      excerpt: "As 10 perguntas mais comuns sobre queda capilar respondidas por especialistas. Tire todas as suas dúvidas.",
      date: "2024-12-20",
      readTime: "6 min",
      category: "FAQ",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-4 bg-gradient-to-br from-[#fce7f3] via-background to-accent">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog <span className="text-primary">Bio Active Hair</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conteúdo educativo sobre saúde capilar, tratamentos e dicas para combater a queda de cabelo
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={index} to={`/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                      <span>{article.category}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-foreground line-clamp-2">
                      {article.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
