'use client';

import { useEffect, useMemo, useState, type ComponentType } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mic, Building2, CalendarCheck, Ticket, Check, Phone } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import type { ManagedContent, ServiceIconKey, ServiceItem } from '@/lib/content-types';

const iconMap: Record<ServiceIconKey, ComponentType<{ className?: string }>> = {
  mic: Mic,
  building2: Building2,
  calendarCheck: CalendarCheck,
  ticket: Ticket,
};

export default function ServicesPage() {
  const locale = useLocale() as 'en' | 'sw';
  const t = useTranslations('services');
  const tCommon = useTranslations('common');
  const [managedContent, setManagedContent] = useState<ManagedContent | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) return;
        const data = (await response.json()) as ManagedContent;
        if (mounted) setManagedContent(data);
      } catch {
        // Keep translation fallback when API is unavailable.
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const fallbackItems = useMemo<ServiceItem[]>(
    () => [
      {
        id: 'recording-studio',
        title: t('studioTitle'),
        description: t('studioDescription'),
        features: [t('studioFeatures.0'), t('studioFeatures.1'), t('studioFeatures.2'), t('studioFeatures.3')],
        pricing: t('studioPricing'),
        icon: 'mic',
        image:
          'https://images.unsplash.com/photo-1764669930307-4ba89f8469af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8UHJvZmVzc2lvbmFsJTIwcmVjb3JkaW5nJTIwc3R1ZGlvJTIwd2l0aCUyMG1pY3JvcGhvbmUlMjBhbmQlMjBlcXVpcG1lbnQlMkMlMjBtdXNpYyUyMHByb2R1Y3Rpb24lMjBtb2Rlcm58ZW58MHwwfHx8MTc3MTE4NjI3N3ww&ixlib=rb-4.1.0&q=85',
        variant: 'primary',
      },
      {
        id: 'event-hall',
        title: t('hallTitle'),
        description: t('hallDescription'),
        features: [t('hallFeatures.0'), t('hallFeatures.1'), t('hallFeatures.2'), t('hallFeatures.3')],
        pricing: t('hallPricing'),
        icon: 'building2',
        image: 'https://images.pexels.com/photos/5026349/pexels-photo-5026349.jpeg',
        variant: 'secondary',
      },
      {
        id: 'event-management',
        title: t('eventManagementTitle'),
        description: t('eventManagementDescription'),
        features: [
          t('eventManagementFeatures.0'),
          t('eventManagementFeatures.1'),
          t('eventManagementFeatures.2'),
          t('eventManagementFeatures.3'),
        ],
        pricing: t('eventManagementPricing'),
        icon: 'calendarCheck',
        image: '/images/pexels/event-1.jpg',
        variant: 'primary',
      },
      {
        id: 'ticketing-services',
        title: t('ticketingTitle'),
        description: t('ticketingDescription'),
        features: [t('ticketingFeatures.0'), t('ticketingFeatures.1'), t('ticketingFeatures.2'), t('ticketingFeatures.3')],
        pricing: t('ticketingPricing'),
        icon: 'ticket',
        image: '/images/pexels/event-3.jpg',
        variant: 'secondary',
      },
    ],
    [t]
  );

  const servicesLocaleContent = managedContent?.services?.[locale];
  const serviceItems = servicesLocaleContent?.items?.length
    ? servicesLocaleContent.items
    : fallbackItems;
  const subtitle = servicesLocaleContent?.subtitle || t('subtitle');
  const ctaTitle =
    servicesLocaleContent?.ctaTitle ||
    (locale === 'sw' ? 'Uko Tayari Kuhifadhi Huduma Zetu?' : 'Ready to Book Our Services?');
  const ctaDescription =
    servicesLocaleContent?.ctaDescription ||
    (locale === 'sw'
      ? 'Wasiliana nasi leo kujadili mahitaji yako ya kurekodi au tukio. Timu yetu iko tayari kukusaidia kuunda kitu cha kipekee.'
      : 'Contact us today to discuss your recording or event needs. Our team is ready to help you create something amazing.');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl opacity-90">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceItems.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];
              const iconAccentClass =
                service.variant === 'secondary' ? 'text-(--color-secondary)' : 'text-(--color-primary)';
              const iconBgClass =
                service.variant === 'secondary'
                  ? 'bg-(--color-secondary)/10'
                  : 'bg-(--color-primary)/10';
              const buttonVariant = service.variant === 'secondary' ? 'secondary' : 'primary';
              const animatedX = index % 2 === 0 ? -30 : 30;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: animatedX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="relative h-64">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-(--color-gray-700) mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 rounded-full ${iconBgClass} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Check className={`w-4 h-4 ${iconAccentClass}`} />
                          </div>
                          <span className="text-(--color-gray-700)">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-(--color-gray-50) rounded-lg p-4 mb-6">
                      <p className="text-sm text-(--color-gray-600) mb-2">Pricing</p>
                      <p className={`text-2xl font-bold ${iconAccentClass}`}>{service.pricing}</p>
                    </div>

                    <Button variant={buttonVariant} className="w-full" size="lg">
                      <Phone className="w-5 h-5 mr-2" />
                      {tCommon('bookNow')}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-(--color-gray-900) text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              {ctaDescription}
            </p>
            <Button size="lg" className="bg-white text-(--color-gray-900) hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              {tCommon('contactUs')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
