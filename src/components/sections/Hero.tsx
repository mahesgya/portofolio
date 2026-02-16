"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Hero() {
    const [displayedName, setDisplayedName] = useState("")
    const fullName = "Anargya Isadhi M."
    const controls = useAnimation()

    useEffect(() => {
        let currentIndex = 0
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setDisplayedName(fullName.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(typingInterval)
            }
        }, 100)

        return () => clearInterval(typingInterval)
    }, [])

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16 py-20 overflow-hidden relative">
            {/* Background Gradient Accents */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    <div className="flex flex-col items-start max-w-2xl space-y-8 lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.span
                                className="text-primary font-medium tracking-wider uppercase text-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Hi, my name is
                            </motion.span>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-foreground min-h-[1.2em]">
                                {displayedName}
                                <motion.span
                                    className="inline-block w-1 h-[0.9em] bg-primary ml-1 align-middle"
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                />
                            </h1>

                            <motion.h2
                                className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-muted-foreground"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Full Stack Engineer.
                            </motion.h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                        >
                            Building scalable platforms and delivering business impact through technology.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button asChild size="lg" className="group">
                                <Link href="#projects">
                                    View Projects
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="https://github.com/mahesgya" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="https://linkedin.com/in/anargyaisadhim" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    LinkedIn
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-background shadow-2xl ring-4 ring-primary/10">
                            <Image
                                src="/foto2.png"
                                alt="Anargya Isadhi Maheswara"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
