import React, { useState, useEffect, JSX } from 'react'
import { motion } from 'framer-motion'

const Particles = () => {
  const [particles, setParticles] = useState<JSX.Element[]>(
    [],
  )

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [...Array(50)].map((_, i) => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        const scale = Math.random() * 0.5 + 0.5
        const duration = Math.random() * 10 + 10
        return (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full'
            initial={{ x, y, scale }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        )
      })
      setParticles(newParticles)
    }

    if (typeof window !== 'undefined') {
      generateParticles()
      window.addEventListener('resize', generateParticles)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener(
          'resize',
          generateParticles,
        )
      }
    }
  }, [])

  return <div className='absolute inset-0'>{particles}</div>
}

export default Particles
