import { DocumentSection } from '../types';

export const DOCUMENTS_DATA: DocumentSection[] = [
  // 1. HISTORIA GLOBAL
  {
    id: 'historia-global-calidad-derechos',
    title: 'Evolución y Paradigmas de la Salud Mental',
    subtitle: 'De la Institucionalización a los Derechos Humanos y la Recuperación',
    category: 'Historia Global',
    readTime: '8 min',
    shortSummary: 'Un recorrido histórico desde la era de los manicomios y las restricciones físicas hasta la revolución psicofarmacológica, las reformas comunitarias y la iniciativa QualityRights de la OMS.',
    keyStats: [
      { label: 'Siglo IX', value: 'Al-Balkhi', detail: 'Pionero de la terapia cognitiva temprana' },
      { label: 'Década 1950', value: 'Clorpromazina', detail: 'Inicio de la revolución psicofarmacológica' },
      { label: '1986', value: 'Ley Sanidad', detail: 'Punto de inflexión comunitario en España' },
      { label: 'Calidad OMS', value: 'QualityRights', detail: 'Modelo de derechos y diálogo tripartito' },
    ],
    tags: ['Historia', 'Derechos Humanos', 'QualityRights OMS', 'Psicofarmacología', 'Recuperación'],
    content: {
      executiveSummary: 'Este documento presenta un análisis exhaustivo de la transformación en el ámbito de la salud mental, desde las prácticas históricas de reclusión hasta los modelos contemporáneos basados en derechos humanos y recuperación comunitaria. Se destaca el paso de los manicomios hacia sistemas de atención comunitaria, la revolución de fármacos como la clorpromazina en los años 50, pioneros como Abu Zayd Al-Balkhi en el siglo IX y el marco global QualityRights de la OMS.',
      sections: [
        {
          id: 'perspectiva-historica',
          heading: '1. Perspectiva Histórica: De la Reclusión a la Reforma',
          subheading: '1.1. La Era de los Manicomios y la Reforma de Pinel',
          paragraphs: [
            'Originalmente, los manicomios surgieron para proteger a las personas de una sociedad que las percibía como peligrosas o imprevisibles. Instituciones como Bicêtre en París (establecida en el siglo XVII) funcionaron inicialmente como hospicios y prisiones donde se hacinaba a las personas sin distinción de su patología.',
            'Hasta mediados del siglo XX, eran comunes las celdas subterráneas, el uso de cadenas, electroshocks sin control, lobotomías e inyecciones de insulina.',
            'Philippe Pinel, en Bicêtre (1793-1795), fue pionero al dar instrucciones para retirar las cadenas a los pacientes, iniciando un proceso fundamental de humanización del trato psiquiátrico.',
          ],
          callout: {
            type: 'quote',
            title: 'Hito Histórico',
            text: 'Philippe Pinel retiró las cadenas en Bicêtre, abriendo las puertas a la era moral del tratamiento de las afecciones mentales.',
            author: 'Historia de la Psiquiatría Moderna',
          },
        },
        {
          id: 'pioneros-tempranos',
          heading: '1.2. Pioneros Tempranos: Abu Zayd Al-Balkhi',
          paragraphs: [
            'Nueve siglos antes de la psicología cognitiva moderna, el sabio persa Abu Zayd Al-Balkhi escribió "Sustento del Alma". Sus contribuciones fundamentales incluyeron:',
          ],
          listItems: [
            'Interconexión Cuerpo-Alma: Identificó que el dolor psicológico causa enfermedades físicas y viceversa.',
            'Terapia Cognitiva: Propuso técnicas similares a la Terapia Cognitivo-Conductual (TCC) para tratar el miedo, la ira, la depresión y las obsesiones.',
            'Inmunidad Mental: Sugirió "almacenar" pensamientos positivos durante momentos de tranquilidad para utilizarlos en tiempos de crisis.',
          ],
        },
        {
          id: 'revolucion-farmacologica',
          heading: '2. La Revolución de la Psicofarmacología',
          paragraphs: [
            'El desarrollo de medicamentos específicos transformó la psiquiatría de un sistema de contención química a uno de tratamiento rehabilitador y ambulatorio.',
          ],
          table: {
            caption: 'Hitos en el Descubrimiento de Fármacos Psiquiátricos',
            headers: ['Época', 'Fármaco / Clase', 'Impacto Principal'],
            rows: [
              ['Pre-1950', 'Alcohol, bromuros, barbitúricos', 'Utilizados como sedantes o "restricciones químicas" para el control, no para el tratamiento.'],
              ['1950s', 'Clorpromazina (Thorazine)', 'Primer antipsicótico; permitió controlar la agresividad sin sedación total, reduciendo drásticamente las lobotomías.'],
              ['1950s', 'Imipramina e Iproniazida', 'Primeros antidepresivos (tricíclicos e IMAO); ayudaron a definir la depresión como un trastorno tratable.'],
              ['1960s', 'Benzodiacepinas (Valium)', 'Se convirtieron en los fármacos más prescritos del mundo para la ansiedad.'],
              ['1980s', 'Clozapina y SSRIs (Prozac)', 'Avances en mecanismos de acción con menos efectos secundarios motores; auge del estudio de la serotonina.'],
            ],
          },
        },
        {
          id: 'reformas-espana',
          heading: '3. Reformas Psiquiátricas Contemporáneas: El Caso de España',
          paragraphs: [
            'En España, la reforma comenzó formalmente a mediados de los años 80, impulsada por el Informe de la Comisión Ministerial de 1985 y la Ley General de Sanidad de 1986.',
            'Sus ejes principales fueron la Atención Comunitaria (Art. 20), el Cierre Progresivo de Instituciones monográficas para integrarlas en el Sistema Nacional de Salud, y la Humanización y equiparación de derechos.',
            'A pesar de los avances, persisten retos críticos: insuficiencia de recursos sociales, persistencia del estigma social y demoras en el cierre de centros en ciertas regiones.',
          ],
        },
        {
          id: 'qualityrights-oms',
          heading: '4. El Marco de QualityRights (OMS) y la Experiencia en Corea del Sur',
          paragraphs: [
            'La iniciativa QualityRights de la OMS busca transformar los sistemas de salud mental hacia un modelo basado en derechos, eliminando prácticas coercitivas como el aislamiento y las sujeciones físicas.',
            'En Corea del Sur, un programa adaptado de 13 semanas integró los principios de Diálogo Abierto, evidenciando tres temas emergentes:',
          ],
          listItems: [
            'Participación Tripartita: El encuentro simétrico entre personas con experiencia vivida, cuidadores familiares y profesionales de salud fue terapéutico en sí mismo.',
            'Cambio en la Toma de Decisiones: Transición de un modelo paternalista a uno de toma de decisiones compartida y consensuada.',
            'Escucha Empática: Los profesionales pasaron de "confrontar" síntomas (como alucinaciones) a escuchar y validar la experiencia narrativa del paciente.',
          ],
        },
        {
          id: 'paradigma-recuperacion',
          heading: '5. Hacia un Nuevo Paradigma de Recuperación',
          paragraphs: [
            'La síntesis actual define un cambio fundamental entre el modelo tradicional y el contemporáneo:',
          ],
          table: {
            caption: 'Comparativa de Paradigmas en Salud Mental',
            headers: ['Paradigma de Enfermedad (Tradicional)', 'Paradigma de Salud/Recuperación (Actual)'],
            rows: [
              ['Enfoque en la remisión total de síntomas.', 'Enfoque en vivir una vida plena, incluso con síntomas persistentes.'],
              ['El paciente es un receptor pasivo de instrucciones.', 'El individuo es un agente activo con autonomía y elección.'],
              ['Objetivo: Restaurar el funcionamiento "normal".', 'Objetivo: Recuperar el "sentido del ser" (Sense of Self) e identidad.'],
              ['La recuperación es un punto final (cura).', 'La recuperación es un proceso continuo, relacional y personal.'],
            ],
          },
        },
      ],
      conclusions: [
        'La salud mental ha transitado del control físico a la estabilización farmacológica y hacia la emancipación plena de los derechos humanos.',
        '"Una ley no lo arregla todo": la verdadera transformación exige recursos comunitarios sólidos, fin de la coerción y diálogo tripartito permanente.',
      ],
    },
  },

  // 2. HISTORIA ARGENTINA
  {
    id: 'historia-argentina-psi',
    title: 'Historia y Evolución de las Disciplinas "Psi" en la Argentina',
    subtitle: 'Del Positivismo y la Higiene Mental a la Creación de Carreras Universitarias y el Lacanismo',
    category: 'Historia Argentina',
    readTime: '9 min',
    shortSummary: 'El desarrollo singular de la psicología, psiquiatría y psicoanálisis en Argentina: las investigaciones de Dagfal y Fierro, el legado sanitarista de Domingo Cabred y la invención del psicólogo-psicoanalista.',
    keyStats: [
      { label: '1896-1925', value: 'Positivismo', detail: 'José Ingenieros y la higiene mental' },
      { label: '+10.000 Camas', value: 'Domingo Cabred', detail: 'Open Door Luján y colonias nacionales' },
      { label: '1955-1958', value: 'Carreras Univ.', detail: 'Primeras licenciaturas en Rosario, UBA, UNLP' },
      { label: '1966-1976', value: 'Lacanismo', detail: 'Oscar Masotta y la identidad profesional' },
    ],
    tags: ['Argentina', 'Psicoanálisis', 'Domingo Cabred', 'Dagfal y Fierro', 'Historia Argentina'],
    content: {
      executiveSummary: 'El presente documento sintetiza la evolución de la psicología, el psicoanálisis y la psiquiatría en la Argentina durante el siglo XX y principios del XXI, basándose en las investigaciones de especialistas del CONICET como Alejandro Dagfal y Catriel Fierro. Destaca la fuerte impronta francesa, el modelo sanitarista de Domingo Cabred, la periodización en cinco etapas clave y el surgimiento del psicólogo-psicoanalista como figura identitaria única en el mundo.',
      sections: [
        {
          id: 'investigadores-conicet',
          heading: 'I. Análisis de los Principales Investigadores Historiográficos',
          paragraphs: [
            'La producción académica contemporánea sobre la historia de la psicología en Argentina está liderada por investigadores vinculados al CONICET:',
            '• Alejandro Antonio Dagfal: Investigador independiente especializado en la historia intelectual de las disciplinas "psi" en Argentina y Francia. Autor de "Entre París y Buenos Aires: La invención del psicólogo (1942-1966)". Estudia el pasaje de la higiene a la salud mental y figuras como Masotta, Marie Langer y García Badaracco.',
            '• Catriel Fierro: Investigador adjunto centrado en el contexto institucional, la formación universitaria y la emergencia de la psicología clínica y aplicada en UBA y UNMDP.',
          ],
        },
        {
          id: 'periodizacion-argentina',
          heading: 'II. Periodización de la Psicología en Argentina (Dagfal)',
          paragraphs: [
            'La evolución de la disciplina en Argentina se estructura en cinco grandes periodos históricos:',
          ],
          table: {
            caption: 'Periodización de las Disciplinas Psi en Argentina',
            headers: ['Periodo', 'Denominación', 'Características Principales'],
            rows: [
              ['1896 - 1925', 'Positivismo y Nación', 'Enfoque biológico y evolucionista. La psicología como herramienta de orden social y civilizatoria. Figura central: José Ingenieros.'],
              ['1925 - 1943', 'Reacción Antipositivista', 'Giro hacia la filosofía, el idealismo y el espiritualismo. Influencia de Ortega y Gasset y Bergson.'],
              ['1943 - 1955', 'Psicología Aplicada', 'Auge de la psicotecnia y orientación profesional bajo el peronismo. Foco en la productividad y justicia social.'],
              ['1955 - 1966', 'La "Invención" del Psicólogo', 'Creación de las primeras carreras universitarias (Rosario 1955; Buenos Aires y La Plata 1957-58).'],
              ['1966 - 1976', 'Psicólogo como Psicoanalista', 'Recepción del lacanismo y estructuralismo francés. Ruptura con la psicología tradicional. Figura central: Oscar Masotta.'],
            ],
          },
        },
        {
          id: 'figuras-intelectuales',
          heading: 'III. Figuras Intelectuales y Corrientes de Pensamiento',
          paragraphs: [
            '• Domingo Cabred y el Modelo Sanitarista: A fines del siglo XIX transformó la realidad sanitaria fundando más de 10.000 camas. Introdujo el sistema de puertas abiertas ("Open Door" en Luján) y el tratamiento en libertad mediante laborterapia ("No restraint").',
            '• Luis María Ravagnan: Clave en la recepción de la fenomenología existencial y Maurice Merleau-Ponty, definiendo a la psicología como "ciencia de la singularidad".',
            '• Oscar Masotta y el Lacanismo: Filósofo autodidacta que introdujo a Jacques Lacan en el mundo hispano, convirtiendo al psicoanálisis lacaniano en la matriz identitaria del psicólogo argentino.',
          ],
        },
        {
          id: 'infraestructura-cabred',
          heading: 'IV. Infraestructura Federal Fundada por Domingo Cabred',
          paragraphs: [
            'El impacto sanitarista de Cabred se distribuyó por todo el territorio nacional:',
          ],
          table: {
            caption: 'Establecimientos Fundados por Domingo Cabred en Argentina',
            headers: ['Región / Provincia', 'Establecimientos Fundados'],
            rows: [
              ['Córdoba', 'Asilo Colonia Regional de Alienados (Oliva); Hosp. Bell Ville.'],
              ['Chaco', 'Colonia Nacional de Dermatosos; Hosp. Regional Resistencia.'],
              ['Entre Ríos', 'Policlínico Regional del Litoral J.J. de Urquiza.'],
              ['Buenos Aires', 'Colonia Nacional de Alienados (Open Door en Luján); Asilo de Retardados (Torres).'],
              ['Capital Federal', 'Instituto del Cáncer; Asilo Nacional Nocturno; Dispensarios Antituberculosos.'],
            ],
          },
        },
        {
          id: 'construccion-identidad',
          heading: 'V. La Construcción de la Identidad Profesional y Conclusiones',
          paragraphs: [
            'El psicólogo argentino no se conformó con ser un "auxiliar del médico", sino que conquistó el rol de psicoterapeuta autónomo a través de la formación psicoanalítica y la militancia teórica.',
            'Impacto de la Dictadura (1976-1983): Implicó el desmantelamiento institucional, el exilio y desaparición de profesionales (como Beatriz Perosio) y el repliegue al consultorio privado.',
            'Con el regreso democrático en 1983, las facultades de psicología experimentaron una masividad inédita que consolidó el prestigio social y la sanción de la Ley Nacional de Salud Mental 26.657.',
          ],
        },
      ],
      conclusions: [
        'Argentina cuenta con una de las densidades de psicólogos más altas del mundo, fruto de un proceso histórico único de apropiación cultural y académica.',
        'La transición del modelo asilar hacia la salud mental comunitaria y de derechos humanos continúa siendo el gran desafío en el país.',
      ],
    },
  },

  // 3. EPIDEMIOLOGÍA GLOBAL
  {
    id: 'epidemiologia-global',
    title: 'Epidemiología Global de los Trastornos Mentales',
    subtitle: 'Análisis de las Diez Condiciones de Mayor Prevalencia y Carga de Enfermedad (GBD 2021 / OMS)',
    category: 'Epidemiología',
    readTime: '11 min',
    shortSummary: 'Datos exhaustivos del Estudio de la Carga Global de Enfermedades (GBD 2021): más de 1.200 millones de personas afectadas, 171 millones de DALYs, brecha de tratamiento superior al 90% en países en desarrollo y clasificación de las 10 patologías líderes.',
    keyStats: [
      { label: '1.200 Millones', value: 'Afectados', detail: '1 de cada 7 personas en el planeta' },
      { label: '>17%', value: 'Discapacidad', detail: 'Principal causa de años vividos con discapacidad' },
      { label: '15-19 Años', value: 'Pico Etiológico', detail: 'Etapa de mayor vulnerabilidad y debut' },
      { label: '1 Billón USD', value: 'Coste Anual', detail: 'Pérdidas económicas por depresión y ansiedad' },
    ],
    tags: ['Epidemiología', 'GBD 2021', 'OMS', 'Estadísticas Globales', 'Carga de Enfermedad'],
    content: {
      executiveSummary: 'La salud mental global atraviesa una transformación epidemiológica sin precedentes. Según el Estudio de la Carga Global de Enfermedades (GBD 2021) y la OMS, más de 1.100 a 1.200 millones de personas conviven con un trastorno diagnosticable. Representan más del 17% de toda la discapacidad no fatal en el planeta (171 millones de DALYs). Se examinan las 10 patologías de mayor impacto, factores determinantes, suicidio cada 43 segundos y brechas presupuestarias críticas.',
      sections: [
        {
          id: 'panoramica-epidemiologica',
          heading: 'Panorámica Epidemiológica Global',
          paragraphs: [
            'Los trastornos mentales han ascendido del decimotercer lugar en 1990 al quinto lugar en la carga total de enfermedad, superando en discapacidad acumulada a dolencias cardiovasculares y metabólicas.',
            'Disparidad por género y edad: Las mujeres presentan mayor prevalencia en trastornos internalizantes (depresión y ansiedad: 620 millones de mujeres vs. 552 millones de hombres). Los hombres concentran mayor prevalencia en trastornos por sustancias y neurodesarrollo temprano.',
            'El cenit etario ocurre entre los 15 y los 19 años de edad, una etapa crítica que condiciona el futuro educativo, laboral y vincular.',
            'Más del 82% de las personas afectadas residen en países de ingresos bajos y medios (PIBM), donde la brecha de tratamiento supera el 90%.',
          ],
        },
        {
          id: 'tabla-ranking-10',
          heading: 'Las Diez Condiciones Mentales de Mayor Impacto Global',
          paragraphs: [
            'Jerarquización analítica basada en la CIE-11 y los datos del GBD 2021:',
          ],
          table: {
            caption: 'Ranking y Epidemiología de los 10 Principales Trastornos Mentales',
            headers: ['Ranking y Condición', 'Prevalencia Global Estimada', 'Demografía Predominante', 'Impacto en Carga y Discapacidad'],
            rows: [
              ['1. Trastornos de Ansiedad', '~359 millones', 'Mujeres (relación 2:1); picos en juventud y adultez', '42.5 millones DALYs; 6ª causa global de YLDs'],
              ['2. Trastornos Depresivos', '~280 a 332.4 millones', 'Predominio femenino (4822 vs. 3186 por 100k)', '56.3 millones DALYs; 2ª causa global de YLDs'],
              ['3. TEPT / C-TEPT', '~3.9% de por vida (~300M+)', 'Mujeres y poblaciones en conflicto / violencia', '0.6% YLDs globales; alta comorbilidad somática'],
              ['4. TDAH', '~2.52% varones vs 0.99% mujeres', 'Varones en infancia; persiste en adultez', 'Disfunción académica, social e impulsividad'],
              ['5. Trastornos Disociales', '~41 millones', 'Niños y adolescentes varones', 'Disrupción severa y riesgo delictivo posterior'],
              ['6. Trastorno Bipolar', '~37 millones', 'Distribución equitativa hombre/mujer', 'Carga episódica severa; alto riesgo de suicidio'],
              ['7. Esquizofrenia y Psicosis', '~23 millones', 'Ligero predominio masculino e inicio temprano', 'Pérdida de 10 a 20 años de esperanza de vida'],
              ['8. Espectro Autista (TEA)', 'Estimación amplia global', 'Mayor detección en varones (3-4:1)', 'Impacto de por vida en comunicación y adaptación'],
              ['9. Trastornos Alimentarios (TCA)', '~16 millones', 'Mujeres adolescentes y jóvenes', 'Alta mortalidad prematura médica y por suicidio'],
              ['10. Discapacidad Int. y Sustancias', 'Decenas de millones', 'Varones en sustancias; desarrollo en DI', '12% de DALYs atribuibles a salud mental'],
            ],
          },
        },
        {
          id: 'determinantes-socioeconomicos',
          heading: 'Factores Determinantes, Comorbilidades e Impacto Socioeconómico',
          paragraphs: [
            '• Conducta suicida: Entre 727.000 y 740.000 personas mueren por suicidio cada año (un fallecimiento cada 43 segundos). Tercera causa de muerte en jóvenes de 15 a 29 años. Mortalidad masculina cuatro veces mayor.',
            '• Impacto somático: Estados inflamatorios crónicos de bajo grado que incrementan el riesgo coronario, accidente cerebrovascular y diabetes tipo 2.',
            '• Pérdidas económicas: Solo la depresión y la ansiedad generan pérdidas anuales estimadas en 1 billón de dólares estadounidenses por absentismo y baja productividad.',
            '• Gasto gubernamental deficiente: El promedio mundial de inversión pública en salud mental es de apenas el 2% de los presupuestos de salud (desde 0,04 USD per cápita en países de bajos ingresos hasta 65,89 USD en países ricos).',
          ],
        },
      ],
      conclusions: [
        'Es urgente descentralizar la atención psiquiátrica e integrarla en la atención primaria mediante herramientas como mhGAP de la OMS.',
        'La salud mental requiere financiamiento proporcional a su 17% de carga de discapacidad no fatal y políticas transversales que reduzcan la pobreza y el estigma.',
      ],
    },
  },

  // 4. ANSIEDAD
  {
    id: 'ansiedad',
    number: '1',
    title: 'Abordaje Integral de los Trastornos de Ansiedad',
    subtitle: 'Diagnóstico, Tratamiento, Eje Intestino-Cerebro y Manejo de Crisis de Pánico',
    category: 'Trastornos Clínicos',
    readTime: '9 min',
    shortSummary: 'La condición mental más común en el mundo (359M de personas). Diferencia entre miedo y ansiedad, modelo biopsicosocial, eje intestino-cerebro, protocolo paso a paso para auxiliar en crisis de pánico y tratamientos validados.',
    keyStats: [
      { label: '359 Millones', value: 'Prevalencia', detail: 'Trastorno más frecuente del planeta' },
      { label: '2 a 1', value: 'Mujeres vs Hombres', detail: 'Mayor vulnerabilidad neuroendocrina y social' },
      { label: 'Estándar de Oro', value: 'TCC', detail: 'Terapia Cognitivo-Conductual + Exposición' },
      { label: '85% Éxito', value: 'Fobias', detail: 'Terapia de exposición guiada' },
    ],
    tags: ['Ansiedad', 'Ataque de Pánico', 'Fobias', 'TCC', 'Eje Intestino-Cerebro'],
    content: {
      executiveSummary: 'Los trastornos de ansiedad representan la clase más frecuente de trastornos psiquiátricos, afectando aproximadamente a un tercio de la población en algún momento de su vida. Se caracterizan por un miedo y una ansiedad persistentes y excesivos que provocan disfunción y malestar significativo. La evidencia actual destaca la necesidad de detección temprana, un enfoque multidisciplinario con TCC y farmacoterapia, el rol del eje intestino-cerebro y protocolos claros para crisis de pánico.',
      sections: [
        {
          id: 'conceptualizacion-etiologia',
          heading: '1. Conceptualización y Etiología',
          paragraphs: [
            'Diferenciación esencial:',
            '• Miedo: Respuesta emocional, física y conductual ante una amenaza externa inmediata y reconocible.',
            '• Ansiedad: Estado emocional displacentero y anticipatorio, cuyas causas pueden ser difusas y que persiste más allá de la presencia del estímulo.',
            '• Factores Etiológicos (Modelo Biopsicosocial): Genética e inhibición comportamental infantil; neurobiología (GABA, serotonina, noradrenalina, dopamina, glutamato); traumas tempranos y eventos vitales estresantes.',
            '• Eje Intestino-Cerebro: La disbiosis de la microbiota intestinal se vincula a neuroinflamación y alteración emocional. Bacterias como Lactobacillus y Bifidobacterium muestran efectos protectores prometedores (psicobióticos).',
          ],
        },
        {
          id: 'clasificacion-evaluacion',
          heading: '2. Clasificación (DSM-5-TR) y Evaluación Clínica',
          paragraphs: [
            'Categorías principales: Trastorno de Ansiedad Generalizada (TAG), Trastorno de Pánico, Agorafobia, Fobia Social, Fobias Específicas, Ansiedad por Separación y Mutismo Selectivo.',
            'En la evaluación clínica, se deben responder 3 preguntas clave: ¿Qué situaciones inducen el miedo? ¿Qué pensamientos automáticos se asocian a la ansiedad? ¿Qué conductas de evitación utiliza la persona?',
          ],
        },
        {
          id: 'intervenciones-terapeuticas',
          heading: '3. Intervenciones Terapéuticas y Farmacología',
          paragraphs: [
            'La Terapia Cognitivo-Conductual (TCC) es el tratamiento psicosocial con mayor nivel de evidencia: psicoeducación, respiración diafragmática, reestructuración cognitiva y desensibilización sistemática (exposición gradual).',
          ],
          table: {
            caption: 'Opciones Farmacológicas en Trastornos de Ansiedad',
            headers: ['Clase de Medicamento', 'Ejemplos Comunes', 'Consideraciones Clínicas'],
            rows: [
              ['ISRS (Primera línea)', 'Paroxetina, Sertralina, Escitalopram', 'Perfil de seguridad favorable; requiere 4 a 6+ semanas para su efecto pleno.'],
              ['IRSN', 'Venlafaxina, Duloxetina', 'Eficacia comprobada; control de presión arterial requerido.'],
              ['Benzodiazepinas', 'Alprazolam, Clonazepam, Lorazepam', 'Alivio agudo inmediato; alto riesgo de dependencia. Uso limitado a <4 semanas.'],
              ['Otros moduladores', 'Pregabalina, Buspirona', 'Indicados en casos refractarios o TAG persistente.'],
            ],
          },
        },
        {
          id: 'crisis-de-panico-protocolo',
          heading: '4. Guía Práctica: Cómo Auxiliar durante un Ataque de Pánico',
          paragraphs: [
            'Ante una persona experimentando palpitaciones, sensación de asfixia o miedo a morir:',
          ],
          listItems: [
            'Mantener la calma propia y hablar con frases cortas, pausadas y en tono sereno.',
            'Llevar a la persona a un espacio despejado, ventilado y con menor estímulo sonoro.',
            'Guiar la respiración 4-4-4: inhalar en 4 segundos, retener 4 y exhalar suavemente en 4 o contando hasta 10.',
            'Preguntar directamente: "¿Qué necesitás que haga ahora mismo?", sin suponer ni juzgar.',
            'Validar sin minimizar: "Sé que esto se siente terrible y da miedo, pero tu cuerpo está seguro y va a pasar en unos minutos".',
          ],
        },
      ],
      conclusions: [
        'La ansiedad es una respuesta adaptativa que se desregula, no un defecto personal.',
        'La combinación de psicoeducación, TCC y estilos de vida equilibrados brinda una recuperación sólida y sostenida.',
      ],
    },
  },

  // 5. DEPRESIÓN
  {
    id: 'depresion',
    number: '2',
    title: 'Estado Actual de la Depresión',
    subtitle: 'Factores de Riesgo, Variantes Clínicas (Depresión Atípica) y Avances Terapéuticos (2019-2024)',
    category: 'Trastornos Clínicos',
    readTime: '10 min',
    shortSummary: 'Segunda causa de discapacidad en el ser humano (56.3M DALYs). Criterios clínicos de la depresión atípica, neurobiología, factores adolescentes y los 7 avances médicos revolucionarios como esketamina, brexanolona y psicodélicos.',
    keyStats: [
      { label: '280-332M', value: 'Casos Activos', detail: '2ª causa de años vividos con discapacidad' },
      { label: '2ª Causa DALY', value: 'Pérdida de Salud', detail: 'Superada sólo por dolor lumbar crónico' },
      { label: 'Esketamina', value: 'Acción Rápida', detail: 'Efecto en horas para depresión resistente' },
      { label: 'Redes de Apoyo', value: 'Factor Clave', detail: 'El amortiguador protector más potente' },
    ],
    tags: ['Depresión', 'Depresión Atípica', 'Esketamina', 'Salud Mental Adolescente', 'Psicofarmacología'],
    content: {
      executiveSummary: 'La depresión es un trastorno multidimensional influenciado por factores genéticos, experiencias tempranas de vida y contextos sociales inmediatos. Los análisis actuales destacan subtipos específicos como la depresión atípica (con reactividad del ánimo, aumento de peso y parálisis plúmbea), los determinantes en la adolescencia y los últimos avances terapéuticos desarrollados entre 2019 y 2024.',
      sections: [
        {
          id: 'factores-riesgo-adolescente',
          heading: '1. Factores de Riesgo y el Poder Protector del Apoyo Social',
          paragraphs: [
            '• Factores Predisponentes: Carga genética hereditaria y vivencia de acontecimientos traumáticos o disfunción familiar en la infancia temprana.',
            '• Factores Precipitantes en Adolescentes: Contextuales (escuela, vecindario, presión social) e individuales (sucesos vitales graves, baja tolerancia a la frustración y déficits en autorregulación).',
            '• Hallazgo estadístico central: Las redes de apoyo social sólido amortiguan y neutralizan directamente los factores de riesgo desencadenantes.',
          ],
        },
        {
          id: 'depresion-atipica-criterios',
          heading: '2. Caracterización de la Depresión Atípica (DSM-5)',
          paragraphs: [
            'No se denomina "atípica" por infrecuente (es de hecho muy prevalente en pacientes ambulatorios y mujeres jóvenes), sino por sus síntomas opuestos a la melancolía clásica:',
            'Criterio Obligatorio: Reactividad del estado de ánimo (capacidad de experimentar alivio o alegría momentánea ante estímulos positivos).',
            'Debe presentar al menos dos de los siguientes síntomas:',
          ],
          table: {
            caption: 'Criterios de Depresión con Características Atípicas',
            headers: ['Síntoma Atípico', 'Descripción Clínica'],
            rows: [
              ['Aumento de apetito o peso', 'Incremento marcado de la ingesta de carbohidratos o masa corporal.'],
              ['Hipersomnia', 'Sueño nocturno prolongado o siestas que superan las 10 horas diarias.'],
              ['Parálisis plúmbea', 'Sensación de pesadez extrema como plomo en brazos y piernas (mínimo 1h al día).'],
              ['Sensibilidad al rechazo interpersonal', 'Hipersensibilidad duradera que genera disfunción social o laboral severa.'],
            ],
          },
        },
        {
          id: 'avances-terapeuticos-2019-2024',
          heading: '3. Siete Innovaciones y Avances Terapéuticos (2019-2024)',
          paragraphs: [
            '1. Antidepresivos de Acción Rápida: La esketamina (spray nasal) actúa sobre receptores NMDA en cuestión de horas o días para depresión resistente.',
            '2. Psicodélicos Terapéuticos: Ensayos clínicos rigurosos con psilocibina para depresión mayor y MDMA para trauma.',
            '3. Tratamientos Personalizados: Brexanolona, primer fármaco específico diseñado para la depresión posparto.',
            '4. Nuevos Enfoques en Psiquiatría: Xanomelina con menor impacto metabólico y extrapiramidal.',
            '5. Moduladores Cannabinoides: Terapias dirigidas a la ansiedad y el insomnio refractario.',
            '6. Enfoque Antiinflamatorio: Anticuerpos monoclonales y terapias inmunes para frenar la neuroinflamación cerebral.',
            '7. Fármacos Multitarea: Moléculas como la cariprazina con actividad dual dopaminérgica y serotoninérgica.',
          ],
        },
      ],
      conclusions: [
        'La depresión es una condición médica con bases neurobiológicas y sistémicas tratables.',
        'La combinación de fármacos innovadores con psicoterapia y redes vinculares sólidas constituye el estándar más eficaz para evitar la cronicidad.',
      ],
    },
  },

  // 6. TEPT
  {
    id: 'tept',
    number: '3',
    title: 'Intervención en Estrés Postraumático (TEPT y C-TEPT)',
    subtitle: 'Terapia Metacognitiva (TMC) y Exposición Prolongada (EP): Modelos y Eficacia',
    category: 'Trastornos Clínicos',
    readTime: '8 min',
    shortSummary: 'El 70% de las personas vivirá un evento traumático grave y hasta un 5.6% desarrollará TEPT. Análisis de las 4 dimensiones clínicas, diferencias con el C-TEPT y la innovadora propuesta de Terapia Combinada (TCO).',
    keyStats: [
      { label: '300M+', value: 'Afectados TEPT', detail: 'Poblaciones expuestas a violencia y conflictos' },
      { label: '4 Dimensiones', value: 'Sintomatología', detail: 'Reexperimentación, evitación, cognición, hiperactivación' },
      { label: 'TMC + EP', value: 'Terapia TCO', detail: 'Mayor adherencia y menor tasa de abandono' },
      { label: '8 Sesiones', value: 'Protocolo', detail: 'Intervención estructurada de 90 minutos' },
    ],
    tags: ['TEPT', 'C-TEPT', 'Trauma', 'Terapia Metacognitiva', 'Exposición Prolongada'],
    content: {
      executiveSummary: 'El Trastorno de Estrés Postraumático (TEPT) y el TEPT Complejo (C-TEPT) son condiciones debilitantes tras eventos que amenazan la vida o integridad. Aunque la Exposición Prolongada (EP) es el estándar tradicional, presenta elevadas tasas de abandono por angustia. La Terapia Metacognitiva (TMC) se enfoca en regular el Síndrome Cognitivo Atencional (rumiación y monitoreo de amenazas). La propuesta combinada (TCO) unifica ambas para maximizar la curación a largo plazo.',
      sections: [
        {
          id: 'criterios-tept',
          heading: '1. Criterios Diagnósticos y Dimensiones Clínicas (DSM-5 / CIE-11)',
          paragraphs: [
            'El diagnóstico requiere síntomas persistentes por más de 4 semanas tras el trauma en 4 dimensiones:',
            '• Reexperimentación: Recuerdos intrusivos, pesadillas y flashbacks disociativos.',
            '• Evitación: Esfuerzos activos por rehuir pensamientos, lugares o personas asociadas.',
            '• Alteraciones cognitivas y del ánimo: Culpa irracional, creencias negativas sobre el mundo ("nadie es confiable") y anhedonia.',
            '• Hiperactivación: Hipervigilancia, sobresaltos exagerados, insomnio y problemas de concentración.',
            '• C-TEPT: Surge ante traumas repetidos o prolongados en la infancia (abuso, cautiverio) y añade desregulación afectiva grave y alteración del autoconcepto.',
          ],
        },
        {
          id: 'modelos-terapeuticos',
          heading: '2. Comparación de Modelos Terapéuticos',
          paragraphs: [
            '• Exposición Prolongada (EP): Modifica la estructura de miedo mediante habituación (en vivo y en imaginación). Desafío: alta tasa de deserción por sufrimiento agudo.',
            '• Terapia Metacognitiva (TMC): Desarrollada por Wells; no analiza el trauma en sí, sino las creencias sobre los propios pensamientos (elimina la rumiación y la monitorización constante de peligro con Mindfulness Desapegado).',
            '• Terapia Combinada (TCO): La TMC fortalece la autorregulación previa del paciente para que pueda atravesar la EP con menor angustia y máxima adherencia.',
          ],
          table: {
            caption: 'Estructura del Protocolo de Intervención Combinada (8 Semanas)',
            headers: ['Sesión', 'Terapia de Exposición (EP)', 'Terapia Metacognitiva (TMC)', 'Terapia Combinada (TCO)'],
            rows: [
              ['1', 'Psicoeducación y respiración.', 'Formulación del caso y Mindfulness Desapegado (MD).', 'Psicoeducación, MD y respiración diafragmática.'],
              ['2', 'Jerarquía de exposición en vivo.', 'Desafío de rumiación y preocupación.', 'Creencias negativas sobre el trauma y MD.'],
              ['3', 'Exposición en imaginación.', 'Monitorización de amenazas.', 'Análisis y reducción de chequeo de peligro.'],
              ['4', 'Procesamiento de la exposición.', 'Reenfoque atencional.', 'Reenfoque de atención y freno a la evitación.'],
              ['5-7', 'Exposición intensiva (40 min).', 'Eliminación de afrontamiento inadaptado.', 'Jerarquía y exposición en imaginación tolerada.'],
              ['8', 'Prevención de recaídas.', 'Plan para síntomas futuros.', 'Nuevo plan cognitivo y prevención de recaídas.'],
            ],
          },
        },
      ],
      conclusions: [
        'El trauma no define el destino de una persona; el cerebro posee neuroplasticidad para procesar y desarticular la memoria traumática.',
        'La sinergia entre metacognición y exposición representa el futuro más prometedor en el tratamiento del TEPT.',
      ],
    },
  },

  // 7. TDAH
  {
    id: 'tdah',
    number: '4',
    title: 'Avances y Estrategias en el TDAH',
    subtitle: 'Bases Neurobiológicas, Eficacia Terapéutica Multimodal y Pautas Familiares',
    category: 'Trastornos Clínicos',
    readTime: '9 min',
    shortSummary: 'Trastorno del neurodesarrollo que afecta del 3% al 7% de la población escolar. Disfunción fronto-subcortical, superioridad del tratamiento combinado (68% normalización) y herramientas prácticas de crianza positiva.',
    keyStats: [
      { label: '3% a 7%', value: 'Prevalencia Infantil', detail: 'Persiste en gran proporción en la adultez' },
      { label: '68%', value: 'Normalización', detail: 'Tratamiento Combinado (Fármaco + Conducta)' },
      { label: 'Dopamina', value: 'Neurotransmisor', detail: 'Déficit en vías fronto-subcorticales' },
      { label: 'Autocontrol', value: 'Foco Central', detail: 'Falla en la ejecución, no en el conocimiento' },
    ],
    tags: ['TDAH', 'Neurodesarrollo', 'Psicoeducación Familiar', 'Infancia y Adolescencia', 'Funciones Ejecutivas'],
    content: {
      executiveSummary: 'El Trastorno por Déficit de Atención con Hiperactividad (TDAH) es una condición del neurodesarrollo ligada a disfunciones en circuitos fronto-subcorticales y desbalances dopaminérgicos y noradrenérgicos. La evidencia del histórico estudio NIMH/MTA demuestra que el tratamiento combinado alcanza un 68% de normalización sintomática. La psicoeducación familiar es el pilar para transformar el entorno del menor mediante refuerzo positivo, economía de fichas y modelado.',
      sections: [
        {
          id: 'neurobiologia-subtipos',
          heading: '1. Caracterización y Neurobiología del TDAH',
          paragraphs: [
            'Patofisiología: Estudios de neuroimagen muestran alteraciones en el circuito frontoestriatal, afectando las funciones ejecutivas (memoria de trabajo, control inhibitorio y regulación del afecto).',
            'Subtipos clínicos (DSM): 1) Tipo combinado, 2) Tipo con predominio de déficit de atención (inatento), 3) Tipo con predominio hiperactivo-impulsivo.',
            'Impacto vital: Rendimiento académico, relaciones interpersonales y autoestima. En niñas y mujeres suele haber mayor inatención interna y menor hiperactividad motora, provocando infradiagnóstico histórico.',
          ],
        },
        {
          id: 'eficacia-estudio-mta',
          heading: '2. Análisis de Eficacia Terapéutica (Estudio NIMH/MTA)',
          paragraphs: [
            'Comparativa científica sobre la normalización sintomática en niños:',
          ],
          table: {
            caption: 'Tasa de Normalización Sintomática según Modalidad de Tratamiento (NIMH)',
            headers: ['Modalidad de Tratamiento', 'Tasa de Normalización Sintomática'],
            rows: [
              ['Tratamiento Combinado (Farmacológico + Conductual)', '68% (Superior en habilidades sociales y lectura)'],
              ['Farmacológico aislado', '56%'],
              ['Conductual aislado', '34%'],
              ['Cuidados comunitarios estándar', '25%'],
            ],
          },
        },
        {
          id: 'pautas-crianza-familia',
          heading: '3. Orientaciones Psicoeducativas y Conductuales para Familias',
          paragraphs: [
            'El niño con TDAH no "no quiere hacer las cosas", sino que tiene dificultad neurobiológica en el "cuándo y cómo ejecutarlas":',
          ],
          listItems: [
            'Ambiente Estructurado: Rutinas visuales claras, anticipación de cambios y orden físico para reducir la sobrecarga sensorial.',
            'Modelado Sereno: Hablar con tono de voz pausado; los niños con TDAH aprenden por observación refleja más que por sermones verbales.',
            'Refuerzo Positivo y Economía de Fichas: Premiar de forma inmediata el esfuerzo y las conductas deseadas mediante puntos canjeables.',
            'Separar el Acto de la Identidad: Decir "juntemos los juguetes del piso" en vez de etiquetar con "sos un desordenado".',
            'Entrenamiento en Autoinstrucciones: Enseñar al menor a verbalizar internamente: "¿Qué tengo que hacer primero? ¿Cómo voy a resolverlo?".',
          ],
        },
      ],
      conclusions: [
        'El diagnóstico e intervención temprana modifican positivamente la trayectoria académica y emocional.',
        'La colaboración sinérgica entre familia, escuela y equipo de salud es la clave indiscutible del éxito terapéutico.',
      ],
    },
  },

  // 8. CONDUCTA DISOCIAL
  {
    id: 'conducta-disocial',
    number: '5',
    title: 'Trastorno de la Conducta Disocial y Comportamiento Antisocial',
    subtitle: 'Clasificación CIE-11, Genética, Taxonomía de Moffitt y Directrices NICE',
    category: 'Trastornos Clínicos',
    readTime: '8 min',
    shortSummary: 'Afecta a más de 41 millones de niños y adolescentes. Patrón persistente de transgresión de normas, subtipo con emociones prosociales limitadas, vínculos genéticos en cromosomas 19 y 2, y programas familiares basados en el aprendizaje social.',
    keyStats: [
      { label: '41 Millones', value: 'Casos Mundiales', detail: 'Niños y adolescentes afectados' },
      { label: '32% a 70%', value: 'Heredabilidad', detail: 'Influencia de cromosomas 19 y 2' },
      { label: '12 Meses', value: 'Criterio CIE-11', detail: 'Duración mínima de conductas graves' },
      { label: 'NICE', value: 'Entrenamiento', detail: 'Programas de aprendizaje social para padres' },
    ],
    tags: ['Conducta Disocial', 'CIE-11', 'Genética', 'Directrices NICE', 'Adolescencia'],
    content: {
      executiveSummary: 'El trastorno de la conducta disocial se define por un patrón repetitivo de comportamientos que violan los derechos de los demás y las normas comunitarias fundamentales. La CIE-11 exige una persistencia mínima de 12 meses. Se analiza la diferenciación etaria de inicio, el especificador de emociones prosociales limitadas (falta de empatía y remordimiento), la base genética compartida con la dependencia a sustancias y los programas preventivos de NICE.',
      sections: [
        {
          id: 'definicion-cie11',
          heading: '1. Definición Clínica y Clasificación (CIE-11)',
          paragraphs: [
            'Criterios fundamentales: Agresión física hacia personas o animales, destrucción deliberada de bienes ajenos, engaño, fraude o robo sistemático, y violaciones graves de normas y leyes.',
            'Subtipos por edad de inicio: 1) Inicio en la Infancia (antes de los 10 años, asociado a mayor cronicidad y riesgo vital); 2) Inicio en la Adolescencia (suele remitir al asumir roles adultos).',
          ],
        },
        {
          id: 'emociones-prosociales-genetica',
          heading: '2. Emociones Prosociales Limitadas y Genética',
          paragraphs: [
            '• Especificador Clínico: Identifica a personas con frialdad emocional, carencia de remordimiento, indiferencia ante el sufrimiento ajeno o castigo, y afecto superficial.',
            '• Hallazgos Genómicos: Heredabilidad estimada entre el 32% y más del 70%. Se han identificado regiones cromosómicas de alto interés en el Cromosoma 19 (35 cM) y Cromosoma 2 (136 cM), compartiendo vulnerabilidad con el abuso de alcohol en la adultez.',
          ],
        },
        {
          id: 'intervenciones-nice',
          heading: '3. Estrategias de Intervención y Directrices NICE',
          paragraphs: [
            'Las directrices internacionales priorizan programas basados en el modelo de aprendizaje social:',
          ],
          table: {
            caption: 'Modalidades de Intervención Recomendadas por NICE',
            headers: ['Tipo de Programa', 'Población Objetivo', 'Características de la Intervención'],
            rows: [
              ['Entrenamiento Grupal para Padres', 'Padres de niños de 3 a 11 años', '10 a 16 sesiones; modelado, juego de roles y disciplina positiva.'],
              ['Entrenamiento Individual', 'Casos donde lo grupal no es factible', '8 a 10 sesiones intensivas en habilidades de crianza.'],
              ['Entrenamiento Padres e Hijos', 'Casos graves y alta conflictividad', 'Intervención diádica para restaurar el vínculo y apego.'],
              ['Prevención Escolar', 'Aulas de 3 a 7 años en riesgo', 'Resolución de problemas, inteligencia emocional y autocontrol.'],
            ],
          },
        },
      ],
      conclusions: [
        'Evitar la estigmatización y la culpabilización de las familias es el primer paso indispensable.',
        'La detección precoz antes de los 8 años transforma radicalmente el pronóstico del menor.',
      ],
    },
  },

  // 9. TRASTORNO BIPOLAR
  {
    id: 'trastorno-bipolar',
    number: '6',
    title: 'Avances en el Trastorno Bipolar',
    subtitle: 'Mapeo Genético, Fenotipado Digital, Algoritmos Terapéuticos y Prevención del Suicidio',
    category: 'Trastornos Clínicos',
    readTime: '10 min',
    shortSummary: 'Afecta a 37 millones de personas. Heredabilidad del 60-85% (gen ANK3 y BDNF), predicción de recaídas mediante sensores pasivos en smartphones, litio como estándar de oro, ketamina y diferenciación pediátrica frente al DMDD.',
    keyStats: [
      { label: '37 Millones', value: 'Prevalencia Global', detail: 'Inicio típico en juventud temprana' },
      { label: '60% a 85%', value: 'Heredabilidad', detail: 'Una de las mayores en toda la psiquiatría' },
      { label: 'Litio', value: 'Estándar de Oro', detail: 'Efecto antisuicida único comprobado' },
      { label: '3 a 7 Días', value: 'Predicción Digital', detail: 'Detección temprana con dinámica de tecleo' },
    ],
    tags: ['Trastorno Bipolar', 'Genética ANK3', 'Fenotipado Digital', 'Litio', 'Psiquiatría de Precisión'],
    content: {
      executiveSummary: 'El trastorno bipolar es una patología neurobiológica severa caracterizada por fluctuaciones patológicas del ánimo y la energía. El mapeo genético de 2025 ha identificado 17 variantes funcionales (gen ANK3 y metilación de BDNF). Paralelamente, el fenotipado digital con métricas circadianas y dinámica de tecleo (Keystroke) anticipa virajes maníacos con 3 a 7 días de antelación. Se revisa la farmacología de primera línea, el uso de ketamina y el manejo del riesgo suicida.',
      sections: [
        {
          id: 'delimitacion-espectro',
          heading: '1. Delimitación Diagnóstica y el Espectro Bipolar',
          paragraphs: [
            'Criterio Obligatorio (DSM-5-TR / CIE-11): Además de la euforia o irritabilidad, se exige de manera indispensable el aumento de la energía o actividad orientada a metas.',
            '• Bipolar I: Al menos un episodio maníaco completo (mínimo 7 días o que requiera hospitalización; psicosis en el 50%).',
            '• Bipolar II: Hipomanía (mínimo 4 días consecutivos) y al menos un episodio depresivo mayor.',
            '• Ciclotimia: Síntomas fluctuantes durante 2 o más años sin periodos asintomáticos prolongados.',
            '• Diferenciación pediátrica vs. DMDD: El DMDD presenta irritabilidad crónica no episódica, mientras que el bipolar es cíclico.',
          ],
        },
        {
          id: 'genetica-fenotipado',
          heading: '2. Genética (ANK3) y Fenotipado Digital',
          paragraphs: [
            '• Gen ANK3 y BDNF: Regulación de canales de sodio/potasio en neuronas y neuroplasticidad sináptica.',
            '• Fenotipado Digital en Smartphones: El análisis pasivo de los ritmos de sueño y la velocidad/aceleración de pulsación del teclado predice virajes maníacos con una precisión (AUC) de hasta 0.98, permitiendo intervenciones just-in-time (JITAI).',
          ],
        },
        {
          id: 'algoritmos-terapeuticos',
          heading: '3. Estrategias Terapéuticas y Farmacología',
          paragraphs: [
            '• Manía Aguda: Litio, Quetiapina, Divalproato de sodio, Aripiprazol, Cariprazina.',
            '• Depresión Bipolar: Quetiapina, Lurasidona, Lamotrigina. (Antidepresivos solos contraindicados por riesgo de viraje maníaco).',
            '• Mantenimiento y Prevención: El Litio sigue siendo el rey indiscutible con efecto antisuicida neuroprotector directo.',
            '• Innovaciones: Esketamina y protocolos de neuromodulación acelerada (SAINT y PACE).',
          ],
        },
      ],
      conclusions: [
        'El trastorno bipolar no es un simple cambio de humor; es una afección biológica que requiere tratamiento médico riguroso y seguimiento profesional.',
        'La psicoeducación, la estabilidad del sueño circadiano y el apoyo asociativo son pilares indispensables.',
      ],
    },
  },

  // 10. ESQUIZOFRENIA Y PSICOSIS
  {
    id: 'esquizofrenia-psicosis',
    number: '7',
    title: 'Avances en Psicosis y Esquizofrenia',
    subtitle: 'Genética C4, Fármaco COBENFY, Terapia Cognitivo-Conductual (TCCp) y Rehabilitación Comunitaria',
    category: 'Trastornos Clínicos',
    readTime: '10 min',
    shortSummary: 'Afecta a 23 millones de personas. El revolucionario descubrimiento del gen C4 de poda sináptica masiva en Harvard, el nuevo fármaco COBENFY (sin bloqueo D2 dopaminérgico), el modelo ABC de las 3 C en TCCp y el rol de asociaciones como AMAFE y AAFE.',
    keyStats: [
      { label: '23 Millones', value: 'Casos Mundiales', detail: '1 de cada 345 personas' },
      { label: 'Gen C4', value: 'Poda Sináptica', detail: 'Descubrimiento biológico en Harvard' },
      { label: 'COBENFY™', value: 'Nuevo Fármaco', detail: 'Agonista muscarínico M1/M4 sin bloqueo D2' },
      { label: '2% a 5%', value: 'Oyen Voces', detail: 'Población general sana sin patología' },
    ],
    tags: ['Esquizofrenia', 'Psicosis', 'Gen C4', 'COBENFY', 'TCCp', 'Rehabilitación'],
    content: {
      executiveSummary: 'Este informe sintetiza los hallazgos críticos sobre psicosis y esquizofrenia. La ICD-11 delimita con precisión el trastorno delirante. Investigaciones de Harvard abrieron la "caja negra" al demostrar el rol del gen del complemento 4 (C4) en la poda sináptica excesiva durante la adolescencia. Se detalla la aprobación de COBENFY (primer mecanismo muscarínico en décadas) y las técnicas psicoterapéuticas de TCCp con el modelo de las "3 C" y el estilo Columbo.',
      sections: [
        {
          id: 'biologia-gen-c4',
          heading: '1. Orígenes Biológicos: El Papel del Gen C4 y la Poda Sináptica',
          paragraphs: [
            'Investigadores de Harvard y el Broad Institute descubrieron que variantes del gen del complemento inmune C4 marcan conexiones sinápticas para ser destruidas durante la adolescencia.',
            'Una sobreexpresión de C4 elimina sinapsis saludables en exceso, explicando el adelgazamiento de la corteza cerebral y el debut característico al final de la adolescencia.',
          ],
        },
        {
          id: 'innovacion-cobenfy',
          heading: '2. Innovación Farmacológica: COBENFY™ (Xanomelina + Trospio)',
          paragraphs: [
            'Primer tratamiento en más de 60 años que no actúa bloqueando los receptores de dopamina D2.',
            '• Xanomelina: Agonista selectivo de receptores muscarínicos M1/M4 en el sistema nervioso central, regulando indirectamente los circuitos de dopamina.',
            '• Trospio: Antagonista periférico que neutraliza los efectos secundarios corporales sin atravesar la barrera hematoencefálica.',
          ],
        },
        {
          id: 'tccp-modelo-3c',
          heading: '3. Terapia Cognitivo-Conductual para Psicosis (TCCp) y Normalización',
          paragraphs: [
            '• Modelo ABC: Acontecimiento activador (A) -> Creencia / Interpretación (B) -> Consecuencia emocional (C). La angustia surge de la interpretación atribuida a la experiencia anómala.',
            '• Estrategia de las "3 C":',
            '1. Catch It (Captarlo): Identificar el pensamiento automático sin juzgar.',
            '2. Check It (Comprobarlo): Examinar evidencia a favor y en contra, evitando conclusiones apresuradas.',
            '3. Change It (Cambiarlo): Generar explicaciones alternativas más funcionales y compasivas.',
            '• Fenomenología de las voces: Entre un 2% y 5% de la población general sana escucha voces en algún momento. La angustia no viene del sonido, sino de creer que la voz es todopoderosa o malévola.',
          ],
        },
        {
          id: 'redes-apoyo-iberoamerica',
          heading: '4. Ecosistema de Rehabilitación Psicosocial',
          paragraphs: [
            'Organizaciones como AAFE en Argentina, AMAFE en España, CORFAPES en Chile y ACPEF en Colombia brindan psicoeducación familiar gratuita, inserción sociolaboral y asesoramiento para el Certificado Único de Discapacidad (CUD).',
          ],
        },
      ],
      conclusions: [
        'La esquizofrenia es un trastorno tratable donde la persona puede recuperar su proyecto vital, autonomía e inclusión social.',
        'La familia y la comunidad son el pilar terapéutico más transformador contra el aislamiento.',
      ],
    },
  },

  // 11. AUTISMO Y TEA
  {
    id: 'tea-autismo',
    number: '8',
    title: 'Buenas Prácticas Sanitarias en el Espectro del Autismo (TEA)',
    subtitle: 'Detección Precoz, Accesibilidad Cognitiva, Tarjeta Sanitaria Preferente y Modelos AMI-TEA',
    category: 'Trastornos Clínicos',
    readTime: '9 min',
    shortSummary: 'Guía exhaustiva para garantizar el derecho a la salud sin barreras. Programas hospitalarios de éxito (AMI-TEA, PAMI), odontología bajo sedación adaptada, tarjeta con distintivo AA/TEA y apoyos visuales.',
    keyStats: [
      { label: '3-4 a 1', value: 'Detección Varones', detail: 'Mayor infradiagnóstico en fenotipo femenino' },
      { label: 'Tarjeta AA', value: 'Prioridad TEA', detail: 'Acompañamiento y menor tiempo de espera' },
      { label: 'AMI-TEA', value: 'Atención Médica', detail: 'Unidades integrales multidisciplinarias' },
      { label: 'Universal', value: 'Accesibilidad', detail: 'Pictogramas y comunicación aumentativa' },
    ],
    tags: ['TEA', 'Autismo', 'Accesibilidad Cognitiva', 'AMI-TEA', 'Atención Primaria'],
    content: {
      executiveSummary: 'Este documento sintetiza las directrices de éxito para optimizar la atención médica y comunitaria de personas con Trastornos del Espectro del Autismo (TEA). Subraya la detección temprana, la adaptación de los entornos clínicos, la tarjeta sanitaria preferente para evitar salas de espera colapsadas y el acompañamiento familiar como agente activo.',
      sections: [
        {
          id: 'deteccion-precoz-integral',
          heading: '1. Detección Precoz y Procesos Asistenciales Integrados',
          paragraphs: [
            'La intervención antes de los 3 años de vida potencia significativamente el desarrollo de la comunicación y el juego funcional.',
            'Se requiere articulación obligatoria entre pediatras de Atención Primaria, neuropediatría, salud mental infantil y gabinetes escolares.',
          ],
        },
        {
          id: 'unidades-especializadas-modelos',
          heading: '2. Programas Hospitalarios de Éxito',
          paragraphs: [
            'Modelos de referencia internacional:',
          ],
          table: {
            caption: 'Programas Hospitalarios Especializados en TEA',
            headers: ['Programa / Unidad', 'Institución de Referencia', 'Descripción y Objetivos'],
            rows: [
              ['PAMI (Atención Médica Integral)', 'Hospital Univ. Gregorio Marañón', 'Respuesta ágil, consultas agrupadas en un solo día y coordinación de especialistas.'],
              ['AMI-TEA', 'Hospital Univ. Gregorio Marañón', 'Unidad especializada en diagnóstico, tratamiento y seguimiento integral.'],
              ['Odontología Especializada Adaptada', 'Hospital Niño Jesús / San José', 'Protocolos bucodentales bajo sedación o anestesia para evitar experiencias traumáticas.'],
              ['Trastornos del Aprendizaje', 'Hospital Sant Joan de Déu', 'Abordaje integral en comorbilidades escolares y del neurodesarrollo.'],
            ],
          },
        },
        {
          id: 'accesibilidad-tarjeta-aa',
          heading: '3. Accesibilidad Cognitiva y Tarjeta Sanitaria Preferente',
          paragraphs: [
            '• Tarjeta con distintivo "AA / TEA": Otorga prioridad en salas de urgencias y consultas, reduciendo la ansiedad por sobrecarga acústica y permitiendo el acompañamiento permanente de un cuidador en todo procedimiento.',
            '• Accesibilidad Cognitiva: Uso de agendas visuales y pictogramas anticipatorios de agujas, estetoscopios o radiografías para dar predictibilidad y seguridad.',
          ],
        },
      ],
      conclusions: [
        'Un entorno médico accesible no solo reduce el estrés de la persona autista, sino que garantiza una atención sanitaria digna y equitativa.',
        'La formación del personal de salud en neurodiversidad es un derecho innegociable.',
      ],
    },
  },

  // 12. TCA
  {
    id: 'tca-conducta-alimentaria',
    number: '9',
    title: 'Guía Informativa sobre Trastornos de la Conducta Alimentaria (TCA)',
    subtitle: 'Clasificación DSM-5, Variantes Emergentes, Ensayos MOSAIC/SWAN y Directrices APA 2023',
    category: 'Trastornos Clínicos',
    readTime: '9 min',
    shortSummary: 'Afectan al 9% de la población mundial y causan más de 10.000 muertes anuales. Análisis de anorexia, bulimia, atracón, ARFID, diabulimia y ortorexia, junto a la comparativa de tratamientos ambulatorios MANTRA, SSCM y CBT-E.',
    keyStats: [
      { label: '9%', value: 'Población Global', detail: 'Afectada por algún tipo de TCA' },
      { label: '10.000+', value: 'Muertes Anuales', detail: 'Una de las enfermedades psiquiátricas más letales' },
      { label: 'MANTRA & CBT-E', value: 'Tratamientos', detail: 'Modelos ambulatorios especializados validados' },
      { label: 'APA 2023', value: 'Directrices', detail: 'Tamizaje obligatorio en consultas psiquiátricas' },
    ],
    tags: ['TCA', 'Anorexia', 'Bulimia', 'Atracón', 'MANTRA', 'CBT-E', 'Diabulimia'],
    content: {
      executiveSummary: 'Los Trastornos de la Conducta Alimentaria (TCA) son condiciones graves caracterizadas por perturbaciones persistentes en la relación con la comida, el peso y la autopercepción corporal. Estudios clínicos comparativos (MOSAIC y SWAN) analizan la efectividad de MANTRA, SSCM y CBT-E en adultos. Se examinan las directrices de la APA 2023 y patologías emergentes como la diabulimia y la ortorexia.',
      sections: [
        {
          id: 'clasificacion-dsm5-emergentes',
          heading: '1. Clasificación del DSM-5 y Condiciones Emergentes',
          paragraphs: [
            '• Anorexia Nerviosa (AN): Restricción de la ingesta, miedo visceral a ganar peso y distorsión corporal.',
            '• Bulimia Nerviosa (BN): Ciclos de atracones seguidos de conductas purgativas compensatorias (vómitos, laxantes, ejercicio compulsivo).',
            '• Trastorno por Atracón (BED): Ingesta compulsiva recurrente sin conductas de compensación; el TCA más común.',
            '• ARFID: Trastorno por evitación/restricción de ingesta debido a aversión sensorial o miedo a consecuencias desagradables (atragantarse), sin preocupación por la silueta.',
            '• Variantes Emergentes Críticas: Diabulimia (restricción deliberada de insulina en diabéticos tipo 1 para adelgazar; multiplica por 3.2 el riesgo mortal), Ortorexia Nerviosa (fijación patológica por comer 100% "puro"), Vigorexia y Pregorexia.',
          ],
        },
        {
          id: 'ensayos-mosaic-swan',
          heading: '2. Análisis de Tratamientos Ambulatorios (Ensayos MOSAIC y SWAN)',
          paragraphs: [
            'Comparación de los 3 modelos psicoterapéuticos más investigados:',
          ],
          table: {
            caption: 'Modelos Terapéuticos en Anorexia Nerviosa del Adulto',
            headers: ['Modelo de Tratamiento', 'Fundamento Teórico', 'Hallazgos de Ensayos Clínicos'],
            rows: [
              ['MANTRA (Maudsley)', 'Enfoque cognitivo-interpersonal; ataca la rigidez, sobrecontrol y rasgos obsesivos.', 'Máxima aceptabilidad y credibilidad calificada por los pacientes a 12 meses.'],
              ['SSCM (Manejo Clínico Especializado)', 'Combina educación médica nutricional con psicoterapia de apoyo.', 'Eficacia similar en aumento de IMC y estabilización física ambulatoria.'],
              ['CBT-E (TCC Mejorada)', 'Modelo transdiagnóstico centrado en la sobrevaloración de la figura y peso.', 'Mayor tasa de recuperación de peso saludable a los 12 meses (59% en estudio SWAN).'],
            ],
          },
        },
        {
          id: 'directrices-apa-2023',
          heading: '3. Directrices Actualizadas de la APA (2023)',
          paragraphs: [
            '• Tamizaje Obligatorio: Evaluación de conducta alimentaria en toda consulta médica inicial.',
            '• Monitorización Somática: Electrocardiograma (EKG) y analíticas completas para prevenir arritmias por hipopotasemia.',
            '• Terapia Familiar (FBT): Modelo de primera elección indiscutible en niños y adolescentes.',
            '• Alerta por Anorexia Atípica: No juzgar por el peso; personas con peso normal o elevado pueden presentar cuadros de desnutrición severa y alto riesgo médico.',
          ],
        },
      ],
      conclusions: [
        'Los TCA no son un capricho ni una cuestión estética: son trastornos psiquiátricos con graves secuelas biológicas.',
        'La detección temprana y el abordaje interdisciplinario (psiquiatra, psicólogo, nutricionista) son la clave de la remisión duradera.',
      ],
    },
  },

  // 13. DISCAPACIDAD INTELECTUAL Y ADICCIONES
  {
    id: 'discapacidad-intelectual-adicciones',
    number: '10',
    title: 'Discapacidad Intelectual y Trastornos por Consumo de Sustancias',
    subtitle: 'Patología Dual, Enmascaramiento Diagnóstico ("The Fatal Five") y Programa Take It Personal!+',
    category: 'Trastornos Clínicos',
    readTime: '10 min',
    shortSummary: 'Paradoja epidemiológica: 13.5% de adicciones en personas con discapacidad. Análisis del enmascaramiento diagnóstico (diagnostic overshadowing), las 5 causas fatales prevenibles y adaptaciones terapéuticas como Take It Personal!+.',
    keyStats: [
      { label: '13.5%', value: 'TUS en Discapacidad', detail: 'Frente al 3.9% en población general' },
      { label: 'The Fatal Five', value: 'Riesgo Somático', detail: 'Aspiración, estreñimiento, sepsis, etc.' },
      { label: 'Enmascaramiento', value: 'Sesgo Clínico', detail: 'Atribuir síntomas médicos a la discapacidad' },
      { label: 'Take It Personal+', value: 'Prevención Adaptada', detail: 'Entrevista motivacional y rol-playing' },
    ],
    tags: ['Discapacidad Intelectual', 'Adicciones', 'Patología Dual', 'Enmascaramiento Diagnóstico', 'Take It Personal+'],
    content: {
      executiveSummary: 'El trastorno por consumo de sustancias (TUS) en personas con discapacidad intelectual (DI) representa una patología dual compleja y frecuentemente desatendida. Aunque menos personas con DI consumen sustancias, las que lo hacen tienen hasta el triple de probabilidad de desarrollar adicción crónica por menor resiliencia neurobiológica y aislamiento social. Se detalla el fenómeno del enmascaramiento diagnóstico, los sesgos del profesional, "The Fatal Five" y modelos preventivos adaptados.',
      sections: [
        {
          id: 'modelo-biopsicosocial-paradoja',
          heading: '1. El Modelo Biopsicosocial y la Paradoja Epidemiológica',
          paragraphs: [
            '• Factores Biológicos: Predisposición genética (genes CNR1 y DRD2), menor tolerancia y disfunción ejecutiva en el lóbulo frontal.',
            '• Factores Psicosociales: El 41.2% sufre comorbilidad con depresión o ansiedad; alta exposición a experiencias traumáticas en la infancia (ACE).',
            '• La Paradoja: Menos personas con discapacidad consumen drogas, pero entre quienes consumen, la tasa de adicción trepa al 13.5% (frente al 3.9% de la población general).',
            '• En población penitenciaria forense, hasta el 74% de los internos con problemas de drogas presentan discapacidad intelectual límite o leve no diagnosticada.',
          ],
        },
        {
          id: 'enmascaramiento-fatal-five',
          heading: '2. El Enmascaramiento Diagnóstico y "Las Cinco Fatales"',
          paragraphs: [
            'El enmascaramiento diagnóstico (Diagnostic Overshadowing) ocurre cuando el profesional de salud atribuye cualquier queja médica o cambio de conducta a la discapacidad intelectual previa del paciente, ignorando dolencias somáticas tratables o el impacto de sustancias.',
            'Principales causas prevenibles de muerte asociadas (The Fatal Five):',
          ],
          listItems: [
            '1. Aspiración pulmonar por dificultades de deglución.',
            '2. Estreñimiento crónico e íleo paralítico (riesgo de sepsis abdominal).',
            '3. Deshidratación severa.',
            '4. Convulsiones no controladas.',
            '5. Sepsis asociada a reflujo o infecciones no comunicadas verbalmente.',
          ],
        },
        {
          id: 'adaptaciones-take-it-personal',
          heading: '3. Adaptaciones Terapéuticas y Programa Take It Personal!+',
          paragraphs: [
            'Los tratamientos tradicionales abstractos fallan. Se requieren adaptaciones concretas:',
            '• Métodos multisensoriales: Pictogramas, tarjetas visuales de lectura fácil y sesiones cortas de 30 minutos.',
            '• Programa Take It Personal!+: Combina la Entrevista Motivacional con entrenamiento práctico de juego de roles (aprender a decir "NO" ante la presión de pares, reduciendo la necesidad de sumisión para ser aceptados).',
            '• Atención Integrada: Superar la grieta entre centros de discapacidad y servicios de adicciones.',
          ],
        },
      ],
      conclusions: [
        'La adicción no es un fallo moral; es una afección cerebral tratable que requiere compasión y accesibilidad comunicativa.',
        'La formación del personal de salud para evitar el enmascaramiento diagnóstico salva vidas a diario.',
      ],
    },
  },
];
