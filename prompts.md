# Prompts — Agent Teams Demo

Copia y pega estos prompts en el chat de VS Code durante el directo.
Comprueba el equipo activo en el Dashboard antes de cada demo.

---

## 🔵 Demo 1 — Pipeline Simple

**Equipo activo:** `team-simple`

**Engram:** puede estar en cualquier estado

```
Crea un componente Button con variantes primary y secondary
```

Ejecutar en: `@router`

**Qué observar:**
- El Router detecta el intent `component_creation`
- Escribe `handoff:{taskId}` en Engram y delega al Frontend Orchestrator
- El Orchestrator descompone en: analizar contexto → crear componente
- El Worker genera `Button.tsx` y escribe `frontend:patterns` en Engram

---

## 🟣 Demo 2 — Dispatch Paralelo

**Equipo activo:** `team-parallel`

**Engram:** puede estar en cualquier estado

```
Añade un endpoint de login y el formulario de login en el frontend
```

Ejecutar en: `@router`

**Qué observar:**
- El Router detecta dos dominios (frontend + backend)
- Escribe `task:{id}:subtask:frontend` y `task:{id}:subtask:backend` en Engram
- Llama a `agent-teams-dispatch-parallel` → se abren DOS chats a la vez
- Frontend Orchestrator y Backend Orchestrator trabajan en paralelo
- Cuando ambos terminan, TaskCoordinator dispara al Aggregator automáticamente
- El Aggregator recoge `task:{id}:subtask:*:result` de Engram y unifica

---

## 🔴 Demo 3 — Worker Autónomo (primera vez)

**Equipo activo:** `team-autonomous`

**Engram:** ⚠️ DEBE ESTAR LIMPIO — borra la clave `ui:analysis:*` antes de ejecutar

```
Analiza todos los componentes de /src/ui y dime cuáles no tienen tests
```

Ejecutar en: `@ui-analyst-worker`

**Qué observar:**
- El Worker va directamente a ejecutar (sin Router ni Orchestrator)
- Recorre el filesystem de `/src/ui` en busca de componentes sin tests
- Escribe el resultado en Engram: `ui:analysis:{fecha}`

**⏱️ Anota el tiempo** → será el valor "Demo 3" en la slide de contraste.

**⚠️ NO resetees Engram después de esta demo.** La Demo 4 depende de que el resultado esté persistido.

---

## 🟡 Demo 4 — El poder de Engram (segunda vez)

**Equipo activo:** `team-autonomous`

**Engram:** ✅ DEBE TENER el resultado de la Demo 3 — NO resetear entre demos 3 y 4

```
Analiza todos los componentes de /src/ui y dime cuáles no tienen tests
```

Ejecutar en: `@ui-analyst-worker`

**Qué observar:**
- El Worker lee `ui:analysis:{fecha}` de Engram al empezar
- Devuelve el resultado sin recorrer el filesystem de nuevo
- La respuesta llega en segundos (comparar con el tiempo de Demo 3)

---

## 🟢 Demo 5 — Cambio de equipo en caliente

No hay prompt especial. La demo es una demostración visual del Dashboard.

**Pasos en vivo:**
1. Dashboard → Team Manager
2. Seleccionar `team-parallel` → "Set as active"
3. Sync → ver cómo `.github/agents/` se actualiza
4. Repetir el prompt de la Demo 1 en `@router` y observar cómo ahora tiene
   acceso a orchestrators de frontend Y backend

---

## Checklist pre-directo

| Paso | Estado |
|------|--------|
| Extensión Agent Teams instalada y activa | ☐ |
| Engram instalado y configurado (`.vscode/mcp.json`) | ☐ |
| Los tres equipos cargados en el Dashboard | ☐ |
| `team-simple` activo al inicio | ☐ |
| Engram limpio (sin `ui:analysis:*`) antes de Demo 3 | ☐ |
| Links de la slide 8.2 actualizados con URLs reales | ☐ |
| Ponente aparece en slide 1.1 | ☐ |

## Estado de Engram por demo

| Momento | Estado requerido |
|---------|-----------------|
| Antes de Demo 1 | Cualquiera |
| Antes de Demo 2 | Cualquiera |
| Antes de Demo 3 | **Limpio** — sin `ui:analysis:*` |
| Entre Demo 3 y 4 | **NO resetear** |
| Después de Demo 4 | Puedes mostrar las claves escritas en Engram como bonus visual |
