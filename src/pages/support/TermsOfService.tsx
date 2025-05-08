
import PageLayout from '@/components/PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout title="Termos de Serviço">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          Última atualização: 8 de maio de 2025
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Estes Termos de Serviço ("Termos") regem seu acesso e uso dos serviços, site e aplicativo móvel da Kargoo 
            (coletivamente, os "Serviços"). Ao utilizar nossos Serviços, você concorda com estes Termos. Por favor, leia-os com atenção.
          </p>
          
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao criar uma conta, acessar ou usar nossos Serviços, você concorda com estes Termos. Se você não concordar com 
            estes Termos, não poderá acessar ou usar nossos Serviços.
          </p>
          
          <h2>2. Elegibilidade</h2>
          <p>
            Para utilizar nossos Serviços, você deve ter pelo menos 18 anos de idade e ter capacidade legal para celebrar 
            contratos vinculativos. Se você estiver utilizando os Serviços em nome de uma empresa ou organização, você declara 
            ter autoridade para vincular essa entidade a estes Termos.
          </p>
          
          <h2>3. Sua Conta</h2>
          <p>
            Para utilizar alguns de nossos Serviços, você pode precisar criar uma conta. Você é responsável por manter a 
            confidencialidade de sua senha e pelas atividades que ocorrerem em sua conta. Notifique-nos imediatamente caso 
            suspeite de qualquer uso não autorizado de sua conta.
          </p>
          
          <h2>4. Envio de Pacotes</h2>
          <h3>4.1 Informações Precisas</h3>
          <p>
            Você é responsável por fornecer informações precisas e completas sobre remetentes, destinatários, conteúdo dos 
            pacotes e valor declarado das mercadorias.
          </p>
          
          <h3>4.2 Itens Proibidos</h3>
          <p>
            Você concorda em não enviar itens proibidos, incluindo, mas não se limitando a, materiais perigosos, mercadorias ilegais, 
            drogas, armas, animais vivos ou itens perecíveis não apropriados para envio internacional.
          </p>
          
          <h3>4.3 Embalagem</h3>
          <p>
            Você é responsável pela embalagem adequada dos seus itens para garantir que estejam protegidos durante o transporte. 
            A Kargoo se reserva o direito de recusar pacotes que não estejam adequadamente embalados.
          </p>
          
          <h3>4.4 Documentação Aduaneira</h3>
          <p>
            Você é responsável por fornecer toda a documentação aduaneira necessária e precisa para envios internacionais. 
            Você concorda em cumprir todas as leis e regulamentos aplicáveis relacionados à exportação e importação de mercadorias.
          </p>
          
          <h2>5. Tarifas e Pagamentos</h2>
          <h3>5.1 Tarifas</h3>
          <p>
            Os preços de nossos serviços são fornecidos em nosso site e aplicativo. As tarifas podem variar dependendo do destino, 
            peso, dimensões e serviços adicionais selecionados.
          </p>
          
          <h3>5.2 Taxas Adicionais</h3>
          <p>
            Você entende que taxas adicionais, como impostos de importação, taxas alfandegárias ou outras taxas governamentais, 
            podem ser aplicáveis ao seu envio e são de sua responsabilidade.
          </p>
          
          <h3>5.3 Pagamentos</h3>
          <p>
            Todos os pagamentos devem ser feitos antes do processamento do seu envio, a menos que você tenha um acordo de 
            crédito corporativo conosco.
          </p>
          
          <h2>6. Prazos de Entrega</h2>
          <p>
            Os prazos de entrega fornecidos são estimativas e não garantias. A Kargoo não se responsabiliza por atrasos causados 
            por circunstâncias fora de nosso controle, incluindo, mas não se limitando a, condições climáticas, procedimentos 
            aduaneiros, desastres naturais ou eventos de força maior.
          </p>
          
          <h2>7. Seguro e Responsabilidade</h2>
          <h3>7.1 Seguro</h3>
          <p>
            Um seguro básico é incluído em todos os envios. Para itens de maior valor, recomendamos a contratação de seguro adicional.
          </p>
          
          <h3>7.2 Limitação de Responsabilidade</h3>
          <p>
            Nossa responsabilidade por perda ou dano é limitada ao valor declarado do pacote ou ao limite estabelecido em 
            convenções internacionais aplicáveis, como a Convenção de Montreal ou a Convenção CMR, o que for menor.
          </p>
          
          <h2>8. Rescisão</h2>
          <p>
            Reservamo-nos o direito de suspender ou encerrar sua conta e acesso aos nossos Serviços a qualquer momento, por qualquer 
            motivo, incluindo violação destes Termos.
          </p>
          
          <h2>9. Modificações dos Termos</h2>
          <p>
            Podemos modificar estes Termos a qualquer momento. As modificações entrarão em vigor após a publicação dos Termos 
            atualizados em nosso site. Seu uso contínuo dos Serviços após tais modificações constitui sua aceitação dos novos Termos.
          </p>
          
          <h2>10. Lei Aplicável</h2>
          <p>
            Estes Termos são regidos pelas leis do Brasil, sem considerar suas disposições sobre conflitos de leis. Qualquer disputa 
            relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais de São Paulo, Brasil.
          </p>
          
          <h2>11. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em termos@kargoo.com.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
