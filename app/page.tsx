"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedLoader } from "@/components/animated-loader"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ResumeSection } from "@/components/resume-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <AnimatedLoader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <main className="relative">
            <CustomCursor />

            <Navbar />

            <div className="pt-16">
              <HeroSection />
              <motion.div id="skills" />
              <SkillsSection />
              <ResumeSection />
              <motion.div id="projects" />
              <ProjectsSection />
              <motion.div id="contact" />
              <ContactForm />
              <Footer />
            </div>
          </main>
        </>
      )}
    </>
  )
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      setTrail((prevTrail) => [...prevTrail.slice(-8), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
      setTrail([])
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed w-1 h-1 rounded-full pointer-events-none z-40 hidden md:block"
          style={{
            background: `radial-gradient(circle, rgba(102, 204, 255, ${
              (index / trail.length) * 0.6
            }) 0%, transparent 100%)`,
            boxShadow: `0 0 ${8 + (index / trail.length) * 12}px rgba(102, 204, 255, ${(index / trail.length) * 0.4})`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          animate_={{
            x: point.x - 2,
            y: point.y - 2,
          }}
        />
      ))}

      <motion.div
        className="fixed pointer-events-none z-40 hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="relative w-4 h-4">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(102, 204, 255, 0.8) 0%, rgba(102, 204, 255, 0.4) 50%, transparent 100%)",
              boxShadow: "0 0 20px rgba(102, 204, 255, 0.6), 0 0 40px rgba(102, 204, 255, 0.3)",
            }}
          />
          {/* Inner sparkle */}
          <motion.div
            className="absolute inset-0 bg-accent rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            style={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8) inset",
            }}
          />
        </div>
      </motion.div>
    </>
  )
}
