"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { useState } from "react"

const resumeData = `ANIKET KEDARI 

+919607502554 | aniket.kedari888@gmail.com | LinkedIn  | GitHub  
 
SUMMARY 
Full-Stack Developer skilled in Java, React, Node.js, Next.js, and MongoDB with experience in building scalable, real- 
time, and AI-driven web applications. Good in DSA with active practice on LeetCode and HackerRank. Passionate about 
Web3 and creating impactful products. 
 
SKILLS 
 
• Languages: Java, JavaScript, TypeScript  
• Frontend: React, Next.js, HTML5, CSS3, Tailwind CSS, Shadcn UI 
• Backend: Node.js, Express.js, REST APIs, JWT, Socket.io 
• Databases: MongoDB, SQL, PostgreSQL 
• Version Control: Git, GitHub 
• Other: Postman, Vercel  
 
PROJECTS 
BudgetIQ - AI Finance Platform (Apr 2025 – Jun 2025)
• Developed a full-stack AI-powered finance platform using React 19, Next.js 15, Supabase, and Prisma. 
• Implemented budget alerts, automated monthly email reports with Inngest, Integrated Gemini API for receipt scanning 
• Secured user authentication with Clerk and Arcjet; enhanced UI with Tailwind CSS & Shadcn UI. 
• Impact: Improved financial tracking efficiency by 40% for users. 
 
QueuePro - Online Queue Management System (Oct 2024 – Nov 2024)
• Built a real-time queue management system with React, Node.js, Express, and MongoDB. 
• Integrated JWT authentication, role-based dashboards, and live updates using Socket.io. 
• Enabled multi-branch support, appointment booking, and analytics dashboards for admins. 
• Impact: Reduced average customer wait time by 30% and supported 100+ concurrent users. 
 
EDUCATION 
M.Sc. Computer Science – Fergusson College, Pune | CGPA: 8.1 (2024 – 2026). 
B.Sc. Computer Science – Pratibha College | CGPA: 8.5 (2022 – 2023). 
HSC (Science) – D.P. Mehta Jr. College | 63.08% (2019 – 2020). 
 
CERTIFICATE & ACHIEVEMENTS                      
• Coding Practice: Solved 35+ problems on LeetCode and completed challenges on HackerRank in Java and SQL, maintaining a goal of 5–10 problems weekly to strengthen DSA and problem-solving skills. 
• 100xDevs Cohort 3.0 – Advanced Web Development & Web3 Track. 
• AWS Summit India (Online) – Gained insights into modern cloud computing practices.`

export function ResumeSection() {
  const [isLoading, setIsLoading] = useState(false)

  const downloadResume = async () => {
    setIsLoading(true)
    try {
      const { jsPDF } = await import("jspdf")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pageHeight = pdf.internal.pageSize.getHeight()
      const pageWidth = pdf.internal.pageSize.getWidth()
      const margin = 10
      const textWidth = pageWidth - 2 * margin
      const lineHeight = 5

      pdf.setFont("Helvetica", "normal")
      pdf.setFontSize(10)

      const lines = pdf.splitTextToSize(resumeData, textWidth)
      let yPosition = margin

      lines.forEach((line: string) => {
        if (yPosition > pageHeight - margin) {
          pdf.addPage()
          yPosition = margin
        }
        pdf.text(line, margin, yPosition)
        yPosition += lineHeight
      })

      pdf.save("Aniket_Kedari_Resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Gradient background effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"
            aria-hidden="true"
          />

          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 mb-4"
                  >
                    <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl">
                      <FileText size={24} className="text-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-accent">RESUME</span>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Download My Resume</h2>
                  <p className="text-foreground/60">
                    Get my complete CV with education, projects, skills, and achievements
                  </p>
                </div>
              </div>

              {/* Resume preview box */}
              <div className="mb-8 p-6 rounded-xl bg-background/40 border border-border/30 max-h-48 overflow-y-auto">
                <p className="text-sm text-foreground/70 font-mono whitespace-pre-wrap line-clamp-6">{resumeData}</p>
                <p className="text-xs text-foreground/50 mt-3">... and more</p>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={downloadResume}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-primary text-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                {isLoading ? "Generating PDF..." : "Download Resume (PDF)"}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
