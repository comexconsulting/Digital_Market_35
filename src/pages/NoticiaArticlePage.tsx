import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { getArticleBySlug } from '../lib/news'

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function NoticiaArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 md:px-10">
        <p className="font-display text-2xl font-bold text-text-primary">No encontramos ese artículo</p>
        <Link to="/noticias" className="mt-6 inline-flex items-center gap-1.5 font-body text-sm text-cyan-500">
          <ArrowLeft size={14} /> Volver a Noticias
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <Link
          to="/noticias"
          className="inline-flex items-center gap-1.5 font-body text-sm text-text-tertiary transition-colors hover:text-cyan-500"
        >
          <ArrowLeft size={14} /> Volver a Noticias
        </Link>
      </FadeIn>

      <FadeIn delay={0.05} className="mt-6">
        <span className="font-mono text-xs uppercase tracking-wide text-cyan-500">
          {formatDate(article.date)} · {article.sourceName}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
          {article.title}
        </h1>
      </FadeIn>

      <FadeIn delay={0.15} className="prose-news mt-10 max-w-prose">
        <ReactMarkdown
          components={{
            p: (props) => (
              <p className="mb-5 font-body text-base leading-relaxed text-text-secondary" {...props} />
            ),
            strong: (props) => <strong className="font-semibold text-text-primary" {...props} />,
            a: (props) => (
              <a
                className="inline-flex items-center gap-1 text-cyan-500 underline decoration-cyan-500/30 underline-offset-4 hover:decoration-cyan-500"
                target="_blank"
                rel="noreferrer"
                {...props}
              />
            ),
            h2: (props) => (
              <h2 className="mb-4 mt-8 font-display text-xl font-semibold text-text-primary" {...props} />
            ),
            ul: (props) => <ul className="mb-5 list-disc pl-5 font-body text-text-secondary" {...props} />,
          }}
        >
          {article.body}
        </ReactMarkdown>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-10 rounded-2xl border border-cyan-500/20 bg-surface-1 p-6">
        <p className="font-body text-sm text-text-secondary">
          Este resumen fue generado a partir de una fuente real y verificable.
        </p>
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-body text-sm font-medium text-cyan-500"
        >
          Ver fuente original: {article.sourceName} <ExternalLink size={13} />
        </a>
      </FadeIn>
    </article>
  )
}
