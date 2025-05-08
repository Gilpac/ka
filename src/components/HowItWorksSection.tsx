
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    title: "Crie uma conta",
    description: "Crie uma conta gratuita Shappi em apenas alguns minutos. Sem taxas de assinatura ou compromissos necessários."
  },
  {
    number: "02",
    title: "Insira os detalhes do envio",
    description: "Forneça informações do pacote, destino e escolha entre os métodos e tarifas de envio disponíveis."
  },
  {
    number: "03",
    title: "Imprima sua etiqueta",
    description: "Assim que o pagamento for confirmado, imprima sua etiqueta de envio e anexe-a ao seu pacote."
  },
  {
    number: "04",
    title: "Deixe ou agende a coleta",
    description: "Deixe seu pacote em qualquer local designado ou agende uma coleta conveniente."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-shappi-gray-light to-white">
      <div className="shappi-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como a <span className="gradient-text">Kargoo</span> Funciona
          </h2>
          <p className="text-lg text-gray-600">
            Enviar internacionalmente nunca foi tão fácil. Siga estes passos simples para começar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover-effect">
              <div className="text-4xl font-bold text-shappi-green/40 absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90 rounded-full px-8 btn-hover-effect">
            Comece Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
