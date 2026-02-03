import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Award, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const milestones = [
  { year: '2012', title: 'Foundation', description: 'Sneha Hospital East Unit-II was established with a vision to provide quality healthcare.' },
  { year: '2015', title: 'Expansion', description: 'Added specialized departments for Orthopedics and Pediatrics.' },
  { year: '2018', title: 'Modernization', description: 'Upgraded to modern medical equipment and expanded facilities.' },
  { year: '2022', title: '10 Years', description: 'Celebrated a decade of serving the community with 15,000+ happy patients.' },
];

const facilities = [
  'Government Approved Abortion Center',
  'General Ward & Special Rooms',
  'ECG / EEG Diagnostic Services',
  '24/7 Emergency Services',
  'Modern Operation Theatres',
  'Well-equipped Labor Room',
  'Pharmacy Services',
  'Ambulance Service',
];

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Sneha Hospital</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Serving the community with quality healthcare since 2012
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Story */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Sneha Hospital East Unit-II was established in 2012 with a singular mission: to provide 
                  affordable, accessible, and quality healthcare to the people of Nallasopara and surrounding areas.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small healthcare facility has grown into a comprehensive multispecialty 
                  hospital offering services in General Surgery, Orthopedics, Gynecology, Maternity Care, 
                  Pediatrics, and General Medicine.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of dedicated doctors, nurses, and support staff work tirelessly to ensure every 
                  patient receives personalized care and attention. We believe in treating patients with 
                  compassion, dignity, and respect.
                </p>

                <div className="bg-primary/10 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground">Registration</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Reg. No. WVCMC/C.H. 62/2012 - Government approved healthcare facility
                  </p>
                </div>

                <Link to="/book-appointment">
                  <Button className="bg-primary hover:bg-primary/90">Book an Appointment</Button>
                </Link>
              </motion.div>

              {/* Image & Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                    alt="Sneha Hospital"
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground text-sm">
                        A-Wing, 1st Floor, Shree Om Shanti CHS, Central Park, 
                        Nallasopara (E), Dist-Palghar - 401 209
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground text-sm">8767226939 / 9922993868</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <p className="text-muted-foreground text-sm">24/7 Emergency Services Available</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground">Key milestones in our decade of service</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl p-6 border border-border text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Facilities</h2>
              <p className="text-muted-foreground">Modern infrastructure for quality healthcare</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                  <span className="text-sm text-foreground">{facility}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
