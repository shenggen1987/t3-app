import { cookies } from 'next/headers';

const LOCALE_COOKIE_NAME = 'locale';
const DEFAULT_LOCALE = 'zh';

export function getLocaleFromCookies(): string {
  const cookieStore = cookies();
  const locale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  
  if (locale && (locale === 'zh' || locale === 'en')) {
    return locale;
  }
  
  return DEFAULT_LOCALE;
}