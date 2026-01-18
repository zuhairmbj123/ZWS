import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import CaseStudy from '@/components/CaseStudy';
import FreePrototype from '@/components/FreePrototype';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <CaseStudy />
      <FreePrototype />
      <ContactForm />
      <Footer />
    </div>
  );
}