from pathlib import Path
import re

p=Path('docs/PLAN CANÓNICO WEB/PLAN_CANONICO_VISO_WEB_STUDIO.md')
t=p.read_text(encoding='utf-8')

def rep(a,b):
    global t
    t=t.replace(a,b)

rep('## 3. ESTADO INICIAL VERIFICADO\n','## 3. ESTADO PREVIO A LA AUDITORÍA\n\n> Este diagnóstico corresponde a la percepción inicial del proyecto. El estado verificado vigente está definido por `WEB-AUD-001` a `WEB-AUD-012`.\n')
rep('## 4. ESTADO GENERAL INICIAL\n','## 4. PERCEPCIÓN INICIAL PREVIA A LA AUDITORÍA\n')
for pat in [r'^## (5\.[1-8]\b.*)$',r'^## (6\.[1-2]\b.*)$',r'^## (8\.[1-3]\b.*)$',r'^## (9\.[1-8]\b.*)$',r'^## (12\.[1-8]\b.*)$',r'^## (15\.1\b.*)$',r'^## (RIESGO [1-6]\b.*)$',r'^## (23\.[1-4]\b.*)$',r'^## (FASE ACTUAL|ÚLTIMA TAREA APROBADA|SIGUIENTE TAREA|ESTADO DE LA FASE ANTERIOR|RESTRICCIONES VIGENTES)$']:
    t=re.sub(pat,r'### \1',t,flags=re.M)
t=re.sub(r'^## Objetivo$','### Objetivo',t,flags=re.M)
rep('##### Puerta de aprobación Fase 1 — CERRADA DOCUMENTALMENTE','### Puerta de aprobación Fase 1 — CERRADA DOCUMENTALMENTE')
rep('Estado de cierre propuesto','Estado de cierre vigente')
rep('Continuidad después de aprobación','Continuidad vigente')
rep('Continuidad despues de aprobacion','Continuidad vigente')
rep('##### 14.1 Después de aprobación','##### 14.1 Estado vigente')
rep('Después de aprobación explícita:','Continuidad vigente:')
for pat in [r'`(WEB-AUD-\d{3})` podrá marcarse como completada cuando se apruebe:',r'`(WEB-AUD-\d{3})` podra marcarse como completada cuando se apruebe:',r'`(WEB-AUD-\d{3})` podrá aprobarse cuando se acepte:']:
    t=re.sub(pat,r'`\1` fue aprobada con los siguientes criterios cumplidos:',t)
rep('[x] WEB-AUD-004 — Pendiente de aprobación explícita','[x] WEB-AUD-004 — Inventariar contenido administrable')
rep('`WEB-AUD-004` fue desarrollada, pero no se marca aprobada dentro de este documento porque no existe una aprobación explícita registrada.\n\n','`WEB-AUD-004` está aprobada documentalmente y forma parte de la continuidad vigente de la Fase 1.\n\n')
rep('#### 16. Criterios de aprobacion','#### 16. Criterios de aprobación cumplidos')
rep('#### 17. Estado de cierre vigente\n\n```text\nWEB-AUD-007 — PROPUESTA PARA APROBACION\n```','#### 17. Estado de cierre vigente\n\n```text\nWEB-AUD-007 — APROBADA\n```')
rep('La marca de `WEB-AUD-007` solo se aplicara despues de aprobacion explicita.\n','')
s=t.find('#### 16. Criterios de aprobación cumplidos'); e=t.find('#### 17. Estado de cierre vigente',s)
if s<0 or e<0: raise RuntimeError('WEB-AUD-007 no localizado')
b=re.sub(r'^- \[ \]','- [x]',t[s:e],flags=re.M); t=t[:s]+b+t[e:]
rep('`WEB-AUD-010` permanece en propuesta hasta aprobación explícita.','`WEB-AUD-010` queda aprobada documentalmente.')
rep('| Tareas derivadas por materializar | **21**                                      |','| Tareas derivadas registradas                | **21**                                      |\n| Tareas derivadas pendientes de materializar | **0**                                       |')
rep('| Siguiente tarea tras aprobación   | `WEB-PRD-001 — Definir perfiles de usuario` |','| Siguiente tarea vigente             | `WEB-PRD-001 — Definir perfiles de usuario` |')
rep('#### 4. Tareas derivadas que quedan materializadas por esta consolidación','#### 4. Tareas derivadas materializadas por esta consolidación')
rep('Estas tareas deben insertarse físicamente una sola vez en su fase propietaria. Su definición en esta sección elimina el estado de “mención narrativa”.','Estas tareas quedaron insertadas físicamente una sola vez en su fase propietaria. Su definición en esta sección elimina el estado de “mención narrativa”.')
rep('##### 4.1 Bloques listos para insertar','##### 4.1 Verificación de inserción')
rep('Queda prohibido registrar una brecha mediante:\n\n- tareas específicas `WEB-PAG-001` a `WEB-PAG-075` según `WEB-AUD-012`;\n- `WEB-QA-*`;','Queda prohibido registrar una brecha mediante:\n\n- `WEB-PAG-*`;\n- `WEB-QA-*`;\n- cualquier otra familia genérica;')
rep('Las referencias tareas de diseño identificadas en `WEB-AUD-012` y tareas responsive identificadas en `WEB-AUD-012` se sustituyen por tareas existentes y exactas de producto, renderer, páginas y QA. No se crean familias paralelas sin necesidad.','Las referencias `WEB-DS-*` y `WEB-RSP-*` fueron sustituidas por tareas existentes y exactas de producto, renderer, páginas y QA. No se crean familias paralelas sin necesidad.')
rep('Ubicación recomendada: después de la última tarea tareas específicas `WEB-DB-001` a `WEB-DB-020` según `WEB-AUD-012`.','Ubicación recomendada: después de `WEB-DB-019`.')
rep('**Tareas vinculadas:**\n\n- tareas específicas `WEB-PAG-001` a `WEB-PAG-075` según `WEB-AUD-012`\n- revisión de contenido previa al lanzamiento.','**Tareas vinculadas:**\n\n- `WEB-PRD-011`\n- `WEB-BLD-001`\n- `WEB-BLD-002`\n- `WEB-BLD-003`\n- `WEB-BLD-004`\n- `WEB-QA-023`')
rep('**Tareas vinculadas:**\n\n- `ADR-WEB-001`\n- `WEB-ARC-001`\n- tareas específicas `WEB-DB-001` a `WEB-DB-020` según `WEB-AUD-012`','**Tareas vinculadas:**\n\n- `ADR-WEB-001`\n- `WEB-ARC-001`\n- `WEB-DB-001`\n- `WEB-DB-002`\n- `WEB-DB-003`\n- `WEB-DB-004`\n- `WEB-DB-018`\n- `WEB-DB-019`')
ls=t.splitlines()
for i,line in enumerate(ls):
    m=re.match(r'^(\| `WEB-GAP-(?:168|169|170|171|172|173|174|175|176|177)` \|.*?\|\s*(?:Crítica|Alta|Media)\s*\|).*(\|)$',line)
    if m and i<12000: ls[i]=f'{m.group(1)} Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. {m.group(2)}'
t='\n'.join(ls)+('\n' if t.endswith('\n') else '')
sec=re.compile(r'### 23\.2 Marcación\n\n.*?(?=\n### 23\.3 Evidencia)',re.S)
new='''### 23.2 Marcación

El significado de `[x]` depende de la naturaleza de la tarea:

| Tipo de tarea | Significado de `[x]` |
| --- | --- |
| Auditoría, análisis o definición documental | Resultado desarrollado, validado y aprobado documentalmente |
| Implementación, migración, seguridad, QA u operación | Resultado implementado y validado funcionalmente |

Una tarea documental puede marcarse `[x]` aunque las brechas detectadas permanezcan abiertas, siempre que cada brecha tenga:

1. identificador;
2. tarea propietaria;
3. momento de cierre;
4. evidencia de origen;
5. estado vigente.

Una tarea de implementación no se considerará completada por:

- existir una tabla vacía;
- existir una pantalla sin funcionalidad;
- compilar;
- tener un componente parcial;
- tener solo infraestructura;
- funcionar únicamente en local.
'''
t,n=sec.subn(new,t,count=1)
if n!=1: raise RuntimeError('23.2 no reemplazado')
a=t.find('## 21. DEFINICIÓN DE MVP'); z=t.find('\n---\n\n## 22. DEFINICIÓN DE PROGRAMA COMPLETO',a)
if a<0 or z<0: raise RuntimeError('MVP no localizado')
m=re.sub(r'^### \[ \] ','- [ ] ',t[a:z],flags=re.M); t=t[:a]+m+t[z:]
phase=t.index('\n## FASE 2 — DEFINICIÓN FUNCIONAL DE VISO WEB STUDIO')
left=t[:phase].replace('Criterios de aprobación\n','Criterios de aprobación cumplidos\n').replace('Criterios de aprobacion\n','Criterios de aprobación cumplidos\n')
t=left+t[phase:]
rep('Propuesta vigente','Aprobada')
anchor='| 2026-07-23.5 | 2026-07-23 | Cierre documental de Fase 1 y apertura de Fase 2              | Vigente     |'
entry='| 2026-07-23.6 | 2026-07-23 | Corrección de estados internos, referencias y jerarquía final | Vigente     |'
if entry not in t:
    if anchor not in t: raise RuntimeError('Registro global no localizado')
    t=t.replace(anchor,anchor+'\n'+entry,1)
t=re.sub(r'\n{4,}','\n\n\n',t)
p.write_text(t,encoding='utf-8')
# validation
inside=False; hs=[]
for no,line in enumerate(t.splitlines(),1):
    if line.strip().startswith('```'): inside=not inside; continue
    if not inside and (m:=re.match(r'^(#{1,6})\s+',line)): hs.append((no,len(m.group(1)),line))
assert sum(1 for _,l,_ in hs if l==1)==1
for x,y in zip(hs,hs[1:]): assert y[1]<=x[1]+1,(x,y)
for bad in ['Estado de cierre propuesto','Pendiente de aprobación explícita','WEB-AUD-007 — PROPUESTA PARA APROBACION','`WEB-AUD-010` permanece en propuesta','Tareas derivadas por materializar','Solo se marcará `[x]` cuando esté implementado y validado.','tareas específicas `WEB-PAG-001` a `WEB-PAG-075`','tareas específicas `WEB-DB-001` a `WEB-DB-020`']:
    assert bad not in t,bad
matrix=t[t.index('#### 6. Matriz canónica completa'):t.index('#### 7. Reglas de ejecución y cierre')]
g=[int(v) for v in re.findall(r'^\| `WEB-GAP-(\d{3})`',matrix,re.M)]
assert g==list(range(1,205)),len(g)
print('OK',len(t.splitlines()),len(hs),len(g))
