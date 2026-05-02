"use client"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

const books = [
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    takeaway: "The \"holy grail\" of distributed systems. It taught me how to reason about reliability, scalability, and maintainability in complex data-driven architectures."
  },
  {
    title: "System Design Interview: An Insider’s Guide",
    author: "Alex Xu",
    takeaway: "A masterclass in breaking down massive, ambiguous problems into scalable, modular components. It shaped my framework for communicating complex technical decisions."
  },
  {
    title: "Getting Things Done (GTD)",
    author: "David Allen",
    takeaway: "The operating system for my life. It taught me how to offload cognitive load into a trusted system, allowing my brain to focus on creative problem-solving rather than remembering tasks."
  },
  {
    title: "Make Time",
    author: "Jake Knapp & John Zeratsky",
    takeaway: "The practical guide to daily focus. It taught me how to intentionally design my day around a single \"Highlight\" and protect my energy from the thundering herd of distractions."
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    takeaway: "A profound exploration of behavior and ego. It taught me that technical problems are often human problems, and that long-term success comes from managing one's own psychology."
  },
  {
    title: "Owning Your Own Shadow",
    author: "Robert A. Johnson",
    takeaway: "A deep dive into Jungian psychology. It taught me the importance of radical self-honesty and integrating all aspects of the self to become a more grounded and effective leader."
  }
];

export function Books() {
  return (
    <section id="books" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">What I'm Reading</h2>
          </div>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A curated list of books that have fundamentally shaped my approach to systems architecture, peak productivity, and the psychology of human behavior.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group border-l-2 border-muted hover:border-primary/50 pl-4 transition-colors"
            >
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1 leading-snug">
                {book.title} <span className="text-sm font-normal text-muted-foreground whitespace-nowrap">— {book.author}</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {book.takeaway}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
