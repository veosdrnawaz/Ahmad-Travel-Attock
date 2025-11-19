
export interface Package {
  id: number;
  title: string;
  subTitle?: string; // e.g. "10 Nights | Flight Package..."
  tag?: string; // e.g. "Fixed Departure"
  image: string;
  route: string; // e.g. "Jeddah -> Makkah -> Madinah"
  price: string;
  priceNumber: number; // Added for filtering/sorting if needed
  month: string; // For filtering
  type: string; // Economy, Premium, etc.
  rating: number;
  amenities: string[]; // keeping for backward compat or general use
  inclusions: {
    flight: boolean;
    visa: boolean;
    transfer: boolean;
    hotel: boolean;
    meals: boolean;
  };
  distances: {
    makkah?: string;
    madinah?: string;
  };
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  departureCity: string;
  persons: number;
  travelDate: string;
}

export enum PackageType {
  Holiday = "Holiday",
  Umrah = "Umrah",
  Hajj = "Hajj",
  Business = "Business"
}

export interface SearchFilters {
  month: string;
  packageType: string;
  pilgrims: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
