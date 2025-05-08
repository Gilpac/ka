
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, TrendingUp, BadgeEuro, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-kargoo-green" />,
    title: 'Autonomia',
    description: 'Trabalhe quando quiser, crie seu próprio horário e escolha os envios que melhor se adequam às suas necessidades.'
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-kargoo-green" />,
    title: 'Ganhos Atrativos',
    description: 'Ganhe dinheiro extra utilizando espaço livre em sua viagem. Monetize o espaço vazio em sua bagagem ou veículo.'
  },
  {
    icon: <BadgeEuro className="h-8 w-8 text-kargoo-green" />,
    title: 'Pagamento Seguro',
    description: 'Receba pagamentos de forma rápida e segura com transferência direta para sua conta após a entrega confirmada.'
  },
  {
    icon: <Package className="h-8 w-8 text-kargoo-green" />,
    title: 'Suporte Contínuo',
    description: 'Nossa equipe está disponível 24/7 para ajudar em qualquer situação, garantindo uma experiência tranquila.'
  },
];

const FeatureCard = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay }
        }
      }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover-effect"
    >
      <div className="flex flex-col items-start">
        <div className="p-3 bg-kargoo-green/10 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Step = ({ number, title, description, isLast, isActive }) => {
  return (
    <div className={`flex ${isLast ? '' : 'pb-8'} relative`}>
      {/* Line */}
      {!isLast && (
        <div className="absolute left-4 top-4 bottom-0 w-0.5 bg-gradient-to-b from-kargoo-green to-kargoo-green-light"></div>
      )}
      
      {/* Number Circle */}
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
        isActive ? 'bg-kargoo-green text-white' : 'bg-kargoo-green-light text-kargoo-green'
      } font-semibold mr-4 relative z-10`}>
        {number}
      </div>
      
      {/* Content */}
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Transportadores = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <PageLayout title="Seja um Transportador Kargoo">
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transforme suas viagens em <span className="gradient-text">oportunidades de renda</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ganhe dinheiro extra transportando pacotes ao longo de rotas que você já percorre. 
                A Kargoo conecta você a pessoas que precisam enviar itens para os mesmos locais para onde você está indo.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  size="lg" 
                  className="bg-kargoo-green hover:bg-kargoo-green/90 text-white rounded-full px-8 btn-hover-effect"
                  onClick={() => window.location.href = "http://ka.free.nf/log/index.html"}
                >
                  Cadastre-se como Transportador
                </Button>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/8d626038-57cc-4db5-9753-f2580d1eb05b.png"
                    alt="Kargoo Transporters" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-kargoo-green animate-pulse"></div>
                      <span className="text-sm font-medium">1.200+ transportadores ativos</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-gradient-to-br from-white to-kargoo-gray-light rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que se tornar um <span className="gradient-text">Transportador Kargoo?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Aproveite benefícios exclusivos e transforme suas viagens em oportunidades de ganhos extras.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
                delay={0.1 * index}
              />
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <motion.section 
          ref={ref}
          className="py-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Como funciona o <span className="gradient-text">processo?</span>
              </h2>
              <div className="space-y-2">
                <Step 
                  number="1" 
                  title="Crie sua conta" 
                  description="Registre-se como transportador e complete seu perfil com suas informações e documentos." 
                  isActive={true}
                />
                <Step 
                  number="2" 
                  title="Encontre oportunidades" 
                  description="Navegue pelas solicitações de envio disponíveis ou cadastre suas próximas viagens para encontrar correspondências." 
                  isActive={true}
                />
                <Step 
                  number="3" 
                  title="Aceite e colete" 
                  description="Aceite as entregas que combinam com sua rota e colete os itens no local combinado." 
                  isActive={false}
                />
                <Step 
                  number="4" 
                  title="Entregue e receba" 
                  description="Complete a entrega e receba seu pagamento diretamente em sua conta após a confirmação." 
                  isLast={true}
                  isActive={false}
                />
              </div>
            </div>
            <div className="bg-kargoo-green/5 rounded-xl p-8 border border-kargoo-green/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Calculadora de Ganhos</h3>
                <p className="text-gray-600">Quanto você pode ganhar como transportador Kargoo</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                  <span className="font-medium">Entregas locais (média por dia)</span>
                  <span className="font-bold">€10 - €30</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                  <span className="font-medium">Entregas intermunicipais</span>
                  <span className="font-bold">€30 - €100</span>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200 flex justify-between items-center">
                  <span className="font-medium">Entregas internacionais</span>
                  <span className="font-bold">€100 - €500</span>
                </div>
                <div className="bg-kargoo-green/10 rounded-lg p-4 border border-kargoo-green/30 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Potencial mensal</span>
                    <span className="font-bold text-kargoo-green">€500 - €2000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gradient-to-br from-kargoo-gray-light to-white rounded-xl p-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              O que nossos <span className="gradient-text">transportadores dizem</span>
            </h2>
            <p className="text-lg text-gray-600">
              Histórias reais de pessoas que transformaram suas viagens em oportunidades de renda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "João Silva",
                role: "Transportador há 8 meses",
                text: "Comecei como transportador para ganhar um dinheiro extra nas minhas viagens de trabalho. Hoje já consigo ganhar um valor considerável que complementa minha renda mensal."
              },
              {
                name: "Ana Oliveira",
                role: "Transportadora há 1 ano",
                text: "A Kargoo me permite otimizar minhas viagens pessoais. Faço entregas quando viajo para visitar minha família e isso paga facilmente os custos da minha viagem."
              },
              {
                name: "Carlos Mendes",
                role: "Transportador há 6 meses",
                text: "Como motorista profissional, a Kargoo me ajuda a maximizar meus ganhos aproveitando o espaço livre no meu veículo em rotas que já percorro diariamente."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-kargoo-green">
                    {"★".repeat(5)}
                  </div>
                  <p className="italic text-gray-600 mb-4 flex-grow">"{testimonial.text}"</p>
                  <div className="mt-auto">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar a <span className="gradient-text">ganhar como transportador</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Junte-se à comunidade de transportadores Kargoo e transforme suas viagens em oportunidades de renda.
            </p>
            <Button 
              size="lg" 
              className="bg-kargoo-green hover:bg-kargoo-green/90 text-white rounded-full px-8 btn-hover-effect"
              onClick={() => window.location.href = "http://ka.free.nf/log/index.html"}
            >
              Cadastre-se como Transportador
            </Button>
          </motion.div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Transportadores;
