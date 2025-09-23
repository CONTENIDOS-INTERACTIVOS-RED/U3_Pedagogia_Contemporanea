export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Educación del siglo XXI',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Pensamiento crítico y resolución de problemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamentos del pensamiento crítico en la infancia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Desarrollo de habilidades para resolver problemas en contextos escolares',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estrategias didácticas para fomentar el pensamiento crítico en la educación infantil',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Pensamiento creativo como complemento del pensamiento crítico',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación y colaboración ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'La importancia de la comunicación efectiva en contextos educativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Estrategias para promover la colaboración en el aula de primera infancia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'El rol del docente como mediador del diálogo y la interacción social',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Comunicación multimodal en la era digital',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desafíos y oportunidades ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Nuevas demandas sociales y su impacto en la educación infantil',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Diversidad e inclusión: un compromiso educativo del siglo XXI',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Formación docente continua frente a los cambios educativos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Educación para la ciudadanía global y el desarrollo sostenible',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tendencias emergentes y tecnología educativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Integración de TIC en la primera infancia',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Entornos de aprendizaje adaptativos e inclusivos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Gamificación y nuevas narrativas digitales',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Kincheloe, J. L. (2001). Hacia una revisión crítica del pensamiento docente: ( ed.). Ediciones Octaedro, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/163533 ',
    },
    {
      referencia:
        'Rojas Gómez, M. Bazán Zurita, H. & Valqui Cachi, C. (2013). El pensamiento crítico de nuestra América y los desafíos del siglo XXI. Tomo II: ( ed.). Ediciones y Gráficos Eón. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/40903',
    },
    {
      referencia:
        'Mazarío Triana, I. (2009). La resolución de problemas: un reto para la educación contemporánea. En: Estrategias de aprendizaje en la nueva universidad cubana: ( ed.). Editorial Universitaria.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34486',
    },
    {
      referencia:
        'Álvarez, M. R. (2012). El desarrollo de las metacompetencias Pensamiento Crítico Reflexivo y Autonomía de Aprendizaje, a través del uso del e-Diario en el Prácticum de Formación del Profesorado (Doctoral dissertation, Universitat de Barcelona). ',
      link:
        'https://revistas.usal.es/tres/index.php/1130-3743/article/view/10364/10803 ',
    },
    {
      referencia:
        'Puertas Céspedes, S. A. (2016). La estimulación de los diferentes tipos de pensamiento creativo en niños entre los 8 y los 11 años, a través de la escritura de mitos sobre el origen del universo. Forma y función, 29(1), 103-131.  ',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S0120-338X2016000100005&script=sci_arttext',
    },
    {
      referencia:
        'Aparicio Aznar, M. (Il.) & Igualada, A. (Il.). (2019). El desarrollo del lenguaje y la comunicación en la infancia: ( ed.). Editorial UOC.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106676',
    },
    {
      referencia:
        'Páramo, T. (2006). Sociedad y comunicación: una mirada al siglo XXI: ( ed.). Plaza y Valdés (México).  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/75776',
    },
    {
      referencia:
        'Brito, L. H. (2023). Cómo lograr una comunicación efectiva en el contexto de la escuela" Niños Héroes" en alumnos de 4 grado a partir de estrategias lúdicas   ',
      link:
        'http://rixplora.upn.mx/jspui/bitstream/RIUPN/141737/1/2421%20-%20UPN092LEIPHELL2023.pdf',
    },
    {
      referencia:
        'Carballo, O. C., & Escobar, N. G. (2005). El nuevo rol de profesor: mediador y asesor. Revista Rhombus, 4(11), 40-47.  ',
      link:
        'https://www.academia.edu/download/36124839/5_elnuevoroldeprofesor_mediadoryasesor.pdf',
    },
    {
      referencia:
        'Waissbluth, M. (2019). Educación para el siglo XXI: el desafío latinoamericano: ( ed.). FCE - Fondo de Cultura Económica.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123806',
    },
    {
      referencia:
        'Noro, J. E. (2010). Gestión y acción: docentes del siglo XXI: ( ed.). MV Ediciones S.R.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/78872 ',
    },
    {
      referencia:
        'Lozano Díaz, A. & Fernández Prados, J. S. (2021). Educación para el desarrollo y para una ciudadanía global: (1 ed.). Editorial Universidad de Almería.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/281385',
    },
    {
      referencia:
        'Marchesi, Á., & Hernández, L. (2019). Cinco dimensiones claves para avanzar en la inclusión educativa en Latinoamérica. Revista latinoamericana de educación inclusiva, 13(2), 45-56. ',
      link: 'https://www.scielo.cl/scielo.php?pid=S0718-73782019000200045 ',
    },
    {
      referencia:
        'Rodríguez-Izquierdo, R. M., & García Bayón, I. (2024). Revisión sistemática sobre educación para una ciudadanía global transformadora. Revista Internacional de Educación para la Justicia Social, 13(1), 171-186.  ',
      link:
        'https://revistas.uam.es/riejs/article/download/riejs2024_13_1_009/17187',
    },
    {
      referencia:
        'López-Meneses, E. (Il.), Mengual-Andrés, S. (Il.) & Fuentes-Cabrera, A. (Il.). (2019). Tecnologías y tendencias didácticas emergentes en escenarios educativos: ( ed.). Ediciones Octaedro, S.L. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/158297 ',
    },
    {
      referencia:
        'Alonso García, C. M. (2007). Tecnología educativa: ( ed.). McGraw-Hill España.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50113',
    },
    {
      referencia:
        'Bolaño García, M. (2022). Tecnologías educativas para la inclusión: (1 ed.). Editorial Unimagdalena.   ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217031',
    },
    {
      referencia:
        'Morejón Rodríguez, L., Abreus Gómez, M., & Torres Portela, L. (2023). Uso de las TIC en la educación de la Primera Infancia desde una perspectiva CTS. Conrado, 19(94), 78-85.  ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442023000500078',
    },
    {
      referencia:
        'Ramírez Calderón, D. C. (2024). Las TIC como recurso clave para el fortalecimiento del proceso lector en la primera infancia.  ',
      link:
        'https://repository.unad.edu.co/handle/10596/64714?locale-attribute=en',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje colaborativo',
      significado:
        'Estrategia pedagógica que promueve el trabajo conjunto entre estudiantes para alcanzar objetivos comunes.',
    },
    {
      termino: 'Ciudadanía global',
      significado:
        'Enfoque educativo que forma personas conscientes de su rol en el mundo y comprometidas con el bien común.',
    },
    {
      termino: 'Comunicación efectiva',
      significado:
        'Capacidad de expresar ideas de manera clara, respetuosa y comprensible en distintos contextos educativos.',
    },
    {
      termino: 'Creatividad',
      significado:
        'Habilidad para generar ideas nuevas y resolver problemas de forma original y significativa.',
    },
    {
      termino: 'Curiosidad',
      significado:
        'Deseo natural de explorar, investigar y aprender sobre el entorno y las experiencias.',
    },
    {
      termino: 'Educación del siglo XXI',
      significado:
        'Modelo educativo que responde a los desafíos actuales mediante el desarrollo de habilidades críticas, sociales y tecnológicas.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'Modelo educativo que reconoce y valora la diversidad, garantizando igualdad de oportunidades para todos.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de ponerse en el lugar del otro y comprender sus emociones y perspectivas.',
    },
    {
      termino: 'Entornos de aprendizaje',
      significado:
        'Espacios físicos o virtuales donde se desarrollan procesos educativos significativos.',
    },
    {
      termino: 'Habilidades blandas',
      significado:
        'Conjunto de competencias socioemocionales como la empatía, la comunicación y el trabajo en equipo.',
    },
    {
      termino: 'Pensamiento crítico',
      significado:
        'Capacidad para analizar, evaluar y tomar decisiones fundamentadas con base en la reflexión.',
    },
    {
      termino: 'Resolución de problemas',
      significado:
        'Proceso que implica identificar un desafío, analizarlo y proponer soluciones viables.',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'Información que se brinda para mejorar el aprendizaje y el desempeño, de forma constructiva.',
    },
    {
      termino: 'TIC',
      significado:
        'Tecnologías de la Información y la Comunicación aplicadas en los procesos educativos.',
    },
  ],
}
