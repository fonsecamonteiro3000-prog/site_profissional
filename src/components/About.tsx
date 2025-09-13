import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, User } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 15 anos de experiência cuidando da sua saúde e bem-estar
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-wellness flex items-center justify-center">
                    <User className="h-10 w-10 text-wellness-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Kelly Kioko Arakaki Giarola Pereira
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Fisioterapeuta, Acupunturista e Especialista
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 text-base px-4 py-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Desde 2007
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Profissional dedicada com vasta experiência em fisioterapia, acupuntura e massagens terapêuticas. 
                    Comprometida em oferecer o melhor cuidado para seus pacientes através de técnicas modernas e tradicionais.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <GraduationCap className="mr-3 h-7 w-7" />
                Formação Acadêmica
              </h3>
              
              <Card className="shadow-soft border-l-4 border-l-healing">
                <CardHeader>
                  <CardTitle className="text-xl text-healing flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    CEUNSP ITU/SP (2008)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium mb-2">
                    Graduação em Fisioterapia
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>TCC:</strong> "Intervenção Fisioterápica em Mulheres Mastectomizadas"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-soft border-l-4 border-l-nature">
                <CardHeader>
                  <CardTitle className="text-xl text-nature flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    EBRAMEC (2013)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium mb-2">
                    Escola Brasileira de Medicina Chinesa
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>TCC:</strong> "A Intervenção da Acupuntura no Tratamento da Dismenorreia"
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 bg-gradient-wellness">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <p className="text-2xl font-bold text-wellness-foreground mb-2">
                      「健康は最大の財産」
                    </p>
                    <p className="text-wellness-foreground/90 italic">
                      "Saúde é o maior tesouro"
                    </p>
                  </div>
                  <p className="text-wellness-foreground/80 text-sm">
                    Nossa filosofia oriental guia cada tratamento, 
                    buscando sempre o equilíbrio entre corpo e mente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;