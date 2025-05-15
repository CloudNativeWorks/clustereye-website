import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { languages, isValidLanguage } from './i18n';

export function middleware(request: NextRequest) {
  // URL yolunu al
  const pathname = request.nextUrl.pathname;
  
  // Statik dosyalar için dokunma
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Redirect sayısını kontrol et (X-Redirect-Count header'ı ile)
  const redirectCount = parseInt(request.headers.get('X-Redirect-Count') || '0', 10);
  if (redirectCount > 5) {
    // Çok fazla yönlendirme varsa döngüyü kır
    console.error('Too many redirects detected, stopping redirect chain');
    return NextResponse.next();
  }

  // Kullanıcının tarayıcı dilini al
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  
  // Kullanıcının tarayıcı dilini kontrol et
  const acceptLanguage = request.headers.get('accept-language') || '';
  let preferredLanguage = 'tr'; // Varsayılan olarak Türkçe
  
  // İstemci tercihli dil kodlarını al (en-US,en;q=0.9,tr;q=0.8 gibi)
  const acceptedLanguages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().substring(0, 2).toLowerCase());
  
  // Desteklenen dillerden birini mi istedi?
  for (const lang of acceptedLanguages) {
    if (isValidLanguage(lang)) {
      preferredLanguage = lang;
      break;
    }
  }
  
  // Eğer URL'de dil yoksa ve kök sayfa ise, doğrudan preferredLanguage/
  if (pathname === '/') {
    const newUrl = new URL(`/${preferredLanguage}/`, request.url);
    const response = NextResponse.redirect(newUrl);
    response.headers.set('X-Redirect-Count', (redirectCount + 1).toString());
    return response;
  }
  
  // Eğer URL'de dil yoksa, kullanıcının tercihine göre yönlendir
  if (pathnameIsMissingLocale) {
    // Oluşturulacak yeni URL
    const newUrl = new URL(`/${preferredLanguage}${pathname}`, request.url);
    const response = NextResponse.redirect(newUrl);
    response.headers.set('X-Redirect-Count', (redirectCount + 1).toString());
    return response;
  }
  
  // Tam olarak /tr veya /en gibi bir URL varsa, onu /tr/ veya /en/ şeklinde yönlendir
  if (languages.some(lang => pathname === `/${lang}`)) {
    const lang = pathname.slice(1);
    const newUrl = new URL(`/${lang}/`, request.url);
    const response = NextResponse.redirect(newUrl);
    response.headers.set('X-Redirect-Count', (redirectCount + 1).toString());
    return response;
  }

  return NextResponse.next();
}

// Sadece kök seviyesinde çalıştır
export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}; 