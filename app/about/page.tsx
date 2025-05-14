"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegLightbulb, FaChartLine, FaDatabase, FaRocket, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function About() {
  // Şirket değerleri
  const values = [
    {
      icon: <FaRegLightbulb className="w-10 h-10 text-purple-400" />,
      title: "İnovasyon",
      description: "Veritabanı izleme alanında yenilikçi çözümler geliştirmek için sürekli araştırma ve geliştirme yapıyoruz."
    },
    {
      icon: <FaChartLine className="w-10 h-10 text-purple-400" />,
      title: "Performans",
      description: "Müşterilerimizin veritabanlarından en yüksek performansı almalarını sağlamak için çalışıyoruz."
    },
    {
      icon: <FaDatabase className="w-10 h-10 text-purple-400" />,
      title: "Güvenilirlik",
      description: "Kesintisiz ve güvenilir izleme sistemleri geliştirerek kritik veritabanı sistemlerinin sürekli çalışmasını sağlıyoruz."
    },
    {
      icon: <FaRocket className="w-10 h-10 text-purple-400" />,
      title: "Müşteri Başarısı",
      description: "Müşterilerimizin başarısını kendi başarımız olarak görüyor ve onlara en iyi desteği sunuyoruz."
    }
  ];
  
  // Ekip üyeleri
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu ve CEO",
      bio: "20 yıllık veritabanı yönetimi ve yazılım geliştirme deneyimine sahip. Daha önce Oracle ve Microsoft'ta çalıştı.",
      image: "/images/team/ahmet.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Zeynep Kaya",
      role: "CTO",
      bio: "15 yıllık yazılım geliştirme ve veri analitiği deneyimi. PostgreSQL ve MongoDB konusunda uzman ve açık kaynak projeler katkı sağlıyor.",
      image: "/images/team/zeynep.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mehmet Demir",
      role: "AI Araştırma Direktörü",
      bio: "Yapay zeka ve makine öğrenimi alanında doktora derecesine sahip. Daha önce Google AI ve Amazon'da çalıştı.",
      image: "/images/team/mehmet.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Elif Şahin",
      role: "Ürün Müdürü",
      bio: "Kullanıcı odaklı ürün geliştirme konusunda 10 yıllık deneyim. Müşteri geri bildirimleri doğrultusunda ürünün şekillenmesini sağlıyor.",
      image: "/images/team/elif.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];
  
  // Şirket başarıları
  const achievements = [
    { value: "5M+", label: "Veritabanı" },
    { value: "100K+", label: "Agent" },
    { value: "50+", label: "Ülke" },
    { value: "250+", label: "Müşteri" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Hakkımızda</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            ClusterEye'da veritabanı izleme ve yönetiminde yapay zeka destekli çözümler sunarak müşterilerimizin dijital altyapısını geliştirmeye adanmış bir takımız.
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
                  <span className="text-gray-500">Şirket Ofisi Görseli</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  ClusterEye, 2018 yılında veritabanı yönetimi konusunda uzun yıllar deneyime sahip bir ekip tarafından kurulmuştur. Amacımız, veritabanı yöneticilerinin karşılaştığı sorunlara yenilikçi çözümler sunmaktı.
                </p>
                <p>
                  Kurulduğumuz günden bu yana, veritabanı izleme ve yönetimi konusunda agent tabanlı yaklaşımımız ve yapay zeka destekli çözümlerimizle sektörde öncü bir konuma geldik. PostgreSQL, MongoDB ve MSSQL gibi farklı veritabanı sistemlerini destekleyerek müşterilerimize kapsamlı bir çözüm sunuyoruz.
                </p>
                <p>
                  Bugün, 5 milyondan fazla veritabanını izleyen ClusterEye, 50'den fazla ülkede 250'den fazla kurumsal müşteriye hizmet vermektedir. Amacımız, müşterilerimizin veritabanı performansını optimize ederek iş süreçlerini iyileştirmek ve kesinti sürelerini minimuma indirmektir.
                </p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Misyonumuz</h3>
              <p className="text-gray-300">
                Veritabanı yönetimini basitleştirmek ve otomatikleştirmek için yenilikçi çözümler geliştirerek, müşterilerimizin dijital altyapılarının güvenilir, verimli ve kesintisiz çalışmasını sağlamak.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Vizyonumuz</h3>
              <p className="text-gray-300">
                Yapay zeka destekli teknolojilerimizle veritabanı izleme ve yönetimi alanında dünya lideri olmak ve her ölçekteki işletmenin veritabanı performansını en üst düzeye çıkarmalarına yardımcı olmak.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Değerlerimiz</h2>
          
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Rakamlarla ClusterEye</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Ekibimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-purple-500/10">
                <div className="relative h-64 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">{member.image}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
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
              <h2 className="text-3xl font-bold text-white mb-6">Bize Ulaşın</h2>
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 h-full">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Merkez Ofis</h3>
                    <p className="text-gray-300">
                      Maslak Mahallesi Büyükdere Caddesi No:255<br />
                      Nurol Plaza B.02<br />
                      34398 Sarıyer / İstanbul<br />
                      Türkiye
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">İletişim</h3>
                    <p className="text-gray-300">
                      Telefon: +90 212 555 66 77<br />
                      E-posta: info@clustereye.com
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Link 
                      href="/contact"
                      className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                    >
                      İletişim Formunu Doldur
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Konum</h2>
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-80 lg:h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">Harita Görseli - Google Maps Embed</span>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ekibimize Katılın</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ClusterEye olarak sürekli büyüyor ve yenilikçi fikirlerle dolu tutkulu profesyoneller arıyoruz. Veritabanı izleme ve yapay zeka alanında geleceği birlikte şekillendirelim.
          </p>
          <Link 
            href="/career"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition duration-300"
          >
            Açık Pozisyonlarımızı Görün
          </Link>
        </div>
      </section>
    </div>
  );
} 