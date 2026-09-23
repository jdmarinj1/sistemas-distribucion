window.COURSE = [
  {
    "id": "cap1",
    "n": 1,
    "title": {
      "es": "La red de distribución",
      "en": "The distribution network"
    },
    "desc": {
      "es": "Del sistema eléctrico al usuario final.",
      "en": "From the power system to the end user."
    },
    "objective": {
      "es": "Identificar topologías, equipos y fronteras del modelo.",
      "en": "Identify topologies, equipment and model boundaries."
    },
    "body": {
      "es": [
        "Una red de distribución enlaza subestaciones, alimentadores primarios, transformadores, circuitos secundarios y usuarios. El diagrama unifilar resume conexiones eléctricas; el plano geográfico describe dónde están los activos. Ninguno sustituye al otro.",
        "En una red radial cada carga tiene una trayectoria de alimentación en operación normal. Un anillo abierto permite transferencias después de aislar una falla; cerrar enlaces exige verificar capacidad, tensión y coordinación de protecciones.",
        "Diferencia tensión entre fases V_LL y fase-neutro V_LN. La relación √3 aplica a un sistema trifásico equilibrado en estrella. Registra también frecuencia, puesta a tierra, fases disponibles y base de potencia."
      ],
      "en": [
        "A distribution network connects substations, primary feeders, transformers, secondary circuits and customers. A single-line diagram represents electrical connections; a geographic plan locates assets. Both are needed.",
        "A radial network provides one operating supply path to each load. An open loop enables transfers after fault isolation; closing ties requires thermal, voltage and protection checks.",
        "Distinguish line-to-line voltage V_LL from line-to-neutral voltage V_LN. The √3 relationship applies to a balanced wye system. Record frequency, grounding, available phases and the power base."
      ]
    },
    "formula": "V_LL = √3 V_LN;  S₃φ = √3 V_LL I",
    "units": {
      "es": "V en voltios, I en amperios, S en VA.",
      "en": "V in volts, I in amperes, S in VA."
    },
    "example": {
      "es": "Con V_LL = 13,2 kV, V_LN ≈ 7,62 kV. Con I = 100 A, S₃φ ≈ 2,286 MVA.",
      "en": "With V_LL = 13.2 kV, V_LN ≈ 7.62 kV. At I = 100 A, S₃φ ≈ 2.286 MVA."
    },
    "task": {
      "es": "Dibuja una subestación, tres tramos, dos transformadores y un enlace normalmente abierto. Identifica qué usuarios pierden suministro ante cada falla.",
      "en": "Draw a substation, three branches, two transformers and a normally open tie. Identify customers affected by each fault."
    },
    "quiz": {
      "q": {
        "es": "¿Un anillo abierto opera normalmente como una red…?",
        "en": "An open loop normally operates as a…"
      },
      "opts": {
        "es": [
          "Radial",
          "Mallada cerrada",
          "Sin protecciones"
        ],
        "en": [
          "Radial network",
          "Closed mesh",
          "Unprotected network"
        ]
      },
      "answer": 0,
      "feedback": {
        "es": "El enlace abierto evita una trayectoria cerrada de alimentación.",
        "en": "The open tie prevents a closed supply path."
      }
    },
    "lab": null,
    "refs": []
  },
  {
    "id": "cap2",
    "n": 2,
    "title": {
      "es": "Cargas y diversidad",
      "en": "Loads and diversity"
    },
    "desc": {
      "es": "Convierte perfiles horarios en decisiones de diseño.",
      "en": "Turn time series into design decisions."
    },
    "objective": {
      "es": "Calcular energía, factor de carga y diversidad sin confundir sus denominadores.",
      "en": "Calculate energy, load factor and diversity with consistent denominators."
    },
    "body": {
      "es": [
        "La demanda es una potencia promediada sobre un intervalo especificado. La energía integra la potencia en el tiempo. No sumes picos individuales como si ocurrieran simultáneamente.",
        "El factor de carga compara potencia promedio con pico del mismo periodo. El factor de demanda compara demanda máxima con potencia instalada. El factor de diversidad compara suma de picos individuales con pico coincidente.",
        "Para corriente proporcional a la carga, resistencia y factor de potencia constantes, las pérdidas de cobre dependen del cuadrado de la carga. El factor de pérdidas se calcula sobre I²; no representa pérdidas de hierro constantes."
      ],
      "en": [
        "Demand is power averaged over a stated interval. Energy integrates power over time. Individual peaks need not occur simultaneously.",
        "Load factor compares average and peak power over the same period. Demand factor compares peak and installed power. Diversity factor compares the sum of individual peaks with the coincident peak.",
        "With current proportional to load, constant resistance and power factor, copper losses depend on squared load. Loss factor is computed from I²; it does not represent constant core losses."
      ]
    },
    "formula": "E = Σ Pᵢ Δtᵢ;  F_L = E/(P_max T);  F_D = Σ P_max,i / P_max,grupo",
    "units": {
      "es": "P en kW, Δt y T en h, E en kWh. F_L entre 0 y 1; F_D ≥ 1 para cargas consumidoras coherentes.",
      "en": "P in kW, Δt and T in h, E in kWh. F_L between 0 and 1; F_D ≥ 1 for consistent consuming loads."
    },
    "example": {
      "es": "E = 12 000 kWh, P_max = 1 000 kW y T = 24 h: F_L = 0,50. Picos de 80 y 60 kW, con pico conjunto de 100 kW: F_D = 1,40.",
      "en": "E = 12,000 kWh, P_max = 1,000 kW and T = 24 h: F_L = 0.50. Peaks of 80 and 60 kW with a group peak of 100 kW give F_D = 1.40."
    },
    "task": {
      "es": "Descarga el perfil de 24 horas. Integra su energía y explica qué cambia al desplazar la carga de la tarde a la madrugada.",
      "en": "Download the 24-hour profile. Integrate energy and explain the effect of shifting evening demand to early morning."
    },
    "quiz": {
      "q": {
        "es": "Si F_D = 1,25, ¿cuál es el factor de coincidencia?",
        "en": "If F_D = 1.25, what is the coincidence factor?"
      },
      "opts": {
        "es": [
          "0,80",
          "1,25",
          "0,25"
        ],
        "en": [
          "0.80",
          "1.25",
          "0.25"
        ]
      },
      "answer": 0,
      "feedback": {
        "es": "Coincidencia = 1/F_D = 0,80.",
        "en": "Coincidence = 1/F_D = 0.80."
      }
    },
    "lab": "load",
    "refs": [
      "book"
    ]
  },
  {
    "id": "cap3",
    "n": 3,
    "title": {
      "es": "Planeación de expansión",
      "en": "Expansion planning"
    },
    "desc": {
      "es": "Demanda, escenarios y decisiones bajo incertidumbre.",
      "en": "Demand, scenarios and decisions under uncertainty."
    },
    "objective": {
      "es": "Comparar alternativas con restricciones técnicas y escenarios de crecimiento.",
      "en": "Compare alternatives under technical constraints and growth scenarios."
    },
    "body": {
      "es": [
        "Primero construye el caso base: demanda coincidente, topología, estado de equipos y restricciones. Después compara refuerzo de conductor, nueva subestación, transferencia de carga y gestión de demanda.",
        "El crecimiento compuesto es un escenario, no un pronóstico garantizado. Construye escenarios bajo, central y alto; separa electrificación, vehículos eléctricos y nuevas cargas industriales.",
        "Evalúa inversión, energía perdida, mantenimiento y energía no suministrada con una misma moneda y fecha base. Descuenta flujos consistentes; aplica las restricciones de tensión, cargabilidad y continuidad antes de elegir por costo."
      ],
      "en": [
        "Build the base case first: coincident demand, topology, asset condition and constraints. Then compare conductor upgrades, new substations, load transfers and demand management.",
        "Compound growth is a scenario, not a guaranteed forecast. Build low, central and high scenarios; separate electrification, electric vehicles and new industrial loads.",
        "Evaluate investment, energy losses, maintenance and unserved energy using a common currency and base date. Discount consistent cash flows; enforce voltage, thermal and continuity constraints before choosing by cost."
      ]
    },
    "formula": "Pₙ = P₀(1+g)ⁿ;  VPN_costos = C₀ + Σ Cₜ/(1+d)ᵗ",
    "units": {
      "es": "g y d en fracción anual; n y t en años. Usar tasas reales con costos reales o nominales con nominales.",
      "en": "g and d as annual fractions; n and t in years. Match real rates with real costs or nominal rates with nominal costs."
    },
    "example": {
      "es": "1 000 kW creciendo 3% anual durante 10 años → 1 343,92 kW. Para g = 0 no existe tiempo finito de duplicación.",
      "en": "1,000 kW growing at 3% annually for 10 years → 1,343.92 kW. At g = 0 there is no finite doubling time."
    },
    "task": {
      "es": "Compara tres escenarios a 10 años (1%, 3%, 5%) y propone el año de refuerzo para una capacidad de 1 400 kW.",
      "en": "Compare three 10-year scenarios (1%, 3%, 5%) and identify an upgrade year for a 1,400 kW capacity."
    },
    "quiz": {
      "q": {
        "es": "¿Qué debe mantenerse consistente al calcular valor presente?",
        "en": "What must be consistent in a present-value calculation?"
      },
      "opts": {
        "es": [
          "Costos reales y tasa real",
          "Costos nominales y tasa real siempre",
          "Solo la potencia pico"
        ],
        "en": [
          "Real costs and real discount rate",
          "Always nominal costs and real rate",
          "Only peak power"
        ]
      },
      "answer": 0,
      "feedback": {
        "es": "Mezclar inflación y descuento de forma inconsistente sesga la comparación.",
        "en": "Inconsistent inflation and discounting bias the comparison."
      }
    },
    "lab": null,
    "refs": [
      "book"
    ]
  },
  {
    "id": "cap4",
    "n": 4,
    "title": {
      "es": "Transformadores",
      "en": "Transformers"
    },
    "desc": {
      "es": "Regulación, pérdidas y capacidad útil.",
      "en": "Regulation, losses and usable capacity."
    },
    "objective": {
      "es": "Separar pérdidas de vacío, pérdidas de carga y evaluación térmica.",
      "en": "Separate no-load losses, load losses and thermal assessment."
    },
    "body": {
      "es": [
        "La placa fija potencia aparente, tensiones, impedancia y conexión. Verifica grupo vectorial, puesta a tierra y reparto de carga antes de conectar unidades en paralelo.",
        "Las pérdidas de vacío se aproximan constantes a tensión y frecuencia nominales. Las pérdidas de carga se aproximan por k² multiplicado por su valor nominal, manteniendo temperatura y parámetros comparables.",
        "La regulación entre vacío y carga no es el mismo indicador que la desviación de tensión del suministro. Un porcentaje de cargabilidad por sí solo no autoriza una sobrecarga: hacen falta duración, temperatura ambiente, historial térmico y datos del fabricante."
      ],
      "en": [
        "The nameplate specifies apparent power, voltages, impedance and connection. Check vector group, grounding and load sharing before paralleling units.",
        "No-load losses are approximately constant at rated voltage and frequency. Load losses scale approximately with k² times their rated value, for comparable temperature and parameters.",
        "No-load to loaded voltage regulation differs from supply voltage deviation. Loading percentage alone does not authorize overload: duration, ambient temperature, thermal history and manufacturer data are required."
      ]
    },
    "formula": "k = P/(S_nom fp);  P_loss = P₀ + k² P_cu,nom;  η = P/(P + P_loss)",
    "units": {
      "es": "P, S_nom, P₀ y P_cu,nom en kW/kVA compatibles; fp entre 0 y 1.",
      "en": "Use compatible kW/kVA units for P, S_nom, P₀ and P_cu,nom; fp between 0 and 1."
    },
    "example": {
      "es": "S_nom = 100 kVA, P = 72 kW, fp = 0,9, P₀ = 0,3 kW y P_cu,nom = 1,5 kW: k = 0,8; pérdidas = 1,26 kW; η = 98,28%.",
      "en": "S_nom = 100 kVA, P = 72 kW, fp = 0.9, P₀ = 0.3 kW and P_cu,nom = 1.5 kW: k = 0.8; losses = 1.26 kW; η = 98.28%."
    },
    "task": {
      "es": "Compara pérdidas a 25%, 50%, 75% y 100% de carga. Explica por qué un transformador sobredimensionado puede perder más energía en vacío.",
      "en": "Compare losses at 25%, 50%, 75% and 100% loading. Explain why an oversized transformer can waste more no-load energy."
    },
    "quiz": {
      "q": {
        "es": "Al duplicar la corriente, las pérdidas de cobre aproximadamente…",
        "en": "Doubling current approximately makes copper losses…"
      },
      "opts": {
        "es": [
          "Se duplican",
          "Se cuadruplican",
          "No cambian"
        ],
        "en": [
          "Double",
          "Quadruple",
          "Remain constant"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "P_cu = I²R, si R se mantiene constante.",
        "en": "P_cu = I²R for constant R."
      }
    },
    "lab": "transformer",
    "refs": [
      "book"
    ]
  },
  {
    "id": "cap5",
    "n": 5,
    "title": {
      "es": "Flujo de carga",
      "en": "Power flow"
    },
    "desc": {
      "es": "Del cálculo aproximado al barrido radial.",
      "en": "From approximate calculations to radial sweeps."
    },
    "objective": {
      "es": "Comprender convenciones por fase y evitar doble conteo de corrientes.",
      "en": "Understand per-phase conventions and avoid double-counting currents."
    },
    "body": {
      "es": [
        "Para una carga trifásica equilibrada, P y Q totales y V_LL, I = |S|/(√3 V_LL). La caída aproximada usa la impedancia por fase del tramo. No es un flujo AC iterativo.",
        "En barrido inverso: I_ij = I_carga,j + suma de corrientes de ramas hijas de j. En barrido directo: V_j = V_i − Z_ij I_ij. Para cargas PQ se recalcula I_carga,j = conjugado(S_j/V_j) con valores por fase, hasta convergencia.",
        "Gauss-Seidel usa tensiones ya actualizadas para nodos anteriores dentro de la iteración; usar todas las tensiones antiguas describe Jacobi. Un modelo trifásico desequilibrado debe representar fases, neutro, conexiones y acoplamientos."
      ],
      "en": [
        "For a balanced three-phase load using total P and Q and V_LL, I = |S|/(√3 V_LL). Approximate voltage drop uses per-phase branch impedance. This is not an iterative AC power flow.",
        "Backward sweep: I_ij = I_load,j + sum of currents in child branches of j. Forward sweep: V_j = V_i − Z_ij I_ij. For PQ loads recompute I_load,j = conjugate(S_j/V_j), using per-phase values, until convergence.",
        "Gauss-Seidel uses updated voltages for earlier nodes in each iteration; using only old voltages describes Jacobi. Unbalanced three-phase models must represent phases, neutral, connections and coupling."
      ]
    },
    "formula": "ΔV_LL ≈ (RP₃φ + XQ₃φ)/V_LL;  P_loss,3φ ≈ R(P₃φ² + Q₃φ²)/V_LL²",
    "units": {
      "es": "P en W, Q en var, V_LL en V; R y X en Ω por fase del tramo. Carga concentrada; caída pequeña.",
      "en": "P in W, Q in var, V_LL in V; R and X in Ω per phase for the whole branch. Lumped load; small voltage drop."
    },
    "example": {
      "es": "13,2 kV, 1 000 kW, 500 kvar, R = 1 Ω y X = 0,8 Ω: I ≈ 48,90 A; ΔV ≈ 106,06 V; pérdidas ≈ 7,174 kW.",
      "en": "13.2 kV, 1,000 kW, 500 kvar, R = 1 Ω and X = 0.8 Ω: I ≈ 48.90 A; ΔV ≈ 106.06 V; losses ≈ 7.174 kW."
    },
    "task": {
      "es": "Calcula el caso y duplica R. Luego compara con un solucionador trifásico y un alimentador de prueba IEEE, documentando bases y tolerancia.",
      "en": "Compute the case and double R. Then compare with a three-phase solver and an IEEE test feeder, documenting bases and tolerance."
    },
    "quiz": {
      "q": {
        "es": "En el barrido inverso se suma…",
        "en": "The backward sweep adds…"
      },
      "opts": {
        "es": [
          "Carga local y ramas hijas",
          "Todas las cargas aguas abajo y otra vez sus ramas",
          "Solo la carga local"
        ],
        "en": [
          "Local load and child branches",
          "All downstream loads plus their branches again",
          "Only local load"
        ]
      },
      "answer": 0,
      "feedback": {
        "es": "Cada carga debe contribuir una sola vez a la corriente de la rama.",
        "en": "Each load contributes once to branch current."
      }
    },
    "lab": "voltage",
    "refs": [
      "ieee"
    ]
  },
  {
    "id": "cap6",
    "n": 6,
    "title": {
      "es": "Subestaciones",
      "en": "Substations"
    },
    "desc": {
      "es": "Dimensionamiento y contingencias N−1.",
      "en": "Sizing and N−1 contingencies."
    },
    "objective": {
      "es": "Dimensionar con demanda coincidente y comprobar capacidad remanente.",
      "en": "Size for coincident demand and check remaining capacity."
    },
    "body": {
      "es": [
        "Si P_max ya es la demanda máxima coincidente, no se aplica de nuevo un factor de demanda. Si la entrada es potencia instalada o suma de máximos, declara el factor apropiado antes de convertir a kVA.",
        "Para n transformadores iguales y reparto ideal, cada unidad requiere al menos S_total/n en operación normal. Bajo N−1 sin sobrecarga ni transferencia externa, requiere S_total/(n−1), con n ≥ 2.",
        "El cálculo I_cc ≈ I_base/z_pu supone fuente infinita y solo impedancia del transformador. Un estudio de cortocircuito completo necesita impedancia aguas arriba, líneas, tipos de falla y contribuciones de generación."
      ],
      "en": [
        "If P_max is already coincident peak demand, do not apply a demand factor again. If using installed power or summed individual peaks, state the appropriate factor before converting to kVA.",
        "For n identical units with ideal sharing, each requires at least S_total/n in normal operation. For N−1 without overload or external transfers, each requires S_total/(n−1), with n ≥ 2.",
        "I_cc ≈ I_base/z_pu assumes an infinite source and transformer impedance only. A full fault study requires upstream impedance, lines, fault types and generation contributions."
      ]
    },
    "formula": "S_total = P_max/fp;  S_unidad,N−1 ≥ S_total/(n−1)",
    "units": {
      "es": "P_max coincidente en MW; S en MVA. No incluye margen de crecimiento ni catálogo comercial.",
      "en": "Coincident P_max in MW; S in MVA. Excludes growth margin and commercial nameplate selection."
    },
    "example": {
      "es": "8 MW, fp = 0,9 y dos unidades: 4,444 MVA por unidad en operación normal; al menos 8,889 MVA por unidad para N−1 bajo estos supuestos.",
      "en": "8 MW, fp = 0.9 and two units: 4.444 MVA per unit normally; at least 8.889 MVA per unit for N−1 under these assumptions."
    },
    "task": {
      "es": "Evalúa dos y tres unidades. Agrega margen de crecimiento explícito y compara costo, espacio y mantenimiento.",
      "en": "Evaluate two and three units. Add an explicit growth margin and compare cost, space and maintenance."
    },
    "quiz": {
      "q": {
        "es": "¿Se aplica factor de demanda a una demanda ya coincidente?",
        "en": "Apply a demand factor to an already coincident peak?"
      },
      "opts": {
        "es": [
          "Sí, siempre",
          "No",
          "Solo si hay dos transformadores"
        ],
        "en": [
          "Always",
          "No",
          "Only with two transformers"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "Aplicarlo de nuevo reduce artificialmente la demanda de diseño.",
        "en": "Applying it again artificially reduces design demand."
      }
    },
    "lab": "substation",
    "refs": []
  },
  {
    "id": "cap7",
    "n": 7,
    "title": {
      "es": "Sistemas primarios",
      "en": "Primary systems"
    },
    "desc": {
      "es": "Conductores, pérdidas y compensación reactiva.",
      "en": "Conductors, losses and reactive compensation."
    },
    "objective": {
      "es": "Comparar alternativas de conductor y aplicar la regla de los dos tercios con sus supuestos.",
      "en": "Compare conductors and apply the two-thirds rule with its assumptions."
    },
    "body": {
      "es": [
        "La selección de conductor combina ampacidad, caída de tensión, cortocircuito, resistencia mecánica y costo de ciclo de vida. La resistencia cambia con temperatura; las condiciones de instalación cambian la disipación.",
        "Para un alimentador de carga reactiva uniformemente distribuida, tensión constante y resistencia uniforme, un banco ideal de 2Q/3 a 2L/3 minimiza las pérdidas asociadas a Q en un punto de operación.",
        "Antes del banco, Q(x) = Q_total(1−x/L). Las pérdidas se integran a lo largo del alimentador; usar Q_total sobre toda la longitud sobrestima las pérdidas iniciales por un factor de tres. La regla no optimiza automáticamente un perfil anual ni controla sobretensiones en carga baja."
      ],
      "en": [
        "Conductor selection combines ampacity, voltage drop, fault withstand, mechanical strength and life-cycle cost. Resistance changes with temperature and installation affects cooling.",
        "For uniformly distributed reactive load, constant voltage and uniform resistance, an ideal 2Q/3 bank at 2L/3 minimizes reactive-current losses at one operating point.",
        "Before compensation, Q(x) = Q_total(1−x/L). Losses are integrated along the feeder; applying Q_total over the entire length overstates initial losses by a factor of three. The rule does not automatically optimize an annual profile or prevent low-load overvoltage."
      ]
    },
    "formula": "Q_c = 2Q/3;  x_c = 2L/3;  P_Q,antes = rLQ²/(3V_LL²);  P_Q,después = P_Q,antes/9",
    "units": {
      "es": "En SI: Q en var, V_LL en V, r en Ω/km y L en km → W. Son solo pérdidas asociadas a corriente reactiva.",
      "en": "In SI: Q in var, V_LL in V, r in Ω/km and L in km → W. These are reactive-current losses only."
    },
    "example": {
      "es": "Q = 900 kvar, L = 3 km, r = 0,3 Ω/km y V = 13,2 kV: banco de 600 kvar a 2 km; pérdidas reactivas 1,395 → 0,155 kW.",
      "en": "Q = 900 kvar, L = 3 km, r = 0.3 Ω/km and V = 13.2 kV: 600 kvar bank at 2 km; reactive-current losses 1.395 → 0.155 kW."
    },
    "task": {
      "es": "Repite el cálculo a 30% de carga con banco fijo. Explica por qué la compensación puede pasar a ser excesiva.",
      "en": "Repeat at 30% load with the same fixed bank. Explain why compensation can become excessive."
    },
    "quiz": {
      "q": {
        "es": "Para Q_total = 900 kvar, la regla ideal propone…",
        "en": "For Q_total = 900 kvar, the ideal rule gives…"
      },
      "opts": {
        "es": [
          "450 kvar",
          "600 kvar",
          "900 kvar"
        ],
        "en": [
          "450 kvar",
          "600 kvar",
          "900 kvar"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "2 × 900/3 = 600 kvar; solo para el modelo descrito.",
        "en": "2 × 900/3 = 600 kvar; only under the stated model."
      }
    },
    "lab": "capacitor",
    "refs": [
      "book"
    ]
  },
  {
    "id": "cap8",
    "n": 8,
    "title": {
      "es": "Sistemas secundarios",
      "en": "Secondary systems"
    },
    "desc": {
      "es": "Caída de tensión, neutro y redes de baja tensión.",
      "en": "Voltage drop, neutral and low-voltage networks."
    },
    "objective": {
      "es": "Distinguir el circuito monofásico de dos hilos del trifásico equilibrado.",
      "en": "Distinguish two-wire single-phase circuits from balanced three-phase circuits."
    },
    "body": {
      "es": [
        "En un circuito monofásico de dos hilos, fase y retorno aportan impedancia. L es la distancia de ida, por eso aparece el factor 2. Para trifásico equilibrado se usa √3 con corriente de línea y tensión entre fases.",
        "Calcula resistencia con unidades consistentes: ρ en Ω·m y A en m² producen Ω/m. Para convertir a Ω/km multiplica por 1 000; para mm² a m² multiplica por 10⁻⁶.",
        "El modelo de dos hilos no representa neutro compartido, desequilibrio, armónicos ni cargas distribuidas. En redes reales analiza la caída acumulada, ampacidad, protección y puesta a tierra. No existe una longitud máxima universal que garantice calidad de tensión."
      ],
      "en": [
        "In a two-wire single-phase circuit both outgoing and return conductors contribute impedance. L is the one-way distance, hence the factor 2. Balanced three-phase circuits use √3 with line current and line-to-line voltage.",
        "Use consistent resistance units: ρ in Ω·m and A in m² give Ω/m. Multiply by 1,000 for Ω/km; multiply mm² by 10⁻⁶ for m².",
        "The two-wire model does not represent shared neutral, imbalance, harmonics or distributed loads. Real designs require accumulated drop, ampacity, protection and grounding checks. No universal maximum length guarantees voltage quality."
      ]
    },
    "formula": "ΔV ≈ 2IL(r cosφ + x sinφ);  P_loss = 2I²rL",
    "units": {
      "es": "I en A; L de ida en km; r y x en Ω/km; ΔV en V y pérdidas en W.",
      "en": "I in A; one-way L in km; r and x in Ω/km; ΔV in V and losses in W."
    },
    "example": {
      "es": "I = 50 A, L = 0,1 km, r = 0,5 Ω/km, x = 0 y fp = 1: ΔV = 5 V; pérdidas = 250 W. A 230 V, la caída es 2,17%.",
      "en": "I = 50 A, L = 0.1 km, r = 0.5 Ω/km, x = 0 and fp = 1: ΔV = 5 V; losses = 250 W. At 230 V, drop is 2.17%."
    },
    "task": {
      "es": "Duplica longitud y luego corriente. Identifica cuál cambio cuadruplica las pérdidas.",
      "en": "Double the length and then current. Identify which change quadruples losses."
    },
    "quiz": {
      "q": {
        "es": "En la ecuación de dos hilos, L corresponde a…",
        "en": "In the two-wire equation, L means…"
      },
      "opts": {
        "es": [
          "Distancia de ida",
          "Ida más retorno",
          "Longitud de tres fases"
        ],
        "en": [
          "One-way distance",
          "Outgoing plus return",
          "Length of three phases"
        ]
      },
      "answer": 0,
      "feedback": {
        "es": "El factor 2 ya incluye el retorno.",
        "en": "The factor 2 already includes the return."
      }
    },
    "lab": "secondary",
    "refs": []
  },
  {
    "id": "cap9",
    "n": 9,
    "title": {
      "es": "Protección y calidad",
      "en": "Protection and service quality"
    },
    "desc": {
      "es": "Continuidad, coordinación y lectura normativa.",
      "en": "Continuity, coordination and regulatory literacy."
    },
    "objective": {
      "es": "Calcular índices de continuidad y separar resultados de cumplimiento.",
      "en": "Compute continuity indices and distinguish results from compliance."
    },
    "body": {
      "es": [
        "SAIDI pondera duración por clientes afectados; SAIFI cuenta interrupciones de clientes. Usa el mismo periodo y universo de usuarios. El tratamiento de eventos excluidos debe documentarse.",
        "CAIDI = SAIDI/SAIFI cuando SAIFI > 0. Sin interrupciones, CAIDI no está definido; no es una duración medida de cero. Las metas regulatorias se consultan por operador y periodo, no con umbrales urbanos y rurales universales.",
        "Coordinar protecciones requiere corrientes mínima y máxima de falla, curvas tiempo-corriente, secuencias de reconexión, corriente de carga e irrupción y márgenes del fabricante. Una animación de FLISR ilustra secuencias, pero no verifica selectividad eléctrica."
      ],
      "en": [
        "SAIDI weights outage duration by affected customers; SAIFI counts customer interruptions. Use the same period and customer population. Document event exclusions.",
        "CAIDI = SAIDI/SAIFI when SAIFI > 0. With no interruptions CAIDI is undefined, not a measured duration of zero. Regulatory targets depend on operator and period, not universal urban/rural thresholds.",
        "Protection coordination requires minimum and maximum fault currents, time-current curves, reclosing sequences, load and inrush current, and manufacturer margins. An FLISR animation illustrates switching sequences but does not verify electrical selectivity."
      ]
    },
    "formula": "SAIDI = Σ Uᵢtᵢ/N;  SAIFI = Σ Uᵢ/N;  CAIDI = SAIDI/SAIFI",
    "units": {
      "es": "t en horas; Uᵢ clientes afectados; N clientes servidos. Resultados por el periodo declarado.",
      "en": "t in hours; Uᵢ affected customers; N served customers. Results refer to the stated period."
    },
    "example": {
      "es": "1 000 clientes; eventos: 2 h × 100 y 1 h × 200 → SAIDI = 0,4 h/cliente; SAIFI = 0,3 interrupciones/cliente; CAIDI = 1,333 h/interrupción.",
      "en": "1,000 customers; events: 2 h × 100 and 1 h × 200 → SAIDI = 0.4 h/customer; SAIFI = 0.3 interruptions/customer; CAIDI = 1.333 h/interruption."
    },
    "task": {
      "es": "Calcula los índices y busca la meta aprobada al OR para el mismo año. Registra resolución, artículo, exclusiones y versión consultada.",
      "en": "Compute indices and find the operator’s approved target for the same year. Record resolution, section, exclusions and version."
    },
    "quiz": {
      "q": {
        "es": "¿Qué permite afirmar cumplimiento de SAIDI?",
        "en": "What supports a SAIDI compliance claim?"
      },
      "opts": {
        "es": [
          "Una meta universal de 15 horas",
          "Comparar con la meta aplicable al OR y periodo",
          "Solo calcular el índice"
        ],
        "en": [
          "A universal 15-hour target",
          "Comparison with the applicable operator and period target",
          "Computing the index alone"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "El resultado numérico necesita un criterio aplicable y verificable.",
        "en": "A numerical result requires an applicable, verifiable criterion."
      }
    },
    "lab": "reliability",
    "refs": [
      "creg15",
      "retie"
    ]
  },
  {
    "id": "cap10",
    "n": 10,
    "title": {
      "es": "DER y redes activas",
      "en": "DER and active networks"
    },
    "desc": {
      "es": "Solar, almacenamiento, movilidad eléctrica y automatización.",
      "en": "Solar, storage, electric mobility and automation."
    },
    "objective": {
      "es": "Evaluar flujo inverso y límites de integración con series temporales.",
      "en": "Evaluate reverse flow and integration limits using time series."
    },
    "body": {
      "es": [
        "La generación distribuida modifica el flujo neto. Con consumo positivo, P_neta = P_carga − P_generación. Una demanda neta negativa puede elevar tensión aguas abajo y cambiar la coordinación de protecciones.",
        "La capacidad de alojamiento depende de ubicación, perfil temporal, tensión, carga térmica y protección. No puede inferirse solo de la potencia nominal del transformador ni de un único instante de máxima demanda.",
        "El almacenamiento desplaza energía con pérdidas. Define potencia, capacidad energética, eficiencia, estado de carga y objetivo operativo. AMI y SCADA apoyan observabilidad; la automatización requiere calidad de datos y control de acceso."
      ],
      "en": [
        "Distributed generation changes net flow. With positive consumption, P_net = P_load − P_generation. Negative net demand can raise downstream voltage and affect protection coordination.",
        "Hosting capacity depends on location, time profile, voltage, thermal loading and protection. It cannot be inferred from transformer rating alone or a single peak-demand snapshot.",
        "Storage shifts energy with losses. Define power, energy capacity, efficiency, state of charge and operating objective. AMI and SCADA support observability; automation requires data quality and access control."
      ]
    },
    "formula": "P_neta(t) = P_carga(t) − P_DER(t);  E(t+Δt) = E(t) + η_c P_c Δt − P_d Δt/η_d",
    "units": {
      "es": "P en kW; E en kWh; Δt en h; eficiencias en fracción. Evitar carga y descarga simultáneas.",
      "en": "P in kW; E in kWh; Δt in h; efficiencies as fractions. Avoid simultaneous charging and discharging."
    },
    "example": {
      "es": "Carga de 300 kW y solar de 450 kW → exportación de 150 kW. Cargar 100 kW durante 2 h con η_c = 0,95 agrega 190 kWh.",
      "en": "300 kW load and 450 kW solar → 150 kW export. Charging at 100 kW for 2 h with η_c = 0.95 adds 190 kWh."
    },
    "task": {
      "es": "Usa el perfil horario descargable, añade solar al mediodía y analiza demanda neta. Compara carga de vehículos a las 18 h y a las 02 h.",
      "en": "Use the downloadable hourly profile, add midday solar and analyze net demand. Compare EV charging at 18:00 and 02:00."
    },
    "quiz": {
      "q": {
        "es": "P_carga = 300 kW y P_DER = 450 kW implican…",
        "en": "P_load = 300 kW and P_DER = 450 kW imply…"
      },
      "opts": {
        "es": [
          "Importación de 750 kW",
          "Exportación de 150 kW",
          "Cero flujo"
        ],
        "en": [
          "750 kW import",
          "150 kW export",
          "Zero flow"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "300 − 450 = −150 kW, con consumo positivo.",
        "en": "300 − 450 = −150 kW under positive-consumption convention."
      }
    },
    "lab": null,
    "refs": [
      "creg174",
      "ieee"
    ]
  },
  {
    "id": "cap11",
    "n": 11,
    "title": {
      "es": "Diseño con PLS-CADD",
      "en": "Design with PLS-CADD"
    },
    "desc": {
      "es": "Del terreno al perfil de una línea aérea.",
      "en": "From terrain data to an overhead line profile."
    },
    "objective": {
      "es": "Preparar un proyecto reproducible y contrastar flecha, tensión y despejes.",
      "en": "Prepare a reproducible project and compare sag, tension and clearance."
    },
    "body": {
      "es": [
        "PLS-CADD integra terreno, geometría de línea, flecha-tensión, cargas, despejes y planos. Complementa el estudio eléctrico del alimentador. Las prácticas en el programa requieren acceso a una licencia y datos de conductor y estructuras.",
        "Práctica 1: importa el CSV de terreno sintético, declara sistema de coordenadas, datum vertical, unidades y códigos de puntos. Traza la alineación e identifica cruces. El CSV es un insumo didáctico, no un levantamiento topográfico real.",
        "Práctica 2: selecciona conductor y estructuras con datos trazables; define criterios de temperatura, viento y demás hipótesis aplicables. Práctica 3: ubica apoyos, define secciones de tendido y examina flecha-tensión y despejes para cada hipótesis.",
        "Práctica 4: compara con el laboratorio parabólico, explica discrepancias y genera planta-perfil, tabla de estructuras e informe de despejes. Incluye versión del software, archivos de entrada, criterios y supuestos. No extrapoles un caso sin viento a todos los estados climáticos."
      ],
      "en": [
        "PLS-CADD integrates terrain, line geometry, sag-tension, loads, clearances and drawings. It complements feeder electrical analysis. Software exercises require license access and conductor/structure data.",
        "Practice 1: import the synthetic terrain CSV, declare coordinate system, vertical datum, units and point codes. Lay out the alignment and identify crossings. The CSV is an educational input, not a real survey.",
        "Practice 2: select conductors and structures with traceable data; define applicable temperature, wind and other criteria. Practice 3: place supports, define tension sections and inspect sag-tension and clearances for each condition.",
        "Practice 4: compare with the parabolic lab, explain differences and produce plan-profile, structure tables and clearance reports. Include software version, input files, criteria and assumptions. Do not extrapolate a no-wind case to all weather conditions."
      ]
    },
    "formula": "f ≈ wL²/(8H);  y(x) = h − w x(L−x)/(2H)",
    "units": {
      "es": "w en N/m; L y h en m; H componente horizontal de tensión en N. Apoyos a igual altura, terreno plano, carga uniforme, flecha pequeña.",
      "en": "w in N/m; L and h in m; H horizontal tension component in N. Equal-height supports, flat ground, uniform load, small sag."
    },
    "example": {
      "es": "w = 10 N/m, L = 100 m, H = 10 000 N y h = 12 m: f = 1,25 m; despeje mínimo geométrico = 10,75 m. No es una verificación reglamentaria.",
      "en": "w = 10 N/m, L = 100 m, H = 10,000 N and h = 12 m: f = 1.25 m; minimum geometric clearance = 10.75 m. This is not regulatory verification."
    },
    "task": {
      "es": "Entrega los cuatro informes, el proyecto del software y una comparación numérica con este laboratorio. Rúbrica: datos 20%, hipótesis 25%, modelo 25%, verificación 20%, presentación 10%.",
      "en": "Submit the four reports, the software project and a numerical comparison with this lab. Rubric: data 20%, assumptions 25%, model 25%, verification 20%, presentation 10%."
    },
    "quiz": {
      "q": {
        "es": "Al duplicar el vano manteniendo w y H, la flecha…",
        "en": "Doubling the span with fixed w and H makes sag…"
      },
      "opts": {
        "es": [
          "Se duplica",
          "Se cuadruplica",
          "Se reduce a la mitad"
        ],
        "en": [
          "Double",
          "Quadruple",
          "Halve"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "La flecha es proporcional a L² en el modelo parabólico.",
        "en": "Sag is proportional to L² in the parabolic model."
      }
    },
    "lab": "sag",
    "refs": [
      "pls",
      "plsvideos"
    ]
  },
  {
    "id": "cap12",
    "n": 12,
    "title": {
      "es": "Proyecto integrador",
      "en": "Integrated project"
    },
    "desc": {
      "es": "Una red, decisiones eléctricas y mecánicas trazables.",
      "en": "One network, traceable electrical and mechanical decisions."
    },
    "objective": {
      "es": "Defender un diseño con evidencia reproducible y reconocer sus limitaciones.",
      "en": "Defend a design with reproducible evidence and acknowledge limitations."
    },
    "body": {
      "es": [
        "Caso propuesto: alimentador rural de 13,2 kV con demanda coincidente inicial de 1 MW, fp = 0,9, 3 km de extensión y crecimiento central de 3% anual. Son datos sintéticos; define perfiles, derivaciones y longitudes antes de modelar.",
        "Entrega A: estudio de carga y escenarios. Entrega B: modelo eléctrico, selección de conductor, pérdidas y compensación. Entrega C: trazado y verificación mecánica en PLS-CADD. Entrega D: continuidad, alternativas y memoria económica.",
        "Cada resultado debe incluir datos de entrada, unidades, método, versión, supuestos y comparación independiente. Incluye un registro normativo con fuente oficial, artículo, fecha de consulta y aplicación específica; resuelve discrepancias antes de emitir conclusiones de cumplimiento."
      ],
      "en": [
        "Proposed case: a rural 13.2 kV feeder with initial coincident demand of 1 MW, fp = 0.9, a 3 km extension and central growth of 3% annually. These are synthetic data; define profiles, laterals and lengths before modeling.",
        "Deliverable A: load study and scenarios. B: electrical model, conductor selection, losses and compensation. C: routing and mechanical verification in PLS-CADD. D: continuity, alternatives and economic report.",
        "Every result must include inputs, units, method, version, assumptions and independent comparison. Include a regulatory register with official source, section, access date and specific applicability; resolve discrepancies before drawing compliance conclusions."
      ]
    },
    "formula": "Error relativo = |resultado − referencia| / |referencia| × 100%",
    "units": {
      "es": "Para referencia nula usar error absoluto y una tolerancia declarada.",
      "en": "For a zero reference use absolute error and a stated tolerance."
    },
    "example": {
      "es": "Una pérdida calculada de 7,20 kW frente a referencia de 7,174 kW difiere aproximadamente 0,36%. Investiga si proviene del redondeo o de un modelo distinto.",
      "en": "Computed loss of 7.20 kW versus a 7.174 kW reference differs by about 0.36%. Investigate rounding versus model differences."
    },
    "task": {
      "es": "Rúbrica: modelo y datos 25%, verificación 25%, diseño PLS-CADD 20%, análisis económico 15%, comunicación bilingüe 15%. Entrega una memoria y archivos reproducibles.",
      "en": "Rubric: model/data 25%, verification 25%, PLS-CADD design 20%, economic analysis 15%, bilingual communication 15%. Submit a report and reproducible files."
    },
    "quiz": {
      "q": {
        "es": "Un gráfico atractivo demuestra por sí solo que el modelo es correcto.",
        "en": "An attractive chart alone proves a model is correct."
      },
      "opts": {
        "es": [
          "Verdadero",
          "Falso"
        ],
        "en": [
          "True",
          "False"
        ]
      },
      "answer": 1,
      "feedback": {
        "es": "La validación requiere balances, unidades, pruebas y comparación independiente.",
        "en": "Validation requires balances, units, tests and independent comparison."
      }
    },
    "lab": null,
    "refs": []
  }
];
