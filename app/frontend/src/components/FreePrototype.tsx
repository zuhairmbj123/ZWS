import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Gift } from 'lucide-react';

export default function FreePrototype() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="prototype" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://mgx-backend-cdn.metadl.com/generate/images/879249/2026-01-15/0f007e4e-57fc-4a6f-bfd0-a63a92d428a8.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-blue-500 shadow-2xl shadow-blue-200 bg-white">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  Free Interactive Prototype
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We're the first business to build interactive prototypes for your concept 
                  <span className="font-bold text-blue-600"> completely FREE</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Visualize Your Idea</h3>
                  <p className="text-sm text-slate-600">
                    See your concept come to life with interactive designs
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Fast Turnaround</h3>
                  <p className="text-sm text-slate-600">
                    Get your prototype quickly to validate your idea
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <Gift className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Zero Cost</h3>
                  <p className="text-sm text-slate-600">
                    No strings attached, completely free prototype
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-white text-center">
                <p className="text-2xl font-bold mb-4">
                  Have an idea for a web or mobile app?
                </p>
                <p className="text-lg mb-6 text-blue-100">
                  Let us create an interactive prototype to bring your vision to life
                </p>
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl"
                >
                  Claim Your Free Prototype
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}