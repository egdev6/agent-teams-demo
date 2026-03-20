# Agent Teams — Demo Slides

Presentación HTML con Reveal.js para el directo demo de Agent Teams.
Cubre las 8 secciones del guion: desde el pipeline simple hasta el cambio de equipo en caliente.

## Cómo abrir en local

1. Abre `index.html` directamente en el navegador (no requiere servidor ni build)
2. Navega con las **teclas de flecha** o la **barra espaciadora**
3. Pulsa **`S`** para abrir la vista de speaker notes (notas de ponente en ventana separada)
4. Pulsa **`F`** para pantalla completa
5. Pulsa **`O`** para la vista general de todas las slides
6. Pulsa **`B`** para poner la pantalla en negro (útil entre demos)

## Desplegar en GitHub Pages

1. Asegúrate de que el repositorio es público (o tienes GitHub Pages habilitado)
2. Ve a **Settings → Pages → Source: Deploy from branch → `main` / `(root)`**
3. La presentación quedará disponible en `https://{usuario}.github.io/{repo}/`

No hay paso de build. Reveal.js se carga desde CDN.

## Antes del directo

Consulta [`prompts.md`](prompts.md) para:
- Los prompts exactos de cada demo (listos para copiar y pegar)
- Notas sobre el estado de Engram que necesitas en cada momento
- Checklist pre-directo

### Equipos necesarios en el proyecto demo

| Equipo | Agentes | Usado en |
|--------|---------|----------|
| `team-simple` | router · frontend-orchestrator · component-worker | Demo 1 |
| `team-parallel` | router · frontend-orch · backend-orch · aggregator · workers | Demo 2 · cambio en caliente |
| `team-autonomous` | router · ui-analyst-worker | Demo 3 · Demo 4 |

### Personalizar antes del directo

Abre `index.html` y busca los siguientes placeholders:

| Placeholder | Dónde | Qué poner |
|-------------|-------|-----------|
| `Marzo 2026` | Slide 1.1 (portada) | Fecha real del directo |
| `tu-usuario` | Slide 8.2 (recursos) | Tu usuario de GitHub |
| `[fecha + tema]` | Slide 8.3 (cierre) | Próximo directo si lo tienes planeado |

## Estructura

```
index.html       ← presentación completa (35 slides, 8 secciones)
assets/
  theme.css      ← tema personalizado con la paleta Agent Teams
  icon.svg       ← logotipo bot (crimson)
prompts.md       ← prompts exactos + checklist + estado Engram por demo
README.md        ← este archivo
```

## Atajos de teclado Reveal.js

| Tecla | Acción |
|-------|--------|
| `→` / `Space` | Siguiente slide |
| `←` | Slide anterior |
| `S` | Speaker notes |
| `F` | Pantalla completa |
| `O` | Vista general |
| `B` | Pantalla negra |
| `Esc` | Salir de pantalla completa / vista general |
