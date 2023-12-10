import styled from 'styled-components'
import bgHero from '../../../../assets/images/backgrounds/bg-hero.webp'

export const ProjectsContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${bgHero}) no-repeat center center;
  background-size: cover;

  @media (max-width: 820px) {
    height: auto;
  }
`
export const ProjectsContent = styled.div`
  width: 80rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
  padding-bottom: 4.5rem;

  strong {
    padding: 4rem 0 2rem 0rem;
    color: white;
    margin: 0 auto;
  }

  button {
    margin: 0 auto;
    width: 20rem;
  }

  @media (max-width: 430px) {
    button {
      width: 80%;
    }
  }

  @media (max-width: 820px) {
    height: auto;
  }
`
export const ProjectsList = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 2.5rem;

  .project-card {
    min-height: 26rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;

    img {
      width: 100%;
      border-radius: 6px;
    }

    h4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-weight: bold;
    }

    span {
      color: white;
    }

    svg {
      font-size: 1.65rem;
      color: white;
      margin-left: 6px;

      &:hover {
        cursor: pointer;
        filter: drop-shadow(1px 1px 8px rgba(186 255 255 / 0.8));
      }
    }

    @media (max-width: 430px) {
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 1074px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
