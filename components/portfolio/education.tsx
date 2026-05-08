"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "Tecnologia em Sistemas para Internet",
    institution: "IFPE",
    location: "Pernambuco, Brasil",
    period: "Ago 2022 - Atualmente",
    description:
      "Graduação voltada ao desenvolvimento de sistemas web, banco de dados, engenharia de software e aplicações full stack.",
    highlights: [
      "Desenvolvimento de aplicações web modernas",
      "Projetos utilizando Laravel, Next.js e APIs REST",
    ],
  },
  {
    degree: "Técnico em Informática para Internet",
    institution: "IFPE",
    location: "Pernambuco, Brasil",
    period: "Ago 2019 - Ago 2021",
    description:
      "Formação técnica focada em desenvolvimento web, lógica de programação, banco de dados e fundamentos de infraestrutura.",
    highlights: [
      "Criação de sistemas web e interfaces responsivas",
      "Fundamentos de redes e manutenção de computadores",
      "Experiência prática com HTML, CSS, JavaScript e MySQL",
    ],
  },
  {
    degree: "Red Hat System Administration I (RH124)",
    institution: "Red Hat Academy",
    location: "Pernambuco, Brasil",
    period: "Ago 2020 - Jan 2021",
    description:
      "Capacitação em administração de sistemas Linux com foco em linha de comando, gerenciamento de usuários e serviços.",
    highlights: [
      "Administração básica de sistemas Linux",
      "Gerenciamento de usuários, permissões e serviços",
      "Introdução a práticas de infraestrutura e servidores",
    ],
  },
]

export function Education() {
  return (
    <section id="formacao" className="py-20 md:py-32">
      <div className="container px-6 md:px-12 lg:px-24">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl mr-2">04.</span>
          Formação Acadêmica
        </h3>

        <div className="grid gap-12 lg:grid-cols-1">
          {/* Educação Formal */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Educação
            </h4>
            
            <div className="relative border-l-2 border-border pl-8 space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10.25 top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  
                  <div className="group">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm font-mono text-primary flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <h5 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h5>
                    <p className="text-primary/80 font-medium mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                    
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
