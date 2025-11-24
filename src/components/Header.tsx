import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Bio Active Hair</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("garantia")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Garantia
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button onClick={() => scrollToSection("precos")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Comprar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("precos")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("garantia")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Garantia
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                FAQ
              </button>
              <Button onClick={() => scrollToSection("precos")} className="bg-primary text-primary-foreground w-full">
                Comprar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
