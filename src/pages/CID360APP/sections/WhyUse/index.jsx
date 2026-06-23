import { WHY } from '../../content'
import { Card, Container, Grid, Section, SectionHeader } from '../../styles'

export function WhyUse() {
  return (
    <Section id="por-que">
      <Container>
        <SectionHeader>
          <h2>{WHY.title}</h2>
        </SectionHeader>

        <Grid>
          {WHY.cards.map((card) => (
            <Card key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
