export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    [key: string]: unknown;
}

export interface Auth {
    user?: User;
}

export interface SharedData {
    name: string;
    auth: Auth;
    [key: string]: unknown;
}
// Course
export interface Course {
  discount_price: any;
  id: number
  title: string
  category: string
  price: number
  rating: number
  sold: number
  videos: number
  status: string
  description?: string
  image?: string
  level?: string
  duration?: string
  students_count?: number
  instructor?: {
    name: string
    avatar: string
    role: string
  }
}


// Event
export interface Event {
  discount_price: any;
  id: number
  title: string
  type: string
  price: number
  start_date: string
  status: string
  description?: string
  image?: string
  category?: string
  location?: string
  time?: string
  speaker?: {
    name: string
    avatar: string
    role: string
  }
}

// Course
export interface Course {
    id: number;
    category: string;
    title: string;
    price: number;
    rating: number;
    sold: number;
    videos: number;
    status: string;
}

export type ServicePackageList = {
    [category: string]: ServicePackage[];
};

// Paket & Jasa
export interface ServicePackageFeature {
    name: string;
    status: boolean;
}

export interface ServicePackage {
    id: number;
    title: string;
    description: string;
    price: number;
    discount: number;
    highlight: boolean;
    features: ServicePackageFeature[];
}


export interface Testimonial {
    avatar: string;
    content: any;
    company: ReactNode;
    id: number;
    name: string;
    role: string;
    title: string;
    message: string;
    image: string;
}
