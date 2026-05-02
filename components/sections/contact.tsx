"use client"
import { motion } from "framer-motion"
import siteConfig from "@/data/site.json"
import { Mail, Rss } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/icons"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  rss: Rss,
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-muted/30 border border-border rounded-3xl p-10 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open for Summer 2026 Internships & 2027 New Grad roles.
            </div>
            <a href="mailto:aaronwu.official@gmail.com" className="text-xl md:text-2xl font-bold hover:text-primary transition-colors">
              aaronwu.official@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {siteConfig.socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              if (!Icon) return null
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary hover:shadow-md transition-all"
                  aria-label={link.platform}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
