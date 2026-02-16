"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiRedux, SiMui,
    SiNodedotjs, SiNestjs, SiLaravel, SiExpress, SiPrisma, SiJsonwebtokens, SiCodeigniter, SiFastapi,
    SiPostgresql, SiMysql, SiMariadb, SiSqlite, SiMongodb, SiTensorflow, SiPytorch, SiN8N, SiShadcnui,
    SiJavascript
} from "react-icons/si"
import { FaJava, FaPython, FaPhp, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { TbBrandCpp } from "react-icons/tb"

const categories = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", icon: <SiJavascript />, color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400" },
            { name: "TypeScript", icon: <SiTypescript />, color: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400" },
            { name: "PHP", icon: <FaPhp />, color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400" },
            { name: "Python", icon: <FaPython />, color: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400" },
            { name: "Java", icon: <FaJava />, color: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400" },
            { name: "C++", icon: <TbBrandCpp />, color: "bg-blue-600/10 border-blue-600/20 text-blue-700 dark:text-blue-400" },
            { name: "HTML5", icon: <FaHtml5 />, color: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400" },
            { name: "CSS3", icon: <FaCss3Alt />, color: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400" },
        ]
    },
    {
        title: "Frontend & Mobile",
        items: [
            { name: "React.js", icon: <SiReact />, color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
            { name: "Next.js", icon: <SiNextdotjs />, color: "bg-zinc-500/10 border-zinc-500/20 text-zinc-800 dark:text-zinc-100" },
            { name: "React Native", icon: <SiReact />, color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
            { name: "Vite", icon: <SiVite />, color: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400" },
            { name: "Redux", icon: <SiRedux />, color: "bg-violet-500/10 border-violet-500/20 text-violet-600 dark:text-violet-400" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-teal-500/10 border-teal-500/20 text-teal-600 dark:text-teal-400" },
            { name: "shadcn/ui", icon: <SiShadcnui />, color: "bg-zinc-500/10 border-zinc-500/20 text-zinc-800 dark:text-zinc-100" },
            { name: "Material UI", icon: <SiMui />, color: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400" },
        ]
    },
    {
        title: "Backend",
        items: [
            { name: "Nest.js", icon: <SiNestjs />, color: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400" },
            { name: "Laravel", icon: <SiLaravel />, color: "bg-red-600/10 border-red-600/20 text-red-700 dark:text-red-500" },
            { name: "CodeIgniter", icon: <SiCodeigniter />, color: "bg-orange-600/10 border-orange-600/20 text-orange-700 dark:text-orange-500" },
            { name: "FastAPI", icon: <SiFastapi />, color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" },
            { name: "Node.js", icon: <SiNodedotjs />, color: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400" },
            { name: "Express.js", icon: <SiExpress />, color: "bg-zinc-500/10 border-zinc-500/20 text-zinc-800 dark:text-zinc-100" },
            { name: "Prisma", icon: <SiPrisma />, color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-800 dark:text-indigo-400" },
            { name: "JWT", icon: <SiJsonwebtokens />, color: "bg-pink-500/10 border-pink-500/20 text-pink-600 dark:text-pink-400" },
        ]
    },
    {
        title: "Databases",
        items: [
            { name: "MySQL", icon: <SiMysql />, color: "bg-blue-600/10 border-blue-600/20 text-blue-700 dark:text-blue-400" },
            { name: "MariaDB", icon: <SiMariadb />, color: "bg-stone-500/10 border-stone-500/20 text-stone-700 dark:text-stone-400" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "bg-sky-600/10 border-sky-600/20 text-sky-700 dark:text-sky-400" },
            { name: "SQLite", icon: <SiSqlite />, color: "bg-cyan-600/10 border-cyan-600/20 text-cyan-700 dark:text-cyan-400" },
            { name: "MongoDB", icon: <SiMongodb />, color: "bg-green-600/10 border-green-600/20 text-green-700 dark:text-green-400" },
        ]
    },
    {
        title: "AI & Tools",
        items: [
            { name: "TensorFlow", icon: <SiTensorflow />, color: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400" },
            { name: "PyTorch", icon: <SiPytorch />, color: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400" },
            { name: "n8n", icon: <SiN8N />, color: "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        } as any
    }
}

export function TechStack() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 768px)': { slidesToScroll: 1 },
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
        <section id="stack" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
            {/* Background Element - Theme Aware */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
                        Tech Stack & Tools
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Powering applications with modern, scalable, and reliable technologies.
                    </p>
                </motion.div>

                <div className="relative group">
                    <div className="overflow-hidden p-2" ref={emblaRef}>
                        <div className="flex touch-pan-y -ml-6 py-4">
                            {categories.map((category, index) => (
                                <div className="flex-[0_0_90%] md:flex-[0_0_55%] lg:flex-[0_0_40%] min-w-0 pl-6" key={category.title}>
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={containerVariants}
                                        className="h-full bg-card/50 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500"
                                    >
                                        <div className="flex items-center gap-4 mb-8">
                                            <h3 className="text-2xl font-bold text-foreground shrink-0 tracking-wide bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                                {category.title}
                                            </h3>
                                            <div className="h-px bg-gradient-to-r from-border to-transparent flex-grow mt-1" />
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {category.items.map((item) => (
                                                <motion.div
                                                    key={item.name}
                                                    variants={itemVariants}
                                                    whileHover={{
                                                        y: -5,
                                                        scale: 1.05,
                                                        transition: { type: "spring", stiffness: 300 }
                                                    }}
                                                    className={`
                                                        ${item.color}
                                                        flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300
                                                        cursor-pointer relative overflow-hidden group/item
                                                    `}
                                                >
                                                    {/* Hover Glow Effect */}
                                                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl" />

                                                    <div className="text-3xl mb-3 relative z-10 transition-transform duration-300 group-hover/item:scale-110">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-xs font-bold text-center tracking-wide relative z-10">
                                                        {item.name}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 rounded-full transition-all duration-500 ${index === selectedIndex
                                    ? "w-10 bg-primary shadow-lg shadow-primary/30"
                                    : "w-2 bg-primary/20 hover:bg-primary/40"
                                    }`}
                                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
