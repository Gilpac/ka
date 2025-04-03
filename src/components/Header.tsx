
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="shappi-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/35db1ac0-44be-4e7f-88d0-76e3f8b8c35f.png" 
                alt="Kargoo Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="header-link">Recursos</a>
            <a href="#how-it-works" className="header-link">Como funciona</a>
            {/* Desktop Navigation <a href="#pricing" className="header-link">Preços</a>*/}
            <a href="#faq" className="header-link">FAQ</a>
            <div className="flex items-center space-x-4">
              <a href="http://ka.free.nf/log/index.html?i=1" className="header-link">Entrar</a>
              <a href="http://ka.free.nf/log/index.html?i=1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-shappi-green hover:bg-shappi-green/90 btn-hover-effect">Começar</Button>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#features" className="header-link">Recursos</a>
            <a href="#how-it-works" className="header-link">Como funciona</a>
              {/* Desktop Navigation <a href="#pricing" className="header-link">Preços</a>*/}
            <a href="#faq" className="header-link">FAQ</a>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="http://ka.free.nf/log/index.html?i=1" className="header-link">Entrar</a>
              <a href="http://ka.free.nf/log/index.html?i=1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-shappi-green hover:bg-shappi-green/90 w-full">Começar</Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
