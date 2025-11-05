'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Download } from 'lucide-react'
import { useScrollVisibility } from 'hooks/useScrollVisibility'

export function CV() {
  const { ref: CVRef, isInView } = useScrollVisibility({
    enterRatio: 0.7,
    exitRatio: 0.4,
  })

  return (
    <section
      id='cv'
      className='py-20 bg-gradient-to-br from-black to-gray-800 flex flex-col items-center justify-center'
      ref={CVRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView ? { opacity: 1, y: 0 } : { opacity: 0 }
        }
        transition={{ duration: 1 }}
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
