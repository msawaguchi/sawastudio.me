import styled from 'styled-components'
import { theme } from '../../styles'

export const FooterWrapper = styled.footer`
  background: ${theme.tealDark};
  color: ${theme.bg};
  padding: 3rem 0 2rem;

  p,
  span,
  li {
    color: rgba(255, 255, 255, 0.85);
  }

  a {
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      color: ${theme.bg};
    }
  }

  h3 {
    color: ${theme.bg};
    margin-bottom: 0.5rem;
  }
`

export const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.5fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  justify-content: end;
`

export const FooterLegal = styled.p`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.875rem;
  line-height: 1.5;
`

export const FooterCopyright = styled.p`
  margin-top: 1rem;
  font-size: 0.8125rem;
  opacity: 0.8;
`
