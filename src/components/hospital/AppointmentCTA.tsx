import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppointmentCTA() {
  return (
    <section className="py-20 medical-gradient text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Don't wait to take care of your health. Book an appointment with our expert doctors today and get the care you deserve.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/book-appointment">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment Online
              </Button>
            </Link>
            <a href="tel:8767226939">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Phone className="w-5 h-5" />
                Call: 8767226939
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-8 h-8" />
              <div className="text-left">
                <div className="font-semibold">24/7 Emergency</div>
                <div className="text-sm text-white/70">Always Available</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-8 h-8" />
              <div className="text-left">
                <div className="font-semibold">Two Helplines</div>
                <div className="text-sm text-white/70">8767226939 / 9922993868</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-8 h-8" />
              <div className="text-left">
                <div className="font-semibold">Easy Booking</div>
                <div className="text-sm text-white/70">Online & Offline</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
