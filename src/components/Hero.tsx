import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const Hero = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511987657179?text=Olá! Gostaria de agendar uma consulta.", "_blank");
  };

  const openLocation = () => {
    window.open("https://maps.google.com/?q=Dr.+Antenor+Soares+Gandra,+1398,+Colônia,+Jundiaí,+SP,+13218-111", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-healing/80 to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-4 md:mb-6 fade-in-up animate-delay-100">
            <p className="text-base md:text-lg opacity-90 mb-2">「健康は最大の財産」</p>
            <p className="text-xs md:text-sm opacity-75 italic">Saúde é o maior tesouro.</p>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight fade-in-scale animate-delay-200">
            Consultório Arakaki
            <span className="block text-wellness-foreground">
              Fisioterapia & Bem-estar
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto px-4 fade-in-up animate-delay-300">
            Cuidando da sua saúde desde 2008 com excelência em fisioterapia, 
            acupuntura e massagens terapêuticas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12 px-4 fade-in-up animate-delay-400">
            <Button 
              onClick={openWhatsApp}
              variant="secondary"
              size="lg"
              className="bg-success hover:bg-success/90 text-success-foreground shadow-floating text-sm md:text-base"
            >
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Agendar Consulta
            </Button>
            <Button 
              onClick={openLocation}
              variant="secondary"
              size="lg"
              className="bg-healing hover:bg-healing/90 text-healing-foreground shadow-floating text-sm md:text-base"
            >
              <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Como Chegar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4 fade-in-up animate-delay-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 fade-in-up animate-delay-600">
              <Clock className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2" />
              <p className="font-semibold text-sm md:text-base">Horário</p>
              <p className="text-xs md:text-sm opacity-90">Seg-Sex: 7h-18h</p>
              <p className="text-xs md:text-sm opacity-90">Sáb: 7h-12h</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2" />
              <p className="font-semibold text-sm md:text-base">Localização</p>
              <p className="text-xs md:text-sm opacity-90">Jundiaí/SP</p>
              <p className="text-xs md:text-sm opacity-90">Colônia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <Phone className="h-5 w-5 md:h-6 md:w-6 mx-auto mb-2" />
              <p className="font-semibold text-sm md:text-base">WhatsApp</p>
              <p className="text-xs md:text-sm opacity-90">(11) 98765-7179</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
