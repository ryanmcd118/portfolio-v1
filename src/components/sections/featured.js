import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
`;

const StyledProject = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:not(:last-of-type) {
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 35px;
    }

    @media (max-width: 480px) {
      margin-bottom: 15px;
    }
  }

  &:nth-of-type(even) {
    .project-image {
      order: -1;

      @media (max-width: 768px) {
        order: -1;
      }
    }
  }

  &:nth-of-type(odd) {
    .project-image {
      order: 1;

      @media (max-width: 768px) {
        order: -1;
      }
    }
  }

  .project-content {
    @media (max-width: 480px) {
      padding: 0 5px;
    }
  }

  .project-overline {
    margin: 0 0 10px;
    color: var(--primary-orange);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .project-title {
    color: var(--secondary-green);
    font-size: clamp(24px, 5vw, 28px);
    margin: 0 0 20px;

    a {
      color: inherit;
      transition: var(--transition);

      &:hover {
        color: var(--primary-orange);
      }
    }
  }

  .project-description {
    padding: 24px;
    border-radius: 4px;
    background-color: var(--dull-strawberry);
    color: var(--dark-brown);
    font-size: var(--fz-lg);

    @media (max-width: 480px) {
      padding: 18px;
      font-size: var(--fz-md);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--primary-orange);
      font-weight: normal;
    }
  }

  .project-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin: 15px 0 5px;
    display: inline-block;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 15px 5px 0;
      color: var(--accent-blue);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--dark-brown);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    border-radius: 4px;
    overflow: hidden;

    .img {
      border-radius: 4px;
      display: block;
    }

    .image-placeholder {
      width: 100%;
      padding-bottom: 60%;
      background-color: var(--dull-strawberry);
      border-radius: 4px;
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
              medium
              buttonLabel
              buttonUrl
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Work
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover, medium, buttonLabel, buttonUrl } =
              frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>

                  <h3 className="project-title">
                    {external ? <a href={external}>{title}</a> : <span>{title}</span>}
                  </h3>

                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

                  {buttonLabel && buttonUrl && (
                    <a
                      className="project-button"
                      href={buttonUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      {buttonLabel}
                    </a>
                  )}

                  {tech.length && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {medium && (
                      <a href={medium} aria-label="Medium">
                        <Icon name="Medium" />
                      </a>
                    )}
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {external && !medium && (
                      <a href={external} aria-label="External Link" className="external">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-image">
                  {image ? (
                    <GatsbyImage image={image} alt={title} className="img" />
                  ) : (
                    <div className="image-placeholder" />
                  )}
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
