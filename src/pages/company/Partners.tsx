
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const Partners = () => {
  const partnerCategories = [
    {
      title: "Parceiros de Transporte",
      description: "Companhias aéreas, transportadoras marítimas e empresas de logística terrestre que nos ajudam a entregar pacotes em todo o mundo.",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Parceiros Tecnológicos",
      description: "Empresas de software e hardware que nos fornecem tecnologias inovadoras para otimizar nossas operações.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Parceiros de e-commerce",
      description: "Lojas online e marketplaces que integram nossos serviços para oferecer envios internacionais a seus clientes.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop"
    },
  ];

  return (
    <PageLayout title="Parceiros">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl text-gray-600 mb-10">
          Nosso ecossistema de parceiros é fundamental para oferecermos serviços de envio internacional de alta qualidade, eficientes e acessíveis.
        </p>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Nossos Parceiros Estratégicos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full">Saiba mais</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Benefícios para Parceiros</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Acesso a uma rede global</h3>
              <p>Conecte-se com clientes e outros parceiros em todo o mundo através da nossa plataforma integrada.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Tecnologia avançada</h3>
              <p>Utilize nossa API e ferramentas tecnológicas para otimizar operações e oferecer uma melhor experiência.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Marketing conjunto</h3>
              <p>Oportunidades de co-marketing e promoção para aumentar a visibilidade de sua marca.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Suporte dedicado</h3>
              <p>Equipe de suporte especializada para ajudar em todas as etapas da parceria.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-shappi-green/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Torne-se um Parceiro</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Interessado em se tornar um parceiro da Kargoo? Entre em contato conosco para discutir como podemos colaborar e crescer juntos.
          </p>
          <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90">
            Solicitar parceria
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Partners;
