"use client";

import Link from "next/link";
import { Button } from "~/components/ui";
import {
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  GlobeIcon,
  ChevronDownIcon,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "~/hooks/useTranslation";

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

      {/* 点击外部关闭下拉菜单 */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}

export default function HomePage() {
  const { t, changeLanguage } = useTranslation();

  const handleLanguageChange = (locale: string) => {
    void changeLanguage(locale);
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
            <Link href="#" className="text-gray-600 hover:text-gray-900">
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

      {/* 主标题区域 */}
      <section className="px-6 py-20 text-center bg-white">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
          <span className="text-blue-600">Submit-ready</span>
          <br />
          not just generated
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
          Get a submission-ready draft that can work with whitelist systems, a
          packaged evidence bundle, and easy-to-use editing — so you can submit
          confidently, not just anxiously.
        </p>
        <Button size="lg" className="px-8 py-4 text-lg">
          Start your submission now
        </Button>

        {/* 预览区域 */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex min-h-[400px] items-center justify-center rounded-lg bg-gray-100 p-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-300 rounded-lg"></div>
              <p className="text-gray-500">产品演示区域</p>
              <p className="mt-2 text-sm text-gray-400">
                这里可以放置产品截图或演示视频
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 特性对比区域 */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            Why &quot;can write&quot; ≠ &quot;ready to submit&quot;
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {/* 左侧 - 问题 */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <XIcon className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Citations fall under checks
                  </h3>
                  <p className="text-gray-600">
                    AI-generated citations reference papers that don&apos;t
                    exist
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XIcon className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Matches the style well
                  </h3>
                  <p className="text-gray-600">
                    Generated text doesn&apos;t match academic writing
                    conventions
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XIcon className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Obvious AI generation
                  </h3>
                  <p className="text-gray-600">
                    Content shows clear signs of AI generation
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XIcon className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Lacks real formatting style
                  </h3>
                  <p className="text-gray-600">
                    Missing proper academic formatting and structure
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <XIcon className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Iterations slow as coal
                  </h3>
                  <p className="text-gray-600">
                    Revisions take too long and lack consistency
                  </p>
                </div>
              </div>
            </div>

            {/* 右侧 - 解决方案 */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckIcon className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Authentic literature citations
                  </h3>
                  <p className="text-gray-600">
                    Real, verifiable citations from academic databases
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Humanized output alignment
                  </h3>
                  <p className="text-gray-600">
                    Content that reads naturally and professionally
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    AI detection circumvention
                  </h3>
                  <p className="text-gray-600">
                    Content designed to pass AI detection tools
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    As-you-need formatting
                  </h3>
                  <p className="text-gray-600">
                    Proper academic formatting applied automatically
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Transparent pricing
                  </h3>
                  <p className="text-gray-600">
                    Clear, upfront pricing with no hidden costs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心功能卡片 */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-4xl font-bold text-center text-gray-900">
            一键开环，从&quot;生成&quot;到&quot;可提&quot;
          </h2>

          <div className="grid gap-8 mt-16 md:grid-cols-4">
            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">真实文献</h3>
              <p className="text-sm text-gray-600">
                基于真实学术数据库的
                <br />
                文献引用
              </p>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">人文风格</h3>
              <p className="text-sm text-gray-600">
                符合学术写作规范的
                <br />
                自然表达
              </p>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">智能检测</h3>
              <p className="text-sm text-gray-600">
                通过主流AI检测工具的
                <br />
                内容优化
              </p>
            </div>

            <div className="p-6 text-center rounded-lg bg-gray-50">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">
                AI Agent 辅助
              </h3>
              <p className="text-sm text-gray-600">
                智能助手协助完成
                <br />
                写作全流程
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast & polished 部分 */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Fast & polished
              </h2>
              <p className="mb-8 text-gray-600">
                Academic writing shouldn&apos;t take weeks. Get a
                submission-ready draft in minutes, not hours. Follow a
                structured workflow, and use AI to speed up every step from
                research to final formatting.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Start from outline or topic
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Get a first draft in under 10 minutes
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Iterate and refine with AI assistance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Export in multiple formats
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded">
                <p className="text-gray-500">产品界面截图</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Better value 部分 */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="p-8 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center h-64 bg-white rounded">
                <p className="text-gray-500">价值对比图表</p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Better value
              </h2>
              <p className="mb-8 text-gray-600">
                Academic writing services are expensive. A good thesis can cost
                $500+ with weeks of back-and-forth revisions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Pay once, use forever - no subscriptions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Unlimited revisions and formatting
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    No waiting for human writers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Full ownership of your work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic-safe by design 部分 */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 text-4xl font-bold text-center text-gray-900">
            Academic-safe by design
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-center text-gray-600">
            Academic integrity requirements vary, but all institutions require
            honesty and compliance with their policies.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Support full compliance for academic schools, universities
                  </h3>
                  <p className="text-sm text-gray-600">
                    Designed to meet institutional requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Transparent about AI assistance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Clear documentation of AI tool usage
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Designed for learning, not cheating
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tools that enhance understanding
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Provides full audit trail for review
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete history of changes and sources
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Encourages original thought
                  </h3>
                  <p className="text-sm text-gray-600">
                    Promotes critical thinking and analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Follows best practices for ethical AI use
                  </h3>
                  <p className="text-sm text-gray-600">
                    Responsible AI implementation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 三步流程 */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-bold text-gray-900">
            三步走，提交更轻松
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                快速生成草稿
              </h3>
              <p className="text-gray-600">输入主题或大纲，快速生成</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                智能优化内容
              </h3>
              <p className="text-gray-600">AI 助手协助优化和完善内容</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-blue-600 rounded-full">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agent辅助导出
              </h3>
              <p className="text-gray-600">多格式导出，准备提交</p>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              开始使用 <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 用户反馈区域 */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            用户反馈
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">张同学</h4>
                  <p className="text-sm text-gray-600">北京大学</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;使用CodePass完成了我的毕业论文，真的很棒！不仅节省了大量时间，而且质量很高。&quot;
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 mr-4 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">李教授</h4>
                  <p className="text-sm text-gray-600">清华大学</p>
                </div>
              </div>
              <p className="text-gray-700">
                &quot;作为导师，我很欣赏这个工具对学术诚信的重视，帮助学生更好地完成学术写作。&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            常见问题
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                CodePass是否符合学术诚信要求？
              </h3>
              <p className="text-gray-700">
                是的，我们严格遵循学术诚信原则，提供透明的AI辅助工具，帮助学生提高写作质量而不是代替思考。
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                生成的内容能通过AI检测吗？
              </h3>
              <p className="text-gray-700">
                我们的系统经过特殊优化，生成的内容具有自然的人文风格，能够通过主流的AI检测工具。
              </p>
            </div>

            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                支持哪些学科领域？
              </h3>
              <p className="text-gray-700">
                目前支持文科、理科、工科等多个学科领域，包括但不限于计算机科学、经济学、文学等。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 功能对比表 */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            功能对比
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-left text-gray-900">
                    功能
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-center text-gray-900">
                    传统AI工具
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold text-center text-gray-900">
                    CodePass
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    真实文献引用
                  </td>
                  <td className="px-6 py-4 text-center">
                    <XIcon className="w-5 h-5 mx-auto text-red-500" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    AI检测规避
                  </td>
                  <td className="px-6 py-4 text-center">
                    <XIcon className="w-5 h-5 mx-auto text-red-500" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    学术格式化
                  </td>
                  <td className="px-6 py-4 text-center">
                    <XIcon className="w-5 h-5 mx-auto text-red-500" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">人工审核</td>
                  <td className="px-6 py-4 text-center">
                    <XIcon className="w-5 h-5 mx-auto text-red-500" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckIcon className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="px-6 py-20 text-white bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">开始你的学术写作之旅</h2>
          <p className="mb-8 text-xl text-blue-100">
            加入数千名学生和研究者，体验更高效的学术写作方式
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              免费试用
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg text-white border-white hover:bg-white hover:text-blue-600"
            >
              查看定价
            </Button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="px-6 py-12 text-white bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <span className="text-xl font-bold">CodePass</span>
              </div>
              <p className="text-gray-400">让学术写作更简单、更高效、更可靠</p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">产品</h4>
              <div className="space-y-2">
                <Link
                  href="/unified-radix"
                  className="block text-gray-400 hover:text-white"
                >
                  Radix UI 演示
                </Link>
                <Link
                  href="/radix-demo"
                  className="block text-gray-400 hover:text-white"
                >
                  组件库
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">资源</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white">
                  文档
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white">
                  博客
                </Link>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">联系我们</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-400 hover:text-white">
                  支持
                </Link>
                <Link href="#" className="block text-gray-400 hover:text-white">
                  反馈
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 CodePass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
