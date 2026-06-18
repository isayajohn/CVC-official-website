export const LOCALES = ["en", "sw"] as const;

export type AppLocale = (typeof LOCALES)[number];
export type ServiceIconKey = "mic" | "building2" | "calendarCheck" | "ticket";
export type ServiceVariant = "primary" | "secondary";

export interface Song {
  id: string;
  title: string;
  album: string;
  duration: string;
  released: string;
  coverImage: string;
  audioPreview: string;
  price: string;
}

export interface Album {
  id: string;
  title: string;
  coverImage: string;
  released: string;
  tracks: number;
  price: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

export interface TicketEvent {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: number;
  originalPrice?: number;
  availableTickets: number;
  category: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Milestone {
  year: string;
  headline: string;
  intro: string;
  description: string;
  image: string;
}

export interface Ministry {
  icon: string;
  title: string;
  description: string;
}

export interface SiteContent {
  phone: string;
  email: string;
  address: string;
  socials: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: ServiceIconKey;
  image: string;
  variant: ServiceVariant;
}

export interface LocaleServicesContent {
  subtitle: string;
  ctaTitle: string;
  ctaDescription: string;
  items: ServiceItem[];
}

export interface ManagedContent {
  site: SiteContent;
  services: Record<AppLocale, LocaleServicesContent>;
}

export function isLocale(value: string | null | undefined): value is AppLocale {
  return value === "en" || value === "sw";
}
