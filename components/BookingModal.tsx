
import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Users, User, Mail, Phone } from 'lucide-react';
import { BookingFormData, Package } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
  initialPersons?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedPackage, initialPersons }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    departureCity: '',
    persons: 1,
    travelDate: ''
  });

  // Reset/Update form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        persons: initialPersons || 1
      }));
    }
  }, [isOpen, initialPersons]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Booking submitted:", { package: selectedPackage, ...formData });
    alert("Thank you! Your booking request has been sent. Ahmad Travel Attock will contact you shortly.");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white flex justify-between items-center shrink-0">
          <div>
            <h2 className="text-xl font-bold">Book Your Trip</h2>
            {selectedPackage && <p className="text-blue-100 text-sm mt-1">Package: {selectedPackage.title}</p>}
          </div>
          <button onClick={onClose} className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User size={16} className="text-blue-600" /> Full Name
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                placeholder="John Doe"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail size={16} className="text-blue-600" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Phone size={16} className="text-blue-600" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="03184898594"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <MapPin size={16} className="text-blue-600" /> Departure City
                </label>
                <input
                  type="text"
                  name="departureCity"
                  required
                  value={formData.departureCity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="e.g., Islamabad"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Users size={16} className="text-blue-600" /> Travelers
                </label>
                <input
                  type="number"
                  name="persons"
                  min="1"
                  required
                  value={formData.persons}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
               <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600" /> Travel Date
                </label>
                <input
                  type="date"
                  name="travelDate"
                  required
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"
                />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all transform active:scale-[0.98]"
              >
                Confirm Booking Request
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                Our agent will contact you at 03184898594 to finalize details.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
