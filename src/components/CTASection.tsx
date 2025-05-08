
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding bg-shappi-gradient">
      <div className="shappi-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pronto para Enviar Mundialmente?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a milhares de clientes satisfeitos que confiam na Kargoo para suas necessidades de envio internacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-shappi-green hover:bg-gray-100 rounded-full px-8 btn-hover-effect"
            >
              Comece Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
