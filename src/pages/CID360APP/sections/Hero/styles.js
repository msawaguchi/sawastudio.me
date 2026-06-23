import styled from 'styled-components'
import { theme } from '../../styles'

export const HeroSection = styled.section`
  padding: 4rem 0 5rem;
  background: linear-gradient(180deg, ${theme.tealLight} 0%, ${theme.bg} 100%);
`

export const HeroGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const HeroContent = styled.div`
  h1 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    line-height: 1.2;
    color: rgb(29 121 147);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.0625rem;
    max-width: 36rem;
  }
`

export const HeroNote = styled.p`
  margin-top: 1rem !important;
  font-size: 0.875rem !important;
  color: ${theme.textMuted} !important;
`

export const HeroVisual = styled.div`
  max-width: 20rem;
  margin: 0 auto;
  width: 100%;
`

export const HeroScreenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`
