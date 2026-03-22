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
    margin-bottom: 0;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 8px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      color: var(--accent-blue);
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
const StyledPhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    gap: 30px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

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
      mix-blend-mode: normal;
      filter: none;
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
    'Product strategy & roadmapping',
    'Cross-functional execution',
    'Stakeholder management',
    'Agentic AI workflows',
    'User research',
    'REST APIs',
    'Agile / Scrum',
    'SQL / PostgreSQL',
    'Technical documentation',
    'LLM product integration',
    'Data analysis',
    'Technical writing',
    'Full-stack development (React, Node, TypeScript)',
    'CI/CD automation & testing workflows',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              {' '}
              Hi, I’m Ryan! I’m a product manager, a software engineer, and, when I can get away
              from my desk, a scuba diver.
            </p>

            <p>
              My experience covers a lot of ground: I've owned product initiatives at{' '}
              <a href="https://www.eaton.com/us/en-us.html">Eaton</a>, a $27B global enterprise,
              coordinating across firmware, hardware, and software teams. I spent several years at{' '}
              <a href="https://www.codesmith.io/">Codesmith</a>, a venture-backed edtech startup,
              leading engineering teams and teaching full-stack development to hundreds of
              engineers. And I founded <a href="https://diveiq.io/">Dive IQ</a>, an AI-assisted
              platform for the scuba diving community that I've taken from zero to launch, directing
              a multi-agent AI development workflow and owning the full product lifecycle on my own.
            </p>

            <p>
              That last one matters to me in a specific way, both personally and professionally.
              Building DiveIQ taught me what it actually means to ship a product, not just
              contribute to one. The discovery, the tradeoffs, the unglamorous middle stretch where
              nothing is working yet... I've lived all of it. I use agentic AI workflows as a core
              part of how I build, and the more I do, the more I can see that it's an essential
              component, not a nice-to-have, for modern PMs.
            </p>

            <p>
              If I'm not at work, I'm probably underwater, chasing my dog Finn, pursuing my undying
              love for pineapple pizza, or slowly working my way through a bedside table full of
              books.
            </p>

            <p id="my-tech">Skills & experience:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPhotosContainer>
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

          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/diving.png"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Diving photo"
              />
            </div>
          </StyledPic>
        </StyledPhotosContainer>
      </div>
    </StyledAboutSection>
  );
};

export default About;
