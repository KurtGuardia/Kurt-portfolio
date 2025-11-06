'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Particles from './Particles'
import Link from 'next/link'

export function Hero() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600/30 via-black to-indigo-600/30 animate-gradient' />

      <Particles />

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col md:gap-8 max-w-4xl mx-auto text-center'
        >
          <motion.h1
            className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent'
            style={{
              background:
                'linear-gradient(to right, #6a0dad, #e74c3c, #3498db)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              animation: 'gradientAnimation 7s infinite',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kurt Guardia
          </motion.h1>
          <motion.h2
            className='text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            JavaScript Developer
          </motion.h2>
          <motion.p
            className='text-lg md:text-3xl lg:text-4xl text-gray-300 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting modern web experiences with
            cutting-edge technologies
          </motion.p>
          <motion.div
            className='flex items-center justify-center md:gap-6 lg:gap-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href='#projects'
              className='flex items-center text-sm md:text-lg lg:text-xl rounded-full px-2 md:px-4 py-2 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 transform hover:scale-105 w-fit hover:from-blue-700 hover:to-cyan-500 hover:shadow-[0_20px_40px_rgba(37,99,235,0.45)]'
            >
              View Projects
              <ArrowRight className='ml-2 h-4 w-4 transform rotate-90' />
            </Link>
            <a
              href='/assets/CV Kurt.pdf'
              download
              className='bg-transparent text-white text-sm md:text-lg lg:text-xl px-4 py-2 rounded border-2 border-white/20 hover:border-white/50 transition-all duration-300 w-fit mx-4'
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className='w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2'>
          <motion.div
            className='w-1 h-1 rounded-full bg-white'
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
