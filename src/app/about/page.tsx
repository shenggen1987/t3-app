"use client";

import Link from "next/link";
import { Button } from "~/components/ui";
import { useState } from "react";
import { useTranslation } from "~/hooks/useTranslation";
import {
  GlobeIcon,
  ChevronDownIcon,
  BrainIcon,
  PenToolIcon,
  SearchIcon,
  NewspaperIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "lucide-react";

const languages = [
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

function LanguageSwitcher({
  onLanguageChange,
}: {
  onLanguageChange: (locale: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useTranslation();

  const currentLanguage =
    languages.find((lang) => lang.code === locale) ?? languages[0]!;

  const handleLanguageChange = (newLocale: string) => {
    onLanguageChange(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <GlobeIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="sm:hidden">{currentLanguage.flag}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 min-w-[120px] rounded-md border border-gray-200 bg-white shadow-lg">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex w-full items-center space-x-2 px-4 py-2 text-left hover:bg-gray-50 ${
                language.code === locale
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg hover:shadow-md">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="leading-relaxed text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { t, changeLanguage } = useTranslation();

  const handleLanguageChange = (locale: string) => {
    void changeLanguage(locale);
  };

  const features = [
    {
      icon: BrainIcon,
      title: t("about.features.aiGuide.title"),
      description: t("about.features.aiGuide.description"),
    },
    {
      icon: PenToolIcon,
      title: t("about.features.smartWriting.title"),
      description: t("about.features.smartWriting.description"),
    },
    {
      icon: SearchIcon,
      title: t("about.features.verification.title"),
      description: t("about.features.verification.description"),
    },
    {
      icon: NewspaperIcon,
      title: t("about.features.dataGuide.title"),
      description: t("about.features.dataGuide.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <span className="text-xl font-bold">EssayPass</span>
          </div>
          <div className="hidden space-x-6 md:flex">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              {t("nav.home")}
            </Link>
            <Link href="/writing" className="text-gray-600 hover:text-gray-900">
              {t("nav.writing")}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              {t("nav.blog")}
            </Link>
            <Link href="/about" className="font-medium text-blue-600">
              {t("nav.about")}
            </Link>
            <Link href="/history" className="text-gray-600 hover:text-gray-900">
              {t("nav.history")}
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher onLanguageChange={handleLanguageChange} />
          <Button variant="ghost">{t("nav.login")}</Button>
          <Button>{t("nav.register")}</Button>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* 页面标题 */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
              <span className="text-sm text-white">ℹ️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {t("about.title")}
            </h1>
          </div>
          <p className="text-lg text-gray-600">{t("about.subtitle")}</p>
        </div>

        {/* 产品特色 */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            {t("about.features.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* 我们的团队 */}
        <section className="mb-16">
          <div className="p-8 bg-white border border-gray-200 rounded-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {t("about.team.title")}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {t("about.team.description")}
            </p>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="mb-16">
          <div className="p-8 bg-white border border-gray-200 rounded-lg">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              {t("about.contact.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-1">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <MailIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {t("about.contact.businessCooperation")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <PhoneIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {t("about.contact.customerService")}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  <MapPinIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {t("about.contact.officeAddress")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 法律信息 */}
        <section className="text-center">
          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="space-y-2 text-sm text-gray-600">
              <p>{t("about.legal.icp")}</p>
              <p>{t("about.legal.publicSecurity")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
