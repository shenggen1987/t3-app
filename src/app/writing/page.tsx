"use client";

import Link from "next/link";
import { Button } from "~/components/ui";
import { useState } from "react";
import { useTranslation } from "~/components/LanguageProvider";
import {
  GlobeIcon,
  ChevronDownIcon,
  CheckIcon,
  FileTextIcon,
  BookOpenIcon,
  ClipboardIcon,
  PresentationIcon,
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

export default function WritingPage() {
  const { t, changeLanguage } = useTranslation();
  const [selectedPaperType, setSelectedPaperType] = useState("essay");
  const [academicLevel, setAcademicLevel] = useState("college");
  const [wordCount, setWordCount] = useState(2000);
  const [language, setLanguage] = useState("englishUS");
  const [writingMode, setWritingMode] = useState("oneClick");
  const [citationStyle, setCitationStyle] = useState("APA");
  const [includeCharts, setIncludeCharts] = useState(false);
  const [includeFormulas, setIncludeFormulas] = useState(false);
  const [topic, setTopic] = useState("");
  const [requirements, setRequirements] = useState("");
  const [personalVoice, setPersonalVoice] = useState("");

  const handleLanguageChange = (locale: string) => {
    void changeLanguage(locale);
  };

  const paperTypes = [
    { id: "essay", icon: FileTextIcon, label: t("writing.paperTypes.essay") },
    {
      id: "academicEssay",
      icon: BookOpenIcon,
      label: t("writing.paperTypes.academicEssay"),
    },
    {
      id: "researchPaper",
      icon: ClipboardIcon,
      label: t("writing.paperTypes.researchPaper"),
    },
    {
      id: "caseStudy",
      icon: FileTextIcon,
      label: t("writing.paperTypes.caseStudy"),
    },
    {
      id: "literatureReview",
      icon: BookOpenIcon,
      label: t("writing.paperTypes.literatureReview"),
    },
    {
      id: "analyticalEssay",
      icon: FileTextIcon,
      label: t("writing.paperTypes.analyticalEssay"),
    },
    {
      id: "compareContrast",
      icon: ClipboardIcon,
      label: t("writing.paperTypes.compareContrast"),
    },
    {
      id: "criticalEssay",
      icon: FileTextIcon,
      label: t("writing.paperTypes.criticalEssay"),
    },
    {
      id: "argumentativeEssay",
      icon: FileTextIcon,
      label: t("writing.paperTypes.argumentativeEssay"),
    },
    {
      id: "assignment",
      icon: ClipboardIcon,
      label: t("writing.paperTypes.assignment"),
    },
    {
      id: "presentationSlides",
      icon: PresentationIcon,
      label: t("writing.paperTypes.presentationSlides"),
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
            <Link href="/writing" className="font-medium text-blue-600">
              {t("nav.writing")}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              {t("nav.blog")}
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
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
      <div className="max-w-4xl px-6 py-8 mx-auto">
        {/* 标题和特性 */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-blue-600">
            {t("writing.title")}
          </h1>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>{t("writing.features.proQuality")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>{t("writing.features.verifiedSources")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>{t("writing.features.chartsEquations")}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span>{t("writing.features.agentEdits")}</span>
            </div>
          </div>
        </div>

        {/* 论文类型选择 */}
        <div className="p-6 mb-6 bg-white rounded-lg">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {paperTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedPaperType(type.id)}
                  className={`flex flex-col items-center space-y-2 rounded-lg border p-3 text-sm transition-colors ${
                    selectedPaperType === type.id
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="leading-tight text-center">
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 表单 */}
        <div className="p-6 space-y-6 bg-white rounded-lg">
          {/* Topic */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span> {t("writing.form.topic")}
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={t("writing.form.topicPlaceholder")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Academic Level */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span>{" "}
              {t("writing.form.academicLevel")}
            </label>
            <div className="flex space-x-2">
              {["college", "bachelors", "masters", "doctorate"].map((level) => (
                <button
                  key={level}
                  onClick={() => setAcademicLevel(level)}
                  className={`rounded-md px-4 py-2 text-sm transition-colors ${
                    academicLevel === level
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t(`writing.form.levels.${level}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Word Count */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span>{" "}
              {t("writing.form.wordCount")}
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="250"
                max="5000"
                step="250"
                value={wordCount}
                onChange={(e) => setWordCount(Number(e.target.value))}
                className="flex-1"
              />
              <span className="min-w-[60px] text-sm font-medium text-gray-700">
                {wordCount}
              </span>
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span>{" "}
              {t("writing.form.language")}
            </label>
            <div className="flex space-x-2">
              {["englishUS", "englishUK", "spanish", "chinese"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`rounded-md px-4 py-2 text-sm transition-colors ${
                    language === lang
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t(`writing.form.languages.${lang}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {t("writing.form.requirements")}
            </label>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder={t("writing.form.requirementsPlaceholder")}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Writing Mode */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              <span className="text-red-500">*</span>{" "}
              {t("writing.form.writingMode")}
            </label>
            <div className="grid gap-4 md:grid-cols-2">
              <button
                onClick={() => setWritingMode("oneClick")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  writingMode === "oneClick"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="mb-1 font-medium text-blue-600">
                  {t("writing.form.oneClickWriting")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("writing.form.oneClickDesc")}
                </div>
              </button>
              <button
                onClick={() => setWritingMode("stepByStep")}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  writingMode === "stepByStep"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="mb-1 font-medium">
                  {t("writing.form.stepByStep")}
                </div>
                <div className="text-sm text-gray-600">
                  {t("writing.form.stepByStepDesc")}
                </div>
                <div className="mt-2">
                  <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded">
                    {t("writing.form.support")}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Citation Style */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {t("writing.form.citationStyle")}
            </label>
            <select
              value={citationStyle}
              onChange={(e) => setCitationStyle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="APA">APA</option>
              <option value="MLA">MLA</option>
              <option value="Chicago">Chicago</option>
              <option value="Harvard">Harvard</option>
            </select>
          </div>

          {/* Figures & Equations */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {t("writing.form.figuresEquations")}
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeCharts}
                  onChange={(e) => setIncludeCharts(e.target.checked)}
                  className="mr-2"
                />
                {t("writing.form.includeCharts")}
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeFormulas}
                  onChange={(e) => setIncludeFormulas(e.target.checked)}
                  className="mr-2"
                />
                {t("writing.form.includeFormulas")}
              </label>
            </div>
          </div>

          {/* Personal Voice */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              {t("writing.form.personalVoice")}
            </label>
            <textarea
              value={personalVoice}
              onChange={(e) => setPersonalVoice(e.target.value)}
              placeholder={t("writing.form.personalVoicePlaceholder")}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-6 space-x-4">
            <Button
              size="lg"
              className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700"
            >
              {t("writing.form.start")}
            </Button>
          </div>

          {/* Bottom Actions */}
          <div className="flex justify-center pt-4 space-x-4 text-sm">
            <button className="text-gray-600 hover:text-gray-800">
              {t("writing.form.restart")}
            </button>
            <button className="text-blue-600 hover:text-blue-800">
              {t("writing.form.continue")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
