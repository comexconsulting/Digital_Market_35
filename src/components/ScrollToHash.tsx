import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Al cambiar de ruta: si hay #hash, scrollea a ese elemento (funciona cruzando de /noticias a /#servicios).
 * Si no hay hash, sube al top — comportamiento esperado de navegación entre páginas. */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // Pequeño delay: al entrar desde otra ruta, el DOM de la sección recién se monta.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
