'use client'

import { motion } from 'framer-motion'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

const skills = [
  { name: 'JavaScript', level: 93 },
  { name: 'React', level: 90 },
  { name: 'HTML5', level: 93 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 70 },
  { name: 'CSS/SASS', level: 93 },
  { name: 'Git', level: 80 },
  { name: 'RESTful APIs', level: 80 },
  { name: 'Node.js', level: 70 },
  { name: 'GraphQL', level: 70 },
]

export function Skills() {
  const { ref: skillsRef, isInView } = useScrollVisibility({
    enterRatio: 0.6,
    exitRatio: 0.4,
  })

  return (
    <section
      id='skills'
      className='py-20 bg-gradient-to-br from-purple-900 via-black to-indigo-900'
      style={{
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 7s ease infinite',
      }}
      ref={skillsRef}
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0 }
          }
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className='bg-gray-800 rounded-lg p-4 shadow-lg'
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.1,
              }}
            >
              <h3 className='text-lg font-semibold mb-2 text-white'>
                {skill.name}
              </h3>
              <div className='h-4 bg-gray-700 rounded-full overflow-hidden'>
                <motion.div
                  className='h-full bg-gradient-to-r from-cyan-400 to-blue-500'
                  initial={{ width: 0 }}
                  animate={
                    isInView
                      ? { width: `${skill.level}%` }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
