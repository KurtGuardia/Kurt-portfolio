'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Send } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

export function Contact() {
  const [showPopup, setShowPopup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleFormSubmit = async (
    event: FormEvent<HTMLFormElement>,
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

    setIsSubmitting(true)
    setErrors({
      name: '',
      email: '',
      message: '',
    })

    try {
      const formData = new FormData(event.currentTarget)
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
      await fetch('/form-index.html', {
        method: 'POST',
        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          name,
          email,
          message,
        }).toString(),
      })
        .then(() =>
          console.log('Form successfully submitted'),
        )
        .catch((error) => alert(error))

      setShowPopup(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error submitting contact form', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id='contact'
      className='py-20 flex flex-col items-center'
      ref={contactRef}
    >
      <div className='bg-gray-800 p-10 rounded-lg shadow-lg w-full md:max-w-[500px] max-w-[300px] mx-auto z-10'>
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
            noValidate
            className='space-y-4 flex flex-col'
            onSubmit={handleFormSubmit}
            action='/'
          >
            <input
              type='hidden'
              name='form-name'
              value='contact'
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
              className={`w-full ${
                isSubmitting
                  ? 'bg-purple-900 hover:bg-purple-800'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded-md p-4 transition flex items-center justify-center`}
              disabled={isSubmitting}
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
