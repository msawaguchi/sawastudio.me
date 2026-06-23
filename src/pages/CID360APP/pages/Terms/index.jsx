import { LEGAL } from '../../content'
import { Cid360Layout } from '../../components/Cid360Layout'
import { LegalDocument } from '../../components/LegalDocument'

export function Cid360Terms() {
  return (
    <Cid360Layout>
      <LegalDocument
        title={LEGAL.terms.title}
        paragraphs={LEGAL.terms.paragraphs}
      />
    </Cid360Layout>
  )
}
