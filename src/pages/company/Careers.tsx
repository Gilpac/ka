
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openPositions = [
    {
      title: "Especialista em Logística Internacional",
      department: "Operações",
      location: "São Paulo, Brasil",
      type: "Tempo Integral"
    },
    {
      title: "Desenvolvedor Full-Stack",
      department: "Tecnologia",
      location: "Remoto",
      type: "Tempo Integral"
    },
    {
      title: "Especialista em Atendimento ao Cliente",
      department: "Suporte",
      location: "Lisboa, Portugal",
      type: "Tempo Integral"
    },
    {
      title: "Gerente de Marketing Digital",
      department: "Marketing",
      location: "Remoto",
      type: "Tempo Integral"
    }
  ];

  return (
    <PageLayout title="Carreiras">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xl text-gray-600 mb-6">
            Junte-se à nossa equipe e ajude-nos a revolucionar o setor de envios internacionais! Estamos sempre à procura de pessoas talentosas e apaixonadas.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Por que trabalhar na Kargoo?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Ambiente Inovador</h3>
              <p>Trabalhamos com as mais recentes tecnologias e metodologias ágeis para criar soluções inovadoras.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Crescimento Profissional</h3>
              <p>Investimos no desenvolvimento contínuo de nossos colaboradores com treinamentos e mentoria.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Flexibilidade</h3>
              <p>Oferecemos horários flexíveis e possibilidade de trabalho remoto para muitas posições.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-bold mb-2">Impacto Global</h3>
              <p>Seu trabalho ajudará pessoas e empresas em todo o mundo a se conectarem melhor.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Vagas Abertas</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{position.department}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{position.location}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{position.type}</span>
                </div>
                <Button>Ver Detalhes e Candidatar-se</Button>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-shappi-green/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Não encontrou uma vaga que combine com você?</h3>
            <p className="mb-4">Envie-nos seu currículo e conte como você pode contribuir para nossa equipe!</p>
            <Button variant="outline">Candidatura Espontânea</Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
