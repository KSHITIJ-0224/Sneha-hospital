import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Government approved abortion center',
  'General Ward & Special Room facilities',
  'ECG / EEG diagnostic services',
  '24-hour emergency services',
  'Experienced medical professionals',
  'Modern medical equipment',
];

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                  alt="Hospital Building"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Sneha Hospital - East Unit II
            </h2>
            <p className="text-muted-foreground mb-6">
              Located in the heart of Nallasopara, Sneha Hospital East Unit-II has been serving the community 
              with comprehensive healthcare services since 2012. Our multispecialty facility is equipped to 
              handle General Surgery, Orthopedics, Maternity Care, Pediatrics, and more.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to provide affordable, accessible, and quality healthcare to everyone. With a team 
              of dedicated doctors, nurses, and support staff, we ensure every patient receives personalized 
              care and attention.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
