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

// Event
export interface Event {
    id: number;
    type: string;
    title: string;
    price: number;
    start_date: Date;
    status: string;
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
    id: number;
    name: string;
    role: string;
    title: string;
    message: string;
    image: string;
}
