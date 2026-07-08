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

function setCanonical(href) {
  if (!href) return

  let element = document.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const STRUCTURED_DATA_ID = 'cid360-structured-data'

function setStructuredData(data) {
  if (!data) return

  let element = document.getElementById(STRUCTURED_DATA_ID)

  if (!element) {
    element = document.createElement('script')
    element.id = STRUCTURED_DATA_ID
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(data)
}

export function useSeo() {
  useEffect(() => {
    const previousTitle = document.title

    document.title = SEO.title
    document.documentElement.lang = 'pt-BR'

    setMeta('description', SEO.description)
    setMeta('keywords', SEO.keywords)
    setMeta('robots', SEO.robots)
    setMeta('og:title', SEO.og.title, 'property')
    setMeta('og:description', SEO.og.description, 'property')
    setMeta('og:type', SEO.og.type, 'property')
    setMeta('og:image', SEO.og.image, 'property')
    setCanonical(SEO.canonical)
    setStructuredData(SEO.structuredData)

    return () => {
      document.title = previousTitle

      const robotsMeta = document.querySelector('meta[name="robots"]')
      if (robotsMeta) robotsMeta.remove()

      const canonicalLink = document.querySelector('link[rel="canonical"]')
      if (canonicalLink) canonicalLink.remove()

      const structuredData = document.getElementById(STRUCTURED_DATA_ID)
      if (structuredData) structuredData.remove()
    }
  }, [])
}
