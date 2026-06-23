import { FOOTER } from '../../content'
import { BrandLogo } from '../../components/BrandLogo'
import { Container } from '../../styles'
import {
  FooterWrapper,
  FooterGrid,
  FooterLinks,
  FooterLegal,
  FooterCopyright,
} from './styles'

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <BrandLogo tagline={FOOTER.tagline} variant="footer" />

          <FooterLinks>
            {FOOTER.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </FooterLinks>
        </FooterGrid>

        <FooterLegal>{FOOTER.legal}</FooterLegal>
        <FooterCopyright>{FOOTER.copyright}</FooterCopyright>
      </Container>
    </FooterWrapper>
  )
}
