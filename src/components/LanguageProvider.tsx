"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import Cookies from 'js-cookie';

type TranslationKey = string;
type TranslationValue = string | Record<string, any>;
type Translations = Record<string, TranslationValue>;

interface LanguageContextType {
  locale: string;
  t: (key: TranslationKey) => string;
  changeLanguage: (newLocale: string) => Promise<void>;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Translations> = {
  zh: {},
  en: {}
};

const LOCALE_COOKIE_NAME = 'locale';
const DEFAULT_LOCALE = 'zh';

// 获取初始语言设置
const getInitialLocale = (): string => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  
  // 从cookies读取语言设置
  const savedLocale = Cookies.get(LOCALE_COOKIE_NAME);
  if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
    return savedLocale;
  }
  
  // 如果没有保存的语言设置，尝试从浏览器语言检测
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) {
    return 'zh';
  } else if (browserLang.startsWith('en')) {
    return 'en';
  }
  
  return DEFAULT_LOCALE;
};

// 加载翻译文件
const loadTranslations = async (locale: string): Promise<Translations> => {
  try {
    const response = await fetch(`/locales/${locale}/common.json`);
    const data = await response.json() as Translations;
    translations[locale] = data;
    return data;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {};
  }
};

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale?: string;
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocale] = useState<string>(initialLocale || getInitialLocale);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initTranslations = async () => {
      setIsLoading(true);
      await loadTranslations(locale);
      setIsLoading(false);
    };
    
    void initTranslations();
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
      
      // 保存语言设置到cookies
      Cookies.set(LOCALE_COOKIE_NAME, newLocale, { 
        expires: 365, // 保存一年
        sameSite: 'lax' 
      });
      
      setIsLoading(false);
    }
  };

  const value: LanguageContextType = {
    locale,
    t,
    changeLanguage,
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};