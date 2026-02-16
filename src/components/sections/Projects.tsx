"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"

import { Button } from "@/components/ui/button"

// Icons
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiNestjs, SiLaravel,
    SiExpress, SiPrisma, SiJsonwebtokens, SiMysql, SiMongodb, SiTensorflow, SiPytorch,
    SiNodedotjs, SiExpo, SiFigma, SiCplusplus, SiC, SiJavascript, SiHtml5, SiCss3, SiShadcnui
} from "react-icons/si"
import { FaPython, FaJava, FaPhp, FaDatabase, FaBrain, FaNetworkWired } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"

// Icon Mapping
const techIconMap: { [key: string]: React.ReactNode } = {
    "Next.js": <SiNextdotjs />,
    "Nest.js": <SiNestjs className="text-red-600" />,
    "TensorFlow": <SiTensorflow className="text-orange-500" />,
    "Python": <FaPython className="text-blue-500" />,
    "MediaPipe": <FaBrain className="text-teal-500" />,
    "React.js": <SiReact className="text-cyan-400" />,
    "Vite": <SiVite className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
    "Express.js": <SiExpress />,
    "MySQL": <SiMysql className="text-blue-600" />,
    "Prisma": <SiPrisma className="text-blue-900 dark:text-gray-300" />,
    "Laravel": <SiLaravel className="text-red-500" />,
    "Blade": <SiLaravel className="text-red-500" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "TypeScript": <SiTypescript className="text-blue-500" />,
    "shadcn/ui": <SiShadcnui />,
    "JWT": <SiJsonwebtokens className="text-pink-500" />,
    "MongoDB": <SiMongodb className="text-green-500" />,
    "Node.js": <SiNodedotjs className="text-green-600" />,
    "React Native": <SiReact className="text-cyan-400" />,
    "Expo": <SiExpo />,
    "CSS": <SiCss3 className="text-blue-500" />,
    "Figma": <SiFigma className="text-purple-500" />,
    "C++": <TbBrandCpp className="text-blue-600" />,
    "Data Structures": <FaDatabase className="text-gray-500" />,
    "Algorithms": <FaNetworkWired className="text-gray-500" />,
}

const projects = [
    {
        title: "Bacarita - LIDM 2025",
        description: "Adaptive, gamification-based reading platform designed to support children with dyslexia. Features Auditory Challenges (ASR) and Visual Challenges (Eye-Tracking) to assess and improve reading skills.",
        tags: ["Next.js", "Nest.js", "TensorFlow", "Python", "MediaPipe"],
        links: {
            demo: "#",
            github: "https://github.com/Je-One-One-LIDM",
            doc: "doc/LIDM 2025 - Divisi Inovasi Teknologi Pendidikan - 002003 - Je One One - Karya Akhir.pdf"
        },
    },
    {
        title: "Taverna Resto Website",
        description: "Restaurant CMS with Admin Dashboard for managing Promotions, Menu, and Testimonials. Features full CRUD functionality and secure JWT authentication.",
        tags: ["React.js", "Vite", "Tailwind CSS", "Express.js", "MySQL", "Prisma"],
        links: {
            demo: "#",
            github: "https://github.com/mahesgya/taverna_frontend",
            doc: "doc/Taverna.pdf"
        },
    },
    {
        title: "Aku Cuciin - Dashboard Admin",
        description: "Internal admin console for AkuCuciin. Manages secure admin access, user & partner records, order status lifecycles, and financial analytics.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "JWT"],
        links: {
            demo: "#",
            github: "https://github.com/mahesgya/akucuciin_admin_new",
            doc: "doc/DashboardAdmin.pdf"
        },
    },
    {
        title: "AkuCuciin - Mobile Apps",
        description: "Mobile application for laundry partners to manage active orders, update statuses, and view transaction history. Features a clean, intuitive UI for efficient operation.",
        tags: ["React Native", "Expo", "Express.js", "Node.js"],
        links: {
            demo: "#",
            github: "https://github.com/mahesgya/akucuciin_native",
            doc: "doc/AkuCuciinMobileApp.pdf"
        },
    },
    {
        title: "Pesta Sains Nasional IPB",
        description: "Competition platform serving 3,000+ users. Features custom CMS, 5-step registration, and role-based auth.",
        tags: ["React.js", "Vite", "Laravel", "Filament", "Sanctum"],
        links: {
            demo: "#",
            github: "https://github.com/pestasainsnasional",
            doc: "doc/Psn.pdf"
        },
    },
    {
        title: "Portal Himpunan Mahasiswa Ilmu Komputer",
        description: "Organization website for Himalkom IPB. Built 'Program Kerja' and Comments sections with interactive features and full CRUD backend functionality.",
        tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "JavaScript"],
        links: {
            demo: "https://portal.himalkom-ipb.com",
            github: "https://github.com/HimalkomIPB",
            doc: null // No specific PDF found, user didn't mention one for this explicitly in public/doc check
        },
    },
    {
        title: "One Landscape Kalimantan Selatan",
        description: "MERN stack website for environmental awareness. Features Testimonial submission, SHP Request, and Admin Dashboard for content management.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
        links: {
            demo: "#",
            github: "#",
            doc: "doc/Onelandscape.pdf"
        },
    },
    {
        title: "Tes DLH Kalsel Website",
        description: "Digital Assessment System with randomized 100-question tests, real-time admin monitoring, and test history analytics.",
        tags: ["React.js", "Vite", "Tailwind CSS", "Express.js", "MySQL"],
        links: {
            demo: "#",
            github: "#",
            doc: "doc/TesCbt.pdf"
        },
    },
    {
        title: "Ormawa Eksekutif PKU IPB 2024",
        description: "Organization website featuring Program Information, Digmapi Store, and Student Awards showcases.",
        tags: ["React.js", "CSS", "Figma"],
        links: {
            demo: "#",
            github: "#",
            doc: "doc/OrmawaEkse.pdf"
        },
    },
    {
        title: "Data Structures - Hotel Reservation",
        description: "C++ implementation of a hotel reservation system utilizing fundamental data structures like Queues and Stacks.",
        tags: ["C++", "Data Structures", "Algorithms"],
        links: { github: "https://github.com/mahesgya/DataStructures_Project" },
    },
]

// Helper to render tech icons with label
const renderTechIcons = (tags: string[]) => (
    <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
            <div
                key={tag}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-border"
            >
                {techIconMap[tag] ? (
                    <span className="text-base">{techIconMap[tag]}</span>
                ) : null}
                <span>{tag}</span>
            </div>
        ))}
    </div>
)


export function Projects() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)
    }, [emblaApi, onSelect])

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects demonstrating full-stack capabilities.
                    </p>
                </motion.div>

                {/* Carousel Container (All Devices) */}
                <div className="relative group px-4 md:px-0">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y -ml-4 py-4 px-1">
                            {projects.map((project, index) => (
                                <div className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4" key={index}>
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md flex flex-col h-full transition-all duration-300"
                                    >
                                        <div className="p-6 flex flex-col h-full">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold mb-2 line-clamp-1" title={project.title}>{project.title}</h3>
                                                <div className="h-1 w-12 bg-primary/20 rounded-full mb-4" />
                                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="mt-auto">
                                                {renderTechIcons(project.tags)}
                                                <div className="flex items-center gap-3">
                                                    <Button variant="outline" size="sm" asChild className="flex-1">
                                                        <Link href={project.links.github || "#"} target="_blank" rel="noopener noreferrer">
                                                            <Github className="mr-2 h-4 w-4" /> Code
                                                        </Link>
                                                    </Button>
                                                    {project.links.doc && (
                                                        <Button variant="ghost" size="sm" asChild className="flex-1">
                                                            <Link href={project.links.doc} target="_blank" rel="noopener noreferrer">
                                                                <FileText className="mr-2 h-4 w-4" /> Doc
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-8 flex-wrap px-4">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-primary/20"
                                    }`}
                                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
