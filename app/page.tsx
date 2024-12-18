import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

