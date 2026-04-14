'use client';

import { useState } from 'react';
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
  Cross,
  ArrowBack,
  ArrowForward
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
    {
      year: '2010',
      headline: 'Where the calling began',
      intro: `A few committed voices started meeting in Dar es Salaam with one desire: to sing the gospel with honesty, warmth, and excellence.`,
      description: `${SITE_SHORT_NAME} began in borrowed rehearsal spaces, but the vision was already bigger than the room. Those early sessions shaped our sound, our discipline, and our heart for ministry through music.`,
      image: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      year: '2013',
      headline: 'The first songs reached people',
      intro: 'Our debut album turned rehearsed melodies into songs people could carry into prayer meetings, homes, and long journeys.',
      description: 'Recording our first project taught us how to translate live worship into timeless listening. It opened new doors, introduced the choir to wider audiences, and confirmed that the message was resonating far beyond a single congregation.',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      year: '2015',
      headline: 'Worship found every road',
      intro: 'What started locally became a national movement as we carried ministry from city stages to community gatherings across Tanzania.',
      description: 'Our first national tour brought us face to face with the people behind the music. We learned to serve different churches, different regions, and different stories while staying rooted in the same gospel message.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      year: '2018',
      headline: 'The year everything changed',
      intro: 'Opening our own studio gave the choir a creative home and a new level of freedom to write, record, and mentor with intention.',
      description: `With a dedicated production space, ${SITE_SHORT_NAME} grew from being only a performing choir into a stronger music ministry platform. We could refine our sound, support emerging voices, and create with consistency for the seasons ahead.`,
      image: 'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      year: '2020',
      headline: 'A decade of grace',
      intro: 'Ten years in, the story was no longer just about milestones. It had become a testimony of endurance, worship, and transformed lives.',
      description: 'Our anniversary season gave us room to look back with gratitude and forward with renewed responsibility. Every song, rehearsal, outreach, and prayer had become part of a shared legacy we were still building together.',
      image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=900'
    },
    {
      year: '2024',
      headline: 'The ministry crossed borders',
      intro: 'New invitations across East Africa expanded our reach while keeping the mission clear: worship deeply and serve people faithfully.',
      description: `As the choir stepped into a broader regional chapter, the goal stayed the same. We are still building moments that point people to Christ, only now with a bigger stage, wider partnerships, and a growing community around the music.`,
      image: 'https://images.pexels.com/photos/236339/pexels-photo-236339.jpeg?auto=compress&cs=tinysrgb&w=900'
    }
  ];

  const [activeHistoryIndex, setActiveHistoryIndex] = useState(3);
  const activeHistoryMilestone = historyMilestones[activeHistoryIndex];

  const stepHistory = (direction: number) => {
    setActiveHistoryIndex((current) => (current + direction + historyMilestones.length) % historyMilestones.length);
  };

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
      <section className="section-padding bg-[#dbe5e0]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-[#151515] px-6 py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:px-10 md:py-10 lg:px-12 lg:py-12"
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 30%),
                  linear-gradient(180deg, rgba(255,255,255,0.05), transparent 28%),
                  linear-gradient(90deg, rgba(255,255,255,0.06), transparent 18%, transparent 82%, rgba(255,255,255,0.06))
                `
              }}
            />
            <div className="absolute inset-y-0 left-5 hidden w-px bg-white/8 md:block" />
            <div className="absolute inset-y-0 right-5 hidden w-px bg-white/8 md:block" />

            <div className="relative">
              <div className="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-sm font-medium uppercase tracking-[0.35em] text-white/45">
                    Our Journey
                  </span>
                  <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">Our History</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                    From humble beginnings to becoming one of Tanzania&apos;s most beloved gospel choirs.
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start md:self-auto">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => stepHistory(-1)}
                    aria-label="Show previous milestone"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-white/35 hover:text-white"
                  >
                    <ArrowBack className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={() => stepHistory(1)}
                    aria-label="Show next milestone"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/75 transition hover:border-white/35 hover:text-white"
                  >
                    <ArrowForward className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.9fr_1fr] lg:items-center">
                <motion.div
                  key={`history-copy-left-${activeHistoryMilestone.year}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <span className="text-xs uppercase tracking-[0.35em] text-white/40">
                    Chapter {activeHistoryIndex + 1}
                  </span>
                  <h3 className="mt-5 max-w-[8ch] text-5xl font-semibold leading-[0.95] text-white md:text-6xl">
                    {activeHistoryMilestone.headline}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-8 text-white/72 md:text-lg">
                    {activeHistoryMilestone.intro}
                  </p>
                </motion.div>

                <motion.div
                  key={`history-image-${activeHistoryMilestone.year}`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="relative mx-auto w-full max-w-sm"
                >
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(111,221,213,0.28),transparent_55%)] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                    <div className="aspect-[4/5]">
                      <img
                        src={activeHistoryMilestone.image}
                        alt={`${activeHistoryMilestone.year} milestone for ${SITE_NAME}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm font-semibold tracking-[0.3em] text-white/85 backdrop-blur-sm">
                      {activeHistoryMilestone.year}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  key={`history-copy-right-${activeHistoryMilestone.year}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
                  className="max-w-xl lg:ml-auto"
                >
                  <p className="text-lg leading-8 text-white/78 md:text-[1.35rem] md:leading-9">
                    {activeHistoryMilestone.description}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#8fdcd5]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8fdcd5]" />
                    Living the message through music
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="relative">
                  <div className="absolute left-0 right-0 top-5 h-px bg-white/14" />

                  <div className="relative flex flex-wrap items-start justify-between gap-x-4 gap-y-6">
                    {historyMilestones.map((milestone, index) => {
                      const isActive = index === activeHistoryIndex;

                      return (
                        <button
                          key={milestone.year}
                          type="button"
                          onClick={() => setActiveHistoryIndex(index)}
                          className="group min-w-[72px] bg-transparent text-left"
                          aria-label={`Show story for ${milestone.year}`}
                        >
                          <div className={`text-sm font-semibold transition ${isActive ? 'text-white' : 'text-white/52 group-hover:text-white/85'}`}>
                            {milestone.year}
                          </div>
                          <div className="mt-4 flex justify-center md:justify-start">
                            <span
                              className={`block h-3.5 w-3.5 rounded-full border transition ${
                                isActive
                                  ? 'border-[#8fdcd5] bg-[#8fdcd5] shadow-[0_0_0_7px_rgba(143,220,213,0.16)]'
                                  : 'border-white/35 bg-[#151515] group-hover:border-white/70'
                              }`}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-sm leading-7 text-white/55">
                  Explore the defining moments that shaped our sound, our mission, and our ministry.
                </p>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white hover:text-[#151515]"
                  >
                    Read Our Full Story
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
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
