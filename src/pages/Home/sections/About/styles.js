import styled from 'styled-components'
import bgHero from '../../../../assets/images/backgrounds/about.webp'

export const AboutContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url(${bgHero}) no-repeat center center;
  background-size: cover;

  h2 {
    margin-bottom: 2rem;
  }

  @media (max-width: 1120px) {
    height: auto;
  }
`

export const AboutContent = styled.div`
  width: 80rem;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;

  .mosaic-container {
    height: 75%;
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 2.5rem;

    .mosaic:first-child {
      display: flex;
      flex-direction: row;
      flex: 2.5;

      .mosaic-child {
        height: 100%;
      }
    }

    .mosaic:nth-child(2) {
      flex: 4;
    }

    .mosaic:nth-child(3) {
      display: flex;
      flex-direction: column;
      flex: 2.5;
      gap: 6px;

      div:first-child {
        flex: 3;
      }

      div:nth-child(2) {
        flex: 2;
      }

      div:nth-child(3) {
        flex: 1;
      }
    }
  }

  @media (max-width: 1120px) {
    height: auto;
    .mosaic-container {
      flex-direction: column;
      .mosaic:first-child {
        flex-direction: column;
      }
    }
  }
`
export const AboutContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;

  h1 {
    font-size: 2rem;
    text-shadow: 0 0 6px rgb(225, 225, 225, 0.5);
  }

  img {
    width: 8rem;
  }
`

export const AboutLanguagesContainer = styled.div`
  h4 {
    margin-bottom: 1rem;
  }

  div {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    label {
      flex: 1;
      margin-right: 8px;
      font-weight: bold;
      color: #56f5ff;
      font-size: 14px;
      display: flex;
      align-items: center;
    }

    progress {
      height: 20px;
      border-radius: 1rem;
      box-shadow:
        0px 0px 6px rgba(86, 245, 255, 0.5),
        inset 0px 0px 6px rgba(86, 245, 255, 0.5);
      border: 2px solid #56f5ff;
    }

    progress::-webkit-progress-bar {
      background-color: #252c58;
      border-radius: 1rem;
    }

    progress::-webkit-progress-value {
      background-color: #56f5ff;
      border-radius: 1rem;
    }
  }
`
export const AboutExperienceContent = styled.div`
  article {
    margin-top: 1.5rem;
  }

  @keyframes open {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  details {
    color: #56f5ff;
    font-weight: bold;
    border: 2px solid #56f5ff;
    border-radius: 6px;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    transition: max-height 1s ease-in-out;
    height: auto;

    summary {
      background: #3f3b60;
      padding: 1rem;
      text-shadow: 0px 0px 4px #90f6fd;

      &:hover {
        cursor: pointer;
      }
    }

    div {
      background: rgba(63, 59, 96, 0.7);
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
      color: white;
      line-height: 1.25rem;

      h4 {
        padding-top: 0.5rem;
        margin-bottom: 0.5rem;
      }

      ul {
        margin-left: 1rem;
        margin-bottom: 0.5rem;

        li {
          margin-top: 4px;
        }
      }
    }
  }

  details[open] div {
    animation: open 1s;
  }
`
export const AboutFormationContent = styled.div`
  color: #56f5ff;

  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: rgb(33 42 83 / 75%);
    padding: 1rem;
    border-radius: 6px;
    gap: 1.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    margin-bottom: 0.25rem;
    text-shadow: 0px 0px 3px #90f6fd;
  }

  span {
    font-weight: bold;
  }
`

export const AboutSkillsContent = styled.div``

export const AboutHobbiesContent = styled.div`
  div {
    float: left;
  }

  svg {
    color: white;
    margin-right: 1rem;
    font-size: 2rem;
    filter: drop-shadow(1px 1px 5px rgb(255 255 255 / 0.4));

    &:hover {
      filter: drop-shadow(1px 1px 8px rgba(186 255 255 / 0.8));
    }
  }
`
