'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { Check, Phone, Mail, MapPin } from '@/components/ui/icons/material';
import Button from '@/components/ui/Button';
import type { ManagedContent, ServiceItem } from '@/lib/content-types';

export default function ContentManagerPage() {
  const locale = useLocale() as 'en' | 'sw';
  const [content, setContent] = useState<ManagedContent | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch('/api/content');
        if (!response.ok) {
          setStatus('Failed to load content.');
          return;
        }
        const data = (await response.json()) as ManagedContent;
        setContent(data);
      } catch {
        setStatus('Failed to load content.');
      }
    };
    load();
  }, []);

  const updateService = (index: number, updater: (current: ServiceItem) => ServiceItem) => {
    setContent((prev) => {
      if (!prev) return prev;
      const current = prev.services[locale].items[index];
      const nextItems = [...prev.services[locale].items];
      nextItems[index] = updater(current);
      return {
        ...prev,
        services: {
          ...prev.services,
          [locale]: {
            ...prev.services[locale],
            items: nextItems,
          },
        },
      };
    });
  };

  const save = async () => {
    if (!content) return;
    setIsSaving(true);
    setStatus('');
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      setStatus(response.ok ? 'Saved successfully.' : 'Save failed.');
    } catch {
      setStatus('Save failed.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading content manager...</p>
        </div>
      </div>
    );
  }

  const localeServices = content.services[locale];

  return (
    <div className="space-y-6">
      {/* Status Message */}
      {status && (
        <div className={`flex items-center gap-2 p-4 rounded-lg ${status.includes('success') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">{status}</span>
        </div>
      )}

      {/* Site Contact & Social */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Site Contact & Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Phone className="w-4 h-4 inline mr-1" /> Phone
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.phone}
              onChange={(e) => setContent({ ...content, site: { ...content.site, phone: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="w-4 h-4 inline mr-1" /> Email
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.email}
              onChange={(e) => setContent({ ...content, site: { ...content.site, email: e.target.value } })}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin className="w-4 h-4 inline mr-1" /> Address
            </label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.address}
              onChange={(e) => setContent({ ...content, site: { ...content.site, address: e.target.value } })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.socials.facebook}
              onChange={(e) =>
                setContent({ ...content, site: { ...content.site, socials: { ...content.site.socials, facebook: e.target.value } } })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.socials.instagram}
              onChange={(e) =>
                setContent({ ...content, site: { ...content.site, socials: { ...content.site.socials, instagram: e.target.value } } })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={content.site.socials.youtube}
              onChange={(e) =>
                setContent({ ...content, site: { ...content.site, socials: { ...content.site.socials, youtube: e.target.value } } })
              }
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Services ({locale.toUpperCase()})
          <span className="ml-2 text-xs font-normal text-gray-500">Editing content for {locale === 'en' ? 'English' : 'Swahili'}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Services Subtitle</label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={localeServices.subtitle}
              onChange={(e) =>
                setContent({
                  ...content,
                  services: {
                    ...content.services,
                    [locale]: { ...localeServices, subtitle: e.target.value },
                  },
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Title</label>
            <input
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={localeServices.ctaTitle}
              onChange={(e) =>
                setContent({
                  ...content,
                  services: {
                    ...content.services,
                    [locale]: { ...localeServices, ctaTitle: e.target.value },
                  },
                })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">CTA Description</label>
            <textarea
              rows={3}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
              value={localeServices.ctaDescription}
              onChange={(e) =>
                setContent({
                  ...content,
                  services: {
                    ...content.services,
                    [locale]: { ...localeServices, ctaDescription: e.target.value },
                  },
                })
              }
            />
          </div>
        </div>

        <div className="space-y-6">
          {localeServices.items.map((item, index) => (
            <div key={item.id} className="p-5 border border-gray-100 rounded-xl bg-gray-50/50">
              <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-gray-900">Service #{index + 1}</p>
                <span className="text-xs text-gray-500">{item.id}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    value={item.title}
                    onChange={(e) => updateService(index, (current) => ({ ...current, title: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pricing</label>
                  <input
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    value={item.pricing}
                    onChange={(e) => updateService(index, (current) => ({ ...current, pricing: e.target.value }))}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    value={item.description}
                    onChange={(e) => updateService(index, (current) => ({ ...current, description: e.target.value }))}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features (one per line)</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all font-mono text-sm"
                    value={item.features.join('\n')}
                    onChange={(e) =>
                      updateService(index, (current) => ({
                        ...current,
                        features: e.target.value
                          .split('\n')
                          .map((line) => line.trim())
                          .filter(Boolean),
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={save} disabled={isSaving} size="lg" className="px-8">
          <Check className="w-5 h-5 mr-2" />
          {isSaving ? 'Saving...' : 'Save All Changes'}
        </Button>
      </div>
    </div>
  );
}

