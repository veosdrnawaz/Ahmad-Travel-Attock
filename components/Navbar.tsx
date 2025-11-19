
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home, Gift } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onChatClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onChatClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a3c6e] shadow-lg py-3' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-white">
            
            {/* Mobile Menu Button (Left) */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 bg-white/10 rounded-md focus:outline-none hover:bg-white/20 backdrop-blur-sm"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1a3c6e] font-bold text-xl shadow-sm">
                AT
              </div>
              <div className="flex flex-col hidden sm:flex">
                <span className="font-bold text-lg leading-tight tracking-wide shadow-black drop-shadow-md">AHMAD TRAVEL</span>
                <span className="text-xs font-light tracking-widest opacity-90 shadow-black drop-shadow-md">ATTOCK</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-blue-200 transition-colors text-sm font-bold uppercase tracking-wider shadow-black drop-shadow-sm">Home</a>
              <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')} className="hover:text-blue-200 transition-colors text-sm font-bold uppercase tracking-wider shadow-black drop-shadow-sm">Packages</a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-blue-200 transition-colors text-sm font-bold uppercase tracking-wider shadow-black drop-shadow-sm">Services</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-blue-200 transition-colors text-sm font-bold uppercase tracking-wider shadow-black drop-shadow-sm">Contact</a>
              
              <a href="tel:03184898594" className="flex items-center gap-2 bg-blue-900/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-blue-900/80 transition-colors">
                <Phone size={16} className="text-green-400" />
                <span className="text-sm font-semibold">03184898594</span>
              </a>
            </div>

            {/* Login Button (Right) */}
            <button 
              onClick={onLoginClick}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-[#1a3c6e] transition-all shadow-black drop-shadow-sm"
            >
               Login
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-[80%] max-w-xs bg-[#1a3c6e] h-full text-white shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
            
            {/* Sidebar Header */}
            <div className="p-5 flex justify-between items-center border-b border-white/10">
               <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1a3c6e] font-bold text-xl shadow-sm">
                  <Home size={20} />
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white">
                 <X size={24} />
               </button>
            </div>

            {/* Menu Items */}
            <div className="py-4">
              <button onClick={(e) => handleNavClick(e as any, '#home')} className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-white text-left">
                <Home size={20} className="text-white/80" />
                <span className="font-medium">Home</span>
              </button>

               <button onClick={(e) => handleNavClick(e as any, '#packages')} className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-white text-left">
                <Gift size={20} className="text-white/80" />
                <span className="font-medium">Packages</span>
              </button>
              
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onChatClick();
                }}
                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-white text-left"
              >
                 <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full absolute -top-0.5 -right-0.5"></div>
                    <span className="font-medium">Chat with Advisor</span>
                 </div>
              </button>

               <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLoginClick();
                }}
                className="w-full flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-white text-left mt-4 border-t border-white/10"
              >
                <span className="font-medium">Login Account</span>
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#153059]">
               <p className="text-xs text-blue-200 mb-2">Need Help?</p>
               <a href="tel:03184898594" className="text-xl font-bold hover:text-green-400 transition-colors">03184898594</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
