"use client";

import React, { use } from 'react';
import { FaDatabase, FaCloud, FaRobot, FaSearchPlus, FaChartLine, FaLock, FaBell, FaTachometerAlt, FaBrain } from "react-icons/fa";
import { Language, LangParams } from '@/app/i18n';

// Features page translations
const translations = {
  tr: {
    title: "ClusterEye Özellikleri",
    subtitle: "Agent bazlı yapı ile veritabanlarınızı izlemenin ve yönetmenin en akıllı yolu",
    mainFeatures: {
      title: "Ana Özellikler",
      items: [
        {
          icon: <FaRobot className="w-8 h-8 text-white" />,
          title: "Agent Bazlı Mimari",
          description: "Otonom çalışan agent'lar ile veritabanlarınız sürekli izlenir. Her agent kendi sorumluluğundaki veritabanı üzerinde uzmanlaşarak proaktif izleme ve müdahale imkanı sağlar."
        },
        {
          icon: <FaDatabase className="w-8 h-8 text-white" />,
          title: "Çoklu Veritabanı Desteği",
          description: "MSSQL, MongoDB ve PostgreSQL veritabanlarınızı tek bir platform üzerinden yönetin. Farklı sistemleri izlemek için birden fazla çözüme ihtiyacınız yok."
        },
        {
          icon: <FaCloud className="w-8 h-8 text-white" />,
          title: "Cloud API Entegrasyonu",
          description: "gRPC protokolü ile yüksek performanslı, düşük gecikmeli iletişim. Agent'lar ve merkezi sistem arasında güvenli ve hızlı veri aktarımı."
        },
        {
          icon: <FaChartLine className="w-8 h-8 text-white" />,
          title: "Gerçek Zamanlı Analitik",
          description: "Canlı performans metrikleri, sorgu analizi ve kaynak kullanımı raporları ile veritabanlarınızın durumunu anlık olarak görüntüleyin."
        },
        {
          icon: <FaBell className="w-8 h-8 text-white" />,
          title: "Akıllı Bildirimler",
          description: "Özelleştirilebilir alarmlar ve uyarılar ile anormal durumlardan anında haberdar olun. E-posta, SMS ve webhook bildirim seçenekleri."
        },
        {
          icon: <FaBrain className="w-8 h-8 text-white" />,
          title: "Yapay Zeka Entegrasyonu",
          description: "Yapay zeka ile güçlendirilmiş analiz ve optimizasyon önerileri ile veritabanı performansınızı artırın."
        }
      ]
    },
    technicalFeatures: {
      title: "Teknik Özellikler",
      leftColumn: [
        {
          icon: <FaTachometerAlt className="w-6 h-6 text-white" />,
          title: "Yüksek Performanslı İzleme",
          description: "Düşük sistem kaynağı kullanımı ile veritabanlarınızı etkilemeden sürekli izleme yapın. Özel tasarlanmış algoritmalar ile minimum etki, maksimum bilgi."
        },
        {
          icon: <FaLock className="w-6 h-6 text-white" />,
          title: "Güvenli İletişim",
          description: "TLS/SSL ile şifrelenmiş tüm bağlantılar, rol tabanlı erişim kontrolü ve veri maskeleme özellikleri ile hassas veritabanı bilgilerinizi koruyun."
        },
        {
          icon: <FaRobot className="w-6 h-6 text-white" />,
          title: "Agent Otomatik Güncelleme",
          description: "Agent'lar otomatik olarak kendilerini güncelleyerek her zaman en son özelliklerden ve güvenlik iyileştirmelerinden yararlanır."
        }
      ],
      rightColumn: [
        {
          icon: <FaDatabase className="w-6 h-6 text-white" />,
          title: "Sorgu Optimizasyonu",
          description: "Yavaş sorguları tespit edip analiz ederek performans iyileştirme önerileri sunar. İndeks önerileri ve sorgu planı analizleri ile veritabanı hızını artırın."
        },
        {
          icon: <FaChartLine className="w-6 h-6 text-white" />,
          title: "Özelleştirilebilir Paneller",
          description: "Drag-and-drop arayüzü ile kendi izleme panellerinizi oluşturun. Önemli metrikleri ve grafikleri özelleştirerek tek bir ekranda görüntüleyin."
        },
        {
          icon: <FaSearchPlus className="w-6 h-6 text-white" />,
          title: "Detaylı Log Analizi",
          description: "Veritabanı loglarını gerçek zamanlı olarak analiz ederek sorunları hızlıca tespit edin. SQL hata mesajlarını otomatik analiz eden akıllı algoritma ile çözüm önerileri alın."
        }
      ]
    }
  },
  en: {
    title: "ClusterEye Features",
    subtitle: "The smartest way to monitor and manage your databases with an agent-based architecture",
    mainFeatures: {
      title: "Main Features",
      items: [
        {
          icon: <FaRobot className="w-8 h-8 text-white" />,
          title: "Agent-Based Architecture",
          description: "Your databases are continuously monitored through autonomously operating agents. Each agent specializes in its responsible database, providing proactive monitoring and intervention capability."
        },
        {
          icon: <FaDatabase className="w-8 h-8 text-white" />,
          title: "Multi-Database Support",
          description: "Manage your MSSQL, MongoDB, and PostgreSQL databases from a single platform. You don't need multiple solutions to monitor different systems."
        },
        {
          icon: <FaCloud className="w-8 h-8 text-white" />,
          title: "Cloud API Integration",
          description: "High-performance, low-latency communication using the gRPC protocol. Secure and fast data transfer between agents and the central system."
        },
        {
          icon: <FaChartLine className="w-8 h-8 text-white" />,
          title: "Real-Time Analytics",
          description: "View the status of your databases instantly with live performance metrics, query analysis, and resource usage reports."
        },
        {
          icon: <FaBell className="w-8 h-8 text-white" />,
          title: "Smart Notifications",
          description: "Be instantly informed of abnormal conditions with customizable alarms and alerts. Email, SMS, and webhook notification options."
        },
        {
          icon: <FaBrain className="w-8 h-8 text-white" />,
          title: "AI Integration",
          description: "Improve your database performance with AI-powered analysis and optimization recommendations."
        }
      ]
    },
    technicalFeatures: {
      title: "Technical Features",
      leftColumn: [
        {
          icon: <FaTachometerAlt className="w-6 h-6 text-white" />,
          title: "High-Performance Monitoring",
          description: "Continuously monitor your databases without affecting them using low system resources. Minimum impact, maximum information with specially designed algorithms."
        },
        {
          icon: <FaLock className="w-6 h-6 text-white" />,
          title: "Secure Communication",
          description: "Protect your sensitive database information with TLS/SSL encrypted connections, role-based access control, and data masking features."
        },
        {
          icon: <FaRobot className="w-6 h-6 text-white" />,
          title: "Agent Auto-Update",
          description: "Agents automatically update themselves to always benefit from the latest features and security improvements."
        }
      ],
      rightColumn: [
        {
          icon: <FaDatabase className="w-6 h-6 text-white" />,
          title: "Query Optimization",
          description: "Identify and analyze slow queries to provide performance improvement recommendations. Increase database speed with index suggestions and query plan analyses."
        },
        {
          icon: <FaChartLine className="w-6 h-6 text-white" />,
          title: "Customizable Dashboards",
          description: "Create your own monitoring dashboards with a drag-and-drop interface. View important metrics and graphics on a single screen by customizing them."
        },
        {
          icon: <FaSearchPlus className="w-6 h-6 text-white" />,
          title: "Detailed Log Analysis",
          description: "Quickly identify problems by analyzing database logs in real-time. Get solution suggestions with an intelligent algorithm that automatically analyzes SQL error messages."
        }
      ]
    }
  }
};

export default function Features({ params }: { params: LangParams }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  // TypeScript'te şu an için tip hatası veriyor ama çalışıyor
  const lang = use(params).lang;
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

      {/* Main Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.mainFeatures.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {t.mainFeatures.items.map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">{t.technicalFeatures.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              {t.technicalFeatures.leftColumn.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div className="space-y-10">
              {t.technicalFeatures.rightColumn.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 