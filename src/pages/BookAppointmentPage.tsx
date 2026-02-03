import { Header } from '@/components/hospital/Header';
import { Footer } from '@/components/hospital/Footer';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Calendar, Clock, Phone, CheckCircle } from 'lucide-react';

export default function BookAppointmentPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "sneha-appointment", {origin:"https://app.cal.com"});
      
      Cal.ns["sneha-appointment"]("inline", {
        elementOrSelector:"#sneha-cal-booking",
        config: {"layout":"month_view"},
        calLink: "zeroqode/30min",
      });
      
      Cal.ns["sneha-appointment"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-16 medical-gradient-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book an Appointment</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Schedule your visit with our expert doctors at your convenience
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
                  {/* Widget Header */}
                  <div className="bg-primary text-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        <div>
                          <h3 className="font-semibold">Sneha Hospital Appointment</h3>
                          <p className="text-sm text-white/80">Select a convenient time slot</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cal.com Embed Container */}
                  <div className="bg-white">
                    <div 
                      style={{
                        width: '100%',
                        height: '600px',
                        overflow: 'auto'
                      }} 
                      id="sneha-cal-booking"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Info Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Contact for Urgent */}
                <div className="bg-accent-red/10 rounded-xl p-6 border border-accent-red/20">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent-red" />
                    For Emergencies
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For urgent medical needs, please call us directly:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="tel:8767226939" 
                      className="block bg-accent-red text-white text-center py-3 rounded-lg font-medium hover:bg-accent-red/90 transition-colors"
                    >
                      📞 8767226939
                    </a>
                    <a 
                      href="tel:9922993868" 
                      className="block bg-white text-accent-red text-center py-3 rounded-lg font-medium border border-accent-red hover:bg-accent-red/5 transition-colors"
                    >
                      📞 9922993868
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Working Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">OPD Timing</span>
                      <span className="text-foreground">9:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency</span>
                      <span className="text-foreground font-medium text-accent-emerald">24/7</span>
                    </div>
                  </div>
                </div>

                {/* What to Bring */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-3">What to Bring</h3>
                  <ul className="space-y-2">
                    {[
                      'Previous medical records',
                      'Current medications list',
                      'Valid ID proof',
                      'Insurance documents (if any)',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
