
import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, User, CheckCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', password: '' }); // Reset form
      }, 1500);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setIsSuccess(false);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full p-1 z-10 transition-colors">
          <X size={20} />
        </button>

        <div className="p-6 pt-8 text-center">
           <div className="w-16 h-16 bg-[#1a3c6e] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg mx-auto mb-6">
             AT
           </div>
           <h2 className="text-2xl font-bold text-gray-900">
             {isSuccess ? 'Welcome!' : (isSignup ? 'Create Account' : 'Welcome Back')}
           </h2>
           <p className="text-gray-500 text-sm mt-2">
             {isSuccess 
               ? (isSignup ? 'Your profile is ready.' : 'You are logged in.')
               : (isSignup ? 'Sign up to track your bookings.' : 'Sign in to view your documents.')}
           </p>
        </div>

        {isSuccess ? (
          <div className="p-8 flex flex-col items-center justify-center pb-12 animate-in fade-in duration-500">
             <CheckCircle size={64} className="text-green-500 mb-4" />
             <p className="text-gray-600 font-medium">Loading Dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-4">
            
            {isSignup && (
              <div className="space-y-1 animate-in slide-in-from-left-2 duration-300">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required={isSignup}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3c6e] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isSignup && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#1a3c6e] focus:ring-[#1a3c6e]" />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-[#1a3c6e] font-semibold hover:underline">Forgot Password?</button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a3c6e] hover:bg-[#153059] text-white font-bold py-3.5 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  {isSignup ? 'Sign Up' : 'Sign In'} <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        )}

        {!isSuccess && (
          <div className="p-4 bg-gray-50 text-center text-sm text-gray-600 border-t border-gray-100">
            {isSignup ? 'Already have an account? ' : "No account yet? "}
            <button onClick={toggleMode} className="text-[#1a3c6e] font-bold hover:underline">
              {isSignup ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
