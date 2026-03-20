import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledTestimonialsSection = styled.section`
  max-width: 1000px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  display: flex;
  flex-direction: column;
  background-color: var(--dull-strawberry);
  border-radius: 8px;
  padding: 28px;
  border-left: 3px solid transparent;
  transition: border-left 0.2s ease, transform 0.2s ease;

  &:hover {
    border-left: 3px solid var(--secondary-green);
    transform: translateY(-4px);
  }

  .quote-mark {
    color: var(--primary-orange);
    font-size: 48px;
    font-family: Georgia, serif;
    line-height: 1;
    margin-bottom: 8px;
  }

  .quote-text {
    color: var(--dark-brown);
    font-size: var(--fz-md);
    line-height: 1.6;
    flex: 1;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--light-brown);
    margin: 20px 0;
  }

  .attribution {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(98, 150, 119, 0.3);
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-weight: 600;
    font-size: var(--fz-sm);
    color: var(--dark-brown);
  }

  .title {
    font-size: var(--fz-xs);
    color: var(--light-brown);
    font-family: var(--font-mono);
  }
`;

const testimonials = [
  {
    quote:
      'Ryan is an incomparable manager and educator — the problem-solver that everyone wants on their team, the advocate that every mentee deserves. He is an organizational wizard: a source of stability and structure in a fast-paced environment, consistently setting clear expectations and keeping even the most complex work moving forward. I have seen him handle the most difficult of situations with finesse, confidence, clarity, and empathy. Ryan truly leads by example and makes even the darkest moments seem manageable and hopeful.',
    name: 'Carly Jackson',
    title: 'Senior Software Engineer, Skylight',
    img: null,
  },
  {
    quote:
      'There are so many qualities of Ryan\'s that show up in his work day after day, whether in 1:1 interactions or watching him lead a team. Ryan is consistent and steady in the face of competing priorities and urgent situations, always figuring out how to best prioritize tasks and creatively problem solve the tricky ones. His communication is thoughtful and clear, always with an eye toward empathy and inclusivity. He shows up every day with a seemingly endless well of energy and is always thorough — nothing slips through the cracks. Whichever teams throughout his career that are lucky enough to grab him will be rewarded tenfold.',
    name: 'Brianna Carney',
    title: 'Conference Programmer, SXSW',
    img: null,
  },
  {
    quote:
      'Ryan is an exemplary leader — curious, creative, communicative, and empathetic. The team he managed for 2 years was highly successful, and just as importantly, he helped every team member grow into a position of leadership. Ryan was the driving force behind much positive change, both throughout the organization and for the many engineers he mentored. He has a seemingly limitless supply of brilliant ideas, gratitude for others, self-awareness, and integrity. I feel incredibly lucky to have worked for such a great role model, and I recommend him in the strongest possible terms.',
    name: 'James Laff',
    title: 'Senior Software Engineer, Codesmith',
    img: null,
  },
];

const Testimonials = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledTestimonialsSection id="testimonials" ref={revealContainer}>
      <h2 className="numbered-heading">What People Say</h2>

      <StyledGrid>
        {testimonials.map(({ quote, name, title }, i) => (
          <StyledCard key={i}>
            <div className="quote-mark">&ldquo;</div>
            <p className="quote-text">{quote}</p>
            <div className="divider" />
            <div className="attribution">
              <div className="avatar">
                {i === 0 && (
                  <StaticImage
                    src="../../images/carly_jackson.jpeg"
                    width={80}
                    height={80}
                    quality={95}
                    layout="constrained"
                    alt="Carly Jackson"
                    imgStyle={{ borderRadius: '50%' }}
                  />
                )}
                {i === 1 && (
                  <StaticImage
                    src="../../images/brianna_carney.jpeg"
                    width={80}
                    height={80}
                    quality={95}
                    layout="constrained"
                    alt="Brianna Carney"
                    imgStyle={{ borderRadius: '50%' }}
                  />
                )}
                {i === 2 && (
                  <StaticImage
                    src="../../images/james_laff.jpeg"
                    width={80}
                    height={80}
                    quality={95}
                    layout="constrained"
                    alt="James Laff"
                    imgStyle={{ borderRadius: '50%' }}
                  />
                )}
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="title">{title}</span>
              </div>
            </div>
          </StyledCard>
        ))}
      </StyledGrid>
    </StyledTestimonialsSection>
  );
};

export default Testimonials;
