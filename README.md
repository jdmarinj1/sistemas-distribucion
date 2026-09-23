# Sistemas de distribución · Aula UNAL ES/EN

Edición del 22 de septiembre de 2026 preparada para **reemplazar el sitio existente** `jdmarinj1/sistemas-distribucion` conservando sus URLs de entrada.

Incluye 12 capítulos con 48 subsecciones bilingües, 13 problemas propuestos con pistas y soluciones, 12 autoevaluaciones, ocho laboratorios del curso, cuatro talleres de ejemplos y cuatro calculadoras parciales de diseño. El capítulo 2 recupera seis ejemplos del original con revisión de hipótesis, resultados y conclusiones.

El taller CHEC reúne demanda, redes aéreas MT/BT y subterráneas MT/BT. Las memorias JSON incluyen entradas, resultados, fórmula, fuente, hipótesis y verificaciones declaradas por el estudiante. El simulador conserva tres escenas: física 3D, planta y restablecimiento; incluye mejoras de presentación, reinicio, bloqueo de maniobras y conectividad. Su entorno es bilingüe; las fichas y narraciones heredadas permanecen en español.

## Vista local

Desde esta carpeta:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8765`. El progreso del curso y el idioma se guardan localmente en el navegador. No hay cuentas ni sincronización. Las entradas del taller se conservan durante la sesión de página; descargar JSON para conservar la memoria.

## Sustituir GitHub Pages

Seguir `PUBLICACION.md`. Copiar el **contenido** del paquete en la raíz del repositorio existente, trabajar en una rama revisable y conservar respaldo. `checks.yml` ejecuta pruebas; no cambia el método de publicación existente. El sitio remoto todavía no se ha modificado.

## Verificación

```sh
node --test tests/*.test.cjs
node --check app.js
node --check lessons.js
node --check lessons-ui.js
node --check workspace.js
```

Los tests cubren cálculos, límites, hipótesis numéricas, cobertura bilingüe y la topología real de la secuencia de restablecimiento. `VALIDACION.md` describe las comprobaciones en navegador y las limitaciones.

## Organización

- `content.js`, `lessons.js`, `recovered-examples.js`: contenido, ampliación y ejemplos revisados.
- `app.js`, `lessons-ui.js`, `engine.js`: curso, interacciones y laboratorios.
- `workspace-data.js`, `workspace.js`, `design-engine.js`: páginas de diseño, ejemplos y entorno del simulador.
- `sim/`, `network-state.js`, `assets/vendor/`: escenas y conectividad; Three.js r128 local con licencia MIT preservada.
- `assets/unal/`: identidad y tipografía originales; procedencia en `IDENTIDAD-UNAL.md`.
- `datos/`: datos sintéticos de práctica.
- `archivo/`: copia histórica sin corregir del material, simulador y plan maestro.
- `AUDITORIA-Y-PLAN.md`, `REVISION-EJEMPLOS-Y-DISENO.md`: revisión técnica y cobertura.

Los modelos son educativos y parciales: no hay flujo AC completo, coordinación real ni certificación del diseño. PLS-CADD se trabaja con metodología y datos de práctica; no se ejecuta ni se suministra su licencia. Las guías privadas y el libro no se redistribuyen en el paquete. No se añade una licencia nueva sobre el material original del curso.
