"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "NW Holding",
    role: "Full Stack Developer",
    period: "2024 — Presente",
    description: [
      "Desenvolvimento de soluções fullstack em times autogerenciáveis com metodologia Scrumban (Scrum + Kanban), participando de decisões arquiteturais, revisões de PR e deploys",
      "Automatização de transferências bancária com Serverless Framework, Webhooks, AWS SQS e Lambda para processamento sem concorrência",
      "Monitoramento de logs com CloudWatch",
      "Autenticações via Microsoft Entra ID e JWT",
      "Manutenção e evolução de produtos com React.js, Next.js, Tailwind CSS, Spring Boot/Kotlin, PostgreSQL e JPA",
    ],
  },
  {
    company: "Tascom",
    role: "Backend Developer",
    period: "2023 — 2024",
    description: [
      "Desenvolvimento de soluções backend voltadas para o setor de saúde seguindo metodologia ágil Scrumban (Scrum + Kanban)",
      "Manutenção e evolução de APIs REST com Node.js, Express, PostgreSQL e Sequelize, criando endpoints, regras de negócio, migrations, seeders e integrações com APIs externas",
      "Bootstrap de projeto definindo arquitetura com NestJS, MongoDB e Mongoose",
      "Construção de backend com Socket.io e app Android Nativo em Kotlin com impressão automática de senhas em tempo real numa mini impressora",
    ],
  },
{
    company: "Associação Ponto Cidadão",
    role: "Professor de Desenvolvimento Web",
    period: "2024 — 2025",
    description: [
      "Ensino e avaliação de disciplinas do curso: Lógica de Programação, POO, Banco de Dados e Web",
      "Aulas de TypeScript para lógica e POO, MySQL para banco de dados e React, Next.js e Tailwind CSS para desenvolvimento web",
      "Introdução de conceitos de APIs REST e boas práticas de desenvolvimento",
    ],
  },
  {
    company: "Associação Ponto Cidadão",
    role: "Professor de Informática Básica",
    period: "2020 — 2022",
    description: [
      "Ensino e avaliação da disciplina: pacote Office, Windows, digitação, noções de hardware e software e navegação segura na internet",
      "Manutenção e gerenciamento do laboratório de informática",
    ],
  },
]

export function Experiences() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experiencias" className="px-4 py-24">
      <div className="container flex flex-col items-center">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Experiências
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={`${exp.company}-${index}`}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-300",
                  "hover:bg-secondary hover:text-primary",
                  activeTab === index
                    ? "text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-secondary/50 -mb-px md:mb-0 md:-ml-px"
                    : "text-muted-foreground border-b-2 md:border-b-0 md:border-l-2 border-transparent"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="py-4 md:py-0 min-h-75">
            <h3 className="text-xl font-medium text-foreground mb-1">
              {experiences[activeTab].role}{" "}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
