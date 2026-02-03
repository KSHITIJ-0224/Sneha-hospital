import { motion } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  Users, 
  Award, 
  Heart,
  Stethoscope,
  Building,
  BadgeCheck
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Emergency Services',
    description: 'Round-the-clock emergency care with trained medical staff always ready to help.',
  },
  {
    icon: Shield,
    title: 'Government Approved',
    description: 'Registered under WVCMC/C.H. 62/2012 with all necessary certifications and approvals.',
  },
  {
    icon: Users,
    title: 'Expert Medical Team',
    description: 'Highly qualified doctors and nurses with years of experience in their fields.',
  },
  {
    icon: Award,
    title: '10+ Years of Trust',
    description: 'A decade of serving the community with quality healthcare services.',
  },
  {
    icon: Heart,
    title: 'Patient-Centric Care',
    description: 'We prioritize patient comfort and satisfaction in every interaction.',
  },
  {
    icon: Stethoscope,
    title: 'Modern Equipment',
    description: 'State-of-the-art medical equipment for accurate diagnosis and treatment.',
  },
  {
    icon: Building,
    title: 'Clean & Hygienic Facility',
    description: 'Well-maintained hospital with strict hygiene protocols.',
  },
  {
    icon: BadgeCheck,
    title: 'Affordable Treatment',
    description: 'Quality healthcare at reasonable prices accessible to all.',
  },
];

export function WhyChooseUs() {
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Your Trusted Healthcare Partner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing exceptional healthcare services with compassion, expertise, and dedication.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
