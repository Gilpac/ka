
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check, Building } from 'lucide-react';

const BusinessSolutions = () => {
  const businessSolutions = [
    {
      title: "Kargoo Business",
      description: "Solução ideal para pequenas e médias empresas que precisam de envios internacionais regulares com descontos exclusivos e gestão simplificada.",
      features: [
        "Descontos volumétricos",
        "Painel de controle empresarial",
        "Integração com e-commerce",
        "API para automações básicas",
        "Suporte empresarial prioritário"
      ]
    },
    {
      title: "Kargoo Enterprise",
      description: "Solução completa para grandes corporações com necessidades logísticas complexas, oferecendo uma infraestrutura personalizada e suporte dedicado.",
      features: [
        "Tarifas corporativas exclusivas",
        "Gestor de conta dedicado",
        "API completa com integrações avançadas",
        "Relatórios analíticos detalhados",
        "Soluções logísticas personalizadas",
        "Armazenagem internacional",
        "Serviço de fulfillment"
      ]
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Soluções específicas para lojas virtuais de todos os tamanhos, com integração direta com as principais plataformas de comércio eletrônico."
    },
    {
      name: "Manufatura",
      description: "Transporte seguro de peças, componentes e produtos acabados, com opções especializadas para itens sensíveis ou de grande porte."
    },
    {
      name: "Tecnologia",
      description: "Envio de equipamentos eletrônicos e hardware com embalagens especializadas e seguro específico para produtos de alto valor."
    },
    {
      name: "Saúde e Farmacêutica",
      description: "Transporte com temperatura controlada e rastreamento em tempo real para medicamentos e equipamentos médicos."
    }
  ];

  return (
    <PageLayout title="Soluções Empresariais">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-10">
          Soluções logísticas sob medida para empresas de todos os portes, com foco em eficiência, economia e integração tecnológica.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Nossas soluções para empresas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {businessSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-shappi-green/10 p-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Building className="mr-2 h-5 w-5 text-shappi-green" />
                    {solution.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mb-6">{solution.description}</p>
                  <h4 className="font-semibold mb-4">Recursos incluídos:</h4>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-shappi-green flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-shappi-green hover:bg-shappi-green/90">
                    Solicitar proposta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Soluções por setor</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            Não encontrou seu setor? Entre em contato conosco para discutir uma solução personalizada.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Integrações tecnológicas</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <p className="mb-6">
              Nossa API robusta e SDKs permitem integrar os serviços da Kargoo diretamente aos seus sistemas internos:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Recursos da API</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Criação automatizada de envios</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Geração de etiquetas em lote</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Rastreamento em tempo real</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Cálculo de tarifas e prazos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Plataformas compatíveis</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Shopify, WooCommerce, Magento</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>SAP, Oracle, Microsoft Dynamics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Sistemas ERP e CRM personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-shappi-green" />
                    <span>Marketplaces: Amazon, Mercado Livre, etc.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-shappi-green/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Vamos crescer juntos</h2>
          <p className="text-center mb-6 max-w-2xl mx-auto">
            Entre em contato com nossa equipe de vendas corporativas para uma consultoria personalizada e uma proposta sob medida para sua empresa.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90">
              Agendar consultoria gratuita
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BusinessSolutions;
