import { Header } from '@/components/hospital/Header';
import { HeroSection } from '@/components/hospital/HeroSection';
import { ServicesSection } from '@/components/hospital/ServicesSection';
import { DoctorsSection } from '@/components/hospital/DoctorsSection';
import { AboutSection } from '@/components/hospital/AboutSection';
import { WhyChooseUs } from '@/components/hospital/WhyChooseUs';
import { TestimonialsSection } from '@/components/hospital/TestimonialsSection';
import { AppointmentCTA } from '@/components/hospital/AppointmentCTA';
import { Footer } from '@/components/hospital/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <DoctorsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
