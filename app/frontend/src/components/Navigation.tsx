import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src="/assets/logos/zuru-logo.png" 
              alt="Zuru Web Solutions" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('prototype')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Free Prototype
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900 text-white font-semibold shadow-lg"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-blue-600 font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-slate-700 hover:text-blue-600 font-medium text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('prototype')}
                className="text-slate-700 hover:text-blue-600 font-medium text-left"
              >
                Free Prototype
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-blue-600 font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}