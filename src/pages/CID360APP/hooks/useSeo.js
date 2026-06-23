import { useEffect } from 'react'
import { SEO } from '../content'

function setMeta(name, content, attribute = 'name') {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function useSeo() {
  useEffect(() => {
    const previousTitle = document.title

    document.title = SEO.title
    document.documentElement.lang = 'pt-BR'

    setMeta('description', SEO.description)
    setMeta('keywords', SEO.keywords)
    setMeta('og:title', SEO.og.title, 'property')
    setMeta('og:description', SEO.og.description, 'property')
    setMeta('og:type', SEO.og.type, 'property')
    setMeta('og:image', SEO.og.image, 'property')

    return () => {
      document.title = previousTitle
    }
  }, [])
}
