'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  FileText,
  Home,
  Logout,
  Notifications,
  Menu,
  X,
  Search,
  Person,
  BarChart3,
} from '@/components/ui/icons/material';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from '@/components/ui/BrandLogo';
import { SITE_NAME } from '@/lib/site';

interface AdminLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { href: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: 'content', label: 'Content Manager', icon: FileText },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Get current page name from pathname
  const currentPage = pathname.split('/').pop() || 'dashboard';

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push(`/${locale}/admin-login`);
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const sidebarLinks = menuItems.map((item) => ({
    ...item,
    href: `/${locale}/admin/${item.href === 'dashboard' ? '' : item.href}`,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <BrandLogo size={40} className="h-10 w-10 rounded-lg" priority />
                      <div>
                        <h1 className="text-white font-bold">Admin Panel</h1>
                        <p className="text-white/60 text-xs">{SITE_NAME}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSidebarOpen(false)}
                      className="p-2 text-white/80 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-2">
                  {sidebarLinks.map((item) => {
                    const isActive = pathname === item.href || (item.href === `/${locale}/admin` && currentPage === 'admin');
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* Bottom Actions */}
                <div className="p-4 border-t border-white/10">
                  <Link
                    href={`/${locale}`}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/10 rounded-xl transition-all mb-2"
                  >
                    <Home className="w-5 h-5" />
                    <span className="font-medium">View Website</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full text-white/70 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all"
                  >
                    <Logout className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-[280px] bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-800">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <BrandLogo size={40} className="h-10 w-10 rounded-lg" priority />
              <div>
                <h1 className="text-white font-bold">Admin Panel</h1>
                <p className="text-white/60 text-xs">{SITE_NAME}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.href || (item.href === `/${locale}/admin` && currentPage === 'admin');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-white/10">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 px-4 py-3 text-white/70 hover:bg-white/10 rounded-xl transition-all mb-2"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">View Website</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 w-full text-white/70 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all"
            >
              <Logout className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-[280px]">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
              <div>
                <h2 className="text-xl font-bold text-gray-900 capitalize">{currentPage === 'admin' ? 'Dashboard' : currentPage}</h2>
                <p className="text-sm text-gray-500">Manage your content and settings</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm text-gray-600 w-32"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-gray-50">
                <Notifications className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <Person className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500 capitalize">{locale}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
