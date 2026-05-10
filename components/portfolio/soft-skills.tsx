"use client"

import { MessageSquare, Users, Lightbulb, Clock, Target, Heart, Puzzle, TrendingUp } from "lucide-react"

const skills = [
  {
    icon: MessageSquare,
    title: "Comunicação",
    description: "Capacidade de explicar conceitos técnicos de forma clara para diferentes públicos.",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Colaboração efetiva com designers, PMs e outros desenvolvedores.",
  },
  {
    icon: Lightbulb,
    title: "Resolução de Problemas",
    description: "Abordagem analítica para encontrar soluções criativas e eficientes.",
  },
  {
    icon: Clock,
    title: "Gestão de Tempo",
    description: "Organização e priorização de tarefas para entregar no prazo.",
  },
  {
    icon: Target,
    title: "Paciência",
    description: "Capacidade de manter a calma e a concentração em situações desafiadoras.",
  },
  {
    icon: Heart,
    title: "Empatia",
    description: "Compreensão das necessidades dos usuários e stakeholders.",
  },
  {
    icon: Puzzle,
    title: "Adaptabilidade",
    description: "Flexibilidade para aprender novas tecnologias e se adaptar a mudanças.",
  },
  {
    icon: TrendingUp,
    title: "Aprendizado Contínuo",
    description: "Busca constante por conhecimento e aprimoramento profissional.",
  },
]

export function SoftSkills() {
  return (
    <section id="soft-skills" className="px-4 py-24">
      <div className="container flex flex-col items-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          <span className="text-primary font-mono">03.</span> Soft Skills
        </h2>
        <p className="text-muted-foreground mb-12">
          Habilidades técnicas constroem produtos. Habilidades interpessoais constroem times. 
          Durante minha trajetória pessoal e profissional, desenvolvi competências que considero 
          essenciais para um desenvolvedor — e que me permitem colaborar efetivamente, resolver 
          problemas complexos e me adaptar a ambientes em constante mudança. Aqui estão algumas 
          das minhas principais soft skills:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
