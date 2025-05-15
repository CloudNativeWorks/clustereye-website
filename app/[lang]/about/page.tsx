"use client";

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegLightbulb, FaChartLine, FaDatabase, FaRocket, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// About page translations
const translations = {
  tr: {
    title: "Hakkımızda",
    subtitle: "ClusterEye'da veritabanı izleme ve yönetiminde yapay zeka destekli çözümler sunarak müşterilerimizin dijital altyapısını geliştirmeye adanmış bir takımız.",
    story: {
      title: "Hikayemiz",
      p1: "ClusterEye, 2018 yılında veritabanı yönetimi konusunda uzun yıllar deneyime sahip bir ekip tarafından kurulmuştur. Amacımız, veritabanı yöneticilerinin karşılaştığı sorunlara yenilikçi çözümler sunmaktı.",
      p2: "Kurulduğumuz günden bu yana, veritabanı izleme ve yönetimi konusunda agent tabanlı yaklaşımımız ve yapay zeka destekli çözümlerimizle sektörde öncü bir konuma geldik. PostgreSQL, MongoDB ve MSSQL gibi farklı veritabanı sistemlerini destekleyerek müşterilerimize kapsamlı bir çözüm sunuyoruz.",
      p3: "Bugün, 5 milyondan fazla veritabanını izleyen ClusterEye, 50'den fazla ülkede 250'den fazla kurumsal müşteriye hizmet vermektedir. Amacımız, müşterilerimizin veritabanı performansını optimize ederek iş süreçlerini iyileştirmek ve kesinti sürelerini minimuma indirmektir."
    },
    mission: {
      title: "Misyonumuz",
      description: "Veritabanı yönetimini basitleştirmek ve otomatikleştirmek için yenilikçi çözümler geliştirerek, müşterilerimizin dijital altyapılarının güvenilir, verimli ve kesintisiz çalışmasını sağlamak."
    },
    vision: {
      title: "Vizyonumuz",
      description: "Yapay zeka destekli teknolojilerimizle veritabanı izleme ve yönetimi alanında dünya lideri olmak ve her ölçekteki işletmenin veritabanı performansını en üst düzeye çıkarmalarına yardımcı olmak."
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "İnovasyon",
          description: "Veritabanı izleme alanında yenilikçi çözümler geliştirmek için sürekli araştırma ve geliştirme yapıyoruz."
        },
        {
          title: "Performans",
          description: "Müşterilerimizin veritabanlarından en yüksek performansı almalarını sağlamak için çalışıyoruz."
        },
        {
          title: "Güvenilirlik",
          description: "Kesintisiz ve güvenilir izleme sistemleri geliştirerek kritik veritabanı sistemlerinin sürekli çalışmasını sağlıyoruz."
        },
        {
          title: "Müşteri Başarısı",
          description: "Müşterilerimizin başarısını kendi başarımız olarak görüyor ve onlara en iyi desteği sunuyoruz."
        }
      ]
    },
    achievements: {
      title: "Rakamlarla ClusterEye",
      items: [
        { value: "5M+", label: "Veritabanı" },
        { value: "100K+", label: "Agent" },
        { value: "50+", label: "Ülke" },
        { value: "250+", label: "Müşteri" }
      ]
    },
    team: {
      title: "Ekibimiz",
      members: [
        {
          name: "Ahmet Yılmaz",
          role: "Kurucu ve CEO",
          bio: "20 yıllık veritabanı yönetimi ve yazılım geliştirme deneyimine sahip. Daha önce Oracle ve Microsoft'ta çalıştı."
        },
        {
          name: "Zeynep Kaya",
          role: "CTO",
          bio: "15 yıllık yazılım geliştirme ve veri analitiği deneyimi. PostgreSQL ve MongoDB konusunda uzman ve açık kaynak projeler katkı sağlıyor."
        },
        {
          name: "Mehmet Demir",
          role: "AI Araştırma Direktörü",
          bio: "Yapay zeka ve makine öğrenimi alanında doktora derecesine sahip. Daha önce Google AI ve Amazon'da çalıştı."
        },
        {
          name: "Elif Şahin",
          role: "Ürün Müdürü",
          bio: "Kullanıcı odaklı ürün geliştirme konusunda 10 yıllık deneyim. Müşteri geri bildirimleri doğrultusunda ürünün şekillenmesini sağlıyor."
        }
      ]
    },
    contact: {
      title: "Bize Ulaşın",
      office: "Merkez Ofis",
      address: "Maslak Mahallesi Büyükdere Caddesi No:255\nNurol Plaza B.02\n34398 Sarıyer / İstanbul\nTürkiye",
      contactInfo: "İletişim",
      phone: "Telefon: +90 212 555 66 77",
      email: "E-posta: info@clustereye.com",
      formButton: "İletişim Formunu Doldur"
    },
    location: {
      title: "Konum",
      map: "Harita Görseli - Google Maps Embed"
    },
    joinUs: {
      title: "Ekibimize Katılın",
      description: "ClusterEye olarak sürekli büyüyor ve yenilikçi fikirlerle dolu tutkulu profesyoneller arıyoruz. Veritabanı izleme ve yapay zeka alanında geleceği birlikte şekillendirelim.",
      button: "Açık Pozisyonlarımızı Görün"
    }
  },
  en: {
    title: "About Us",
    subtitle: "At ClusterEye, we are a team dedicated to enhancing our customers' digital infrastructure by providing AI-powered solutions for database monitoring and management.",
    story: {
      title: "Our Story",
      p1: "ClusterEye was founded in 2018 by a team with many years of experience in database management. Our goal was to provide innovative solutions to the problems faced by database administrators.",
      p2: "Since our founding, we have become a leader in the industry with our agent-based approach and AI-powered solutions for database monitoring and management. We provide a comprehensive solution to our customers by supporting different database systems like PostgreSQL, MongoDB, and MSSQL.",
      p3: "Today, ClusterEye monitors more than 5 million databases and serves more than 250 corporate customers in more than 50 countries. Our aim is to improve our customers' business processes by optimizing database performance and minimizing downtime."
    },
    mission: {
      title: "Our Mission",
      description: "To develop innovative solutions to simplify and automate database management, ensuring reliable, efficient, and uninterrupted operation of our customers' digital infrastructure."
    },
    vision: {
      title: "Our Vision",
      description: "To become a world leader in database monitoring and management with our AI-powered technologies and help businesses of all sizes maximize their database performance."
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Innovation",
          description: "We continuously research and develop to create innovative solutions in the field of database monitoring."
        },
        {
          title: "Performance",
          description: "We work to ensure that our customers get the highest performance from their databases."
        },
        {
          title: "Reliability",
          description: "We ensure the continuous operation of critical database systems by developing uninterrupted and reliable monitoring systems."
        },
        {
          title: "Customer Success",
          description: "We view our customers' success as our own and provide them with the best support."
        }
      ]
    },
    achievements: {
      title: "ClusterEye in Numbers",
      items: [
        { value: "5M+", label: "Databases" },
        { value: "100K+", label: "Agents" },
        { value: "50+", label: "Countries" },
        { value: "250+", label: "Customers" }
      ]
    },
    team: {
      title: "Our Team",
      members: [
        {
          name: "Ahmet Yılmaz",
          role: "Founder and CEO",
          bio: "20 years of experience in database management and software development. Previously worked at Oracle and Microsoft."
        },
        {
          name: "Zeynep Kaya",
          role: "CTO",
          bio: "15 years of experience in software development and data analytics. Expert in PostgreSQL and MongoDB and contributes to open source projects."
        },
        {
          name: "Mehmet Demir",
          role: "AI Research Director",
          bio: "PhD in artificial intelligence and machine learning. Previously worked at Google AI and Amazon."
        },
        {
          name: "Elif Şahin",
          role: "Product Manager",
          bio: "10 years of experience in user-centered product development. Shapes the product based on customer feedback."
        }
      ]
    },
    contact: {
      title: "Contact Us",
      office: "Headquarters",
      address: "Maslak Mahallesi Büyükdere Caddesi No:255\nNurol Plaza B.02\n34398 Sarıyer / İstanbul\nTurkey",
      contactInfo: "Contact Info",
      phone: "Phone: +90 212 555 66 77",
      email: "Email: info@clustereye.com",
      formButton: "Fill Out Contact Form"
    },
    location: {
      title: "Location",
      map: "Map Image - Google Maps Embed"
    },
    joinUs: {
      title: "Join Our Team",
      description: "As ClusterEye, we are continuously growing and looking for passionate professionals with innovative ideas. Let's shape the future of database monitoring and artificial intelligence together.",
      button: "See Our Open Positions"
    }
  }
};

export default function About({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  // Icons mapping
  const icons = {
    innovation: <FaRegLightbulb className="w-10 h-10 text-purple-400" />,
    performance: <FaChartLine className="w-10 h-10 text-purple-400" />,
    reliability: <FaDatabase className="w-10 h-10 text-purple-400" />,
    customerSuccess: <FaRocket className="w-10 h-10 text-purple-400" />
  };
  
  // Map the values to include icons
  const values = t.values.items.map((item, index) => ({
    ...item,
    icon: Object.values(icons)[index]
  }));

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
      
      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-indigo-700/20 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <span className="text-gray-500">{lang === 'tr' ? 'Şirket Ofisi Görseli' : 'Company Office Image'}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">{t.story.title}</h2>
              <div className="space-y-4 text-gray-300">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
                <p>{t.story.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">{t.mission.title}</h3>
              <p className="text-gray-300">
                {t.mission.description}
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">{t.vision.title}</h3>
              <p className="text-gray-300">
                {t.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.values.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>
                <p className="text-gray-300 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-indigo-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.achievements.title}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.achievements.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-lg text-purple-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t.team.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.team.members.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="relative h-64 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">{`/images/team/${member.name.split(' ')[0].toLowerCase()}.jpg`}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location & Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 h-full">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t.contact.office}</h3>
                    <p className="text-gray-300 whitespace-pre-line">
                      {t.contact.address}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{t.contact.contactInfo}</h3>
                    <p className="text-gray-300">
                      {t.contact.phone}<br />
                      {t.contact.email}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      href={`/${lang}/contact`}
                      className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                      {t.contact.formButton}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">{t.location.title}</h2>
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-80 lg:h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">{t.location.map}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-8 border border-gray-700 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t.joinUs.title}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t.joinUs.description}
          </p>
          <Link 
            href={`/${lang}/career`}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300"
          >
            {t.joinUs.button}
          </Link>
        </div>
      </section>
    </div>
  );
} 