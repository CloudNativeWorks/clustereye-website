"use client";

import React, { use, useState } from 'react';
import { FaCheck, FaServer, FaDatabase, FaRobot, FaBrain, FaCog } from 'react-icons/fa';
import Link from 'next/link';
import { Language, LangParams } from '@/app/i18n';

// Pricing page translations
const translations = {
  tr: {
    title: "Fiyatlandırma",
    subtitle: "İhtiyaçlarınıza uygun planı seçin, veritabanı yönetimini dönüştürün.",
    billing: {
      monthly: "Aylık",
      yearly: "Yıllık",
      savings: "%16 Tasarruf"
    },
    popularChoice: "Popüler Seçim",
    perMonth: "/ ay her node için",
    perYear: "/ yıl her node için",
    contactUs: "İletişime Geçin",
    getStarted: "Şimdi Başlayın",
    featureComparison: "Özellik Karşılaştırması",
    features: {
      dbConnections: "Veritabanı Bağlantıları",
      agentCount: "Agent Sayısı",
      autoBackup: "Otomatik Yedekleme",
      aiOptimization: "AI Optimizasyon",
      ssoIntegration: "SSO Entegrasyonu"
    },
    backupControl: "Kontrol",
    backupFullManagement: "Tam Yönetim",
    faq: {
      title: "Sık Sorulan Sorular",
      paymentFrequency: {
        question: "Ödeme sıklığını değiştirebilir miyim?",
        answer: "Evet, aboneliğinizi istediğiniz zaman aylık veya yıllık olarak değiştirebilirsiniz. Yıllık plana geçiş yaparsanız %16 tasarruf sağlarsınız."
      },
      switchPlans: {
        question: "Planlar arasında geçiş yapabilir miyim?",
        answer: "Evet, ihtiyaçlarınız değiştikçe planlar arasında kolayca geçiş yapabilirsiniz. Daha düşük bir plana geçerseniz, mevcut dönemin sonunda yeni plan devreye girer. Daha yüksek bir plana geçiş ise anında gerçekleşir ve kalan süre için orantılı fiyatlandırma uygulanır."
      },
      trial: {
        question: "Deneme sürümü var mı?",
        answer: "Evet, ClusterEye'ı tüm özellikleriyle 14 gün boyunca ücretsiz olarak deneyebilirsiniz. Deneme süresi bitiminde herhangi bir plan seçmezseniz, hesabınız otomatik olarak ücretsiz sürüme düşer."
      },
      customization: {
        question: "Özel gereksinimlerim için özelleştirme yapabilir misiniz?",
        answer: "Evet, Enterprise müşterilerimiz için özel çözümler sunuyoruz. Büyük ölçekli veritabanı altyapıları, özel entegrasyonlar veya belirli izleme gereksinimleri için bizimle iletişime geçebilirsiniz."
      }
    },
    moreQuestions: "Başka sorularınız mı var? Satış ekibimizle iletişime geçin.",
    contactSales: "İletişime Geçin"
  },
  en: {
    title: "Pricing",
    subtitle: "Choose the plan that suits your needs, transform your database management.",
    billing: {
      monthly: "Monthly",
      yearly: "Yearly",
      savings: "16% Savings"
    },
    popularChoice: "Popular Choice",
    perMonth: "/ month per node",
    perYear: "/ year per node",
    contactUs: "Contact Us",
    getStarted: "Get Started",
    featureComparison: "Feature Comparison",
    features: {
      dbConnections: "Database Connections",
      agentCount: "Agent Count",
      autoBackup: "Automatic Backup",
      aiOptimization: "AI Optimization",
      ssoIntegration: "SSO Integration"
    },
    backupControl: "Control",
    backupFullManagement: "Full Management",
    faq: {
      title: "Frequently Asked Questions",
      paymentFrequency: {
        question: "Can I change the payment frequency?",
        answer: "Yes, you can change your subscription between monthly and yearly at any time. Switching to yearly plan gives you a 16% savings."
      },
      switchPlans: {
        question: "Can I switch between plans?",
        answer: "Yes, you can easily switch between plans as your needs change. If you switch to a lower plan, the new plan takes effect at the end of your current billing period. Upgrading to a higher plan happens immediately with prorated pricing for the remaining period."
      },
      trial: {
        question: "Is there a trial version?",
        answer: "Yes, you can try ClusterEye with all features for 14 days for free. If you don't choose a plan after the trial period, your account will automatically downgrade to the free version."
      },
      customization: {
        question: "Can you customize for my specific requirements?",
        answer: "Yes, we offer custom solutions for our Enterprise customers. You can contact us for large-scale database infrastructure, custom integrations, or specific monitoring requirements."
      }
    },
    moreQuestions: "Do you have more questions? Contact our sales team.",
    contactSales: "Contact Us"
  }
};

// Plan data structure
const getPlans = (t: any) => [
  {
    name: "Starter",
    description: t === translations.tr ? "Küçük ve orta ölçekli projeler için" : "For small and medium-sized projects",
    monthlyPrice: "₺499",
    yearlyPrice: "₺4,990",
    features: t === translations.tr
      ? [
          "5 veritabanı bağlantısı",
          "Agent bazlı izleme",
          "Temel metrikler ve alarmlar",
          "Günlük yedekleme kontrolü",
          "E-posta bildirimleri",
          "7/24 teknik destek"
        ]
      : [
          "5 database connections",
          "Agent-based monitoring",
          "Basic metrics and alarms",
          "Daily backup control",
          "Email notifications",
          "24/7 technical support"
        ],
    disabled: t === translations.tr
      ? [
          "AI optimizasyon önerileri",
          "Kapsamlı log analizi",
          "Özel raporlar",
          "SSO entegrasyonu"
        ]
      : [
          "AI optimization recommendations",
          "Comprehensive log analysis",
          "Custom reports",
          "SSO integration"
        ]
  },
  {
    name: "Professional",
    description: t === translations.tr ? "Büyük ve orta ölçekli projeler için" : "For large and medium-sized projects",
    monthlyPrice: "₺899",
    yearlyPrice: "₺8,990",
    popular: true,
    features: t === translations.tr
      ? [
          "15 veritabanı bağlantısı",
          "Agent bazlı izleme",
          "Gelişmiş metrikler ve alarmlar",
          "Günlük yedekleme kontrolü",
          "E-posta ve SMS bildirimleri",
          "AI optimizasyon önerileri",
          "Kapsamlı log analizi",
          "7/24 öncelikli teknik destek"
        ]
      : [
          "15 database connections",
          "Agent-based monitoring",
          "Advanced metrics and alarms",
          "Daily backup control",
          "Email and SMS notifications",
          "AI optimization recommendations",
          "Comprehensive log analysis",
          "24/7 priority technical support"
        ],
    disabled: t === translations.tr
      ? [
          "Özel raporlar",
          "SSO entegrasyonu"
        ]
      : [
          "Custom reports",
          "SSO integration"
        ]
  },
  {
    name: "Enterprise",
    description: t === translations.tr ? "Kurumsal müşteriler için" : "For enterprise customers",
    monthlyPrice: t === translations.tr ? "İletişime geçin" : "Contact us",
    yearlyPrice: t === translations.tr ? "İletişime geçin" : "Contact us",
    features: t === translations.tr
      ? [
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
        ]
      : [
          "Unlimited database connections",
          "Agent-based monitoring",
          "All metrics and alarms",
          "Automatic backup management",
          "Multiple notification channels",
          "Advanced AI optimization recommendations",
          "Comprehensive log analysis",
          "Custom reports",
          "SSO integration",
          "Dedicated account manager"
        ],
    disabled: []
  }
];

export default function Pricing({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const plans = getPlans(t);

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
                {t.billing.monthly}
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-2 rounded-md ${
                  billingPeriod === 'yearly'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'text-gray-300 hover:text-white'
                } transition-all duration-200`}
              >
                {t.billing.yearly} <span className="text-xs ml-1 opacity-75">{t.billing.savings}</span>
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
                    {t.popularChoice}
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-white">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    {plan.monthlyPrice !== (lang === 'tr' ? "İletişime geçin" : "Contact us") && (
                      <span className="text-gray-400 ml-2">{billingPeriod === 'monthly' ? t.perMonth : t.perYear}</span>
                    )}
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-lg mb-8 font-medium transition-all duration-200 ${
                    plan.name === 'Enterprise' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white' 
                      : plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? t.contactUs : t.getStarted}
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.featureComparison}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left text-lg font-semibold text-white">{lang === 'tr' ? 'Özellik' : 'Feature'}</th>
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
                      <span className="text-gray-300">{t.features.dbConnections}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">5</td>
                  <td className="py-4 px-6 text-center text-gray-300">15</td>
                  <td className="py-4 px-6 text-center text-gray-300">{lang === 'tr' ? 'Sınırsız' : 'Unlimited'}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaServer className="text-purple-400 mr-2" />
                      <span className="text-gray-300">{t.features.agentCount}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">5</td>
                  <td className="py-4 px-6 text-center text-gray-300">15</td>
                  <td className="py-4 px-6 text-center text-gray-300">{lang === 'tr' ? 'Sınırsız' : 'Unlimited'}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaRobot className="text-purple-400 mr-2" />
                      <span className="text-gray-300">{t.features.autoBackup}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-300">{t.backupControl}</td>
                  <td className="py-4 px-6 text-center text-gray-300">{t.backupControl}</td>
                  <td className="py-4 px-6 text-center text-gray-300">{t.backupFullManagement}</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 text-left">
                    <div className="flex items-center">
                      <FaBrain className="text-purple-400 mr-2" />
                      <span className="text-gray-300">{t.features.aiOptimization}</span>
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
                      <span className="text-gray-300">{t.features.ssoIntegration}</span>
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
          <h2 className="text-3xl font-bold text-white text-center mb-12">{t.faq.title}</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">{t.faq.paymentFrequency.question}</h3>
              <p className="text-gray-300">
                {t.faq.paymentFrequency.answer}
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">{t.faq.switchPlans.question}</h3>
              <p className="text-gray-300">
                {t.faq.switchPlans.answer}
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">{t.faq.trial.question}</h3>
              <p className="text-gray-300">
                {t.faq.trial.answer}
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">{t.faq.customization.question}</h3>
              <p className="text-gray-300">
                {t.faq.customization.answer}
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">
              {t.moreQuestions}
            </p>
            <Link 
              href={`/${lang}/contact`}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition duration-300 inline-block"
            >
              {t.contactSales}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 