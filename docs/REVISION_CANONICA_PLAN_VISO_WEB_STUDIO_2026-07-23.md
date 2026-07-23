# REVISIÓN CANÓNICA — PLAN VISO WEB STUDIO

> Revisión del archivo `docs/PLAN_CANONICO_VISO_WEB_STUDIO.md` después de integrar `WEB-AUD-001` a `WEB-AUD-005`.

## 0. Estado de la revisión

| Campo | Valor |
|---|---|
| Fecha | `2026-07-23` |
| Archivo revisado | `docs/PLAN_CANONICO_VISO_WEB_STUDIO.md` |
| Commit base | `d0e2fc3216486f2ae6775cbabb529514f79ffed0` |
| Estado | **REQUIERE CORRECCIÓN DOCUMENTAL ANTES DE CONTINUAR** |
| Cambios de código | Ninguno |
| Cambios de Supabase | Ninguno |
| Cambios de producción | Ninguno |

## 1. Hallazgos críticos

### 1.1 Jerarquía Markdown rota

El documento contiene múltiples encabezados de nivel `#`:

- dos encabezados `#` consecutivos para el título;
- principios, fases y secciones generales en `#`;
- tareas individuales en `#`;
- tareas auditadas extensas también en `#`.

Consecuencia:

- una tarea no contiene jerárquicamente sus apartados;
- al plegar una tarea en VS Code quedan secciones por fuera;
- el documento no tiene una única raíz;
- la navegación por Outline resulta ambigua.

#### Regla obligatoria de corrección

```text
# PLAN CANÓNICO DE IMPLEMENTACIÓN — VISO WEB STUDIO + VENTO GROUP WEB

## 0. Control del documento
## 1. Objetivo general
## 2. Resultado funcional esperado
...
## FASE 1 — Auditoría y línea base

### [x] WEB-AUD-001 — Inventariar todas las rutas públicas
#### 0. Control documental
#### 1. Objetivo
##### 1.1 Apartado interno cuando sea necesario

### [ ] WEB-AUD-006 — Auditar Supabase
```

Reglas:

1. Debe existir exactamente un encabezado `#`.
2. Las fases y capítulos principales usan `##`.
3. Cada tarea usa `###`.
4. Los apartados de una tarea usan `####`.
5. Los subapartados internos usan `#####`.
6. No se permiten saltos de nivel.
7. El compilador o validador documental deberá rechazar más de un H1.

### 1.2 Estado global desactualizado

El control del documento continúa indicando:

```text
Estado: PROPUESTA PARA APROBACIÓN
Fase actual: Preparación y auditoría
```

El plan ya está siendo utilizado como documento de trabajo y contiene tareas aprobadas.

Debe reemplazarse por:

```text
Estado documental: VIGENTE — EN DESARROLLO DOCUMENTAL
Fase actual: FASE 1 — AUDITORÍA Y LÍNEA BASE
Estado de implementación: NO INICIADA
```

No debe confundirse:

- aprobación del plan como marco;
- aprobación individual de cada tarea;
- implementación física.

### 1.3 Continuidad irregular

Estado real de aprobaciones registrado en la conversación:

```text
[x] WEB-AUD-001
[x] WEB-AUD-002
[x] WEB-AUD-003
[ ] WEB-AUD-004 — desarrollada, sin aprobación explícita
[x] WEB-AUD-005
[ ] WEB-AUD-006
```

La aprobación posterior de `WEB-AUD-005` no convierte automáticamente `WEB-AUD-004` en aprobada.

#### Continuidad obligatoria

Antes de iniciar `WEB-AUD-006` se debe resolver una de estas dos opciones:

1. aprobar explícitamente `WEB-AUD-004`; o
2. devolverla a corrección con observaciones concretas.

Hasta entonces:

```text
Tarea documental pendiente de regularización: WEB-AUD-004
Siguiente tarea reservada: WEB-AUD-006
```

### 1.4 `WEB-ARC-005` fue desarrollada fuera de secuencia

`WEB-ARC-005` pertenece a Fase 3 y no debe considerarse aprobada ni completada.

Estado canónico:

```text
[ ] WEB-ARC-005 — NO INICIADA CANÓNICAMENTE
```

El archivo generado anteriormente puede conservarse como borrador de referencia, pero deberá revisarse contra:

- auditoría completa de Fase 1;
- definición funcional de Fase 2;
- ADR aprobados de Fase 3.

No debe copiarse al plan como decisión vigente antes de esas puertas.

## 2. Frontera con el plan integral de Vento OS

### 2.1 Decisión recomendada

El plan web no debe detenerse hasta terminar todo Vento OS.

Se continuará en paralelo con:

- auditoría pública;
- arquitectura editorial;
- experiencia visual;
- componentes públicos;
- responsive;
- accesibilidad;
- SEO;
- rendimiento;
- preparación del renderer;
- definición del editor.

### 2.2 Autoridades documentales

| Tema | Autoridad |
|---|---|
| Página pública y experiencia web | Plan VISO Web Studio |
| Secciones y renderer público | Plan VISO Web Studio |
| Experiencia específica del editor web | Plan VISO Web Studio |
| Identidad y autorización laboral | Plan canónico Vento OS |
| Permisos VISO y guards | Plan canónico Vento OS |
| Clientes Supabase compartidos | Plan canónico Vento OS |
| Arquitectura integral de Supabase | Bloque E3 de Vento OS |
| Migraciones físicas | `vento-shell` y Bloque R |
| Implementación específica de VISO Web Studio | Plan web, respetando contratos anteriores |

### 2.3 Puertas de integración

#### `WEB-GATE-01 — Diseño público`

Permite:

- auditorías;
- blueprints;
- diseño visual;
- componentes públicos;
- contenido;
- accesibilidad;
- SEO;
- rendimiento.

No exige cerrar todo Vento OS.

#### `WEB-GATE-02 — Renderer público`

Exige:

- contratos web aprobados;
- registro de secciones aprobado;
- estrategia de compatibilidad;
- lectura pública segura definida.

#### `WEB-GATE-03 — Mutaciones desde VISO`

Exige:

- permisos editoriales atómicos;
- guards server-side;
- separación editar/publicar;
- auditoría;
- prohibición de `service_role` como sustituto de autorización.

#### `WEB-GATE-04 — Migraciones y corte`

Exige:

- arquitectura de Supabase compatible con E3;
- migraciones en `vento-shell`;
- rollback;
- pruebas RLS;
- plan de compatibilidad legacy.

## 3. Tareas nuevas que deben materializarse

Las auditorías crearon identificadores que deben aparecer físicamente una sola vez en su fase propietaria.

### 3.1 Fase 2 — Producto

```text
[ ] WEB-PRD-015 — Definir taxonomía canónica de rutas públicas
[ ] WEB-PRD-016 — Definir política canónica de redirecciones
```

### 3.2 Fase 3 — ADR y arquitectura

```text
[ ] ADR-WEB-011 — Aprobar política canónica de fallback y degradación pública
[ ] WEB-ARC-005 — Definir arquitectura canónica de componentes públicos
[ ] WEB-ARC-006 — Definir ownership y fuente canónica de cada clase de contenido
[ ] WEB-ARC-007 — Definir sincronización entre entidades operativas y contenido web
[ ] WEB-ARC-008 — Crear paquete compartido @vento/web-contracts
[ ] WEB-ARC-009 — Definir ciclo de vida y migración de schemas de sección
```

### 3.3 Renderer

```text
[ ] WEB-RND-017 — Crear MediaRenderer canónico
[ ] WEB-RND-018 — Crear Data Resolver Registry
[ ] WEB-RND-019 — Crear LinkRenderer canónico
```

### 3.4 Publicación

```text
[ ] WEB-PUB-015 — Implementar guardado atómico de contenido relacionado
```

### 3.5 Formularios

```text
[ ] WEB-FRM-011 — Implementar suscripción de newsletter o retirar la interfaz
```

### 3.6 Medios

```text
[ ] WEB-MED-014 — Resolver entrega pública segura de medios
```

### 3.7 Seguridad

```text
[ ] WEB-SEC-016 — Endurecer serialización y validación de JSON-LD
[ ] WEB-SEC-017 — Eliminar dependencia de service role para lectura pública
[ ] WEB-SEC-018 — Endurecer el CMS legacy mientras continúe operativo
```

### 3.8 Migración

```text
[ ] WEB-MIG-020 — Retirar componentes y composiciones públicas legacy
[ ] WEB-MIG-021 — Migrar contenido hardcodeado a fuentes canónicas
[ ] WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes
[ ] WEB-MIG-023 — Migrar estilos públicos a tokens y CSS Modules
[ ] WEB-MIG-024 — Implementar adaptador legacy de solo lectura
```

### 3.9 Calidad

```text
[ ] WEB-QA-021 — Bloquear placeholders y contenido provisional en publicación
[ ] WEB-QA-022 — Validar integridad del Section Registry
[ ] WEB-QA-023 — Validar calidad integral de VISO Web Studio
```

## 4. Reglas de materialización

Antes de continuar a una tarea posterior:

1. buscar el identificador en todo el documento;
2. confirmar que aparece exactamente una vez como tarea;
3. distinguir menciones de responsables de la definición física de la tarea;
4. insertar la tarea en su fase propietaria;
5. registrar dependencias y puerta;
6. validar jerarquía Markdown;
7. validar continuidad;
8. actualizar registro de cambios.

Una mención dentro de una auditoría no equivale a materialización.

## 5. Aclaraciones necesarias sobre estados

El documento utiliza `[x]` para tareas documentales aprobadas y para implementación validada. Eso puede producir ambigüedad.

Se adopta esta interpretación:

| Contexto | Significado de `[x]` |
|---|---|
| Fases documentales 1 a 3 | Definición o auditoría aprobada |
| Fases de implementación | Implementada y validada |

Cada tarea extensa deberá declarar además:

```text
Tipo de cierre: DOCUMENTAL / IMPLEMENTACIÓN / MIGRACIÓN / QA
```

No debe afirmarse que una auditoría aprobada está implementada.

## 6. Correcciones puntuales adicionales

### 6.1 Título

Reemplazar:

```text
# PLAN CANÓNICO DE IMPLEMENTACIÓN
# VISO WEB STUDIO + VENTO GROUP WEB
```

por:

```text
# PLAN CANÓNICO DE IMPLEMENTACIÓN — VISO WEB STUDIO + VENTO GROUP WEB
```

### 6.2 Punto de continuidad final

El apartado `25. PUNTO DE CONTINUIDAD` continúa indicando `WEB-AUD-001` como primera tarea.

Debe convertirse en un estado dinámico y reflejar:

```text
Última tarea aprobada: WEB-AUD-005
Pendiente de regularización: WEB-AUD-004
Siguiente tarea reservada: WEB-AUD-006
Fase: FASE 1 — AUDITORÍA Y LÍNEA BASE
Restricción: NO IMPLEMENTAR CÓDIGO, MIGRACIONES NI CAMBIOS EN SUPABASE
```

### 6.3 Registro de cambios

Debe agregarse:

```text
2026-07-23.2 — Integración de WEB-AUD-001 a WEB-AUD-005.
2026-07-23.3 — Corrección de continuidad, jerarquía y tareas derivadas.
```

### 6.4 Estado de `WEB-AUD-005`

La tarea fue aprobada explícitamente y debe cambiar de:

```text
Estado: PROPUESTA PARA APROBACIÓN
```

A:

```text
Estado: APROBADA
Tipo de cierre: DOCUMENTAL
```

### 6.5 Estado de `WEB-AUD-004`

Debe permanecer:

```text
Estado: PROPUESTA PARA APROBACIÓN
```

hasta una aprobación explícita.

## 7. Validaciones documentales obligatorias

Crear una tarea de gobierno documental:

```text
[ ] WEB-DOC-001 — Crear validador estructural del plan web
```

Debe comprobar:

- exactamente un H1;
- ausencia de saltos de jerarquía;
- identificadores de tarea únicos;
- tareas derivadas materializadas;
- estados válidos;
- continuidad consistente;
- última tarea aprobada;
- tarea actual;
- siguiente tarea;
- referencias a tareas existentes;
- ausencia de pendientes sin propietario;
- UTF-8 sin mojibake.

Ubicación recomendada:

- sección de gobierno documental previa a Fase 1; o
- Fase 16 si se distingue implementación del validador.

La regla debe existir desde ahora aunque su automatización se implemente después.

## 8. Orden de corrección recomendado

```text
1. Regularizar aprobación de WEB-AUD-004
2. Marcar WEB-AUD-005 como APROBADA
3. Corregir punto de continuidad
4. Materializar tareas derivadas faltantes
5. Normalizar jerarquía Markdown completa
6. Actualizar control y registro de cambios
7. Validar identificadores únicos
8. Continuar con WEB-AUD-006
```

## 9. Decisión de continuidad

No se recomienda iniciar `WEB-AUD-006` hasta completar los puntos 1 a 4.

La normalización integral de encabezados puede ejecutarse en el mismo lote, pero no debe posponerse indefinidamente porque el documento ya presenta problemas de plegado y navegación.
