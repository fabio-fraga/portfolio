"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">
          Olá, meu nome é
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
          <span className="text-balance">Fábio Fraga</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8">
          <span className="text-balance">Desenvolvo experiências digitais.</span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Sou um desenvolvedor full stack especializado em criar aplicações web 
          modernas, performáticas e acessíveis. Atualmente focado em construir 
          produtos digitais que fazem a diferença.
        </p>
        
        <div className="flex items-center gap-6 mb-16">
          <Link
            href="https://github.com/fabio-fraga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fabiofraga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:fabiomouradefraga@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        
        <button
          onClick={() => {
            document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="flex items-center cursor-pointer gap-2 text-primary border border-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-300 font-mono text-sm"
        >
          Saiba mais
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
