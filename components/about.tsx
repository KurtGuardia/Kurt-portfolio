'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import Image from 'next/image';
import kurtImage from '@/public/img/kurt.JPG';
import styled from 'styled-components';
import { FaDesktop, FaRocket, FaLightbulb, FaTachometerAlt } from 'react-icons/fa';

const SectionAbout = styled.section`
  background: linear-gradient(to right, #2C1C18, #4C3A2F);
  padding: 2rem;
  color: #fff;
  padding: 6rem 0;
  background-size: 400% 400%;
  animation: gradientAnimation 7s ease infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Img = styled(Image)`
  height: 100%;
  backface-visibility: hidden;
  transition: all 0.5s;
  transform: scale(1.15);
`;

const Me = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 20rem;
    height: 20rem;
  }

  &:hover ${Img} {
    transform: scale(1);
    filter: blur(5px);
  }
`;

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
`;

const Content = styled.div`
  width: 90%;
  max-width: 100rem;
  margin: 5rem auto;

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }

  p {
    font-size: 1.5rem;
    color: #grey-light-2;
    text-align: center;
    line-height: 1.3;
    font-weight: 100;
  }
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  color: #fff;
  margin: 0.5rem 0;
`;

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
`;

const FeatureText = styled.p`
  font-size: 1.2rem;
  color: #grey-light-2;
  text-align: center;
  line-height: 1.3;
  font-weight: 100;
`;

export function About() {
  const controlsTitle = useAnimation();
  const controlsImage = useAnimation();
  const controlsFeatures = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Adjust the threshold for visibility
        if (rect.top < window.innerHeight - 500 && rect.bottom > 500) {

          // Start animations for individual components
          controlsTitle.start({ opacity: 1, y: 0 });
          controlsImage.start({ opacity: 1, y: 0 });
          controlsFeatures.start({ opacity: 1, y: 0 });
        } else {

          // Reset animations when not visible
          controlsTitle.start({ opacity: 0, y: 20 });
          controlsImage.start({ opacity: 0, y: 20 });
          controlsFeatures.start({ opacity: 0, y: 20 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controlsTitle, controlsImage, controlsFeatures]);

  return (
    <SectionAbout id="about">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          initial={{ opacity: 0 }}
          animate={controlsTitle}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <Me>
          <motion.figure
            className="section-about__me"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsImage}
            transition={{ duration: 0.5 }}
          >
            <Img
              src={kurtImage}
              alt="kurt"
              width={500}
              height={500}
              priority
            />
            <Caption className="section-about__caption">
              LET'S WORK TOGETHER
            </Caption>
          </motion.figure>
        </Me>

        <Content>
          <motion.p
            className="section-about__content"
            initial={{ opacity: 0, x: -50 }}
            animate={controlsFeatures}
            transition={{ duration: 0.5 }}
          >
            Hard-working JavaScript Developer with a flair
            for creating elegant solutions in the least
            amount of time. Passionate about creating
            user-friendly applications and looking
            for growth opportunities to try new technologies
            and grow my technical skill set in a team-based
            atmosphere.
          </motion.p>

          <Features>
            <Feature>
              <div className="feature__container">
                <FeatureIcon>
                  <FaDesktop />
                </FeatureIcon>
              </div>
              <FeatureTitle>Responsive</FeatureTitle>
              <FeatureText>
                My layouts will work on any device, big or small
              </FeatureText>
            </Feature>

            <Feature>
              <div className="feature__container">
                <FeatureIcon>
                  <FaTachometerAlt />
                </FeatureIcon>
              </div>
              <FeatureTitle>Fast</FeatureTitle>
              <FeatureText>
                Fast load, performance optimization my highest priority
              </FeatureText>
            </Feature>

            <Feature>
              <div className="feature__container">
                <FeatureIcon>
                  <FaLightbulb />
                </FeatureIcon>
              </div>
              <FeatureTitle>Intuitive</FeatureTitle>
              <FeatureText>
                Intuitive UX/UI design for the best experience
              </FeatureText>
            </Feature>

            <Feature>
              <div className="feature__container">
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
              </div>
              <FeatureTitle>Dynamic</FeatureTitle>
              <FeatureText>
                All projects will feel alive, websites don’t have to be static
              </FeatureText>
            </Feature>
          </Features>
        </Content>
      </div>
    </SectionAbout>
  );
}
