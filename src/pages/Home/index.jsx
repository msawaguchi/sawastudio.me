import { useEffect } from 'react'
import { Menu } from '../../components/Menu'
import { About } from './sections/About'
import { Blog } from './sections/Blog'
import { Contact } from './Sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Main } from './styles'
import I18n from '../../components/I18n'

export function Home() {
  useEffect(() => {
    console.log(`
 ╲╭━━━━╮╲╲╭━━━━━━━━━━━━━━━━━━━━━━━━━╮
 ╲┃╭╮╭╮┃╲╲┃..welcome to console!....|
 ┗┫┏━━┓┣┛╲╰┳╮ .....  ...............┃
 ╲┃╰━━╯┃━━━╯╰━━━━━━━━━━━━━━━━━━━━━━━╯
 ╲╰┳━━┳╯╲╲╲╲╲╲╲
 `)
  }, [])

  return (
    <Main>
      <I18n />
      <div className="nav">
        <Menu />
      </div>

      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </Main>
  )
}
