import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="shappi-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/35db1ac0-44be-4e7f-88d0-76e3f8b8c35f.png" 
                alt="Kargoo Logo" 
                className="h-10 w-auto"
              />
            </a>
            <p className="text-gray-600 mb-4 max-w-md">
              A maneira mais fácil de enviar pacotes internacionalmente. Soluções de envio rápidas, confiáveis e acessíveis para todos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-shappi-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shappi-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shappi-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shappi-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/*<div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Parceiros</a></li>
            </ul>
          </div>*/}

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Envio Internacional</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Entrega Expressa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Seguro de Pacotes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Soluções Empresariais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Contate-nos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-shappi-green transition-colors">Termos de Serviço</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kargoo. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-shappi-green text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-500 hover:text-shappi-green text-sm transition-colors">Termos de Serviço</a>
            <a href="#" className="text-gray-500 hover:text-shappi-green text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
