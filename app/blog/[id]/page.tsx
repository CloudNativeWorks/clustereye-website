"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaShare, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const postId = Number(params?.id);
  
  // Blog yazılarının veritabanından veya bir API'den gelmesi gereken gerçek bir uygulamada
  // Burada örnek olarak hard-coded veri kullanıyoruz
  const blogPosts = [
    {
      id: 1,
      title: 'PostgreSQL Performans Optimizasyonu İçin 10 İpucu',
      excerpt: 'PostgreSQL veritabanınızın performansını artırmak için uygulayabileceğiniz 10 etkili ipucu ve en iyi uygulamalar.',
      image: '/images/blog/postgresql-performance.jpg',
      author: 'Ahmet Yılmaz',
      date: '18 Nisan 2023',
      categories: ['veritabani', 'optimization'],
      content: `
        <p>PostgreSQL, performansı ve güvenilirliği ile bilinen güçlü bir veritabanı yönetim sistemidir. Ancak, her veritabanı gibi PostgreSQL'in de en yüksek performansı sağlamak için dikkatli yapılandırma ve optimizasyon gereklidir.</p>
        
        <p>Bu blog yazısında, PostgreSQL veritabanınızın performansını önemli ölçüde artırabilecek 10 etkili ipucu ele alınacaktır.</p>
        
        <h2>1. İndeksleri Akıllıca Kullanın</h2>
        <p>İndeksler, sık sorgulanan sütunlarda veritabanı performansını önemli ölçüde artırabilir. Ancak, her sütun için indeks oluşturmak veritabanı yazma performansını olumsuz etkileyebilir. Sorgu kalıplarınızı analiz edin ve en çok sorgulanan sütunlar için indeks oluşturun.</p>
        
        <h2>2. EXPLAIN ANALYZE Kullanın</h2>
        <p>Sorgu planlarını analiz etmek için EXPLAIN ANALYZE komutunu kullanın. Bu komut, veritabanının sorgunuzu nasıl yürüttüğünü ve ne kadar sürdüğünü gösterir. Yavaş sorgular için sorgu planlarını analiz ederek potansiyel darboğazları belirleyebilirsiniz.</p>
        
        <h2>3. Tablo ve Veritabanı Bakımı</h2>
        <p>VACUUM ve ANALYZE komutlarını düzenli olarak çalıştırın. Bu komutlar, veritabanının istatistikleri güncellemesine ve ölü tupleları temizlemesine yardımcı olur, bu da sorgu performansını iyileştirir.</p>
        
        <h2>4. Bellek Parametrelerini Optimize Edin</h2>
        <p>shared_buffers, work_mem ve effective_cache_size gibi bellek parametrelerini sunucu donanımınıza göre ayarlayın. Doğru bellek ayarlamaları, PostgreSQL'in daha verimli çalışmasını sağlar.</p>
        
        <h2>5. Connection Pooling Kullanın</h2>
        <p>PgBouncer veya Pgpool-II gibi bağlantı havuzu araçları, özellikle çok sayıda kısa süreli bağlantı yapan uygulamalar için performansı artırabilir. Bağlantı havuzu, veritabanı bağlantılarını verimli bir şekilde yönetir ve yeni bağlantılar oluşturma yükünü azaltır.</p>
        
        <h2>6. Donanım Optimizasyonu</h2>
        <p>PostgreSQL, özellikle günlük kayıt ve dizin işlemleri için hızlı bir I/O alt sisteminden yararlanır. SSD'ler, özellikle rastgele okuma ve yazma işlemleri için geleneksel sabit disklerden çok daha iyi performans sağlar.</p>
        
        <h2>7. Partitioning Kullanın</h2>
        <p>Büyük tablolar için tablo bölümlemeyi düşünün. Bölümleme, özellikle büyük veri kümeleri ve belirli sorgulama kalıpları için sorgu performansını artırabilir.</p>
        
        <h2>8. Parallel Execution</h2>
        <p>PostgreSQL 10 ve sonraki sürümlerde, çeşitli sorgu tiplerinin paralelleştirilmesini destekleyen parallel execution özelliğini etkinleştirin. Bu özellik, özellikle çok çekirdekli sunucularda sorgu performansını artırabilir.</p>
        
        <h2>9. Doğru Veri Tiplerini Kullanın</h2>
        <p>Doğru veri tiplerini seçmek, hem depolama verimliliği hem de sorgu performansı açısından önemlidir. Örneğin, UUID yerine seri kimlikler, kısa metinler için VARCHAR yerine CHAR kullanmak gibi.</p>
        
        <h2>10. PostgreSQL Versiyonunuzu Güncel Tutun</h2>
        <p>PostgreSQL'in yeni sürümleri genellikle performans iyileştirmeleri içerir. Veritabanınızı en son sürüme güncelleyerek bu iyileştirmelerden yararlanabilirsiniz.</p>
        
        <h2>Sonuç</h2>
        <p>Bu ipuçlarını uygulamak, PostgreSQL veritabanınızın performansını önemli ölçüde artırabilir. Her veritabanı farklıdır ve belirli optimizasyonların etkisi çalışma yükünüze bağlı olarak değişebilir. Bu nedenle, değişiklikleri test ortamında denemek ve sonuçları ölçmek önemlidir.</p>
      `
    },
    {
      id: 2,
      title: 'Veritabanı İzleme Sistemleri: Agent Bazlı vs. Ajan Olmayan Yaklaşımlar',
      excerpt: 'Veritabanı izleme sistemlerinde agent bazlı ve ajan olmayan yaklaşımların karşılaştırması ve hangi durumda hangisinin daha uygun olduğu.',
      image: '/images/blog/monitoring-systems.jpg',
      author: 'Zeynep Kaya',
      date: '5 Mayıs 2023',
      categories: ['veritabani'],
      content: `
        <p>Veritabanı izleme, modern BT altyapılarının kritik bir bileşenidir. İzleme yaklaşımları genellikle iki kategoriye ayrılır: agent bazlı ve agent olmayan (agentless) yaklaşımlar. Bu blog yazısında, her iki yaklaşımın da avantajlarını ve dezavantajlarını inceleyeceğiz.</p>
      `
    },
    {
      id: 3,
      title: 'Yapay Zeka ile Query Optimizasyonu Nasıl Çalışır?',
      excerpt: 'Yapay zeka algoritmaları, veritabanı sorgularını nasıl analiz eder ve optimize eder? ClusterEye\'ın AI destekli optimizasyon özelliklerinin derinlemesine incelemesi.',
      image: '/images/blog/ai-query-optimization.jpg',
      author: 'Mehmet Demir',
      date: '12 Haziran 2023',
      categories: ['ai', 'optimization', 'veritabani'],
      content: `
        <p>Veritabanı sorgu optimizasyonu, veritabanı yönetiminin en önemli ve zorlayıcı yönlerinden biridir. Geleneksel yöntemler, deneyimli veritabanı yöneticilerinin (DBA) bilgi ve tecrübelerine dayanırken, yapay zeka tabanlı çözümler bu süreci otomatikleştirmekte ve daha etkili hale getirmektedir.</p>
      `
    },
    {
      id: 4,
      title: 'MongoDB Performans Ayarları ve Verimlilik',
      excerpt: 'MongoDB veritabanınızın performansını artırmak için index stratejileri, bellek yönetimi ve sorgu optimizasyonu konusunda pratik ipuçları.',
      image: '/images/blog/mongodb-performance.jpg',
      author: 'Deniz Yıldız',
      date: '3 Temmuz 2023',
      categories: ['veritabani', 'optimization'],
      content: `
        <p>MongoDB, esnek belge tabanlı yapısı ve ölçeklenebilirliği ile popüler bir NoSQL veritabanıdır. Ancak, optimum performans için doğru yapılandırma ve stratejiler gerektirir. Bu yazıda, MongoDB performansını artırmak için pratik ipuçları ele alınacaktır.</p>
      `
    },
    {
      id: 5,
      title: 'MSSQL Veritabanları için Güvenlik Önlemleri',
      excerpt: 'MSSQL veritabanlarınızı siber tehditlerden korumak için uygulamanız gereken güvenlik önlemleri ve en iyi pratikler.',
      image: '/images/blog/mssql-security.jpg',
      author: 'Elif Şahin',
      date: '22 Temmuz 2023',
      categories: ['veritabani', 'security'],
      content: `
        <p>MSSQL, kurumsal ortamlarda yaygın olarak kullanılan güçlü bir veritabanı yönetim sistemidir. Ancak, değerli verileri barındıran bu sistemler siber saldırganlar için cazip hedeflerdir. Bu yazıda, MSSQL veritabanlarınızı güvence altına almak için uygulamanız gereken güvenlik önlemlerini inceleyeceğiz.</p>
      `
    },
    {
      id: 6,
      title: 'Veritabanı Log Analizinde Yapay Zeka Kullanımı',
      excerpt: 'Yapay zeka algoritmalarının veritabanı loglarını analiz ederek anormallikleri nasıl tespit ettiği ve proaktif çözümler sunduğu hakkında detaylı bir inceleme.',
      image: '/images/blog/ai-log-analysis.jpg',
      author: 'Ahmet Yılmaz',
      date: '8 Ağustos 2023',
      categories: ['ai', 'veritabani'],
      content: `
        <p>Veritabanı logları, sistemin sağlığı ve performansı hakkında değerli bilgiler içerir. Ancak, bu logların manuel olarak analiz edilmesi zaman alıcı ve hata yapmaya açık bir süreçtir. Yapay zeka, bu log verilerini otomatik olarak analiz ederek anormallikleri tespit etmekte ve proaktif çözümler sunmaktadır.</p>
      `
    }
  ];
  
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-gray-300 mb-6">Aradığınız blog yazısı bulunamadı veya silinmiş olabilir.</p>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Blog Sayfasına Dön
          </Link>
        </div>
      </div>
    );
  }
  
  // Blog kategorileri
  const categories = [
    { id: 'veritabani', name: 'Veritabanı Yönetimi' },
    { id: 'ai', name: 'Yapay Zeka' },
    { id: 'optimization', name: 'Optimizasyon' },
    { id: 'security', name: 'Güvenlik' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div 
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-900"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 1))',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg mb-8 transition duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Blog'a Dön
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {post.categories.map(categoryId => {
              const category = categories.find(c => c.id === categoryId);
              return (
                <span key={categoryId} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 text-purple-300">
                  <FaTag className="w-3 h-3 mr-1" />
                  {category ? category.name : categoryId}
                </span>
              );
            })}
          </div>
          
          <div className="flex justify-center items-center text-gray-400 text-sm">
            <div className="flex items-center mr-6">
              <FaUser className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="w-4 h-4 mr-2" />
              {post.date}
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8 bg-gray-700">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
                <span className="text-gray-400 text-sm">{post.image}</span>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none prose-img:rounded-lg prose-a:text-purple-400 prose-headings:text-white prose-headings:font-bold">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
          
          {/* Share Section */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaShare className="w-5 h-5 mr-2" />
              Bu Yazıyı Paylaş
            </h3>
            
            <div className="flex gap-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://clustereye.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-[#1DA1F2] text-white rounded-lg transition duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://clustereye.com/blog/${post.id}`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-[#4267B2] text-white rounded-lg transition duration-300"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://clustereye.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-[#0077B5] text-white rounded-lg transition duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Posts - Bu bölüm statik olarak gösterilmektedir, gerçek bir uygulama için ilgili blog yazılarını bulma mantığı eklenmelidir */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">İlgili Yazılar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id && p.categories.some(cat => post.categories.includes(cat)))
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-200 hover:shadow-purple-500/10 hover:-translate-y-1">
                  <div className="relative h-40 bg-gray-700">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
                      <span className="text-gray-400 text-sm">{relatedPost.image}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                    
                    <Link 
                      href={`/blog/${relatedPost.id}`} 
                      className="inline-block text-sm bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-4 py-2 rounded-lg text-white font-medium transition duration-300"
                    >
                      Devamını Oku
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 