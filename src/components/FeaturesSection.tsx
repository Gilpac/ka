
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Truck, CreditCard, Clock, Shield } from 'lucide-react';

const featuresData = [
  {
    icon: <Globe className="h-10 w-10 text-shappi-green" />,
    title: "Cobertura Global",
    description: "Envie para mais de 220 países e territórios em todo o mundo com tarifas competitivas."
  },
  {
    icon: <Truck className="h-10 w-10 text-shappi-green-medium" />,
    title: "Entrega Rápida",
    description: "Opções de envio expresso disponíveis com informações de rastreamento confiáveis."
  },
  {
    icon: <CreditCard className="h-10 w-10 text-shappi-gray" />,
    title: "Preços Transparentes",
    description: "Sem taxas ocultas. Obtenha tarifas de envio claras antes de enviar seu pacote."
  },
  {
    icon: <Clock className="h-10 w-10 text-shappi-green" />,
    title: "Suporte 24/7",
    description: "Nossa equipe de atendimento ao cliente está disponível 24 horas por dia para ajudá-lo."
  },
  {
    icon: <Shield className="h-10 w-10 text-shappi-green-medium" />,
    title: "Proteção de Pacotes",
    description: "Cobertura de seguro opcional para seus envios valiosos."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="shappi-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Envie Com <span className="gradient-text">Confiança</span>
          </h2>
          <p className="text-lg text-gray-600">
            A Kargoo fornece uma solução completa de envio internacional com recursos projetados para tornar o envio simples e sem estresse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow card-hover-effect">
              <CardContent className="p-6">
                <div className="mb-4 animate-pulse-slow">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a href="#" className="text-shappi-green flex items-center font-medium group">
                  <span></span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
