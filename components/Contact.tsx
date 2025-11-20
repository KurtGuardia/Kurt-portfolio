'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import PrismaticBurst from './ui/PrismaticBurst'
import Footer from './Footer'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { ref: contactRef, isInView } =
    useScrollVisibility()

  const validateForm = () => {
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    const trimmedMessage = message.trim()
    const validationErrors = {
      name: '',
      email: '',
      message: '',
    }

    if (!trimmedName) {
      validationErrors.name = 'Name is required.'
    }

    if (!trimmedEmail) {
      validationErrors.email = 'Email is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      validationErrors.email = 'Please enter a valid email.'
    }

    if (!trimmedMessage) {
      validationErrors.message =
        "Come'on, send me a message :)"
    }

    return validationErrors
  }

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const validationErrors = validateForm()
    const hasErrors = Object.values(validationErrors).some(
      Boolean,
    )

    if (hasErrors) {
      setErrors(validationErrors)
      return
    }

    setErrors({ name: '', email: '', message: '' })

    formRef.current?.submit()
    setTimeout(() => {
      window.location.href = '/thank-you.html'
    }, 100)
  }

  const controls = isInView
    ? { opacity: 1, y: 0 }
    : { opacity: 0 }

  return (
    <section
      id='contact'
      className='flex flex-col items-center'
      ref={contactRef}
      style={{
        width: '100%',
        // height: '90%',
        position: 'relative',
      }}
    >
      <PrismaticBurst
        animationType='rotate3d'
        intensity={3}
        speed={1}
        distort={0.5}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={0}
        mixBlendMode='lighten'
        colors={['#c9024e', '#3c2aff', '#ffffff']}
      />

      <div className='bg-gray-800 p-10 rounded-lg shadow-lg w-full md:max-w-[500px] max-w-[300px] mx-auto z-10 my-20'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <form
            ref={formRef}
            name='contact'
            method='POST'
            action='/'
            data-netlify='true'
            netlify-honeypot='bot-field'
            noValidate
            className='space-y-4 flex flex-col'
            onSubmit={handleSubmit}
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
            />
            <input
              type='hidden'
              name='redirect'
              value='/thank-you.html'
            />

            <div style={{ display: 'none' }}>
              <label>
                Don’t fill this out:
                <input name='bot-field' />
              </label>
            </div>

            <Input
              type='text'
              placeholder='Your Name'
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? 'name-error' : undefined
              }
            />
            {errors.name && (
              <p
                id='name-error'
                className='text-red-500 text-sm'
              >
                {errors.name}
              </p>
            )}

            <Input
              type='email'
              placeholder='Your Email'
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? 'email-error' : undefined
              }
            />
            {errors.email && (
              <p
                id='email-error'
                className='text-red-500 text-sm'
              >
                {errors.email}
              </p>
            )}

            <Textarea
              placeholder='Your Message'
              rows={4}
              className='border rounded-md p-4 bg-gray-200 text-black'
              name='message'
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? 'message-error' : undefined
              }
            />
            {errors.message && (
              <p
                id='message-error'
                className='text-red-500 text-sm'
              >
                {errors.message}
              </p>
            )}

            <Button
              type='submit'
              className='w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md p-4 transition flex items-center justify-center'
            >
              <Send className='mr-2 h-4 w-4' /> Send Message
            </Button>
          </form>
        </motion.div>
      </div>

      <Footer />
    </section>
  )
}
