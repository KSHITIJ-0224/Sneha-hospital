import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { WhyChooseUs } from '@/components/hospital/WhyChooseUs';
import { motion } from 'framer-motion';

export default function WhyChooseUsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover what makes Sneha Hospital your trusted healthcare partner
              </p>
            </motion.div>
          </div>
        </section>

        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
