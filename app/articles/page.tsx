import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import articlesData from "@/data/articles.json"

export const metadata = {
  title: "All Articles - Aaron Wu",
  description: "A complete collection of writings on backend engineering, system design, and career journeys.",
}

export default function AllArticlesPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-12">
          <Link href="/#articles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Articles</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A complete collection of my writings on engineering, career journeys, and observations on the tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articlesData.map((article) => {
            const isExternal = article.isExternal;
            const href = isExternal ? article.url : `/articles/${article.id}`;
            const title = typeof article.title === 'string' ? article.title : article.title.en;
            const excerpt = typeof article.excerpt === 'string' ? article.excerpt : article.excerpt.en;

            const CardContent = (
              <div className="group h-full flex flex-col bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
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
              </div>
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
    </div>
  )
}
