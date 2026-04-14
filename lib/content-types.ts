export type AppLocale = 'en' | 'sw';
export type ServiceIconKey = 'mic' | 'building2' | 'calendarCheck' | 'ticket';
export type ServiceVariant = 'primary' | 'secondary';

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
