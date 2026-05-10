import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experiences } from "@/components/portfolio/experiences"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { SoftSkills } from "@/components/portfolio/soft-skills"
import { Education } from "@/components/portfolio/education"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center">
        <div className="container max-w-6xl px-6 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Experiences />
          <SoftSkills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
