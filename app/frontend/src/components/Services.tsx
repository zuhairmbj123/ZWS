import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Smartphone, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: 'Website Development',
      description: 'Custom-built websites that are fast, responsive, and optimized for conversions. From landing pages to complex corporate sites.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/879249/2026-01-15/503ea159-d33b-4600-96fe-2d77f4eabee8.png'
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Web Applications',
      description: 'Powerful web applications built with modern technologies. Scalable, secure, and designed to streamline your business operations.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/879249/2026-01-15/503ea159-d33b-4600-96fe-2d77f4eabee8.png'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android devices.',
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/879249/2026-01-15/b2dd9bed-3fa8-4239-9bb4-ce17c45e93eb.png'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}