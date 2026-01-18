import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600">
            Innovative solutions currently in development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ribbons */}
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-pink-50 to-red-50 pb-8">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/images/Ribbons.jpg" 
                  alt="Ribbons" 
                  className="h-24 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Ribbons
                </CardTitle>
              </div>
              <Badge className="mx-auto bg-red-500 hover:bg-red-600">Coming Soon</Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-base text-slate-700 leading-relaxed">
                A revolutionary relationship services platform designed to reignite intimacy and love for couples. 
                Ribbons provides personalized tools, guidance, and activities to help partners reconnect and 
                strengthen their emotional bonds.
              </CardDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-300">Web Application</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300">Relationship Services</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300">React</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Zyara */}
          <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-cyan-50 pb-8">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="/assets/logos/zyara-logo.webp" 
                  alt="Zyara" 
                  className="h-24 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-3xl font-bold text-slate-900">
                  Zyara
                </CardTitle>
              </div>
              <Badge className="mx-auto bg-blue-600 hover:bg-blue-700">Coming Soon</Badge>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="text-base text-slate-700 leading-relaxed">
                The first cross-border online shopping mobile app for Syrians worldwide. Zyara connects Syrians 
                living abroad with participating stores in Syria, enabling them to purchase and send gifts to their 
                loved ones back home with ease and convenience.
              </CardDescription>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-300">Mobile App</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300">E-Commerce</Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-300">Cross-Border</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}