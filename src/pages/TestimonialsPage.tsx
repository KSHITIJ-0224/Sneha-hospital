import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { TestimonialsSection } from '@/components/hospital/TestimonialsSection';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-20 medical-gradient-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Patient Testimonials</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Read what our patients have to say about their experience at Sneha Hospital
              </p>
            </motion.div>
          </div>
        </section>

        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
