import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Books } from "@/components/sections/books"
import { Articles } from "@/components/sections/articles"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Books />
      <Contact />
    </div>
  )
}
