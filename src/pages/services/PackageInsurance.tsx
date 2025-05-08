
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const PackageInsurance = () => {
  const insurancePlans = [
    {
      name: "Proteção Básica",
      coverage: "até €1.000",
      price: "Incluído em todos os envios",
      features: [
        "Cobertura por perda",
        "Cobertura por danos",
        "Processo de reclamação online"
      ]
    },
    {
      name: "Proteção Premium",
      coverage: "até €5.000",
      price: "2% do valor declarado",
      features: [
        "Cobertura ampliada por perda",
        "Cobertura ampliada por danos",
        "Cobertura por atraso significativo",
        "Processo prioritário de reclamação",
        "Reembolso facilitado"
      ]
    },
    {
      name: "Proteção Total",
      coverage: "até €20.000",
      price: "3% do valor declarado",
      features: [
        "Cobertura completa por perda",
        "Cobertura completa por danos",
        "Cobertura por qualquer tipo de atraso",
        "Processo VIP de reclamação",
        "Reembolso em até 48h",
        "Gestor dedicado para sinistros"
      ]
    }
  ];

  return (
    <PageLayout title="Seguro de Pacotes">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-10">
          Mantenha seus envios protegidos contra imprevistos com nossas opções de seguro abrangentes para pacotes internacionais.
        </p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Por que contratar seguro?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-shappi-green/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-shappi-green" />
              </div>
              <h3 className="font-bold mb-2">Tranquilidade</h3>
              <p>Envie seus itens com a certeza de que estão protegidos contra danos ou perdas durante todo o trajeto.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-shappi-green/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-shappi-green" />
              </div>
              <h3 className="font-bold mb-2">Proteção financeira</h3>
              <p>Recupere o valor dos seus itens em caso de incidentes, evitando perdas financeiras significativas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-shappi-green/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-shappi-green" />
              </div>
              <h3 className="font-bold mb-2">Envios de valor</h3>
              <p>Especialmente importante para itens caros, raros ou de valor sentimental que seriam difíceis de substituir.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Planos de seguro disponíveis</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {insurancePlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className={`p-4 ${index === 2 ? 'bg-shappi-green text-white' : 'bg-shappi-green/10'}`}>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="font-semibold">{plan.coverage}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 font-medium">{plan.price}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`mr-2 h-5 w-5 ${index === 2 ? 'text-shappi-green' : 'text-shappi-green'} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${index === 2 ? 'bg-shappi-green hover:bg-shappi-green/90' : 'bg-white border border-shappi-green text-shappi-green hover:bg-shappi-green/10'}`}
                  >
                    Selecionar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Como funciona o seguro</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <ol className="space-y-6">
              <li className="flex">
                <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">1</span>
                <div>
                  <h3 className="font-bold mb-1">Selecione o plano adequado</h3>
                  <p className="text-gray-600">Escolha o plano de seguro que melhor corresponda ao valor e tipo de item que você está enviando.</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">2</span>
                <div>
                  <h3 className="font-bold mb-1">Declare o valor correto</h3>
                  <p className="text-gray-600">Informe o valor real do conteúdo da sua encomenda durante o processo de criação do envio.</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">3</span>
                <div>
                  <h3 className="font-bold mb-1">Em caso de incidente</h3>
                  <p className="text-gray-600">Se ocorrer perda ou dano, abra uma reclamação através do nosso portal ou app móvel.</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-shappi-green text-white flex items-center justify-center">4</span>
                <div>
                  <h3 className="font-bold mb-1">Processamento e reembolso</h3>
                  <p className="text-gray-600">Nossa equipe analisará sua reclamação e processará o reembolso de acordo com o plano selecionado.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        
        <div className="bg-shappi-green/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Perguntas sobre seguro?</h2>
          <p className="text-center mb-6">
            Nossa equipe de especialistas está disponível para ajudar com qualquer dúvida sobre cobertura de seguro.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90">
              Falar com especialista
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PackageInsurance;
