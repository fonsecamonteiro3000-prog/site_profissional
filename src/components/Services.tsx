import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Heart, Leaf, Sparkles, ChevronDown, ChevronUp, Phone, Zap } from "lucide-react";
import { useState } from "react";

const PixIcon = () => (
  <svg 
    className="h-6 w-6 text-success" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2L13.09 8.26L20 7L17.9 13.26L24 12L17.74 14.91L19 22L12.74 19.91L12 22L11.26 19.91L5 22L6.26 14.91L0 12L6.26 13.26L2 7L8.91 8.26L12 2Z"/>
  </svg>
);

const services = [
  {
    id: 1,
    name: "Acupuntura Sistêmica e Auricular",
    price: "R$ 150",
    duration: "1h",
    description: "Estimula o organismo para melhorar a função natural de reação contra doenças. Auriculoterapia estimula pontos na orelha para prevenção e tratamento.",
    details: {
      whatItIs: "A acupuntura é uma técnica milenar da medicina tradicional chinesa que utiliza agulhas finas inseridas em pontos específicos do corpo.",
      whatItDoes: "Estimula o sistema nervoso, promove liberação de endorfinas, melhora a circulação sanguínea e equilibra a energia vital (Qi).",
      benefits: ["Alívio de dores crônicas", "Redução do estresse e ansiedade", "Melhora do sono", "Fortalecimento do sistema imunológico", "Equilíbrio hormonal"],
      indications: "Dores musculares, enxaquecas, insônia, ansiedade, problemas digestivos, dores articulares e recuperação pós-cirúrgica."
    },
    icon: Zap,
    color: "healing"
  },
  {
    id: 2,
    name: "Massagem Terapêutica",
    price: "R$ 140",
    duration: "1h",
    description: "Manipulação das estruturas corporais para relaxamento, alívio do estresse e auxílio de eletroterapia.",
    details: {
      whatItIs: "Técnica manual que utiliza movimentos específicos para manipular músculos, tendões, ligamentos e tecidos moles.",
      whatItDoes: "Promove relaxamento muscular, melhora circulação, reduz tensões e auxilia na recuperação de lesões.",
      benefits: ["Alívio de tensões musculares", "Melhora da flexibilidade", "Redução de inflamações", "Relaxamento profundo", "Melhora da postura"],
      indications: "Dores nas costas, pescoço, ombros, lesões esportivas, estresse muscular e reabilitação pós-trauma."
    },
    icon: Heart,
    color: "nature"
  },
  {
    id: 3,
    name: "Massagem Relaxante Corporal e Facial",
    price: "R$ 140",
    duration: "1h",
    description: "Melhora a circulação sanguínea e proporciona bem-estar físico e emocional.",
    details: {
      whatItIs: "Massagem suave e relaxante que combina técnicas corporais e faciais para bem-estar completo.",
      whatItDoes: "Estimula circulação, promove relaxamento profundo e revitaliza a pele do rosto e corpo.",
      benefits: ["Relaxamento total", "Melhora da circulação", "Pele mais macia", "Redução do estresse", "Bem-estar emocional"],
      indications: "Estresse, fadiga, tensão emocional, pele ressecada e necessidade de relaxamento geral."
    },
    icon: Sparkles,
    color: "wellness"
  },
  {
    id: 4,
    name: "Quick Massage",
    price: "R$ 70",
    duration: "30min",
    description: "Equilíbrio físico e mental em meia hora. Massagem expressa para quem tem pouco tempo.",
    details: {
      whatItIs: "Massagem rápida e eficiente focada nos pontos de maior tensão em apenas 30 minutos.",
      whatItDoes: "Alivia tensões pontuais, relaxa músculos principais e proporciona bem-estar imediato.",
      benefits: ["Alívio rápido de tensões", "Relaxamento expresso", "Melhora da disposição", "Quebra na rotina", "Economia de tempo"],
      indications: "Rotina corrida, tensões do dia a dia, pausa no trabalho, dores pontuais e manutenção do bem-estar."
    },
    icon: Clock,
    color: "success"
  },
  {
    id: 5,
    name: "Drenagem Linfática",
    price: "R$ 140",
    duration: "1h",
    description: "Estimula a circulação linfática e combate a retenção de líquidos, celulite e flacidez.",
    details: {
      whatItIs: "Técnica manual específica que estimula o sistema linfático através de movimentos suaves e ritmados.",
      whatItDoes: "Acelera a drenagem de toxinas, reduz inchaços, melhora circulação e combate retenção de líquidos.",
      benefits: ["Redução de inchaços", "Combate à celulite", "Melhora da circulação", "Eliminação de toxinas", "Pernas mais leves"],
      indications: "Retenção de líquidos, celulite, inchaço nas pernas, pós-operatório, má circulação e fadiga."
    },
    icon: Leaf,
    color: "nature"
  },
  {
    id: 6,
    name: "Candle Massage",
    price: "R$ 140",
    duration: "1h",
    description: "Massagem extremamente hidratante e relaxante com parafina cosmética.",
    details: {
      whatItIs: "Massagem única que utiliza velas especiais que derretem em óleo morno para aplicação na pele.",
      whatItDoes: "Hidrata profundamente a pele enquanto proporciona relaxamento através do calor suave e aromas.",
      benefits: ["Hidratação intensa", "Relaxamento aromático", "Pele macia e sedosa", "Experiência sensorial", "Bem-estar emocional"],
      indications: "Pele ressecada, estresse, necessidade de hidratação profunda, relaxamento e experiência sensorial."
    },
    icon: Sparkles,
    color: "wellness"
  },
  {
    id: 7,
    name: "Bambo Massage",
    price: "R$ 140",
    duration: "1h",
    description: "Tratamento facial e corporal com propriedades drenantes e relaxantes usando bambu.",
    details: {
      whatItIs: "Massagem inovadora que utiliza bastões de bambu aquecidos para estimular pontos específicos do corpo.",
      whatItDoes: "Promove drenagem linfática, relaxamento muscular e revitalização através da energia do bambu.",
      benefits: ["Drenagem natural", "Relaxamento profundo", "Melhora da energia vital", "Pele revitalizada", "Equilíbrio energético"],
      indications: "Fadiga, estresse, falta de energia, necessidade de drenagem e busca por tratamento natural."
    },
    icon: Leaf,
    color: "healing"
  },
  {
    id: 8,
    name: "Massagem com Pedras Quentes",
    price: "R$ 140",
    duration: "1h",
    description: "Relaxamento profundo com pedras aquecidas. Sensação única de inverno!",
    details: {
      whatItIs: "Terapia que combina massagem tradicional com pedras vulcânicas aquecidas colocadas em pontos estratégicos.",
      whatItDoes: "O calor das pedras penetra nos músculos, promovendo relaxamento profundo e alívio de tensões.",
      benefits: ["Relaxamento muscular profundo", "Alívio de dores", "Melhora da circulação", "Redução do estresse", "Sensação de aconchego"],
      indications: "Tensões musculares profundas, estresse, dores crônicas, friagem e necessidade de relaxamento intenso."
    },
    icon: Heart,
    color: "success"
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpanded = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const openWhatsApp = (serviceName: string, servicePrice: string, serviceDuration: string) => {
    const message = `Olá! Gostaria de agendar uma consulta. Gostaria de uma ${serviceName.toLowerCase()}, de aproximadamente ${serviceDuration} no valor de ${servicePrice.replace('R$ ', '')} reais.`;
    window.open(`https://wa.me/5511987657179?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos especializados para seu bem-estar e saúde
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === service.id;
            
            return (
              <div key={service.id} className="relative">
                <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color} flex items-center justify-center text-${service.color}-foreground group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary leading-tight">
                      {service.name}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                        {service.price}
                      </Badge>
                      <Badge variant="outline" className="border-muted-foreground/20">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => openWhatsApp(service.name, service.price, service.duration)}
                        className="flex-1 bg-success hover:bg-success/90 transition-colors duration-300"
                        size="sm"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Agendar
                      </Button>
                      <Button 
                        onClick={() => toggleExpanded(service.id)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                        size="sm"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        Saiba mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Div expansível com detalhes */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">O que é:</h4>
                          <p className="text-sm text-muted-foreground">{service.details.whatItIs}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Como funciona:</h4>
                          <p className="text-sm text-muted-foreground">{service.details.whatItDoes}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Benefícios:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {service.details.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-success rounded-full mr-2 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Indicado para:</h4>
                          <p className="text-sm text-muted-foreground">{service.details.indications}</p>
                        </div>
                        
                        <Button 
                          onClick={() => openWhatsApp(service.name, service.price, service.duration)}
                          className="w-full bg-primary hover:bg-healing transition-colors duration-300 mt-4"
                          size="sm"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Agendar {service.name}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-6">Formas de Pagamento</h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 bg-card p-4 rounded-lg shadow-soft">
              <CreditCard className="h-6 w-6 text-success" />
              <span className="font-medium">Cartão</span>
            </div>
            <div className="flex items-center gap-2 bg-card p-4 rounded-lg shadow-soft">
              <Zap className="h-6 w-6 text-success" />
              <span className="font-medium">PIX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;