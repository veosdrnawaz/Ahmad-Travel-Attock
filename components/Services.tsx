import React from 'react';
import { ShieldCheck, Globe, Headset } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Banner */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ahmad Travel Attock – <span className="text-blue-600">Trusted Travel Agency</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide comprehensive travel solutions tailored to your needs. From spiritual journeys to Umrah and Hajj to luxurious leisure vacations, our team ensures a seamless experience from start to finish.
          </p>
        </div>

        {/* What We Offer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Globe size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">World Class Tours</h3>
            <p className="text-gray-500 leading-relaxed">
              Explore international destinations with our expertly crafted tour packages designed for comfort and adventure.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Best Travel Insurance</h3>
            <p className="text-gray-500 leading-relaxed">
              Travel with peace of mind. We offer comprehensive travel insurance coverage for individuals and families.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <Headset size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Support</h3>
            <p className="text-gray-500 leading-relaxed">
              Our dedicated support team is available 24/7 to assist you with any queries or emergencies during your trip.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};