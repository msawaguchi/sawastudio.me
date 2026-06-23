import { LEGAL } from '../../content'
import { Cid360Layout } from '../../components/Cid360Layout'
import { LegalDocument } from '../../components/LegalDocument'

export function Cid360Privacy() {
  return (
    <Cid360Layout>
      <LegalDocument
        title={LEGAL.privacy.title}
        paragraphs={LEGAL.privacy.paragraphs}
      />
    </Cid360Layout>
  )
}
