'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CV() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const cvSection = document.getElementById('cv')
      if (cvSection) {
        const rect = cvSection.getBoundingClientRect()
        if (rect.top < window.innerHeight - 200) {
          setIsMounted(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      id='cv'
      className='py-20 bg-gradient-to-br from-black to-gray-800 flex flex-col items-center justify-center'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isMounted ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='text-center'
      >
        <Button
          asChild
          className='flex items-center bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-700 hover:to-cyan-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 w-fit'
        >
          <a
            href='/assets/CV Kurt.pdf'
            download='CV Kurt.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Download className='mr-3 h-7 w-7' />
            <p className='text-2xl'> Download CV</p>
          </a>
        </Button>
      </motion.div>
    </section>
  )
}
