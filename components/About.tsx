'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import kurtImage from '@/public/img/kurt.JPG'
import styled from 'styled-components'
import {
  FaDesktop,
  FaRocket,
  FaLightbulb,
  FaTachometerAlt,
} from 'react-icons/fa'
import { useScrollVisibility } from '../hooks/useScrollVisibility'

const SectionAbout = styled.section`
  background: linear-gradient(to right, #222, #555, #777);
  padding: 2rem;
  color: #fff;
  padding: 6rem 0;
  background-size: 400% 400%;
  animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Img = styled(Image)`
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform: scale(1.15);
`

const Me = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 13rem;
    height: 13rem;
  }

  &:hover ${Img} {
    transform: scale(1);
    filter: blur(5px);
  }
`

const Caption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
  opacity: 0;
  transition: all 0.3s;
  backface-visibility: hidden;

  ${Me}:hover & {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const Content = styled.div`
  max-width: 100rem;
  margin: 5rem auto;

  @media only screen and (max-width: 1024px) {
    margin: 2rem 0;
  }

  & > p {
    font-size: 2rem;
    color: white;
    text-align: center;
    line-height: 1.3;
    font-weight: 300;

    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

const Features = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  gap: 32px;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }
`

const FeatureIcon = styled.div`
  font-size: 3rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  color: #fff;
  margin: 0.5rem 0;
  @media only screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const FeatureText = styled.p`
  font-size: 1.2rem;
  color: whitesmoke;
  text-align: center;
  line-height: 1.3;
  font-weight: 100;
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-7px);

    ${FeatureIcon} {
      color: #ffcc00;
    }

    ${FeatureTitle} {
      color: #ffcc00;
    }
  }
`

const MotionFeature = motion(Feature)

export function About() {
  const { ref: aboutRef, isInView } = useScrollVisibility()

  const controls = isInView
    ? { opacity: 1, y: 0 }
    : { opacity: 0 }

  return (
    <SectionAbout id='about' ref={aboutRef}>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600'
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <Me>
          <motion.figure
            className='section-about__me'
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <Img
              src={kurtImage}
              alt='kurt'
              width={500}
              height={500}
              priority
            />
            <Caption className='section-about__caption'>
              LET'S WORK TOGETHER
            </Caption>
          </motion.figure>
        </Me>

        <Content className='flex flex-col items-center'>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            Hard-working JavaScript Developer with a flair
            for creating elegant solutions in the least
            amount of time. Passionate about creating
            user-friendly applications and looking for
            growth opportunities to try new technologies and
            grow my technical skill set in a team-based
            atmosphere.
          </motion.p>

          <Features>
            <MotionFeature
              initial={{ opacity: 0, y: 150 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon>
                <FaDesktop />
              </FeatureIcon>
              <FeatureTitle>Responsive</FeatureTitle>
              <FeatureText>
                My layouts will work on any device, big or
                small
              </FeatureText>
            </MotionFeature>

            <MotionFeature
              initial={{ opacity: 0, y: 150 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon>
                <FaTachometerAlt />
              </FeatureIcon>
              <FeatureTitle>Fast</FeatureTitle>
              <FeatureText>
                Fast load, performance optimization my
                highest priority
              </FeatureText>
            </MotionFeature>

            <MotionFeature
              initial={{ opacity: 0, y: 150 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon>
                <FaLightbulb />
              </FeatureIcon>
              <FeatureTitle>Intuitive</FeatureTitle>
              <FeatureText>
                Intuitive UX/UI design for the best
                experience
              </FeatureText>
            </MotionFeature>

            <MotionFeature
              initial={{ opacity: 0, y: 150 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              <FeatureIcon>
                <FaRocket />
              </FeatureIcon>
              <FeatureTitle>Dynamic</FeatureTitle>
              <FeatureText>
                All projects will feel alive, websites don’t
                have to be static
              </FeatureText>
            </MotionFeature>
          </Features>
        </Content>
      </div>
    </SectionAbout>
  )
}
