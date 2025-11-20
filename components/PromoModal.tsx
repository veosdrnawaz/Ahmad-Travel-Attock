
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const PromoModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDeals = () => {
    setIsVisible(false);
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 px-8">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsVisible(false)}></div>
      
      <div className="relative bg-[#1aa3a3] w-full max-w-md rounded-xl shadow-2xl p-8 text-center transform transition-all animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-[#1aa3a3] font-bold text-2xl shadow-md">
            AT
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          Special 2025 Offer
        </h2>
        
        <div className="w-16 h-0.5 bg-white/50 mx-auto mb-4"></div>

        <p className="text-white/90 mb-8 font-medium">
          Book your Ramadan Umrah package now. Limited seats available.
        </p>

        <button 
          onClick={handleViewDeals}
          className="w-full bg-white text-[#1aa3a3] font-bold py-3.5 rounded shadow-md hover:bg-gray-50 transition-colors uppercase tracking-wider text-sm"
        >
          View Offers
        </button>

        <button 
          onClick={() => setIsVisible(false)}
          className="mt-4 text-white text-sm underline hover:text-gray-200 decoration-white/50"
        >
          No Thanks
        </button>
      </div>
    </div>
  );
};
