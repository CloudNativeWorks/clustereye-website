"use client";

import React from 'react';
import Link from 'next/link';
import { FaGavel, FaUserShield, FaFileContract, FaCoins, FaExclamationTriangle, FaCopyright, FaGlobe } from 'react-icons/fa';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Kullanım Koşulları</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            ClusterEye hizmetlerini kullanmadan önce lütfen bu koşulları dikkatlice okuyun.
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
                <a href="#agreement" className="text-purple-400 hover:text-purple-300">1. Anlaşma</a>
              </li>
              <li>
                <a href="#accounts" className="text-purple-400 hover:text-purple-300">2. Hesaplar</a>
              </li>
              <li>
                <a href="#services" className="text-purple-400 hover:text-purple-300">3. Hizmetler ve Abonelikler</a>
              </li>
              <li>
                <a href="#payments" className="text-purple-400 hover:text-purple-300">4. Ödemeler</a>
              </li>
              <li>
                <a href="#intellectual-property" className="text-purple-400 hover:text-purple-300">5. Fikri Mülkiyet</a>
              </li>
              <li>
                <a href="#user-content" className="text-purple-400 hover:text-purple-300">6. Kullanıcı İçeriği</a>
              </li>
              <li>
                <a href="#prohibited" className="text-purple-400 hover:text-purple-300">7. Yasaklanan Kullanımlar</a>
              </li>
              <li>
                <a href="#termination" className="text-purple-400 hover:text-purple-300">8. Sona Erme</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-purple-400 hover:text-purple-300">9. Sorumluluk Reddi</a>
              </li>
              <li>
                <a href="#limitation" className="text-purple-400 hover:text-purple-300">10. Sorumluluk Sınırlaması</a>
              </li>
              <li>
                <a href="#general" className="text-purple-400 hover:text-purple-300">11. Genel Koşullar</a>
              </li>
            </ul>
          </div>
          
          {/* Agreement */}
          <div id="agreement" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGavel className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">1. Anlaşma</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bu Kullanım Koşulları ("Koşullar"), clustereye.com web sitesi, ClusterEye yazılımı ve ilgili hizmetleri (toplu olarak "Hizmet") kullanımınızı düzenleyen yasal olarak bağlayıcı bir anlaşmadır.
              </p>
              <p className="text-gray-300 mb-4">
                Bu Koşullar, ClusterEye ("Şirket", "biz" veya "bizim") ile siz ("Kullanıcı", "siz" veya "sizin") arasında yapılmıştır.
              </p>
              <p className="text-gray-300">
                Hizmeti kullanarak veya hesap oluşturarak, bu Koşulları ve <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Gizlilik Politikamızı</Link> okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan edersiniz.
              </p>
            </div>
          </div>
          
          {/* Accounts */}
          <div id="accounts" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserShield className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">2. Hesaplar</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">2.1 Hesap Güvenliği</h3>
              <p className="text-gray-300 mb-4">
                Hesabınızı oluştururken, doğru, eksiksiz ve güncel bilgiler sağlamanız gerekmektedir. Hesap parolanızın gizliliğini korumak ve hesabınız altında gerçekleşen tüm etkinliklerden siz sorumlusunuz. Herhangi bir güvenlik ihlali veya hesabınızın yetkisiz kullanımı durumunda bizi derhal bilgilendirmelisiniz.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">2.2 Yaş Kısıtlaması</h3>
              <p className="text-gray-300 mb-4">
                Hizmetimizi kullanabilmek için en az 18 yaşında olmanız gerekmektedir. Hizmeti kullanarak, 18 yaşında veya daha büyük olduğunuzu beyan edersiniz.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">2.3 Hesap Erişimi</h3>
              <p className="text-gray-300">
                Tek bir hesabı birden fazla kişinin kullanması yasaktır. Herhangi bir nedenle hesabınıza erişim kaybederseniz, size yardımcı olmak için support@clustereye.com adresinden müşteri desteğimizle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
          
          {/* Services and Subscriptions */}
          <div id="services" className="mb-12">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">3. Hizmetler ve Abonelikler</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">3.1 Hizmetlerin Açıklaması</h3>
              <p className="text-gray-300 mb-4">
                ClusterEye, veritabanı izleme, performans analizi ve optimizasyon için agent tabanlı bir hizmet sağlar. Hizmetimiz, sunucularınızda çalışan ajanlar aracılığıyla veritabanı performansını izler ve analiz eder.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">3.2 Abonelik Planları</h3>
              <p className="text-gray-300 mb-4">
                Çeşitli abonelik planları sunuyoruz. Her planın kendi özellik ve sınırlamaları vardır. Aktif abonelik, seçtiğiniz plana göre Hizmetimize erişim sağlar. Tam fiyatlandırma ve plan detayları <Link href="/pricing" className="text-purple-400 hover:text-purple-300">Fiyatlandırma sayfamızda</Link> bulunabilir.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">3.3 Hizmet Değişiklikleri</h3>
              <p className="text-gray-300">
                ClusterEye, herhangi bir zamanda ve önceden bildirimde bulunmaksızın Hizmetleri güncelleme, değiştirme veya sonlandırma hakkını saklı tutar. Önemli değişiklikler durumunda makul ölçüde bildirim sağlamaya çalışacağız.
              </p>
            </div>
          </div>
          
          {/* Payments */}
          <div id="payments" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCoins className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">4. Ödemeler</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">4.1 Ödeme Koşulları</h3>
              <p className="text-gray-300 mb-4">
                Ücretli bir plan için kaydolduğunuzda, ödeme yönteminizden hemen ücret alınacaktır. Abonelik ücretleri, abonelik döneminin başlangıcında önceden tahsil edilir. Tüm ücretler iade edilemez.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">4.2 Otomatik Yenileme</h3>
              <p className="text-gray-300 mb-4">
                Abonelikler, iptal edilmediği sürece mevcut plan dönemine uygun olarak otomatik olarak yenilenir. Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan veya support@clustereye.com adresine e-posta göndererek iptal edebilirsiniz.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">4.3 Fiyat Değişiklikleri</h3>
              <p className="text-gray-300">
                ClusterEye, hizmet ücretlerini herhangi bir zamanda değiştirme hakkını saklı tutar. Fiyat değişiklikleri, değişikliğin yürürlüğe girmesinden en az 30 gün önce bildirilecektir. Mevcut abonelik döneminiz için fiyat değişikliği olmayacaktır.
              </p>
            </div>
          </div>
          
          {/* Intellectual Property */}
          <div id="intellectual-property" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCopyright className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">5. Fikri Mülkiyet</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Hizmet, yazılım, ticari markalar, hizmet markaları, grafikler ve içerik dahil olmak üzere ClusterEye'a ait fikri mülkiyettir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları ile korunmaktadır.
              </p>
              <p className="text-gray-300 mb-4">
                ClusterEye, size Hizmeti yalnızca bu Koşullara uygun olarak kullanmanız için kişisel, dünya çapında, münhasır olmayan, devredilemez ve alt lisanslanamaz bir lisans verir.
              </p>
              <p className="text-gray-300">
                Bu Koşullarda açıkça belirtilmeyen tüm haklar saklıdır. ClusterEye'ın önceden yazılı izni olmadan Hizmeti veya herhangi bir bileşenini kopyalayamaz, değiştiremez, dağıtamaz veya ticari olarak kullanamazsınız.
              </p>
            </div>
          </div>
          
          {/* User Content */}
          <div id="user-content" className="mb-12">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">6. Kullanıcı İçeriği</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Hizmetimizi kullanırken yüklediğiniz, gönderdiğiniz veya oluşturduğunuz içerik ("Kullanıcı İçeriği") sizin mülkiyetinizde kalır. Kullanıcı İçeriğinden tamamen siz sorumlusunuz ve bunun için gerekli tüm haklara sahip olduğunuzu beyan edersiniz.
              </p>
              <p className="text-gray-300 mb-4">
                Hizmete Kullanıcı İçeriği göndererek, ClusterEye'a Kullanıcı İçeriğinizi Hizmeti sağlamak, iyileştirmek ve tanıtmak amacıyla kullanmak, kopyalamak, değiştirmek ve dağıtmak için münhasır olmayan, dünya çapında, telifsiz, devredilebilir ve alt lisanslanabilir bir hak ve lisans verirsiniz.
              </p>
              <p className="text-gray-300">
                ClusterEye, uygunsuz, yasalara aykırı veya bu Koşulları ihlal eden herhangi bir Kullanıcı İçeriğini kaldırma hakkını saklı tutar, ancak bunu yapma yükümlülüğü yoktur.
              </p>
            </div>
          </div>
          
          {/* Prohibited Uses */}
          <div id="prohibited" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">7. Yasaklanan Kullanımlar</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Hizmeti kullanırken aşağıdaki eylemleri gerçekleştirmeyeceğinizi kabul edersiniz:
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                <li>Yasalara aykırı herhangi bir amaç için Hizmeti kullanmak</li>
                <li>Zararlı kod, virüs veya benzeri programları göndermek</li>
                <li>Hizmeti veya bağlı sunucuları ve ağları engellemek veya bozmak</li>
                <li>Hizmeti kötüye kullanmak veya istismar etmek</li>
                <li>Başkalarının fikri mülkiyet haklarını ihlal etmek</li>
                <li>Hizmete yetkisiz erişim elde etmek</li>
                <li>Diğer kullanıcıları taciz etmek veya kişisel bilgilerini toplamak</li>
                <li>Bu Koşulları veya yürürlükteki yasaları ihlal edecek şekilde Hizmeti kullanmak</li>
              </ul>
              <p className="text-gray-300">
                Bu yükümlülüklerin ihlali, hesabınızın feshi ve/veya yasal işlem başlatılmasıyla sonuçlanabilir.
              </p>
            </div>
          </div>
          
          {/* Termination */}
          <div id="termination" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGavel className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">8. Sona Erme</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bu Koşullar, siz veya ClusterEye tarafından feshedilene kadar geçerlidir. Hesabınızı istediğiniz zaman, herhangi bir nedenle iptal ederek bu Koşulları feshedebilirsiniz.
              </p>
              <p className="text-gray-300 mb-4">
                ClusterEye, bu Koşulları ihlal etmeniz veya yasalara aykırı davranmanız durumunda, önceden bildirimde bulunmaksızın bu Koşulları ve Hizmete erişiminizi feshedebilir.
              </p>
              <p className="text-gray-300">
                Fesih üzerine, Hizmeti kullanma hakkınız derhal sona erecektir. Fesihten sonra da geçerli olan yükümlülükler ve haklar devam edecektir.
              </p>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div id="disclaimer" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">9. Sorumluluk Reddi</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                HİZMET "OLDUĞU GİBİ" VE "MEVCUT OLDUĞU KADARIYLA" SUNULMAKTADIR, HERHANGİ BİR GARANTİ OLMAKSIZIN. CLUSTEREYE, HİZMETİN KESİNTİSİZ, ZAMANINDA, GÜVENLİ VEYA HATASIZ OLACAĞINI GARANTİ ETMEZ.
              </p>
              <p className="text-gray-300 mb-4">
                HİZMET ARACILIĞIYLA ELDE EDİLEN TAVSİYE VEYA BİLGİLERİN DOĞRULUĞU, GÜVENİLİRLİĞİ VEYA BUNLARA GÜVENİLMESİ KONUSUNDA HİÇBİR GARANTİ YOKTUR.
              </p>
              <p className="text-gray-300">
                CLUSTEREYE, HİZMET ÜZERİNDEN VEYA ONUN İLE BAĞLANTILI OLARAK GÖNDERİLEN VEYA ALINAN İLETİLERİN, İÇERİKLERİN VEYA BİLGİLERİN GİZLİLİĞİNİ GARANTİ ETMEZ.
              </p>
            </div>
          </div>
          
          {/* Limitation of Liability */}
          <div id="limitation" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">10. Sorumluluk Sınırlaması</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                CLUSTEREYE, HİÇBİR DURUMDA, HİZMETİN KULLANIMI VEYA KULLANILAMAMASI, HİZMETTEKİ GECİKMELER, VERİ KAYBI, KAR KAYBI, İŞ KAYBI VEYA DİĞER ZARARLAR DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE, HERHANGİ BİR DOLAYLI, ÖZEL, ARIZİ, NETİCE KABİLİNDEN DOĞAN VEYA CEZA GEREKTİREN ZARARLARDAN SORUMLU OLMAYACAKTIR.
              </p>
              <p className="text-gray-300 mb-4">
                BAZI YARGI BÖLGELERİ, ARIZİ VEYA NETİCE KABİLİNDEN DOĞAN ZARARLARIN HARİÇ TUTULMASINA VEYA SINIRLANDIRILMASINA İZİN VERMEDİĞİNDEN, YUKARIDAKİ SINIRLAMALAR SİZİN İÇİN GEÇERLİ OLMAYABİLİR.
              </p>
              <p className="text-gray-300">
                HER DURUMDA, HERHANGİ BİR HASAR İÇİN CLUSTEREYE'IN TOPLAM SORUMLULUĞU, SON 12 AYDA CLUSTEREYE'A ÖDEDİĞİNİZ MİKTARI AŞMAYACAKTIR.
              </p>
            </div>
          </div>
          
          {/* General Terms */}
          <div id="general" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">11. Genel Koşullar</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">11.1 Geçerli Kanun</h3>
              <p className="text-gray-300 mb-4">
                Bu Koşullar, kanunlar ihtilafı prensipleri dikkate alınmaksızın Türkiye Cumhuriyeti kanunlarına göre yönetilecek ve yorumlanacaktır.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">11.2 Feragat</h3>
              <p className="text-gray-300 mb-4">
                ClusterEye'ın bu Koşulların herhangi bir hükmünü uygulamaması, o veya başka bir hükümden feragat olarak kabul edilmeyecektir.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">11.3 Bölünebilirlik</h3>
              <p className="text-gray-300 mb-4">
                Bu Koşulların herhangi bir hükmünün geçersiz veya uygulanamaz olduğuna karar verilirse, kalan hükümler tam olarak yürürlükte ve geçerli kalacaktır.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">11.4 Tüm Anlaşma</h3>
              <p className="text-gray-300 mb-4">
                Bu Koşullar, Gizlilik Politikası ve diğer yasal bildirimler, Hizmetin kullanımıyla ilgili olarak siz ve ClusterEye arasındaki tüm anlaşmayı oluşturur.
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">11.5 Değişiklikler</h3>
              <p className="text-gray-300">
                ClusterEye, bu Koşulları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler, web sitemizde yayınlandıktan sonra yürürlüğe girecektir. Değişikliklerden sonra Hizmeti kullanmaya devam etmeniz, revize edilmiş Koşulları kabul ettiğiniz anlamına gelecektir.
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div id="contact" className="mb-12">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                Bu Kullanım Koşulları hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li>E-posta: <a href="mailto:legal@clustereye.com" className="text-purple-400 hover:text-purple-300">legal@clustereye.com</a></li>
                <li>Web: <a href="/contact" className="text-purple-400 hover:text-purple-300">https://clustereye.com/contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 