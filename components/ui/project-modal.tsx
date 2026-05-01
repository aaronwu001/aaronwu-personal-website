"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Play, FileText, Code2, Server } from "lucide-react"
import { Github } from "./icons"
import { type Project } from "@/lib/types"

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = React.useState("overview")

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setActiveTab("overview") // Reset tab on open
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen || !project) return null

  // Determine available tabs
  const tabs = [{ id: "overview", label: "Overview", icon: Code2 }]
  
  if (project.resources.architecture) {
    tabs.push({ id: "architecture", label: "Architecture", icon: Server })
  }
  if (project.resources.screenshots && project.resources.screenshots.length > 0) {
    tabs.push({ id: "screenshots", label: "Screenshots", icon: ExternalLink })
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
          onClick={onClose} 
        />
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-border shadow-2xl rounded-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-border bg-muted/30">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
              <p className="text-muted-foreground mt-1">{project.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
            {/* Sidebar Tabs */}
            <div className="w-full sm:w-48 md:w-56 border-b sm:border-b-0 sm:border-r border-border bg-muted/10 p-4 overflow-x-auto sm:overflow-y-auto flex sm:flex-col gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors whitespace-nowrap text-left text-sm font-medium ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeTab === "overview" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Description</h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resource Buttons */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Resources & Links</h3>
                    <div className="flex flex-wrap gap-4">
                      {project.resources.github && (
                        <a href={project.resources.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium transition-colors shadow-sm">
                          <Github className="w-4 h-4" />
                          GitHub Repo
                        </a>
                      )}
                      {project.resources.demo && (
                        <a href={project.resources.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-medium transition-colors shadow-sm">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.resources.videos && project.resources.videos.length > 0 && (
                        <a href={project.resources.videos[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted rounded-md font-medium transition-colors">
                          <Play className="w-4 h-4 text-red-500" />
                          Video Walkthrough
                        </a>
                      )}
                      {project.resources.articles && project.resources.articles.length > 0 && (
                        <a href={project.resources.articles[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-muted rounded-md font-medium transition-colors">
                          <FileText className="w-4 h-4 text-blue-500" />
                          Related Article
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && project.resources.architecture && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold">System Architecture</h3>
                  <div className="relative w-full min-h-[400px] rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center p-4">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img 
                       src={project.resources.architecture} 
                       alt={`Architecture Diagram for ${project.title}`} 
                       className="object-contain max-h-[600px]"
                     />
                  </div>
                  <p className="text-sm text-center text-muted-foreground mt-2">Architecture Diagram for {project.title}</p>
                </div>
              )}

              {activeTab === "screenshots" && project.resources.screenshots && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold">UI Screenshots</h3>
                  <div className="grid gap-6">
                    {project.resources.screenshots.map((ss, i) => (
                      <div key={i} className="relative w-full rounded-xl overflow-hidden border border-border bg-muted/30 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={ss} alt={`Screenshot ${i + 1} of User Interface for ${project.title}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
