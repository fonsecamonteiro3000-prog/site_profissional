import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5511987657179?text=Olá! Gostaria de agendar uma consulta.", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-white via-white/98 to-primary/5 backdrop-blur-md shadow-xl border-b border-primary/20 animate-in slide-in-from-top duration-700">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              className="group transition-all duration-300 hover:scale-105"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary via-healing to-success bg-clip-text text-transparent hover:from-success hover:via-healing hover:to-primary transition-all duration-500">
                Consultório Arakaki
              </h1>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative group py-2"
            >
              Início
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-healing transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative group py-2"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-healing transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative group py-2"
            >
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-healing transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-lg font-medium text-foreground hover:text-primary transition-all duration-300 relative group py-2"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-healing transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="hidden lg:block">
            <Button 
              onClick={openWhatsApp} 
              size="lg"
              className="bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-3 h-5 w-5" />
              Agendar
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-7 w-7" />
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary/20 bg-gradient-to-b from-white to-primary/5 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-5">
              <button 
                onClick={scrollToTop}
                className="text-left text-lg font-semibold text-primary hover:text-healing transition-colors py-3 px-2"
              >
                🏠 Início (Topo)
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-2"
              >
                Contato
              </button>
              <Button 
                onClick={openWhatsApp} 
                size="lg"
                className="w-full bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success mt-6 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-3 h-5 w-5" />
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;