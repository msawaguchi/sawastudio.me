import { AUDIENCE } from '../../content'
import { Container, ListGrid, Note, Section, SectionHeader } from '../../styles'

export function Audience() {
  return (
    <Section id="para-quem">
      <Container>
        <SectionHeader>
          <h2>{AUDIENCE.title}</h2>
        </SectionHeader>

        <ListGrid>
          {AUDIENCE.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListGrid>

        <Note>{AUDIENCE.disclaimer}</Note>
      </Container>
    </Section>
  )
}
