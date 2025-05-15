"use client";

import React, { use } from 'react';
import { useState } from 'react';
import { FaBook, FaCode, FaDownload, FaServer, FaDatabase, FaCloud, FaRobot, FaLock } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Docs page translations
const translations = {
  tr: {
    title: "ClusterEye Dökümantasyon",
    subtitle: "Veritabanı izleme ve yönetim platformunu kullanmaya başlamak için gereken her şey.",
    tabs: {
      gettingStarted: "Başlarken",
      installation: "Kurulum",
      configuration: "Konfigürasyon",
      apiReference: "API Referansı",
      troubleshooting: "Sorun Giderme",
      faq: "SSS"
    },
    sidebar: {
      content: "İçerik",
      resources: "Kaynaklar",
      agentDownload: "Agent İndirme",
      serverRequirements: "Sunucu Gereksinimleri"
    },
    gettingStarted: {
      title: "Başlarken",
      intro: "ClusterEye, veritabanlarınızı izlemek ve yönetmek için agent bazlı bir platformdur. MSSQL, MongoDB ve PostgreSQL veritabanlarını destekler ve cloud API ile agent'lar arasında gRPC protokolü üzerinden iletişim kurar.",
      components: {
        title: "Temel Bileşenler",
        agent: {
          title: "Agent",
          description: "Veritabanı sunucusuna veya yakın bir sunucuya kurulur. Veritabanını izler, metrikleri toplar ve Cloud API ile iletişim kurar."
        },
        cloudApi: {
          title: "Cloud API",
          description: "Agent'lardan gelen verileri işler, saklar ve kullanıcı arayüzüne sunar. gRPC protokolü üzerinden yüksek performanslı iletişim sağlar."
        },
        dbAdapters: {
          title: "Veritabanı Adaptörleri",
          description: "Her veritabanı tipi için özel adaptörler, veritabanına özgü metrikleri toplar ve veritabanı işlemlerini gerçekleştirir."
        },
        securityLayer: {
          title: "Güvenlik Katmanı",
          description: "TLS/SSL şifreleme, token tabanlı kimlik doğrulama ve rol bazlı erişim kontrolü ile tüm sistem güvenliğini sağlar."
        }
      },
      systemRequirements: {
        title: "Sistem Gereksinimleri",
        component: "Bileşen",
        minimum: "Minimum Gereksinimler",
        recommended: "Önerilen",
        agent: "Agent",
        agentMin: "1 CPU, 1GB RAM, 10GB Disk",
        agentRec: "2 CPU, 2GB RAM, 20GB SSD",
        cloudServer: "Cloud Server",
        cloudMin: "2 CPU, 4GB RAM, 50GB SSD",
        cloudRec: "4+ CPU, 8GB+ RAM, 100GB+ SSD",
        database: "Veritabanı",
        dbMin: "PostgreSQL 10+, MSSQL 2016+, MongoDB 4.0+",
        dbRec: "PostgreSQL 13+, MSSQL 2019+, MongoDB 5.0+"
      },
      note: {
        title: "Not:",
        text: "Agent bileşeni, veritabanının çalıştığı aynı sunucuya kurulur. Tamamen lightweight olduğu için Performans için endişe etmenize gerek yok."
      },
      nextSteps: {
        title: "Sonraki Adımlar",
        intro: "ClusterEye'ı kullanmaya başlamak için şu adımları izleyebilirsiniz:",
        steps: [
          "Agent bileşenini indirin ve veritabanı sunucunuza kurun.",
          "Cloud API'ye bağlantı için gereken yapılandırmayı tamamlayın.",
          "İlk veritabanı bağlantınızı yapılandırın ve sistem sağlık durumunu kontrol edin."
        ],
        download: "İndirmeye Başla",
        installationGuide: "Kurulum Kılavuzu"
      }
    },
    installation: {
      title: "Kurulum",
      intro: "ClusterEye kurulumu agent ve cloud bileşenleri olarak iki aşamada gerçekleştirilir. Bu belge, kurulum için gereken adımları açıklar."
    },
    configuration: {
      title: "Konfigürasyon",
      intro: "ClusterEye'ı ihtiyaçlarınıza göre yapılandırmak için izlenecek adımlar ve ayarlar hakkında bilgiler."
    },
    apiReference: {
      title: "API Referansı",
      intro: "ClusterEye API'sini kullanarak kendi uygulamanız ile entegrasyon gerçekleştirmeniz için gereken referans belgeleri."
    },
    troubleshooting: {
      title: "Sorun Giderme",
      intro: "ClusterEye ile ilgili yaygın sorunlar ve çözüm önerileri için ipuçları."
    },
    faq: {
      title: "Sık Sorulan Sorular",
      intro: "ClusterEye kullanımı hakkında en sık sorulan soruların cevapları."
    }
  },
  en: {
    title: "ClusterEye Documentation",
    subtitle: "Everything you need to get started with the database monitoring and management platform.",
    tabs: {
      gettingStarted: "Getting Started",
      installation: "Installation",
      configuration: "Configuration",
      apiReference: "API Reference",
      troubleshooting: "Troubleshooting",
      faq: "FAQ"
    },
    sidebar: {
      content: "Content",
      resources: "Resources",
      agentDownload: "Agent Download",
      serverRequirements: "Server Requirements"
    },
    gettingStarted: {
      title: "Getting Started",
      intro: "ClusterEye is an agent-based platform for monitoring and managing your databases. It supports MSSQL, MongoDB, and PostgreSQL databases and communicates between agents and the Cloud API using the gRPC protocol.",
      components: {
        title: "Core Components",
        agent: {
          title: "Agent",
          description: "Installed on the database server or a nearby server. It monitors the database, collects metrics, and communicates with the Cloud API."
        },
        cloudApi: {
          title: "Cloud API",
          description: "Processes, stores, and presents data from agents to the user interface. Provides high-performance communication over the gRPC protocol."
        },
        dbAdapters: {
          title: "Database Adapters",
          description: "Custom adapters for each database type collect database-specific metrics and perform database operations."
        },
        securityLayer: {
          title: "Security Layer",
          description: "Ensures system security with TLS/SSL encryption, token-based authentication, and role-based access control."
        }
      },
      systemRequirements: {
        title: "System Requirements",
        component: "Component",
        minimum: "Minimum Requirements",
        recommended: "Recommended",
        agent: "Agent",
        agentMin: "1 CPU, 1GB RAM, 10GB Disk",
        agentRec: "2 CPU, 2GB RAM, 20GB SSD",
        cloudServer: "Cloud Server",
        cloudMin: "2 CPU, 4GB RAM, 50GB SSD",
        cloudRec: "4+ CPU, 8GB+ RAM, 100GB+ SSD",
        database: "Database",
        dbMin: "PostgreSQL 10+, MSSQL 2016+, MongoDB 4.0+",
        dbRec: "PostgreSQL 13+, MSSQL 2019+, MongoDB 5.0+"
      },
      note: {
        title: "Note:",
        text: "The Agent component is installed on the same server as the database. As it is completely lightweight, you don't need to worry about performance."
      },
      nextSteps: {
        title: "Next Steps",
        intro: "To get started with ClusterEye, you can follow these steps:",
        steps: [
          "Download and install the Agent component on your database server.",
          "Complete the configuration required for the Cloud API connection.",
          "Configure your first database connection and check the system health status."
        ],
        download: "Start Download",
        installationGuide: "Installation Guide"
      }
    },
    installation: {
      title: "Installation",
      intro: "ClusterEye installation is performed in two stages as agent and cloud components. This document explains the steps required for installation."
    },
    configuration: {
      title: "Configuration",
      intro: "Information about steps and settings to configure ClusterEye according to your needs."
    },
    apiReference: {
      title: "API Reference",
      intro: "Reference documents you need to integrate with your own application using the ClusterEye API."
    },
    troubleshooting: {
      title: "Troubleshooting",
      intro: "Tips for common issues and solutions related to ClusterEye."
    },
    faq: {
      title: "Frequently Asked Questions",
      intro: "Answers to the most frequently asked questions about using ClusterEye."
    }
  }
};

export default function Docs({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  const [activeTab, setActiveTab] = useState('getting-started');

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

      {/* Documentation Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FaBook className="mr-2" /> {t.sidebar.content}
                </h2>
                
                <nav className="space-y-1">
                  <button 
                    onClick={() => setActiveTab('getting-started')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'getting-started' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.gettingStarted}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('installation')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'installation' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.installation}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('configuration')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'configuration' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.configuration}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('api-reference')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'api-reference' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.apiReference}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('troubleshooting')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'troubleshooting' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.troubleshooting}</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('faq')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'faq' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>{t.tabs.faq}</span>
                  </button>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">{t.sidebar.resources}</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#" 
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        <FaDownload className="mr-2" />
                        {t.sidebar.agentDownload}
                      </a>
                    </li>
                    
                    <li>
                      <a 
                        href="#" 
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        <FaServer className="mr-2" />
                        {t.sidebar.serverRequirements}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                {activeTab === 'getting-started' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaBook className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.gettingStarted.title}</h2>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-6">
                        {t.gettingStarted.intro}
                      </p>
                      
                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">{t.gettingStarted.components.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaRobot className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">{t.gettingStarted.components.agent.title}</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {t.gettingStarted.components.agent.description}
                          </p>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaCloud className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">{t.gettingStarted.components.cloudApi.title}</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {t.gettingStarted.components.cloudApi.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaDatabase className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">{t.gettingStarted.components.dbAdapters.title}</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {t.gettingStarted.components.dbAdapters.description}
                          </p>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaLock className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">{t.gettingStarted.components.securityLayer.title}</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            {t.gettingStarted.components.securityLayer.description}
                          </p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mt-10 mb-4">{t.gettingStarted.systemRequirements.title}</h3>
                      
                      <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-gray-900 rounded-lg">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">{t.gettingStarted.systemRequirements.component}</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">{t.gettingStarted.systemRequirements.minimum}</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">{t.gettingStarted.systemRequirements.recommended}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white border-b border-gray-800">{t.gettingStarted.systemRequirements.agent}</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">{t.gettingStarted.systemRequirements.agentMin}</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">{t.gettingStarted.systemRequirements.agentRec}</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white border-b border-gray-800">{t.gettingStarted.systemRequirements.cloudServer}</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">{t.gettingStarted.systemRequirements.cloudMin}</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">{t.gettingStarted.systemRequirements.cloudRec}</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white">{t.gettingStarted.systemRequirements.database}</td>
                              <td className="px-4 py-2 text-sm text-gray-300">{t.gettingStarted.systemRequirements.dbMin}</td>
                              <td className="px-4 py-2 text-sm text-gray-300">{t.gettingStarted.systemRequirements.dbRec}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 rounded-lg border border-purple-900/50 mb-8">
                        <p className="text-white">
                          <strong>{t.gettingStarted.note.title}</strong> {t.gettingStarted.note.text}
                        </p>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mt-10 mb-4">{t.gettingStarted.nextSteps.title}</h3>
                      
                      <p className="text-gray-300 mb-6">
                        {t.gettingStarted.nextSteps.intro}
                      </p>
                      
                      <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-8">
                        {t.gettingStarted.nextSteps.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                      
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-md transition duration-300 inline-flex items-center"
                        >
                          <FaDownload className="w-4 h-4 mr-2" />
                          {t.gettingStarted.nextSteps.download}
                        </a>
                        
                        <button 
                          onClick={() => setActiveTab('installation')} 
                          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300"
                        >
                          {t.gettingStarted.nextSteps.installationGuide}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'installation' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaDownload className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.installation.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {t.installation.intro}
                    </p>
                    
                    {/* Installation content... */}
                  </div>
                )}
                
                {activeTab === 'configuration' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaServer className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.configuration.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {t.configuration.intro}
                    </p>
                    
                    {/* Configuration content... */}
                  </div>
                )}
                
                {activeTab === 'api-reference' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaCode className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.apiReference.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {t.apiReference.intro}
                    </p>
                    
                    {/* API content... */}
                  </div>
                )}
                
                {activeTab === 'troubleshooting' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaServer className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.troubleshooting.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {t.troubleshooting.intro}
                    </p>
                    
                    {/* Troubleshooting content... */}
                  </div>
                )}
                
                {activeTab === 'faq' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaBook className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">{t.faq.title}</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      {t.faq.intro}
                    </p>
                    
                    {/* FAQ content... */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 