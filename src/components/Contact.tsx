import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5511987657179?text=Olá! Gostaria de agendar uma consulta.", "_blank");
  };

  const openEmail = () => {
    window.open("mailto:kelife_jp@hotmail.com", "_blank");
  };

  const openLocation = () => {
    window.open("https://maps.google.com/?q=Dr.+Antenor+Soares+Gandra,+1398,+Colônia,+Jundiaí,+SP,+13218-111", "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para cuidar da sua saúde. Agende sua consulta agora!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="shadow-card border-0 hover:shadow-floating transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="mr-3 h-6 w-6" />
                    Telefone & WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-success mb-4">(11) 98765-7179</p>
                  <Button onClick={openWhatsApp} className="w-full bg-success hover:bg-success/90">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-floating transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Mail className="mr-3 h-6 w-6" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-4">kelife_jp@hotmail.com</p>
                  <Button onClick={openEmail} variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Enviar E-mail
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-floating transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Clock className="mr-3 h-6 w-6" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Segunda a Sexta:</span>
                      <span className="text-success font-semibold">7h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sábados:</span>
                      <span className="text-success font-semibold">7h às 12h</span>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        ⚠️ Atendimento com hora marcada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card border-0 hover:shadow-floating transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <MapPin className="mr-3 h-6 w-6" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-lg">Consultório Arakaki</p>
                      <p className="text-muted-foreground">Dr. Antenor Soares Gandra, 1398</p>
                      <p className="text-muted-foreground">Bairro Colônia</p>
                      <p className="text-muted-foreground">Jundiaí/SP - CEP: 13218-111</p>
                    </div>
                    <Button onClick={openLocation} className="w-full bg-healing hover:bg-healing/90">
                      <MapPin className="mr-2 h-4 w-4" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-wellness flex items-center justify-center relative">
                    <div className="text-center text-wellness-foreground">
                      <MapPin className="h-12 w-12 mx-auto mb-4" />
                      <p className="font-semibold">Localização no Mapa</p>
                      <p className="text-sm opacity-90">Jundiaí/SP - Bairro Colônia</p>
                    </div>
                    <Button 
                      onClick={openLocation}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 hover:bg-white/30 border border-white/30 text-white"
                      size="sm"
                    >
                      Abrir Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;