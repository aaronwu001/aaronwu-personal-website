"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface ArticleContentProps {
  enMarkdown: string;
  zhMarkdown: string;
  article: {
    title: { en: string; zh: string };
    date: string;
    tags: string[];
  }
}

export function ArticleContent({ enMarkdown, zhMarkdown, article }: ArticleContentProps) {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const content = lang === 'en' ? enMarkdown : zhMarkdown;
  const title = article.title[lang];

  return (
    <article className="min-h-screen bg-background pb-24 pt-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="relative flex items-center p-1 bg-muted rounded-full border border-border">
            <button
              onClick={() => setLang('en')}
              className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors ${lang === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('zh')}
              className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors ${lang === 'zh' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              中文
            </button>
            {/* Animated Background Pill */}
            <motion.div
              layoutId="active-lang-pill"
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-background rounded-full shadow-sm"
              initial={false}
              animate={{
                left: lang === 'en' ? '4px' : 'calc(50% + 2px)',
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {article.date}
            </span>
            <div className="flex gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="text-sm text-primary font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>
        </header>

        {/* Content with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MarkdownRenderer content={content} />
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  )
}
