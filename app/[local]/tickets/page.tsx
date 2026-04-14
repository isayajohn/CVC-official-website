'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, Users, Search, Filter } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';

interface Event {
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

const mockEvents: Event[] = [
  {
    id: 1,
    name: 'Worship Night 2024',
    description: 'An evening of powerful worship and praise',
    date: '2024-03-15',
    time: '18:00',
    venue: 'Mlimani City Hall',
    image: 'https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg',
    price: 25000,
    availableTickets: 150,
    category: 'Concert',
  },
  {
    id: 2,
    name: 'Easter Celebration',
    description: 'Special Easter service with the choir',
    date: '2024-03-31',
    time: '09:00',
    venue: 'Central Church',
    image: 'https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg',
    price: 0,
    availableTickets: 500,
    category: 'Service',
  },
  {
    id: 3,
    name: 'Gospel Music Festival',
    description: 'Annual gospel music festival featuring multiple choirs',
    date: '2024-04-20',
    time: '14:00',
    venue: 'Kariakoo Grounds',
    image: 'https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg',
    price: 35000,
    originalPrice: 45000,
    availableTickets: 200,
    category: 'Festival',
  },
  {
    id: 4,
    name: 'Worship Workshop',
    description: 'Learn worship techniques from the experts',
    date: '2024-05-05',
    time: '10:00',
    venue: 'CVC Studio',
    image: 'https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg',
    price: 50000,
    availableTickets: 30,
    category: 'Workshop',
  },
  {
    id: 5,
    name: 'Charity Concert',
    description: 'Fundraiser for community outreach programs',
    date: '2024-05-18',
    time: '17:00',
    venue: 'Mikiki Mall',
    image: 'https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg',
    price: 20000,
    availableTickets: 100,
    category: 'Concert',
  },
  {
    id: 6,
    name: 'Christmas Gala',
    description: 'Annual Christmas celebration concert',
    date: '2024-12-20',
    time: '19:00',
    venue: 'Julius Nyerere International Convention Centre',
    image: 'https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg',
    price: 50000,
    originalPrice: 75000,
    availableTickets: 300,
    category: 'Concert',
  },
];

const categories = ['All', 'Concert', 'Service', 'Festival', 'Workshop'];

export default function TicketsPage() {
  const t = useTranslations('tickets');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const filteredEvents = mockEvents.filter((event) => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleBuyTicket = (event: Event) => {
    setSelectedEvent(event);
    setTicketQuantity(1);
  };

  const handlePurchase = () => {
    if (selectedEvent) {
      alert(`Successfully purchased ${ticketQuantity} ticket(s) for ${selectedEvent.name}!`);
      setSelectedEvent(null);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-(--color-gray-50)">
      {/* Hero Section */}
      <section className="relative py-16 gradient-secondary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Events Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 outline-none transition-all"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'gradient-secondary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-yellow-600">{event.category}</span>
                  </div>
                  {event.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      EARLY BIRD
                    </span>
                  )}
                </div>

                {/* Event Info */}
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{event.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span>{event.availableTickets} tickets left</span>
                    </div>
                  </div>

                  {/* Price and Buy */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      {event.price === 0 ? (
                        <span className="text-xl font-bold text-green-600">FREE</span>
                      ) : (
                        <>
                          <span className="text-xl font-bold text-yellow-600">
                            TZS {event.price.toLocaleString()}
                          </span>
                          {event.originalPrice && (
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              TZS {event.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => handleBuyTicket(event)}
                      disabled={event.availableTickets === 0}
                    >
                      <Ticket className="w-4 h-4 mr-1" />
                      {t('buyTicket')}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">{t('noEvents')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Purchase Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gradient-secondary p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedEvent.name}</h3>
              <p className="opacity-90">{formatDate(selectedEvent.date)}</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-yellow-500 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold w-12 text-center">{ticketQuantity}</span>
                  <button
                    onClick={() => setTicketQuantity(Math.min(selectedEvent.availableTickets, ticketQuantity + 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-yellow-500 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Price per ticket:</span>
                  <span className="font-semibold">
                    {selectedEvent.price === 0 ? 'FREE' : `TZS ${selectedEvent.price.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-xl text-yellow-600">
                    {selectedEvent.price === 0 ? 'FREE' : `TZS ${(selectedEvent.price * ticketQuantity).toLocaleString()}`}
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full" onClick={handlePurchase}>
                {t('confirmPurchase')}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}


