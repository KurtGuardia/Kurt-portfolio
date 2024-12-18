'use client'

import React, { useState, useEffect, JSX } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import Particles from './Particles';
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-black to-indigo-600/30 animate-gradient" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(to right, #6a0dad, #e74c3c, #3498db)',
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            JavaScript Developer
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting modern web experiences with cutting-edge technologies
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#projects"
              className="flex items-center rounded-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md shadow-cyan-500/50"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            className="w-1 h-1 rounded-full bg-white"
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
