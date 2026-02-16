"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <footer id="contact" className="bg-background border-t border-border py-12 md:py-24">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    <div className="max-w-md text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-muted-foreground mb-6">
                            Interested in collaborating or have a question? Feel free to reach out.
                        </p>
                        <div className="flex flex-col space-y-2 items-center md:items-start">
                            <div className="flex items-center text-muted-foreground">
                                <Mail className="w-5 h-5 mr-3 text-primary" />
                                <a href="mailto:anargya115@gmail.com" className="hover:text-primary transition-colors">
                                    anargya115@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-5 h-5 mr-3 text-primary" />
                                <span>Bogor, West Java</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/mahesgya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <Github className="w-6 h-6" />
                                </Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://linkedin.com/in/anargyaisadhim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground text-center md:text-right mt-4">
                            © {new Date().getFullYear()} Anargya Isadhi Maheswara. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
