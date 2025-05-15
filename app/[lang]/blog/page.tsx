"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag, FaSearch } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Blog page translations
const translations = {
  tr: {
    title: "Blog",
    subtitle: "Veritabanı yönetimi, izleme stratejileri ve ClusterEye hakkında güncel bilgiler.",
    search: {
      placeholder: "Blog yazılarını ara...",
      button: "Ara"
    },
    categories: {
      title: "Kategoriler",
      items: [
        "Tümü",
        "Veritabanı Yönetimi",
        "Performans Optimizasyonu",
        "Yapay Zeka",
        "Güvenlik",
        "En İyi Uygulamalar",
        "Sektör Haberleri"
      ]
    },
    featuredPosts: {
      title: "Öne Çıkan Yazılar",
      posts: [
        {
          id: 1,
          title: "Yapay Zeka ile Veritabanı Sorunlarını Öngörme",
          excerpt: "Machine learning algoritmalarını kullanarak veritabanı performans sorunlarını nasıl önceden tespit edebileceğinizi öğrenin.",
          image: "/images/blog/featured1.jpg",
          author: "Ahmet Yılmaz",
          date: "15 Mayıs 2023",
          category: "Yapay Zeka",
          readTime: "10 dk okuma"
        },
        {
          id: 2,
          title: "PostgreSQL 15'in Yeni Özellikleri",
          excerpt: "PostgreSQL'in son sürümündeki önemli geliştirmeler ve bunların veritabanı performansınıza etkileri.",
          image: "/images/blog/featured2.jpg",
          author: "Zeynep Kaya",
          date: "28 Nisan 2023",
          category: "Veritabanı Yönetimi",
          readTime: "8 dk okuma"
        }
      ]
    },
    recentPosts: {
      title: "Son Yazılar",
      posts: [
        {
          id: 3,
          title: "Veritabanı İzleme Stratejileri: Proaktif vs Reaktif Yaklaşımlar",
          excerpt: "Veritabanı izleme konusunda proaktif ve reaktif yaklaşımlar arasındaki farkları ve her birinin avantajlarını inceliyoruz.",
          image: "/images/blog/post1.jpg",
          author: "Mehmet Demir",
          date: "10 Haziran 2023",
          category: "En İyi Uygulamalar",
          readTime: "7 dk okuma"
        },
        {
          id: 4,
          title: "MongoDB Atlas ile ClusterEye Entegrasyonu",
          excerpt: "MongoDB Atlas'ı ClusterEye ile entegre ederek bulut tabanlı veritabanlarınızı nasıl izleyebileceğinizi adım adım öğrenin.",
          image: "/images/blog/post2.jpg",
          author: "Elif Şahin",
          date: "2 Haziran 2023",
          category: "Veritabanı Yönetimi",
          readTime: "6 dk okuma"
        },
        {
          id: 5,
          title: "Veritabanı Güvenliği: En İyi 10 Uygulama",
          excerpt: "Veritabanı sistemlerinizi siber tehditlere karşı güvence altına almak için uygulamanız gereken 10 kritik güvenlik pratiği.",
          image: "/images/blog/post3.jpg",
          author: "Ali Yıldız",
          date: "25 Mayıs 2023",
          category: "Güvenlik",
          readTime: "9 dk okuma"
        },
        {
          id: 6,
          title: "SQL Server 2022 Performans İyileştirmeleri",
          excerpt: "SQL Server 2022'de yeni gelen performans iyileştirmelerini ve bunların iş yükleriniz üzerindeki etkilerini keşfedin.",
          image: "/images/blog/post4.jpg",
          author: "Selin Kara",
          date: "18 Mayıs 2023",
          category: "Performans Optimizasyonu",
          readTime: "7 dk okuma"
        }
      ]
    },
    readMore: "Devamını Oku",
    allPosts: "Tüm Yazılar",
    newsletter: {
      title: "Bültenimize Abone Olun",
      description: "Veritabanı izleme ve yönetim dünyasındaki en son gelişmelerden haberdar olmak için e-posta listemize kaydolun.",
      placeholder: "E-posta adresiniz",
      button: "Abone Ol"
    }
  },
  en: {
    title: "Blog",
    subtitle: "Current information about database management, monitoring strategies, and ClusterEye.",
    search: {
      placeholder: "Search blog posts...",
      button: "Search"
    },
    categories: {
      title: "Categories",
      items: [
        "All",
        "Database Management",
        "Performance Optimization",
        "Artificial Intelligence",
        "Security",
        "Best Practices",
        "Industry News"
      ]
    },
    featuredPosts: {
      title: "Featured Posts",
      posts: [
        {
          id: 1,
          title: "Predicting Database Issues with Artificial Intelligence",
          excerpt: "Learn how to use machine learning algorithms to detect database performance issues before they occur.",
          image: "/images/blog/featured1.jpg",
          author: "Ahmet Yilmaz",
          date: "May 15, 2023",
          category: "Artificial Intelligence",
          readTime: "10 min read"
        },
        {
          id: 2,
          title: "New Features in PostgreSQL 15",
          excerpt: "Important improvements in the latest version of PostgreSQL and their effects on your database performance.",
          image: "/images/blog/featured2.jpg",
          author: "Zeynep Kaya",
          date: "April 28, 2023",
          category: "Database Management",
          readTime: "8 min read"
        }
      ]
    },
    recentPosts: {
      title: "Recent Posts",
      posts: [
        {
          id: 3,
          title: "Database Monitoring Strategies: Proactive vs Reactive Approaches",
          excerpt: "We examine the differences between proactive and reactive approaches to database monitoring and the advantages of each.",
          image: "/images/blog/post1.jpg",
          author: "Mehmet Demir",
          date: "June 10, 2023",
          category: "Best Practices",
          readTime: "7 min read"
        },
        {
          id: 4,
          title: "ClusterEye Integration with MongoDB Atlas",
          excerpt: "Learn step by step how to monitor your cloud-based databases by integrating MongoDB Atlas with ClusterEye.",
          image: "/images/blog/post2.jpg",
          author: "Elif Sahin",
          date: "June 2, 2023",
          category: "Database Management",
          readTime: "6 min read"
        },
        {
          id: 5,
          title: "Database Security: Top 10 Practices",
          excerpt: "10 critical security practices you should implement to secure your database systems against cyber threats.",
          image: "/images/blog/post3.jpg",
          author: "Ali Yildiz",
          date: "May 25, 2023",
          category: "Security",
          readTime: "9 min read"
        },
        {
          id: 6,
          title: "SQL Server 2022 Performance Improvements",
          excerpt: "Discover the new performance improvements in SQL Server 2022 and their impact on your workloads.",
          image: "/images/blog/post4.jpg",
          author: "Selin Kara",
          date: "May 18, 2023",
          category: "Performance Optimization",
          readTime: "7 min read"
        }
      ]
    },
    readMore: "Read More",
    allPosts: "All Posts",
    newsletter: {
      title: "Subscribe to Our Newsletter",
      description: "Sign up for our email list to stay informed about the latest developments in the world of database monitoring and management.",
      placeholder: "Your email address",
      button: "Subscribe"
    }
  }
};

export default function Blog({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </div>
      
      {/* Search & Categories */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.search.placeholder}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 pl-12"
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="w-full md:w-2/3 flex items-center justify-end space-x-2 overflow-x-auto pb-2 md:pb-0">
              {t.categories.items.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full border ${
                    index === 0
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent'
                      : 'bg-transparent text-gray-300 border-gray-700 hover:bg-gray-800'
                  } whitespace-nowrap`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10">{t.featuredPosts.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.featuredPosts.posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="relative h-60 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {post.image}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-3">•</span>
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-3">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <Link href="#" className="hover:text-purple-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 mb-5">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-600 mr-3 flex items-center justify-center text-xs text-white">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-gray-300">{post.author}</span>
                    </div>
                    
                    <Link href="#" className="text-purple-400 hover:text-purple-300">
                      {t.readMore} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-white">{t.recentPosts.title}</h2>
            <Link 
              href="#" 
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300"
            >
              {t.allPosts}
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {t.recentPosts.posts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="relative h-48 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    {post.image}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="text-xs text-gray-400 mb-2">
                    <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    <Link href="#" className="hover:text-purple-400 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                    {t.readMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 sm:p-10 border border-purple-900/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.newsletter.title}</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.newsletter.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              className="flex-grow bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300 whitespace-nowrap">
              {t.newsletter.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 