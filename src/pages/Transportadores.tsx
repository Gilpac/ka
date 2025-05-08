
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Button } from '@/components/ui/button';
import { Truck, Package, TrendingUp, Euro } from 'lucide-react';

const Transportadores = () => {
  return (
    <PageLayout title="Seja um Transportadr" fullWidth>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="shappi-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seja um Transportador Kargoo</h1>
              
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Transforme suas viagens em{' '}
                <span className="text-shappi-green">oportunidades de renda</span>
              </h2>
              
              <p className="text-lg mb-8">
                Ganhe dinheiro extra transportando pacotes ao longo de rotas que você
                já percorre. A Kargoo conecta você a pessoas que precisam enviar itens
                para os mesmos locais para onde você está indo.
              </p>
              
              <Button 
                onClick={() => window.location.href = "http://ka.free.nf/log/index.html"} 
                className="bg-shappi-green hover:bg-shappi-green/90 text-lg px-8 py-6">
                Cadastre-se como Transportador
              </Button>
            </div>
            
            <div className="lg:flex justify-end">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <img 
                  src="/lovable-uploads/83b66000-ff78-4607-a9a9-3f5f77955358.png" 
                  alt="Transportador Kargoo" 
                  className="w-full h-auto"
                />
                <div className="mt-4 flex items-center text-shappi-green font-medium">
                  <span className="w-3 h-3 bg-shappi-green rounded-full mr-2"></span>
                  <p>1.200+ transportadores ativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="shappi-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Por que se tornar um <span className="text-shappi-green">Transportador Kargoo?</span>
          </h2>
          <p className="text-lg text-center mb-12">
            Aproveite benefícios exclusivos e transforme suas viagens em oportunidades de ganhos extras.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-shappi-green/10 flex items-center justify-center rounded mb-4">
                <Truck className="text-shappi-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Autonomia</h3>
              <p className="text-gray-700">
                Trabalhe quando quiser, crie seu próprio horário e escolha os envios que melhor se 
                adequam às suas necessidades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-shappi-green/10 flex items-center justify-center rounded mb-4">
                <TrendingUp className="text-shappi-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ganhos Atrativos</h3>
              <p className="text-gray-700">
                Ganhe dinheiro extra utilizando espaço livre em sua viagem. Monetize o espaço 
                vazio em sua bagagem ou veículo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-shappi-green/10 flex items-center justify-center rounded mb-4">
                <Euro className="text-shappi-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pagamento Seguro</h3>
              <p className="text-gray-700">
                Receba pagamentos de forma rápida e segura com transferência direta para sua 
                conta após a entrega confirmada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-shappi-green/10 flex items-center justify-center rounded mb-4">
                <Package className="text-shappi-green" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Suporte Contínuo</h3>
              <p className="text-gray-700">
                Nossa equipe está disponível 24/7 para ajudar em qualquer situação, 
                garantindo uma experiência tranquila.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="shappi-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona o <span className="text-shappi-green">processo?</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-shappi-green z-0"></div>
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="w-8 h-8 bg-shappi-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Crie sua conta</h3>
                  <p className="text-gray-700">
                    Registre-se como transportador e complete seu perfil com suas 
                    informações e documentos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="w-8 h-8 bg-shappi-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Encontre oportunidades</h3>
                  <p className="text-gray-700">
                    Navegue pelas solicitações de envio disponíveis ou cadastre suas próximas 
                    viagens para encontrar correspondências.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="w-8 h-8 bg-shappi-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aceite e colete</h3>
                  <p className="text-gray-700">
                    Aceite as entregas que combinam com sua rota e colete os itens no local 
                    combinado.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-8 relative z-10">
                <div className="w-8 h-8 bg-shappi-green text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Entregue e receba</h3>
                  <p className="text-gray-700">
                    Complete a entrega e receba seu pagamento diretamente em sua conta 
                    após a confirmação.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-4">Calculadora de Ganhos</h3>
              <p className="text-center mb-8">
                Quanto você pode ganhar como transportador Kargoo
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded flex justify-between items-center">
                  <span className="font-medium">Entregas locais (média por dia)</span>
                  <span className="font-bold">€10 - €30</span>
                </div>
                
                <div className="bg-white p-4 rounded flex justify-between items-center">
                  <span className="font-medium">Entregas intermunicipais</span>
                  <span className="font-bold">€30 - €100</span>
                </div>
                
                <div className="bg-white p-4 rounded flex justify-between items-center">
                  <span className="font-medium">Entregas internacionais</span>
                  <span className="font-bold">€100 - €500</span>
                </div>
                
                <div className="bg-shappi-green/10 p-4 rounded flex justify-between items-center">
                  <span className="font-medium">Potencial mensal</span>
                  <span className="font-bold">€500 - €2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="shappi-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            O que nossos <span className="text-shappi-green">transportadores dizem</span>
          </h2>
          <p className="text-center mb-12">
            Histórias reais de pessoas que transformaram suas viagens em oportunidades de renda.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex text-shappi-green mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="italic mb-4">
                "Comecei como transportador para ganhar um dinheiro extra nas minhas viagens de 
                trabalho. Hoje já consigo ganhar um valor considerável que complementa minha renda 
                mensal."
              </p>
              <div>
                <h4 className="font-bold">João Silva</h4>
                <p className="text-gray-600">Transportador há 8 meses</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex text-shappi-green mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="italic mb-4">
                "A Kargoo me permite otimizar minhas viagens pessoais. Faço entregas quando 
                viajo para visitar minha família e isso paga facilmente os custos da minha viagem."
              </p>
              <div>
                <h4 className="font-bold">Ana Oliveira</h4>
                <p className="text-gray-600">Transportadora há 1 ano</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex text-shappi-green mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="italic mb-4">
                "Como motorista profissional, a Kargoo me ajuda a maximizar meus ganhos 
                aproveitando o espaço livre no meu veículo em rotas que já percorro diariamente."
              </p>
              <div>
                <h4 className="font-bold">Carlos Mendes</h4>
                <p className="text-gray-600">Transportador há 6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-shappi-green/10">
        <div className="shappi-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar a <span className="text-shappi-green">ganhar como transportador</span>?
          </h2>
          
          <p className="text-lg mb-12">
            Junte-se à comunidade de transportadores Kargoo e transforme suas viagens em 
            oportunidades de renda.
          </p>
          
          <Button 
            onClick={() => window.location.href = "http://ka.free.nf/log/index.html"} 
            className="bg-shappi-green hover:bg-shappi-green/90 text-lg px-8 py-6">
            Cadastre-se como Transportador
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Transportadores;
