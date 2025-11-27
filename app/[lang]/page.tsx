import Image from "next/image";
import Link from "next/link";
import {
  FaDatabase, FaCloud, FaRobot, FaSearchPlus, FaApple, FaBrain, FaBolt, FaChartLine, FaMagic,
  FaExchangeAlt, FaChartBar, FaLayerGroup
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
    platforms: {
      title: "Her Platformda Erişim",
      ios: {
        title: "iOS Mobil Uygulama",
        desc: "Hareket halindeyken bile veritabanlarınızı takip edin. iOS uygulamamız ile kritik metriklerinizi izleyin, anlık bildirimler alın ve acil müdahaleler gerçekleştirin.",
        feature1: "Anlık bildirimler ve uyarılar",
        feature2: "Hızlı müdahale araçları",
        feature3: "Mobil optimizasyon desteği",
        button: "iOS Uygulamasını İndir"
      }
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
    platforms: {
      title: "Access on Every Platform",
      ios: {
        title: "iOS Mobile App",
        desc: "Track your databases even while on the move. Monitor your critical metrics, receive instant notifications, and perform emergency interventions with our iOS app.",
        feature1: "Instant notifications and alerts",
        feature2: "Quick intervention tools",
        feature3: "Mobile optimization support",
        button: "Download iOS App"
      }
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

      {/* AI Integration Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mb-4">
              <FaBrain className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.ai.title}</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              {t.ai.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-900 to-gray-850 p-8 rounded-xl border border-gray-800 shadow-xl group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20 transition-all duration-300">
              <div className="flex items-start mb-5">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <FaBolt className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ai.config.title}</h3>
                  <p className="text-gray-300">
                    {t.ai.config.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-5">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <FaChartLine className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ai.query.title}</h3>
                  <p className="text-gray-300">
                    {t.ai.query.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <FaSearchPlus className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ai.log.title}</h3>
                  <p className="text-gray-300">
                    {t.ai.log.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-70 z-0"></div>
              <Image
                src="/images/ai_query_analysis.png"
                alt="AI-Powered Query Analysis"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                <h3 className="text-lg font-semibold text-white">{t.ai.screenshot.title}</h3>
                <p className="text-sm text-gray-300">
                  {t.ai.screenshot.desc}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-850 p-8 rounded-xl border border-gray-800 shadow-xl group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20 transition-all duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <FaMagic className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ai.anomaly.title}</h3>
                  <p className="text-gray-300">
                    {t.ai.anomaly.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-850 p-8 rounded-xl border border-gray-800 shadow-xl group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20 transition-all duration-300">
              <div className="flex items-start">
                <div className="p-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg mr-4 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300">
                  <FaBrain className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t.ai.assistant.title}</h3>
                  <p className="text-gray-300">
                    {t.ai.assistant.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Your Cluster Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 mb-4">
              <FaDatabase className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{t.cluster.title}</h2>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              {t.cluster.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-gray-900 to-gray-850 p-8 rounded-xl border border-gray-800 shadow-xl group hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:border-purple-900/20 transition-all duration-300">
              <ClientSideIconSection
                autoFailover={{
                  title: t.cluster.autoFailover.title,
                  desc: t.cluster.autoFailover.desc
                }}
                monitoring={{
                  title: t.cluster.monitoring.title,
                  desc: t.cluster.monitoring.desc
                }}
                scaling={{
                  title: t.cluster.scaling.title,
                  desc: t.cluster.scaling.desc
                }}
              />
            </div>

            <div className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/10 to-indigo-800/10 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-70 z-0"></div>
              <Image
                src="/images/cluster_control.png"
                alt="PostgreSQL Cluster Control"
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-4">
                <h3 className="text-lg font-semibold text-white">{t.cluster.screenshot.title}</h3>
                <p className="text-sm text-gray-300">
                  {t.cluster.screenshot.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Platforms Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t.platforms.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 p-6 rounded-xl border border-indigo-800/50">
                <div className="flex items-center mb-4">
                  <FaApple className="h-8 w-8 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-semibold">{t.platforms.ios.title}</h3>
                </div>
                <p className="mb-4 text-gray-300">
                  {t.platforms.ios.desc}
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t.platforms.ios.feature1}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t.platforms.ios.feature2}
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t.platforms.ios.feature3}
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href={`/${lang}/ios-app`} className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition duration-300 w-full sm:w-auto sm:inline-flex">
                    <FaApple className="mr-2 h-5 w-5" />
                    {t.platforms.ios.button}
                  </Link>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              {/* iPhone Mockup */}
              <div className="relative w-full max-w-[280px] group transition-all duration-500 hover:scale-[1.03]">
                {/* iPhone Outer Frame */}
                <div className="relative mx-auto w-full aspect-[9/19.5] bg-gray-800 rounded-[3rem] overflow-hidden border-[14px] border-gray-900 shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-20"></div>

                  {/* iPhone Inner Screen */}
                  <div className="relative w-full h-full overflow-hidden rounded-[2rem] z-10">
                    <Image
                      src="/images/ios_screenshot.png"
                      alt="ClusterEye iOS App"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>

                  {/* iPhone Bottom Line (Home Indicator) */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full z-20"></div>

                  {/* Speaker */}
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-16 h-[4px] bg-gray-700 rounded-full z-20"></div>

                  {/* Side Buttons */}
                  <div className="absolute top-24 -right-[14px] w-[2px] h-12 bg-gray-700 rounded-l-sm"></div>
                  <div className="absolute top-[140px] -right-[14px] w-[2px] h-16 bg-gray-700 rounded-l-sm"></div>
                  <div className="absolute top-24 -left-[14px] w-[2px] h-12 bg-gray-700 rounded-r-sm"></div>
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-indigo-500/10 to-purple-500/15 rounded-[3rem] pointer-events-none"></div>
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