import styled from 'styled-components'
import bgHero from '../../../../assets/images/backgrounds/bg-hero.webp'
import imgFooter from '../../../../assets/images/footer.png'

export const ContactContainer = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${bgHero}) no-repeat center center;
  background-size: cover;
`
export const ConstactContent = styled.div`
  width: 80rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    height: min-content;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 32rem;
    margin: 0 auto;
    padding: 2rem;
  }

  .iconbutton {
    margin-right: 5px;
  }

  .sentmessage {
    color: #ff56b1;
    text-shadow:
      0px 0px 10px rgba(255, 33, 153, 0.75),
      0px 0px 5px #ff2199;
  }

  .spin {
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (max-width: 620px) {
    width: 100%;

    form {
      width: 100%;
    }
  }

  @media (max-width: 430px) {
    form {
      padding: 1rem;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 300px;
  background: url(${imgFooter}) no-repeat center center;
  background-size: cover;
`
