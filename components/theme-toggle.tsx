"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun size={20} className="text-yellow-500" />
      ) : (
        <FiMoon size={20} className="text-indigo-600" />
      )}
    </motion.button>
  )
}
