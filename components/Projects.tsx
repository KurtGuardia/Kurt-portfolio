'use client'

import { motion, useAnimation } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

const projectsData = [
  {
    id: ['react'],
    title: 'FinPal',
    description:
      'Fintech app for business financial management, with darkmode and language selector',
    technologies: ['React', 'Redux', 'Firebase'],
    liveLink: 'https://finpal.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/Fin-Pal',
    imgSrc: '/img/finpal.png',
    demo: true,
  },
  {
    id: ['website'],
    title: 'Ciner',
    description:
      'Landing page for ciner.org renewable energy data center, build with advance techniques',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ciner.org',
    codeLink: 'https://github.com/KurtGuardia/Ciner',
    imgSrc: '/img/ciner.jpg',
  },
  {
    id: ['react'],
    title: 'Spotify Clone',
    description:
      'Functional Spotify clone react app, with user authentication, firestore database and cloud storage (Legacy project)',
    technologies: ['React', 'Redux', 'Firebase'],
    liveLink: 'https://spotify-clone-kg.netlify.app/',
    codeLink:
      'https://github.com/KurtGuardia/Spotify-Clone',
    imgSrc: '/img/spotify-clone.png',
    demo: true,
  },
  {
    id: ['website', 'next'],
    title: 'Vappeo',
    description:
      'Bolivian e-commerce for vapping products, done with next js, maps with React Leaflet (reverse geolocation) and personalized Whatsapp messages.',
    technologies: ['Next.js', 'React Leaflet', 'Tailwind'],
    liveLink: 'https://vappeo.com/',
    codeLink: 'https://github.com/KurtGuardia/Vappeo',
    imgSrc: '/img/vappeo.png',
  },
  {
    id: ['website', 'react'],
    title: 'Balance',
    description:
      'Beautiful landing page for balancenutricionintegrativa.org a holistic nutricion service. Made with React and Scss.',
    technologies: ['React', 'SCSS', 'Figma'],
    liveLink: 'https://balancenutricionintegrativa.org',
    codeLink: 'https://github.com/KurtGuardia/balance',
    imgSrc: '/img/balance.png',
    imgSrcWebp: '/img/balance.webp',
  },
  {
    id: ['react'],
    title: 'The Wild Oasis',
    description:
      'Full-stack hotel management app built with React and Supabase, featuring bookings, cabins, user management, analytics dashboard, image uploads, and modern UI libraries.',
    technologies: [
      'React',
      'React Query',
      'React Router',
      'Supabase',
    ],
    liveLink: 'https://the-wild-oasis-kurt.vercel.app/',
    codeLink:
      'https://github.com/KurtGuardia/The-Wild-Oasis',
    imgSrc: '/img/wild.png',
    demo: true,
  },
  {
    id: ['website', 'react'],
    title: 'Amaquella',
    description:
      'Landing page for amaquella-asesoria.com a spanish located lawyers firm. (closing in 2025)',
    technologies: ['React', 'SCSS', 'Figma'],
    liveLink: 'https://amaquella.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/Ama-Quella',
    imgSrc: '/img/amaquella.png',
    imgSrcWebp: '/img/amaquella.webp',
  },
  {
    id: ['website', 'next'],
    title: 'Therapist Dr. Nadia',
    description:
      "Holistic therapy landing page for a young female doctor in Cochabamba, built with Next and Scss. (She's choosing the domain)",
    technologies: [
      'Next',
      'Tailwind',
      'Tailwind animations',
    ],
    liveLink: 'https://dramedica-terapeuta.com/',
    codeLink: 'https://github.com/KurtGuardia/nadia-homsi',
    imgSrc: '/img/nadia.png',
  },
  {
    id: ['javascript'],
    title: 'Forkify',
    description:
      'JavaScript app connected to an API to search recipes, list ingredients and add them to shopping list',
    technologies: ['JavaScript', 'API', 'Netlify'],
    liveLink: 'https://forkify-kurt.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/forkify-v2',
    imgSrc: '/img/forkify.png',
    demo: true,
  },
  {
    id: ['javascript'],
    title: 'JavaScript - for fun',
    description:
      'Mini JavaScript projects like hangman, music player, typing speed, array methods and more ...',
    technologies: [
      'JavaScript',
      'API',
      '3rd party libraries',
    ],
    liveLink: 'https://javascript-for-fun.netlify.app/',
    codeLink:
      'https://github.com/KurtGuardia/20-Mini-JavaScript-projects',
    imgSrc: '/img/js-for-fun.jpg',
    demo: true,
  },
  {
    id: ['website'],
    title: 'Phi - Desarrollo Web',
    description:
      'Web site with Golden Ratio theme, done from the design, image editing and develop with advance SasS.',
    technologies: ['HTML', 'CSS', 'SaaS'],
    liveLink: 'https://phi-desarrollo.netlify.app/',
    codeLink:
      'https://github.com/KurtGuardia/Phi-Diseno-y-Desarrollo-Web',
    imgSrc: '/img/phi.jpg',
    demo: true,
  },
  {
    id: ['website', 'next'],
    title: 'Kurt Portafolio',
    description:
      'This portafolio website, done in Next.js & Typescript, with animations on Framer Motion and an elegant design done with Tailwind. For the dev you are looking for ;)',
    technologies: [
      'Next',
      'Typescript',
      'Framer Motion',
      'Tailwind',
    ],
    liveLink: 'https://kurtguardia.com/',
    codeLink:
      'https://github.com/KurtGuardia/Kurt-portfolio',
    imgSrc: '/img/kurt-web.png',
    demo: true,
  },
]

export function Projects() {
  const [filter, setFilter] = useState('all')
  const { ref: projectsRef, isInView } =
    useScrollVisibility({
      enterRatio: 0.5,
      exitRatio: 0.4,
    })

  const controls = isInView
    ? { opacity: 1, y: 0 }
    : { opacity: 0 }

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
  }
  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) =>
          project.id.includes(filter),
        )

  return (
    <section
      id='projects'
      ref={projectsRef}
      className='py-20 bg-gradient-to-br from-gray-900 to-black'
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className='flex flex-wrap justify-center mb-20 gap-y-8'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => handleFilterChange('all')}
            className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange('react')}
            className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            React
          </button>
          <button
            onClick={() => handleFilterChange('next')}
            className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Next
          </button>
          <button
            onClick={() => handleFilterChange('website')}
            className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Website
          </button>
          <button
            onClick={() => handleFilterChange('javascript')}
            className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            JavaScript
          </button>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{ scale: 1.05 }}
              className='animate-float'
            >
              <Card className='bg-gray-800 border-gray-700 overflow-hidden'>
                <CardHeader className='bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center'>
                  <CardTitle className='text-white'>
                    {project.title}
                  </CardTitle>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={300}
                    height={200}
                    className='h-auto max-w-xs'
                  />
                </CardHeader>
                <CardContent className='mt-4'>
                  <CardDescription className='text-gray-300 mb-4'>
                    {project.description}
                  </CardDescription>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className='bg-gray-700 text-cyan-400 text-xs px-2 py-1 rounded'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='flex justify-between'>
                  <Button
                    variant='outline'
                    size='sm'
                    asChild
                    className='bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  >
                    <a
                      href={project.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='mr-2 h-4 w-4' />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant='outline'
                    size='sm'
                    asChild
                    className='bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900'
                  >
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <ExternalLink className='mr-2 h-4 w-4' />
                      Live{project.demo && ' Demo'}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
