"use client";

import React, { useState } from 'react';
import { FaCheck, FaServer, FaDatabase, FaRobot, FaBrain, FaCog } from 'react-icons/fa';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Küçük ve orta ölçekli projeler için",
      monthlyPrice: "₺499",
      yearlyPrice: "₺4,990",
      features: [
        "5 veritabanı bağlantısı",
        "Agent bazlı izleme",
        "Temel metrikler ve alarmlar",
        "Günlük yedekleme kontrolü",
        "E-posta bildirimleri",
        "7/24 teknik destek"
      ],
      disabled: [
        "AI optimizasyon önerileri",
        "Kapsamlı log analizi",
        "Özel raporlar",
        "SSO entegrasyonu"
      ]
    },
    {
      name: "Professional",
      description: "Büyük ve orta ölçekli projeler için",
      monthlyPrice: "₺899",
      yearlyPrice: "₺8,990",
      popular: true,
      features: [
        "15 veritabanı bağlantısı",
        "Agent bazlı izleme",
        "Gelişmiş metrikler ve alarmlar",
        "Günlük yedekleme kontrolü",
        "E-posta ve SMS bildirimleri",
        "AI optimizasyon önerileri",
        "Kapsamlı log analizi",
        "7/24 öncelikli teknik destek"
      ],
      disabled: [
        "Özel raporlar",
        "SSO entegrasyonu"
      ]
    },
    {
      name: "Enterprise",
      description: "Kurumsal müşteriler için",
      monthlyPrice: "İletişime geçin",
      yearlyPrice: "İletişime geçin",
      features: [
        "Sınırsız veritabanı bağlantısı",
        "Agent bazlı izleme",
        "Tüm metrikler ve alarmlar",
        "Otomatik yedekleme yönetimi",
        "Çoklu bildirim kanalları",
        "Gelişmiş AI optimizasyon önerileri",
        "Kapsamlı log analizi",
        "Özel raporlar",
        "SSO entegrasyonu",
        "Ayrılmış hesap yöneticisi"
      ],
      disabled: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Fiyatlandırma</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun planı seçin, veritabanı yönetimini dönüştürün.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white'
                } transition-all duration-200`}
              >
                Aylık
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'yearly'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white'
                } transition-all duration-200`}
              >
                Yıllık <span className="text-xs ml-1 opacity-75">%16 Tasarruf</span>
              </button>
            </div>
          </div>
          
          {/* Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-xl border ${
                  plan.popular 
                    ? 'border-purple-500 relative scale-105 z-10' 
                    : 'border-gray-700'
                } overflow-hidden shadow-xl transition-all duration-200 hover:shadow-indigo-500/10`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase py-1 text-center">
                    Popüler Seçim
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-white">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    {plan.monthlyPrice !== "İletişime geçin" && (
                      <span className="text-gray-400 ml-2">/ {billingPeriod === 'monthly' ? 'ay' : 'yıl'} her node için</span>
                    )}
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-lg mb-8 font-medium transition-all duration-200 ${
                    plan.name === 'Enterprise' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white' 
                      : plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'İletişime Geçin' : 'Şimdi Başlayın'}
                  </button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.disabled.map((feature, i) => (
                      <div key={i} className="flex items-start opacity-50">
                        <FaCheck className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Özellik Karşılaştırması</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left text-lg font-semibold text-white">Özellik</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold text-white">Starter</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold text-white">Professional</th>
                  <th className="py-4 px-6 text-center text-lg font-semibold text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaDatabase className="text-purple-400 mr-2" />
                      <span className="text-gray-300">Veritabanı Bağlantıları</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">5</td>
                  <td className="py-4 px-6 text-center text-gray-300">15</td>
                  <td className="py-4 px-6 text-center text-gray-300">Sınırsız</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaServer className="text-purple-400 mr-2" />
                      <span className="text-gray-300">Agent Sayısı</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">5</td>
                  <td className="py-4 px-6 text-center text-gray-300">15</td>
                  <td className="py-4 px-6 text-center text-gray-300">Sınırsız</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaRobot className="text-purple-400 mr-2" />
                      <span className="text-gray-300">Otomatik Yedekleme</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">Kontrol</td>
                  <td className="py-4 px-6 text-center text-gray-300">Kontrol</td>
                  <td className="py-4 px-6 text-center text-gray-300">Tam Yönetim</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaBrain className="text-purple-400 mr-2" />
                      <span className="text-gray-300">AI Optimizasyon</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-gray-700"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FaCheck className="w-6 h-6 mx-auto text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FaCheck className="w-6 h-6 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaCog className="text-purple-400 mr-2" />
                      <span className="text-gray-300">SSO Entegrasyonu</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-gray-700"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-gray-700"></span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FaCheck className="w-6 h-6 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Sık Sorulan Sorular</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Ödeme sıklığını değiştirebilir miyim?</h3>
              <p className="text-gray-300">
                Evet, aboneliğinizi istediğiniz zaman aylık veya yıllık olarak değiştirebilirsiniz. Yıllık plana geçiş yaparsanız %16 tasarruf sağlarsınız.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Planlar arasında geçiş yapabilir miyim?</h3>
              <p className="text-gray-300">
                Evet, ihtiyaçlarınız değiştikçe planlar arasında kolayca geçiş yapabilirsiniz. Daha düşük bir plana geçerseniz, mevcut dönemin sonunda yeni plan devreye girer. Daha yüksek bir plana geçiş ise anında gerçekleşir ve kalan süre için orantılı fiyatlandırma uygulanır.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Deneme sürümü var mı?</h3>
              <p className="text-gray-300">
                Evet, ClusterEye'ı tüm özellikleriyle 14 gün boyunca ücretsiz olarak deneyebilirsiniz. Deneme süresi bitiminde herhangi bir plan seçmezseniz, hesabınız otomatik olarak ücretsiz sürüme düşer.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">Özel gereksinimlerim için özelleştirme yapabilir misiniz?</h3>
              <p className="text-gray-300">
                Evet, Enterprise müşterilerimiz için özel çözümler sunuyoruz. Büyük ölçekli veritabanı altyapıları, özel entegrasyonlar veya belirli izleme gereksinimleri için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              Başka sorularınız mı var? Satış ekibimizle iletişime geçin.
            </p>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition duration-300 inline-block"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 