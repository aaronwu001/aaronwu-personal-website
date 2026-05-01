"use client"
import { motion } from "framer-motion"
import siteConfig from "@/data/site.json"

const skills = [
  { name: "Go", level: "Advanced", color: "text-cyan-500", bgColor: "bg-cyan-500/10" },
  { name: "Java & Spring", level: "Advanced", color: "text-red-500", bgColor: "bg-red-500/10" },
  { name: "Python", level: "Advanced", color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
  { name: "TypeScript", level: "Intermediate", color: "text-blue-500", bgColor: "bg-blue-500/10" },
  { name: "Redis", level: "Advanced", color: "text-red-600", bgColor: "bg-red-600/10" },
  { name: "RabbitMQ", level: "Intermediate", color: "text-orange-500", bgColor: "bg-orange-500/10" },
  { name: "AWS", level: "Intermediate", color: "text-yellow-600", bgColor: "bg-yellow-600/10" },
  { name: "PostgreSQL", level: "Intermediate", color: "text-blue-600", bgColor: "bg-blue-600/10" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.subHeadline}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I specialize in designing and implementing scalable backend architectures, 
              optimizing data pipelines, and building systems that can handle high-throughput 
              workloads reliably.
            </p>
          </motion.div>

          <div className="flex-1 w-full">
            <h3 className="text-xl font-bold mb-6">Core Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative flex flex-col items-center justify-center p-4 bg-muted/30 rounded-xl border border-border/50 transition-colors hover:border-primary/30 hover:bg-muted/50 cursor-default"
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-3 text-lg font-bold ${skill.color} ${skill.bgColor}`}>
                    {skill.name.charAt(0)}
                  </div>
                  <div className="font-medium text-sm text-center">{skill.name}</div>
                  
                  {/* Hover Tooltip */}
                  <div className="absolute -top-10 scale-0 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 bg-primary text-primary-foreground text-xs py-1.5 px-3 rounded-md pointer-events-none whitespace-nowrap shadow-xl z-10">
                    {skill.level}
                    {/* Tooltip arrow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
