'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from '@/components/ui/icons/material';
import type { ManagedContent } from '@/lib/content-types';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_ABBREVIATION, SITE_SHORT_NAME } from '@/lib/site';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const [siteContent, setSiteContent] = useState<ManagedContent['site'] | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) return;
        const data = (await response.json()) as ManagedContent;
        if (mounted) setSiteContent(data.site);
      } catch {
        // Keep translation fallback.
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/music`, label: tNav('music') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/events`, label: tNav('events') },
    { href: `/${locale}/about`, label: tNav('about') },
  ];

  const socialLinks = [
    { icon: Facebook, href: siteContent?.socials.facebook || '#', label: 'Facebook' },
    { icon: Instagram, href: siteContent?.socials.instagram || '#', label: 'Instagram' },
    { icon: Youtube, href: siteContent?.socials.youtube || '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-(--color-gray-900) text-(--color-gray-300)">
      <div className="container-custom">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BrandLogo size={48} className="w-12 h-12 rounded-full shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">{SITE_SHORT_NAME}</h3>
                <p className="text-sm">({SITE_ABBREVIATION})</p>
              </div>
            </div>
            <p className="text-sm mb-4">{t('tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-(--color-primary) transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-(--color-primary) shrink-0 mt-0.5" />
                <span className="text-sm">{siteContent?.address || t('address')}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-(--color-primary) shrink-0" />
                <a
                  href={`mailto:${siteContent?.email || t('email')}`}
                  className="text-sm hover:text-(--color-primary) transition-colors"
                >
                  {siteContent?.email || t('email')}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-(--color-primary) shrink-0" />
                <a
                  href={`tel:${siteContent?.phone || t('phone')}`}
                  className="text-sm hover:text-(--color-primary) transition-colors"
                >
                  {siteContent?.phone || t('phone')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-(--color-gray-800) hover:bg-(--color-primary) flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-(--color-gray-800) py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">{t('copyright')}</p>
          <div className="flex space-x-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-sm hover:text-(--color-primary) transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-sm hover:text-(--color-primary) transition-colors"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
