import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  #my-tech {
    color: var(--primary-orange);
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      color: var(--secondary-green);
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--primary-orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-strawberry);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--secondary-light-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-orange);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript/TypeScript',
    'HTML/CSS',
    'Node.js/Express',
    'APIs (REST, GraphQL)',
    'React',
    'Next.js',
    'Vercel',
    'Docker',
    'CI/CD (GitHub Actions)',
    'PostgreSQL / MongoDB',
    'State management (Redux, Zustand)',
    'Testing (Jest, RTL, Cypress)',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}
              Hi, I’m Ryan! I’m an engineer, a teacher, and, when I can get away from my desk, a
              scuba diver. My path into tech has never been linear, and for me that’s what has
              always made it interesting.
            </p>

            <p>
              My interest in technology started the way a lot of millennial stories probably do:
              breaking the family computer and trying to fix it before anyone noticed. That early
              curiosity carried me through <a href="https://smith.edu/">Smith College</a>, where I
              learned to think critically and communicate clearly, and later to{' '}
              <a href="https://www.codesmith.io/">Codesmith</a>, where I grew into a Senior Software
              Engineer and Lead Instructor.
            </p>

            <p>
              At Codesmith, I discovered how much I loved mentoring. While leading the team at the
              flagship NYC campus, I taught everything from closure and recursion to Node and system
              design. Teaching thousands of engineers gave me a front-row seat to the way people
              learn, struggle, and break through with programming. That experience shaped how I
              approach engineering today: not just writing code, but building systems that empower
              other humans.
            </p>

            <p>
              Since then, I’ve led engineering teams, helped guide the next generation of network
              management tools at <a href="https://www.eaton.com/us/en-us.html">Eaton</a>, and
              launched <a href="https://diveiq.io/">Dive IQ</a>, a project close to my heart that
              merges my love of scuba diving with my love of software. Whether I’m knee-deep in
              TypeScript or testing out new dive gear, I’m always chasing a mix of curiosity and
              craftsmanship.
            </p>

            <p id="my-tech">Here's what I've been building with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
