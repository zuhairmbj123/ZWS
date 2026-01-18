import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://mgx-backend-cdn.metadl.com/generate/images/879249/2026-01-15/561bdc0b-674a-41f0-9692-ccd5f28da642.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/85 to-blue-800/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Transform Your Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mt-2">
              Digital Reality
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge websites, web applications, and mobile apps that drive your business forward
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold text-lg px-8 py-6 shadow-2xl shadow-blue-500/50 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => {
                const element = document.getElementById('prototype');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-6"
            >
              Get Free Prototype
            </Button>
          </div>

          <div className="pt-8 text-gray-300">
            <p className="text-sm uppercase tracking-wider font-semibold mb-3">Trusted By</p>
            <p className="text-lg font-medium">Canadian Red Cross & Growing</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}