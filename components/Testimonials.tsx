
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>

        <div className="relative bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-400 overflow-hidden shadow-lg">
                 <img src="https://picsum.photos/id/64/200/200" alt="Client" className="w-full h-full object-cover" />
               </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
               <Quote size={40} className="text-blue-300 mb-4 mx-auto md:mx-0 opacity-50" />
               <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6 italic">
                 "Ahmad Travel made our Umrah trip perfect. The hotels were very close to the Haram, and the service was excellent. Highly recommended for a peace of mind journey!"
               </p>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                 <div>
                    <h4 className="text-xl font-bold">Muhammad Usman</h4>
                    <p className="text-blue-200 text-sm">Traveled Jan 2025</p>
                 </div>
                 
                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                   <div className="flex">
                     {[1, 2, 3, 4, 5].map((i) => (
                       <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                     ))}
                   </div>
                   <span className="font-bold ml-1">5.0</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
