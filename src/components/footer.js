import React from 'react';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';
import ScrollToTop from './scrollToTop';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 10px;
    color: var(--soft-green);
  }

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--dark-brown);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  #Credit {
    padding: 0.3rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledSocialLinks>
      <ul>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </ul>
    </StyledSocialLinks>

    <ScrollToTop className="scrollToTop" />

    <StyledCredit tabindex="-1">
      <div id="Credit">Copyright © 2026 Ryan McDaniel.</div>
      <div>
        {' '}
        <a href="https://github.com/ryanmcd118/folio-v1/">Built with Gatsby. </a> Inspired by{' '}
        <a href="https://brittanychiang.com">Brittany Chiang</a>
      </div>
    </StyledCredit>
  </StyledFooter>
);

export default Footer;
