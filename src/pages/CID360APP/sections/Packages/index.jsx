import { PACKAGES } from '../../content'
import { SectionScreenshots } from '../../components/SectionScreenshots'
import screen3 from '../../../../assets/images/cid360app/screen3.webp'
import screen4 from '../../../../assets/images/cid360app/screen4.webp'
import {
  Card,
  Container,
  Grid,
  Note,
  Section,
  SectionHeader,
} from '../../styles'

const PACKAGE_SCREENSHOTS = [
  {
    src: screen3,
    alt: 'Tela do CID 360°com pós-coordenação CID-11',
  },
  {
    src: screen4,
    alt: 'Tela do CID 360°com detalhes oficiais organizados',
  },
]

export function Packages() {
  return (
    <Section id="pacotes">
      <Container>
        <SectionHeader>
          <h2>{PACKAGES.title}</h2>
          <p>{PACKAGES.intro}</p>
        </SectionHeader>

        <Grid $minWidth="16rem">
          {PACKAGES.items.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </Grid>

        <Note>{PACKAGES.note}</Note>
        <SectionScreenshots images={PACKAGE_SCREENSHOTS} columns={2} />
      </Container>
    </Section>
  )
}
