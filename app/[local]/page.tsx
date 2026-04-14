'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Play, 
  Calendar, 
  Music, 
  Users, 
  Heart, 
  Award,
  ChevronRight,
  Download,
  Star,
  Mic,
  Cross
} from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import { SITE_NAME, SITE_SHORT_NAME } from '@/lib/site';

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const tAbout = useTranslations('about');

  const leaders = [
    {
      name: 'John Mwakidudu',
      role: 'Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Founded the choir in 2010 with a vision to spread the gospel through music'
    },
    {
      name: 'Mary Anthony',
      role: 'Lead Vocalist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Bringing soul and inspiration to every performance'
    },
    {
      name: 'David Kimani',
      role: 'Music Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Talented composer and arranger behind our signature sound'
    },
    {
      name: 'Sarah Jackson',
      role: 'Worship Leader',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Guiding our congregation into meaningful worship'
    }
  ];

  const historyMilestones = [
    { year: '2010', title: 'Founded', description: `${SITE_NAME} was established in Dar es Salaam` },
    { year: '2013', title: 'First Album', description: 'Released our debut album "NdiMwu" with 12 tracks' },
    { year: '2015', title: 'National Tour', description: 'Completed our first national tour across Tanzania' },
    { year: '2018', title: 'Studio Launch', description: 'Opened our professional recording studio' },
    { year: '2020', title: '10th Anniversary', description: 'Celebrated a decade of ministry and worship' },
    { year: '2024', title: 'East Africa', description: 'Expanded our ministry across East Africa' }
  ];

  const ministries = [
    {
      icon: Music,
      title: 'Worship Ministry',
      description: 'Leading congregations in heartfelt worship through contemporary and traditional gospel music',
      color: 'primary'
    },
    {
      icon: Mic,
      title: 'Music Production',
      description: 'Creating original gospel music and supporting local artists with professional recording services',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Touching lives through charity programs and sharing the love of Christ',
      color: 'accent'
    },
    {
      icon: Cross,
      title: 'Discipleship',
      description: 'Nurturing spiritual growth and developing the next generation of worship leaders',
      color: 'primary'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt={SITE_NAME}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-secondary)/20 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-(--color-primary)/20 text-white rounded-full text-sm font-medium mb-6">
                Welcome to {SITE_NAME}
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                {t('heroTitle')}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="min-w-[200px]">
                  <Play className="w-5 h-5 mr-2" />
                  {tCommon('listenNow')}
                </Button>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-(--color-gray-900)">
                    {tCommon('learnMore')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Us Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={`About ${SITE_NAME}`}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 gradient-primary rounded-2xl -z-10 opacity-80" />
              <div className="absolute -top-8 -right-8 w-48 h-48 gradient-secondary rounded-2xl -z-10 opacity-80" />
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-xl p-6 z-20">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-(--color-primary)">14+</p>
                    <p className="text-sm text-(--color-gray-600)">Years</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-(--color-secondary)">50+</p>
                    <p className="text-sm text-(--color-gray-600)">Members</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                Spreading the Gospel Through Music
              </h2>
              <p className="text-(--color-gray-600) text-lg mb-6 leading-relaxed">
                {tAbout('historyText')}
              </p>
              <p className="text-(--color-gray-600) mb-8 leading-relaxed">
                {tAbout('missionText')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Passionate Worship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full gradient-secondary flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Excellence</span>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" className="group">
                  Learn More About Us
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="section-padding bg-(--color-gray-50)">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Meet Our Leaders</h2>
            <p className="text-(--color-gray-600) mt-4 max-w-2xl mx-auto">
              The dedicated team behind {SITE_NAME}, committed to spreading the gospel through music
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">{leader.bio}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center">{leader.name}</h3>
                <p className="text-(--color-primary) text-center font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <Button variant="outline">
                View Full Team
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our History</h2>
            <p className="text-(--color-gray-600) mt-4 max-w-2xl mx-auto">
              From humble beginnings to becoming one of Tanzania&apos;s most beloved gospel choirs
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-(--color-primary)/20 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {historyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center lg:justify-${
                    index % 2 === 0 ? 'start' : 'end'
                  }`}
                >
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-(--color-primary) hover:shadow-xl transition-shadow">
                      <span className="inline-block px-3 py-1 bg-(--color-primary)/10 text-(--color-primary) rounded-full text-sm font-bold mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-(--color-gray-600)">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-(--color-primary) rounded-full border-4 border-white shadow-lg hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/about">
              <Button>
                Read Our Full Story
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Ministry Section */}
      <section className="section-padding bg-(--color-gray-900) text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-secondary) font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Ministry</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              We are committed to spreading the gospel through various ministry programs and outreach initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ministries.map((ministry, index) => (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors border border-white/10"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                  ministry.color === 'primary' ? 'gradient-primary' :
                  ministry.color === 'secondary' ? 'gradient-secondary' :
                  'bg-(--color-accent)'
                }`}>
                  <ministry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{ministry.title}</h3>
                <p className="text-white/70 leading-relaxed">{ministry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
                Stay Connected
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Download Our App
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get exclusive access to our music library, event updates, and stay connected with our ministry. Available on iOS and Android.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center space-x-3 bg-black/30 hover:bg-black/40 rounded-xl px-6 py-4 transition-colors border border-white/20">
                  <Download className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>
                <button className="flex items-center justify-center space-x-3 bg-black/30 hover:bg-black/40 rounded-xl px-6 py-4 transition-colors border border-white/20">
                  <Download className="w-8 h-8" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </button>
              </div>

              <div className="flex items-center space-x-4 mt-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm opacity-80">Join 10,000+ users who have downloaded our app</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mobile App"
                  className="rounded-2xl shadow-2xl mx-auto max-w-sm"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-(--color-secondary) rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-(--color-accent) rounded-full blur-3xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div>
              <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
                {t('upcomingEventsTitle')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Upcoming Events</h2>
              <p className="text-(--color-gray-600) mt-4 max-w-xl">
                {t('upcomingEventsSubtitle')}
              </p>
            </div>
            <Link href="/events" className="mt-6 md:mt-0">
              <Button variant="outline">
                View All Events
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'MAR',
                day: '15',
                title: 'Sunday Worship Service',
                location: 'Central Church, Dar es Salaam',
                time: '9:00 AM'
              },
              {
                date: 'MAR',
                day: '22',
                title: 'Gospel Night Live',
                location: 'Mikondeci Auditorium',
                time: '7:00 PM'
              },
              {
                date: 'APR',
                day: '05',
                title: 'Easter Celebration',
                location: 'National Stadium, Dar es Salaam',
                time: '6:00 PM'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-(--color-gray-100)"
              >
                <div className="flex">
                  <div className="w-24 bg-(--color-primary) text-white flex flex-col items-center justify-center py-6">
                    <span className="text-sm font-medium">{event.date}</span>
                    <span className="text-4xl font-bold">{event.day}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-(--color-primary) transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-(--color-gray-600)">
                      <p className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.time}
                      </p>
                      <p className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-(--color-gray-50)">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">What People Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: `${SITE_NAME} has truly been a blessing to our family. Their music brings us closer to God every day.`,
                name: "Grace M.",
                role: "Congregant",
                image: "https://i.pravatar.cc/100?img=5"
              },
              {
                quote: `The worship experience at ${SITE_SHORT_NAME} is unmatched. Their passion for God is evident in every performance.`,
                name: "Pastor John",
                role: "Church Leader",
                image: "https://i.pravatar.cc/100?img=8"
              },
              {
                quote: "Their album &apos;NdiMwu&apos; changed my life. I recommend it to everyone seeking spiritual uplifting music.",
                name: "Michael T.",
                role: "Music Lover",
                image: "https://i.pravatar.cc/100?img=12"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-(--color-secondary) fill-current" />
                  ))}
                </div>
                <p className="text-(--color-gray-600) mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-(--color-gray-600)">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-(--color-gray-900) text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-(--color-secondary)" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of Our Journey
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
              Whether you&apos;re looking to worship, join our choir, or support our ministry, there&apos;s a place for you at {SITE_SHORT_NAME}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px]">
                Join Our Choir
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-(--color-gray-900)">
                  {tCommon('contactUs')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
