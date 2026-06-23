import {
  LegalContainer,
  LegalSection,
  LegalSubheading,
  LegalText,
  LegalTitle,
} from '../LegalContent/styles'

function isSectionHeading(text) {
  return /^\d+\.\s/.test(text)
}

export function LegalDocument({ title, paragraphs }) {
  return (
    <LegalSection>
      <LegalContainer>
        <LegalTitle>{title}</LegalTitle>
        <LegalText>
          {paragraphs.map((paragraph, index) =>
            isSectionHeading(paragraph) ? (
              <LegalSubheading key={`heading-${index}`}>
                {paragraph}
              </LegalSubheading>
            ) : (
              <p key={`paragraph-${index}`}>{paragraph}</p>
            ),
          )}
        </LegalText>
      </LegalContainer>
    </LegalSection>
  )
}
