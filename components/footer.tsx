"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-foreground/60 text-sm"
        >
          <div>Built with ❤️ by Aniket Kedari</div>
          <div>© {currentYear} Aniket Kedari. All rights reserved.</div>
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-primary hover:text-accent transition-colors"
            >
              Back to top
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
