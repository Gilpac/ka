
import PageLayout from '@/components/PageLayout';

const About = () => {
  return (
    <PageLayout title="Sobre Nós">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="lead text-xl text-gray-600 mb-6">
            A Kargoo nasceu com a missão de simplificar o envio internacional de pacotes, tornando o processo acessível, transparente e eficiente para todos.
          </p>
          
          <h2>Nossa História</h2>
          <p>
            Fundada em 2020, a Kargoo surgiu da percepção de que o mercado de envios internacionais era complexo e pouco transparente. 
            Nossa equipe de especialistas em logística e tecnologia decidiu criar uma solução que pudesse revolucionar este setor.
          </p>
          
          <h2>Nossa Missão</h2>
          <p>
            Conectar pessoas e negócios globalmente através de soluções de envio inovadoras, acessíveis e sustentáveis.
          </p>
          
          <h2>Nossos Valores</h2>
          <ul>
            <li><strong>Transparência</strong>: Preços claros e sem surpresas.</li>
            <li><strong>Confiabilidade</strong>: Entregamos o que prometemos, sempre.</li>
            <li><strong>Inovação</strong>: Buscamos constantemente novas tecnologias e processos para melhorar nossos serviços.</li>
            <li><strong>Sustentabilidade</strong>: Comprometidos com práticas de logística ambientalmente responsáveis.</li>
            <li><strong>Cliente em primeiro lugar</strong>: Todas as decisões são baseadas nas necessidades de nossos clientes.</li>
          </ul>
          
          <h2>Nossa Equipe</h2>
          <p>
            Contamos com uma equipe diversificada de profissionais apaixonados por logística e tecnologia, 
            espalhados por diversos países, trabalhando juntos para oferecer a melhor experiência possível em envios internacionais.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
