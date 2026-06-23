import { useSeo } from './hooks/useSeo'
import { Cid360Layout } from './components/Cid360Layout'
import { Hero } from './sections/Hero'
import { WhyUse } from './sections/WhyUse'
import { Features } from './sections/Features'
import { Audience } from './sections/Audience'
import { Plans } from './sections/Plans'
import { Packages } from './sections/Packages'
import { Download } from './sections/Download'
import { FaqSection } from './sections/FAQ'
import { Contact } from './sections/Contact'

export function CID360APP() {
  useSeo()

  return (
    <Cid360Layout>
      <Hero />
      <WhyUse />
      <Features />
      <Audience />
      <Plans />
      <Packages />
      <Download />
      <FaqSection />
      <Contact />
    </Cid360Layout>
  )
}
