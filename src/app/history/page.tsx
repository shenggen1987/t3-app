"use client";

import Link from "next/link";
import { Button } from "~/components/ui";
import { useState } from "react";
import { useTranslation } from "~/components/LanguageProvider";
import {
  GlobeIcon,
  ChevronDownIcon,
  DownloadIcon,
  FileTextIcon,
  MessageCircleIcon,
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

function HistoryItem({
  title,
  type,
  citation,
  language,
  words,
  created,
  id,
  status,
  onOpenDraft,
  onDownloadBundle,
  onContinueWriting,
}: {
  title: string;
  type: string;
  citation: string;
  language: string;
  words: string;
  created: string;
  id: string;
  status: string;
  onOpenDraft: () => void;
  onDownloadBundle: () => void;
  onContinueWriting: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="p-6 mb-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2 space-x-2">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <span
              className={`rounded px-2 py-1 text-xs ${
                status === "Step-by-Step"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {status}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-600">
            <span className="px-2 py-1 bg-gray-100 rounded">{type}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{citation}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{language}</span>
            <span className="px-2 py-1 bg-gray-100 rounded">{words}</span>
          </div>

          <div className="mb-4 text-sm text-gray-500">
            <div>{created}</div>
            <div>{id}</div>
          </div>
        </div>

        <div className="flex items-center ml-4 space-x-2">
          {status === "Step-by-Step" ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={onContinueWriting}
              className="text-gray-600 hover:text-gray-800"
            >
              {t("history.actions.continueWriting")}
            </Button>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenDraft}
                className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
              >
                <FileTextIcon className="w-4 h-4" />
                <span>{t("history.actions.openDraft")}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onDownloadBundle}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>{t("history.actions.downloadBundle")}</span>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const { t, changeLanguage } = useTranslation();

  const handleLanguageChange = (locale: string) => {
    void changeLanguage(locale);
  };

  const historyItems = [
    {
      key: "pigFarming",
      title: t("history.items.pigFarming.title"),
      type: t("history.items.pigFarming.type"),
      citation: t("history.items.pigFarming.citation"),
      language: t("history.items.pigFarming.language"),
      words: t("history.items.pigFarming.words"),
      created: t("history.items.pigFarming.created"),
      id: t("history.items.pigFarming.id"),
      status: t("history.items.pigFarming.status"),
    },
    {
      key: "coalMaterials",
      title: t("history.items.coalMaterials.title"),
      type: t("history.items.coalMaterials.type"),
      citation: t("history.items.coalMaterials.citation"),
      language: t("history.items.coalMaterials.language"),
      words: t("history.items.coalMaterials.words"),
      created: t("history.items.coalMaterials.created"),
      id: t("history.items.coalMaterials.id"),
      status: t("history.items.coalMaterials.status"),
    },
    {
      key: "digitalLiteracy",
      title: t("history.items.digitalLiteracy.title"),
      type: t("history.items.digitalLiteracy.type"),
      citation: t("history.items.digitalLiteracy.citation"),
      language: t("history.items.digitalLiteracy.language"),
      words: t("history.items.digitalLiteracy.words"),
      created: t("history.items.digitalLiteracy.created"),
      id: t("history.items.digitalLiteracy.id"),
      status: t("history.items.digitalLiteracy.status"),
    },
  ];

  const handleOpenDraft = () => {
    console.log("Opening draft...");
  };

  const handleDownloadBundle = () => {
    console.log("Downloading bundle...");
  };

  const handleContinueWriting = () => {
    console.log("Continue writing...");
  };

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
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              {t("nav.blog")}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              {t("nav.about")}
            </Link>
            <Link href="/history" className="font-medium text-blue-600">
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
      <div className="max-w-4xl px-6 py-8 mx-auto">
        {/* 标题 */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            {t("history.title")}
          </h1>
        </div>

        {/* 历史记录列表 */}
        <div className="space-y-4">
          {historyItems.map((item) => (
            <HistoryItem
              key={item.key}
              title={item.title}
              type={item.type}
              citation={item.citation}
              language={item.language}
              words={item.words}
              created={item.created}
              id={item.id}
              status={item.status}
              onOpenDraft={handleOpenDraft}
              onDownloadBundle={handleDownloadBundle}
              onContinueWriting={handleContinueWriting}
            />
          ))}
        </div>

        {/* 如果没有历史记录 */}
        {historyItems.length === 0 && (
          <div className="py-12 text-center">
            <div className="text-lg text-gray-500">
              {t("history.noHistory")}
            </div>
          </div>
        )}
      </div>

      {/* 客服按钮 */}
      <div className="fixed right-6 bottom-6">
        <Button
          size="lg"
          className="w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircleIcon className="w-5 h-5" />
        </Button>
        <div className="absolute right-0 text-sm text-gray-600 -top-8 whitespace-nowrap">
          {t("history.service")}
        </div>
      </div>
    </div>
  );
}
