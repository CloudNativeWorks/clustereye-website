"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { FaQuestionCircle, FaBook, FaVideo, FaComments, FaClipboardList, FaLightbulb } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Help page translations
const translations = {
  tr: {
    title: "Yardım ve Destek",
    subtitle: "ClusterEye ile ilgili sorularınıza yanıt bulun ve deneyimli ekibimizden destek alın.",
    resourcesSection: {
      title: "Yardım Kaynakları",
      description: "ClusterEye'ı en verimli şekilde kullanmanıza yardımcı olacak kaynaklara göz atın.",
      resources: [
        {
          title: "Dokümantasyon",
          description: "Detaylı kurulum ve kullanım kılavuzları",
          icon: <FaBook className="w-8 h-8 text-purple-500" />,
          link: "/tr/docs"
        },
        {
          title: "Video Eğitimleri",
          description: "Adım adım video anlatımları",
          icon: <FaVideo className="w-8 h-8 text-purple-500" />,
          link: "#"
        },
        {
          title: "SSS",
          description: "Sık sorulan sorular ve yanıtları",
          icon: <FaQuestionCircle className="w-8 h-8 text-purple-500" />,
          link: "#"
        },
        {
          title: "Topluluk Forumu",
          description: "Kullanıcı deneyimlerini paylaşın ve sorular sorun",
          icon: <FaComments className="w-8 h-8 text-purple-500" />,
          link: "#"
        }
      ]
    },
    contactSection: {
      title: "Bizimle İletişime Geçin",
      description: "Cevabınızı bulamadınız mı? Ekibimiz size yardımcı olmak için burada.",
      options: [
        {
          title: "E-posta Desteği",
          description: "support@clustereye.com adresine e-posta gönderin. 24 saat içinde yanıt alacaksınız.",
          button: "E-posta Gönder"
        },
        {
          title: "Canlı Sohbet",
          description: "Çalışma saatleri içinde (09:00-18:00) uzmanlarımızla canlı sohbet edin.",
          button: "Sohbeti Başlat"
        },
        {
          title: "Destek Talebi Oluştur",
          description: "Detaylı bir destek talebi oluşturun, ekibimiz en kısa sürede inceleyecektir.",
          button: "Talep Oluştur"
        }
      ]
    },
    tipsSection: {
      title: "Hızlı İpuçları",
      tips: [
        {
          title: "Agent Performansını İyileştirme",
          description: "Agent performansını artırmak için sunucu kaynaklarını uygun şekilde yapılandırın ve düzenli bakım yapın."
        },
        {
          title: "Alarmlar ve Bildirimler",
          description: "Kritik olaylar için özelleştirilmiş alarm eşikleri ve bildirim kanalları oluşturun."
        },
        {
          title: "Veritabanı Optimizasyonu",
          description: "İzleme verilerinizi kullanarak veritabanı performansını optimize edin ve darboğazları tespit edin."
        }
      ]
    }
  },
  en: {
    title: "Help & Support",
    subtitle: "Find answers to your questions about ClusterEye and get support from our experienced team.",
    resourcesSection: {
      title: "Help Resources",
      description: "Browse resources to help you use ClusterEye most efficiently.",
      resources: [
        {
          title: "Documentation",
          description: "Detailed installation and usage guides",
          icon: <FaBook className="w-8 h-8 text-purple-500" />,
          link: "/en/docs"
        },
        {
          title: "Video Tutorials",
          description: "Step-by-step video walkthroughs",
          icon: <FaVideo className="w-8 h-8 text-purple-500" />,
          link: "#"
        },
        {
          title: "FAQ",
          description: "Frequently asked questions and answers",
          icon: <FaQuestionCircle className="w-8 h-8 text-purple-500" />,
          link: "#"
        },
        {
          title: "Community Forum",
          description: "Share experiences and ask questions",
          icon: <FaComments className="w-8 h-8 text-purple-500" />,
          link: "#"
        }
      ]
    },
    contactSection: {
      title: "Contact Us",
      description: "Couldn't find your answer? Our team is here to help you.",
      options: [
        {
          title: "Email Support",
          description: "Send an email to support@clustereye.com. You'll receive a response within 24 hours.",
          button: "Send Email"
        },
        {
          title: "Live Chat",
          description: "Chat with our experts during business hours (9AM-6PM).",
          button: "Start Chat"
        },
        {
          title: "Create Support Ticket",
          description: "Create a detailed support ticket and our team will review it as soon as possible.",
          button: "Create Ticket"
        }
      ]
    },
    tipsSection: {
      title: "Quick Tips",
      tips: [
        {
          title: "Improving Agent Performance",
          description: "Configure server resources appropriately and perform regular maintenance to enhance agent performance."
        },
        {
          title: "Alarms and Notifications",
          description: "Create customized alarm thresholds and notification channels for critical events."
        },
        {
          title: "Database Optimization",
          description: "Use your monitoring data to optimize database performance and identify bottlenecks."
        }
      ]
    }
  }
};

export default function Help({ params }: { params: LangParams | Promise<{lang: Language}> }) {
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
      
      {/* Help Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.resourcesSection.title}</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {t.resourcesSection.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.resourcesSection.resources.map((resource, index) => (
              <Link 
                key={index} 
                href={resource.link}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.contactSection.title}</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {t.contactSection.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.contactSection.options.map((option, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-gray-300 mb-6 h-24">{option.description}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg font-medium transition duration-300">
                  {option.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.tipsSection.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.tipsSection.tips.map((tip, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-6 border border-purple-900/20"
              >
                <div className="flex items-start mb-4">
                  <FaLightbulb className="text-purple-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                </div>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 