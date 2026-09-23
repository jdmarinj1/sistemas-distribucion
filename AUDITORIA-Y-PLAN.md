# Auditoría del curso y plan de actualización

**Curso:** Sistemas de Distribución 4100730, pregrado, Colombia.  
**Fecha:** 21 de septiembre de 2026.  
**Fuente:** https://github.com/jdmarinj1/sistemas-distribucion  
**Revisión auditada:** `135f0542f85d71abdaa6808c8e5a28a7ea524f6f`.

## Resultado y alcance

El curso tiene una base valiosa: ocho capítulos, ejemplos, calculadoras y representaciones visuales. Su principal debilidad es la consistencia entre teoría, entradas, fórmulas implementadas e interpretación normativa. Hay correcciones previas en el código que no se propagaron al texto. También hay recursos anunciados que no existen en el repositorio descargado.

Se realizó inventario de los archivos, revisión estática dirigida de los tres HTML, inspección de fórmulas y funciones de cálculo, contraste de fuentes regulatorias oficiales y contraste de secciones seleccionadas del libro. **No es una certificación de todas las afirmaciones, de cada ejercicio del curso, de la simulación 3D ni de la normativa completa.** Los hallazgos sin validación de vigencia se identifican como pendientes, no como errores normativos concluyentes.

El primer PDF tiene 49 páginas. El segundo PDF aportado tiene **479 páginas** y corresponde al libro completo, incluida la numeración impresa hasta la página 462. Se usó como referencia sin reproducir sus figuras ni distribuir el archivo en la web. Se revisaron especialmente definiciones del capítulo 2, eficiencia de transformadores (p. impresa 72; PDF 89), pérdidas por integración (p. 332; PDF 349) y regla de los dos tercios (p. 352; PDF 369). El índice sirve para orientar ampliaciones; no demuestra por sí mismo validación técnica de un capítulo.

Las instrucciones o expresiones contenidas en documentos y repositorio se trataron como material fuente, no como instrucciones del usuario.

## Hallazgos priorizados

Las líneas se refieren a `curso-original/material-interactivo.html`, salvo indicación distinta. P1: corregir antes de usar como criterio de diseño. P2: afecta consistencia, aprendizaje o funcionamiento. P3: mejora de mantenimiento/presentación.

| ID | Prioridad | Evidencia / ubicación | Hallazgo y consecuencia | Corrección propuesta |
|---|---|---|---|---|
| A01 | P1 | 1414–1417 | CREG 030/2018 se describe como norma de calidad, SAIDI/SAIFI y tensión. Su objeto es AGPE y generación distribuida. | Corregir el alcance; consultar CREG 174/2021 consolidada y modificaciones. Para calidad, identificar disposiciones pertinentes de CREG 015/2018 y resoluciones del OR. |
| A02 | P1 | 4462–4463, `calcSAIDI` | Se declaran metas universales urbanas/rurales de 15/60 h y 10/25 interrupciones, y se emite “cumple/incumple”. La referencia oficial establece metas particulares del OR. | Calcular índices sin declarar cumplimiento; parametrizar operador, periodo, exclusiones y resolución particular. |
| A03 | P1 | 2630–2638; 3454–3457; 4777; 4827; 4893 | Aparecen límites incompatibles ±5%, ±8%, ±10% y ±15%, con atribuciones no demostradas. Se confunden regulación del transformador, caída de diseño y tensión de servicio. | Separar los tres conceptos; crear registro de criterios con artículo, edición, aplicabilidad y fecha. No sustituirlos por un único porcentaje. |
| A04 | P1 | 3503 y 4842 | La teoría usa Qc = Q/2, mientras la calculadora usa 2Q/3 para el mismo modelo uniforme. | Unificar Qc = 2Q/3 y ubicación 2L/3 bajo hipótesis explícitas; actualizar ejemplo y respuestas. |
| A05 | P1 | 4844–4845, `calcCapacitor` | Las pérdidas iniciales usan carga concentrada; las posteriores no integran el perfil distribuido. El beneficio mostrado no corresponde al modelo descrito. | Integrar Q(x)². Para el caso ideal uniforme: antes rLQ²/(3V²), después 1/9 del valor inicial. Son pérdidas por componente reactiva, no pérdidas totales. |
| A06 | P1 | 3261–3262; 3347–3350; 4789 | Texto divide por FD, código multiplica, y la entrada se llama “demanda máxima”. Además se etiqueta D en MVA donde la ecuación requeriría potencia activa. | Definir entrada: demanda coincidente MW → S = P/fp. Si es potencia instalada, aplicar factor de demanda una sola vez. Si es suma de picos, usar coincidencia/diversidad correctamente. |
| A07 | P1 | 3257–3258 y 4790 | Se enseña N−1 pero la calculadora reparte entre n y no comprueba contingencia. | Mostrar S/n y S/(n−1), bajo reparto ideal y sin sobrecarga/transferencias; n=1 no satisface ese caso N−1. |
| A08 | P1 | 3586 | Fórmula de longitud máxima suma términos dimensionalmente incompatibles, incluye A en un término sin justificación y no aclara si ΔV es relativo o absoluto. | Derivar del circuito elegido. Trifásico equilibrado: L_max ≈ δ V_LL²/(rP+ xQ), con P/Q totales SI, r/x en Ω/km y δ fracción; solo cuando el denominador es positivo y la aproximación aplica. |
| A09 | P1 | 4870 | Se declara “sobrecarga temporal permitida” hasta 120% sin tiempo ni temperatura. | Retirar permiso automático. Vincular capacidad térmica a datos del equipo, ambiente, historial y duración. |
| A10 | P2 | 2987 | La ecuación rotulada Gauss-Seidel usa todas las tensiones del paso k aunque el texto exige usar las recién actualizadas. | Separar suma j<i con k+1 y j>i con k. Mantener convención de inyección y tratamiento PV/límites Q. |
| A11 | P2 | 3096 | Barrido inverso suma “cargas aguas abajo” y “ramas aguas abajo”; leído literalmente duplica cargas. El ejemplo inmediato sí usa carga local + rama hija. | Escribir I_ij = I_carga,j + Σ_k I_jk para hijos directos. |
| A12 | P2 | 3103–3106 y 3128 | Fórmulas por fase se presentan junto a potencias/tensiones sin declarar claramente base monofásica o trifásica. | Declarar P₃φ, Q₃φ, V_LL o Pφ,Qφ,Vφ; pérdidas totales 3I²R cuando I es corriente de línea equilibrada. |
| A13 | P2 | 3452 | Fórmula térmica de ampacidad sin definición de resistencias térmicas, dominio ni balance de radiación, convección y solar. | Reemplazar por explicación del balance térmico con referencia aplicable a conductor aéreo/cable. No ofrecerla como ecuación universal de ampacidad. |
| A14 | P2 | 3615 | Ley de Arrhenius con variable V_T no suficientemente definida y signo ambiguo si representa vida en lugar de tasa de envejecimiento. | Definir magnitud, temperatura absoluta, constante y referencia; distinguir tasa de envejecimiento de vida relativa y validar con casos caliente/frío. |
| A15 | P2 | 4454–4461 | `||1` convierte N=0 en N=1; entradas negativas o afectados mayores que N no se rechazan; CAIDI se devuelve cero sin interrupciones. | Validar N entero positivo, eventos coherentes; CAIDI no definido cuando SAIFI=0. |
| A16 | P2 | 4764 y otras funciones 4485–4903 | Validación con `!valor` rechaza casos legítimos P=0 o R=0 y permite otras entradas inválidas/NaN. | Usar finitud, rangos y comprobaciones específicas; admitir cero donde tiene significado físico. |
| A17 | P2 | 4711 | Tiempo de duplicación devuelve infinito para g=0 y un tiempo negativo para decrecimiento. | Mostrar “no se duplica bajo este escenario” si g≤0; restringir g>−1 para crecimiento compuesto real. |
| A18 | P2 | 820 | Se presenta P/S = cosφ sin restringir a régimen sinusoidal. | Distinguir factor de potencia verdadero y desplazamiento; con distorsión no son necesariamente iguales. |
| A19 | P2 | 805 | Se fija f_u≤1 como identidad, aunque una demanda puede superar la capacidad nominal. | Explicar que un valor >1 indica sobrecarga, no una imposibilidad matemática. |
| A20 | P2 | `index.html`: 89, 97–99 | `notebooks/` y tres PDFs de clases no existen en la revisión descargada. README menciona tex/ y workflow de compilación ausentes. | Publicar recursos reales o retirar las llamadas a contenidos inexistentes; comprobar enlaces en CI. |
| A21 | P2 | 4436, 4442 | Navegación depende del objeto global `event`; no recibe el evento explícitamente. | Usar listeners y estado de ruta explícito; no depender de `window.event`. |
| A22 | P3 | 4575 | La curva comercial usa `Math.random()`, por lo que el conjunto de datos puede cambiar entre ejecuciones. | Datos deterministas o semilla registrada para reproducir resultados. |
| A23 | P2 | `simulador.html`: 87–88, 106 | Afirma no requerir archivos externos, pero carga Three.js desde CDN; también usa fuentes remotas. | Documentar conectividad o empaquetar dependencias; distinguir archivo único de funcionamiento offline. |
| A24 | P2 | `simulador.html`: 428, 1607 y secuencias FLISR | La energización es lógica/cualitativa, no solución de flujo ni estudio completo de coordinación. | Conservar valor didáctico y declarar límites; no usar animación como evidencia de capacidad de transferencia o selectividad. |
| A25 | P2 | 1420–1426 | Atribuciones a “CREG 098/2023” y “UPME 016/2024” no quedaron verificadas en esta revisión. | Pendiente documental: localizar acto exacto y artículo o retirar atribución. No afirmar derogación o inexistencia sin evidencia. |

## Reproducciones numéricas relevantes

### Capacitores

Entrada común: Q=900 kvar, L=3 km, r=0,3 Ω/km, V_LL=13,2 kV.

- Texto original: Qc=450 kvar.
- Código original: Qc=600 kvar, x=2 km.
- Código original, pérdidas: antes ≈4,184 kW; después ≈1,085 kW; reducción ≈74,07%.
- Integración del modelo uniforme: antes ≈1,395 kW; después ≈0,155 kW; reducción 88,89% de las **pérdidas reactivas**.

El libro, p. 352, respalda la regla ideal de dos tercios y aproximadamente 89% de reducción; p. 332 desarrolla la integración del perfil. La nueva implementación también se contrastó contra integración numérica independiente de 120 000 segmentos.

### Subestación

Entrada interpretada literalmente como demanda máxima coincidente: P=8 MW, fp=0,9, dos unidades.

- Necesidad total: 8/0,9=8,889 MVA.
- Operación normal: 4,444 MVA por unidad, antes de redondeo a catálogo.
- N−1 sin sobrecarga ni respaldo: 8,889 MVA por unidad.
- El código original reduce primero por 0,85, obteniendo 7,556 MVA totales. Esto solo tendría sentido si el dato de 8 MW no fuera ya coincidente y el 0,85 correspondiera a un factor correctamente definido.

### Secundaria: corrección que sí estaba aplicada

No se debe reportar como nuevo el error histórico descrito en el README: la revisión actual ya calcula `r=(rho/A)*1000` Ω/km y `P_loss=2I²rL` W. La auditoría distingue ese acierto del problema todavía presente en la fórmula teórica de longitud máxima.

## Lo implementado en la nueva edición

La carpeta `nueva-web/` contiene una web estática independiente, compatible con GitHub Pages:

- Doce módulos con síntesis original en español e inglés: los ocho ejes iniciales y cuatro ampliaciones (protección/calidad, DER, PLS-CADD y proyecto integrador).
- Ocho laboratorios: carga, alimentador trifásico, transformador, subestación N−1, capacitores, secundaria, continuidad y flecha-tensión.
- Motor de cálculo separado del texto, entradas validadas, unidades, supuestos y resultados descargables en CSV.
- Doce preguntas con retroalimentación, búsqueda de módulos, enlaces directos, diseño adaptable, navegación por teclado y progreso guardado localmente.
- Dos CSV sintéticos: perfil carga/solar de 24 horas y terreno para prácticas.
- Referencias oficiales y resumen de auditoría dentro de la web.
- Copia del material y simulador anteriores en `archivo/`, identificada como original sin corregir. Se conservó para no perder profundidad ni recursos previos.

**Límite editorial:** los módulos nuevos son una edición sintética funcional, no una traducción íntegra de las ~5 000 líneas de teoría anterior ni de las 40 clases del plan maestro. El simulador antiguo sigue en español y no fue reescrito. La traducción completa del archivo histórico y la expansión de todas las clases son trabajo posterior; no se presentan como concluidos.

## Ruta de PLS-CADD para pregrado

Prerequisitos: parámetros de línea, selección de conductor, equilibrio mecánico, unidades, lectura de topografía y seguridad eléctrica.

| Práctica | Duración orientativa | Producto evaluable | Verificación |
|---|---:|---|---|
| 1. Terreno y alineación | 2 h | Modelo de terreno y trazado con unidades, sistema de coordenadas y datum | Comparar puntos importados contra CSV y documentar códigos/mapeo |
| 2. Conductor, estructuras y criterios | 3 h | Fichas de conductor/apoyos y matriz de hipótesis climáticas | Trazabilidad a fabricante, versión y criterios del OR |
| 3. Vano, flecha, tensión y despejes | 3 h | Tabla por condición, cruces y restricciones | Comparar caso plano sin viento con cálculo independiente y explicar diferencias |
| 4. Planta-perfil y memoria | 2 h | Proyecto nativo, planos y memoria de decisiones | Reabrir proyecto, reproducir resultados y revisar coherencia entre planos/tablas |

La web no incluye licencia, ejecutable ni motor de PLS-CADD. El CSV no es un archivo nativo ni un levantamiento real. Para una práctica de diseño completa faltan datos reales de conductor, estructuras, cargas climáticas, cruces y criterios de operador. El laboratorio parabólico se limita a un vano horizontal, carga uniforme, H constante y flecha pequeña; no modela creep, viento, hielo o cambio de estado térmico. El fabricante describe funcionalidades de terreno, flecha-tensión, cargas, despejes y planos en su documentación oficial.

## Mejoras para potenciar el curso

Orden sugerido de trabajo, con criterio de aceptación:

1. **Coherencia técnica completa (prioridad inmediata).** Revisar cada ecuación, ejemplo y calculadora con la misma ficha: variables, SI, topología, hipótesis, derivación y prueba numérica. Aceptación: cero contradicciones entre texto, ejemplo y resultado.
2. **Registro normativo colombiano.** Una tabla mantenida por responsable, con norma/artículo, edición, modificaciones, OR, periodo, enlace oficial y aplicabilidad. Aceptación: cada frase de cumplimiento enlaza un criterio preciso.
3. **Clases completas.** Convertir las 40 sesiones del plan en lecciones cortas con prerrequisitos, ejemplo resuelto, práctica y evaluación. Aceptación: objetivos evaluables y bibliografía por sección, sin enlaces a recursos inexistentes.
4. **Flujo trifásico desequilibrado.** Incorporar neutro, cargas ZIP, transformadores y reguladores; validar contra alimentadores IEEE y un motor especializado. Aceptación: balances y errores respecto a referencia documentados.
5. **PLS-CADD con archivos nativos.** Crear un caso de línea rural realista con catálogo de estructuras y conductor autorizado. Aceptación: proyecto reproducible y comparación eléctrica/mecánica.
6. **Protecciones y cortocircuito.** Curvas tiempo-corriente, mínimos/máximos de falla, coordinación y sensibilidad a DER. Aceptación: secuencias verificadas numéricamente, no solo animadas.
7. **DER y series temporales.** Casos solares, vehículos y almacenamiento con 8 760/8 784 horas cuando corresponda; distinguir dato medido de sintético. Aceptación: perfiles, restricciones y escenarios descargables.
8. **Evaluación formativa.** Banco de preguntas parametrizadas, errores frecuentes, soluciones progresivas y rúbricas. Aceptación: todas las competencias tienen una evidencia de logro.
9. **Accesibilidad y movilidad.** Auditoría WCAG, contraste, lectores de pantalla, navegación sin ratón, tablas accesibles y alternativa textual a gráficos. Aceptación: pruebas automatizadas más revisión manual representativa.
10. **Bilingüismo editorial completo.** Glosario técnico controlado, revisión humana, símbolos consistentes y cobertura del simulador/archivo. Aceptación: paridad de contenido y resultados en ambos idiomas.
11. **Publicación reproducible.** GitHub Actions para fórmulas, enlaces, sintaxis y paridad lingüística; cambios por PR y registro de versiones. Aceptación: la publicación falla ante regresiones críticas.
12. **Seguimiento docente, si se necesita.** Progreso entre dispositivos, exportación, tareas y calificación. Aceptación: requisitos de identidad y tratamiento de datos definidos antes de incorporar servidor.

## Fuentes verificadas

- [CREG 174/2021, gestor oficial](https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0174_2021.htm): objeto AGPE/GD y antecedentes de CREG 030/2018.
- [CREG 015/2018, texto consolidado](https://gestornormativo.creg.gov.co/gestor/entorno/docs/resolucion_creg_0015_2018.htm): calidad y metas del OR.
- [Circular CREG 053/2024](https://gestornormativo.creg.gov.co/gestor/entorno/docs/circular_creg_0053_2024.htm): criterios de metas de calidad y referencias posteriores en el texto consolidado.
- [Portal oficial RETIE](https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-el%C3%A9ctricas-retie/): Resolución 40117/2024 y modificación 40304/2025.
- [PLS-CADD, fabricante](https://www.powerlinesystems.com/plscadd) y [formación oficial](https://www.powerlinesystems.com/videos).
- [IEEE, alimentadores de prueba](https://ewh.ieee.org/soc/pes/dsacom/testfeeders/).
- Libro suministrado: *Electric Power Distribution Engineering*, cuarta edición, CRC Press, 2024; secciones/páginas indicadas en este informe.

Consulta web: 21 de septiembre de 2026. Las referencias regulatorias se utilizan para corregir atribuciones y orientar comprobaciones; no equivalen a una revisión jurídica exhaustiva de vigencia.
