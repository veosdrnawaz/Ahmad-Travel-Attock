
import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [packageType, setPackageType] = useState('');

  const handleSearch = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-0"> 
      {/* Hero Background */}
      <div className="relative h-[600px] w-full bg-[#0f294d]">
        <img 
          src="https://picsum.photos/id/1039/1920/1080" 
          alt="Travel Background" 
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 pb-32">
          <h4 className="text-green-400 font-bold tracking-wider uppercase mb-3 text-sm md:text-base bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
            Trusted by 5,000+ Travelers
          </h4>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl drop-shadow-lg">
            Your Sacred Journey, <br/> Simplified.
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-gray-100 mb-8 leading-relaxed drop-shadow-md font-medium">
            We handle the travel details so you can focus on your prayers. Premium Umrah & Tour services in Attock.
          </p>
        </div>
      </div>

      {/* Floating Search Panel */}
      <div className="absolute bottom-0 translate-y-1/3 left-0 w-full z-20 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 ring-1 ring-black/5">
          <form 
            className={`grid grid-cols-1 ${packageType === 'Umrah Packages' ? 'md:grid-cols-5' : 'md:grid-cols-4'} gap-4 items-end`}
            onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          >
            
            {/* Month */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1a3c6e] uppercase tracking-wider">When?</label>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-[#1a3c6e] focus:ring-1 focus:ring-[#1a3c6e] appearance-none cursor-pointer font-semibold transition-all hover:bg-gray-100"
                >
                  <option>Any Date</option>
                  <option>January 2025</option>
                  <option>February 2025</option>
                  <option>Ramadan 2025</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Package Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1a3c6e] uppercase tracking-wider">Trip Type</label>
              <div className="relative">
                <select 
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-[#1a3c6e] focus:ring-1 focus:ring-[#1a3c6e] appearance-none cursor-pointer font-semibold transition-all hover:bg-gray-100"
                >
                  <option value="">Select Type</option>
                  <option>Umrah Packages</option>
                  <option>Hajj</option>
                  <option>Flights</option>
                  <option>Tours</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Dynamic Umrah Type Dropdown */}
            {packageType === 'Umrah Packages' && (
              <div className="flex flex-col gap-1.5 animate-in fade-in zoom-in duration-300">
                <label className="text-xs font-bold text-[#1a3c6e] uppercase tracking-wider">Class</label>
                <div className="relative">
                  <select 
                    className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-[#1a3c6e] focus:ring-1 focus:ring-[#1a3c6e] appearance-none cursor-pointer font-semibold transition-all hover:bg-gray-100"
                  >
                    <option>Any</option>
                    <option>5-Star (VIP)</option>
                    <option>Economy Plus</option>
                    <option>Saver</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            )}

            {/* Pilgrims */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-[#1a3c6e] uppercase tracking-wider">People</label>
              <div className="relative">
                <select 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm py-3 px-4 pr-8 rounded-xl focus:outline-none focus:border-[#1a3c6e] focus:ring-1 focus:ring-[#1a3c6e] appearance-none cursor-pointer font-semibold transition-all hover:bg-gray-100"
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>Family (4+)</option>
                  <option>Group</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                   <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="h-full">
              <button 
                type="submit"
                className="w-full h-[46px] bg-[#1a3c6e] hover:bg-[#153059] text-white font-bold rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
              >
                Search Deals
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
