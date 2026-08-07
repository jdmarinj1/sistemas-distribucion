# Sistemas de Distribución · 4100730

Sitio del curso **Sistemas de Distribución (4100730)** — Universidad Nacional de Colombia, Sede Manizales (2026-I). Publicado con GitHub Pages.

Estructura por **8 capítulos**. Cada capítulo enlaza: teoría interactiva (HTML), teoría en PDF (LaTeX), calculadoras, simulador y autoevaluación.

## Archivos

```
index.html                 Portada del curso (8 capítulos)
material-interactivo.html  Material interactivo (8 capítulos, ~20 calculadoras, gráficos, quiz)
simulador.html             Simulador (3D físico, planta, perfil, unifilar, SmartGrid)
plan-maestro-4100730.pdf   Plan maestro
clases/                    PDFs de clases (los genera el workflow desde tex/)
tex/                       Fuentes LaTeX
notebooks/                 Talleres Python (Colab)
.github/workflows/build.yml  Compila tex/*.tex y publica PDFs
.nojekyll
```

## Deep-links al material

La portada abre cada capítulo con `material-interactivo.html#capN` (cap1…cap8), las calculadoras con `#factores` y la autoevaluación con `#quiz`.

## Correcciones aplicadas a las calculadoras (auditoría)

Sobre la copia `material-interactivo.html` (el resto del material queda intacto):

- **calcSecundaria**: la resistencia estaba en el orden equivocado (dividía por 1000) y había un `×1000` espurio en ΔV y en las pérdidas; resultados ~100–1000× fuera. Corregido: `r = ρ/A × 1000` (Ω/km) y `ΔV = 2·I·L·(r·cosφ + x·sinφ)`.
- **calcSubestacion**: `FD` es factor de demanda/coincidencia (<1); dividir sobredimensionaba. Corregido a `S = D·FD/cosφ`.
- **calcCapacitor**: regla de los 2/3 consistente (`Q_c = 2Q/3` en `x = 2L/3`).

Pendiente de verificación normativa `[verificar]`: umbrales numéricos de SAIDI/SAIFI mostrados (metas CREG vigentes). La calculadora de cortocircuito asume bus infinito (solo impedancia del transformador).

## Publicar (GitHub Pages)

**Settings → Pages**: *Deploy from a branch* → `main` → `/(root)`.
**Settings → Actions → General → Workflow permissions**: *Read and write* (para que el Action publique los PDFs).

## Créditos

Texto guía: Samuel Ramírez Castaño, *Redes de Distribución de Energía* (UNAL Manizales). Complementos: Kersting, Short, Willis, Gönen. Normativa: RETIE, NTC 2050, CREG, normas del OR (CHEC).
