'use client'

import { motion, useAnimation } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useState } from 'react';
import Image from 'next/image'

const projectsData = [
  {
    id: 'react',
    title: 'FinPal',
    description: 'Fintech app for business financial management, with darkmode and language selector',
    technologies: ['React', 'Redux', 'Firebase'],
    liveLink: 'https://finpal.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/Fin-Pal',
    imgSrc: '/img/finpal.png',
  },
  {
    id: 'react',
    title: 'Spotify Clone',
    description: 'Functional Spotify clone react app, with user authentication, firestore database and cloud storage',
    technologies: ['React', 'Redux', 'Firebase'],
    liveLink: 'https://spotify-clone-8a46d.web.app/',
    codeLink: 'https://github.com/KurtGuardia/Spotify-Clone',
    imgSrc: '/img/spotify-clone.png',
  },
  {
    id: 'mern',
    title: 'K-Shop e-Commerce',
    description: 'Fullstack app. A functional e-commerce built with MERN stack.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://k-shop-1-61803399.herokuapp.com/',
    codeLink: 'https://github.com/KurtGuardia/MERN-K-Shop',
    imgSrc: '/img/k-shop.jpg',
  },
  {
    id: 'website',
    title: 'Balance',
    description: 'Beautiful landing page for balancenutricionintegrativa.org a holistic nutricion service. Made with React and Scss.',
    technologies: ['React', 'SCSS', 'Figma'],
    liveLink: 'https://balancenutricionintegrativa.org',
    codeLink: 'https://github.com/KurtGuardia/balance',
    imgSrc: '/img/balance.png',
    imgSrcWebp: '/img/balance.webp',
  },
  {
    id: 'website',
    title: 'Amaquella',
    description: 'Landing page for amaquella-asesoria.com a spanish located lawyers firm.',
    technologies: ['React', 'SCSS', 'Figma'],
    liveLink: 'https://www.amaquella-asesoria.com',
    codeLink: 'https://github.com/KurtGuardia/Ama-Quella',
    imgSrc: '/img/amaquella.png',
    imgSrcWebp: '/img/amaquella.webp',
  },
  {
    id: 'website',
    title: 'Phi - Desarrollo Web',
    description: 'Web site with Golden Ratio theme, done from the design, image editing and develop with advance SasS.',
    technologies: ['HTML', 'CSS', 'SaaS'],
    liveLink: 'https://phi-desarrollo.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/Phi-Diseno-y-Desarrollo-Web',
    imgSrc: '/img/phi.jpg',
  },
  {
    id: 'javascript',
    title: 'Forkify',
    description: 'JavaScript app connected to an API to search recipes, list ingredients and add them to shopping list',
    technologies: ['JavaScript', 'API', 'Netlify'],
    liveLink: 'https://forkify-kurt.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/forkify-v2',
    imgSrc: '/img/forkify.png',
  },
  {
    id: 'javascript',
    title: 'JavaScript - for fun',
    description: 'Mini JavaScript projects like hangman, music player, typing speed, array methods and more ...',
    technologies: ['JavaScript', 'API', '3rd party libraries'],
    liveLink: 'https://javascript-for-fun.netlify.app/',
    codeLink: 'https://github.com/KurtGuardia/20-Mini-JavaScript-projects',
    imgSrc: '/img/js-for-fun.jpg',
  },
  {
    id: 'website',
    title: 'Ciner',
    description: 'Landing page for ciner.org renewable energy data center, build with advance techniques',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ciner.org',
    codeLink: 'https://github.com/KurtGuardia/Ciner',
    imgSrc: '/img/ciner.jpg',
  },
];

export function Projects() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all'); // State for the selected filter
  const timeoutId = setTimeout(() => setIsVisible(true), 1000);

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  // Function to handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtered projects based on the selected filter
  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(project => project.id === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          whileInView={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="flex flex-wrap justify-center mb-20 gap-y-8">
          <button onClick={() => handleFilterChange('all')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">All</button>
          <button onClick={() => handleFilterChange('react')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">React</button>
          <button onClick={() => handleFilterChange('mern')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">MERN</button>
          <button onClick={() => handleFilterChange('website')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Website</button>
          <button onClick={() => handleFilterChange('javascript')} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">JavaScript</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              whileInView={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="animate-float"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 flex flex-col items-center">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-auto max-w-xs"
                  />
                </CardHeader>
                <CardContent className="mt-4">
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-700 text-cyan-400 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
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
