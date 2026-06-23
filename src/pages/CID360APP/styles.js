import styled, { css } from 'styled-components'

export const theme = {
  teal: '#4C99B1',
  tealDark: '#3B7A91',
  tealLight: '#E8F3F7',
  text: '#2d3436',
  textMuted: '#636e72',
  bg: '#ffffff',
  bgSoft: '#f7f9fa',
  cardBg: '#f0f2f3',
  border: '#dfe6e9',
  placeholder: '#b2bec3',
}

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: ${theme.bg};
  color: ${theme.text};
  font-family: 'IBM Plex Sans', sans-serif;

  *,
  button,
  a,
  input,
  textarea {
    font-family: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  li,
  span {
    text-shadow: none;
  }

  h2 {
    font-size: 2rem;
    color: ${theme.text};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: ${theme.tealDark};
    margin-bottom: 0.75rem;
  }

  p {
    color: ${theme.textMuted};
    font-weight: 400;
    line-height: 1.6;
  }
`

export const Container = styled.div`
  width: min(72rem, 100%);
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const Section = styled.section`
  padding: 4.5rem 0;

  ${({ $alt }) =>
    $alt &&
    css`
      background: ${theme.bgSoft};
    `}
`

export const SectionHeader = styled.div`
  max-width: 42rem;
  margin-bottom: 2.5rem;

  p {
    margin-top: 0.75rem;
  }
`

export const Grid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $minWidth = '16rem' }) => $minWidth}, 1fr)
  );
`

export const TextLink = styled.a`
  color: ${theme.teal};
  font-weight: 600;

  &:hover {
    color: ${theme.tealDark};
  }
`

export const Card = styled.article`
  background: ${theme.cardBg};
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  > a {
    margin-top: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-style: uppercase;
  }

  ul {
    list-style: none;
    margin-top: 1rem;

    li {
      position: relative;
      padding-left: 1.25rem;
      margin-bottom: 0.5rem;
      color: ${theme.textMuted};
      line-height: 1.5;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${theme.teal};
        font-weight: bold;
      }
    }
  }
`

export const PlaceholderBox = styled.div`
  width: 100%;
  aspect-ratio: ${({ $ratio = '1 / 1' }) => $ratio};
  background: ${theme.placeholder};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.bg};
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`

export const Note = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: ${theme.textMuted};
  line-height: 1.5;
`

export const ScreenshotGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 2.5rem;
  grid-template-columns: repeat(${({ $columns = 3 }) => $columns}, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Screenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const LogotypeWrap = styled.div`
  margin-top: 2rem;
  max-width: ${({ $maxWidth = '10rem' }) => $maxWidth};
`

export const LogotypeImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

export const Badge = styled.span`
  display: inline-block;
  background: ${theme.teal};
  color: ${theme.bg};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.625rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
`

export const PlanPrice = styled.div`
  margin: 1rem 0;

  strong {
    font-size: 1.75rem;
    color: ${theme.text};
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: ${theme.textMuted};
    margin-top: 0.25rem;
  }
`

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.9375rem;
  border: 2px solid transparent;
  transition: opacity 0.2s ease, background 0.2s ease;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: ${theme.teal};
  color: ${theme.bg};

  &:hover {
    background: ${theme.tealDark};
    color: ${theme.bg};
  }
`

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: ${theme.teal};
  border-color: ${theme.teal};

  &:hover {
    background: ${theme.tealLight};
    color: ${theme.tealDark};
  }
`

export const DisabledButton = styled.span`
  ${buttonBase}
  background: ${theme.border};
  color: ${theme.textMuted};
  cursor: not-allowed;
  opacity: 0.85;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`

export const CenteredSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${SectionHeader} {
    margin-left: auto;
    margin-right: auto;
  }

  ${ButtonGroup} {
    justify-content: center;
  }

  ${Note} {
    max-width: 32rem;
  }

  ${LogotypeWrap} {
    margin-left: auto;
    margin-right: auto;
  }
`

export const ListGrid = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.75rem 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));

  li {
    position: relative;
    padding-left: 1.25rem;
    color: ${theme.textMuted};
    line-height: 1.5;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${theme.teal};
      font-weight: bold;
    }
  }
`
