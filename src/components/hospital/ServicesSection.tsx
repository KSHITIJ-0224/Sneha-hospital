import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Baby, 
  Bone, 
  Syringe, 
  Heart,
  Scissors,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Heart,
    title: 'Gynecology',
    titleHindi: 'स्त्री रोग चिकित्सा',
    description: 'Complete women\'s health care including routine check-ups, prenatal care, and treatment of reproductive disorders.',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    icon: Baby,
    title: 'Maternity Care',
    titleHindi: 'प्रसूती (नॉर्मल / सिजेरियन)',
    description: 'Safe and comfortable delivery options including normal and cesarean deliveries with expert maternal care.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    titleHindi: 'ऑर्थोपेडिक (हड्डी रोग)',
    description: 'Comprehensive bone and joint care, fracture treatment, and orthopedic surgeries.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    titleHindi: 'मेडिसीन',
    description: 'Primary healthcare services for diagnosis and treatment of common ailments and chronic conditions.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    titleHindi: 'पेडीयाट्रीक्स (बच्चों का इलाज)',
    description: 'Specialized healthcare for infants, children, and adolescents with vaccinations and growth monitoring.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: Scissors,
    title: 'General Surgery',
    titleHindi: 'सर्जरी (शस्त्रक्रिया)',
    description: 'Advanced surgical procedures performed by experienced surgeons with modern equipment.',
    color: 'bg-red-50 text-red-600',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of medical services to cater to all your healthcare needs under one roof.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-primary/70 mb-3">{service.titleHindi}</p>
              <p className="text-muted-foreground text-sm">{service.description}</p>
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
          <Link to="/services">
            <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
