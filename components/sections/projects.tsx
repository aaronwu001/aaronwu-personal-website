"use client"
import * as React from "react"
import { motion } from "framer-motion"
import _projectsData from "@/data/projects.json"
import { type Project } from "@/lib/types"
import { ProjectModal } from "@/components/ui/project-modal"
import { ExternalLink, Play, FileText } from "lucide-react"
import { Github } from "@/components/ui/icons"

const projectsData = _projectsData as Project[]

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null)
  const [filter, setFilter] = React.useState<string>("All")

  // Extract unique tags
  const allTags = React.useMemo(() => {
    const tags = new Set<string>()
    projectsData.forEach(p => p.tags.forEach(t => tags.add(t)))
    return ["All", ...Array.from(tags)]
  }, [])

  const filteredProjects = projectsData.filter(p => filter === "All" || p.tags.includes(filter))

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work focusing on distributed systems and backend infrastructure.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all"
              onClick={() => setSelectedProject(project as Project)}
            >
              {/* Thumbnail Placeholder */}
              <div className="h-48 bg-muted w-full relative overflow-hidden flex items-center justify-center border-b border-border">
                {/* Fallback pattern if image is broken or missing */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="z-10 font-mono text-xl font-bold opacity-30 group-hover:scale-110 transition-transform duration-500">
                  {project.title}
                </div>
                {/* Icons overlay indicating resources available */}
                <div className="absolute bottom-3 right-3 flex gap-2 z-20">
                   {project.resources.github && <div className="p-1.5 bg-background/80 backdrop-blur-sm rounded-md"><Github className="w-4 h-4" /></div>}
                   {project.resources.demo && <div className="p-1.5 bg-background/80 backdrop-blur-sm rounded-md"><ExternalLink className="w-4 h-4" /></div>}
                   {project.resources.videos && project.resources.videos.length > 0 && <div className="p-1.5 bg-background/80 backdrop-blur-sm rounded-md"><Play className="w-4 h-4" /></div>}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{project.tagline}</p>
                </div>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
