
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check, Clock } from 'lucide-react';

const ExpressDelivery = () => {
  const expressOptions = [
    {
      name: "Kargoo Rapid",
      delivery: "1-2 dias úteis",
      description: "Nossa opção mais rápida para envios urgentes, com garantia de entrega em até 2 dias úteis para os principais destinos internacionais.",
      features: [
        "Entrega prioritária",
        "Rastreamento em tempo real",
        "Seguro premium incluído",
        "Atendimento prioritário"
      ]
    },
    {
      name: "Kargoo Express",
      delivery: "3-5 dias úteis",
      description: "Envio rápido com excelente custo-benefício para pacotes que precisam chegar com agilidade, mas não com extrema urgência.",
      features: [
        "Rastreamento detalhado",
        "Seguro básico incluído",
        "Notificações automáticas"
      ]
    }
  ];

  return (
    <PageLayout title="Entrega Expressa">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-10">
          Quando a velocidade é essencial, a Kargoo oferece soluções expressas de envio internacional que garantem que seus pacotes cheguem ao destino no menor tempo possível.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nossas opções de entrega expressa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {expressOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-shappi-green/10 p-4">
                  <h3 className="text-xl font-bold">{option.name}</h3>
                  <div className="flex items-center mt-2">
                    <Clock className="mr-2 h-5 w-5 text-shappi-green" />
                    <span className="font-semibold">{option.delivery}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4">{option.description}</p>
                  <h4 className="font-semibold mb-3">Características:</h4>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-shappi-green flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-shappi-green hover:bg-shappi-green/90">
                    Cotar {option.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Por que escolher entrega expressa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Envios urgentes</h3>
              <p>Ideal para documentos importantes, peças de reposição urgentes ou presentes de última hora.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">E-commerce premium</h3>
              <p>Ofereça aos seus clientes uma opção de entrega rápida para produtos de alto valor.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Carga sensível ao tempo</h3>
              <p>Para produtos perecíveis ou com prazo de validade, garantindo que cheguem em condições ideais.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Países com cobertura expressa</h2>
          <p className="mb-4">
            Nosso serviço de entrega expressa está disponível para os seguintes destinos principais, com tempos de entrega garantidos:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-bold mb-2">América do Norte</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Estados Unidos</li>
                  <li>Canadá</li>
                  <li>México</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Europa</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Reino Unido</li>
                  <li>Alemanha</li>
                  <li>França</li>
                  <li>Espanha</li>
                  <li>Portugal</li>
                  <li>Itália</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Ásia-Pacífico</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Japão</li>
                  <li>Coreia do Sul</li>
                  <li>Austrália</li>
                  <li>China</li>
                  <li>Singapura</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">América do Sul</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>Brasil</li>
                  <li>Argentina</li>
                  <li>Chile</li>
                  <li>Colômbia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-shappi-green/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa enviar algo com urgência?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Nossos especialistas estão prontos para ajudar a encontrar a melhor solução expressa para sua necessidade.
          </p>
          <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90">
            Solicitar cotação expressa
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExpressDelivery;
