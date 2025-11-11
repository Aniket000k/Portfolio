"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skillCategories = [
  {
    category: "Languages",
    level: "Expert",
    proficiency: 95,
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
  },
  {
    category: "Frontend",
    level: "Expert",
    proficiency: 92,
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    level: "Advanced",
    proficiency: 88,
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      },
      { name: "REST APIs", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    category: "Databases",
    level: "Advanced",
    proficiency: 85,
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      { name: "Supabase", logo: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4" },
    ],
  },
  {
    category: "Tools & Platforms",
    level: "Advanced",
    proficiency: 90,
    skills: [
      {
        name: "Git/GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      },
      { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
      {
        name: "Socket.io",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
      },
    ],
  },
]

function SkillCategoryCard({
  categoryData,
  index,
}: {
  categoryData: (typeof skillCategories)[0]
  index: number
}) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "from-accent to-primary"
      case "Advanced":
        return "from-primary to-secondary"
      default:
        return "from-secondary to-muted"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 group-hover:border-accent/50 rounded-2xl p-6 transition-all duration-300 h-full">
        {/* Header with category and proficiency */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">{categoryData.category}</h3>
            <p
              className={`text-sm font-semibold bg-gradient-to-r ${getLevelColor(categoryData.level)} bg-clip-text text-transparent`}
            >
              {categoryData.level}
            </p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-accent">{categoryData.proficiency}%</span>
          </div>
        </div>

        {/* Proficiency bar */}
        <div className="mb-5 h-2 bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${categoryData.proficiency}%` }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(categoryData.level)}`}
          />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 gap-3">
          {categoryData.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + idx * 0.05 + 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl bg-background/40 group-hover:bg-background/60 border border-border/30 hover:border-accent/50 transition-all"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="object-contain drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.opacity = "0.5"
                  }}
                />
              </div>
              <p className="text-xs font-medium text-foreground/70 text-center line-clamp-1">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Proficient in modern technologies for building scalable, production-ready applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCategoryCard key={category.category} categoryData={category} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
