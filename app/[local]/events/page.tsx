'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import { events } from '@/lib/mockData';

export default function EventsPage() {
  const t = useTranslations('events');
  const tCommon = useTranslations('common');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/35494419/pexels-photo-35494419.jpeg"
            alt="Concert crowd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl opacity-90">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding bg-(--color-gray-50)">
        <div className="container-custom">
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Event Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white rounded-lg px-4 py-2 text-center shadow-lg">
                        <p className="text-3xl font-bold text-(--color-primary)">
                          {new Date(event.date).getDate()}
                        </p>
                        <p className="text-xs text-(--color-gray-600) uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-2 p-8">
                    <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                    <p className="text-(--color-gray-700) mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-(--color-primary)/10 flex items-center justify-center shrink-0">
                          <Calendar className="w-5 h-5 text-(--color-primary)" />
                        </div>
                        <div>
                          <p className="text-xs text-(--color-gray-600) uppercase">{t('date')}</p>
                          <p className="font-semibold">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-(--color-secondary)/10 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-(--color-secondary)" />
                        </div>
                        <div>
                          <p className="text-xs text-(--color-gray-600) uppercase">{t('time')}</p>
                          <p className="font-semibold">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-(--color-accent)/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-(--color-accent)" />
                        </div>
                        <div>
                          <p className="text-xs text-(--color-gray-600) uppercase">{t('venue')}</p>
                          <p className="font-semibold text-sm">{event.venue}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-(--color-gray-600) mb-1">{t('price')}</p>
                        <p className="text-3xl font-bold text-(--color-primary)">{event.price}</p>
                      </div>
                      <Button size="lg" className="w-full sm:w-auto">
                        <Ticket className="w-5 h-5 mr-2" />
                        {t('getTickets')}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss an Event
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Download our app to get notified about upcoming events, exclusive pre-sales, and special offers.
            </p>
            <Button size="lg" className="bg-white text-(--color-primary) hover:bg-gray-100">
              {tCommon('downloadApp')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
