import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. Rajesh Sharma',
    qualification: 'MBBS, MS (General Surgery)',
    specialty: 'General Surgeon',
    specialtyHindi: 'सर्जन',
    experience: '15+ Years',
    expertise: ['Laparoscopic Surgery', 'Hernia Repair', 'Appendectomy', 'Emergency Surgery'],
    schedule: 'Mon-Sat: 10:00 AM - 2:00 PM, 5:00 PM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Priya Patel',
    qualification: 'MBBS, MD (Obstetrics & Gynecology)',
    specialty: 'Gynecologist & Obstetrician',
    specialtyHindi: 'गायनाकोलॉजिस्ट',
    experience: '12+ Years',
    expertise: ['Normal & Cesarean Delivery', 'High-Risk Pregnancy', 'Infertility Treatment', 'Laparoscopic Surgery'],
    schedule: 'Mon-Sat: 9:00 AM - 1:00 PM, 4:00 PM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Amit Kumar',
    qualification: 'MBBS, MS (Orthopedics)',
    specialty: 'Orthopedic Surgeon',
    specialtyHindi: 'ऑर्थो सर्जन',
    experience: '10+ Years',
    expertise: ['Joint Replacement', 'Fracture Management', 'Sports Injuries', 'Spine Surgery'],
    schedule: 'Mon-Sat: 11:00 AM - 2:00 PM, 6:00 PM - 9:00 PM',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Sneha Desai',
    qualification: 'MBBS, MD (Pediatrics)',
    specialty: 'Pediatrician',
    specialtyHindi: 'पेडियाट्रीशियन',
    experience: '8+ Years',
    expertise: ['Newborn Care', 'Vaccination', 'Child Development', 'Childhood Infections'],
    schedule: 'Mon-Sat: 10:00 AM - 1:00 PM, 5:00 PM - 8:00 PM',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Vikram Joshi',
    qualification: 'MBBS, MD (General Medicine)',
    specialty: 'Physician',
    specialtyHindi: 'फिजिशियन',
    experience: '18+ Years',
    expertise: ['Diabetes Management', 'Hypertension', 'Respiratory Diseases', 'General Health'],
    schedule: 'Mon-Sat: 9:00 AM - 12:00 PM, 4:00 PM - 7:00 PM',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Neha Gupta',
    qualification: 'MBBS, DNB (Anesthesiology)',
    specialty: 'Anesthesiologist',
    specialtyHindi: 'एनेस्थेसियोलॉजिस्ट',
    experience: '7+ Years',
    expertise: ['General Anesthesia', 'Regional Anesthesia', 'Pain Management', 'Critical Care'],
    schedule: 'As per surgery schedule',
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop',
  },
];

export default function DoctorsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Doctors</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Meet our team of highly qualified and experienced medical professionals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctors List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid md:grid-cols-4 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                    </div>

                    {/* Details */}
                    <div className="p-6 md:col-span-3">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">{doctor.name}</h2>
                          <p className="text-primary font-medium">{doctor.specialty}</p>
                          <p className="text-sm text-muted-foreground">{doctor.specialtyHindi}</p>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                          <Award className="w-4 h-4" />
                          <span className="font-medium">{doctor.experience}</span>
                        </div>
                      </div>

                      {/* Qualification */}
                      <div className="flex items-start gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-muted-foreground">{doctor.qualification}</p>
                      </div>

                      {/* Expertise */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.expertise.map((item) => (
                            <span key={item} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="flex items-start gap-2 mb-4">
                        <Clock className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-muted-foreground text-sm">{doctor.schedule}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border">
                        <Link to="/book-appointment">
                          <Button className="bg-primary hover:bg-primary/90">
                            Book Appointment
                          </Button>
                        </Link>
                        <a href="tel:8767226939">
                          <Button variant="outline" className="gap-2">
                            <Phone className="w-4 h-4" />
                            Call Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
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
