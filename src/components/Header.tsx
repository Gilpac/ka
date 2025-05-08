
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle anchor links
  const handleAnchorClick = (anchor: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${anchor}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="kargoo-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/35db1ac0-44be-4e7f-88d0-76e3f8b8c35f.png" 
                alt="Kargoo Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href={location.pathname === '/' ? '#features' : '/#features'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('features');
              }}
            >
              Recursos
            </a>
            <a 
              href={location.pathname === '/' ? '#how-it-works' : '/#how-it-works'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('how-it-works');
              }}
            >
              Como funciona
            </a>
            <Link 
              to="/simulacao" 
              className={`header-link font-medium ${location.pathname === '/simulacao' ? 'text-kargoo-green' : ''}`}
            >
              Simulação
            </Link>
            <Link 
              to="/transportadores" 
              className={`header-link font-medium ${location.pathname === '/transportadores' ? 'text-kargoo-green' : ''}`}
            >
              Transportadores
            </Link>
            <a 
              href={location.pathname === '/' ? '#faq' : '/#faq'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('faq');
              }}
            >
              FAQ
            </a>
            <div className="flex items-center space-x-4">
              <Button 
                className="bg-kargoo-green hover:bg-kargoo-green/90 btn-hover-effect"
                onClick={() => window.location.href = "http://ka.free.nf/log/index.html"}
              >
                Começar
              </Button>
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
            <a 
              href={location.pathname === '/' ? '#features' : '/#features'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('features');
              }}
            >
              Recursos
            </a>
            <a 
              href={location.pathname === '/' ? '#how-it-works' : '/#how-it-works'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('how-it-works');
              }}
            >
              Como funciona
            </a>
            <Link 
              to="/simulacao" 
              className={`header-link font-medium ${location.pathname === '/simulacao' ? 'text-kargoo-green' : ''}`}
            >
              Simulação
            </Link>
            <Link 
              to="/transportadores" 
              className={`header-link font-medium ${location.pathname === '/transportadores' ? 'text-kargoo-green' : ''}`}
            >
              Transportadores
            </Link>
            <a 
              href={location.pathname === '/' ? '#faq' : '/#faq'} 
              className="header-link"
              onClick={(e) => {
                if (location.pathname !== '/') e.preventDefault();
                handleAnchorClick('faq');
              }}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button 
                className="bg-kargoo-green hover:bg-kargoo-green/90 w-full"
                onClick={() => window.location.href = "http://ka.free.nf/log/index.html"}
              >
                Começar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
