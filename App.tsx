
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PromoModal } from './components/PromoModal';
import { ChatWidget } from './components/ChatWidget';
import { LoginModal } from './components/LoginModal';
import { Package } from './types';

// Simple partner logo placeholders
const PartnerLogos = () => (
  <div className="py-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Our Partners</h3>
      <div className="flex flex-wrap justify-center md:justify-around items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex flex-col items-center">
           <div className="text-3xl font-black text-gray-800 tracking-tighter">MAQAM</div>
           <div className="text-[10px] text-gray-500 uppercase tracking-widest">Hajj & Umrah Distribution System</div>
        </div>
        {['Emirates', 'Saudia', 'Qatar Airways', 'Turkish Airlines'].map((name, i) => (
          <div key={i} className="font-bold text-xl text-gray-600 flex items-center gap-2">
             <div className="w-8 h-8 bg-gray-200 rounded-full"></div> {name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleBookClick = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div id="home" className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar 
        onLoginClick={() => setIsLoginModalOpen(true)} 
        onChatClick={() => setIsChatOpen(true)}
      />
      
      <main>
        <Hero />
        <PromoModal />
        <Services />
        <Packages onBook={handleBookClick} />
        <Testimonials />
        <PartnerLogos />
      </main>

      <Footer />
      
      <ChatWidget 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
        onClose={() => setIsChatOpen(false)}
      />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={handleCloseBookingModal} 
        selectedPackage={selectedPackage} 
      />

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default App;
