
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const InternationalShipping = () => {
  const shippingDestinations = [
    "Estados Unidos", "Canadá", "Reino Unido", "Alemanha", "França", 
    "Espanha", "Portugal", "Itália", "Austrália", "Japão", 
    "China", "Índia", "México", "Argentina", "Chile"
  ];

  const benefits = [
    "Preços competitivos em mais de 200 países",
    "Rastreamento em tempo real de todos os envios",
    "Seguro inclusivo em todos os pacotes",
    "Declaração aduaneira simplificada",
    "Retirada em domicílio disponível",
    "Múltiplas opções de prazos de entrega",
    "Embalagem especializada para proteção extra",
    "Suporte dedicado em português, inglês e espanhol",
    "App móvel para gerenciar envios em qualquer lugar"
  ];

  return (
    <PageLayout title="Envio Internacional">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xl text-gray-600 mb-6">
            Envie pacotes para qualquer lugar do mundo com a Kargoo, de forma fácil, segura e com preços transparentes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4">Como funciona</h2>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">1</span>
                  <div>
                    <h3 className="font-bold mb-1">Cadastre seu envio</h3>
                    <p className="text-gray-600">Preencha os dados do remetente, destinatário e do pacote em nossa plataforma.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">2</span>
                  <div>
                    <h3 className="font-bold mb-1">Escolha as opções</h3>
                    <p className="text-gray-600">Selecione o tipo de serviço, prazo de entrega e adicione serviços extras se necessário.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">3</span>
                  <div>
                    <h3 className="font-bold mb-1">Pague e imprima</h3>
                    <p className="text-gray-600">Realize o pagamento e imprima as etiquetas e documentos necessários.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">4</span>
                  <div>
                    <h3 className="font-bold mb-1">Envie seu pacote</h3>
                    <p className="text-gray-600">Entregue em um ponto de coleta ou solicite retirada em domicílio.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-4">Vantagens</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-shappi-green flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Destinos populares</h2>
            <div className="flex flex-wrap gap-3">
              {shippingDestinations.map((destination, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {destination}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600">
              E muito mais! A Kargoo atende mais de 200 países e territórios em todo o mundo.
            </p>
          </div>
          
          <div className="bg-shappi-green/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Pronto para enviar?</h2>
            <p className="text-center mb-6">
              Comece agora e tenha seu pacote enviado para qualquer lugar do mundo em poucos cliques!
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90">
                Cotar envio internacional
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default InternationalShipping;
