import { Header } from '../../sections/Header'
import { Footer } from '../../sections/Footer'
import { Main } from '../../styles'

export function Cid360Layout({ children }) {
  return (
    <Main id="top">
      <Header />
      {children}
      <Footer />
    </Main>
  )
}
