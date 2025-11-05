'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Send } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useScrollVisibility } from 'hooks/useScrollVisibility'

export function Contact() {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref: constactRef, isInView } =
    useScrollVisibility({
      enterRatio: 0.6,
    })
  console.log('🚀 ~ Contact ~ isInView:', isInView)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(event.target)
    const urlSearchParams = new URLSearchParams()
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        urlSearchParams.append(key, value)
      } else {
        console.error(
          `Unexpected type for ${key}: ${typeof value}`,
        )
      }
    })
    await fetch('/__forms.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlSearchParams,
    })

    setShowPopup(true)
    setName('')
    setEmail('')
    setMessage('')
    setIsSubmitting(false)
  }

  return (
    <section
      id='contact'
      className='py-20 flex flex-col items-center'
      ref={constactRef}
    >
      <div className='bg-gray-800 p-10 rounded-lg shadow-lg w-full md:max-w-[500px] max-w-[300px] mx-auto relative z-10'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0 }
          }
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0 }
          }
          transition={{ duration: 1 }}
        >
          <form
            name='contact'
            method='POST'
            data-netlify='true'
            netlify-honeypot='bot-field'
            className='space-y-6 flex flex-col'
            onSubmit={handleFormSubmit}
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
            />
            <Input
              type='text'
              placeholder='Your Name'
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type='email'
              placeholder='Your Email'
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder='Your Message'
              rows={4}
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              type='submit'
              className={`w-full ${
                isSubmitting
                  ? 'bg-purple-900 hover:bg-purple-800'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded-md p-4 transition flex items-center justify-center`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className='mr-2 h-4 w-4' /> Send
                  Message
                </>
              )}
            </Button>
          </form>
          {showPopup && (
            <div className='mt-4 p-2 bg-green-500 text-white font-bold rounded-md text-center'>
              Thank you for your message!
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
