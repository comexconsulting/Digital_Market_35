import fm from 'front-matter'

export interface NewsArticle {
  slug: string
  title: string
  date: string
  summary: string
  sourceUrl: string
  sourceName: string
  body: string
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
