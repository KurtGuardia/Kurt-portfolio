'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu } from 'lucide-react'
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

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
            <a href="/assets/CV Kurt.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download CV</a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden mt-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <a href="/assets/CV Kurt.pdf" download className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">Download CV</a>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
