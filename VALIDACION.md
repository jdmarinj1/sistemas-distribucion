# Validación de la nueva edición

## Cierre de entrega — 23/09/2026

Se ejecutaron de nuevo las 24 pruebas y comprobaciones de sintaxis, sin fallos. Se restableció la vista previa local y se verificó en el navegador la memoria JSON visible: entradas, resultados, fórmula, fuente CHEC, procedimiento y evaluación geométrica. Paquete de sustitución: `curso-distribucion-reemplazo-github.zip`, con el contenido del sitio directamente en su raíz.

## Ampliación del curso, CHEC y simulador — 22/09/2026

Esta ampliación sustituye la descripción anterior de la web como una síntesis breve. Se mantienen los registros históricos de pruebas más abajo.

- 24 pruebas automatizadas aprobadas: motores de cálculo, límites, unidades, 12 capítulos con 48 subsecciones ES/EN, 13 problemas, ejemplos recuperados, sintaxis de escenas y secuencia de restablecimiento sobre la topología real.
- Comprobación estática de enlaces locales de los HTML nuevos: ningún destino ausente. El archivo histórico se excluye porque conserva los hallazgos originales.
- Navegador: los 12 capítulos renderizan sus subsecciones y problemas; capítulo 1 muestra tabla del sistema, navegación interna, detalles, pistas y soluciones. Se comprobó traducción de problemas a inglés y regreso a español.
- Curva del capítulo 2 cambia entre orden horario y duración, preservando los datos y la energía del ejemplo original.
- Diseño: demanda inicial 8 kVA; ducto inicial 29,25% ocupado y 70,75% libre; diámetro cero muestra error y deshabilita exportación; BT inicial muestra 0,1%, 0,7 m y 0,6 m.
- La memoria JSON se genera y también queda visible en la página. El navegador integrado no confirmó el evento de descarga dentro del tiempo de prueba: no se afirma una descarga/reimportación verificada en ese navegador. La vista JSON permite inspeccionar y copiar el contenido independientemente del guardado.
- Móvil del capítulo 1: viewport y documento de 390 px, sin desbordamiento global; las tablas anchas usan desplazamiento horizontal local. No se realizó una matriz exhaustiva de dispositivos.
- Tres escenas inspeccionadas visualmente; dependencia Three.js local. Mejoras en contraste, tipografía, tamaño de controles, distribución de ficha, encuadre y leyendas.
- Maniobra manual SW52 rechazada porque uniría fuentes. Secuencia automática completa: aislamiento, transferencias, reparación y cero usuarios sin servicio al final. El test de topología confirma que solo T10 permanece aislado antes de reparar y que no se unen fuentes durante la secuencia.
- Red física: intento de maniobra durante simulación rechazado con registro; reinicio devuelve consola y dispositivos al estado normal. El reinicio de vista destruye temporizadores y animaciones del documento anterior.
- Recuento corregido: 3120 usuarios en la red, 1900 en el alimentador afectado. Se retiran corrientes estáticas que podían confundirse con resultados calculados.

El modelo 3D sigue siendo cualitativo. No se verifican capacidades de transferencia, flujo AC, selectividad real o tiempos calculados. Las fichas/narraciones heredadas permanecen en español y requieren revisión de sus referencias antes de un uso de ingeniería. La incorporación CHEC es una ruta didáctica con verificaciones parciales, no un motor integral de diseño ni revisión exhaustiva de las 210 páginas suministradas. No se ejecutó PLS-CADD ni se publicó en GitHub.

## Adaptación UNAL — 22 de septiembre de 2026

- Diez pruebas del motor de cálculo aprobadas después de integrar la nueva cabecera.
- Sintaxis de `unal-ui.js` comprobada.
- Escudo SVG cargado y tipografía Ancízar aplicada desde archivos locales.
- Cabecera, menú y panel de accesibilidad comprobados en español e inglés.
- Alto contraste activado y restablecido; aumento de texto a 1,1× comprobado.
- Laboratorio de flecha: vano 200 m produce flecha 5 m y despeje 7 m, manteniendo la interfaz institucional.
- Sin desbordamiento del documento en tamaños de viewport 390 y 1440 px en las rutas inspeccionadas.
- Sin errores de consola registrados en el recorrido de comprobación.
- Inspección visual de portada móvil y capítulo 1 en escritorio. No se afirma auditoría WCAG exhaustiva.

El registro siguiente corresponde a la primera edición y conserva su fecha original.

Fecha: 21 de septiembre de 2026.

## Pruebas automatizadas

`node --test tests/engine.test.cjs`: **10 pruebas aprobadas, 0 fallidas**.

1. Energía/factor de carga: ejemplo manual, energía cero y límites físicos.
2. Alimentador: pérdidas comprobadas con 3I²R; carga cero, R cero, carga reactiva y flujo inverso.
3. Transformador: cargabilidad y pérdidas/eficiencia contra valores de referencia.
4. Subestación: capacidad normal/N−1, n=1 y rechazo de número fraccionario de unidades.
5. Capacitores: contraste con integración numérica independiente de 120 000 segmentos del perfil distribuido.
6. Secundaria: ida/retorno y escalamiento con corriente y longitud.
7. Flecha: caso de referencia, cuadrado del vano y comparación con catenaria para flecha pequeña.
8. Continuidad: eventos repetidos, CAIDI indefinido sin interrupciones y rechazo de conteos inválidos.
9. Todos los cálculos: rechazo de NaN y valores infinitos en cada entrada.
10. Doce módulos: presencia de texto ES/EN y consistencia de índices de respuesta.

Sintaxis de app.js, engine.js y content.js comprobada con Node. Destinos de recursos locales nuevos comprobados en disco. Las dependencias y enlaces del archivo histórico no se certifican como corregidos.

## Pruebas en navegador

- Renderizados los doce módulos en español y los doce en inglés, esperando el título correspondiente a cada ruta.
- Ocho laboratorios producen los resultados iniciales esperados.
- Flecha: cambiar vano de 100 a 200 m cambia flecha de 1,25 a 5 m; idioma conserva la entrada y el resultado.
- Pregunta PLS-CADD: respuesta correcta muestra explicación.
- Marcar módulo y recargar conserva el estado; el marcado de prueba se retiró al terminar.
- Idioma inglés conservado al recargar.
- Energía superior a pico×periodo rechazada; energía cero aceptada.
- Buscar PLS devuelve un módulo.
- Accesibles páginas de recursos (9 bloques) y auditoría (10 hallazgos resumidos más enlace al informe completo de 25).
- Botón de exportación CSV ejercitado; no se realizó una reimportación del archivo descargado.
- Sin errores de consola registrados durante el recorrido de la nueva edición.
- Comprobación de anchura: 1440 px de viewport/1440 px de documento en escritorio; 390/390 px en portada y laboratorio de capacitores móvil.
- Inspección visual de portada y laboratorio; la captura ampliada del navegador integrado tuvo artefactos de composición, por lo que no se presenta como evidencia de una auditoría visual exhaustiva de escritorio.

## Límites pendientes

No se realizó una auditoría WCAG completa, pruebas en todos los navegadores, ejecución real de PLS-CADD, validación del simulador histórico, revisión de cada enunciado previo ni verificación jurídica completa de todas las referencias. No hay motor AC trifásico iterativo en esta entrega. El laboratorio de alimentador es una aproximación explícita y el de flecha es parabólico.

El curso nuevo es sintético: ampliar las 40 clases, traducir el archivo histórico y producir proyectos nativos PLS-CADD requiere una siguiente etapa editorial. El sitio no se ha publicado remotamente; la vista previa es local.
