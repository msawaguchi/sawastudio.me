import logotipo from '../../../../assets/images/cid360app/logotipo.png'
import googleButton from '../../../../assets/images/cid360app/google-button.png'
import appleButton from '../../../../assets/images/cid360app/apple-button.png'
import { DOWNLOAD, LINKS } from '../../content'
import {
  ButtonGroup,
  CenteredSectionContent,
  Container,
  LogotypeImage,
  LogotypeWrap,
  Note,
  Section,
  SectionHeader,
} from '../../styles'
import { StoreButton } from './styles'

export function Download() {
  return (
    <Section id="download" $alt>
      <Container>
        <CenteredSectionContent>
          <SectionHeader>
            <h2>{DOWNLOAD.title}</h2>
            <p>{DOWNLOAD.text}</p>
          </SectionHeader>

          <ButtonGroup>
            <StoreButton
              href={LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googleButton} alt={DOWNLOAD.googlePlayLabel} />
            </StoreButton>
            <StoreButton
              href={LINKS.appStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appleButton} alt={DOWNLOAD.appStoreLabel} />
            </StoreButton>
          </ButtonGroup>

          <Note>{DOWNLOAD.notifyText}</Note>

          <LogotypeWrap $maxWidth="12rem">
            <LogotypeImage src={logotipo} alt="CID 360" />
          </LogotypeWrap>
        </CenteredSectionContent>
      </Container>
    </Section>
  )
}
