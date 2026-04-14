'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { History, Target, Eye, Heart, Download, Music, Users, Mic, Cross } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import { SITE_NAME, SITE_SHORT_NAME } from '@/lib/site';

export default function AboutPage() {
  const t = useTranslations('about');

  const leaders = [
    {
      name: 'John Mwakidudu',
      role: 'Choir Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Founded the choir in 2010 with a vision to spread the gospel through music across Tanzania and beyond.'
    },
    {
      name: 'Mary Anthony',
      role: 'Lead Vocalist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A gifted vocalist with over 12 years of experience leading worship and recording albums.'
    },
    {
      name: 'David Kimani',
      role: 'Music Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Talented composer and arranger behind our signature sound and multiple award-winning albums.'
    },
    {
      name: 'Sarah Jackson',
      role: 'Worship Leader',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Guiding congregations into meaningful worship with her prophetic ministry and leadership.'
    },
    {
      name: 'James Wilson',
      role: 'Administrator',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing the day-to-day operations and coordinating events with grace and efficiency.'
    },
    {
      name: 'Grace Emmanuel',
      role: 'Youth Coordinator',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Inspiring the next generation of worship leaders and developing youth ministry programs.'
    }
  ];

  const ministries = [
    {
      icon: Music,
      title: 'Worship Ministry',
      description: 'Leading congregations in heartfelt worship through contemporary and traditional gospel music that touches souls.',
      color: 'primary'
    },
    {
      icon: Mic,
      title: 'Music Production',
      description: 'Creating original gospel music and supporting local artists with professional recording services.',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Touching lives through charity programs, feeding the hungry, and sharing the love of Christ.',
      color: 'accent'
    },
    {
      icon: Cross,
      title: 'Discipleship',
      description: 'Nurturing spiritual growth through Bible study groups and developing the next generation of leaders.',
      color: 'primary'
    }
  ];

  const DownloadAppSection = () => (
    <section className="gradient-primary text-white py-16">
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
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg"
            alt={SITE_NAME}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-primary)/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-secondary)/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{t('title')}</h1>
            <p className="text-2xl opacity-90">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <History className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">{t('historyTitle')}</h2>
              </div>
              <p className="text-(--color-gray-700) text-lg leading-relaxed">
                {t('historyText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg"
                  alt="Choir performing"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 gradient-secondary rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-(--color-gray-50)">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg"
                  alt="Choir worship"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-48 h-48 gradient-primary rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">{t('missionTitle')}</h2>
              </div>
              <p className="text-(--color-gray-700) text-lg leading-relaxed">
                {t('missionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-(--color-accent) flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">{t('visionTitle')}</h2>
              </div>
              <p className="text-(--color-gray-700) text-lg leading-relaxed">
                {t('visionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg"
                  alt="Choir vision"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-(--color-accent) rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding gradient-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '14+', label: 'Years of Ministry' },
              { number: '50+', label: 'Choir Members' },
              { number: '10+', label: 'Albums Released' },
              { number: '100+', label: 'Events Performed' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-(--color-primary) font-semibold text-sm uppercase tracking-wider">
              Meet the Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Leaders</h2>
            <p className="text-(--color-gray-600) mt-4 max-w-2xl mx-auto">
              The dedicated team behind {SITE_NAME}, committed to spreading the gospel through music
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      <DownloadAppSection />

      {/* Join Us CTA */}
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
              Join our community and experience the power of worship through music. Whether you want to sing, serve, or support, there&apos;s a place for you at {SITE_SHORT_NAME}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="min-w-[200px]">
                Join Our Choir
              </Button>
              <Link href="/events">
                <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-(--color-gray-900)">
                  View Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
