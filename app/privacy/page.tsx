"use client";

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaUserLock, FaServer, FaCookieBite, FaGlobe, FaEnvelope } from 'react-icons/fa';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Gizlilik Politikası</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            ClusterEye olarak verilerinizin gizliliği ve güvenliği bizim için en yüksek önceliktir.
          </p>
        </div>
      </div>
      
      {/* Last Updated Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-gray-400">Son Güncelleme: <span className="text-white">10 Haziran 2023</span></p>
          <a 
            href="#" 
            onClick={() => window.print()}
            className="text-purple-400 hover:text-purple-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Yazdır
          </a>
        </div>
      </section>
      
      {/* Table of Contents */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">İçindekiler</h2>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className="text-purple-400 hover:text-purple-300">1. Giriş</a>
              </li>
              <li>
                <a href="#collected-data" className="text-purple-400 hover:text-purple-300">2. Topladığımız Bilgiler</a>
              </li>
              <li>
                <a href="#data-usage" className="text-purple-400 hover:text-purple-300">3. Bilgilerin Kullanımı</a>
              </li>
              <li>
                <a href="#data-sharing" className="text-purple-400 hover:text-purple-300">4. Bilgilerin Paylaşımı</a>
              </li>
              <li>
                <a href="#data-security" className="text-purple-400 hover:text-purple-300">5. Veri Güvenliği</a>
              </li>
              <li>
                <a href="#cookies" className="text-purple-400 hover:text-purple-300">6. Çerezler ve Takip Teknolojileri</a>
              </li>
              <li>
                <a href="#international" className="text-purple-400 hover:text-purple-300">7. Uluslararası Veri Transferleri</a>
              </li>
              <li>
                <a href="#rights" className="text-purple-400 hover:text-purple-300">8. Kullanıcı Hakları</a>
              </li>
              <li>
                <a href="#changes" className="text-purple-400 hover:text-purple-300">9. Değişiklikler</a>
              </li>
              <li>
                <a href="#contact" className="text-purple-400 hover:text-purple-300">10. İletişim</a>
              </li>
            </ul>
          </div>
          
          {/* Introduction */}
          <div id="introduction" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Giriş</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                ClusterEye ("biz", "bize" veya "bizim") tarafından işletilen clustereye.com web sitesi ve ClusterEye uygulamasını ("Hizmet") kullanımınızla ilgili olarak kişisel bilgilerin toplanması, kullanımı ve ifşası ile ilgili politikalarımızı açıklamaktadır.
              </p>
              <p className="text-gray-300 mb-4">
                Kişisel bilgilerinizi, size Hizmetimizi sağlamak ve geliştirmek için kullanırız. Bu Gizlilik Politikası'nı kabul ederek, bilgilerin bu doğrultuda toplanmasını ve kullanılmasını kabul etmiş olursunuz.
              </p>
              <p className="text-gray-300">
                Bu Gizlilik Politikası'nda aksi belirtilmedikçe, bu Gizlilik Politikası'nda kullanılan terimler, Hüküm ve Koşullarımızda belirtilen anlamlara sahiptir.
              </p>
            </div>
          </div>
          
          {/* Collected Data */}
          <div id="collected-data" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserLock className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Topladığımız Bilgiler</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Hizmetimizi kullanmanız için çeşitli türde bilgiler topluyoruz. Bu bilgiler şunları içerebilir:
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">2.1 Kişisel Bilgiler</h3>
              <p className="text-gray-300 mb-4">
                Hizmetimizi kullanırken, sizden belirli kişisel bilgileri sağlamanızı isteyebiliriz. Bunlar şunları içerebilir:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                <li>Ad ve soyadı</li>
                <li>E-posta adresi</li>
                <li>Şirket adı</li>
                <li>Telefon numarası</li>
                <li>Fatura adresi</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">2.2 Kullanım Verileri</h3>
              <p className="text-gray-300 mb-4">
                Hizmetimizi nasıl kullandığınız hakkında bilgiler de toplayabiliriz. Bu kullanım verileri şunları içerebilir:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                <li>IP adresi</li>
                <li>Tarayıcı türü ve versiyonu</li>
                <li>Ziyaret edilen sayfalar</li>
                <li>Ziyaret tarihi ve saati</li>
                <li>Hizmet içindeki tıklama kalıpları</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">2.3 İzleme ve Çerezler Verisi</h3>
              <p className="text-gray-300 mb-4">
                Hizmetimizdeki etkinliği izlemek ve belirli bilgileri saklamak için çerezleri ve benzeri izleme teknolojilerini kullanıyoruz. Çerezler, az miktarda veri içeren dosyalardır ve anonim benzersiz bir tanımlayıcı içerebilir.
              </p>
            </div>
          </div>
          
          {/* Data Usage */}
          <div id="data-usage" className="mb-12">
            <div className="flex items-center mb-4">
              <FaServer className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Bilgilerin Kullanımı</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                <li>Hizmetimizi sağlamak ve sürdürmek</li>
                <li>Hizmetimizdeki değişiklikler hakkında sizi bilgilendirmek</li>
                <li>Bunu seçtiğinizde Hizmetimizin etkileşimli özelliklerine katılmanıza izin vermek</li>
                <li>Müşteri hizmetleri ve destek sağlamak</li>
                <li>Hizmeti iyileştirmek için analiz veya değerli bilgiler sağlamak</li>
                <li>Hizmetin kullanımını izlemek</li>
                <li>Teknik sorunları tespit etmek, önlemek ve ele almak</li>
              </ul>
            </div>
          </div>
          
          {/* Data Sharing */}
          <div id="data-sharing" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Bilgilerin Paylaşımı</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Kişisel bilgilerinizi şu durumlarda açıklayabiliriz:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                <li>Yasal bir yükümlülüğe uymak için</li>
                <li>ClusterEye'ın haklarını veya mülkiyetini korumak ve savunmak için</li>
                <li>Hizmetin olası suistimallerini önlemek veya araştırmak için</li>
                <li>Hizmet kullanıcılarının veya kamunun kişisel güvenliğini korumak için</li>
                <li>Yasal sorumluluğa karşı korunmak için</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">4.1 Hizmet Sağlayıcılar</h3>
              <p className="text-gray-300 mb-4">
                Kişisel bilgilerinizi, Hizmetimizin işleyişini kolaylaştırmak, Hizmetimizi bizim adımıza sunmak, hizmetle ilgili hizmetleri gerçekleştirmek veya Hizmetimizin nasıl kullanıldığını analiz etmemize yardımcı olmak için üçüncü taraf şirketlere ve bireylere ("Hizmet Sağlayıcılar") sağlayabiliriz.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">4.2 İş Transferleri</h3>
              <p className="text-gray-300 mb-4">
                Bir birleşme, şirket varlıklarının satışı, finansman veya işimizin tamamının veya bir kısmının başka bir şirkete satın alınması durumunda, Kişisel Bilgileriniz aktarılan varlıklar arasında olabilir.
              </p>
            </div>
          </div>
          
          {/* Data Security */}
          <div id="data-security" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">5. Veri Güvenliği</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bilgilerinizin güvenliği bizim için önemlidir. Ancak, internet üzerinden hiçbir aktarım yönteminin veya elektronik depolama yönteminin %100 güvenli olmadığını unutmayın. Kişisel Bilgilerinizi korumak için ticari olarak kabul edilebilir yöntemler kullanmaya çalışsak da, mutlak güvenliğini garanti edemeyiz.
              </p>
              <p className="text-gray-300">
                Veri güvenliği önlemlerimiz şunları içerir:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                <li>Tüm veri aktarımları için SSL şifreleme</li>
                <li>Düzenli güvenlik denetimleri</li>
                <li>Personel eğitimi ve erişim kontrolü</li>
                <li>Fiziksel ve elektronik güvenlik önlemleri</li>
                <li>Veri yedekleme prosedürleri</li>
              </ul>
            </div>
          </div>
          
          {/* Cookies */}
          <div id="cookies" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">6. Çerezler ve Takip Teknolojileri</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Hizmetimizi geliştirmek ve analiz etmek için çerezleri ve benzer izleme teknolojilerini kullanıyoruz.
              </p>
              <p className="text-gray-300 mb-4">
                Çerezler, tarayıcınız tarafından cihazınıza yerleştirilen küçük dosyalardır. Bu teknolojiler, Hizmetimizi nasıl kullandığınızı anlamamıza ve kullanıcı deneyiminizi iyileştirmemize yardımcı olur.
              </p>
              <p className="text-gray-300 mb-4">
                Tarayıcınızı tüm çerezleri reddetmek veya bir çerez gönderildiğinde bunu belirtmek üzere ayarlayabilirsiniz. Ancak, çerezleri kabul etmezseniz, Hizmetimizin bazı bölümlerini kullanamayabilirsiniz.
              </p>
              <p className="text-gray-300">
                Kullandığımız çerezler şunları içerir:
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li><span className="font-semibold">Oturum Çerezleri:</span> Hizmetimizi kullanırken kullanıcı oturumunu yönetmek için</li>
                <li><span className="font-semibold">Tercih Çerezleri:</span> Dil tercihleri gibi kullanıcı tercihlerini hatırlamak için</li>
                <li><span className="font-semibold">Analitik Çerezleri:</span> Hizmetimizin nasıl kullanıldığını anlamak için</li>
              </ul>
            </div>
          </div>
          
          {/* International Data */}
          <div id="international" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">7. Uluslararası Veri Transferleri</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bilgileriniz, Hizmet işlemlerimizin yürütüldüğü bilgisayarlarda tutulabilir ve bu bilgisayarlar sizin eyaletinizin, vilayetinizin, ülkenizin veya diğer devlet yargı alanının dışında olabilir ve veri koruma yasaları sizin bölgenizden farklı olabilir.
              </p>
              <p className="text-gray-300 mb-4">
                Türkiye dışında ikamet ediyorsanız ve bize bilgi sağlamayı seçtiyseniz, bilgileri Türkiye'ye aktardığımızı ve burada işlediğimizi unutmayın.
              </p>
              <p className="text-gray-300">
                Bu Gizlilik Politikası'nı kabul ederek ve bu tür bilgileri göndererek, bu transfere onay vermiş olursunuz.
              </p>
            </div>
          </div>
          
          {/* User Rights */}
          <div id="rights" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserLock className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">8. Kullanıcı Hakları</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Belirli veri koruma yasalarına göre, hakkınızda tuttuğumuz bilgilerle ilgili belirli haklara sahip olabilirsiniz:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                <li>Kişisel verilerinize erişim talep etme hakkı</li>
                <li>Kişisel verilerinizin düzeltilmesini talep etme hakkı</li>
                <li>Kişisel verilerinizin silinmesini talep etme hakkı</li>
                <li>Kişisel verilerinizin işlenmesine itiraz etme hakkı</li>
                <li>Veri taşınabilirliği talep etme hakkı</li>
                <li>Verilerinizin işlenmesine ilişkin onayınızı geri çekme hakkı</li>
              </ul>
              <p className="text-gray-300">
                Bu haklarınızı kullanmak için lütfen privacy@clustereye.com adresinden bizimle iletişime geçin.
              </p>
            </div>
          </div>
          
          {/* Changes */}
          <div id="changes" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">9. Değişiklikler</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Bu sayfada yeni Gizlilik Politikasını yayınlayarak herhangi bir değişikliği size bildireceğiz.
              </p>
              <p className="text-gray-300 mb-4">
                Herhangi bir değişiklik yapmadan önce, bu Gizlilik Politikasının üst kısmında yer alan "son güncelleme" tarihini değiştirerek sizi e-posta ve/veya Hizmetimizde belirgin bir bildirim yoluyla bilgilendireceğiz.
              </p>
              <p className="text-gray-300">
                Herhangi bir değişiklikten sonra Hizmeti kullanmaya devam etmeniz, revize edilmiş Gizlilik Politikasını kabul ettiğiniz anlamına gelecektir. Bu değişiklikleri düzenli olarak kontrol etmenizi öneririz.
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div id="contact" className="mb-12">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">10. İletişim</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>E-posta: <a href="mailto:privacy@clustereye.com" className="text-purple-400 hover:text-purple-300">privacy@clustereye.com</a></li>
                <li>Web: <a href="/contact" className="text-purple-400 hover:text-purple-300">https://clustereye.com/contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 