'use client'

import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Projects } from '@/components/projects'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import Footer from '@/components/Footer'
import styled from 'styled-components';

const Main = styled.main`
  background: linear-gradient(to right, #000000, #435998);
  color: #fff;
  background-size: 400% 400%;
  animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default function Home() {
  return (
    <Main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Main>
  )
}
