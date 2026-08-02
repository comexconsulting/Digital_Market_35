# Design System

## Design Direction

**Esencia de marca (una palabra):** Centinela — un sistema que vigila y responde mientras el dueño de la pyme no puede.

**Tensión visual:** caos humano nocturno (chats sin responder, un solo dueño desbordado) vs. precisión sintética calma (paneles HUD ordenados, respuesta automática) — encarnada literalmente en la paleta: ámbar cálido/urgente vs. cian frío/preciso.

**Momento estrella (hero, 3 actos):**
1. **Quietud (0-0.3s):** pantalla casi negra, aparece tenue una burbuja de chat estilo WhatsApp con hora "23:41" — consulta sin responder.
2. **Despertar (0.3-0.9s):** de la burbuja salen líneas finas de luz cian que conectan 2-3 paneles holográficos translúcidos, entrando en cascada (no todos juntos).
3. **Rescate (0.9-1.1s):** la burbuja se enciende ámbar-cian con un check de "respondido", justo cuando arranca el título.

Después: el panel holográfico central sigue el mouse con efecto magnético sutil (referencia "Jack — 3D Creator"), reforzando "el sistema siempre está mirando".

**Ajuste de titular (decisión del usuario):** el headline de POSITIONING.md es una oración completa, demasiado larga para tipografía gigante. Se separa en 3 tamaños sin perder texto:
- Kicker chico (cian): "Mientras dormís, alguien ya le vendió a tu cliente."
- GIGANTE (titular real, aprobado): **"NINGÚN CLIENTE SE ESCAPA"**
- Subtítulo (tamaño normal): headline completo + USP tal cual en POSITIONING.md

**Composición:** asimétrica — texto alineado a la izquierda, kicker/gigante/subtítulo apilados, panel HUD del hero sangrando hacia el centro-derecha, superpuesto al borde del texto. CTA bottom-left. Nada centrado.

**Referencias:**
- Estética futurista (screenshots del usuario): negro cálido + HUD cian/ámbar + androides + líneas de luz curvas — ver detalle completo en [CREATE-WEBSITE-PLAN.md](CREATE-WEBSITE-PLAN.md#context).
- Estructura (solo lógica, no clonar): duclosdesign.com.ar/diseno-web-cordoba
- Nivel de interacción: prompt "Jack — 3D Creator" (magnetic hero, marquee scroll-driven, texto carácter a carácter, cards sticky-stacking)
- Portfolio real propio (ver [WEBSITE.md](WEBSITE.md#page-briefs) sección Proyectos): Comex Consulting (comercio exterior — serif editorial navy/crema/verde) y Estilo con Altura (indumentaria de montaña — serif+ilustración). Ambos en un lenguaje visual deliberadamente distinto al de esta landing, lo cual refuerza "diseñamos a medida, no repetimos plantilla".

**Imágenes de fondo generadas con IA (post-lanzamiento del código):** el usuario pidió imágenes de fondo fotográficas en el mismo estilo que sus referencias (androide metálico ámbar/cobre + paneles HUD holográficos), pero sin copiar esas imágenes (no son propias). Se generaron originales con Nano Banana Pro respetando nuestra paleta cian/ámbar:
- `src/assets/hero-android.jpg` — fondo del Hero, androide + dashboards a la derecha, tercio izquierdo oscuro para el texto.
- `src/assets/nosotros-android.jpg` — retrato del androide, usado como imagen que sangra desde el borde derecho en `#nosotros` (oculta en mobile, opacidad 50% + máscara de degradado para no afectar legibilidad).
- `src/assets/robots-agents-bg.jpg` — fila de robots/agentes con íconos genéricos de comunicación (NO logos reales de redes sociales, por riesgo de marca registrada) en el pecho. Sangra desde el borde derecho en `#proceso`, oculta en mobile.
- `src/assets/boardroom-bg.jpg` — sala de directorio nocturna con skyline futurista y gráficos holográficos. Fondo completo en `#cta-final` con vignette radial (oscuro en el centro donde va el texto, la escena se asoma en los bordes).

**Nota técnica importante:** cualquier fondo con `position: absolute` + `z-index` negativo necesita que la sección tenga `isolate` (crea stacking context) — si no, el fondo se renderiza detrás de TODA la página en vez de solo detrás del contenido de su sección. Bug real encontrado y corregido en el Hero durante esta implementación.

**Fondo del Hero animado (video en loop):** a pedido del usuario, `hero-android.jpg` se generó como video corto (Seedance 2 Fast, image-to-video, 5s/720p) con movimiento sutil tipo cinemagraph — las manos del androide se mueven levemente como si tipeara, el diagrama de nube pulsa. Archivo en `public/video/hero-android.mp4` (servido como estático, no importado por Vite). Implementación: `<video autoPlay loop muted playsInline poster={heroAndroid}>`; con `prefers-reduced-motion` se muestra la imagen estática (`hero-android.jpg`) en vez del video — nunca autoplay de video para quien pidió menos movimiento.

## Typography

**Pairing confirmado:** Space Grotesk (titulares/display) + Manrope (body) — ambas variables, gratis, vía Fontsource. Contraste estructural: geométrico/técnico vs. humanista cálido. Nunca Inter/Roboto/Arial/system-ui.
**Detalle opcional (no un tercer typeface "real"):** Space Mono solo para el kicker y los números de escalón 01/02/03 — misma casa de diseño que Space Grotesk, refuerza el look "panel de datos/HUD" en esos puntos puntuales.

**Escala (clamp, fluida mobile→desktop):**
| Elemento | Tamaño | Line-height | Fuente / peso |
|---|---|---|---|
| Kicker | `clamp(0.75rem, 0.7rem + 0.3vw, 0.95rem)` (~12-15px), uppercase, letter-spacing 0.12em | 1.4 | Space Mono Bold, cian |
| Titular GIGANTE | `clamp(2.5rem, 1.5rem + 10vw, 11.25rem)` (~40-180px), letter-spacing -0.03em | 0.95 | Space Grotesk Black (900) |
| Subtítulo (headline+USP) | `clamp(1.125rem, 1rem + 1vw, 1.5rem)` (~18-24px), measure ~42ch | 1.45 | Manrope Medium |
| Títulos de sección | `clamp(1.75rem, 1.4rem + 2vw, 3rem)` (~28-48px) | 1.15 | Space Grotesk Semibold |
| Body de párrafos | `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)` (~16-18px), measure 65ch | 1.6 | Manrope Regular |
| Números de escalón (01/02/03) | `clamp(2.5rem, 1.5rem + 6vw, 7rem)` (~40-112px), tabular-nums | 1 | Space Mono Bold |

Ratio titular/body ≈ 11:1 (por encima del mínimo 10:1).

**Carga de fuentes (presupuesto <200KB):**
- `@fontsource-variable/space-grotesk` + `@fontsource-variable/manrope` + `@fontsource/space-mono` (un solo peso, 700).
- Variables → un archivo cubre todos los pesos por familia. Estimado total: ~93KB (Space Grotesk ~35KB + Manrope ~40KB + Space Mono ~18KB).
- `font-display: swap` + `<link rel="preload">` en Space Grotesk y Manrope (visibles de entrada en el hero) + `font-synthesis: none`.
- Subset latin (cubre tildes/ñ del español sin peso extra).

**Score proyectado (diagnóstico 10 puntos):** 7/10 confirmados ahora (body ≥16px, measure <75ch, line-height, contraste de niveles, payload <200KB, fallbacks, `text-wrap: balance` sin huérfanas). Pendientes de verificar cuando el sitio esté construido: tamaños reales en pantalla, zoom 200%, distinción visual de links (se resuelve en Fase 6).

## Tokens

**Color:**
| Uso | Valor |
|---|---|
| Fondo base | `#0A0B0D` |
| Fondo elevado (paneles) | `#0D0E11` |
| Texto principal | `#E8EDF0` |
| Texto secundario | `#E8EDF0` @ 60% |
| Texto terciario | `#E8EDF0` @ 40% |
| Acento "máquina" (cian) — HUD, líneas de datos, bordes de vidrio | `#2FD8CC` |
| Acento "rescate" (ámbar) — SOLO CTA principal + momento "respondido" | `#FF8A3D` |
| Borde de panel (glass) | `#2FD8CC` @ 12% + blur |

Regla dura: el ámbar es exclusivo del CTA directo y del instante de transformación en el hero — no decorar con él en otros lados, o pierde el significado de "rescate".

**Rampas completas (Fase 6 — refactoring-ui):**
| Rol | Tonos |
|---|---|
| Superficie (elevación por luminosidad, no por sombra pesada) | base `#0A0B0D` → elevado-1 `#0D0E11` → elevado-2 `#12141A` → elevado-3 `#181B22` |
| Borde | hairline `rgba(232,237,240,.08)` · fuerte `rgba(232,237,240,.14)` |
| Cian | 100 `#C3F4EF` · 500 `#2FD8CC` (base) · 600 `#22B8AD` (hover) · 700 `#1A8F86` (pressed) · 900 `#0E4D48` (fondo sutil) |
| Ámbar | 100 `#FFDCBB` · 500 `#FF8A3D` (base) · 600 `#F06F1D` (hover) · 700 `#C2570F` (pressed) · 900 `#5C2A08` (fondo sutil) |

**Spacing (base 4/8):** 4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128px. Regla: gap entre secciones (96-128px) > gap dentro de una tarjeta (16-24px) > gap ícono-texto (4-8px).

**Shadows (2 capas — capa "atmósfera" es resplandor cian, no gris genérico, por la estética de vidrio):**
| Elevación | Uso | Valor |
|---|---|---|
| 1 | Tarjetas y botones en reposo | sombra oscura ajustada + borde 1px |
| 2 | Hover, tarjeta "Core" recomendada | sombra oscura + resplandor cian tenue |
| 3 | Paneles HUD del hero (flotantes) | sombra oscura grande + resplandor cian marcado |

## Components
| Component | Decision | Status |
|---|---|---|
| Botón primario ("Agendá tu demo") | Relleno sólido ámbar-500, texto casi-negro `#0A0B0D` (no blanco), pill redondeado, elevación 1→2 + leve subida al hover. Máximo 2 apariciones (hero + CTA final), nunca junto a otro botón relleno en la misma sección. | decidido |
| Botón secundario ("Ver cómo trabajamos" / "Ver sitio") | Solo contorno cian-500 @ 40% opacidad, fondo transparente; hover rellena con cian-900 tenue. | decidido |
| Tarjetas de servicio (Entrada/Core/Premium) | Mismo tamaño y layout las 3. "Core" suma un único lever: tag "MÁS ELEGIDA" + borde/sombra cian sutil (elevación 2 en vez de 1). Nada de tamaños ni colores distintos entre sí. | decidido |
| Tarjetas de proyecto | Imagen sangrando arriba (object-fit cover, aspect-ratio fijo) + degradado oscuro abajo para legibilidad + nombre/rubro + botón "Ver sitio" (secundario). Debe soportar estado "próximamente" (sin imagen/link) mientras Comex Consulting y Estilo con Altura sigan sin aprobación del dueño — nunca mostrar el link antes del OK. | decidido, bloqueado por aprobación de cliente |
| Botón flotante de WhatsApp | Fijo, esquina inferior derecha, en todo momento (no solo como fallback del booking). Círculo discreto: fondo surface-2, borde cian — nunca ámbar (ese color es exclusivo del CTA principal). Mensaje prellenado genérico. | decidido — pedido explícito del usuario, WhatsApp no tenía ningún acceso directo antes |

## UX Audit Findings
| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| Botón "Agendá tu demo" abre widget externo de reservas sin estado de carga | Nielsen #1 | 4 | Botón muestra spinner + "Abriendo calendario…"; modal con esqueleto mientras carga | pendiente — falta link público de booking |
| Sin mensaje ni salida si el widget de reservas falla | Nielsen #1 y #9 | 4 | A los ~6s sin cargar: mensaje "No pudimos cargar el calendario. Escribinos por WhatsApp y coordinamos directo" + link a WhatsApp `+51 985721349` | pendiente |
| Sin header/logo fijo — falla el Trunk Test si alguien entra a mitad de scroll | Krug — Trunk Test | 3 | Header chico sticky con nombre "Digital_Market_35" + botón CTA, visible en todo scroll | decidido |
| Modal de reserva sin salida clara definida | Nielsen #3 | 3 | Botón X + tecla Esc + click afuera, los 3 juntos | decidido |
| Motion sin definición de `prefers-reduced-motion` ni foco de teclado | Accesibilidad / Nielsen #7 | 3 | Con reduce-motion: se desactiva imán/cascada, todo aparece en estado final. Focus ring cian visible. Elementos decorativos con `aria-hidden`. | decidido |
| Sección Proyectos puede quedar vacía si no hay aprobación de cliente a tiempo | Nielsen #1 | 3 | Tarjeta placeholder "Casos en camino" en vez de espacio vacío | decidido |
| Secciones sin heading visible de orientación (Problema/Nosotros/Proyectos) | Krug — Trunk Test | 2 | Cada sección con heading corto (token de Fase 5) | decidido |
| Escenario ilustrativo podría confundirse con testimonio real | Nielsen #2 | 2 | Etiqueta "Ejemplo ilustrativo" + contenedor visualmente distinto a una cita real | decidido |
| Tap targets mobile no confirmados | Mobile usability | 2 | Mínimo 44×44px en botones/links, verificar en build | decidido |

**Score:** sin arreglos ~4-5/10 (los 2 hallazgos catastróficos bloquean la única conversión de la página). Con arreglos aplicados: **~9/10 proyectado.**

**Contacto para booking/fallback:**
- WhatsApp (fallback si falla el widget): `+51 985721349`
- Link público de reservas: **https://calendly.com/importacionesjavier4/30min** — pendiente que el usuario confirme en incógnito que muestra el calendario real (WebFetch no pudo verificarlo, Calendly renderiza todo por JS).

## Microinteraction Inventory
| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Hero HUD magnético | Mouse se acerca al panel central → paneles se desplazan sutil hacia el cursor (padding ~140, strength ~5) | — | planeado |
| Choreografía de carga del hero | Ver 3 actos arriba — orquestado, no simultáneo | — | planeado |

## Auditoría top-design (proyectada)
| Categoría | Score /10 |
|---|---|
| Tipografía | 8 |
| Composición | 8 |
| Motion | 9 |
| Color | 9 |
| Detalles | 7 (pendiente pasada de micro-detalles en Fases 6-7) |
| **Total ponderado** | **~9/10** |

## Auditoría refactoring-ui (diagnóstico 8 puntos)
7/8 — pasa jerarquía en grises, espaciado consistente, ancho de texto acotado, labels de-emphasized, shadows mapeadas a elevación. Pendiente de confirmar con herramienta real: contraste exacto del botón ámbar con texto casi-negro. **Score: ~9/10.**
