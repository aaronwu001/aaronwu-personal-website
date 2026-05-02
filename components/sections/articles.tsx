"use client"
import { motion } from "framer-motion"
import articlesData from "@/data/articles.json"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Articles() {
  const featuredArticles = articlesData.slice(0, 3)

  return (
    <section id="articles" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Writing about backend architecture, system design, career journeys, and observations on the tech industry.
            </p>
          </div>
          <Link href="/articles" className="inline-flex items-center gap-2 text-primary font-medium hover:underline whitespace-nowrap">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => {
            const isExternal = article.isExternal;
            const href = isExternal ? (article as any).url : `/articles/${article.id}`;
            const title = typeof article.title === 'string' ? article.title : article.title.en;
            const excerpt = typeof article.excerpt === 'string' ? article.excerpt : article.excerpt.en;

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full flex flex-col bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-border">
                    {article.date}
                  </span>
                  {isExternal && <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-xs text-primary font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );

            return isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={article.id}
                className="block h-full"
              >
                {CardContent}
              </a>
            ) : (
              <Link href={href!} key={article.id} className="block h-full">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  )
}
