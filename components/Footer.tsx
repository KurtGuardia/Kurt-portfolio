'use client'

import React from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-8 rounded-tl-3xl rounded-tr-3xl mx-6 md:mx-10 flex flex-col md:flex-row items-center justify-between w-11/12 z-10'>
      <p className='text-sm text-center md:text-left'>
        &copy; {new Date().getFullYear()} Kurt Guardia.
        <br /> All rights reserved.
      </p>
      <div className='flex flex-grow justify-center items-center mt-4 md:mt-0'>
        <a href='#' onClick={() => window.scrollTo(0, 0)}>
          <h1
            className='text-8xl font-bold bg-clip-text text-transparent'
            style={{
              background:
                'linear-gradient(to right, #6a0dad, #e74c3c, #3498db)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              animation: 'gradientAnimation 7s infinite',
            }}
          >
            KG
          </h1>
        </a>
      </div>
      <div className='flex space-x-4 mt-4 md:mt-0'>
        <a
          href='https://www.linkedin.com/in/kurt-guardia-creative'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='social-icon'
          style={{ animationDelay: '0.1s' }}
        >
          <FaLinkedin className='h-6 w-6' />
        </a>
        <a
          href='https://github.com/KurtGuardia'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='social-icon'
          style={{ animationDelay: '0.3s' }}
        >
          <FaGithub className='h-6 w-6' />
        </a>
        <a
          href='https://wa.me/+34685360189?text=Hey%20Kurt%2C%20I%20'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='WhatsApp'
          className='social-icon'
          style={{ animationDelay: '0.7s' }}
        >
          <FaWhatsapp className='h-6 w-6' />
        </a>
        <a
          href='mailto:kurtguardia@gmail.com?subject=Message%20from%20the%20landing%20page&body=Hey%20Kurt%2C%20I%20'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Email'
          className='social-icon'
          style={{ animationDelay: '1s' }}
        >
          <FaEnvelope className='h-6 w-6' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
