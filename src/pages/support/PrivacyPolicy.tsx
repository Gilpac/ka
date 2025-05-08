
import PageLayout from '@/components/PageLayout';

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Política de Privacidade">
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 mb-8">
          Última atualização: 8 de maio de 2025
        </p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Na Kargoo, levamos sua privacidade muito a sério. Esta Política de Privacidade explica como coletamos, 
            usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nossos serviços de envio 
            internacional de pacotes, nosso site e aplicativo móvel.
          </p>
          
          <h2>Informações que coletamos</h2>
          <p>
            Podemos coletar os seguintes tipos de informações:
          </p>
          <ul>
            <li>
              <strong>Informações pessoais:</strong> nome, endereço postal, endereço de e-mail, número de telefone, 
              documentos de identificação (quando necessário para procedimentos aduaneiros).
            </li>
            <li>
              <strong>Informações de pagamento:</strong> detalhes do cartão de crédito/débito, informações de conta bancária 
              e outras informações financeiras necessárias para processar pagamentos.
            </li>
            <li>
              <strong>Informações de envio:</strong> detalhes sobre remetentes e destinatários de pacotes, 
              conteúdo das encomendas, valores declarados e informações aduaneiras.
            </li>
            <li>
              <strong>Informações de uso:</strong> como você interage com nossos serviços, incluindo histórico 
              de envios, preferências e configurações da conta.
            </li>
            <li>
              <strong>Informações do dispositivo:</strong> dados sobre o dispositivo que você usa para acessar 
              nossos serviços, incluindo endereço IP, tipo de navegador e sistema operacional.
            </li>
          </ul>
          
          <h2>Como usamos suas informações</h2>
          <p>
            Utilizamos suas informações pessoais para os seguintes fins:
          </p>
          <ul>
            <li>Processar e entregar suas encomendas</li>
            <li>Processar pagamentos e prevenir fraudes</li>
            <li>Cumprir requisitos legais e aduaneiros</li>
            <li>Gerenciar sua conta e fornecer suporte ao cliente</li>
            <li>Melhorar e personalizar nossos serviços</li>
            <li>Comunicar-nos com você sobre atualizações, promoções ou novos serviços (com seu consentimento)</li>
            <li>Analisar tendências e estatísticas para melhorar nossas operações</li>
          </ul>
          
          <h2>Compartilhamento de informações</h2>
          <p>
            Podemos compartilhar suas informações nas seguintes circunstâncias:
          </p>
          <ul>
            <li>
              <strong>Parceiros logísticos:</strong> compartilhamos informações necessárias com transportadoras e 
              parceiros logísticos para entregar suas encomendas.
            </li>
            <li>
              <strong>Autoridades aduaneiras:</strong> fornecemos informações exigidas pelas autoridades aduaneiras 
              para o desembaraço de envios internacionais.
            </li>
            <li>
              <strong>Provedores de serviços:</strong> empresas que nos ajudam a fornecer nossos serviços, como 
              processadores de pagamento, provedores de armazenamento em nuvem e serviços de suporte.
            </li>
            <li>
              <strong>Requisitos legais:</strong> quando exigido por lei, ordem judicial ou processo legal.
            </li>
          </ul>
          
          <h2>Segurança de dados</h2>
          <p>
            Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra 
            acesso não autorizado, perda acidental ou alteração. Nossos sistemas são regularmente auditados e atualizados 
            para garantir a máxima segurança.
          </p>
          
          <h2>Seus direitos de privacidade</h2>
          <p>
            Dependendo da sua localização, você pode ter os seguintes direitos em relação às suas informações pessoais:
          </p>
          <ul>
            <li>Acesso às suas informações pessoais</li>
            <li>Correção de dados imprecisos ou incompletos</li>
            <li>Exclusão de suas informações pessoais</li>
            <li>Restrição ou oposição ao processamento de seus dados</li>
            <li>Portabilidade de dados</li>
            <li>Retirada do consentimento (quando aplicável)</li>
          </ul>
          
          <h2>Retenção de dados</h2>
          <p>
            Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos para os quais foram 
            coletadas, incluindo obrigações legais, contábeis ou de relatórios. O período de retenção específico 
            varia dependendo do tipo de informação e requisitos legais aplicáveis.
          </p>
          
          <h2>Alterações nesta política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas práticas 
            ou por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre quaisquer alterações 
            significativas através do nosso site ou por e-mail.
          </p>
          
          <h2>Entre em contato</h2>
          <p>
            Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, 
            entre em contato com nosso Oficial de Proteção de Dados em privacidade@kargoo.com ou através do nosso endereço postal.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
