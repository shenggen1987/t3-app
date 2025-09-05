"use client";

import Link from "next/link";
import { Button } from "~/components/ui";
import { useState } from "react";
import { useTranslation } from "~/hooks/useTranslation";
import {
  GlobeIcon,
  ChevronDownIcon,
  SearchIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
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

function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  author,
  onClick,
}: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  onClick: () => void;
}) {
  return (
    <div className="p-6 transition-shadow bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md" onClick={onClick}>
      <div className="mb-4">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
          {category}
        </span>
        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors hover:text-blue-600">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-600">{excerpt}</p>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <UserIcon className="w-4 h-4" />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const { t, changeLanguage } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleLanguageChange = (locale: string) => {
    void changeLanguage(locale);
  };

  const categories = [
    { key: "all", label: t("blog.categories.all") },
    { key: "aiWriting", label: t("blog.categories.aiWriting") },
    { key: "academicTips", label: t("blog.categories.academicTips") },
    { key: "productUpdates", label: t("blog.categories.productUpdates") },
    { key: "tutorials", label: t("blog.categories.tutorials") },
  ];

  const blogPosts = [
    {
      key: "aiRevolution",
      title: t("blog.posts.aiRevolution.title"),
      excerpt: t("blog.posts.aiRevolution.excerpt"),
      date: t("blog.posts.aiRevolution.date"),
      readTime: t("blog.posts.aiRevolution.readTime"),
      category: t("blog.posts.aiRevolution.category"),
      author: t("blog.posts.aiRevolution.author"),
      categoryKey: "aiWriting",
    },
    {
      key: "citationGuide",
      title: t("blog.posts.citationGuide.title"),
      excerpt: t("blog.posts.citationGuide.excerpt"),
      date: t("blog.posts.citationGuide.date"),
      readTime: t("blog.posts.citationGuide.readTime"),
      category: t("blog.posts.citationGuide.category"),
      author: t("blog.posts.citationGuide.author"),
      categoryKey: "academicTips",
    },
    {
      key: "newFeatures",
      title: t("blog.posts.newFeatures.title"),
      excerpt: t("blog.posts.newFeatures.excerpt"),
      date: t("blog.posts.newFeatures.date"),
      readTime: t("blog.posts.newFeatures.readTime"),
      category: t("blog.posts.newFeatures.category"),
      author: t("blog.posts.newFeatures.author"),
      categoryKey: "productUpdates",
    },
    {
      key: "stepByStep",
      title: t("blog.posts.stepByStep.title"),
      excerpt: t("blog.posts.stepByStep.excerpt"),
      date: t("blog.posts.stepByStep.date"),
      readTime: t("blog.posts.stepByStep.readTime"),
      category: t("blog.posts.stepByStep.category"),
      author: t("blog.posts.stepByStep.author"),
      categoryKey: "tutorials",
    },
    {
      key: "aiDetection",
      title: t("blog.posts.aiDetection.title"),
      excerpt: t("blog.posts.aiDetection.excerpt"),
      date: t("blog.posts.aiDetection.date"),
      readTime: t("blog.posts.aiDetection.readTime"),
      category: t("blog.posts.aiDetection.category"),
      author: t("blog.posts.aiDetection.author"),
      categoryKey: "aiWriting",
    },
    {
      key: "researchTips",
      title: t("blog.posts.researchTips.title"),
      excerpt: t("blog.posts.researchTips.excerpt"),
      date: t("blog.posts.researchTips.date"),
      readTime: t("blog.posts.researchTips.readTime"),
      category: t("blog.posts.researchTips.category"),
      author: t("blog.posts.researchTips.author"),
      categoryKey: "academicTips",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "all" || post.categoryKey === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (postKey: string) => {
    console.log(`Navigate to blog post: ${postKey}`);
    // 这里可以导航到具体的博客文章页面
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
            <Link href="/blog" className="font-medium text-blue-600">
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
      <div className="max-w-6xl px-6 py-12 mx-auto">
        {/* 页面标题 */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {t("blog.title")}
          </h1>
          <p className="text-xl text-gray-600">{t("blog.subtitle")}</p>
        </div>

        {/* 搜索和筛选 */}
        <div className="mb-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            {/* 搜索框 */}
            <div className="relative max-w-md">
              <SearchIcon className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 分类筛选 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.key
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 博客文章列表 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.key}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              author={post.author}
              onClick={() => handlePostClick(post.key)}
            />
          ))}
        </div>

        {/* 没有结果时的提示 */}
        {filteredPosts.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-lg text-gray-500">
              {t("blog.noResults")}
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
            >
              清除筛选条件
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}