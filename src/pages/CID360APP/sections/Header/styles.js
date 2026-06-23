import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../../styles'

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ $menuOpen }) => ($menuOpen ? 100 : 10)};
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${theme.border};
  backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    background: ${theme.bg};
    backdrop-filter: none;
  }
`

export const HeaderInner = styled.div`
  width: min(72rem, 100%);
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.text};
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    color: ${theme.text};
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: ${theme.textMuted};
    font-size: 0.9375rem;
    font-weight: 600;

    &:hover {
      color: ${theme.teal};
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    top: 4.5rem;
    z-index: 99;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0 1.5rem 1.5rem;
    background-color: ${theme.bg};
    border-top: 1px solid ${theme.border};
    transform: translateY(${({ $open }) => ($open ? '0' : '-110%')});
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transition: transform 0.25s ease, opacity 0.25s ease;
    overflow-y: auto;

    a {
      display: block;
      width: 100%;
      padding: 0.875rem 0;
      background-color: ${theme.bg};
      border-bottom: 1px solid ${theme.border};
    }
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${theme.border};
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  color: ${theme.text};
  font-size: 1.25rem;
  line-height: 1;

  @media (max-width: 768px) {
    display: inline-flex;
    position: relative;
    z-index: 101;
    background-color: ${theme.bg};
  }
`

export const DesktopCta = styled.a`
  @media (max-width: 768px) {
    display: none;
  }
`
