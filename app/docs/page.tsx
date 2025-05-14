"use client";

import { useState } from 'react';
import { FaBook, FaCode, FaDownload, FaServer, FaDatabase, FaCloud, FaRobot, FaLock } from 'react-icons/fa';

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('getting-started');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ClusterEye Dökümantasyon</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Veritabanı izleme ve yönetim platformunu kullanmaya başlamak için gereken her şey.
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
                  <FaBook className="mr-2" /> İçerik
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
                    <span>Başlarken</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('installation')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'installation' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>Kurulum</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('configuration')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'configuration' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>Konfigürasyon</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('api-reference')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'api-reference' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>API Referansı</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('troubleshooting')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'troubleshooting' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>Sorun Giderme</span>
                  </button>
                  
                  <button 
                    onClick={() => setActiveTab('faq')} 
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                      activeTab === 'faq' 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span>SSS</span>
                  </button>
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Kaynaklar</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="#" 
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        <FaDownload className="mr-2" />
                        Agent İndirme
                      </a>
                    </li>
                    
                    <li>
                      <a 
                        href="#" 
                        className="text-purple-400 hover:text-purple-300 flex items-center"
                      >
                        <FaServer className="mr-2" />
                        Sunucu Gereksinimleri
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
                      <h2 className="text-2xl font-bold text-white">Başlarken</h2>
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 mb-6">
                        ClusterEye, veritabanlarınızı izlemek ve yönetmek için agent bazlı bir platformdur. 
                        MSSQL, MongoDB ve PostgreSQL veritabanlarını destekler ve cloud API ile agent'lar 
                        arasında gRPC protokolü üzerinden iletişim kurar.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-white mt-8 mb-4">Temel Bileşenler</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaRobot className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">Agent</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            Veritabanı sunucusuna veya yakın bir sunucuya kurulur. Veritabanını izler, 
                            metrikleri toplar ve Cloud API ile iletişim kurar.
                          </p>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaCloud className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">Cloud API</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            Agent'lardan gelen verileri işler, saklar ve kullanıcı arayüzüne sunar. 
                            gRPC protokolü üzerinden yüksek performanslı iletişim sağlar.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaDatabase className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">Veritabanı Adaptörleri</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            Her veritabanı tipi için özel adaptörler, veritabanına özgü metrikleri 
                            toplar ve veritabanı işlemlerini gerçekleştirir.
                          </p>
                        </div>
                        
                        <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                          <div className="flex items-center mb-3">
                            <FaLock className="w-5 h-5 text-purple-500 mr-2" />
                            <h4 className="text-lg font-medium text-white">Güvenlik Katmanı</h4>
                          </div>
                          <p className="text-gray-300 text-sm">
                            TLS/SSL şifreleme, token tabanlı kimlik doğrulama ve rol bazlı erişim 
                            kontrolü ile tüm sistem güvenliğini sağlar.
                          </p>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mt-10 mb-4">Sistem Gereksinimleri</h3>
                      
                      <div className="overflow-x-auto mb-8">
                        <table className="min-w-full bg-gray-900 rounded-lg">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">Bileşen</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">Minimum Gereksinimler</th>
                              <th className="px-4 py-2 text-left text-sm font-medium text-gray-300 border-b border-gray-700">Önerilen</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white border-b border-gray-800">Agent</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">1 CPU, 1GB RAM, 10GB Disk</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">2 CPU, 2GB RAM, 20GB SSD</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white border-b border-gray-800">Cloud Server</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">2 CPU, 4GB RAM, 50GB SSD</td>
                              <td className="px-4 py-2 text-sm text-gray-300 border-b border-gray-800">4+ CPU, 8GB+ RAM, 100GB+ SSD</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2 text-sm text-white">Veritabanı</td>
                              <td className="px-4 py-2 text-sm text-gray-300">PostgreSQL 10+, MSSQL 2016+, MongoDB 4.0+</td>
                              <td className="px-4 py-2 text-sm text-gray-300">PostgreSQL 13+, MSSQL 2019+, MongoDB 5.0+</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 rounded-lg border border-purple-900/50 mb-8">
                        <p className="text-white">
                          <strong>Not:</strong> Agent bileşeni, veritabanının çalıştığı aynı sunucuya kurulur.
                          Tamamen lightweight olduğu için Performans için endişe etmenize gerek yok.
                        </p>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mt-10 mb-4">Sonraki Adımlar</h3>
                      
                      <p className="text-gray-300 mb-6">
                        ClusterEye'ı kullanmaya başlamak için şu adımları izleyebilirsiniz:
                      </p>
                      
                      <ol className="list-decimal pl-5 space-y-2 text-gray-300 mb-8">
                        <li>Agent bileşenini indirin ve veritabanı sunucunuza kurun.</li>
                        <li>Cloud API'ye bağlantı için gereken yapılandırmayı tamamlayın.</li>
                        <li>İlk veritabanı bağlantınızı yapılandırın ve sistem sağlık durumunu kontrol edin.</li>
                        
                      </ol>
                      
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-md transition duration-300 inline-flex items-center"
                        >
                          <FaDownload className="w-4 h-4 mr-2" />
                          İndirmeye Başla
                        </a>
                        
                        <button 
                          onClick={() => setActiveTab('installation')} 
                          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300"
                        >
                          Kurulum Kılavuzu
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'installation' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaDownload className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">Kurulum</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      ClusterEye kurulumu agent ve cloud bileşenleri olarak iki aşamada gerçekleştirilir. Bu belge, kurulum için gereken adımları açıklar.
                    </p>
                    
                    {/* Kurulum içeriği... */}
                  </div>
                )}
                
                {activeTab === 'configuration' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaServer className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">Konfigürasyon</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      ClusterEye'ı ihtiyaçlarınıza göre yapılandırmak için izlenecek adımlar ve ayarlar hakkında bilgiler.
                    </p>
                    
                    {/* Konfigürasyon içeriği... */}
                  </div>
                )}
                
                {activeTab === 'api-reference' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaCode className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">API Referansı</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      ClusterEye API'sini kullanarak kendi uygulamanız ile entegrasyon gerçekleştirmeniz için gereken referans belgeleri.
                    </p>
                    
                    {/* API içeriği... */}
                  </div>
                )}
                
                {activeTab === 'troubleshooting' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaServer className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">Sorun Giderme</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      ClusterEye ile ilgili yaygın sorunlar ve çözüm önerileri için ipuçları.
                    </p>
                    
                    {/* Sorun giderme içeriği... */}
                  </div>
                )}
                
                {activeTab === 'faq' && (
                  <div>
                    <div className="flex items-center mb-6">
                      <FaBook className="w-6 h-6 text-purple-500 mr-3" />
                      <h2 className="text-2xl font-bold text-white">Sık Sorulan Sorular</h2>
                    </div>
                    
                    <p className="text-gray-300 mb-6">
                      ClusterEye kullanımı hakkında en sık sorulan soruların cevapları.
                    </p>
                    
                    {/* SSS içeriği... */}
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