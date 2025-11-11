"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FiDownload } from "react-icons/fi"

export function ResumeSection() {
  const [isLoading, setIsLoading] = useState(false)

  const downloadResume = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/assets/ANIKET_KEDARI_RESUME (FS).pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "Aniket_Kedari_Resume.pdf"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error("Error downloading resume:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Resume
          </h2>
          <p className="text-foreground/60 text-lg">Download my full resume to learn more about my experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="glass p-8 md:p-12 text-center">
            <p className="text-foreground/70 mb-8">Click the button below to download my resume</p>
            <motion.button
              onClick={downloadResume}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiDownload size={20} />
              {isLoading ? "Downloading..." : "Download Resume (PDF)"}
            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
