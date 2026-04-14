
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Star, Filter, Heart } from '@/components/ui/icons/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Worship Album Vol. 1',
    description: 'Collection of inspiring worship songs',
    price: 15000,
    originalPrice: 20000,
    image: 'https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg',
    category: 'Albums',
    rating: 5,
    inStock: true,
  },
  {
    id: 2,
    name: 'Tribute to Grace CD',
    description: 'Classic gospel collection',
    price: 12000,
    image: 'https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg',
    category: 'Albums',
    rating: 4,
    inStock: true,
  },
  {
    id: 3,
    name: 'CVC T-Shirt (Black)',
    description: 'Official choir merchandise',
    price: 25000,
    image: 'https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg',
    category: 'Apparel',
    rating: 5,
    inStock: true,
  },
  {
    id: 4,
    name: 'CVC Hoodie',
    description: 'Premium quality hoodie',
    price: 45000,
    originalPrice: 55000,
    image: 'https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg',
    category: 'Apparel',
    rating: 4,
    inStock: true,
  },
  {
    id: 5,
    name: 'Worship Booklet',
    description: 'Lyrics and chords guide',
    price: 5000,
    image: 'https://images.pexels.com/photos/8815022/pexels-photo-8815022.jpeg',
    category: 'Books',
    rating: 4,
    inStock: true,
  },
  {
    id: 6,
    name: 'Event DVD - Live Concert',
    description: 'Recorded live performance',
    price: 18000,
    image: 'https://images.pexels.com/photos/7520739/pexels-photo-7520739.jpeg',
    category: 'Videos',
    rating: 5,
    inStock: false,
  },
  {
    id: 7,
    name: 'CVC Cap',
    description: 'Official branded cap',
    price: 15000,
    image: 'https://images.pexels.com/photos/16278649/pexels-photo-16278649.jpeg',
    category: 'Apparel',
    rating: 4,
    inStock: true,
  },
  {
    id: 8,
    name: 'Worship Album Vol. 2',
    description: 'Latest worship collection',
    price: 18000,
    originalPrice: 25000,
    image: 'https://images.pexels.com/photos/8815037/pexels-photo-8815037.jpeg',
    category: 'Albums',
    rating: 5,
    inStock: true,
  },
];

const categories = ['All', 'Albums', 'Apparel', 'Books', 'Videos'];

export default function ShopPage() {
  const t = useTranslations('shop');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = mockProducts.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="pt-20 min-h-screen bg-(--color-gray-50)">
      {/* Hero Section */}
      <section className="relative py-16 gradient-primary text-white">
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

      {/* Shop Content */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--color-gray-400)" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-(--color-gray-200) focus:border-(--color-primary) focus:ring-2 focus:ring-(--color-primary)/20 outline-none transition-all"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-(--color-gray-600)" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'gradient-primary text-white'
                        : 'bg-white text-(--color-gray-700) hover:bg-(--color-gray-100)'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      SALE
                    </span>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4 text-(--color-gray-600)" />
                  </button>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-semibold">{t('outOfStock')}</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-(--color-primary) font-medium">{product.category}</span>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-(--color-gray-600) mb-2">{product.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-(--color-gray-300)'}`}
                      />
                    ))}
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-(--color-primary)">
                        TZS {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-sm text-(--color-gray-400) line-through">
                          TZS {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={addToCart}
                      disabled={!product.inStock}
                      className={`p-2 rounded-lg transition-colors ${
                        product.inStock
                          ? 'bg-(--color-primary) text-white hover:bg-(--color-primary-dark)'
                          : 'bg-(--color-gray-300 text-(--color-gray-500)'
                      }`}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-(--color-gray-600) text-lg">{t('noProducts')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Preview */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="relative p-4 gradient-primary text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}


