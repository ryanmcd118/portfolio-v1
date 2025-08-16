import { css } from 'styled-components';

const variables = css`
  :root {
    --lightest-navy: #233554;
    --slate: #8892b0;
    --lightest-slate: #ccd6f6;
    --green: #64ffda;
    --pink: #f57dff;
    --blue: #57cbff;
    --cream: #ffffff;
    --light-cream: #faf7f7;
    --light-strawberry: #eda8b4;
    --dull-strawberry: #f5f4f2;
    --light-brown: #b3aba2;
    --lighter-brown: #b2aca5;
    --dark-brown: #57534e;
    --dark-blue: #4bb3db;
    --soft-green: #81bf81;
    --soft-green-tint: rgba(129, 191, 129, 0.1);

    --primary-orange: #fa824c;
    --secondary-green: #629677;
    --secondary-light-green: #b4cfc0;
    --tertiary-purple: #330036;
    --dark-gray: #424242;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
