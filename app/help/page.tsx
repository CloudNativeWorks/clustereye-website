"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaQuestionCircle, FaBook, FaServer, FaChartLine, FaShieldAlt, FaArrowCircleRight } from 'react-icons/fa';

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Yardım kategorileri
  const categories = [
    { id: 'all', name: 'Tüm Konular', icon: <FaQuestionCircle className="w-5 h-5" /> },
    { id: 'getting-started', name: 'Başlangıç', icon: <FaBook className="w-5 h-5" /> },
    { id: 'installation', name: 'Kurulum', icon: <FaServer className="w-5 h-5" /> },
    { id: 'usage', name: 'Kullanım', icon: <FaChartLine className="w-5 h-5" /> },
    { id: 'security', name: 'Güvenlik', icon: <FaShieldAlt className="w-5 h-5" /> },
  ];
  
  // SSS verileri
  const faqs = [
    {
      id: 1,
      question: 'ClusterEye nedir?',
      answer: 'ClusterEye, veritabanı sistemlerinizi izlemek, performans sorunlarını tespit etmek ve optimize etmek için agent tabanlı bir veritabanı izleme çözümüdür. PostgreSQL, MongoDB ve MSSQL dahil olmak üzere çeşitli veritabanı sistemlerini destekler.',
      category: 'getting-started'
    },
    {
      id: 2,
      question: 'ClusterEye agentleri nasıl kurulur?',
      answer: 'ClusterEye agentleri, izlemek istediğiniz her veritabanı sunucusuna kurulmalıdır. Kurulum talimatları için döküman sayfamızı ziyaret edin veya destek ekibimizle iletişime geçin. Kurulum genellikle 5-10 dakika sürer ve minimum sistem kaynağı kullanır.',
      category: 'installation'
    },
    {
      id: 3,
      question: 'ClusterEye hangi veritabanlarını destekler?',
      answer: 'ClusterEye şu anda PostgreSQL, MongoDB ve MSSQL veritabanlarını desteklemektedir. Yakında MySQL desteği de eklenecektir.',
      category: 'getting-started'
    },
    {
      id: 4,
      question: 'ClusterEye\'ı kullanmak için sunucu gereksinimi nedir?',
      answer: 'ClusterEye agentleri minimum sistem kaynağı kullanacak şekilde tasarlanmıştır. Ortalama bir veritabanı sunucusu için 100MB RAM ve %1-2 CPU kullanımı yeterlidir. Agentler Linux, Windows ve macOS işletim sistemlerinde çalışabilir.',
      category: 'installation'
    },
    {
      id: 5,
      question: 'Veritabanı performans sorunlarını nasıl tespit edebilirim?',
      answer: 'ClusterEye dashboard\'u, veritabanı performansını gerçek zamanlı olarak izlemenize ve sorunları hızla tespit etmenize olanak tanır. Yavaş sorgular, yüksek CPU kullanımı, bellek sorunları ve diğer performans darboğazları otomatik olarak tespit edilir ve uyarılar alırsınız.',
      category: 'usage'
    },
    {
      id: 6,
      question: 'ClusterEye, veritabanı güvenliğimi sağlar mı?',
      answer: 'ClusterEye, veritabanınızın güvenliğini izlemek için çeşitli özellikler sunar. Anormal erişim kalıpları, yetkisiz erişim girişimleri ve güvenlik yapılandırma sorunları konusunda sizi uyarır. Ancak, ClusterEye bir güvenlik duvarı veya tam kapsamlı bir güvenlik çözümü değildir, mevcut güvenlik önlemlerinizi tamamlayıcı niteliktedir.',
      category: 'security'
    },
    {
      id: 7,
      question: 'ClusterEye\'ın AI özellikleri nelerdir?',
      answer: 'ClusterEye, yapay zeka algoritmalarını kullanarak veritabanı performansını analiz eder ve optimize eder. AI özellikleri arasında anormal davranış tespiti, sorgu optimizasyon önerileri, kapasite planlama ve gelecekteki performans tahminleri bulunur.',
      category: 'usage'
    },
    {
      id: 8,
      question: 'Verilerim ClusterEye ile güvende mi?',
      answer: 'ClusterEye, müşteri verilerinin güvenliğini çok ciddiye alır. Agentlerimiz, hassas veritabanı verilerinizi saklamaz veya aktarmaz; yalnızca performans metrikleri ve metadata toplanır. Tüm iletişim SSL/TLS ile şifrelenir ve hizmetimiz düzenli güvenlik denetimlerinden geçer.',
      category: 'security'
    },
    {
      id: 9,
      question: 'ClusterEye\'ı farklı ortamlarda kullanabilir miyim?',
      answer: 'Evet, ClusterEye on-premise, bulut veya hibrit ortamlarda çalışacak şekilde tasarlanmıştır. AWS, Azure, Google Cloud veya kendi veri merkezinizde çalışan veritabanlarını izleyebilirsiniz.',
      category: 'installation'
    },
    {
      id: 10,
      question: 'Sorun yaşarsam nereden destek alabilirim?',
      answer: 'ClusterEye müşterileri, e-posta, canlı sohbet ve telefon üzerinden 7/24 teknik destek alabilir. Enterprise planı müşterileri için özel hesap yöneticileri atanmaktadır. Ayrıca, kapsamlı dökümantasyon ve topluluk forumları da mevcuttur.',
      category: 'getting-started'
    }
  ];
  
  // Kategori filtreleme
  const filteredFaqs = faqs.filter(faq => 
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchTerm === '' || faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  // SSS bölümünü açıp kapatma
  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };
  
  // Destek makalelerive rehberler (örnek)
  const helpResources = [
    {
      id: 1,
      title: 'Başlangıç Rehberi',
      description: 'ClusterEye kurulumu ve temel kullanımı için adım adım rehber.',
      icon: <FaBook className="w-8 h-8 text-purple-400" />
    },
    {
      id: 2,
      title: 'Agent Kurulum Kılavuzu',
      description: 'Farklı işletim sistemlerine agent kurulumu için detaylı talimatlar.',
      icon: <FaServer className="w-8 h-8 text-purple-400" />
    },
    {
      id: 3,
      title: 'Dashboard Kullanım Kılavuzu',
      description: 'ClusterEye dashboard\'unda bulunan tüm özellikler ve raporlar hakkında bilgi.',
      icon: <FaChartLine className="w-8 h-8 text-purple-400" />
    },
    {
      id: 4,
      title: 'Güvenlik Yapılandırması',
      description: 'ClusterEye ile veritabanı izleme güvenliğini maksimuma çıkarmak için öneriler.',
      icon: <FaShieldAlt className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Yardım Merkezi</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            ClusterEye hakkında bilgi edinmek, sorularınızın yanıtlarını bulmak ve destek almak için doğru yerdesiniz.
          </p>
        </div>
      </div>
      
      {/* Search */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Yardım aramak için yazın..."
              className="pl-10 w-full py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-all duration-200`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Sık Sorulan Sorular</h2>
          
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div 
                  key={faq.id} 
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200"
                >
                  <button 
                    className="w-full p-6 flex justify-between items-start text-left"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                    <div className={`text-purple-400 transform transition-transform ${expandedFaq === faq.id ? 'rotate-90' : ''}`}>
                      <FaArrowCircleRight />
                    </div>
                  </button>
                  
                  {expandedFaq === faq.id && (
                    <div className="p-6 pt-0 border-t border-gray-700">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <p className="text-gray-300">Aramanızla eşleşen bir sonuç bulunamadı. Lütfen farklı bir arama terimi deneyin veya destek ekibimizle iletişime geçin.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Help Resources */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Yardım Kaynakları</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpResources.map((resource) => (
              <div key={resource.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-200 flex flex-col">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{resource.description}</p>
                <a 
                  href="#" 
                  className="mt-auto inline-flex items-center text-purple-400 hover:text-purple-300"
                >
                  Daha fazla bilgi
                  <FaArrowCircleRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-gray-700 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Yardım mı Gerekiyor?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Sorularınızla ilgili yanıt bulamadınız mı? Teknik destek ekibimiz size yardımcı olmak için hazır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition duration-300"
            >
              Destek Talebi Oluştur
            </a>
            <a 
              href="mailto:support@clustereye.com" 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition duration-300"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 