"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
    {
        company: "PT. BUMI REKAYASA MANDIRI",
        role: "Enterprise Resources Planning Engineer",
        period: "September 2025 - Present (6 bulan)",
        location: "Karawang, Jawa Barat, Indonesia",
        description: "Merancang sistem ERP kustom dan otomatisasi OCR dengan n8n.",
    },
    {
        company: "KodeKita",
        role: "Software Engineer",
        period: "Januari 2025 - Present (1 tahun 2 bulan)",
        location: "",
        description: "Memimpin pengembangan 5+ proyek klien (startup & enterprise).",
    },
    {
        company: "Coding Camp powered by DBS Foundation",
        role: "Artificial Intelligence Engineer Cohort",
        period: "Februari 2026 - Present (1 bulan)",
        location: "Bogor, Jawa Barat, Indonesia",
        description: "Selected for AI Engineer Cohort.",
    },
    {
        company: "AkuCuciin",
        role: "Lead Product Engineer",
        period: "Januari 2024 - Present (2 tahun)",
        location: "Bogor, Jawa Barat, Indonesia",
        description: "Leading the product engineering team, overseeing development scaling and architectural decisions.",
    },
    {
        company: "Dinas Lingkungan Hidup Kalimantan Selatan",
        role: "Full-stack & Frontend Developer",
        period: "September 2024 - Januari 2025 (5 bulan)",
        location: "Kalimantan Selatan, Indonesia",
        description: "Developed the Onelandscape website and a Computer Based Test (CBT) platform for recruitment.",
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 bg-muted/30">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                        Work Experience
                    </h2>

                    <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Dot */}
                                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-1">
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded mt-1 sm:mt-0">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-primary mb-1">{exp.company}</h4>
                                {exp.location && (
                                    <p className="text-sm text-muted-foreground mb-2 flex items-center">
                                        {exp.location}
                                    </p>
                                )}
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {exp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
