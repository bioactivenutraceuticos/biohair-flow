import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfterSection = () => {
  return (
    <section className="py-20 px-4 bg-accent">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja a Transformação Real
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados comprovados de mulheres que transformaram seus cabelos com Bio Active Hair
          </p>
        </div>

        {/* Before/After Image */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden animate-fade-in">
            <img
              src={beforeAfterImg}
              alt="Antes e depois do tratamento com Bio Active Hair"
              className="w-full h-auto"
            />
          </div>
          
          {/* Labels */}
          <div className="grid grid-cols-2 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-background p-6 rounded-xl text-center">
              <p className="text-muted-foreground mb-2">Antes</p>
              <p className="font-bold text-foreground">Cabelos fracos e quebradiços</p>
            </div>
            <div className="bg-primary p-6 rounded-xl text-center">
              <p className="text-primary-foreground/80 mb-2">Depois</p>
              <p className="font-bold text-primary-foreground">Cabelos fortes e volumosos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
