import Image from "next/image"

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "NestJS",
  "Laravel",
  "Spring Boot",
  "PostgreSQL",
  "AWS",
]

export function About() {
  return (
    <section id="sobre" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            Sobre Mim
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Olá! Sou um desenvolvedor extremamente apaixonado pelo o que faz, com experiência em 
              projetos reais de backend e frontend, atuando de ponta a ponta no desenvolvimento de produtos
              digitais — do refinamento técnico ao deploy. Contribuo em decisões
              arquiteturais e de tecnologias a serem utilizadas, revisões de PR e investigação de problemas em produção até a causa raiz.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Já tive a oportunidade e o prazer de trabalhar com diversos tipos de ferramentas.
              Hoje, meu foco principal é construir 
              produtos e experiências digitais acessíveis e inclusivas para 
              diversos clientes.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Aqui estão algumas tecnologias com as quais tenho trabalhado 
              recentemente:
            </p>
            
            <ul className="grid grid-cols-2 gap-2 mt-6">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative group">
            <div className="relative w-full aspect-square rounded overflow-hidden">
              <div className="w-full h-full bg-secondary flex items-center justify-center">
                <Image
                  src="/me.jpeg"
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
