import { cache } from 'react';
import trTranslations from './locales/tr.json';
import enTranslations from './locales/en.json';

export const languages = ['tr', 'en'] as const;
export type Language = typeof languages[number];

// React.use için kullanılacak params tipi
export interface LangParams {
  lang: Language;
}

const dictionaries = {
  tr: trTranslations,
  en: enTranslations,
};

export const getTranslations = cache(async (locale: Language) => {
  return dictionaries[locale];
});

export function isValidLanguage(lang?: string): lang is Language {
  if (!lang) return false;
  return languages.includes(lang as Language);
}

export function getPathWithoutLang(path: string): string {
  // URL parçalarını ayır
  const pathParts = path.split('/').filter((p) => p);
  
  // İlk parça dil mi kontrol et
  if (pathParts.length && isValidLanguage(pathParts[0])) {
    // Dil parçasını çıkar ve kalan yolu birleştir
    return '/' + pathParts.slice(1).join('/');
  }
  
  // Dil yoksa yolu olduğu gibi döndür
  return path;
}

export function getLanguageFromPath(path: string): Language {
  // URL parçalarını ayır
  const pathParts = path.split('/').filter((p) => p);
  
  // İlk parça dil mi kontrol et
  if (pathParts.length && isValidLanguage(pathParts[0])) {
    return pathParts[0] as Language;
  }
  
  // Varsayılan dili döndür
  return 'tr';
}

export function getPathWithLang(path: string, lang: Language): string {
  // Önce dil kısmını çıkar
  const pathWithoutLang = getPathWithoutLang(path);
  
  // Ana sayfa ise sadece dil ekle
  if (pathWithoutLang === '/') {
    return `/${lang}`;
  }
  
  // Diğer sayfalar için dil + yol
  return `/${lang}${pathWithoutLang}`;
} 