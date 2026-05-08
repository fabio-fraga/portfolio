import Link from "next/link"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/fabio-fraga", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/fabiofraga", icon: Linkedin },
  { name: "Email", href: "mailto:fabiomouradefraga@gmail.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Social Links - Mobile */}
        <div className="flex md:hidden justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground font-mono">
          Desenvolvido por{" "}
          <Link
            href="https://github.com/fabio-fraga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Fábio Fraga
          </Link>
        </p>
      </div>

      {/* Fixed Social Links - Desktop */}
      <div className="hidden md:flex fixed left-8 bottom-0 flex-col items-center gap-6">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </Link>
        ))}
        <div className="w-px h-24 bg-muted-foreground" />
      </div>

      {/* Fixed Email - Desktop */}
      <div className="hidden md:flex fixed right-8 bottom-0 flex-col items-center gap-6">
        <Link
          href="mailto:fabiomouradefraga@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm [writing-mode:vertical-lr]"
        >
          fabiomouradefraga@gmail.com
        </Link>
        <div className="w-px h-24 bg-muted-foreground" />
      </div>
    </footer>
  )
}
