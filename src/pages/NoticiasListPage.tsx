import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { getAllArticles } from '../lib/news'

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function NoticiasListPage() {
  const articles = getAllArticles()

  return (
    <section className="mx-auto max-w-6xl px-5 py-28 sm:px-8 md:px-10">
      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-500">Noticias</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
          IA y tecnología, resumido
        </h1>
        <p className="mt-4 max-w-prose font-body text-base leading-relaxed text-text-secondary">
          Un artículo por semana, siempre con la fuente original citada — sin relleno ni especulación.
        </p>
      </FadeIn>

      {articles.length === 0 ? (
        <FadeIn delay={0.1} className="mt-14 rounded-2xl border border-border-hairline bg-surface-1 p-8 text-center">
          <p className="font-body text-text-secondary">Todavía no hay artículos publicados. Volvé pronto.</p>
        </FadeIn>
      ) : (
        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {articles.map((a, i) => (
            <FadeIn key={a.slug} delay={i * 0.08}>
              <Link to={`/noticias/${a.slug}`} className="group flex flex-col gap-5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border-hairline">
                  <img
                    src={a.thumb}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-text-tertiary">
                    {formatDate(a.date)} · {a.sourceName}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-text-primary transition-colors group-hover:text-cyan-500 sm:text-2xl">
                    {a.title}
                  </h2>
                  <p className="font-body text-base leading-relaxed text-text-secondary">{a.summary}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 font-body text-sm text-cyan-500">
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  )
}
