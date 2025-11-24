import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gláucia",
      text: "Eu estava literalmente com um buraco na cabeça de tanto cabelo que tinha caído e com Bio Active Hair consegui crescer meu cabelo e conquistar novamente minha autoestima.",
      rating: 5,
    },
    {
      name: "Verônica",
      text: "Meu cabelo estava caindo bastante e isso estava me deixando muito chateada. Busquei na internet por soluções e encontrei o Bio Active Hair, comprei e além de ter tido um resultado incrível no meu cabelo, minha pele do rosto mudou pra melhor completamente e minhas unhas pararam de quebrar.",
      rating: 5,
    },
    {
      name: "Lorena",
      text: "Queria um suplemento que me ajudasse com o crescimento do meu cabelo, fazia já quase dois anos que deixava ele crescer e ele tinha crescido pouquíssimo. Pedi o Bio Active Hair e depois de alguns meses fazendo o uso contínuo meu cabelo cresceu muito, muito mesmo.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for smoother carousel
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            QUEM USA Bio Active, RECOMENDA!
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {allTestimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-6">
                    {/* Avatar */}
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-secondary text-secondary"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
