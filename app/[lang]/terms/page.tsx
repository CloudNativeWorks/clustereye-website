"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { FaGavel, FaUserShield, FaFileContract, FaCoins, FaExclamationTriangle, FaCopyright, FaGlobe } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Terms page translations
const translations = {
  tr: {
    title: "Kullanım Koşulları",
    subtitle: "ClusterEye hizmetlerini kullanmadan önce lütfen bu koşulları dikkatlice okuyun.",
    lastUpdated: {
      label: "Son Güncelleme:",
      date: "10 Haziran 2023",
      print: "Yazdır"
    },
    tableOfContents: {
      title: "İçindekiler",
      sections: [
        { id: "agreement", title: "1. Anlaşma" },
        { id: "accounts", title: "2. Hesaplar" },
        { id: "services", title: "3. Hizmetler ve Abonelikler" },
        { id: "payments", title: "4. Ödemeler" },
        { id: "intellectual-property", title: "5. Fikri Mülkiyet" },
        { id: "user-content", title: "6. Kullanıcı İçeriği" },
        { id: "prohibited", title: "7. Yasaklanan Kullanımlar" },
        { id: "termination", title: "8. Sona Erme" },
        { id: "disclaimer", title: "9. Sorumluluk Reddi" },
        { id: "limitation", title: "10. Sorumluluk Sınırlaması" },
        { id: "general", title: "11. Genel Koşullar" }
      ]
    },
    agreement: {
      title: "1. Anlaşma",
      content: [
        "Bu Kullanım Koşulları (\"Koşullar\"), clustereye.com web sitesi, ClusterEye yazılımı ve ilgili hizmetleri (toplu olarak \"Hizmet\") kullanımınızı düzenleyen yasal olarak bağlayıcı bir anlaşmadır.",
        "Bu Koşullar, ClusterEye (\"Şirket\", \"biz\" veya \"bizim\") ile siz (\"Kullanıcı\", \"siz\" veya \"sizin\") arasında yapılmıştır.",
        "Hizmeti kullanarak veya hesap oluşturarak, bu Koşulları ve Gizlilik Politikamızı okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan edersiniz."
      ]
    },
    accounts: {
      title: "2. Hesaplar",
      security: {
        title: "2.1 Hesap Güvenliği",
        text: "Hesabınızı oluştururken, doğru, eksiksiz ve güncel bilgiler sağlamanız gerekmektedir. Hesap parolanızın gizliliğini korumak ve hesabınız altında gerçekleşen tüm etkinliklerden siz sorumlusunuz. Herhangi bir güvenlik ihlali veya hesabınızın yetkisiz kullanımı durumunda bizi derhal bilgilendirmelisiniz."
      },
      ageRestriction: {
        title: "2.2 Yaş Kısıtlaması",
        text: "Hizmetimizi kullanabilmek için en az 18 yaşında olmanız gerekmektedir. Hizmeti kullanarak, 18 yaşında veya daha büyük olduğunuzu beyan edersiniz."
      },
      access: {
        title: "2.3 Hesap Erişimi",
        text: "Tek bir hesabı birden fazla kişinin kullanması yasaktır. Herhangi bir nedenle hesabınıza erişim kaybederseniz, size yardımcı olmak için support@clustereye.com adresinden müşteri desteğimizle iletişime geçebilirsiniz."
      }
    },
    services: {
      title: "3. Hizmetler ve Abonelikler",
      description: {
        title: "3.1 Hizmetlerin Açıklaması",
        text: "ClusterEye, veritabanı izleme, performans analizi ve optimizasyon için agent tabanlı bir hizmet sağlar. Hizmetimiz, sunucularınızda çalışan ajanlar aracılığıyla veritabanı performansını izler ve analiz eder."
      },
      plans: {
        title: "3.2 Abonelik Planları",
        text: "Çeşitli abonelik planları sunuyoruz. Her planın kendi özellik ve sınırlamaları vardır. Aktif abonelik, seçtiğiniz plana göre Hizmetimize erişim sağlar. Tam fiyatlandırma ve plan detayları Fiyatlandırma sayfamızda bulunabilir."
      },
      changes: {
        title: "3.3 Hizmet Değişiklikleri",
        text: "ClusterEye, herhangi bir zamanda ve önceden bildirimde bulunmaksızın Hizmetleri güncelleme, değiştirme veya sonlandırma hakkını saklı tutar. Önemli değişiklikler durumunda makul ölçüde bildirim sağlamaya çalışacağız."
      }
    },
    payments: {
      title: "4. Ödemeler",
      terms: {
        title: "4.1 Ödeme Koşulları",
        text: "Ücretli bir plan için kaydolduğunuzda, ödeme yönteminizden hemen ücret alınacaktır. Abonelik ücretleri, abonelik döneminin başlangıcında önceden tahsil edilir. Tüm ücretler iade edilemez."
      },
      autoRenewal: {
        title: "4.2 Otomatik Yenileme",
        text: "Abonelikler, iptal edilmediği sürece mevcut plan dönemine uygun olarak otomatik olarak yenilenir. Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan veya support@clustereye.com adresine e-posta göndererek iptal edebilirsiniz."
      },
      priceChanges: {
        title: "4.3 Fiyat Değişiklikleri",
        text: "ClusterEye, hizmet ücretlerini herhangi bir zamanda değiştirme hakkını saklı tutar. Fiyat değişiklikleri, değişikliğin yürürlüğe girmesinden en az 30 gün önce bildirilecektir. Mevcut abonelik döneminiz için fiyat değişikliği olmayacaktır."
      }
    },
    intellectualProperty: {
      title: "5. Fikri Mülkiyet",
      content: [
        "Hizmet, yazılım, ticari markalar, hizmet markaları, grafikler ve içerik dahil olmak üzere ClusterEye'a ait fikri mülkiyettir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları ile korunmaktadır.",
        "ClusterEye, size Hizmeti yalnızca bu Koşullara uygun olarak kullanmanız için kişisel, dünya çapında, münhasır olmayan, devredilemez ve alt lisanslanamaz bir lisans verir.",
        "Bu Koşullarda açıkça belirtilmeyen tüm haklar saklıdır. ClusterEye'ın önceden yazılı izni olmadan Hizmeti veya herhangi bir bileşenini kopyalayamaz, değiştiremez, dağıtamaz veya ticari olarak kullanamazsınız."
      ]
    },
    userContent: {
      title: "6. Kullanıcı İçeriği",
      content: [
        "Hizmetimizi kullanırken yüklediğiniz, gönderdiğiniz veya oluşturduğunuz içerik (\"Kullanıcı İçeriği\") sizin mülkiyetinizde kalır. Kullanıcı İçeriğinden tamamen siz sorumlusunuz ve bunun için gerekli tüm haklara sahip olduğunuzu beyan edersiniz.",
        "Hizmete Kullanıcı İçeriği göndererek, ClusterEye'a Kullanıcı İçeriğinizi Hizmeti sağlamak, iyileştirmek ve tanıtmak amacıyla kullanmak, kopyalamak, değiştirmek ve dağıtmak için münhasır olmayan, dünya çapında, telifsiz, devredilebilir ve alt lisanslanabilir bir hak ve lisans verirsiniz.",
        "ClusterEye, uygunsuz, yasalara aykırı veya bu Koşulları ihlal eden herhangi bir Kullanıcı İçeriğini kaldırma hakkını saklı tutar, ancak bunu yapma yükümlülüğü yoktur."
      ]
    },
    prohibited: {
      title: "7. Yasaklanan Kullanımlar",
      intro: "Hizmeti kullanırken aşağıdaki eylemleri gerçekleştirmeyeceğinizi kabul edersiniz:",
      items: [
        "Yasalara aykırı herhangi bir amaç için Hizmeti kullanmak",
        "Zararlı kod, virüs veya benzeri programları göndermek",
        "Hizmeti veya bağlı sunucuları ve ağları engellemek veya bozmak",
        "Hizmeti kötüye kullanmak veya istismar etmek",
        "Başkalarının fikri mülkiyet haklarını ihlal etmek",
        "Hizmete yetkisiz erişim elde etmek",
        "Diğer kullanıcıları taciz etmek veya kişisel bilgilerini toplamak",
        "Bu Koşulları veya yürürlükteki yasaları ihlal edecek şekilde Hizmeti kullanmak"
      ],
      conclusion: "Bu yükümlülüklerin ihlali, hesabınızın feshi ve/veya yasal işlem başlatılmasıyla sonuçlanabilir."
    },
    termination: {
      title: "8. Sona Erme",
      content: [
        "Bu Koşullar, siz veya ClusterEye tarafından feshedilene kadar geçerlidir. Hesabınızı istediğiniz zaman, herhangi bir nedenle iptal ederek bu Koşulları feshedebilirsiniz.",
        "ClusterEye, bu Koşulları ihlal etmeniz veya yasalara aykırı davranmanız durumunda, önceden bildirimde bulunmaksızın bu Koşulları ve Hizmete erişiminizi feshedebilir.",
        "Fesih üzerine, Hizmeti kullanma hakkınız derhal sona erecektir. Fesihten sonra da geçerli olan yükümlülükler ve haklar devam edecektir."
      ]
    },
    disclaimer: {
      title: "9. Sorumluluk Reddi",
      content: [
        "HİZMET \"OLDUĞU GİBİ\" VE \"MEVCUT OLDUĞU KADARIYLA\" SUNULMAKTADIR, HERHANGİ BİR GARANTİ OLMAKSIZIN. CLUSTEREYE, HİZMETİN KESİNTİSİZ, ZAMANINDA, GÜVENLİ VEYA HATASIZ OLACAĞINI GARANTİ ETMEZ.",
        "HİZMET ARACILIĞIYLA ELDE EDİLEN TAVSİYE VEYA BİLGİLERİN DOĞRULUĞU, GÜVENİLİRLİĞİ VEYA BUNLARA GÜVENİLMESİ KONUSUNDA HİÇBİR GARANTİ YOKTUR.",
        "CLUSTEREYE, HİZMET ÜZERİNDEN VEYA ONUN İLE BAĞLANTILI OLARAK GÖNDERİLEN VEYA ALINAN İLETİLERİN, İÇERİKLERİN VEYA BİLGİLERİN GİZLİLİĞİNİ GARANTİ ETMEZ."
      ]
    },
    limitation: {
      title: "10. Sorumluluk Sınırlaması",
      content: [
        "CLUSTEREYE, HİÇBİR DURUMDA, HİZMETİN KULLANIMI VEYA KULLANILAMAMASI, HİZMETTEKİ GECİKMELER, VERİ KAYBI, KAR KAYBI, İŞ KAYBI VEYA DİĞER ZARARLAR DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE, HERHANGİ BİR DOLAYLI, ÖZEL, ARIZİ, NETİCE KABİLİNDEN DOĞAN VEYA CEZA GEREKTİREN ZARARLARDAN SORUMLU OLMAYACAKTIR.",
        "BAZI YARGI BÖLGELERİ, ARIZİ VEYA NETİCE KABİLİNDEN DOĞAN ZARARLARIN HARİÇ TUTULMASINA VEYA SINIRLANDIRILMASINA İZİN VERMEDİĞİNDEN, YUKARIDAKİ SINIRLAMALAR SİZİN İÇİN GEÇERLİ OLMAYABİLİR.",
        "HER DURUMDA, HERHANGİ BİR HASAR İÇİN CLUSTEREYE'IN TOPLAM SORUMLULUĞU, SON 12 AYDA CLUSTEREYE'A ÖDEDİĞİNİZ MİKTARI AŞMAYACAKTIR."
      ]
    },
    general: {
      title: "11. Genel Koşullar",
      law: {
        title: "11.1 Geçerli Kanun",
        text: "Bu Koşullar, kanunlar ihtilafı prensipleri dikkate alınmaksızın Türkiye Cumhuriyeti kanunlarına göre yönetilecek ve yorumlanacaktır."
      },
      waiver: {
        title: "11.2 Feragat",
        text: "ClusterEye'ın bu Koşulların herhangi bir hükmünü uygulamaması, o veya başka bir hükümden feragat olarak kabul edilmeyecektir."
      },
      severability: {
        title: "11.3 Bölünebilirlik",
        text: "Bu Koşulların herhangi bir hükmünün geçersiz veya uygulanamaz olduğuna karar verilirse, kalan hükümler tam olarak yürürlükte ve geçerli kalacaktır."
      },
      entireAgreement: {
        title: "11.4 Tüm Anlaşma",
        text: "Bu Koşullar, Gizlilik Politikası ve diğer yasal bildirimler, Hizmetin kullanımıyla ilgili olarak siz ve ClusterEye arasındaki tüm anlaşmayı oluşturur."
      },
      modifications: {
        title: "11.5 Değişiklikler",
        text: "ClusterEye, bu Koşulları herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler, web sitemizde yayınlandıktan sonra yürürlüğe girecektir. Değişikliklerden sonra Hizmeti kullanmaya devam etmeniz, revize edilmiş Koşulları kabul ettiğiniz anlamına gelecektir."
      }
    },
    contact: {
      text: "Bu Kullanım Koşulları hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:",
      email: "E-posta: legal@clustereye.com",
      web: "Web: https://clustereye.com/contact"
    }
  },
  en: {
    title: "Terms of Use",
    subtitle: "Please read these terms carefully before using ClusterEye services.",
    lastUpdated: {
      label: "Last Updated:",
      date: "June 10, 2023",
      print: "Print"
    },
    tableOfContents: {
      title: "Table of Contents",
      sections: [
        { id: "agreement", title: "1. Agreement" },
        { id: "accounts", title: "2. Accounts" },
        { id: "services", title: "3. Services and Subscriptions" },
        { id: "payments", title: "4. Payments" },
        { id: "intellectual-property", title: "5. Intellectual Property" },
        { id: "user-content", title: "6. User Content" },
        { id: "prohibited", title: "7. Prohibited Uses" },
        { id: "termination", title: "8. Termination" },
        { id: "disclaimer", title: "9. Disclaimer" },
        { id: "limitation", title: "10. Limitation of Liability" },
        { id: "general", title: "11. General Terms" }
      ]
    },
    agreement: {
      title: "1. Agreement",
      content: [
        "These Terms of Use (\"Terms\") are a legally binding agreement governing your use of the clustereye.com website, ClusterEye software, and related services (collectively, the \"Service\").",
        "These Terms are between ClusterEye (\"Company\", \"we\", or \"our\") and you (\"User\", \"you\", or \"your\").",
        "By using the Service or creating an account, you represent that you have read, understood, and agree to be bound by these Terms and our Privacy Policy."
      ]
    },
    accounts: {
      title: "2. Accounts",
      security: {
        title: "2.1 Account Security",
        text: "When creating your account, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must immediately notify us of any security breach or unauthorized use of your account."
      },
      ageRestriction: {
        title: "2.2 Age Restriction",
        text: "You must be at least 18 years old to use our Service. By using the Service, you represent that you are 18 years of age or older."
      },
      access: {
        title: "2.3 Account Access",
        text: "It is prohibited for multiple individuals to use a single account. If you lose access to your account for any reason, you may contact our customer support at support@clustereye.com for assistance."
      }
    },
    services: {
      title: "3. Services and Subscriptions",
      description: {
        title: "3.1 Description of Services",
        text: "ClusterEye provides an agent-based service for database monitoring, performance analysis, and optimization. Our Service monitors and analyzes database performance through agents running on your servers."
      },
      plans: {
        title: "3.2 Subscription Plans",
        text: "We offer various subscription plans. Each plan has its own features and limitations. An active subscription grants you access to our Service according to the plan you selected. Full pricing and plan details can be found on our Pricing page."
      },
      changes: {
        title: "3.3 Service Changes",
        text: "ClusterEye reserves the right to update, modify, or discontinue the Services at any time and without prior notice. We will attempt to provide reasonable notice in the event of significant changes."
      }
    },
    payments: {
      title: "4. Payments",
      terms: {
        title: "4.1 Payment Terms",
        text: "When you sign up for a paid plan, you will be immediately charged through your payment method. Subscription fees are collected in advance at the beginning of your subscription period. All fees are non-refundable."
      },
      autoRenewal: {
        title: "4.2 Automatic Renewal",
        text: "Subscriptions automatically renew according to your current plan period unless canceled. You may cancel your subscription at any time from your account settings or by emailing support@clustereye.com."
      },
      priceChanges: {
        title: "4.3 Price Changes",
        text: "ClusterEye reserves the right to change service fees at any time. Price changes will be communicated at least 30 days before the change takes effect. There will be no price change for your current subscription period."
      }
    },
    intellectualProperty: {
      title: "5. Intellectual Property",
      content: [
        "The Service, including software, trademarks, service marks, graphics, and content, is intellectual property owned by ClusterEye and is protected by copyright, trademark, and other intellectual property laws.",
        "ClusterEye grants you a personal, worldwide, non-exclusive, non-transferable, and non-sublicensable license to use the Service solely in accordance with these Terms.",
        "All rights not expressly granted in these Terms are reserved. You may not copy, modify, distribute, or commercially exploit the Service or any component thereof without ClusterEye's prior written permission."
      ]
    },
    userContent: {
      title: "6. User Content",
      content: [
        "Content that you upload, submit, or create while using our Service (\"User Content\") remains your property. You are solely responsible for User Content and represent that you have all necessary rights to it.",
        "By submitting User Content to the Service, you grant ClusterEye a non-exclusive, worldwide, royalty-free, transferable, and sublicensable right and license to use, copy, modify, and distribute your User Content for the purpose of providing, improving, and promoting the Service.",
        "ClusterEye reserves the right, but not the obligation, to remove any User Content that is inappropriate, illegal, or violates these Terms."
      ]
    },
    prohibited: {
      title: "7. Prohibited Uses",
      intro: "You agree not to engage in the following actions when using the Service:",
      items: [
        "Using the Service for any illegal purpose",
        "Transmitting harmful code, viruses, or similar programs",
        "Interfering with or disrupting the Service or connected servers and networks",
        "Abusing or misusing the Service",
        "Infringing on the intellectual property rights of others",
        "Gaining unauthorized access to the Service",
        "Harassing other users or collecting their personal information",
        "Using the Service in a way that violates these Terms or applicable laws"
      ],
      conclusion: "Violation of these obligations may result in termination of your account and/or legal action."
    },
    termination: {
      title: "8. Termination",
      content: [
        "These Terms remain in effect until terminated by you or ClusterEye. You may terminate these Terms by canceling your account at any time, for any reason.",
        "ClusterEye may terminate these Terms and your access to the Service without prior notice if you violate these Terms or act unlawfully.",
        "Upon termination, your right to use the Service will immediately cease. Obligations and rights that continue after termination will survive."
      ]
    },
    disclaimer: {
      title: "9. Disclaimer",
      content: [
        "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT ANY WARRANTIES. CLUSTEREYE DOES NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.",
        "THERE IS NO WARRANTY AS TO THE ACCURACY, RELIABILITY, OR RELIANCE ON ADVICE OR INFORMATION OBTAINED THROUGH THE SERVICE.",
        "CLUSTEREYE DOES NOT GUARANTEE THE CONFIDENTIALITY OF MESSAGES, CONTENT, OR INFORMATION SENT OR RECEIVED VIA OR IN CONNECTION WITH THE SERVICE."
      ]
    },
    limitation: {
      title: "10. Limitation of Liability",
      content: [
        "IN NO EVENT SHALL CLUSTEREYE BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF USE, DATA, PROFITS, BUSINESS, OR OTHER LOSSES, ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE SERVICE.",
        "SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.",
        "IN ANY CASE, CLUSTEREYE'S TOTAL LIABILITY FOR ANY DAMAGES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO CLUSTEREYE IN THE LAST 12 MONTHS."
      ]
    },
    general: {
      title: "11. General Terms",
      law: {
        title: "11.1 Governing Law",
        text: "These Terms shall be governed by and construed in accordance with the laws of the Republic of Turkey, without regard to its conflict of law principles."
      },
      waiver: {
        title: "11.2 Waiver",
        text: "ClusterEye's failure to enforce any provision of these Terms shall not be deemed a waiver of such provision or any other provision."
      },
      severability: {
        title: "11.3 Severability",
        text: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
      },
      entireAgreement: {
        title: "11.4 Entire Agreement",
        text: "These Terms, the Privacy Policy, and other legal notices constitute the entire agreement between you and ClusterEye regarding the use of the Service."
      },
      modifications: {
        title: "11.5 Modifications",
        text: "ClusterEye reserves the right to modify these Terms at any time. Changes will be effective upon posting to our website. Your continued use of the Service after changes means you accept the revised Terms."
      }
    },
    contact: {
      text: "If you have any questions about these Terms of Use, please contact us:",
      email: "Email: legal@clustereye.com",
      web: "Web: https://clustereye.com/contact"
    }
  }
};

export default function Terms({ params }: { params: LangParams }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const lang = use(params).lang;
  const t = translations[lang];
  
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
      
      {/* Last Updated Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-gray-400">{t.lastUpdated.label} <span className="text-white">{t.lastUpdated.date}</span></p>
          <a 
            href="#" 
            onClick={() => window.print()}
            className="text-purple-400 hover:text-purple-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            {t.lastUpdated.print}
          </a>
        </div>
      </section>
      
      {/* Table of Contents */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">{t.tableOfContents.title}</h2>
            <ul className="space-y-2">
              {t.tableOfContents.sections.map((section, index) => (
                <li key={index}>
                  <a href={`#${section.id}`} className="text-purple-400 hover:text-purple-300">{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Agreement */}
          <div id="agreement" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGavel className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.agreement.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.agreement.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.agreement.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Accounts */}
          <div id="accounts" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserShield className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.accounts.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{t.accounts.security.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.accounts.security.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.accounts.ageRestriction.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.accounts.ageRestriction.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.accounts.access.title}</h3>
              <p className="text-gray-300">
                {t.accounts.access.text}
              </p>
            </div>
          </div>
          
          {/* Services and Subscriptions */}
          <div id="services" className="mb-12">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.services.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.description.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.services.description.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.plans.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.services.plans.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.services.changes.title}</h3>
              <p className="text-gray-300">
                {t.services.changes.text}
              </p>
            </div>
          </div>
          
          {/* Payments */}
          <div id="payments" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCoins className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.payments.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{t.payments.terms.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.payments.terms.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.payments.autoRenewal.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.payments.autoRenewal.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.payments.priceChanges.title}</h3>
              <p className="text-gray-300">
                {t.payments.priceChanges.text}
              </p>
            </div>
          </div>
          
          {/* Intellectual Property */}
          <div id="intellectual-property" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCopyright className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.intellectualProperty.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.intellectualProperty.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.intellectualProperty.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* User Content */}
          <div id="user-content" className="mb-12">
            <div className="flex items-center mb-4">
              <FaFileContract className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.userContent.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.userContent.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.userContent.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Prohibited Uses */}
          <div id="prohibited" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.prohibited.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.prohibited.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                {t.prohibited.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-300">
                {t.prohibited.conclusion}
              </p>
            </div>
          </div>
          
          {/* Termination */}
          <div id="termination" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGavel className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.termination.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.termination.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.termination.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <div id="disclaimer" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.disclaimer.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.disclaimer.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.disclaimer.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Limitation of Liability */}
          <div id="limitation" className="mb-12">
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.limitation.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.limitation.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.limitation.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* General Terms */}
          <div id="general" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.general.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">{t.general.law.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.general.law.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.general.waiver.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.general.waiver.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.general.severability.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.general.severability.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.general.entireAgreement.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.general.entireAgreement.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.general.modifications.title}</h3>
              <p className="text-gray-300">
                {t.general.modifications.text}
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div id="contact" className="mb-12">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.contact.text}
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li><a href="mailto:legal@clustereye.com" className="text-purple-400 hover:text-purple-300">{t.contact.email}</a></li>
                <li><Link href={`/${lang}/contact`} className="text-purple-400 hover:text-purple-300">{t.contact.web}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 