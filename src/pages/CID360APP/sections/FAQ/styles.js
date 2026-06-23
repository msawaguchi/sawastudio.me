import styled from 'styled-components'
import { theme } from '../../styles'

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 48rem;
`

export const FaqItem = styled.details`
  background: ${theme.cardBg};
  border: 1px solid ${theme.border};
  border-radius: 12px;
  padding: 1rem 1.25rem;

  summary {
    cursor: pointer;
    font-weight: 700;
    color: ${theme.text};
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      float: right;
      color: ${theme.teal};
    }
  }

  &[open] summary::after {
    content: '−';
  }

  p {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid ${theme.border};
  }
`
