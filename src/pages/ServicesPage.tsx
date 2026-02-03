import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Baby, 
  Bone, 
  Heart,
  Scissors,
  Pill,
  Activity,
  Syringe
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Gynecology',
    titleHindi: 'स्त्री रोग चिकित्सा',
    description: 'Complete women\'s health care including routine check-ups, prenatal care, family planning, and treatment of reproductive disorders. Our experienced gynecologists provide compassionate care for all stages of a woman\'s life.',
    features: ['Regular Health Check-ups', 'Prenatal Care', 'Family Planning', 'Menstrual Disorders', 'Infertility Treatment'],
    color: 'bg-pink-50 text-pink-600 border-pink-200',
  },
  {
    icon: Baby,
    title: 'Maternity Care',
    titleHindi: 'प्रसूती (नॉर्मल / सिजेरियन)',
    description: 'Safe and comfortable delivery options including normal and cesarean deliveries. Our maternity ward is equipped with modern facilities and staffed by experienced obstetricians and trained nurses.',
    features: ['Normal Delivery', 'Cesarean Section', 'High-Risk Pregnancy Care', 'Post-Natal Care', 'Newborn Care'],
    color: 'bg-purple-50 text-purple-600 border-purple-200',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    titleHindi: 'ऑर्थोपेडिक (हड्डी रोग)',
    description: 'Comprehensive bone and joint care including treatment of fractures, joint replacements, sports injuries, and spinal disorders. Our orthopedic surgeons use the latest techniques for optimal recovery.',
    features: ['Fracture Treatment', 'Joint Replacement', 'Sports Medicine', 'Spine Care', 'Arthritis Treatment'],
    color: 'bg-blue-50 text-blue-600 border-blue-200',
  },
  {
    icon: Stethoscope,
    title: 'General Medicine',
    titleHindi: 'मेडिसीन',
    description: 'Primary healthcare services for diagnosis and treatment of common ailments, chronic conditions, and preventive care. Our physicians provide holistic treatment for overall health and wellness.',
    features: ['Chronic Disease Management', 'Preventive Care', 'Health Check-ups', 'Fever & Infections', 'Lifestyle Diseases'],
    color: 'bg-green-50 text-green-600 border-green-200',
  },
  {
    icon: Baby,
    title: 'Pediatrics',
    titleHindi: 'पेडीयाट्रीक्स (बच्चों का इलाज)',
    description: 'Specialized healthcare for infants, children, and adolescents. Our pediatricians are skilled in treating common childhood illnesses, providing vaccinations, and monitoring growth and development.',
    features: ['Vaccinations', 'Growth Monitoring', 'Childhood Illnesses', 'Newborn Care', 'Adolescent Health'],
    color: 'bg-orange-50 text-orange-600 border-orange-200',
  },
  {
    icon: Scissors,
    title: 'General Surgery',
    titleHindi: 'सर्जरी (शस्त्रक्रिया)',
    description: 'Advanced surgical procedures performed by experienced surgeons using modern equipment. We offer both emergency and elective surgeries with focus on patient safety and quick recovery.',
    features: ['Laparoscopic Surgery', 'Appendix Surgery', 'Hernia Repair', 'Gallbladder Surgery', 'Emergency Surgery'],
    color: 'bg-red-50 text-red-600 border-red-200',
  },
  {
    icon: Activity,
    title: 'Diagnostic Services',
    titleHindi: 'निदान सेवाएं',
    description: 'State-of-the-art diagnostic services including ECG, EEG, and other essential tests. Quick and accurate results to aid in proper diagnosis and treatment planning.',
    features: ['ECG', 'EEG', 'Blood Tests', 'X-Ray', 'Ultrasound'],
    color: 'bg-teal-50 text-teal-600 border-teal-200',
  },
  {
    icon: Syringe,
    title: 'Emergency Care',
    titleHindi: 'आपातकालीन सेवा',
    description: '24/7 emergency medical services with trained staff and fully equipped emergency room. Immediate medical attention for accidents, trauma, and critical conditions.',
    features: ['24/7 Availability', 'Trauma Care', 'Critical Care', 'Ambulance Service', 'Emergency Surgery'],
    color: 'bg-amber-50 text-amber-600 border-amber-200',
  },
];

export default function ServicesPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive healthcare services to cater to all your medical needs under one roof
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-card rounded-2xl overflow-hidden border ${service.color.split(' ')[2]} shadow-sm hover:shadow-md transition-shadow`}
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Icon & Title */}
                    <div className={`p-8 ${service.color.split(' ')[0]} flex flex-col justify-center`}>
                      <div className={`w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                        <service.icon className={`w-8 h-8 ${service.color.split(' ')[1]}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                      <p className={`text-sm mt-1 ${service.color.split(' ')[1]}`}>{service.titleHindi}</p>
                    </div>

                    {/* Description */}
                    <div className="p-8 bg-background lg:col-span-2">
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${service.color.split(' ')[1].replace('text-', 'bg-')}`} />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
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
