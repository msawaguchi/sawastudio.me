import styled from 'styled-components'
import bgHero from '../../../../assets/images/backgrounds/bg-hero.webp'

export const HeroContainer = styled.section`
  width: 100%;
  height: 100vh;
  /* background: url(${bgHero}) no-repeat center center; */
  background-size: cover;

  @media (max-width: 740px) {
    height: auto;
  }
`
export const HeroContent = styled.div`
  width: 80rem;
  height: 36rem;
  margin: 0 auto;

  display: flex;
  gap: 6px;

  .mosaic:first-child {
    flex: 2;
  }

  .mosaic:nth-child(2) {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 6px;

    .mosaic-child {
      display: flex;
      flex-direction: row;
      gap: 6px;
    }

    .mosaic-child:nth-child(1) {
      flex: 1.5;
    }

    .mosaic-child:nth-child(2) {
      flex: 1;

      div:nth-child(1) {
        flex: 2;
      }

      div:nth-child(2) {
        flex: 3;
      }
    }
  }

  .mosaic:nth-child(3) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .mosaic-child {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 6px;
  }

  @media (max-width: 430px) {
    .mosaic:nth-child(2) {
      .mosaic-child:nth-child(2) {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 900px) {
    .mosaic-menu {
      display: none;
    }
  }

  @media (max-width: 740px) {
    flex-direction: column;
    height: -webkit-fill-available;
  }
`
export const HeroContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(142, 91, 255, 0.1);
  border: 1px solid #ff56b1;
  border-radius: 8px;
  padding: 1rem;
  box-shadow:
    0px 0px 15px rgba(255, 86, 177, 0.5),
    inset 0px 0px 15px rgba(255, 86, 177, 0.5);

  &:hover {
    box-shadow:
      0px 0px 25px rgba(255, 86, 177, 0.5),
      inset 0px 0px 25px rgba(255, 86, 177, 0.5);
  }
`

export const HeroAboutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    text-shadow: 0 0 6px rgb(225, 225, 225, 0.5);
  }

  img {
    width: 12rem;
  }

  p {
    text-align: center;
  }

  ul {
    list-style-type: none;

    li {
      margin-top: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: bold;

      svg {
        color: #56f5ff;
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 820px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`
export const HeroMidSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title-glitch {
    margin: 0 auto;
  }

  .socials {
    height: 2rem;
  }

  img {
    margin-top: 2rem;
    width: 90%;
  }

  div {
    display: flex;

    a {
    }
  }

  @media (max-width: 740px) {
    .socials {
      height: auto;
    }
  }
`
export const HeroTechsSection = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  div {
    width: 100%;
    text-align: center;
  }

  svg {
    color: #56f5ff;
    font-size: 1.7rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

export const HeroLastPostSection = styled.div`
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4 {
      color: #56f5ff;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }
`
export const HeroMenuButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  color: #dadada;
  text-transform: lowercase;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 0 0 1px #dadada;

  svg {
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }

  &:hover {
    cursor: pointer;
    color: white;
    text-shadow: 0 0 8px #fff;
  }
`
