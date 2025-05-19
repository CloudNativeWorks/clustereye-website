"use client";

import React, { use, useState } from 'react';
import { FaDatabase, FaCheck, FaRobot, FaServer, FaEnvelope, FaPhone, FaBuilding, FaUser } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Demo sayfası çevirileri
const translations = {
  tr: {
    title: "Demo İsteği",
    subtitle: "ClusterEye'ın güçlü özelliklerini keşfetmek için demo talebinde bulunun.",
    form: {
      title: "Demo Talebi Gönderin",
      name: {
        label: "Adınız Soyadınız",
        placeholder: "Adınızı ve soyadınızı girin",
        required: true
      },
      email: {
        label: "E-posta Adresiniz",
        placeholder: "E-posta adresinizi girin",
        required: true
      },
      company: {
        label: "Şirket Adı",
        placeholder: "Şirketinizin adını girin",
        required: true
      },
      phone: {
        label: "Telefon Numarası",
        placeholder: "Telefon numaranızı girin",
        required: false
      },
      role: {
        label: "Göreviniz / Pozisyonunuz",
        placeholder: "Şirketteki pozisyonunuzu girin",
        required: false
      },
      db_type: {
        label: "İlgilendiğiniz Veritabanı Türleri",
        options: [
          { value: "postgresql", label: "PostgreSQL" },
          { value: "mongodb", label: "MongoDB" },
          { value: "mssql", label: "MSSQL" },
          { value: "other", label: "Diğer" }
        ],
        required: true
      },
      db_count: {
        label: "Yaklaşık Veritabanı Sayısı",
        options: [
          { value: "1-5", label: "1-5" },
          { value: "6-20", label: "6-20" },
          { value: "21-50", label: "21-50" },
          { value: "51-100", label: "51-100" },
          { value: "100+", label: "100+" }
        ],
        required: true
      },
      message: {
        label: "Ek Bilgiler veya Sorular",
        placeholder: "Özel gereksinimlerinizi veya sorularınızı belirtin",
        required: false
      },
      submit: {
        text: "Demo Talebi Gönder",
        sending: "Gönderiliyor...",
      },
      success: {
        title: "Talebiniz Alındı!",
        message: "Demo isteğinizi aldık. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
        button: "Ana Sayfaya Dön"
      },
      error: {
        message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        details: "Teknik detay:"
      }
    },
    benefits: {
      title: "Demo Neler İçerir?",
      items: [
        {
          icon: <FaDatabase />,
          title: "Veritabanı İzleme",
          description: "Çoklu veritabanı desteği ile tüm veritabanlarınızı tek bir platformdan izleme."
        },
        {
          icon: <FaRobot />,
          title: "Agent Teknolojisi",
          description: "ClusterEye'ın patentli agent teknolojisi ile veritabanlarınızı otomatik izleme."
        },
        {
          icon: <FaServer />,
          title: "Performans Analizi",
          description: "Gerçek zamanlı performans metrikleri ve akıllı analiz araçları."
        },
        {
          icon: <FaCheck />,
          title: "Özelleştirilmiş Demo",
          description: "İhtiyaçlarınıza ve veritabanı altyapınıza özel hazırlanmış demo."
        }
      ]
    }
  },
  en: {
    title: "Request a Demo",
    subtitle: "Request a demo to discover the powerful features of ClusterEye.",
    form: {
      title: "Send Demo Request",
      name: {
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true
      },
      email: {
        label: "Email Address",
        placeholder: "Enter your email address",
        required: true
      },
      company: {
        label: "Company Name",
        placeholder: "Enter your company name",
        required: true
      },
      phone: {
        label: "Phone Number",
        placeholder: "Enter your phone number",
        required: false
      },
      role: {
        label: "Your Role / Position",
        placeholder: "Enter your position in the company",
        required: false
      },
      db_type: {
        label: "Database Types of Interest",
        options: [
          { value: "postgresql", label: "PostgreSQL" },
          { value: "mongodb", label: "MongoDB" },
          { value: "mssql", label: "MSSQL" },
          { value: "other", label: "Other" }
        ],
        required: true
      },
      db_count: {
        label: "Approximate Number of Databases",
        options: [
          { value: "1-5", label: "1-5" },
          { value: "6-20", label: "6-20" },
          { value: "21-50", label: "21-50" },
          { value: "51-100", label: "51-100" },
          { value: "100+", label: "100+" }
        ],
        required: true
      },
      message: {
        label: "Additional Information or Questions",
        placeholder: "Specify your special requirements or questions",
        required: false
      },
      submit: {
        text: "Submit Demo Request",
        sending: "Sending...",
      },
      success: {
        title: "Request Received!",
        message: "We have received your demo request. Our team will contact you as soon as possible.",
        button: "Return to Home Page"
      },
      error: {
        message: "An error occurred. Please try again later.",
        details: "Technical detail:"
      }
    },
    benefits: {
      title: "What Does the Demo Include?",
      items: [
        {
          icon: <FaDatabase />,
          title: "Database Monitoring",
          description: "Monitor all your databases from a single platform with multi-database support."
        },
        {
          icon: <FaRobot />,
          title: "Agent Technology",
          description: "Automatic monitoring of your databases with ClusterEye's patented agent technology."
        },
        {
          icon: <FaServer />,
          title: "Performance Analysis",
          description: "Real-time performance metrics and intelligent analysis tools."
        },
        {
          icon: <FaCheck />,
          title: "Customized Demo",
          description: "Demo tailored to your needs and database infrastructure."
        }
      ]
    }
  }
};

export default function Demo({ params }: { params: LangParams | Promise<{lang: Language}> }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const t = translations[lang];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    db_type: [] as string[],
    db_count: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, db_type: [...prev.db_type, value] };
      } else {
        return { ...prev, db_type: prev.db_type.filter(type => type !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setErrorDetails(null);
    
    try {
      // Gerçek bir uygulamada, buraya bir API çağrısı ekleyebilirsiniz
      // Örnek: API endpoint: /api/demo-request
      
      // API çağrısını simüle etmek için bir timeout ekleyelim
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Form başarıyla gönderildi
      setFormSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : (lang === 'tr' ? 'Bir hata oluştu' : 'An error occurred'));
      setErrorDetails(err instanceof Error ? err.message : null);
    } finally {
      setIsSubmitting(false);
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

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form Section */}
            <div className="lg:w-2/3">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">{t.form.title}</h2>
                
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-900/30 border border-green-500 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
                      <FaCheck className="text-green-400 w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t.form.success.title}</h3>
                    <p className="text-gray-300 max-w-md mx-auto mb-8">
                      {t.form.success.message}
                    </p>
                    <a 
                      href={`/${lang}`}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-lg transition duration-300"
                    >
                      {t.form.success.button}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-6">
                        <p className="text-red-200">{t.form.error.message}</p>
                        {errorDetails && (
                          <p className="text-red-300 mt-2 text-sm">{t.form.error.details} {errorDetails}</p>
                        )}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.form.name.label} {t.form.name.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaUser className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required={t.form.name.required}
                            placeholder={t.form.name.placeholder}
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                          />
                        </div>
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.form.email.label} {t.form.email.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaEnvelope className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required={t.form.email.required}
                            placeholder={t.form.email.placeholder}
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                          />
                        </div>
                      </div>
                      
                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.form.company.label} {t.form.company.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaBuilding className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required={t.form.company.required}
                            placeholder={t.form.company.placeholder}
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                          />
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          {t.form.phone.label} {t.form.phone.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaPhone className="text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder={t.form.phone.placeholder}
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.form.role.label} {t.form.role.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        placeholder={t.form.role.placeholder}
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      />
                    </div>
                    
                    {/* Database Types */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        {t.form.db_type.label} {t.form.db_type.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {t.form.db_type.options.map((option, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`db_type_${option.value}`}
                              name="db_type"
                              value={option.value}
                              checked={formData.db_type.includes(option.value)}
                              onChange={handleCheckboxChange}
                              className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 bg-gray-700 border-gray-600"
                              required={t.form.db_type.required && formData.db_type.length === 0}
                            />
                            <label htmlFor={`db_type_${option.value}`} className="ml-2 text-gray-300">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Database Count */}
                    <div>
                      <label htmlFor="db_count" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.form.db_count.label} {t.form.db_count.required && <span className="text-red-500">*</span>}
                      </label>
                      <select
                        id="db_count"
                        name="db_count"
                        required={t.form.db_count.required}
                        value={formData.db_count}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      >
                        <option value="" disabled>{lang === 'tr' ? 'Seçiniz' : 'Select'}</option>
                        {t.form.db_count.options.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.form.message.label} {t.form.message.required && <span className="text-red-500">*</span>}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder={t.form.message.placeholder}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition duration-300 disabled:opacity-70 flex items-center justify-center"
                      >
                        {isSubmitting ? t.form.submit.sending : t.form.submit.text}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="lg:w-1/3">
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">{t.benefits.title}</h2>
                <div className="space-y-6">
                  {t.benefits.items.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-purple-400 text-xl">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 