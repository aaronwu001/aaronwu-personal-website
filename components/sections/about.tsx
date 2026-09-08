"use client"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Backend & Systems Languages",
    skills: ["Go", "Java", "Python", "C++", "JavaScript/TypeScript"]
  },
  {
    title: "Data & Message Infrastructure",
    skills: ["Redis", "Kafka", "RabbitMQ", "PostgreSQL", "Cassandra", "Spark"]
  },
  {
    title: "AI & Search Engine Stack",
    skills: ["Pinecone", "Neo4j", "LangChain", "Hugging Face", "GraphRAG"]
  },
  {
    title: "Cloud, DevOps & Tooling",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Airflow", "Linux", "Bash/Lua Scripting"]
  }
];

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
              I&apos;m a backend engineer focused on distributed systems and AI infrastructure. As an international student, adapting quickly and working within constraints is my baseline.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              A steady diet of system design literature shapes how I work: get the underlying engineering right, and design for what happens when things fail.
            </p>
          </motion.div>

          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-col gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="inline-flex items-center rounded-md bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground border border-border shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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
