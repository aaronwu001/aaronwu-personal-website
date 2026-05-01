"use client"
import { motion } from "framer-motion"
import articlesData from "@/data/articles.json"
import { ArrowRight, ExternalLink } from "lucide-react"

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
            <p className="text-muted-foreground text-lg">
              Writing about backend architecture, optimizations, and system design.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
            View All Articles <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md border border-border">
                  {article.date}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {article.tags.map(tag => (
                  <span key={tag} className="text-xs text-primary font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
