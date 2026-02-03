import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/sneha-hospital-logo.png';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Our Doctors', path: '/doctors' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Book Appointment', path: '/book-appointment' },
];

const services = [
  'General Surgery',
  'Orthopedics',
  'Maternity Care',
  'Pediatrics',
  'Gynecology',
  'General Medicine',
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Sneha Hospital" className="h-12 w-auto bg-white rounded-lg p-1" />
              <div>
                <h3 className="text-lg font-bold text-white">Sneha Hospital</h3>
                <p className="text-xs text-background/60">East Unit - II</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-6">
              Providing comprehensive healthcare services with compassion and excellence since 2012. 
              Your health, our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-background/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-background/70 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  A-Wing, 1st Floor, Shree Om Shanti CHS, Central Park, 
                  Nallasopara (E), Dist-Palghar - 401 209
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <a href="tel:8767226939" className="hover:text-white block">8767226939</a>
                  <a href="tel:9922993868" className="hover:text-white block">9922993868</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  24/7 Emergency Services
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@snehahospital.com" className="text-background/70 hover:text-white text-sm">
                  info@snehahospital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sneha Hospital East Unit-II. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Reg. No. WVCMC/C.H. 62/2012
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
