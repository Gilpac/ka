
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Search, Phone, Mail, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HelpCenter = () => {
  const commonQuestions = [
    {
      category: "Envios",
      questions: [
        "Como rastrear meu pacote?",
        "Quanto tempo leva para entregar meu pacote?",
        "Como embalar corretamente meu envio?",
        "O que não posso enviar internacionalmente?"
      ]
    },
    {
      category: "Pagamentos",
      questions: [
        "Quais métodos de pagamento são aceitos?",
        "Como calcular as taxas aduaneiras?",
        "Posso pagar o envio na entrega?",
        "Como solicitar reembolso?"
      ]
    },
    {
      category: "Conta",
      questions: [
        "Como criar uma conta Kargoo?",
        "Como atualizar minhas informações?",
        "Como adicionar endereços favoritos?",
        "Como ver meu histórico de envios?"
      ]
    }
  ];

  return (
    <PageLayout title="Central de Ajuda">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="bg-shappi-green/10 p-8 rounded-lg mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Como podemos ajudar?</h2>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Buscar na central de ajuda..." 
                className="pl-10 py-6 text-lg"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-shappi-green hover:bg-shappi-green/90">
                Buscar
              </Button>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {commonQuestions.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-shappi-green/10 p-4">
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {category.questions.map((question, i) => (
                        <li key={i}>
                          <a href="#" className="text-shappi-green hover:underline">
                            {question}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full mt-6">
                      Ver todas as perguntas
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Guias e tutoriais</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">Guia para iniciantes</h3>
                <p className="text-gray-600 mb-4">Aprenda os fundamentos dos envios internacionais com a Kargoo e como começar.</p>
                <Button variant="outline">Leia o guia</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">Documentação aduaneira</h3>
                <p className="text-gray-600 mb-4">Saiba quais documentos são necessários para envios internacionais e como preenchê-los.</p>
                <Button variant="outline">Leia o guia</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">Embalagem e proteção</h3>
                <p className="text-gray-600 mb-4">Dicas e melhores práticas para embalar seus itens com segurança para transporte.</p>
                <Button variant="outline">Leia o guia</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-bold mb-2">Usando o aplicativo móvel</h3>
                <p className="text-gray-600 mb-4">Tutorial completo sobre como usar todas as funcionalidades do app Kargoo.</p>
                <Button variant="outline">Leia o guia</Button>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Entre em contato</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-shappi-green/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-shappi-green" />
                </div>
                <h3 className="font-bold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-4">Disponível de segunda a sexta, das 9h às 18h</p>
                <Button className="bg-shappi-green hover:bg-shappi-green/90 w-full">
                  +55 11 3456-7890
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-shappi-green/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-shappi-green" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Responderemos em até 24 horas úteis</p>
                <Button className="bg-shappi-green hover:bg-shappi-green/90 w-full">
                  suporte@kargoo.com
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-shappi-green/10 rounded-full mx-auto flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-shappi-green" />
                </div>
                <h3 className="font-bold mb-2">Chat ao vivo</h3>
                <p className="text-gray-600 mb-4">Atendimento imediato com nossos especialistas</p>
                <Button className="bg-shappi-green hover:bg-shappi-green/90 w-full">
                  Iniciar chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HelpCenter;
