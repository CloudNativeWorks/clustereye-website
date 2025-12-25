import Image from "next/image";
import Link from "next/link";
import {
  FaDatabase, FaCloud, FaRobot, FaSearchPlus, FaBrain, FaBolt, FaChartLine, FaMagic,
  FaExchangeAlt, FaLayerGroup
} from "react-icons/fa";
import { getTranslations, type Language, type LangParams } from "../i18n";
import ClientSideIconSection from "@/app/components/ClientSideIconSection";
import HeroSection from "@/app/components/HeroSection";

// Ana sayfanın çevirileri
const translations = {
  tr: {
    hero: {
      description: "Veritabanlarınızı akıllı agent'larla izleyin, yönetin ve optimize edin",
      subText: "MSSQL, MongoDB ve PostgreSQL veritabanlarınızı Cloud API ve gRPC teknolojileri ile tek bir platformdan takip edin ve yönetin.",
      demo: "Demo İste",
      docs: "Dökümantasyon",
      carousel: [
        {
          title: "Merkezi Dashboard",
          description: "Tüm veritabanlarınızı tek bir ekrandan izleyin"
        },
        {
          title: "Sorgu Analizi",
          description: "Yapay zeka destekli performans analizi"
        },
        {
          title: "Cluster Yönetimi",
          description: "Otomatik failover ve ölçeklendirme"
        }
      ]
    },
    features: {
      title: "Neden ClusterEye?",
      multiDb: {
        title: "Çoklu Veritabanı Desteği",
        desc: "MSSQL, MongoDB ve PostgreSQL veritabanlarınızı tek platformdan yönetin."
      },
      agent: {
        title: "Akıllı Agent Teknolojisi",
        desc: "Agent bazlı mimariyle otonom izleme ve problem tespiti."
      },
      cloud: {
        title: "Cloud API Entegrasyonu",
        desc: "gRPC protokolü ile güçlü, hızlı ve güvenli iletişim."
      },
      ai: {
        title: "AI Entegrasyonu",
        desc: "Yapay zeka ile güçlendirilmiş analiz ve optimizasyon önerileri."
      }
    },
    cta: {
      title: "ClusterEye ile Veritabanı Yönetiminde Devrim",
      desc: "Agent teknolojisi ve yapay zeka ile veritabanı yönetimini kolaylaştırın, maliyetlerinizi düşürün.",
      button: "Hemen İletişime Geçin"
    },
    ai: {
      title: "Yapay Zeka ile Güçlendirilmiş Analitik",
      desc: "ClusterEye, modern yapay zeka teknolojileri ile veritabanı yönetimini tamamen yeni bir boyuta taşıyor.",
      config: {
        title: "Akıllı Konfigürasyon ve Best Practice Analizleri",
        desc: "Yapay zeka algoritmaları veritabanınızın konfigürasyonunuzu analiz eder ve otomatik olarak en iyi konfigürasyon önerilerini sunar. Her veritabanı tipine özel (MSSQL, MongoDB, PostgreSQL) otomatik optimizasyon tavsiyeleri alın."
      },
      query: {
        title: "Sorgu Performans Analizi ve Visualizasyon",
        desc: "Karmaşık sorgu planlarını görselleştirin ve AI-destekli analiz ile darboğazları anında tespit edin. Execution planlarını otomatik analiz ederek, index önerileri ve sorgu optimizasyonları alın."
      },
      log: {
        title: "Gerçek Zamanlı Log Analizi",
        desc: "MongoDB ve PostgreSQL loglarını gerçek zamanlı olarak analiz edin. AI algoritmaları, potansiyel sorunları önceden tespit edip, proaktif çözüm önerileri sunar. İstisna durumları otomatik olarak sınıflandırın ve benzer sorunların çözümlerini görün."
      },
      anomaly: {
        title: "Anomali Tespiti ve Öngörü Analitiği",
        desc: "Yapay zeka modelleri, normal veritabanı davranışını öğrenerek anormal aktiviteleri hızlıca tespit eder. Gelecekteki kapasite ihtiyaçlarını öngörerek, proaktif planlama yapmanızı sağlar ve potansiyel performans sorunlarını önleminizi mümkün kılar."
      },
      assistant: {
        title: "Kendi Kendine Öğrenen Veritabanı Asistanı",
        desc: "Gelişmiş makine öğrenmesi algoritmaları sayesinde, ClusterEye sizin veritabanı kullanım alışkanlıklarınızı öğrenir ve zaman içinde daha akıllı öneriler sunar. Her veritabanı için özelleştirilmiş, proaktif iyileştirme tavsiyeleri alın."
      },
      screenshot: {
        title: "Yapay Zeka ile Query Optimizasyonu",
        desc: "AI modelleri, sorgu yapısını analiz ederek performans iyileştirmeleri önerir"
      }
    },
    cluster: {
      title: "Veritabanı Kümenizi Tam Kontrol Altına Alın",
      desc: "ClusterEye, PostgreSQL için eksik olan otomatik yük devretme (auto-failover) özelliğini sunarak, veritabanı kümeleri için daha yüksek erişilebilirlik ve güvenilirlik sağlar.",
      autoFailover: {
        title: "Otomatik Yük Devretme (Auto-Failover)",
        desc: "PostgreSQL'in doğal yapısında bulunmayan otomatik yük devretme özelliğini ClusterEye ile kazanın. Birincil sunucu çöktüğünde, sistem otomatik olarak yedek sunucuya geçiş yaparak kesintisiz hizmet sunumunu garanti eder."
      },
      monitoring: {
        title: "Gerçek Zamanlı Küme İzleme",
        desc: "Tüm küme node'larını tek bir panelden izleyin. Replikasyon gecikmesi, disk kullanımı ve sorgu performansı gibi kritik metrikleri anlık olarak görüntüleyin."
      },
      scaling: {
        title: "Ölçeklendirme ve Yönetim",
        desc: "İhtiyaçlarınız doğrultusunda kümenizi kolayca büyütün veya küçültün. Yeni node ekleme, çıkarma ve bakım işlemlerini ClusterEye kontrol panelinden gerçekleştirin."
      },
      screenshot: {
        title: "PostgreSQL Küme Kontrolü",
        desc: "ClusterEye ile veritabanı kümelerinizi kolayca yönetin ve izleyin"
      }
    },
    aiInsights: {
      title: "AI İçgörüleri & Kök Neden Analizi",
      desc: "Veritabanı performans sorunlarının kök nedenlerini saniyeler içinde tespit edin. AI algoritmaları, metrikleri ve logları analizerek size sorunun kaynağını ve çözümünü sunar. Geçmişe dönük analizlerle tekrarlayan problemleri ortadan kaldırın."
    },
    anomalyDetection: {
      title: "Gelişmiş Anomali Tespiti",
      desc: "Sabit eşik değerlerinden kurtulun. Makine öğrenmesi algoritmalarımız veritabanınızın normal davranışını öğrenir ve sadece gerçek anomalilerde sizi uyarır. Kritik ve Uyarı seviyelerindeki sapmaları zaman ekseninde görselleştirin.",
      stats: {
        total: "Anomali",
        critical: "Kritik",
        warning: "Uyarı"
      }
    },
    configDrift: {
      title: "Konfigürasyon Değişiklik Takibi",
      desc: "İzinsiz veya hatalı konfigürasyon değişikliklerini anında yakalayın. 'Kim, Ne Zaman, Ne Değiştirdi?' sorularının cevabını kolayca bulun. Fark analizi (diff) ile değişikliklerin etkisini görün ve onay mekanizmalarıyla yönetin.",
      review: "Bekleyen İnceleme",
      impact: "Yüksek Etki"
    },
    patroni: {
      title: "Patroni Küme Yönetimi",
      desc: "PostgreSQL kümelerinizi güvenle yönetin. Failover (Arıza Durumunda Geçiş) ve Switchover (Planlı Geçiş) işlemlerini tek tıkla gerçekleştirin. Replikasyon gecikmelerini ve nodeların durumunu merkezi bir panelden izleyin.",
      failover: "Failover",
      switchover: "Switchover"
    }
  },
  en: {
    hero: {
      description: "Monitor, manage, and optimize your databases with intelligent agents",
      subText: "Track and manage your MSSQL, MongoDB, and PostgreSQL databases from a single platform with Cloud API and gRPC technologies.",
      demo: "Request Demo",
      docs: "Documentation",
      carousel: [
        {
          title: "Centralized Dashboard",
          description: "Monitor all your databases from a single screen"
        },
        {
          title: "Query Analysis",
          description: "AI-powered performance analysis"
        },
        {
          title: "Cluster Management",
          description: "Automatic failover and scaling"
        }
      ]
    },
    features: {
      title: "Why ClusterEye?",
      multiDb: {
        title: "Multi-Database Support",
        desc: "Manage your MSSQL, MongoDB, and PostgreSQL databases from a single platform."
      },
      agent: {
        title: "Intelligent Agent Technology",
        desc: "Autonomous monitoring and problem detection with agent-based architecture."
      },
      cloud: {
        title: "Cloud API Integration",
        desc: "Powerful, fast, and secure communication with gRPC protocol."
      },
      ai: {
        title: "AI Integration",
        desc: "AI-powered analysis and optimization recommendations."
      }
    },
    cta: {
      title: "Revolutionize Database Management with ClusterEye",
      desc: "Simplify database management and reduce costs with agent technology and artificial intelligence.",
      button: "Contact Us Now"
    },
    ai: {
      title: "AI-Powered Analytics",
      desc: "ClusterEye takes database management to a completely new level with modern artificial intelligence technologies.",
      config: {
        title: "Intelligent Configuration and Best Practice Analysis",
        desc: "AI algorithms analyze your database configuration and automatically provide the best configuration recommendations. Get automatic optimization recommendations specific to each database type (MSSQL, MongoDB, PostgreSQL)."
      },
      query: {
        title: "Query Performance Analysis and Visualization",
        desc: "Visualize complex query plans and instantly identify bottlenecks with AI-assisted analysis. Get index recommendations and query optimizations by automatically analyzing execution plans."
      },
      log: {
        title: "Real-Time Log Analysis",
        desc: "Analyze MongoDB and PostgreSQL logs in real-time. AI algorithms detect potential problems in advance and offer proactive solution recommendations. Automatically classify exception cases and see solutions to similar problems."
      },
      anomaly: {
        title: "Anomaly Detection and Predictive Analytics",
        desc: "AI models learn normal database behavior and quickly detect abnormal activities. Enable proactive planning by predicting future capacity needs and prevent potential performance issues."
      },
      assistant: {
        title: "Self-Learning Database Assistant",
        desc: "Thanks to advanced machine learning algorithms, ClusterEye learns your database usage habits and offers smarter recommendations over time. Get customized, proactive improvement recommendations for each database."
      },
      screenshot: {
        title: "Query Optimization with Artificial Intelligence",
        desc: "AI models analyze query structure to suggest performance improvements"
      }
    },
    cluster: {
      title: "Take Full Control of Your Database Cluster",
      desc: "ClusterEye provides the missing auto-failover functionality for PostgreSQL, ensuring higher availability and reliability for database clusters.",
      autoFailover: {
        title: "Automatic Failover",
        desc: "Gain automatic failover capabilities not natively available in PostgreSQL. When the primary server fails, the system automatically switches to the standby server, ensuring uninterrupted service delivery."
      },
      monitoring: {
        title: "Real-Time Cluster Monitoring",
        desc: "Monitor all cluster nodes from a single dashboard. View critical metrics like replication lag, disk usage, and query performance in real-time."
      },
      scaling: {
        title: "Scaling and Management",
        desc: "Easily scale your cluster up or down based on your needs. Add, remove, and maintain nodes from the ClusterEye control panel."
      },
      screenshot: {
        title: "PostgreSQL Cluster Control",
        desc: "Easily manage and monitor your database clusters with ClusterEye"
      }
    },
    aiInsights: {
      title: "AI Insights & Root Cause Analysis",
      desc: "Identify the root causes of database performance issues in seconds. AI algorithms analyze metrics and logs to provide you with the source of the problem and the solution. Eliminate recurring problems with historical analysis."
    },
    anomalyDetection: {
      title: "Advanced Anomaly Detection",
      desc: "Get rid of static thresholds. Our machine learning algorithms learn the normal behavior of your database and alert you only on real anomalies. Visualize Critical and Warning level deviations on the timeline.",
      stats: {
        total: "Anomalies",
        critical: "Critical",
        warning: "Warning"
      }
    },
    configDrift: {
      title: "Configuration Drift Detection",
      desc: "Catch unauthorized or incorrect configuration changes instantly. Easily answer 'Who Changed What, When?'. See the impact of changes with diff analysis and manage with approval mechanisms.",
      review: "Pending Review",
      impact: "High Impact"
    },
    patroni: {
      title: "Patroni Cluster Management",
      desc: "Manage your PostgreSQL clusters with confidence. Perform Failover and Switchover operations with a single click. Monitor replication lags and node status from a central dashboard.",
      failover: "Failover",
      switchover: "Switchover"
    }
  }
};

export default async function Home({ params }: { params: LangParams | Promise<{ lang: Language }> }) {
  // Next.js'in yeni sürümlerinde params bir Promise olabilir
  // Bu sayfada halihazırda await ile çözüyoruz, bu yüzden React.use() kullanımına ihtiyaç yok
  // @ts-ignore - TypeScript tip hatası için
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const t = translations[lang];
  const globalT = await getTranslations(lang);

  const carouselItems = [
    {
      image: "/images/dashboard_new.png",
      title: t.hero.carousel[0].title,
      description: t.hero.carousel[0].description
    },
    {
      image: "/images/ai_query_analysis.png",
      title: t.hero.carousel[1].title,
      description: t.hero.carousel[1].description
    },
    {
      image: "/images/cluster_control.png",
      title: t.hero.carousel[2].title,
      description: t.hero.carousel[2].description
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <HeroSection
        title="ClusterEye"
        description={t.hero.description}
        subText={t.hero.subText}
        demoText={t.hero.demo}
        docsText={t.hero.docs}
        lang={lang}
        carouselItems={carouselItems}
      />

      {/* AI Detailed Features Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mb-4">
              <FaMagic className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.ai.title}</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              {t.ai.desc}
            </p>
          </div>

          {/* Smart Configuration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-indigo-500/30 bg-gray-900">
                <Image
                  src="/images/ai_configuration.png"
                  alt="Smart Configuration Analysis"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <FaBolt className="h-6 w-6 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">{t.ai.config.title}</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t.ai.config.desc}
              </p>
            </div>
          </div>

          {/* Query Performance & Log Analysis Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Query Performance */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="mb-6 relative group/image">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover/image:opacity-60 transition duration-500"></div>
                <div className="relative rounded-lg overflow-hidden border border-indigo-500/30 bg-gray-900">
                  <Image
                    src="/images/ai_query_analysis.png"
                    alt="Query Performance Analysis"
                    width={600}
                    height={350}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaChartLine className="h-6 w-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold">{t.ai.query.title}</h3>
              </div>
              <p className="text-gray-300">
                {t.ai.query.desc}
              </p>
            </div>

            {/* Log Analysis */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="mb-6 relative group/image">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover/image:opacity-60 transition duration-500"></div>
                <div className="relative rounded-lg overflow-hidden border border-indigo-500/30 bg-gray-900">
                  <Image
                    src="/images/ai_log_analysis.png"
                    alt="Real-Time Log Analysis"
                    width={600}
                    height={350}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <FaSearchPlus className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">{t.ai.log.title}</h3>
              </div>
              <p className="text-gray-300">
                {t.ai.log.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mb-4">
                <FaBrain className="h-8 w-8 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.aiInsights.title}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.aiInsights.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 flex items-center">
                  <FaBolt className="text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-gray-300">Auto-Trigger Analysis</span>
                </div>
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 flex items-center">
                  <FaSearchPlus className="text-blue-400 mr-2" />
                  <span className="text-sm font-medium text-gray-300">Root Cause Finding</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-indigo-500/30 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/10 z-10 pointer-events-none"></div>
                <Image
                  src="/images/ai_insight.png"
                  alt="ClusterEye AI Insights"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anomaly Detection Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-red-500/30 bg-gray-900">
                <Image
                  src="/images/anomaly_detection.png"
                  alt="Anomaly Detection Dashboard"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 mb-4">
                <FaChartLine className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.anomalyDetection.title}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.anomalyDetection.desc}
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-white mb-1">135</div>
                  <div className="text-xs text-gray-400">{t.anomalyDetection.stats.total}</div>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-900/30 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">60</div>
                  <div className="text-xs text-red-300">{t.anomalyDetection.stats.critical}</div>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-900/30 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">33</div>
                  <div className="text-xs text-yellow-300">{t.anomalyDetection.stats.warning}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Drift Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-4">
                <FaExchangeAlt className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.configDrift.title}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.configDrift.desc}
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-l-4 border-gray-700 border-l-orange-500">
                  <div className="mr-3 p-2 bg-orange-500/10 rounded-full">
                    <FaCloud className="text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">pg-demo / skadi</h4>
                    <p className="text-sm text-gray-400">/etc/postgresql/15/main/pg_hba.conf</p>
                    <span className="text-xs text-orange-400 mt-1 inline-block border border-orange-500/30 px-2 py-0.5 rounded">{t.configDrift.review}</span>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-800 rounded-lg border border-l-4 border-gray-700 border-l-red-500">
                  <div className="mr-3 p-2 bg-red-500/10 rounded-full">
                    <FaDatabase className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">TEST-SQL-02</h4>
                    <p className="text-sm text-gray-400">sp_configure: max degree of parallelism</p>
                    <span className="text-xs text-red-400 mt-1 inline-block border border-red-500/30 px-2 py-0.5 rounded">{t.configDrift.impact}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-blue-500/30 bg-gray-900">
                <Image
                  src="/images/config_drift.png"
                  alt="Configuration Drift Detection"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patroni Cluster Management Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-xl overflow-hidden border border-green-500/30 bg-gray-900">
                <Image
                  src="/images/patroni_management.png"
                  alt="Patroni Cluster Management"
                  width={800}
                  height={600}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block p-3 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 mb-4">
                <FaLayerGroup className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.patroni.title}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t.patroni.desc}
              </p>

              <div className="flex gap-4">
                <button className="flex items-center px-6 py-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors">
                  <FaBolt className="mr-2" />
                  {t.patroni.failover}
                </button>
                <button className="flex items-center px-6 py-3 bg-indigo-500/10 border border-indigo-500/50 text-indigo-400 rounded-lg hover:bg-indigo-500/20 transition-colors">
                  <FaExchangeAlt className="mr-2" />
                  {t.patroni.switchover}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">{t.features.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition duration-300 border border-gray-700 group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                  <FaDatabase className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{t.features.multiDb.title}</h3>
              <p className="text-gray-400 text-center">
                {t.features.multiDb.desc}
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition duration-300 border border-gray-700 group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                  <FaRobot className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{t.features.agent.title}</h3>
              <p className="text-gray-400 text-center">
                {t.features.agent.desc}
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition duration-300 border border-gray-700 group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                  <FaCloud className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{t.features.cloud.title}</h3>
              <p className="text-gray-400 text-center">
                {t.features.cloud.desc}
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl hover:bg-gray-850 transition duration-300 border border-gray-700 group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full group-hover:from-purple-500 group-hover:to-indigo-500 transition-all duration-300">
                  <FaBrain className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{t.features.ai.title}</h3>
              <p className="text-gray-400 text-center">
                {t.features.ai.desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-10 text-gray-400">
            {t.cta.desc}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition duration-300 font-medium text-lg inline-block"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}