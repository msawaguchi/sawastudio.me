import styled, { css } from 'styled-components'

const colors = {
  sectionBg: '#F7FAFC',
  text: '#25313A',
  textMuted: '#66737D',
  primary: '#3D9CB3',
  primaryDark: '#2F8FA7',
  proBg: 'linear-gradient(165deg, #123243 0%, #172A3A 55%, #102A3A 100%)',
  proHighlight: '#95dcf6',
  proText: '#EAF6F8',
  proMuted: 'rgba(234, 246, 248, 0.78)',
  white: '#ffffff',
  border: '#DFE6EC',
  plusBorder: '#3D9CB3',
}

export const PlansSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, ${colors.white} 0%, ${colors.sectionBg} 100%);
`

export const PlansHeader = styled.div`
  text-align: center;
  max-width: 40rem;
  margin: 0 auto 3rem;

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: ${colors.text};
    margin-bottom: 0.75rem;
  }

  p {
    color: ${colors.textMuted};
    font-size: 1.0625rem;
    line-height: 1.6;
  }
`

export const MainPlansGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const cardBase = css`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.75rem;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(23, 42, 58, 0.08);
`

export const PricingCard = styled.article`
  ${cardBase}
  background: ${colors.white};
  border: 1px solid ${colors.border};

  ${({ $variant }) =>
    $variant === 'plus' &&
    css`
      border: 2px solid ${colors.plusBorder};
      box-shadow:
        0 16px 48px rgba(61, 156, 179, 0.14),
        0 0 0 1px rgba(61, 156, 179, 0.08);
    `}

  ${({ $variant }) =>
    $variant === 'pro' &&
    css`
      background: ${colors.proBg};
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 50px rgba(16, 42, 58, 0.28);
      color: ${colors.proText};
    `}
`

export const PlanBadge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;

  ${({ $variant }) =>
    $variant === 'free' &&
    css`
      background: #eef3f6;
      color: ${colors.textMuted};
    `}

  ${({ $variant }) =>
    $variant === 'plus' &&
    css`
      background: rgba(61, 156, 179, 0.12);
      color: ${colors.primaryDark};
    `}

  ${({ $variant }) =>
    $variant === 'pro' &&
    css`
      background: rgba(255, 255, 255, 0.14);
      color: ${colors.proText};
    `}
`

export const PlanName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${colors.text};

  ${({ $pro }) =>
    $pro &&
    css`
      && {
        color: ${colors.proHighlight};
      }
    `}
`

export const PlanPriceBlock = styled.div`
  margin-bottom: 0.75rem;

  strong {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    line-height: 1;
    color: ${({ $pro }) => ($pro ? colors.proText : colors.text)};
  }

  span {
    font-size: 0.9375rem;
    font-weight: 500;
    color: ${({ $pro }) => ($pro ? colors.proMuted : colors.textMuted)};
    margin-left: 0.25rem;
  }
`

export const PlanDescription = styled.p`
  font-size: 0.9375rem;
  line-height: 1.55;
  margin-bottom: 1.5rem;
  color: ${colors.textMuted};

  ${({ $pro }) =>
    $pro &&
    css`
      && {
        color: ${colors.proHighlight};
      }
    `}
`

export const PlanFeatures = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1.75rem;
`

export const PlanFeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const PlanFeatureDivider = styled.li`
  list-style: none;
  height: 1px;
  margin: 0.625rem 0 0.25rem;
  background: ${({ $pro }) =>
    $pro ? 'rgba(255, 255, 255, 0.12)' : colors.border};
`

export const PlanFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ $pro, $excluded }) => {
    if ($excluded) return $pro ? 'rgba(234, 246, 248, 0.45)' : '#9AA8B2'
    return $pro ? colors.proMuted : colors.textMuted
  }};

  svg {
    flex-shrink: 0;
    margin-top: 0.125rem;
    font-size: 1rem;
    color: ${({ $pro, $excluded }) => {
      if ($excluded) return $pro ? 'rgba(234, 246, 248, 0.35)' : '#B8C4CC'
      return $pro ? '#7FD0DE' : colors.primary
    }};
  }
`

export const PlanFootnote = styled.p`
  margin-top: 0.875rem;
  font-size: 0.8125rem;
  color: ${colors.proMuted};
  text-align: center;
`

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.875rem 1.25rem;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 700;
  border: 2px solid transparent;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  text-align: center;
`

export const PlanButton = styled.a`
  ${buttonBase}
  margin-top: auto;

  ${({ $variant }) =>
    $variant === 'free' &&
    css`
      background: transparent;
      color: ${colors.primaryDark};
      border-color: ${colors.primary};

      &:hover {
        background: rgba(61, 156, 179, 0.08);
        color: ${colors.primaryDark};
      }
    `}

  ${({ $variant }) =>
    $variant === 'plus' &&
    css`
      background: ${colors.primary};
      color: ${colors.white};

      &:hover {
        background: ${colors.primaryDark};
        color: ${colors.white};
      }
    `}

  ${({ $variant }) =>
    $variant === 'pro' &&
    css`
      background: ${colors.white};
      color: #123243;

      &:hover {
        background: #f0fbfd;
        color: #123243;
      }
    `}

  ${({ $variant }) =>
    $variant === 'secondary' &&
    css`
      width: auto;
      min-width: 11rem;
      background: transparent;
      color: ${colors.primaryDark};
      border-color: ${colors.primary};

      &:hover {
        background: rgba(61, 156, 179, 0.08);
        color: ${colors.primaryDark};
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`

export const SecondaryPlanCard = styled.article`
  ${cardBase}
  margin-top: 1.75rem;
  background: ${colors.white};
  border: 1px dashed ${colors.border};
  box-shadow: 0 8px 24px rgba(23, 42, 58, 0.05);
  padding: 1.5rem 1.75rem;
`

export const SecondaryPlanInner = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr auto;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`

export const SecondaryPlanContent = styled.div`
  h3 {
    font-size: 1.125rem;
    color: ${colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textMuted};
    font-size: 0.9375rem;
    line-height: 1.5;
  }
`

export const SecondaryPlanPrice = styled.div`
  strong {
    display: block;
    font-size: 1.75rem;
    font-weight: 800;
    color: ${colors.text};
    line-height: 1.1;
  }

  span {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: ${colors.textMuted};
  }
`

export const SecondaryPlanFeatures = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-top: 0.875rem;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    font-size: 0.8125rem;
    color: ${colors.textMuted};

    svg {
      color: ${colors.primary};
      font-size: 0.9375rem;
    }
  }
`

export const LegalNote = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: ${colors.textMuted};
`
