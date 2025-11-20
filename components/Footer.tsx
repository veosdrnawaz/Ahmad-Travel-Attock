
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                AT
              </div>
              <div>
                <h3 className="font-bold text-lg leading-none">AHMAD TRAVEL</h3>
                <span className="text-xs text-gray-400 tracking-widest">ATTOCK</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted travel partner in Attock. We make Umrah, Hajj, and World Tours easy, safe, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Menu</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">Why Us</a></li>
              <li><a href="#packages" onClick={(e) => scrollToSection(e, 'packages')} className="hover:text-blue-400 transition-colors">Packages</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Policies</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">International Flights</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Umrah Visa</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Group Tours</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span>Main Bazaar, Attock City,<br/>Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <a href="tel:03184898594" className="font-mono text-white hover:text-blue-400 transition-colors">03184898594</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <a href="mailto:info@ahmadtravel.com" className="hover:text-blue-400 transition-colors">info@ahmadtravel.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>Copyright © 2025 Ahmad Travel Attock. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
