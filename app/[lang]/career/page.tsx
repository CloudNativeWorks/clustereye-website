"use client";

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaDatabase, FaBriefcase, FaGraduationCap, FaHandshake, FaLeaf, FaLaptopCode, FaUsers, FaCoffee, FaRegLightbulb } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Career page translations
const translations = {
  tr: {
    title: "Kariyer",
    subtitle: "ClusterEye ekibine katılın ve veritabanı izleme teknolojilerinin geleceğini birlikte şekillendirelim.",
    companyCulture: {
      title: "Şirket Kültürümüz",
      description: "ClusterEye'da inovasyon, işbirliği ve mükemmelliği teşvik eden bir ortam yaratıyoruz.",
      values: [
        {
          icon: <FaRegLightbulb className="w-10 h-10" />,
          title: "İnovasyon",
          description: "Sürekli olarak yeni fikirler üretir ve geleneksel yaklaşımları sorgularız."
        },
        {
          icon: <FaUsers className="w-10 h-10" />,
          title: "İşbirliği",
          description: "Başarıya ekip çalışması ile ulaşacağımıza inanıyor ve farklı bakış açılarını değerlendiriyoruz."
        },
        {
          icon: <FaHandshake className="w-10 h-10" />,
          title: "Dürüstlük",
          description: "Açık iletişim ve dürüstlük, müşterilerimizle ve çalışma arkadaşlarımızla olan ilişkilerimizin temelini oluşturur."
        },
        {
          icon: <FaLaptopCode className="w-10 h-10" />,
          title: "Mükemmellik",
          description: "Yaptığımız her işte en yüksek kalite standartlarını korumayı hedefliyoruz."
        }
      ]
    },
    benefits: {
      title: "Çalışan Avantajları",
      description: "Çalışanlarımıza sunduğumuz avantajlarla, işte ve yaşamda dengeyi sağlamanıza yardımcı oluyoruz.",
      items: [
        {
          icon: <FaLeaf className="w-6 h-6 text-green-400" />,
          title: "Esnek Çalışma",
          description: "Remote çalışma imkanı ve esnek çalışma saatleri"
        },
        {
          icon: <FaGraduationCap className="w-6 h-6 text-blue-400" />,
          title: "Eğitim Bütçesi",
          description: "Kişisel ve profesyonel gelişiminiz için yıllık eğitim bütçesi"
        },
        {
          icon: <FaCoffee className="w-6 h-6 text-amber-400" />,
          title: "Ofis İmkanları",
          description: "Modern ofis ortamı, ücretsiz içecekler ve atıştırmalıklar"
        },
        {
          icon: <FaBriefcase className="w-6 h-6 text-purple-400" />,
          title: "Sağlık Sigortası",
          description: "Kapsamlı özel sağlık sigortası"
        }
      ]
    },
    openPositions: {
      title: "Açık Pozisyonlar",
      description: "Aşağıdaki pozisyonlar için başvurularınızı bekliyoruz. Sizin için uygun bir pozisyon bulamadıysanız, özgeçmişinizi careers@clustereye.com adresine gönderebilirsiniz.",
      positions: [
        {
          id: 1,
          title: "Senior Backend Geliştirici",
          location: "İstanbul, Türkiye / Remote",
          department: "Mühendislik",
          type: "Tam Zamanlı",
          description: "ClusterEye'ın veritabanı izleme ve analiz sistemlerinin backend altyapısını geliştirmek için deneyimli bir geliştirici arıyoruz.",
          responsibilities: [
            "ClusterEye'ın veritabanı izleme sistemlerinin backend mimarisini tasarlamak ve geliştirmek",
            "Yüksek performanslı ve ölçeklenebilir REST API'ları oluşturmak",
            "Veritabanı sistemleri (PostgreSQL, MongoDB, MSSQL) ile entegrasyon geliştirmek",
            "Agent sistemlerini ve izleme altyapısını optimize etmek",
            "Kod incelemeleri yapmak ve junior geliştiricilere mentorluk etmek"
          ],
          requirements: [
            "Backend geliştirmede en az 5 yıl deneyim",
            "Node.js, Python, Go veya Java dillerinden en az birinde uzmanlık",
            "PostgreSQL, MongoDB ve MSSQL gibi veritabanları ile çalışma deneyimi",
            "Microservice mimarisi ve Docker container'ları hakkında bilgi",
            "CI/CD süreçlerine aşinalık",
            "İyi düzeyde İngilizce"
          ]
        },
        {
          id: 2,
          title: "AI/ML Mühendisi",
          location: "İstanbul, Türkiye / Remote",
          department: "Yapay Zeka",
          type: "Tam Zamanlı",
          description: "Veritabanı performans analizi ve optimizasyonu için yapay zeka ve makine öğrenimi modelleri geliştirecek bir uzman arıyoruz.",
          responsibilities: [
            "Veritabanı performansını analiz eden ve optimize eden AI/ML modelleri geliştirmek",
            "Zaman serisi verilerinden anomali tespiti algoritmaları tasarlamak",
            "Log dosyalarını analiz eden doğal dil işleme modelleri oluşturmak",
            "AI modellerini ürün olarak entegre etmek ve performanslarını izlemek",
            "Araştırma ve geliştirme çalışmalarını yürütmek"
          ],
          requirements: [
            "Yapay zeka ve makine öğrenimi alanında en az 3 yıl deneyim",
            "Python ve ML kütüphaneleri (TensorFlow, PyTorch, scikit-learn) konusunda uzmanlık",
            "Zaman serisi analizi ve anomali tespiti deneyimi",
            "Veritabanı sistemleri hakkında bilgi",
            "Araştırma makaleleri okuyup uygulama yeteneği",
            "Yüksek lisans veya doktora derecesi tercih sebebi"
          ]
        },
        {
          id: 3,
          title: "Frontend Geliştirici",
          location: "İstanbul, Türkiye / Remote",
          department: "Mühendislik",
          type: "Tam Zamanlı",
          description: "ClusterEye'ın kullanıcı arayüzünü tasarlayacak ve geliştirecek, modern web teknolojilerine hakim bir frontend geliştirici arıyoruz.",
          responsibilities: [
            "Modern, responsive ve kullanıcı dostu arayüzler tasarlamak ve geliştirmek",
            "Veritabanı metriklerini görselleştiren dashboard ve grafikler oluşturmak",
            "Backend API'lar ile entegrasyon yapmak",
            "UI/UX tasarım ekibi ile işbirliği yapmak",
            "Performans optimizasyonu ve ön yüz testleri gerçekleştirmek"
          ],
          requirements: [
            "Frontend geliştirmede en az 3 yıl deneyim",
            "React, Vue veya Angular gibi modern JavaScript frameworklerinde uzmanlık",
            "HTML, CSS, JavaScript/TypeScript konusunda ileri seviye bilgi",
            "Veri görselleştirme kütüphaneleri (D3.js, Chart.js) deneyimi",
            "Responsive tasarım ve cross-browser uyumluluğu konusunda deneyim",
            "UI/UX prensipleri hakkında bilgi"
          ]
        },
        {
          id: 4,
          title: "Veritabanı Uzmanı/DBA",
          location: "İstanbul, Türkiye / Remote",
          department: "Operasyonlar",
          type: "Tam Zamanlı",
          description: "PostgreSQL, MongoDB ve MSSQL veritabanlarında derin bilgiye sahip, izleme ve optimizasyon konusunda uzman bir veritabanı yöneticisi arıyoruz.",
          responsibilities: [
            "ClusterEye'ın veritabanı izleme agentleri ve sistemleri için uzmanlık sağlamak",
            "Farklı veritabanı sistemleri için optimizasyon önerileri geliştirmek",
            "Veritabanı performans ölçümlerini ve metriklerini tanımlamak",
            "Ürün geliştirme sürecinde teknik danışmanlık yapmak",
            "Müşteri veritabanı sorunlarında ileri seviye destek sağlamak"
          ],
          requirements: [
            "Veritabanı yönetiminde en az 5 yıl deneyim",
            "PostgreSQL, MongoDB ve MSSQL konusunda derin bilgi",
            "Veritabanı performans analizi ve optimizasyonu deneyimi",
            "Query optimizasyonu ve execution plan analizi yeteneği",
            "SQL ve NoSQL veritabanlarının iç mimarisi hakkında bilgi"
          ]
        }
      ],
      expandJob: "Detaylar",
      collapseJob: "Daralt",
      responsibilities: "Sorumluluklar",
      requirements: "Gereksinimler",
      apply: "Başvuru Yap"
    },
    applicationProcess: {
      title: "Başvuru Süreci",
      description: "ClusterEye'da işe alım sürecimiz hakkında bilgi edinebilirsiniz.",
      steps: [
        {
          title: "Başvuru",
          description: "Özgeçmişinizi ve uygun görüyorsanız portfolyonuzu career@clustereye.com adresine veya açık pozisyonlarımıza doğrudan başvurarak gönderebilirsiniz."
        },
        {
          title: "İnceleme",
          description: "Başvurunuz İK ekibimiz tarafından değerlendirilir ve uygun olması durumunda 1 hafta içinde sizinle iletişime geçilir."
        },
        {
          title: "Teknik Görüşme",
          description: "Teknik ekibimizden bir veya birkaç kişi ile görüşme yaparsınız. Bu görüşmede teknik bilgi ve becerileriniz değerlendirilir."
        },
        {
          title: "Kültür Uyumu",
          description: "Şirket kültürümüzle uyumunuzu değerlendirmek için takım üyeleriyle ve yönetimle ek görüşmeler yapılır."
        },
        {
          title: "Teklif",
          description: "Tüm görüşmelerin başarıyla tamamlanması durumunda size bir iş teklifi sunulur. Teklif, maaş, yan haklar ve başlangıç tarihini içerir."
        }
      ]
    },
    cta: {
      title: "ClusterEye Ekibine Katılmaya Hazır mısınız?",
      description: "Veritabanı izleme ve yapay zeka teknolojilerinde öncü bir şirkette kariyerinizi geliştirmek için hemen başvurun.",
      button: "Hemen Başvur"
    }
  },
  en: {
    title: "Careers",
    subtitle: "Join the ClusterEye team and shape the future of database monitoring technologies together.",
    companyCulture: {
      title: "Our Company Culture",
      description: "At ClusterEye, we create an environment that promotes innovation, collaboration, and excellence.",
      values: [
        {
          icon: <FaRegLightbulb className="w-10 h-10" />,
          title: "Innovation",
          description: "We continuously generate new ideas and question traditional approaches."
        },
        {
          icon: <FaUsers className="w-10 h-10" />,
          title: "Collaboration",
          description: "We believe in achieving success through teamwork and value different perspectives."
        },
        {
          icon: <FaHandshake className="w-10 h-10" />,
          title: "Integrity",
          description: "Open communication and honesty form the foundation of our relationships with customers and colleagues."
        },
        {
          icon: <FaLaptopCode className="w-10 h-10" />,
          title: "Excellence",
          description: "We aim to maintain the highest quality standards in everything we do."
        }
      ]
    },
    benefits: {
      title: "Employee Benefits",
      description: "With the benefits we offer to our employees, we help you maintain balance in work and life.",
      items: [
        {
          icon: <FaLeaf className="w-6 h-6 text-green-400" />,
          title: "Flexible Work",
          description: "Remote work options and flexible working hours"
        },
        {
          icon: <FaGraduationCap className="w-6 h-6 text-blue-400" />,
          title: "Education Budget",
          description: "Annual education budget for your personal and professional development"
        },
        {
          icon: <FaCoffee className="w-6 h-6 text-amber-400" />,
          title: "Office Amenities",
          description: "Modern office environment, free drinks and snacks"
        },
        {
          icon: <FaBriefcase className="w-6 h-6 text-purple-400" />,
          title: "Health Insurance",
          description: "Comprehensive private health insurance"
        }
      ]
    },
    openPositions: {
      title: "Open Positions",
      description: "We're waiting for your applications for the following positions. If you can't find a suitable position for you, you can send your resume to careers@clustereye.com.",
      positions: [
        {
          id: 1,
          title: "Senior Backend Developer",
          location: "Istanbul, Turkey / Remote",
          department: "Engineering",
          type: "Full-Time",
          description: "We are looking for an experienced developer to develop the backend infrastructure of ClusterEye's database monitoring and analysis systems.",
          responsibilities: [
            "Design and develop the backend architecture of ClusterEye's database monitoring systems",
            "Create high-performance and scalable REST APIs",
            "Develop integration with database systems (PostgreSQL, MongoDB, MSSQL)",
            "Optimize agent systems and monitoring infrastructure",
            "Conduct code reviews and mentor junior developers"
          ],
          requirements: [
            "At least 5 years of experience in backend development",
            "Expertise in at least one of Node.js, Python, Go, or Java",
            "Experience working with databases such as PostgreSQL, MongoDB, and MSSQL",
            "Knowledge of microservice architecture and Docker containers",
            "Familiarity with CI/CD processes",
            "Good level of English"
          ]
        },
        {
          id: 2,
          title: "AI/ML Engineer",
          location: "Istanbul, Turkey / Remote",
          department: "Artificial Intelligence",
          type: "Full-Time",
          description: "We are looking for an expert to develop artificial intelligence and machine learning models for database performance analysis and optimization.",
          responsibilities: [
            "Develop AI/ML models that analyze and optimize database performance",
            "Design anomaly detection algorithms from time-series data",
            "Create natural language processing models that analyze log files",
            "Integrate AI models as products and monitor their performance",
            "Conduct research and development studies"
          ],
          requirements: [
            "At least 3 years of experience in artificial intelligence and machine learning",
            "Expertise in Python and ML libraries (TensorFlow, PyTorch, scikit-learn)",
            "Experience in time series analysis and anomaly detection",
            "Knowledge of database systems",
            "Ability to read and implement research papers",
            "Master's or PhD degree preferred"
          ]
        },
        {
          id: 3,
          title: "Frontend Developer",
          location: "Istanbul, Turkey / Remote",
          department: "Engineering",
          type: "Full-Time",
          description: "We are looking for a frontend developer proficient in modern web technologies to design and develop ClusterEye's user interface.",
          responsibilities: [
            "Design and develop modern, responsive, and user-friendly interfaces",
            "Create dashboards and graphs that visualize database metrics",
            "Integrate with backend APIs",
            "Collaborate with the UI/UX design team",
            "Perform performance optimization and frontend testing"
          ],
          requirements: [
            "At least 3 years of experience in frontend development",
            "Expertise in modern JavaScript frameworks such as React, Vue, or Angular",
            "Advanced knowledge of HTML, CSS, JavaScript/TypeScript",
            "Experience with data visualization libraries (D3.js, Chart.js)",
            "Experience in responsive design and cross-browser compatibility",
            "Knowledge of UI/UX principles"
          ]
        },
        {
          id: 4,
          title: "Database Expert/DBA",
          location: "Istanbul, Turkey / Remote",
          department: "Operations",
          type: "Full-Time",
          description: "We are looking for a database administrator with deep knowledge in PostgreSQL, MongoDB, and MSSQL databases, and expertise in monitoring and optimization.",
          responsibilities: [
            "Provide expertise for ClusterEye's database monitoring agents and systems",
            "Develop optimization recommendations for different database systems",
            "Define database performance measurements and metrics",
            "Provide technical consultancy in the product development process",
            "Provide advanced support for customer database issues"
          ],
          requirements: [
            "At least 5 years of experience in database management",
            "Deep knowledge of PostgreSQL, MongoDB, and MSSQL",
            "Experience in database performance analysis and optimization",
            "Query optimization and execution plan analysis skills",
            "Knowledge of the internal architecture of SQL and NoSQL databases"
          ]
        }
      ],
      expandJob: "Details",
      collapseJob: "Collapse",
      responsibilities: "Responsibilities",
      requirements: "Requirements",
      apply: "Apply"
    },
    applicationProcess: {
      title: "Application Process",
      description: "You can learn about our hiring process at ClusterEye.",
      steps: [
        {
          title: "Application",
          description: "You can send your resume and, if appropriate, your portfolio by applying directly to our open positions or to career@clustereye.com."
        },
        {
          title: "Review",
          description: "Your application is evaluated by our HR team, and if suitable, they will contact you within 1 week."
        },
        {
          title: "Technical Interview",
          description: "You will have an interview with one or more people from our technical team. Your technical knowledge and skills will be evaluated in this interview."
        },
        {
          title: "Culture Fit",
          description: "Additional interviews are conducted with team members and management to assess your compatibility with our company culture."
        },
        {
          title: "Offer",
          description: "If all interviews are successfully completed, you will be presented with a job offer. The offer includes salary, benefits, and start date."
        }
      ]
    },
    cta: {
      title: "Are You Ready to Join the ClusterEye Team?",
      description: "Apply now to develop your career at a pioneering company in database monitoring and artificial intelligence technologies.",
      button: "Apply Now"
    }
  }
};

export default function Career({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  const toggleJob = (id: number) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
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
      
      {/* Company Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.companyCulture.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.companyCulture.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.companyCulture.values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="flex justify-center mb-4 text-purple-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.benefits.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.benefits.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-200">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.openPositions.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.openPositions.description}
            </p>
          </div>
          
          <div className="space-y-6">
            {t.openPositions.positions.map((job) => (
              <div 
                key={job.id} 
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200"
              >
                <div 
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between"
                  onClick={() => toggleJob(job.id)}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">{job.location}</span>
                      <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full">{job.department}</span>
                      <span className="px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full">{job.type}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="mt-4 md:mt-0 self-start md:self-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300"
                  >
                    {expandedJob === job.id ? t.openPositions.collapseJob : t.openPositions.expandJob}
                  </button>
                </div>
                
                {expandedJob === job.id && (
                  <div className="p-6 pt-0 border-t border-gray-700">
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{t.openPositions.responsibilities}</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">{t.openPositions.requirements}</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        {job.requirements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-end">
                      <a 
                        href={`mailto:careers@clustereye.com?subject=Application: ${job.title}`}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg font-medium transition duration-300"
                      >
                        {t.openPositions.apply}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.applicationProcess.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.applicationProcess.description}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-indigo-600 md:left-1/2"></div>
            
            <div className="space-y-12">
              {t.applicationProcess.steps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row">
                  {index % 2 === 0 ? (
                    <>
                      <div className="md:w-1/2 md:pr-8 md:text-right">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -ml-2 md:-ml-2.5 h-5 w-5 rounded-full bg-purple-500 z-10"></div>
                      <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-1/2 md:pr-8 md:text-right"></div>
                      <div className="absolute left-0 md:left-1/2 mt-1.5 -ml-2 md:-ml-2.5 h-5 w-5 rounded-full bg-purple-500 z-10"></div>
                      <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-8 text-center border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t.cta.description}
          </p>
          <a 
            href="mailto:careers@clustereye.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg rounded-lg font-medium transition duration-300 inline-block"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
    </div>
  );
} 