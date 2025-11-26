'use client'

import { motion } from 'framer-motion'
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
import { useState } from 'react'
import Image from 'next/image'
import { useScrollVisibility } from '../hooks/useScrollVisibility'
import { projectsData } from '../data/projects'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'Next', value: 'next' },
  { label: 'JavaScript', value: 'javaScript' },
  { label: 'Webiste', value: 'webiste' },
  { label: 'AI', value: 'AI' },
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
          {filters.map((filter) => (
            <button
              onClick={() =>
                handleFilterChange(filter.value)
              }
              className='mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
              {filter.label}
            </button>
          ))}
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
