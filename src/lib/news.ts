import fm from 'front-matter'
import streams from '../assets/news-thumbs/streams.jpg'
import network from '../assets/news-thumbs/network.jpg'
import circuit from '../assets/news-thumbs/circuit.jpg'
import panels from '../assets/news-thumbs/panels.jpg'
import waveform from '../assets/news-thumbs/waveform.jpg'

export interface NewsArticle {
  slug: string
  title: string
  date: string
  summary: string
  sourceUrl: string
  sourceName: string
  body: string
  thumb: string
}

interface NewsFrontmatter {
  title: string
  slug: string
  date: string
  summary: string
  sourceUrl: string
  sourceName: string
}

const files = import.meta.glob('/content/news/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

// Set fijo de thumbnails propios (abstractos, en nuestra paleta). Se asignan de forma
// determinística por slug — no ilustran la noticia puntual, pero le dan variedad e
// identidad visual sin depender de imágenes de terceros (riesgo legal) ni de generar
// una imagen nueva en cada corrida automática (punto de falla extra en el pipeline).
const THUMBS = [streams, network, circuit, panels, waveform]

function hashSlug(slug: string): number {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function thumbForSlug(slug: string): string {
  return THUMBS[hashSlug(slug) % THUMBS.length]
}

function parseArticle(raw: string): NewsArticle | null {
  try {
    const { attributes, body } = fm<NewsFrontmatter>(raw)
    if (!attributes.slug || !attributes.title || !attributes.date) return null
    return {
      slug: attributes.slug,
      title: attributes.title,
      date: attributes.date,
      summary: attributes.summary,
      sourceUrl: attributes.sourceUrl,
      sourceName: attributes.sourceName,
      body,
      thumb: thumbForSlug(attributes.slug),
    }
  } catch {
    return null
  }
}

const ARTICLES: NewsArticle[] = Object.values(files)
  .map(parseArticle)
  .filter((a): a is NewsArticle => a !== null)
  .sort((a, b) => b.date.localeCompare(a.date))

export function getAllArticles(): NewsArticle[] {
  return ARTICLES
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
