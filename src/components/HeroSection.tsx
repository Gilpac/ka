
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-shappi-gray-light section-padding">
      <div className="shappi-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Envie para todo o mundo com <span className="gradient-text">Kargoo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              A maneira mais fácil de enviar pacotes internacionalmente. Soluções de envio rápidas, confiáveis e acessíveis para todos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-shappi-green hover:bg-shappi-green/90 rounded-full text-base px-6 btn-hover-effect">
                Comece Agora
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-base px-6 group btn-hover-effect">
                <span>Como Funciona</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-shappi-gray"></div>
                <div className="w-8 h-8 rounded-full bg-shappi-green-light"></div>
                <div className="w-8 h-8 rounded-full bg-shappi-green"></div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">10.000+</span> clientes satisfeitos
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/lovable-uploads/checking.svg" 
                alt="Kargoo Delivery Services" 
                className="w-full h-auto max-w-xl mx-auto animate-float hover:animate-pulse-slow transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
