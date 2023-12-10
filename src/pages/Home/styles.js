import styled from 'styled-components'

import bgHero from '../../assets/images/backgrounds/bg-hero.webp'

export const Main = styled.main`
  width: 100%;

  background: url(${bgHero}) no-repeat center center;
  background-size: cover;

  .nav {
    width: 80rem;
    margin: 0 auto;
    display: flex;
    justify-content: end;
  }

  .hero-mask {
    height: 100%;
    width: 100%;
    background: rgba(2, 28, 38, 0.7);

    display: flex;
    align-items: center;
  }

  @media (max-width: 1320px) {
    .nav {
      width: auto;
      padding-right: 2rem;
    }
  }

  @media (max-width: 820px) {
    .nav {
      width: 100%;
      justify-content: center;
      padding-right: 0rem;
    }
  }
`
