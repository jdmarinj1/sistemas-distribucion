# Revisión de ejemplos, diseño y simulador — 22/09/2026

Base: repositorio público jdmarinj1/sistemas-distribucion, commit `135f0542f85d71abdaa6808c8e5a28a7ea524f6f`, rama main contrastada mediante fetch. El original se conserva sin modificaciones en `archivo/`. Esta revisión amplía la auditoría previa; no certifica todos los enunciados originales ni la vigencia integral de todas sus referencias.

## Correcciones adicionales

| Hallazgo | Tratamiento en la edición nueva |
|---|---|
| Curso inicial excesivamente resumido | 48 subsecciones bilingües, navegación interna, 13 problemas propuestos con pistas y soluciones, además de actividades y 12 autoevaluaciones |
| Tabla del sistema confunde rangos típicos y clasificación | Funciones, STN/STR/SDL y niveles separados; fuente CREG 015/2018 art. 3 |
| EPR definido como polietileno reticulado | EPR: caucho de etileno-propileno; XLPE: polietileno reticulado |
| Ventaja subterránea y multiplicador económico presentados como universales | Comparación dependiente del lugar, datos y ciclo de vida; eliminado factor fijo 3–10× |
| 1000 kVA presentado como tamaño superior a 1023,5 kVA | Corrección explícita en ejemplo de cuatro grupos; selección condicionada a perfil, ambiente y criterios |
| Carga biescalón con redondeos prematuros | Fᴸ recalculado: 0,63762; Fpérd=0,47222 bajo supuestos constantes |
| Coeficientes de pérdidas declarados urbano/rural con validez general | Se presentan como hipótesis empíricas, no requisitos o clasificación universal |
| Doblar demanda con crecimiento nulo/negativo | Resultado «No aplica»; se rechazan denominadores cero y entradas no finitas |
| Simulador usa arista fallada como circuito abierto | La falla permanece conectada; la isla afectada se representa disparada en el modelo simplificado |
| Cierre manual puede unir dos fuentes | Rechazo por análisis de componentes conexas; no equivale a verificación de sincronismo |
| Reinicio deja temporizadores o reparación diferida | Reinicio recarga únicamente la vista; callback de reparación adicionalmente condicionado a la ejecución actual |
| Maniobra durante secuencia física automática | Bloqueo manual; falla permanente requiere reinicio del escenario para reparación educativa |

## Cobertura docente

1. Sistema colombiano, redes aéreas, subterráneas, comparación y dos problemas.
2. Curvas, factores, transformación, pérdidas y continuidad; seis ejemplos originales (perfil de dos horas y cinco casos recuperados) más problema propuesto.
3. Proceso, pronóstico, optimización y evaluación económica.
4. Tipos, circuito equivalente, regulación/conexiones, eficiencia/térmica.
5. Bases, Gauss–Seidel corregido, Newton–Raphson, barrido y pérdidas.
6. Subtransmisión, equipos, barras y N−1/cortocircuito.
7. Topologías, conductores/ampacidad, protección y compensación.
8. Secundarios, caída/longitud, acometidas/medida, calidad/térmica.
9–12. Protección/calidad, DER, PLS-CADD y proyecto integrador ampliados.

El contenido se ha reescrito y reorganizado; no es una copia literal de cada pantalla ni de todos los desarrollos de las 40 clases. Las calculadoras simplificadas no son solucionadores completos de flujo o coordinación. Se mantiene acceso explícito al archivo original para consultar material no migrado, con advertencia de que conserva sus errores.

## Fuentes de diseño suministradas

| Documento | Edición / identificación | Uso |
|---|---|---|
| CHEC cap. 6 | MA-DI-02-002-001 V47, 02/07/2026 | Ruta de diseño MT aérea |
| CHEC cap. 7 | V47 | Selección de estructuras, vanos y esfuerzos; §§7.1–7.16 |
| CHEC cap. 8 | V47 | Consideraciones constructivas y entregables |
| CHEC cap. 9 | V47 | MT subterránea; §9.1.4 p. 5: mínimo 60% área libre en el caso descrito |
| CHEC cap. 12 | V47 | Ruta BT aérea |
| CHEC cap. 13 | V47 | BT subterránea; §13.2.1 p. 3: pendiente, recubrimiento y ancho |
| CHEC cap. 15 | V47 | Demanda; ejemplo verificado visualmente en tabla 1 p. 3: diez usuarios, estratos 1–2 con gas, 0,80 kVA/usuario |
| Caso práctico Samaná | Nombre externo RA6-022; título interno RA8-022 | Caso de aislamiento/sobretensiones; discrepancia registrada, sin convertir sus cifras en límites universales |
| GM-012 | EPM, octubre 2019 | Cálculo mecánico de estructuras y sujeciones, distinguido de CHEC V47 |

Los dos archivos locales GM-12 y GM-12 (1) tienen el mismo SHA-1 (`8de36b286cb6772c95a4e367184aece00d2c7384`). Se extrajeron los nueve documentos (210 páginas) para búsqueda y se inspeccionaron visualmente las páginas utilizadas para las verificaciones numéricas. No se validaron exhaustivamente todas las tablas, figuras y disposiciones de esos documentos.

El cap. 7 p. 4 menciona un tramo de 1000 m y posteriormente una interdistancia máxima de 500 m en un caso de retención. Se conserva como asunto por aclarar con el operador: no se automatiza un selector estructural a partir de esa ambigüedad. El caso Samaná contiene una unidad de resistividad que requiere aclaración antes de reutilizarla.

Los PDFs completos, las extracciones privadas y el libro no se incluyen en la web. Las referencias permiten localizar los criterios en el material del docente. Enel queda pendiente de sus documentos; no hereda criterios CHEC.

## Límites de la simulación

Se conservan las tres escenas y el detalle 3D original. Se modifica presentación, dependencia local, reinicio, bloqueo de maniobras y análisis de conectividad. Las fichas y narraciones internas siguen en español; el entorno, las guías y los capítulos nuevos son bilingües. Datos de placa ilustrativos y referencias heredadas requieren contraste para un proyecto real. No se implementan AC, capacidades de transferencia, puesta a tierra, selectividad ni tiempos de protección calculados.

## Sustitución de GitHub Pages

El paquete se organiza para la raíz del repositorio existente. `index.html`, `material-interactivo.html` y `simulador.html` conservan sus nombres de entrada. Los fragmentos antiguos de capítulos y recursos se redirigen a contenido relacionado. No se ha hecho push ni se ha reemplazado el sitio remoto desde esta carpeta de trabajo. Instrucciones y reversión en `PUBLICACION.md`.
