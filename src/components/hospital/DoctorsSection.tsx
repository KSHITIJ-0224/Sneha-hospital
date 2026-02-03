import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    name: 'Dr. Rajesh Sharma',
    qualification: 'MBBS, MS (General Surgery)',
    specialty: 'General Surgeon',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Priya Patel',
    qualification: 'MBBS, MD (Obstetrics & Gynecology)',
    specialty: 'Gynecologist & Obstetrician',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Amit Kumar',
    qualification: 'MBBS, MS (Orthopedics)',
    specialty: 'Orthopedic Surgeon',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Sneha Desai',
    qualification: 'MBBS, MD (Pediatrics)',
    specialty: 'Pediatrician',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },
];

export function DoctorsSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Doctors</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Meet Our Expert Physicians
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of highly qualified doctors brings years of experience and expertise to provide you with the best medical care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                    {doctor.specialty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
                <div className="flex items-start gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{doctor.qualification}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-medium text-primary">{doctor.experience}</span>
                  <Link to="/book-appointment">
                    <Button size="sm" variant="outline" className="text-xs">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/doctors">
            <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
