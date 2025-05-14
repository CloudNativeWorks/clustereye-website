"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Kategoriler
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'veritabani', name: 'Veritabanı Yönetimi' },
    { id: 'ai', name: 'Yapay Zeka' },
    { id: 'optimization', name: 'Optimizasyon' },
    { id: 'security', name: 'Güvenlik' }
  ];
  
  // Örnek blog yazıları
  const blogPosts = [
    {
      id: 1,
      title: 'PostgreSQL Performans Optimizasyonu İçin 10 İpucu',
      excerpt: 'PostgreSQL veritabanınızın performansını artırmak için uygulayabileceğiniz 10 etkili ipucu ve en iyi uygulamalar.',
      image: '/images/blog/postgresql-performance.jpg',
      author: 'Ahmet Yılmaz',
      date: '18 Nisan 2023',
      category: 'optimization',
      categories: ['veritabani', 'optimization']
    },
    {
      id: 2,
      title: 'Veritabanı İzleme Sistemleri: Agent Bazlı vs. Ajan Olmayan Yaklaşımlar',
      excerpt: 'Veritabanı izleme sistemlerinde agent bazlı ve ajan olmayan yaklaşımların karşılaştırması ve hangi durumda hangisinin daha uygun olduğu.',
      image: '/images/blog/monitoring-systems.jpg',
      author: 'Zeynep Kaya',
      date: '5 Mayıs 2023',
      category: 'veritabani',
      categories: ['veritabani']
    },
    {
      id: 3,
      title: 'Yapay Zeka ile Query Optimizasyonu Nasıl Çalışır?',
      excerpt: 'Yapay zeka algoritmaları, veritabanı sorgularını nasıl analiz eder ve optimize eder? ClusterEye\'ın AI destekli optimizasyon özelliklerinin derinlemesine incelemesi.',
      image: '/images/blog/ai-query-optimization.jpg',
      author: 'Mehmet Demir',
      date: '12 Haziran 2023',
      category: 'ai',
      categories: ['ai', 'optimization', 'veritabani']
    },
    {
      id: 4,
      title: 'MongoDB Performans Ayarları ve Verimlilik',
      excerpt: 'MongoDB veritabanınızın performansını artırmak için index stratejileri, bellek yönetimi ve sorgu optimizasyonu konusunda pratik ipuçları.',
      image: '/images/blog/mongodb-performance.jpg',
      author: 'Deniz Yıldız',
      date: '3 Temmuz 2023',
      category: 'optimization',
      categories: ['veritabani', 'optimization']
    },
    {
      id: 5,
      title: 'MSSQL Veritabanları için Güvenlik Önlemleri',
      excerpt: 'MSSQL veritabanlarınızı siber tehditlerden korumak için uygulamanız gereken güvenlik önlemleri ve en iyi pratikler.',
      image: '/images/blog/mssql-security.jpg',
      author: 'Elif Şahin',
      date: '22 Temmuz 2023',
      category: 'security',
      categories: ['veritabani', 'security']
    },
    {
      id: 6,
      title: 'Veritabanı Log Analizinde Yapay Zeka Kullanımı',
      excerpt: 'Yapay zeka algoritmalarının veritabanı loglarını analiz ederek anormallikleri nasıl tespit ettiği ve proaktif çözümler sunduğu hakkında detaylı bir inceleme.',
      image: '/images/blog/ai-log-analysis.jpg',
      author: 'Ahmet Yılmaz',
      date: '8 Ağustos 2023',
      category: 'ai',
      categories: ['ai', 'veritabani']
    }
  ];
  
  // Arama ve filtreleme fonksiyonu
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ClusterEye Blog</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Veritabanı yönetimi, optimizasyon ve yapay zeka hakkında en güncel bilgiler
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Makale ara..."
                className="pl-10 w-full py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  } transition-all duration-200`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-xl">Aradığınız kriterlere uygun blog yazısı bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-200 hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="relative h-48 w-full bg-gray-700">
                    {/* Placeholder for image - in real implementation you'd have actual images */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
                      <span className="text-gray-400 text-sm">{post.image}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex gap-4 mb-3">
                      {post.categories.map(cat => {
                        const category = categories.find(c => c.id === cat);
                        return (
                          <span 
                            key={cat} 
                            className="text-xs px-2 py-1 rounded-full bg-gray-700 text-purple-300 flex items-center"
                          >
                            <FaTag className="w-3 h-3 mr-1" />
                            {category?.name}
                          </span>
                        );
                      })}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-400 line-clamp-3 mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-400">
                        <FaUser className="w-3 h-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-400">
                        <FaCalendarAlt className="w-3 h-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-lg text-white font-medium text-sm transition duration-300"
                    >
                      Devamını Oku
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Paginasyon (sabit ve işlevsiz, gerçek pagination yapılması gerekir) */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="px-4 py-2 rounded-l-md bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors duration-200"
              >
                Önceki
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              >
                1
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors duration-200"
              >
                2
              </a>
              <a
                href="#"
                className="px-4 py-2 bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors duration-200"
              >
                3
              </a>
              <span className="px-4 py-2 bg-gray-800 text-gray-400">...</span>
              <a
                href="#"
                className="px-4 py-2 bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors duration-200"
              >
                8
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-r-md bg-gray-800 text-gray-400 hover:bg-gray-700 transition-colors duration-200"
              >
                Sonraki
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-bold text-white mb-4">Bültenimize Abone Olun</h2>
                <p className="text-gray-300 mb-4">
                  En son veritabanı teknolojileri, yapay zeka kullanım örnekleri ve optimizasyon ipuçları hakkında aylık güncellemeler alın.
                </p>
              </div>
              
              <div className="lg:w-1/3 w-full">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="flex-grow py-3 px-4 bg-gray-700 border border-gray-600 rounded-l-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button
                    className="py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-r-lg transition duration-300"
                  >
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 