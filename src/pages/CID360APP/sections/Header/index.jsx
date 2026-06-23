import { useState } from 'react'
import { Link } from 'react-router-dom'
import { APP, HERO, LINKS, NAV_ITEMS } from '../../content'
import { BrandLogo } from '../../components/BrandLogo'
import { PrimaryButton } from '../../styles'
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  HeaderActions,
  MenuToggle,
  DesktopCta,
} from './styles'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleNavClick() {
    setIsMenuOpen(false)
  }

  return (
    <HeaderWrapper $menuOpen={isMenuOpen}>
      <HeaderInner>
        <Logo to="/cid360app">
          <BrandLogo tagline={APP.tagline} size="sm" />
        </Logo>

        <Nav $open={isMenuOpen} aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavClick}>
              {item.label}
            </a>
          ))}
        </Nav>

        <HeaderActions>
          <DesktopCta
            as={PrimaryButton}
            href={LINKS.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
          >
            {HERO.ctaPrimary}
          </DesktopCta>
          <MenuToggle
            type="button"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </MenuToggle>
        </HeaderActions>
      </HeaderInner>
    </HeaderWrapper>
  )
}
