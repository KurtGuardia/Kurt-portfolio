'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 200) {
          setIsMounted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="py-20 flex flex-col items-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="space-y-6 flex flex-col">
            <Input type="text" placeholder="Your Name" className="border rounded-md p-4" />
            <Input type="email" placeholder="Your Email" className="border rounded-md p-4" />
            <Textarea placeholder="Your Message" rows={4} className="border rounded-md p-4" />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-4 transition flex items-center justify-center">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}