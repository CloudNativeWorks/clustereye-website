import React from 'react';
import { FaDatabase, FaCloud, FaRobot, FaSearchPlus, FaChartLine, FaLock, FaBell, FaTachometerAlt, FaBrain } from "react-icons/fa";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ClusterEye Özellikleri</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Agent bazlı yapı ile veritabanlarınızı izlemenin ve yönetmenin en akıllı yolu
          </p>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Ana Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaRobot className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Agent Bazlı Mimari</h3>
              <p className="text-gray-300 text-center">
                Otonom çalışan agent'lar ile veritabanlarınız sürekli izlenir. Her agent kendi sorumluluğundaki veritabanı 
                üzerinde uzmanlaşarak proaktif izleme ve müdahale imkanı sağlar.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaDatabase className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Çoklu Veritabanı Desteği</h3>
              <p className="text-gray-300 text-center">
                MSSQL, MongoDB ve PostgreSQL veritabanlarınızı tek bir platform üzerinden yönetin. Farklı 
                sistemleri izlemek için birden fazla çözüme ihtiyacınız yok.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaCloud className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Cloud API Entegrasyonu</h3>
              <p className="text-gray-300 text-center">
                gRPC protokolü ile yüksek performanslı, düşük gecikmeli iletişim. Agent'lar ve merkezi sistem arasında
                güvenli ve hızlı veri aktarımı.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaChartLine className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Gerçek Zamanlı Analitik</h3>
              <p className="text-gray-300 text-center">
                Canlı performans metrikleri, sorgu analizi ve kaynak kullanımı raporları ile veritabanlarınızın durumunu 
                anlık olarak görüntüleyin.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaBell className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Akıllı Bildirimler</h3>
              <p className="text-gray-300 text-center">
                Özelleştirilebilir alarmlar ve uyarılar ile anormal durumlardan anında haberdar olun. E-posta, SMS ve
                webhook bildirim seçenekleri.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <FaBrain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">Yapay Zeka Entegrasyonu</h3>
              <p className="text-gray-300 text-center">
                Yapay zeka ile güçlendirilmiş analiz ve optimizasyon önerileri ile veritabanı performansınızı artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Teknik Özellikler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-10">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaTachometerAlt className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Yüksek Performanslı İzleme</h3>
                  <p className="text-gray-300">
                    Düşük sistem kaynağı kullanımı ile veritabanlarınızı etkilemeden sürekli izleme yapın. Özel tasarlanmış
                    algoritmalar ile minimum etki, maksimum bilgi.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaLock className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Güvenli İletişim</h3>
                  <p className="text-gray-300">
                    TLS/SSL ile şifrelenmiş tüm bağlantılar, rol tabanlı erişim kontrolü ve veri maskeleme özellikleri ile
                    hassas veritabanı bilgilerinizi koruyun.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaRobot className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Agent Otomatik Güncelleme</h3>
                  <p className="text-gray-300">
                    Agent'lar otomatik olarak kendilerini güncelleyerek her zaman en son özelliklerden ve güvenlik
                    iyileştirmelerinden yararlanır.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-10">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaDatabase className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sorgu Optimizasyonu</h3>
                  <p className="text-gray-300">
                    Yavaş sorguları tespit edip analiz ederek performans iyileştirme önerileri sunar. İndeks önerileri ve
                    sorgu planı analizleri ile veritabanı hızını artırın.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaChartLine className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Özelleştirilebilir Paneller</h3>
                  <p className="text-gray-300">
                    Drag-and-drop arayüzü ile kendi izleme panellerinizi oluşturun. Önemli metrikleri ve grafikleri
                    özelleştirerek tek bir ekranda görüntüleyin.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <FaSearchPlus className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Detaylı Log Analizi</h3>
                  <p className="text-gray-300">
                    Veritabanı loglarını gerçek zamanlı olarak analiz ederek sorunları hızlıca tespit edin. SQL hata
                    mesajlarını otomatik analiz eden akıllı algoritma ile çözüm önerileri alın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 