'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ShoppingCart, Lock } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import AudioPlayer from '@/components/ui/AudioPlayer';
import { songs, albums } from '@/lib/mockData';

export default function MusicPage() {
  const t = useTranslations('music');
  const tCommon = useTranslations('common');
  const [activeTab, setActiveTab] = useState<'songs' | 'albums'>('songs');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-(--color-gray-900) text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('title')}</h1>
            <p className="text-xl text-gray-300">{t('subtitle')}</p>
            <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-yellow-400">
              <Lock className="w-4 h-4" />
              <span>30-second previews only. Download the app for full access.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-(--color-gray-200)">
        <div className="container-custom">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('songs')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                activeTab === 'songs'
                  ? 'border-(--color-primary) text-(--color-primary)'
                  : 'border-transparent text-(--color-gray-600) hover:text-(--color-gray-900)'
              }`}
            >
              {t('songsTab')}
            </button>
            <button
              onClick={() => setActiveTab('albums')}
              className={`py-4 px-2 font-semibold border-b-2 transition-colors ${
                activeTab === 'albums'
                  ? 'border-(--color-primary) text-(--color-primary)'
                  : 'border-transparent text-(--color-gray-600) hover:text-(--color-gray-900)'
              }`}
            >
              {t('albumsTab')}
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-(--color-gray-50)">
        <div className="container-custom">
          {activeTab === 'songs' ? (
            <div className="space-y-4">
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Album Cover */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={song.coverImage}
                        alt={song.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Song Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl mb-1">{song.title}</h3>
                      <p className="text-(--color-gray-600) text-sm mb-3">{song.album}</p>
                      
                      {/* Audio Player */}
                      <AudioPlayer
                        src={song.audioPreview}
                        title={song.title}
                        maxDuration={30}
                      />

                      <div className="flex items-center space-x-4 mt-3 text-sm text-(--color-gray-600)">
                        <span>{t('duration')}: {song.duration}</span>
                        <span>•</span>
                        <span>{t('released')}: {song.released}</span>
                      </div>
                    </div>

                    {/* Price & Buy Button */}
                    <div className="flex flex-col items-end space-y-3 shrink-0">
                      <span className="text-2xl font-bold text-(--color-primary)">{song.price}</span>
                      <Button variant="primary" size="sm" className="w-full lg:w-auto">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {tCommon('buyMusic')}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="relative h-64">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-2xl mb-2">{album.title}</h3>
                      <p className="text-gray-200 text-sm">
                        {album.tracks} {t('tracks')} • {t('released')}: {album.released}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-(--color-primary)">{album.price}</span>
                    </div>
                    <Button className="w-full">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {tCommon('buyMusic')}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download App CTA */}
      <section className="section-padding gradient-secondary">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Lock className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want Full Access?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
              Download our mobile app to enjoy unlimited streaming of all our songs and albums.
            </p>
            <Button size="lg" className="bg-white text-(--color-secondary-dark) hover:bg-gray-100">
              {tCommon('downloadApp')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
