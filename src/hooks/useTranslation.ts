import { useState, useEffect } from 'react';

type TranslationKey = string;
type TranslationValue = string | Record<string, any>;
type Translations = Record<string, TranslationValue>;

const translations: Record<string, Translations> = {
  zh: {},
  en: {}
};

// 加载翻译文件
const loadTranslations = async (locale: string): Promise<Translations> => {
  try {
    const response = await fetch(`/locales/${locale}/common.json`);
    const data = await response.json();
    translations[locale] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {};
  }
};

export const useTranslation = () => {
  const [locale, setLocale] = useState<string>('zh');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initTranslations = async () => {
      setIsLoading(true);
      await loadTranslations(locale);
      setIsLoading(false);
    };
    
    initTranslations();
  }, [locale]);

  const t = (key: TranslationKey): string => {
    if (isLoading) return key;
    
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // 返回原始 key 如果找不到翻译
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = async (newLocale: string) => {
    if (newLocale !== locale) {
      setIsLoading(true);
      await loadTranslations(newLocale);
      setLocale(newLocale);
      setIsLoading(false);
    }
  };

  return {
    t,
    locale,
    changeLanguage,
    isLoading
  };
};