import screenImage from '../../../../assets/images/cid360app/screen1.webp'
import { HERO, LINKS } from '../../content'
import {
  ButtonGroup,
  Container,
  PrimaryButton,
  SecondaryButton,
} from '../../styles'
import {
  HeroSection,
  HeroGrid,
  HeroContent,
  HeroNote,
  HeroVisual,
  HeroScreenshot,
} from './styles'

export function Hero() {
  return (
    <HeroSection id="top">
      <Container>
        <HeroGrid>
          <HeroContent>
            <h1>{HERO.title}</h1>
            <p>{HERO.subtitle}</p>

            <ButtonGroup>
              <PrimaryButton
                href={LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.androidLabel}
              </PrimaryButton>
              <SecondaryButton href="#download">{HERO.iosLabel}</SecondaryButton>
            </ButtonGroup>

            <HeroNote>{HERO.availabilityNote}</HeroNote>
          </HeroContent>

          <HeroVisual>
            <HeroScreenshot
              src={screenImage}
              alt="Tela do app CID 360° com busca de códigos CID"
            />
          </HeroVisual>
        </HeroGrid>
      </Container>
    </HeroSection>
  )
}
