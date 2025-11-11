"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"


const projects = [
  {
    title: "BudgetIQ - AI Finance Platform",
    description:
      "Full-stack AI-powered finance platform with budget alerts, automated monthly email reports, and receipt scanning via Gemini API. Improved financial tracking efficiency by 40% for users.",
    tech: ["React 19", "Next.js 15", "Supabase", "Prisma", "Gemini API", "Clerk", "Tailwind CSS"],
    liveLink: "https://budget-iq-pi.vercel.app/",
    githubLink: "https://github.com/Aniket000k/BudgetIQ",
    highlights: ["AI Receipt Scanning", "Automated Reports", "Real-time Alerts"],
  },
  {
    title: "QueuePro - Queue Management System",
    description:
      "Real-time queue management system with role-based dashboards, multi-branch support, and live updates. Reduced average wait time by 30% and supported 100+ concurrent users.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    liveLink: "https://queuepro.onrender.com/",
    githubLink: "https://github.com/Aniket000k/QueuePro",
    highlights: ["Real-time Updates", "Role-based Access", "Analytics Dashboard"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg">Showcasing my recent work and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass h-full p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 group-hover:from-accent group-hover:to-primary transition-all">
                    {project.title}
                  </h3>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-foreground/50 text-sm mb-3 font-semibold">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-primary/5 text-foreground/70 text-xs border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-primary/20">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors ml-auto"
                  >
                    <span className="text-sm font-medium">Live Demo</span>
                    <FiExternalLink size={18} />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
