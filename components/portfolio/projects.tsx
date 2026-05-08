import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "Sistema de Gerenciamento de Contas Bancárias",
    description:
      "Solução para automatização de transferências bancárias com foco em processamento sem concorrência. Arquitetura orientada a eventos com AWS SQS e Lambda orquestrados pelo Serverless Framework. Autenticação corporativa via Microsoft Entra ID, monitoramento de logs com CloudWatch e frontend em React com Vite e TypeScript.",
    techs: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "Kotlin",
      "PostgreSQL",
      "AWS SQS",
      "Lambda",
      "Serverless Framework",
    ],
    image: "/sgc.png",
    live: "",
  },
  {
    title: "Novodente",
    description:
      "Plataforma de planos odontológicos com suporte a whitelabel — permitindo que múltiplas marcas utilizem a mesma infraestrutura com identidades visuais distintas. Frontend em Next.js com foco em performance e SEO, API robusta em Spring Boot com Kotlin e persistência em PostgreSQL com JPA.",
    techs: ["Next.js", "Spring Boot", "Kotlin", "PostgreSQL", "JPA"],
    image: "/novodente.png",
    live: "https://novodente.com.br",
  },
  {
    title: "T+ Saúde",
    description:
      "Plataforma de gestão da Atenção Primária à Saúde (APS). Atuei na construção e evolução do backend, criando endpoints, regras de negócio complexas, migrations e integrações com APIs externas do setor de saúde. Projeto com alto nível de responsabilidade dado o contexto crítico de saúde pública.",
    techs: ["Node.js", "Express", "JavaScript", "PostgreSQL", "Sequelize"],
    image: "/t-plus-saude.webp",
    live: "https://hsm.tsaude.app/login",
  },
];

const otherProjects = [
  {
    title: "T+ Bia",
    description:
      "Sistema de telemedicina com arquitetura definida do zero. Bootstrap do projeto com escolha de stack e estruturação inicial utilizando NestJS, MongoDB e Mongoose.",
    techs: ["NestJS", "MongoDB", "Mongoose", "TypeScript"],
  },
  {
    title: "Sistema de Autoatendimento",
    description:
      "Solução de entrega de senhas em tempo real com backend via Socket.io e app Android Nativo em Kotlin para tablets com impressão automática em mini impressora.",
    techs: ["Node.js", "Socket.io", "Kotlin", "Android"],
  },
  {
    title: "Via Afiliados",
    description:
      "Site institucional de plataforma especializada em sorteios legalizados no Brasil. Manutenção e evolução do frontend em Next.js e API em Spring Boot com Kotlin.",
    techs: ["Next.js", "Spring Boot", "Kotlin", "PostgreSQL"],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">04.</span>
            Projetos
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="relative grid md:grid-cols-12 gap-4 items-center"
            >
              {/* Project Image */}
              {project.image && (
                <div
                  className={`md:col-span-7 md:col-start-6 relative aspect-video bg-secondary rounded overflow-hidden group`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Project Content */}
              <div
                className="md:col-span-6 md:row-start-1 md:col-start-1 relative z-10"
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Projeto em Destaque
                </p>
                <div className="flex items-center justify-start gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>

                  {project.live && (
                    <div
                      className={`flex gap-4`}
                    >
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label={`Ver ${project.title} ao vivo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  )}
                </div>
                <div className="bg-card p-6 rounded shadow-lg mb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4"
                >
                  {project.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-12">
          Outros Projetos Notáveis
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
