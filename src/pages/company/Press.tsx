
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: "Kargoo expande operações para mais 10 países na América Latina",
      date: "15 de abril, 2025",
      excerpt: "A Kargoo anuncia hoje a expansão de suas operações logísticas para 10 novos mercados na América Latina, incluindo Chile, Colômbia e Peru."
    },
    {
      title: "Kargoo recebe investimento de €25 milhões para expansão global",
      date: "22 de março, 2025",
      excerpt: "A rodada de financiamento liderada pela Tech Ventures irá acelerar a expansão internacional da Kargoo e o desenvolvimento de novas tecnologias de logística."
    },
    {
      title: "Novo sistema de rastreamento em tempo real é lançado pela Kargoo",
      date: "5 de fevereiro, 2025",
      excerpt: "A inovadora tecnologia permite que clientes acompanhem seus pacotes com precisão de minutos e recebam atualizações em tempo real sobre qualquer atraso."
    },
    {
      title: "Kargoo anuncia parceria com gigante do e-commerce",
      date: "12 de janeiro, 2025",
      excerpt: "A nova colaboração estratégica permitirá envios mais rápidos e econômicos para consumidores de comércio eletrônico em toda a Europa e América do Sul."
    }
  ];

  const mediaContacts = [
    {
      name: "Ana Silva",
      role: "Gerente de Relações Públicas",
      email: "ana.silva@kargoo.com",
      phone: "+55 11 3456-7890"
    },
    {
      name: "Miguel Santos",
      role: "Diretor de Comunicação",
      email: "miguel.santos@kargoo.com",
      phone: "+351 21 987-6543"
    }
  ];

  return (
    <PageLayout title="Imprensa">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xl text-gray-600 mb-6">
            Centro de imprensa da Kargoo: encontre os últimos comunicados, recursos para mídia e informações de contato para jornalistas.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Recursos para imprensa</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-shappi-green/20 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-shappi-green" />
                  </div>
                  <span>Kit de imprensa da Kargoo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-shappi-green/20 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-shappi-green" />
                  </div>
                  <span>Logotipos e recursos visuais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-shappi-green/20 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-shappi-green" />
                  </div>
                  <span>Fotos e vídeos institucionais</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-shappi-green/20 flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-shappi-green" />
                  </div>
                  <span>Dados e estatísticas</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contatos para imprensa</h2>
              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="font-bold">{contact.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{contact.role}</p>
                    <p className="text-sm">Email: {contact.email}</p>
                    <p className="text-sm">Telefone: {contact.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Comunicados de imprensa recentes</h2>
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <span className="text-sm text-gray-500">{release.date}</span>
                <h3 className="text-xl font-bold my-2">{release.title}</h3>
                <p className="text-gray-600 mb-4">{release.excerpt}</p>
                <Button variant="outline" className="group">
                  Ler comunicado completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline">Ver todos os comunicados</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Press;
