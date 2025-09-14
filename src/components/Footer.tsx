import { Phone, Mail, MapPin, Clock, Heart } from "lucide-react";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511987657179", "_blank");
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">Consultório Arakaki</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Cuidando da sua saúde desde 2007 com excelência em fisioterapia, 
              acupuntura e massagens terapêuticas.
            </p>
            <div className="text-lg">
              <p className="font-medium">「健康は最大の財産」</p>
              <p className="text-sm text-primary-foreground/80 italic">Saúde é o maior tesouro</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-success" />
                <button 
                  onClick={openWhatsApp}
                  className="hover:text-success transition-colors"
                >
                  (11) 98765-7179
                </button>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-success" />
                <a 
                  href="mailto:kelife_jp@hotmail.com"
                  className="hover:text-success transition-colors"
                >
                  kelife_jp@hotmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-success flex-shrink-0" />
                <div>
                  <p>Dr. Antenor Soares Gandra, 1398</p>
                  <p>Colônia - Jundiaí/SP</p>
                  <p>CEP: 13218-111</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Horários
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Seg - Sex:</span>
                <span className="text-success">7h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábados:</span>
                <span className="text-success">7h - 12h</span>
              </div>
              <p className="text-xs text-primary-foreground/70 mt-3">
                * Atendimento com hora marcada
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Consultório Arakaki. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center mt-2 md:mt-0">
              Feito com <Heart className="h-4 w-4 mx-1 text-success" /> para sua saúde e bem-estar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;