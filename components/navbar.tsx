"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-4 transition-all ${
        isScrolled ? "glass border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          AK
        </motion.a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className="text-foreground/70 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden gap-2 items-center">
          <ThemeToggle />
          <motion.button onClick={() => setIsOpen(!isOpen)} className="text-foreground" whileTap={{ scale: 0.95 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass border-b border-primary/20 md:hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 10 }}
                    className="text-foreground/70 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
