
import React, { useState } from 'react';
import { Plane, FileText, Bus, Coffee, Bed, MapPin, FileDown } from 'lucide-react';
import { Package } from '../types';

interface PackagesProps {
  onBook: (pkg: Package, persons: number) => void;
}

const packagesData: Package[] = [
  {
    id: 1,
    title: "November Premium Umrah",
    subTitle: "10 Nights | Flight Included",
    tag: "Selling Fast",
    route: "Jeddah -> Makkah (5N) -> Madinah (5N)",
    image: "https://images.unsplash.com/photo-1537181534458-43d336bb1276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "PKR 515,549 / Person",
    priceNumber: 515549,
    month: "November",
    type: "Economy",
    rating: 5.0,
    amenities: [],
    inclusions: { flight: true, visa: true, transfer: true, hotel: true, meals: true },
    distances: { makkah: "200 m", madinah: "300 m" }
  },
  {
    id: 2,
    title: "December Group Saver",
    subTitle: "14 Nights | Best Value",
    tag: "Best Value",
    route: "Madinah (7N) -> Makkah (7N)",
    image: "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "PKR 380,000 / Person",
    priceNumber: 380000,
    month: "December",
    type: "Group",
    rating: 4.8,
    amenities: [],
    inclusions: { flight: true, visa: true, transfer: true, hotel: true, meals: false },
    distances: { makkah: "Shuttle", madinah: "500 m" }
  },
  {
    id: 3,
    title: "January VIP Experience",
    subTitle: "7 Nights | 5-Star Luxury",
    tag: "Luxury",
    route: "Makkah (Clock Tower) -> Madinah (Oberoi)",
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "PKR 850,000 / Person",
    priceNumber: 850000,
    month: "January",
    type: "Premium",
    rating: 5.0,
    amenities: [],
    inclusions: { flight: true, visa: true, transfer: true, hotel: true, meals: true },
    distances: { makkah: "0 m (Haram View)", madinah: "50 m" }
  }
];

// Helper component for inclusion icons
const InclusionIcon = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="flex flex-col items-center gap-1">
    <Icon size={18} className="text-[#1a3c6e]" />
    <span className="text-[10px] font-medium text-gray-500">{label}</span>
  </div>
);

interface PackageCardProps {
  pkg: Package;
  onBook: (p: Package, n: number) => void;
}

// Individual Package Card Component to handle local state
const PackageCard: React.FC<PackageCardProps> = ({ pkg, onBook }) => {
  const [travelers, setTravelers] = useState(1);

  const increment = () => setTravelers(prev => prev + 1);
  const decrement = () => setTravelers(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
              
      {/* Top Section */}
      <div className="p-5 pb-2 flex-grow">
         <div className="flex justify-between items-start gap-4 mb-3">
           <div>
             <h3 className="text-base font-bold text-[#1a3c6e] leading-snug group-hover:text-blue-600 transition-colors">
               {pkg.title}
             </h3>
             {pkg.subTitle && <p className="text-xs text-gray-500 mt-1">{pkg.subTitle}</p>}
           </div>
         </div>
         
         {pkg.tag && (
           <span className="inline-block bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-4">
             {pkg.tag}
           </span>
         )}

         <div className="mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Itinerary</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {pkg.route}
            </p>
         </div>

         <div className="mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Includes</p>
            <div className="flex items-center gap-4">
               {pkg.inclusions.flight && <InclusionIcon icon={Plane} label="Flight" />}
               {pkg.inclusions.visa && <InclusionIcon icon={FileText} label="Visa" />}
               {pkg.inclusions.transfer && <InclusionIcon icon={Bus} label="Bus" />}
               {pkg.inclusions.meals && <InclusionIcon icon={Coffee} label="Food" />}
               {pkg.inclusions.hotel && <InclusionIcon icon={Bed} label="Hotel" />}
            </div>
         </div>

         <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Distance to Haram</p>
            <div className="flex gap-6">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                     <div className="w-4 h-4 bg-black rounded-sm"></div> {/* Kaaba placeholder */}
                  </div>
                  <div>
                     <p className="text-[10px] text-gray-400">Makkah</p>
                     <p className="text-xs font-bold text-gray-700">{pkg.distances.makkah}</p>
                  </div>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-green-600">
                     <MapPin size={16} />
                  </div>
                  <div>
                     <p className="text-[10px] text-gray-400">Madinah</p>
                     <p className="text-xs font-bold text-gray-700">{pkg.distances.madinah}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Input for Travellers */}
      <div className="px-5 py-2 mt-auto">
         <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
            <span className="text-xs font-bold text-gray-500 pl-2">Travelers:</span>
            <div className="flex items-center select-none">
               <button 
                 onClick={decrement}
                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#1a3c6e] hover:bg-gray-100 rounded font-bold transition-colors"
               >
                 -
               </button>
               <span className="text-sm font-bold text-[#1a3c6e] w-8 text-center">{travelers}</span>
               <button 
                 onClick={increment}
                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#1a3c6e] hover:bg-gray-100 rounded font-bold transition-colors"
               >
                 +
               </button>
            </div>
            <div className="ml-auto text-xs font-bold text-[#1a3c6e] bg-gray-50 px-2 py-1 rounded">
               {pkg.price.split('/')[0]}
            </div>
         </div>
      </div>

      {/* Footer Action Area - Lime Green Background */}
      <div className="bg-[#dcfce7] p-4 flex items-center justify-between gap-3 mt-3">
        <div className="flex-1">
           <p className="text-xs font-bold text-[#1a3c6e] leading-tight">
             {pkg.price}
           </p>
        </div>
        <div className="flex gap-2">
           <button 
              onClick={() => onBook(pkg, travelers)}
              className="bg-[#1a3c6e] text-white text-xs font-bold px-4 py-2 rounded-lg shadow hover:bg-[#153059] transition-colors transform active:scale-95 whitespace-nowrap"
           >
              Book Now
           </button>
           <button 
             onClick={() => alert(`Downloading PDF brochure for: ${pkg.title}`)}
             className="bg-transparent border border-[#1a3c6e] text-[#1a3c6e] px-3 py-2 rounded-lg hover:bg-[#1a3c6e] hover:text-white transition-colors flex items-center gap-1"
           >
              <FileDown size={14} />
              <span className="text-xs font-bold">Flyer</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export const Packages: React.FC<PackagesProps> = ({ onBook }) => {
  return (
    <section id="packages" className="pt-32 pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c6e]">Our Best Packages</h2>
             <p className="text-gray-500 mt-2 text-sm">Top value deals for Umrah and Holidays.</p>
          </div>
          <button 
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-semibold text-gray-500 hover:text-[#1a3c6e] transition-colors"
          >
            See All Offers
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
};
