import logotipo from '../../../../assets/images/cid360app/logotipo.webp'
import { DOWNLOAD, LINKS } from '../../content'
import {
  ButtonGroup,
  CenteredSectionContent,
  Container,
  DisabledButton,
  LogotypeImage,
  LogotypeWrap,
  Note,
  PrimaryButton,
  Section,
  SectionHeader,
} from '../../styles'

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
            <PrimaryButton
              href={LINKS.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DOWNLOAD.googlePlayLabel}
            </PrimaryButton>
            <DisabledButton title={DOWNLOAD.comingSoonLabel}>
              {DOWNLOAD.appStoreLabel} — {DOWNLOAD.comingSoonLabel}
            </DisabledButton>
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
