import styled from 'styled-components'
import { theme } from '../../styles'

export const LegalSection = styled.section`
  padding: 4rem 0 5rem;
  min-height: 50vh;
`

export const LegalContainer = styled.div`
  width: min(48rem, 100%);
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`

export const LegalTitle = styled.h2`
  && {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: ${theme.text};
    margin-bottom: 1.5rem;
  }
`

export const LegalText = styled.div`
  text-align: left;

  p {
    color: ${theme.textMuted};
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`

export const LegalSubheading = styled.h3`
  && {
    font-size: 1.0625rem;
    color: ${theme.tealDark};
    margin: 1.75rem 0 0.75rem;
    line-height: 1.4;
  }
`
