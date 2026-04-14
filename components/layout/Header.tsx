'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe, User, ShoppingBag } from '@/components/ui/icons/material';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_ABBREVIATION, SITE_SHORT_NAME } from '@/lib/site';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  const navLinks = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/music`, label: t('music') },
    { href: `/${locale}/shop`, label: t('shop') },
    { href: `/${locale}/tickets`, label: t('tickets') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/events`, label: t('events') },
    { href: `/${locale}/about`, label: t('about') },
  ];
  const adminLoginHref = `/${locale}/admin-login`;

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <BrandLogo size={48} className="w-12 h-12 rounded-full shrink-0" priority />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-(--color-gray-900) leading-tight">
                {SITE_SHORT_NAME}
              </h1>
              <p className="text-xs text-(--color-gray-600)">({SITE_ABBREVIATION})</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-(--color-primary) ${
                  pathname === link.href ? 'text-(--color-primary)' : 'text-(--color-gray-700)'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href={`/${locale}/shop`}
              className="p-2 rounded-lg hover:bg-(--color-gray-100) transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-(--color-gray-700)" />
            </Link>

            <Link
              href={adminLoginHref}
              className="hidden sm:flex items-center space-x-2 px-4 py-2 gradient-primary text-white rounded-lg hover:shadow-lg transition-all"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">{t('adminLogin')}</span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-(--color-gray-100) transition-colors"
                aria-label="Switch language"
              >
                <Globe className="w-5 h-5 text-(--color-gray-600)" />
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-(--color-gray-200) overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        switchLocale('en');
                        setIsLangMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-(--color-gray-50) transition-colors"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        switchLocale('sw');
                        setIsLangMenuOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-(--color-gray-50) transition-colors"
                    >
                      Kiswahili
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-(--color-gray-100) transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-(--color-gray-700)" />
              ) : (
                <Menu className="w-6 h-6 text-(--color-gray-700)" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-(--color-gray-200)"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href
                        ? 'bg-(--color-primary) text-white'
                        : 'hover:bg-(--color-gray-100) text-(--color-gray-700)'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={adminLoginHref}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 px-4 py-3 gradient-primary text-white rounded-lg"
                >
                  <User className="w-4 h-4" />
                  <span>{t('adminLogin')}</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
