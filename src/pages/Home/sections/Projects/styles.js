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

export const ProjectsSawaStudio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color:rgb(255, 255, 255);
    text-shadow: 0px 0px 10px rgba(219, 224, 225, 0.5);
    margin-bottom: 1rem;
  }

  strong {
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .download-store-buttons {
   gap: 1rem;
  }
`
export const DownloadStoreButton = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: ciano;
    color: cianoDark;
    filter: drop-shadow(1px 1px 8px rgba(186 255 255 / 0.8));
  }
`

export const MoreInfoLink = styled.a`
  margin: 0 auto;
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 6px;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: ciano;
    color: cianoDark;
    filter: drop-shadow(1px 1px 8px rgba(186 255 255 / 0.8));
  }
`
export const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 6px;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;

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

    div {
      color: white;
      display: flex;
      align-items: center;
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
