import { FEATURES } from '../../content'
import { SectionScreenshots } from '../../components/SectionScreenshots'
import ss2 from '../../../../assets/images/cid360app/ss2.webp'
import ss3 from '../../../../assets/images/cid360app/ss3.webp'
import ss1 from '../../../../assets/images/cid360app/ss1.webp'
import {
  Card,
  Container,
  Grid,
  Note,
  Section,
  SectionHeader,
} from '../../styles'

const FEATURE_SCREENSHOTS = [
  {
    src: ss2,
    alt: 'Tela do CID 360°com favoritos e anotações',
  },
  {
    src: ss3,
    alt: 'Tela do CID 360°com descrição completa, inclusões e exclusões',
  },
  {
    src: ss1,
    alt: 'Tela do CID 360°com CIDs relacionados na página de detalhes',
  },
]

export function Features() {
  return (
    <Section id="recursos" $alt>
      <Container>
        <SectionHeader>
          <h2>{FEATURES.title}</h2>
        </SectionHeader>

        <Grid $minWidth="18rem">
          {FEATURES.items.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </Grid>

        <Note>{FEATURES.note}</Note>
        <SectionScreenshots images={FEATURE_SCREENSHOTS} columns={3} />
      </Container>
    </Section>
  )
}
