"use client";

import React, { useState, use } from 'react';
import { FaServer, FaDatabase, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaHistory, FaInfoCircle, FaSync, FaCloudDownloadAlt } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Status page translations
const translations = {
  tr: {
    title: "Sistem Durumu",
    subtitle: "ClusterEye hizmetlerinin güncel durumunu takip edin.",
    statusOverview: {
      operational: "Tüm sistemler çalışıyor",
      degradedPerformance: "Bazı sistemlerde performans sorunu",
      partialOutage: "Bazı sistemlerde kesinti",
      majorOutage: "Büyük sistem kesintisi",
      lastUpdated: "Son güncelleme",
      refresh: "Yenile",
      allOperational: "Tüm ClusterEye hizmetleri normal şekilde çalışıyor.",
      someIssues: "Bazı ClusterEye hizmetlerinde sorunlar yaşanıyor. Aşağıdaki tablodan detayları görebilirsiniz."
    },
    servicesTable: {
      title: "Servis Durumu",
      service: "Servis",
      description: "Açıklama",
      status: "Durum",
      lastUpdated: "Son Güncelleme",
      statuses: {
        operational: "Çalışıyor",
        degradedPerformance: "Performans Sorunu",
        partialOutage: "Kısmi Kesinti",
        majorOutage: "Büyük Kesinti",
        unknown: "Bilinmiyor"
      }
    },
    incidents: {
      current: {
        title: "Güncel Sorunlar",
        noActiveIncidents: "Aktif sorun bulunmuyor",
        noActiveIncidentsDesc: "Şu anda bilinen bir servis kesintisi veya sorun yok."
      },
      resolved: {
        title: "Çözülen Sorunlar"
      },
      statuses: {
        investigating: "İnceleniyor",
        identified: "Tanımlandı",
        monitoring: "İzleniyor",
        resolved: "Çözüldü",
        unknown: "Bilinmiyor"
      }
    },
    subscribe: {
      title: "Durum Bildirimleri Alın",
      description: "ClusterEye servislerindeki kesintiler ve planlanmış bakımlar hakkında gerçek zamanlı bildirimler almak için kaydolun.",
      placeholder: "E-posta adresiniz",
      button: "Abone Ol"
    }
  },
  en: {
    title: "System Status",
    subtitle: "Track the current status of ClusterEye services.",
    statusOverview: {
      operational: "All systems operational",
      degradedPerformance: "Some systems have performance issues",
      partialOutage: "Some systems are experiencing outages",
      majorOutage: "Major system outage",
      lastUpdated: "Last updated",
      refresh: "Refresh",
      allOperational: "All ClusterEye services are operating normally.",
      someIssues: "Some ClusterEye services are experiencing issues. You can see the details in the table below."
    },
    servicesTable: {
      title: "Service Status",
      service: "Service",
      description: "Description",
      status: "Status",
      lastUpdated: "Last Updated",
      statuses: {
        operational: "Operational",
        degradedPerformance: "Performance Issues",
        partialOutage: "Partial Outage",
        majorOutage: "Major Outage",
        unknown: "Unknown"
      }
    },
    incidents: {
      current: {
        title: "Current Issues",
        noActiveIncidents: "No active incidents",
        noActiveIncidentsDesc: "There are currently no known service outages or issues."
      },
      resolved: {
        title: "Resolved Issues"
      },
      statuses: {
        investigating: "Investigating",
        identified: "Identified",
        monitoring: "Monitoring",
        resolved: "Resolved",
        unknown: "Unknown"
      }
    },
    subscribe: {
      title: "Receive Status Notifications",
      description: "Sign up to receive real-time notifications about outages and planned maintenance on ClusterEye services.",
      placeholder: "Your email address",
      button: "Subscribe"
    }
  }
};

export default function Status({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  // Demo amaçlı çeşitli hizmet durumları - gerçek uygulamada API'den alınır
  const [services, setServices] = useState([
    {
      id: 1,
      name: lang === 'tr' ? "ClusterEye Dashboard" : "ClusterEye Dashboard",
      status: "operational", // operational, degraded-performance, partial-outage, major-outage
      description: lang === 'tr' ? "Web arayüzü ve kontrol paneli" : "Web interface and control panel",
      updatedAt: "2025-12-01T14:30:00Z",
    },
    {
      id: 2,
      name: lang === 'tr' ? "Monitoring API" : "Monitoring API",
      status: "operational",
      description: lang === 'tr' ? "Ana izleme API hizmeti" : "Main monitoring API service",
      updatedAt: "2025-12-01T14:30:00Z",
    },
    {
      id: 3,
      name: lang === 'tr' ? "Veritabanı Agentleri" : "Database Agents",
      status: "operational",
      description: lang === 'tr' ? "Veritabanlarını izleyen agent sistemleri" : "Agent systems monitoring databases",
      updatedAt: "2025-12-01T14:30:00Z",
    },
    {
      id: 4,
      name: lang === 'tr' ? "Alarm & Bildirim Sistemi" : "Alarm & Notification System",
      status: "degraded-performance",
      description: lang === 'tr' ? "E-posta ve SMS bildirimleri" : "Email and SMS notifications",
      updatedAt: "2025-12-01T13:15:00Z",
    },
    {
      id: 5,
      name: lang === 'tr' ? "AI Analiz Motoru" : "AI Analysis Engine",
      status: "operational",
      description: lang === 'tr' ? "Yapay zeka destekli analiz sistemi" : "AI-powered analysis system",
      updatedAt: "2025-12-01T14:30:00Z",
    },
    {
      id: 6,
      name: lang === 'tr' ? "Yedekleme Kontrolü" : "Backup Control",
      status: "operational",
      description: lang === 'tr' ? "Veritabanı yedekleme izleme sistemi" : "Database backup monitoring system",
      updatedAt: "2025-12-01T14:30:00Z",
    },
    {
      id: 7,
      name: lang === 'tr' ? "Log Analiz Sistemi" : "Log Analysis System",
      status: "partial-outage",
      description: lang === 'tr' ? "Veritabanı log analizi" : "Database log analysis",
      updatedAt: "2025-12-01T10:45:00Z",
    }
  ]);
  
  // Demo amaçlı durum geçmişi - gerçek uygulamada API'den alınır
  const [incidents, setIncidents] = useState([
    {
      id: 1,
      title: lang === 'tr' ? "Log Analiz Sistemi - Kısmi Kesinti" : "Log Analysis System - Partial Outage",
      status: "investigating", // investigating, identified, monitoring, resolved
      date: "2025-12-01T10:45:00Z",
      updates: [
        {
          id: 1,
          status: "investigating",
          message: lang === 'tr' 
            ? "Log analiz sisteminde yavaşlama ve kısmi erişim sorunları yaşanıyor. Teknik ekibimiz sorunu araştırıyor." 
            : "The log analysis system is experiencing slowdowns and partial access issues. Our technical team is investigating the problem.",
          createdAt: "2025-12-01T10:45:00Z",
        },
        {
          id: 2,
          status: "identified",
          message: lang === 'tr'
            ? "Sorunun bir veri işleme darboğazından kaynaklandığı tespit edildi. Ekibimiz çözüm üzerinde çalışıyor."
            : "The issue has been identified as a data processing bottleneck. Our team is working on a solution.",
          createdAt: "2025-12-01T11:15:00Z",
        }
      ]
    },
    {
      id: 2,
      title: lang === 'tr' ? "Alarm & Bildirim Sistemi - Performans Sorunu" : "Alarm & Notification System - Performance Issue",
      status: "monitoring",
      date: "2025-12-01T13:15:00Z",
      updates: [
        {
          id: 1,
          status: "investigating",
          message: lang === 'tr'
            ? "Bildirim sisteminde gecikmeler tespit edildi. Sorun araştırılıyor."
            : "Delays have been detected in the notification system. The issue is being investigated.",
          createdAt: "2025-12-01T13:15:00Z",
        },
        {
          id: 2,
          status: "identified",
          message: lang === 'tr'
            ? "Sorun e-posta gönderim servisindeki bir gecikme olarak tanımlandı."
            : "The issue has been identified as a delay in the email delivery service.",
          createdAt: "2025-12-01T13:25:00Z",
        },
        {
          id: 3,
          status: "monitoring",
          message: lang === 'tr'
            ? "Geçici bir çözüm uygulandı. Sistem performansı izleniyor."
            : "A temporary solution has been implemented. System performance is being monitored.",
          createdAt: "2025-12-01T13:40:00Z",
        }
      ]
    },
    {
      id: 3,
      title: lang === 'tr' ? "API Kesintisi" : "API Outage",
      status: "resolved",
      date: "2025-11-28T09:20:00Z",
      updates: [
        {
          id: 1,
          status: "investigating",
          message: lang === 'tr'
            ? "API servisinde kesintiler yaşanıyor. Teknik ekip sorunu araştırıyor."
            : "The API service is experiencing outages. The technical team is investigating the issue.",
          createdAt: "2025-11-28T09:20:00Z",
        },
        {
          id: 2,
          status: "identified",
          message: lang === 'tr'
            ? "Sorun bir altyapı güncellemesinden kaynaklanıyor."
            : "The issue is caused by an infrastructure update.",
          createdAt: "2025-11-28T09:35:00Z",
        },
        {
          id: 3,
          status: "monitoring",
          message: lang === 'tr'
            ? "Düzeltme uygulandı ve sistem izleniyor."
            : "A fix has been applied and the system is being monitored.",
          createdAt: "2025-11-28T10:10:00Z",
        },
        {
          id: 4,
          status: "resolved",
          message: lang === 'tr'
            ? "Tüm sistemler normal şekilde çalışıyor."
            : "All systems are operating normally.",
          createdAt: "2025-11-28T10:45:00Z",
        }
      ]
    }
  ]);
  
  // Durum göstergesi bileşeni
  const StatusIndicator = ({ status }: { status: string }) => {
    switch (status) {
      case "operational":
        return (
          <div className="flex items-center text-green-400">
            <FaCheckCircle className="mr-2" />
            <span>{t.servicesTable.statuses.operational}</span>
          </div>
        );
      case "degraded-performance":
        return (
          <div className="flex items-center text-yellow-400">
            <FaExclamationTriangle className="mr-2" />
            <span>{t.servicesTable.statuses.degradedPerformance}</span>
          </div>
        );
      case "partial-outage":
        return (
          <div className="flex items-center text-orange-400">
            <FaExclamationTriangle className="mr-2" />
            <span>{t.servicesTable.statuses.partialOutage}</span>
          </div>
        );
      case "major-outage":
        return (
          <div className="flex items-center text-red-400">
            <FaTimesCircle className="mr-2" />
            <span>{t.servicesTable.statuses.majorOutage}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center text-gray-400">
            <FaInfoCircle className="mr-2" />
            <span>{t.servicesTable.statuses.unknown}</span>
          </div>
        );
    }
  };
  
  // Tarih formatlama (basit bir örnek)
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Genel sistem durumunu hesaplama
  const calculateOverallStatus = () => {
    if (services.some(service => service.status === "major-outage")) {
      return "major-outage";
    } else if (services.some(service => service.status === "partial-outage")) {
      return "partial-outage";
    } else if (services.some(service => service.status === "degraded-performance")) {
      return "degraded-performance";
    } else {
      return "operational";
    }
  };
  
  const overallStatus = calculateOverallStatus();
  
  // İnceleme durumu göstergesi
  const IncidentStatusBadge = ({ status }: { status: string }) => {
    let color;
    let label;
    
    switch (status) {
      case "investigating":
        color = "bg-yellow-500";
        label = t.incidents.statuses.investigating;
        break;
      case "identified":
        color = "bg-orange-500";
        label = t.incidents.statuses.identified;
        break;
      case "monitoring":
        color = "bg-blue-500";
        label = t.incidents.statuses.monitoring;
        break;
      case "resolved":
        color = "bg-green-500";
        label = t.incidents.statuses.resolved;
        break;
      default:
        color = "bg-gray-500";
        label = t.incidents.statuses.unknown;
    }
    
    return (
      <span className={`${color} text-white text-xs px-2 py-1 rounded-full`}>{label}</span>
    );
  };
  
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
      
      {/* Status Overview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="mr-4">
                  {overallStatus === "operational" ? (
                    <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                      <FaCheckCircle className="h-8 w-8 text-white" />
                    </div>
                  ) : overallStatus === "degraded-performance" ? (
                    <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center">
                      <FaExclamationTriangle className="h-8 w-8 text-white" />
                    </div>
                  ) : overallStatus === "partial-outage" ? (
                    <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center">
                      <FaExclamationTriangle className="h-8 w-8 text-white" />
                    </div>
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center">
                      <FaTimesCircle className="h-8 w-8 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {overallStatus === "operational" 
                      ? t.statusOverview.operational
                      : overallStatus === "degraded-performance"
                      ? t.statusOverview.degradedPerformance
                      : overallStatus === "partial-outage"
                      ? t.statusOverview.partialOutage
                      : t.statusOverview.majorOutage}
                  </h2>
                  <p className="text-gray-400">{t.statusOverview.lastUpdated}: {formatDate(new Date().toISOString())}</p>
                </div>
              </div>
              <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors">
                <FaSync className="mr-2" />
                {t.statusOverview.refresh}
              </button>
            </div>
            <p className="text-gray-300">
              {overallStatus === "operational" 
                ? t.statusOverview.allOperational
                : t.statusOverview.someIssues}
            </p>
          </div>
          
          {/* Services Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t.servicesTable.title}</h2>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300">{t.servicesTable.service}</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300 hidden md:table-cell">{t.servicesTable.description}</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-300">{t.servicesTable.status}</th>
                    <th className="py-4 px-6 text-right text-sm font-semibold text-gray-300 hidden lg:table-cell">{t.servicesTable.lastUpdated}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {services.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-750">
                      <td className="py-4 px-6">
                        <div className="font-medium text-white">{service.name}</div>
                      </td>
                      <td className="py-4 px-6 text-gray-300 hidden md:table-cell">{service.description}</td>
                      <td className="py-4 px-6">
                        <StatusIndicator status={service.status} />
                      </td>
                      <td className="py-4 px-6 text-right text-gray-400 hidden lg:table-cell">
                        {formatDate(service.updatedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Current Incidents */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t.incidents.current.title}</h2>
            
            {incidents.filter(incident => incident.status !== "resolved").length === 0 ? (
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
                <FaCheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{t.incidents.current.noActiveIncidents}</h3>
                <p className="text-gray-300">{t.incidents.current.noActiveIncidentsDesc}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {incidents
                  .filter(incident => incident.status !== "resolved")
                  .map((incident) => (
                  <div key={incident.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                        <p className="text-gray-400">{formatDate(incident.date)}</p>
                      </div>
                      <IncidentStatusBadge status={incident.status} />
                    </div>
                    
                    <div className="border-l-2 border-gray-600 pl-4 ml-4 mt-6 space-y-4">
                      {incident.updates.map((update) => (
                        <div key={update.id} className="relative">
                          <div className="absolute -left-6 top-1 h-2 w-2 rounded-full bg-gray-500"></div>
                          <div className="mb-1 flex justify-between">
                            <IncidentStatusBadge status={update.status} />
                            <span className="text-sm text-gray-400">{formatDate(update.createdAt)}</span>
                          </div>
                          <p className="text-gray-300">{update.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Recent Resolved Incidents */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">{t.incidents.resolved.title}</h2>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <div className="divide-y divide-gray-700">
                {incidents
                  .filter(incident => incident.status === "resolved")
                  .map((incident) => (
                  <div key={incident.id} className="p-6 hover:bg-gray-750">
                    <div className="flex flex-wrap justify-between items-center mb-2">
                      <h3 className="text-lg font-medium text-white">{incident.title}</h3>
                      <IncidentStatusBadge status={incident.status} />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-300">
                        {incident.updates[incident.updates.length - 1].message}
                      </p>
                      <p className="text-sm text-gray-400 ml-4">
                        {formatDate(incident.updates[incident.updates.length - 1].createdAt)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0 text-center">
                <FaCloudDownloadAlt className="h-16 w-16 text-purple-400 mx-auto" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">{t.subscribe.title}</h3>
                <p className="text-gray-300 mb-4">
                  {t.subscribe.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder={t.subscribe.placeholder}
                    className="flex-grow py-3 px-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <button className="py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition duration-300">
                    {t.subscribe.button}
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