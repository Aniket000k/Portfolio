"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [displayText, setDisplayText] = useState("")
  const [isRevealing, setIsRevealing] = useState(false)
  const fullName = "Welcome To My Hub....!"
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  useEffect(() => {
    const scrambleTime = 900
    const scrambleInterval = setInterval(() => {
      const randomName = fullName
        .split("")
        .map((char) => (char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]))
        .join("")
      setDisplayText(randomName)
    }, 40)

    setTimeout(() => {
      clearInterval(scrambleInterval)
      setIsRevealing(true)

      const revealDuration = 2000
      const startTime = Date.now()

      const revealInterval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / revealDuration, 1)
        const charsToShow = Math.ceil(fullName.length * progress)
        const revealed = fullName.slice(0, charsToShow)
        const remaining = fullName.slice(charsToShow)

        setDisplayText(
          revealed +
            remaining
              .split("")
              .map(() => chars[Math.floor(Math.random() * chars.length)])
              .join(""),
        )

        if (progress >= 1) {
          clearInterval(revealInterval)
          setDisplayText(fullName)
          setTimeout(() => {
            onLoadingComplete()
          }, 300)
        }
      }, 40)
    }, scrambleTime)

    return () => clearInterval(scrambleInterval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {displayText}
          </h1>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isRevealing ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
