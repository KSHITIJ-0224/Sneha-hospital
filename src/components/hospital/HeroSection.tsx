import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center medical-gradient-light overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Reg. No. WVCMC/C.H. 62/2012</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Health, <br />
              <span className="text-primary">Our Priority</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Sneha Hospital East Unit-II provides comprehensive healthcare services including 
              General Surgery, Orthopaedics, Maternity Care, and Pediatrics with 24/7 emergency services.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/book-appointment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:8767226939">
                <Button size="lg" variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-primary/20 to-accent-teal/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full shadow-xl flex items-center justify-center heartbeat">
                      <svg className="w-16 h-16 text-accent-red" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Caring for You</h3>
                    <p className="text-muted-foreground">With Compassion & Excellence</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-pulse">
                <div className="w-12 h-12 bg-accent-emerald/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-emerald" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Doctors</div>
                  <div className="text-sm text-muted-foreground">Specialized Care</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-20 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-pulse">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">24/7 Service</div>
                  <div className="text-sm text-muted-foreground">Always Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
