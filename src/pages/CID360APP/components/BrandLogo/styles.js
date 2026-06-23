import styled from 'styled-components'
import { theme } from '../../styles'

export const BrandWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const BrandIcon = styled.img`
  width: ${({ $size }) => ($size === 'sm' ? '2.5rem' : '3.5rem')};
  height: ${({ $size }) => ($size === 'sm' ? '2.5rem' : '3.5rem')};
  border-radius: ${({ $size }) => ($size === 'sm' ? '8px' : '12px')};
  flex-shrink: 0;
`

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const BrandTitle = styled.span`
  font-size: ${({ $size }) => ($size === 'sm' ? '1.25rem' : '1.5rem')};
  line-height: 1.2;
`

export const BrandCid = styled.span`
  color: #3b7c99 !important;
  font-weight: 700;
  margin-right: 0.25rem;
`

export const BrandCidFooter = styled.span`
  color: #fff;
  font-weight: 700;
  margin-right: 0.25rem;
`

export const BrandNumber = styled.span`
  color: #8b8b8b;
  font-weight: 400;
`

export const BrandTagline = styled.span`
  font-size: 0.8125rem;
  font-weight: 400;
  color: ${({ $variant }) =>
    $variant === 'footer' ? 'rgba(255, 255, 255, 0.85)' : theme.textMuted};
`
