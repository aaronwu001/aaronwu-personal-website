"use client"

import { motion } from "framer-motion"
import experienceData from "@/data/experience.json"

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">Real-world experience architecting resilient backend systems and enterprise AI infrastructure.</p>
        </motion.div>

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0 md:pl-0">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[43px] md:-left-[59px] flex items-center justify-center w-6 h-6 rounded-full bg-background border-4 border-primary transition-colors group-hover:bg-primary">
              </span>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="text-primary font-medium text-lg">{exp.company}</div>
                </div>
                <div className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full w-fit border border-border">
                  {exp.start} — {exp.end}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors hover:bg-primary/20 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
