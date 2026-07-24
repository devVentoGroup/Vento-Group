from pathlib import Path
import re

p = Path("docs/PLAN CANÓNICO WEB/PLAN_CANONICO_VISO_WEB_STUDIO.md")
s = p.read_text(encoding="utf-8")

s = s.replace(
    "# PLAN CANÓNICO DE IMPLEMENTACIÓN  \n# VISO WEB STUDIO + VENTO GROUP WEB",
    "# PLAN CANÓNICO DE IMPLEMENTACIÓN — VISO WEB STUDIO + VENTO GROUP WEB",
    1,
)
s = s.replace(
    "| Estado                              | **PROPUESTA PARA APROBACIÓN**                                            |\n| Fase actual                         | Preparación y auditoría                                                  |",
    """| Estado                              | **EN EJECUCIÓN — FASE 2**                                                |
| Fase actual                         | **FASE 2 — Definición funcional de VISO Web Studio**                     |
| Última tarea aprobada               | `WEB-AUD-012 — Consolidar brechas`                                       |
| Siguiente tarea                     | `WEB-PRD-001 — Definir perfiles de usuario`                              |
| Estado de la Fase 1                 | **CERRADA DOCUMENTALMENTE**                                              |""",
    1,
)

s = s.replace(
    "3. no tenga brechas críticas abiertas;",
    "3. no tenga brechas críticas abiertas cuya solución corresponda al alcance directo de esa misma tarea;",
    1,
)
s = s.replace(
    "5. las nuevas brechas hayan sido asignadas a tareas.\n",
    """5. las nuevas brechas hayan sido asignadas a tareas.

En tareas de auditoría, análisis o definición documental, una brecha descubierta no impide cerrar la tarea cuando:

1. quedó identificada;
2. tiene identificador;
3. tiene tarea propietaria;
4. tiene momento de cierre;
5. tiene evidencia de origen.

La aprobación documental no implica el cierre de la brecha.
""",
    1,
)

for n in range(1, 13):
    ident = f"WEB-AUD-{n:03d}"
    s = re.sub(
        rf"\[ \]\s*(\*\*)?{re.escape(ident)}",
        lambda m: "[x] " + (m.group(1) or "") + ident,
        s,
    )
    s = s.replace(f"{ident} — PROPUESTA PARA APROBACIÓN", f"{ident} — APROBADA")
    s = s.replace(f"{ident} — Propuesta para aprobación", f"{ident} — APROBADA")

starts = [(m.start(), int(m.group(1))) for m in re.finditer(r"^# WEB-AUD-(\d{3})\b", s, flags=re.M)]
for i in range(len(starts) - 1, -1, -1):
    start, n = starts[i]
    if not 1 <= n <= 12:
        continue
    end = starts[i + 1][0] if i + 1 < len(starts) else s.find("\n# FASE 2", start)
    if end < 0:
        end = len(s)
    block = s[start:end]
    block = block.replace("**PROPUESTA PARA APROBACIÓN**", "**APROBADA**")
    block = block.replace("Propuesta vigente", "Aprobada")
    block = block.replace("propuesta vigente", "aprobada")
    block = re.sub(r"La marca de `WEB-AUD-\d{3}` solo se aplicará después de aprobación explícita\.\n?", "", block)
    if n == 12:
        block = block.replace("## 10. Estado de cierre propuesto", "## 10. Estado de cierre vigente")
    else:
        for number in range(8, 14):
            old = f"## {number}. Registro canónico de brechas"
            new = f"## {number}. Registro de hallazgos de origen — histórico"
            block = block.replace(old, new)
        block = block.replace("## Registro canónico de brechas", "## Registro de hallazgos de origen — histórico")
        marker = "Registro de hallazgos de origen — histórico\n"
        if marker in block and "La única fuente canónica vigente" not in block:
            block = block.replace(
                marker,
                marker + "\n> Esta tabla conserva la evidencia original de la auditoría. La única fuente canónica vigente para propiedad, tareas vinculadas, momento de cierre y estado es la matriz consolidada de `WEB-AUD-012`.\n",
                1,
            )
    block = re.sub(
        r"(## \d+\. Criterios de aprobación\n.*?)(?=\n## \d+\.|\Z)",
        lambda m: m.group(1).replace("- [ ]", "- [x]"),
        block,
        flags=re.S,
    )
    s = s[:start] + block + s[end:]

s = s.replace("[ ] WEB-AUD-004 — Pendiente de aprobación explícita", "[x] WEB-AUD-004 — Inventariar contenido administrable")
s = s.replace("Tareas derivadas por materializar | 21", "Tareas derivadas pendientes de materializar | 0")
s = s.replace("Tareas derivadas por materializar     | **21**", "Tareas derivadas pendientes de materializar | **0**")

tasks_by_phase = {
    2: [
        ("WEB-PRD-015", "Definir taxonomía canónica de rutas públicas", ["URL canónica de Nosotros y Ecosistema.", "Rutas de aplicaciones, eventos y servicios.", "Aliases, slugs reservados e idioma.", "Reglas para rutas dinámicas."]),
        ("WEB-PRD-016", "Definir política canónica de redirecciones", ["Redirecciones permanentes y temporales.", "Cambios de slug y rutas eliminadas.", "Preservación SEO y prevención de ciclos.", "Trazabilidad y ownership."]),
    ],
    3: [
        ("ADR-WEB-011", "Aprobar política canónica de fallback y degradación pública", ["Prohibir placeholders, entidades ficticias y CTA `#`.", "Definir comportamiento sin datos y fallas temporales.", "Usar última publicación válida cuando corresponda.", "Diferenciar fallback técnico de contenido editorial."]),
        ("WEB-ARC-008", "Crear paquete compartido `@vento/web-contracts`", ["Schemas y tipos compartidos entre VISO y web.", "Versionado semántico y compatibilidad.", "Build y publicación interna.", "Pruebas de contratos."]),
        ("WEB-ARC-009", "Definir ciclo de vida y migración de schemas de sección", ["Versiones de schema.", "Migraciones de contenido.", "Compatibilidad hacia atrás.", "Deprecación y retiro seguro."]),
    ],
    5: [
        ("WEB-RND-017", "Crear `MediaRenderer` canónico", ["Resolución por asset.", "Imagen, video, dimensiones, focal point y crop.", "Alt text, poster, prioridad y lazy loading.", "Variantes responsive y fallback seguro."]),
        ("WEB-RND-018", "Crear `Data Resolver Registry`", ["Resolvers permitidos por tipo de colección.", "Schemas de entrada y salida.", "Paginación, filtros y orden.", "Errores y caché."]),
        ("WEB-RND-019", "Crear `LinkRenderer` canónico", ["Rutas internas y externas.", "Descargas, correo y teléfono.", "Validación de URL y seguridad.", "Estados deshabilitados y enlaces inexistentes."]),
    ],
    6: [("WEB-PUB-015", "Implementar guardado atómico de contenido relacionado", ["Guardar revisión y relaciones en una transacción lógica.", "Evitar publicaciones parciales.", "Idempotencia y recuperación.", "Registro de auditoría."])],
    9: [("WEB-MED-014", "Resolver entrega pública segura de medios", ["URLs públicas firmadas o CDN según política.", "Cache-control y versionado.", "Separación entre originales y derivados.", "Revocación y eliminación segura."])],
    11: [("WEB-FRM-011", "Implementar suscripción de newsletter o retirar la interfaz", ["Decidir alcance funcional.", "Consentimiento, validación y almacenamiento o proveedor.", "Estados de éxito y error accesibles.", "Retirar la interfaz si no se implementa."])],
    13: [
        ("WEB-MIG-020", "Retirar componentes y composiciones públicas legacy", ["Retirar `CategoryPage` y `HomeEditorialBand` actual.", "Eliminar adaptadores e imports muertos.", "Confirmar que ninguna ruta depende del código retirado."]),
        ("WEB-MIG-021", "Migrar contenido hardcodeado a fuentes canónicas", ["Textos, CTA, navegación, contactos y redes.", "Logos, metadata, pilares y destinos.", "Preservar microcopia técnica en código."]),
        ("WEB-MIG-022", "Depurar y clasificar datos CMS legacy existentes", ["Clasificar registros reales, seeds y placeholders.", "Corregir categorías, slugs y medios.", "Definir conservar, migrar, archivar o eliminar."]),
        ("WEB-MIG-023", "Migrar estilos públicos a tokens y CSS Modules", ["Extraer tokens globales.", "Reducir acoplamiento a `globals.css`.", "Definir ownership de estilos por componente.", "Mantener equivalencia visual."]),
        ("WEB-MIG-024", "Implementar adaptador legacy de solo lectura", ["Leer páginas no migradas sin permitir nueva edición legacy.", "Registrar dependencias pendientes.", "Retirar adaptador al terminar la migración."]),
    ],
    15: [
        ("WEB-PERF-008", "Implementar medición de campo de Core Web Vitals", ["Capturar LCP, INP y CLS p75.", "Segmentar por ruta, dispositivo y release.", "Dashboard y alertas.", "Integración con CrUX, Search Console o RUM."]),
        ("WEB-QA-025", "Validar integridad del Section Registry y sus contratos", ["Verificar claves únicas y schemas.", "Confirmar renderer y editor asociados.", "Validar migraciones de versión.", "Bloquear secciones desconocidas o incompatibles."]),
    ],
}

def task_block(items):
    result = []
    for ident, title, scope in items:
        result.append(f"# [ ] **{ident} — {title}**\n")
        result.extend(f"  - {item}\n" for item in scope)
        result.append("\n")
    return "".join(result)

for phase, items in tasks_by_phase.items():
    items = [item for item in items if not re.search(rf"^# \[ \] \*\*{re.escape(item[0])}\b", s, flags=re.M)]
    if not items:
        continue
    gate = f"### Puerta de aprobación Fase {phase}"
    idx = s.find(gate)
    if idx < 0:
        raise RuntimeError(f"No se encontró la puerta de Fase {phase}")
    s = s[:idx] + task_block(items) + s[idx:]

s = re.sub(
    r"### Puerta de aprobación Fase 1\n.*?(?=\n---\n\n# FASE 2)",
    """### Puerta de aprobación Fase 1 — CERRADA DOCUMENTALMENTE

- [x] Estado real del repositorio auditado.
- [x] VISO Website CMS auditado.
- [x] Supabase auditado.
- [x] Producción auditada.
- [x] Matriz editable vs hardcodeado creada.
- [x] Línea base visual creada.
- [x] Línea base de rendimiento creada.
- [x] Línea base de accesibilidad creada.
- [x] `WEB-GAP-001` a `WEB-GAP-204` consolidadas.
- [x] Todas las brechas tienen tarea propietaria y momento de cierre.

**Siguiente fase:** FASE 2 — Definición funcional.
""",
    s,
    flags=re.S,
)

old_changes = """| Versión      | Fecha      | Cambio                             | Estado    |
| ------------ | ---------- | ---------------------------------- | --------- |
| 2026-07-23.1 | 2026-07-23 | Creación inicial del plan canónico | Propuesta |"""
new_changes = """| Versión      | Fecha      | Cambio                                                       | Estado      |
| ------------ | ---------- | ------------------------------------------------------------ | ----------- |
| 2026-07-23.1 | 2026-07-23 | Creación inicial del plan canónico                            | Reemplazada |
| 2026-07-23.2 | 2026-07-23 | Incorporación de `WEB-AUD-001` a `WEB-AUD-006`                | Aprobada    |
| 2026-07-23.3 | 2026-07-23 | Incorporación de `WEB-AUD-007` a `WEB-AUD-011`                | Aprobada    |
| 2026-07-23.4 | 2026-07-23 | Consolidación de `WEB-GAP-001` a `WEB-GAP-204`                | Aprobada    |
| 2026-07-23.5 | 2026-07-23 | Cierre documental de Fase 1 y apertura de Fase 2              | Vigente     |"""
s = s.replace(old_changes, new_changes, 1)

start = s.find("# 25. PUNTO DE CONTINUIDAD")
end = s.find("\n---\n\n# 26. DECISIÓN RECOMENDADA", start)
if start < 0 or end < 0:
    raise RuntimeError("No se encontró la sección de continuidad")
continuity = """# 25. PUNTO DE CONTINUIDAD

## FASE ACTUAL

**FASE 2 — DEFINICIÓN FUNCIONAL DE VISO WEB STUDIO**

## ÚLTIMA TAREA APROBADA

`WEB-AUD-012 — Consolidar brechas`

## SIGUIENTE TAREA

`WEB-PRD-001 — Definir perfiles de usuario`

## ESTADO DE LA FASE ANTERIOR

**FASE 1 — CERRADA DOCUMENTALMENTE**

Las 204 brechas permanecen `ASIGNADA — ABIERTA` hasta su momento de implementación y validación.

## RESTRICCIONES VIGENTES

- No crear migraciones.
- No modificar Supabase.
- No implementar el renderer.
- No iniciar el editor visual.
- No modificar producción.
- No iniciar la Fase 3 antes de aprobar la puerta completa de la Fase 2.
"""
s = s[:start] + continuity + s[end:]

s = s.replace("`WEB-PAG-*`", "tareas específicas `WEB-PAG-001` a `WEB-PAG-075` según `WEB-AUD-012`")
s = s.replace("`WEB-DB-*`", "tareas específicas `WEB-DB-001` a `WEB-DB-020` según `WEB-AUD-012`")
s = s.replace("`WEB-DS-*`", "tareas de diseño identificadas en `WEB-AUD-012`")
s = s.replace("`WEB-RSP-*`", "tareas responsive identificadas en `WEB-AUD-012`")

s = re.sub(
    r"\[ \]\s*(\*\*)?(WEB-AUD-(?:00[1-9]|01[0-2]))",
    lambda m: "[x] " + (m.group(1) or "") + m.group(2),
    s,
)

lines = []
in_audit = False
for line in s.splitlines():
    if re.match(r"^# WEB-AUD-(?:00[1-9]|01[0-2])\b", line):
        in_audit = True
        lines.append("### " + line[2:])
        continue
    if in_audit and line.startswith("# FASE 2"):
        in_audit = False
    if in_audit and line.startswith("#"):
        level = len(line) - len(line.lstrip("#"))
        text = line[level:].lstrip()
        lines.append("#" * min(level + 2, 6) + " " + text)
        continue
    if line.startswith("# FASE "):
        lines.append("## " + line[2:])
        continue
    if re.match(r"^# \[(?: |x|~|!|-)\] ", line):
        lines.append("### " + line[2:])
        continue
    if re.match(r"^# (?:[5-9]|10|11|1[8-9]|2[0-6])\.", line):
        lines.append("## " + line[2:])
        continue
    lines.append(line)

s = "\n".join(lines) + "\n"
p.write_text(s, encoding="utf-8")

headings = []
in_fence = False
for number, line in enumerate(s.splitlines(), 1):
    if line.startswith("```"):
        in_fence = not in_fence
        continue
    if not in_fence and line.startswith("#"):
        level = len(line) - len(line.lstrip("#"))
        headings.append((number, level, line))

assert sum(level == 1 for _, level, _ in headings) == 1
assert not any(current[1] > previous[1] + 1 for previous, current in zip(headings, headings[1:]))
assert not re.search(r"\[ \].*WEB-AUD-(?:00[1-9]|01[0-2])", s)
for ident in [
    "WEB-PRD-015", "WEB-PRD-016", "ADR-WEB-011", "WEB-ARC-008", "WEB-ARC-009",
    "WEB-RND-017", "WEB-RND-018", "WEB-RND-019", "WEB-PUB-015", "WEB-MED-014",
    "WEB-FRM-011", "WEB-MIG-020", "WEB-MIG-021", "WEB-MIG-022", "WEB-MIG-023",
    "WEB-MIG-024", "WEB-PERF-008", "WEB-QA-025",
]:
    assert len(re.findall(rf"^### \[ \] \*\*{re.escape(ident)}\b", s, flags=re.M)) == 1, ident

print(f"Actualizado: {p}")
print(f"Líneas: {len(s.splitlines())}")
print(f"Encabezados: {len(headings)}")
