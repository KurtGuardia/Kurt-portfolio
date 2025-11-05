'use client'

import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { Projects } from '@/components/Projects'
import { CV } from '@/components/CV'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
import styled from 'styled-components'

const Main = styled.main`
  background: linear-gradient(to right, #000000, #435998);
  color: #fff;
  background-size: 400% 400%;
  animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default function Home() {
  return (
    <Main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
      <Footer />
    </Main>
  )
}
