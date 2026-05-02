"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import siteConfig from "@/data/site.json"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium mb-6 bg-background/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              {siteConfig.status}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Architecting Resilient <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Backend Systems
              </span> & Intelligent AI Agents.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 mx-auto md:mx-0">
              {siteConfig.subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#projects" className="h-11 inline-flex items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                View Projects
              </a>
              <a href="#contact" className="h-11 inline-flex items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-background shadow-2xl overflow-hidden ring-4 ring-primary/10 transition-shadow hover:shadow-primary/20"
            >
              <Image
                src={siteConfig.avatar}
                alt={`${siteConfig.name} - Profile Avatar`}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </motion.div>
            {/* Background decorative blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Mesh/Gradient Placeholder */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>
    </section>
  )
}
