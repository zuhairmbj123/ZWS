import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-blue-200">
              Delivering impactful solutions when it matters most
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 transition-all duration-300">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl font-bold text-red-600">CRC</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Canadian Red Cross</h3>
                  <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                    During the COVID-19 pandemic, we developed a comprehensive meal tracker application 
                    for the Canadian Red Cross to efficiently manage and distribute meals to refugees. 
                    The application streamlined operations, improved tracking accuracy, and ensured 
                    vulnerable populations received essential support during critical times.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Real-time Tracking</p>
                        <p className="text-sm text-blue-200">Instant meal distribution updates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Efficient Management</p>
                        <p className="text-sm text-blue-200">Streamlined operations workflow</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Scalable Solution</p>
                        <p className="text-sm text-blue-200">Handled high-volume operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Critical Impact</p>
                        <p className="text-sm text-blue-200">Supported vulnerable communities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}