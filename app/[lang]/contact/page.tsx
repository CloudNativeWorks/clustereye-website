"use client";

import React, { use } from 'react';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Language, LangParams } from '@/app/i18n';

// Contact page translations
const translations = {
  tr: {
    title: "İletişime Geçin",
    subtitle: "Sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.",
    contactForm: {
      title: "Bizimle İletişime Geçin",
      success: {
        title: "Mesajınız İletildi!",
        message: "En kısa sürede size dönüş yapacağız.",
        button: "Yeni Mesaj Gönder"
      },
      error: {
        technicalDetail: "Teknik detay:",
        persistentError: "Hatanın devam etmesi durumunda lütfen info@clustereye.com adresine e-posta gönderin."
      },
      fields: {
        name: {
          label: "İsim Soyisim",
          required: true
        },
        email: {
          label: "E-posta",
          required: true
        },
        company: {
          label: "Şirket",
          required: false
        },
        phone: {
          label: "Telefon",
          required: false
        },
        message: {
          label: "Mesajınız",
          required: true
        }
      },
      submitButton: {
        sending: "Gönderiliyor...",
        normal: "Gönder"
      }
    },
    contactInfo: {
      title: "İletişim Bilgilerimiz",
      description: "Teknik sorularınız, satış talepleriniz veya iş birliği önerileriniz için bizimle iletişime geçebilirsiniz.",
      email: {
        title: "E-posta",
        general: "info@clustereye.com",
        support: "support@clustereye.com"
      },
      phone: {
        title: "Telefon",
        office: "+90 (212) 461 63 00",
        mobile: "+90 (532) 670 64 94"
      },
      address: {
        title: "Adres",
        line1: "Levent, Büyükdere Cad. No:123",
        line2: "Şişli, İstanbul, 34394",
        line3: "Türkiye"
      }
    },
    map: "Google Maps"
  },
  en: {
    title: "Contact Us",
    subtitle: "Have questions? We would be happy to help you.",
    contactForm: {
      title: "Get in Touch",
      success: {
        title: "Your Message Has Been Sent!",
        message: "We will get back to you as soon as possible.",
        button: "Send New Message"
      },
      error: {
        technicalDetail: "Technical detail:",
        persistentError: "If the error persists, please send an email to info@clustereye.com."
      },
      fields: {
        name: {
          label: "Full Name",
          required: true
        },
        email: {
          label: "Email",
          required: true
        },
        company: {
          label: "Company",
          required: false
        },
        phone: {
          label: "Phone",
          required: false
        },
        message: {
          label: "Your Message",
          required: true
        }
      },
      submitButton: {
        sending: "Sending...",
        normal: "Send"
      }
    },
    contactInfo: {
      title: "Contact Information",
      description: "You can contact us for technical questions, sales inquiries, or partnership proposals.",
      email: {
        title: "Email",
        general: "info@clustereye.com",
        support: "support@clustereye.com"
      },
      phone: {
        title: "Phone",
        office: "+90 (212) 461 63 00",
        mobile: "+90 (532) 670 64 94"
      },
      address: {
        title: "Address",
        line1: "Levent, Büyükdere Cad. No:123",
        line2: "Şişli, Istanbul, 34394",
        line3: "Turkey"
      }
    },
    map: "Google Maps"
  }
};

export default function Contact({ params }: { params: LangParams }) {
  // @ts-ignore - Next.js'in yeni sürümlerinde params bir Promise olduğu için React.use() kullanıyoruz
  const lang = use(params).lang;
  const t = translations[lang];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setErrorDetails(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || (lang === 'tr' ? 'Bir hata oluştu' : 'An error occurred'));
      }
      
      // Form successfully submitted
      setFormSubmitted(true);
      // Reset form data
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : (lang === 'tr' ? 'Bir hata oluştu' : 'An error occurred'));
      
      // Set error details
      try {
        const errorResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }).then(res => res.json());
        
        if (errorResponse.details) {
          setErrorDetails(errorResponse.details);
        }
      } catch {
        // Ignore if error details cannot be retrieved
      }
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

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-white mb-6">{t.contactForm.title}</h2>
              
              {formSubmitted ? (
                <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
                  <FaPaperPlane className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t.contactForm.success.title}</h3>
                  <p className="text-gray-300">{t.contactForm.success.message}</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white transition duration-300"
                  >
                    {t.contactForm.success.button}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-900/30 border border-red-500 text-white p-4 rounded-lg">
                      <p className="font-medium">{error}</p>
                      {errorDetails && (
                        <p className="text-sm mt-2 text-red-200">{t.contactForm.error.technicalDetail} {errorDetails}</p>
                      )}
                      <p className="text-xs mt-4 text-red-300">
                        {t.contactForm.error.persistentError}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contactForm.fields.name.label} {t.contactForm.fields.name.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required={t.contactForm.fields.name.required}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contactForm.fields.email.label} {t.contactForm.fields.email.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required={t.contactForm.fields.email.required}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contactForm.fields.company.label} {t.contactForm.fields.company.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required={t.contactForm.fields.company.required}
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        {t.contactForm.fields.phone.label} {t.contactForm.fields.phone.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required={t.contactForm.fields.phone.required}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      {t.contactForm.fields.message.label} {t.contactForm.fields.message.required && <span className="text-red-500">*</span>}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required={t.contactForm.fields.message.required}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? t.contactForm.submitButton.sending : t.contactForm.submitButton.normal}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div className="space-y-10 order-1 lg:order-2">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">{t.contactInfo.title}</h2>
                <p className="text-gray-300 mb-8">
                  {t.contactInfo.description}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <FaEnvelope className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{t.contactInfo.email.title}</h3>
                      <p className="text-gray-300 mt-1">{t.contactInfo.email.general}</p>
                      <p className="text-gray-300">{t.contactInfo.email.support}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <FaPhone className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{t.contactInfo.phone.title}</h3>
                      <p className="text-gray-300 mt-1">{t.contactInfo.phone.office}</p>
                      <p className="text-gray-300">{t.contactInfo.phone.mobile}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{t.contactInfo.address.title}</h3>
                      <p className="text-gray-300 mt-1">
                        {t.contactInfo.address.line1}<br />
                        {t.contactInfo.address.line2}<br />
                        {t.contactInfo.address.line3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="bg-gray-800 p-2 rounded-xl border border-gray-700 h-[300px] overflow-hidden">
                <div className="w-full h-full rounded-lg bg-gray-700 flex items-center justify-center text-gray-400">
                  {/* Google Maps iframe can be used here */}
                  <p>{t.map}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 