'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 backdrop-blur-sm ${isScrolled && !/(Mobi|Android|iPh|iPad|iPhone)/i.test(navigator.userAgent) ? 'bg-black/80' : 'bg-transparent backdrop-blur-none'} ${isOpen ? 'backdrop-blur-none md:backdrop-blur-sm' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button onClick={toggleMenu} className="text-white fixed top-4 right-4 z-50">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav className={`container mx-auto px-4 py-4 ${isOpen ? 'fixed top-0 left-0 w-full h-screen' : ''}`}>
        <div className="flex items-center justify-between">
          <motion.div
            style={{ zIndex: 1000 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
          >
            <Link href="/" className="text-2xl font-bold">
              KG
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <a href="/assets/CV Kurt.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-fit-content">Download CV</a>
          </div>
        </div>

        <div className={`fixed inset-0 w-screen h-screen transition-transform duration-300 ${isOpen ? 'bg-black/80 backdrop-blur-sm z-50' : 'hidden'} flex flex-col items-center justify-center md:hidden`}>
          {['About', 'Projects', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white text-2xl py-4 hover:text-gray-300 transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
          <a href="/assets/CV Kurt.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-fit-content">Download CV</a>
        </div>
      </nav>
    </motion.header>
  )
}
