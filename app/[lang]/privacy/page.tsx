"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaUserLock, FaServer, FaCookieBite, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Privacy policy translations
const translations = {
  tr: {
    title: "Gizlilik Politikası",
    subtitle: "ClusterEye olarak verilerinizin gizliliği ve güvenliği bizim için en yüksek önceliktir.",
    lastUpdated: {
      label: "Son Güncelleme:",
      date: "10 Haziran 2023",
      print: "Yazdır"
    },
    tableOfContents: {
      title: "İçindekiler",
      sections: [
        { id: "introduction", title: "1. Giriş" },
        { id: "collected-data", title: "2. Topladığımız Bilgiler" },
        { id: "data-usage", title: "3. Bilgilerin Kullanımı" },
        { id: "data-sharing", title: "4. Bilgilerin Paylaşımı" },
        { id: "data-security", title: "5. Veri Güvenliği" },
        { id: "cookies", title: "6. Çerezler ve Takip Teknolojileri" },
        { id: "international", title: "7. Uluslararası Veri Transferleri" },
        { id: "rights", title: "8. Kullanıcı Hakları" },
        { id: "changes", title: "9. Değişiklikler" },
        { id: "contact", title: "10. İletişim" }
      ]
    },
    introduction: {
      title: "1. Giriş",
      content: [
        "ClusterEye (\"biz\", \"bize\" veya \"bizim\") tarafından işletilen clustereye.com web sitesi ve ClusterEye uygulamasını (\"Hizmet\") kullanımınızla ilgili olarak kişisel bilgilerin toplanması, kullanımı ve ifşası ile ilgili politikalarımızı açıklamaktadır.",
        "Kişisel bilgilerinizi, size Hizmetimizi sağlamak ve geliştirmek için kullanırız. Bu Gizlilik Politikası'nı kabul ederek, bilgilerin bu doğrultuda toplanmasını ve kullanılmasını kabul etmiş olursunuz.",
        "Bu Gizlilik Politikası'nda aksi belirtilmedikçe, bu Gizlilik Politikası'nda kullanılan terimler, Hüküm ve Koşullarımızda belirtilen anlamlara sahiptir."
      ]
    },
    collectedData: {
      title: "2. Topladığımız Bilgiler",
      intro: "Hizmetimizi kullanmanız için çeşitli türde bilgiler topluyoruz. Bu bilgiler şunları içerebilir:",
      personalInfo: {
        title: "2.1 Kişisel Bilgiler",
        intro: "Hizmetimizi kullanırken, sizden belirli kişisel bilgileri sağlamanızı isteyebiliriz. Bunlar şunları içerebilir:",
        items: [
          "Ad ve soyadı",
          "E-posta adresi",
          "Şirket adı",
          "Telefon numarası",
          "Fatura adresi"
        ]
      },
      usageData: {
        title: "2.2 Kullanım Verileri",
        intro: "Hizmetimizi nasıl kullandığınız hakkında bilgiler de toplayabiliriz. Bu kullanım verileri şunları içerebilir:",
        items: [
          "IP adresi",
          "Tarayıcı türü ve versiyonu",
          "Ziyaret edilen sayfalar",
          "Ziyaret tarihi ve saati",
          "Hizmet içindeki tıklama kalıpları"
        ]
      },
      cookiesData: {
        title: "2.3 İzleme ve Çerezler Verisi",
        intro: "Hizmetimizdeki etkinliği izlemek ve belirli bilgileri saklamak için çerezleri ve benzeri izleme teknolojilerini kullanıyoruz. Çerezler, az miktarda veri içeren dosyalardır ve anonim benzersiz bir tanımlayıcı içerebilir."
      }
    },
    dataUsage: {
      title: "3. Bilgilerin Kullanımı",
      intro: "Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:",
      purposes: [
        "Hizmetimizi sağlamak ve sürdürmek",
        "Hizmetimizdeki değişiklikler hakkında sizi bilgilendirmek",
        "Bunu seçtiğinizde Hizmetimizin etkileşimli özelliklerine katılmanıza izin vermek",
        "Müşteri hizmetleri ve destek sağlamak",
        "Hizmeti iyileştirmek için analiz veya değerli bilgiler sağlamak",
        "Hizmetin kullanımını izlemek",
        "Teknik sorunları tespit etmek, önlemek ve ele almak"
      ]
    },
    dataSharing: {
      title: "4. Bilgilerin Paylaşımı",
      intro: "Kişisel bilgilerinizi şu durumlarda açıklayabiliriz:",
      reasons: [
        "Yasal bir yükümlülüğe uymak için",
        "ClusterEye'ın haklarını veya mülkiyetini korumak ve savunmak için",
        "Hizmetin olası suistimallerini önlemek veya araştırmak için",
        "Hizmet kullanıcılarının veya kamunun kişisel güvenliğini korumak için",
        "Yasal sorumluluğa karşı korunmak için"
      ],
      serviceProviders: {
        title: "4.1 Hizmet Sağlayıcılar",
        text: "Kişisel bilgilerinizi, Hizmetimizin işleyişini kolaylaştırmak, Hizmetimizi bizim adımıza sunmak, hizmetle ilgili hizmetleri gerçekleştirmek veya Hizmetimizin nasıl kullanıldığını analiz etmemize yardımcı olmak için üçüncü taraf şirketlere ve bireylere (\"Hizmet Sağlayıcılar\") sağlayabiliriz."
      },
      businessTransfers: {
        title: "4.2 İş Transferleri",
        text: "Bir birleşme, şirket varlıklarının satışı, finansman veya işimizin tamamının veya bir kısmının başka bir şirkete satın alınması durumunda, Kişisel Bilgileriniz aktarılan varlıklar arasında olabilir."
      }
    },
    dataSecurity: {
      title: "5. Veri Güvenliği",
      text1: "Bilgilerinizin güvenliği bizim için önemlidir. Ancak, internet üzerinden hiçbir aktarım yönteminin veya elektronik depolama yönteminin %100 güvenli olmadığını unutmayın. Kişisel Bilgilerinizi korumak için ticari olarak kabul edilebilir yöntemler kullanmaya çalışsak da, mutlak güvenliğini garanti edemeyiz.",
      text2: "Veri güvenliği önlemlerimiz şunları içerir:",
      measures: [
        "Tüm veri aktarımları için SSL şifreleme",
        "Düzenli güvenlik denetimleri",
        "Personel eğitimi ve erişim kontrolü",
        "Fiziksel ve elektronik güvenlik önlemleri",
        "Veri yedekleme prosedürleri"
      ]
    },
    cookies: {
      title: "6. Çerezler ve Takip Teknolojileri",
      text1: "Hizmetimizi geliştirmek ve analiz etmek için çerezleri ve benzer izleme teknolojilerini kullanıyoruz.",
      text2: "Çerezler, tarayıcınız tarafından cihazınıza yerleştirilen küçük dosyalardır. Bu teknolojiler, Hizmetimizi nasıl kullandığınızı anlamamıza ve kullanıcı deneyiminizi iyileştirmemize yardımcı olur.",
      text3: "Tarayıcınızı tüm çerezleri reddetmek veya bir çerez gönderildiğinde bunu belirtmek üzere ayarlayabilirsiniz. Ancak, çerezleri kabul etmezseniz, Hizmetimizin bazı bölümlerini kullanamayabilirsiniz.",
      text4: "Kullandığımız çerezler şunları içerir:",
      types: [
        { name: "Oturum Çerezleri", description: "Hizmetimizi kullanırken kullanıcı oturumunu yönetmek için" },
        { name: "Tercih Çerezleri", description: "Dil tercihleri gibi kullanıcı tercihlerini hatırlamak için" },
        { name: "Analitik Çerezleri", description: "Hizmetimizin nasıl kullanıldığını anlamak için" }
      ]
    },
    international: {
      title: "7. Uluslararası Veri Transferleri",
      text1: "Bilgileriniz, Hizmet işlemlerimizin yürütüldüğü bilgisayarlarda tutulabilir ve bu bilgisayarlar sizin eyaletinizin, vilayetinizin, ülkenizin veya diğer devlet yargı alanının dışında olabilir ve veri koruma yasaları sizin bölgenizden farklı olabilir.",
      text2: "Türkiye dışında ikamet ediyorsanız ve bize bilgi sağlamayı seçtiyseniz, bilgileri Türkiye'ye aktardığımızı ve burada işlediğimizi unutmayın.",
      text3: "Bu Gizlilik Politikası'nı kabul ederek ve bu tür bilgileri göndererek, bu transfere onay vermiş olursunuz."
    },
    rights: {
      title: "8. Kullanıcı Hakları",
      intro: "Belirli veri koruma yasalarına göre, hakkınızda tuttuğumuz bilgilerle ilgili belirli haklara sahip olabilirsiniz:",
      rightsList: [
        "Kişisel verilerinize erişim talep etme hakkı",
        "Kişisel verilerinizin düzeltilmesini talep etme hakkı",
        "Kişisel verilerinizin silinmesini talep etme hakkı",
        "Kişisel verilerinizin işlenmesine itiraz etme hakkı",
        "Veri taşınabilirliği talep etme hakkı",
        "Verilerinizin işlenmesine ilişkin onayınızı geri çekme hakkı"
      ],
      contact: "Bu haklarınızı kullanmak için lütfen privacy@clustereye.com adresinden bizimle iletişime geçin."
    },
    changes: {
      title: "9. Değişiklikler",
      text1: "Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Bu sayfada yeni Gizlilik Politikasını yayınlayarak herhangi bir değişikliği size bildireceğiz.",
      text2: "Herhangi bir değişiklik yapmadan önce, bu Gizlilik Politikasının üst kısmında yer alan \"son güncelleme\" tarihini değiştirerek sizi e-posta ve/veya Hizmetimizde belirgin bir bildirim yoluyla bilgilendireceğiz.",
      text3: "Herhangi bir değişiklikten sonra Hizmeti kullanmaya devam etmeniz, revize edilmiş Gizlilik Politikasını kabul ettiğiniz anlamına gelecektir. Bu değişiklikleri düzenli olarak kontrol etmenizi öneririz."
    },
    contact: {
      title: "10. İletişim",
      text: "Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:",
      email: "E-posta: privacy@clustereye.com",
      web: "Web: https://clustereye.com/contact"
    }
  },
  en: {
    title: "Privacy Policy",
    subtitle: "At ClusterEye, the privacy and security of your data is our highest priority.",
    lastUpdated: {
      label: "Last Updated:",
      date: "June 10, 2023",
      print: "Print"
    },
    tableOfContents: {
      title: "Table of Contents",
      sections: [
        { id: "introduction", title: "1. Introduction" },
        { id: "collected-data", title: "2. Information We Collect" },
        { id: "data-usage", title: "3. Use of Information" },
        { id: "data-sharing", title: "4. Sharing of Information" },
        { id: "data-security", title: "5. Data Security" },
        { id: "cookies", title: "6. Cookies and Tracking Technologies" },
        { id: "international", title: "7. International Data Transfers" },
        { id: "rights", title: "8. User Rights" },
        { id: "changes", title: "9. Changes" },
        { id: "contact", title: "10. Contact" }
      ]
    },
    introduction: {
      title: "1. Introduction",
      content: [
        "This Privacy Policy explains our policies regarding the collection, use, and disclosure of personal information when you use our clustereye.com website and ClusterEye application (\"Service\") operated by ClusterEye (\"we\", \"us\", or \"our\").",
        "We use your personal information to provide and improve our Service. By accepting this Privacy Policy, you agree to the collection and use of information in accordance with this policy.",
        "Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions."
      ]
    },
    collectedData: {
      title: "2. Information We Collect",
      intro: "We collect several different types of information for various purposes to provide and improve our Service. These types of information may include:",
      personalInfo: {
        title: "2.1 Personal Information",
        intro: "While using our Service, we may ask you to provide us with certain personally identifiable information. This may include:",
        items: [
          "First and last name",
          "Email address",
          "Company name",
          "Phone number",
          "Billing address"
        ]
      },
      usageData: {
        title: "2.2 Usage Data",
        intro: "We may also collect information about how the Service is accessed and used. This usage data may include:",
        items: [
          "IP address",
          "Browser type and version",
          "Pages visited",
          "Time and date of visit",
          "Click patterns within the Service"
        ]
      },
      cookiesData: {
        title: "2.3 Tracking & Cookies Data",
        intro: "We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier."
      }
    },
    dataUsage: {
      title: "3. Use of Information",
      intro: "We may use the information we collect for various purposes:",
      purposes: [
        "To provide and maintain our Service",
        "To notify you about changes to our Service",
        "To allow you to participate in interactive features of our Service when you choose to do so",
        "To provide customer care and support",
        "To provide analysis or valuable information so that we can improve the Service",
        "To monitor the usage of the Service",
        "To detect, prevent and address technical issues"
      ]
    },
    dataSharing: {
      title: "4. Sharing of Information",
      intro: "We may disclose your personal information in the following situations:",
      reasons: [
        "To comply with a legal obligation",
        "To protect and defend the rights or property of ClusterEye",
        "To prevent or investigate possible wrongdoing in connection with the Service",
        "To protect the personal safety of users of the Service or the public",
        "To protect against legal liability"
      ],
      serviceProviders: {
        title: "4.1 Service Providers",
        text: "We may share your personal information with third-party companies and individuals (\"Service Providers\") to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used."
      },
      businessTransfers: {
        title: "4.2 Business Transfers",
        text: "In the event of a merger, acquisition, or sale of all or a portion of our assets, your Personal Information may be among the transferred assets."
      }
    },
    dataSecurity: {
      title: "5. Data Security",
      text1: "The security of your information is important to us. However, remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
      text2: "Our data security measures include:",
      measures: [
        "SSL encryption for all data transfers",
        "Regular security audits",
        "Staff training and access control",
        "Physical and electronic security measures",
        "Data backup procedures"
      ]
    },
    cookies: {
      title: "6. Cookies and Tracking Technologies",
      text1: "We use cookies and similar tracking technologies to improve and analyze our Service.",
      text2: "Cookies are small files placed on your device by your browser. These technologies help us understand how you use our Service and improve your user experience.",
      text3: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.",
      text4: "The cookies we use include:",
      types: [
        { name: "Session Cookies", description: "To manage user sessions while using our Service" },
        { name: "Preference Cookies", description: "To remember user preferences such as language settings" },
        { name: "Analytics Cookies", description: "To understand how our Service is used" }
      ]
    },
    international: {
      title: "7. International Data Transfers",
      text1: "Your information may be stored on computers located in places where our Service operations are conducted, and these computers may be outside of your state, province, country, or other governmental jurisdiction, and data protection laws may differ from your jurisdiction.",
      text2: "If you are located outside Turkey and choose to provide information to us, please note that we transfer the data to Turkey and process it there.",
      text3: "By accepting this Privacy Policy and submitting such information, you consent to this transfer."
    },
    rights: {
      title: "8. User Rights",
      intro: "Under certain data protection laws, you may have specific rights regarding information we hold about you:",
      rightsList: [
        "The right to request access to your personal data",
        "The right to request correction of your personal data",
        "The right to request deletion of your personal data",
        "The right to object to processing of your personal data",
        "The right to request data portability",
        "The right to withdraw consent for processing your data"
      ],
      contact: "To exercise these rights, please contact us at privacy@clustereye.com."
    },
    changes: {
      title: "9. Changes",
      text1: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      text2: "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"last updated\" date at the top of this Privacy Policy.",
      text3: "Your continued use of the Service after any changes means you accept the revised Privacy Policy. We recommend that you check this policy periodically for changes."
    },
    contact: {
      title: "10. Contact",
      text: "If you have any questions about this Privacy Policy, please contact us:",
      email: "Email: privacy@clustereye.com",
      web: "Web: https://clustereye.com/contact"
    }
  }
};

export default function Privacy({ params }: { params: LangParams }) {
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
          
          {/* Introduction */}
          <div id="introduction" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.introduction.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              {t.introduction.content.map((paragraph, index) => (
                <p key={index} className={`text-gray-300 ${index < t.introduction.content.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Collected Data */}
          <div id="collected-data" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserLock className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.collectedData.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.collectedData.intro}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.collectedData.personalInfo.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.collectedData.personalInfo.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                {t.collectedData.personalInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.collectedData.usageData.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.collectedData.usageData.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-1">
                {t.collectedData.usageData.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.collectedData.cookiesData.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.collectedData.cookiesData.intro}
              </p>
            </div>
          </div>
          
          {/* Data Usage */}
          <div id="data-usage" className="mb-12">
            <div className="flex items-center mb-4">
              <FaServer className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.dataUsage.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.dataUsage.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                {t.dataUsage.purposes.map((purpose, index) => (
                  <li key={index}>{purpose}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Data Sharing */}
          <div id="data-sharing" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.dataSharing.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.dataSharing.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                {t.dataSharing.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.dataSharing.serviceProviders.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.dataSharing.serviceProviders.text}
              </p>
              
              <h3 className="text-lg font-semibold text-white mb-2">{t.dataSharing.businessTransfers.title}</h3>
              <p className="text-gray-300 mb-4">
                {t.dataSharing.businessTransfers.text}
              </p>
            </div>
          </div>
          
          {/* Data Security */}
          <div id="data-security" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.dataSecurity.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.dataSecurity.text1}
              </p>
              <p className="text-gray-300">
                {t.dataSecurity.text2}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                {t.dataSecurity.measures.map((measure, index) => (
                  <li key={index}>{measure}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Cookies */}
          <div id="cookies" className="mb-12">
            <div className="flex items-center mb-4">
              <FaCookieBite className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.cookies.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.cookies.text1}
              </p>
              <p className="text-gray-300 mb-4">
                {t.cookies.text2}
              </p>
              <p className="text-gray-300 mb-4">
                {t.cookies.text3}
              </p>
              <p className="text-gray-300">
                {t.cookies.text4}
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                {t.cookies.types.map((type, index) => (
                  <li key={index}><span className="font-semibold">{type.name}:</span> {type.description}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* International Data */}
          <div id="international" className="mb-12">
            <div className="flex items-center mb-4">
              <FaGlobe className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.international.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.international.text1}
              </p>
              <p className="text-gray-300 mb-4">
                {t.international.text2}
              </p>
              <p className="text-gray-300">
                {t.international.text3}
              </p>
            </div>
          </div>
          
          {/* User Rights */}
          <div id="rights" className="mb-12">
            <div className="flex items-center mb-4">
              <FaUserLock className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.rights.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.rights.intro}
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-300 space-y-2">
                {t.rights.rightsList.map((right, index) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>
              <p className="text-gray-300">
                {t.rights.contact}
              </p>
            </div>
          </div>
          
          {/* Changes */}
          <div id="changes" className="mb-12">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.changes.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.changes.text1}
              </p>
              <p className="text-gray-300 mb-4">
                {t.changes.text2}
              </p>
              <p className="text-gray-300">
                {t.changes.text3}
              </p>
            </div>
          </div>
          
          {/* Contact */}
          <div id="contact" className="mb-12">
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-purple-500 text-xl mr-3" />
              <h2 className="text-2xl font-bold text-white">{t.contact.title}</h2>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t.contact.text}
              </p>
              <ul className="list-none space-y-2 text-gray-300">
                <li><a href="mailto:privacy@clustereye.com" className="text-purple-400 hover:text-purple-300">{t.contact.email}</a></li>
                <li><Link href={`/${lang}/contact`} className="text-purple-400 hover:text-purple-300">{t.contact.web}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 