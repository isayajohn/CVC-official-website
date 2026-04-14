'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { 
  FileText, 
  Calendar, 
  Music, 
  Ticket,
  ChevronRight,
  TrendingUp,
  Users,
} from '@/components/ui/icons/material';
import type { ManagedContent } from '@/lib/content-types';

interface DashboardStats {
  servicesCount: number;
  eventsCount: number;
}

export default function AdminDashboard() {
  const locale = useLocale() as 'en' | 'sw';
  const [content, setContent] = useState<ManagedContent | null>(null);
  const [stats, setStats] = useState<DashboardStats>({ servicesCount: 0, eventsCount: 0 });

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/content');
        if (response.ok) {
          const data = await response.json();
          setContent(data);
          setStats({
            servicesCount: data.services[locale]?.items?.length || 0,
            eventsCount: data.events?.[locale]?.items?.length || 0,
          });
        }
      } catch (error) {
        console.error('Failed to load content:', error);
      }
    };
    load();
  }, [locale]);

  const menuItems = [
    { 
      href: `/${locale}/admin/content`, 
      label: 'Content Manager', 
      description: 'Manage site content, services, and contact info',
      icon: FileText,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      href: `/${locale}/events`, 
      label: 'Events', 
      description: 'View and manage upcoming events',
      icon: Calendar,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      href: `/${locale}/music`, 
      label: 'Music', 
      description: 'Browse music library and albums',
      icon: Music,
      color: 'from-pink-500 to-pink-600'
    },
    { 
      href: `/${locale}/tickets`, 
      label: 'Tickets', 
      description: 'View ticket sales and management',
      icon: Ticket,
      color: 'from-green-500 to-green-600'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
        <p className="text-white/80">Manage your choir website content and settings from this dashboard.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Services</p>
              <p className="text-3xl font-bold text-gray-900">{stats.servicesCount}</p>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Active content
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
              <FileText className="w-7 h-7 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Events</p>
              <p className="text-3xl font-bold text-gray-900">{stats.eventsCount}</p>
              <p className="text-xs text-purple-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Upcoming
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
              <Calendar className="w-7 h-7 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Language</p>
              <p className="text-3xl font-bold text-gray-900 uppercase">{locale}</p>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                Active locale
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
              <Users className="w-7 h-7 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-gray-200 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.label}
              </h4>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
              <div className="flex items-center mt-4 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Access</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Site Info */}
      {content && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Site Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <p className="font-medium text-gray-900">{content.site.phone}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <p className="font-medium text-gray-900">{content.site.email}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Address</p>
              <p className="font-medium text-gray-900">{content.site.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
