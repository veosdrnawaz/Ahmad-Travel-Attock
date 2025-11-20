
import React from 'react';
import { ShieldCheck, Globe, Headset } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-blue-600">Ahmad Travel?</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We make your trip easy, safe, and comfortable. From sacred Umrah journeys to family holidays, we are here to serve you.
          </p>
        </div>

        {/* What We Offer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Globe size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Explore the World</h3>
            <p className="text-gray-500 leading-relaxed">
              We offer great deals on holidays to Dubai, Turkey, Malaysia, and more. Travel with confidence.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visa & Insurance</h3>
            <p className="text-gray-500 leading-relaxed">
              Skip the stress. We handle your visa paperwork and travel insurance quickly and correctly.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Headset size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-500 leading-relaxed">
              We are always just a phone call away. Our team supports you before, during, and after your trip.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
