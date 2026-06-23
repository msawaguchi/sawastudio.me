import { FAQ } from '../../content'
import { Container, Section, SectionHeader } from '../../styles'
import { FaqList, FaqItem } from './styles'

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeader>
          <h2>{FAQ.title}</h2>
        </SectionHeader>

        <FaqList>
          {FAQ.items.map((item) => (
            <FaqItem key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </FaqItem>
          ))}
        </FaqList>
      </Container>
    </Section>
  )
}
