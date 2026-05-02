import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import articlesData from '@/data/articles.json'
import { ArticleContent } from '@/components/sections/ArticleContent'

interface ArticlePageProps {
  params: Promise<{
    id: string
  }>
}

// Generate static params for all internal articles
export function generateStaticParams() {
  return articlesData
    .filter(article => !article.isExternal)
    .map(article => ({
      id: article.id,
    }))
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = articlesData.find(a => a.id === id)
  
  if (!article || article.isExternal || !article.contentPaths) {
    notFound()
  }

  const enPath = path.join(process.cwd(), article.contentPaths.en)
  const zhPath = path.join(process.cwd(), article.contentPaths.zh)

  let enMarkdown = ''
  let zhMarkdown = ''

  try {
    enMarkdown = fs.readFileSync(enPath, 'utf8')
    zhMarkdown = fs.readFileSync(zhPath, 'utf8')
  } catch (e) {
    console.error("Error reading markdown files", e)
    notFound()
  }

  return <ArticleContent enMarkdown={enMarkdown} zhMarkdown={zhMarkdown} article={article as any} />
}
