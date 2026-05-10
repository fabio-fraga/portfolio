import Link from "next/link"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="px-4 py-24">
      <div className="container mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">
          <span className="mr-2">06.</span>
          E agora?
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Entre em Contato
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Estou sempre aberto a novas oportunidades e projetos interessantes. 
          Se você tem uma pergunta, uma proposta ou apenas quer dizer olá, 
          minha caixa de entrada está sempre aberta. Farei o meu melhor para 
          responder o mais rápido possível!
        </p>
        
        <Link
          href="mailto:fabiomouradefraga@gmail.com"
          className="inline-flex items-center gap-2 text-primary border border-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-300 font-mono"
        >
          <Mail className="w-5 h-5" />
          Enviar Email
        </Link>
      </div>
    </section>
  )
}
