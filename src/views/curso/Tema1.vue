<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Pensamiento crítico y resolución de problemas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo aprenden a pensar los niños y las niñas desde sus primeros años? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera un reto cotidiano puede convertirse en una oportunidad para fomentar la reflexión, la toma de decisiones y la creatividad en la infancia?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En la educación del siglo XXI, promover el pensamiento crítico y la resolución de problemas se convierte en un eje fundamental para formar ciudadanos conscientes, autónomos y capaces de transformar su realidad. Desde la primera infancia, es posible sembrar las bases de estas habilidades, a través de experiencias que estimulen la curiosidad, el análisis y el diálogo reflexivo.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          p.mb-0 Este espacio invita a reconocer la importancia de diseñar ambientes educativos que favorezcan la formulación de preguntas, el planteamiento de hipótesis, la búsqueda de soluciones y la toma de decisiones fundamentadas. También se explora cómo acompañar estos procesos desde la práctica pedagógica, fortaleciendo el desarrollo integral de los niños y las niñas.
        p A lo largo de este tema, se espera identificar estrategias concretas que permitan integrar el pensamiento crítico y la resolución de problemas en la vida cotidiana del aula, entendiendo que enseñar no es transmitir respuestas, sino que se busca despertar preguntas.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Fundamentos del pensamiento crítico en la infancia
    
    p.mb-5 El desarrollo del pensamiento crítico desde la infancia es clave para formar ciudadanos reflexivos, creativos y con capacidad para tomar decisiones éticas en un mundo en constante cambio.
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Fundamentos del pensamiento crítico en la infancia
            p.mb-4(data-aos="fade-right") En el PDF <b>Fundamentos del pensamiento crítico en la infancia</b>, se abordan los principios que permiten cultivar esta competencia desde los primeros años de vida, destacando la importancia de la curiosidad, la observación, la reflexión, la argumentación y la toma de decisiones responsables como pilares del aprendizaje significativo y autónomo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Fundamentos del pensamiento crítico en la infancia
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Desarrollo de habilidades para resolver problemas en contextos escolares
  
    .bg-color-4.p-4(data-aos="fade-left").h-100.mb-5
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ¿Se ha reflexionado alguna vez sobre el papel que juegan los problemas en el aprendizaje de los niños y las niñas?  

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el entorno escolar, los problemas no son obstáculos a evitar, sino oportunidades para pensar, analizar, imaginar y actuar. Resolver problemas, desde la primera infancia, es una competencia clave que permite a los estudiantes desarrollar habilidades cognitivas, sociales y emocionales necesarias para enfrentar un mundo lleno de desafíos.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          p.mb-0 Según Mazarío (2009), el desarrollo de habilidades para resolver problemas va más allá de encontrar respuestas. Implica comprender una situación, explorar caminos posibles, tomar decisiones, asumir consecuencias y aprender del proceso. En este sentido, el aula se transforma en un espacio de experimentación, donde cada reto cotidiano, por simple que parezca, puede convertirse en una experiencia formativa.
        p Resolver problemas de forma significativa exige movilizar diversas capacidades que se fortalecen con la práctica:
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12.py-5
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="41%" y="21.5%" numero="+")
                h5 Análisis de situaciones
                p Se parte de la observación y la comprensión de lo que ocurre. Esto exige atención, lenguaje claro y pensamiento lógico.
    
              .bg-color-white.box-shadow.p-3(x="35%" y="44%" numero="+")
                h5 Formulación de hipótesis
                p Se estimula la imaginación al anticipar soluciones posibles. Esto promueve el razonamiento y la creatividad.
    
              .bg-color-white.box-shadow.p-3(x="26%" y="36%" numero="+")
                h5 Toma de decisiones
                p Se desarrolla la autonomía al elegir entre varias opciones. Esta decisión requiere valorar las consecuencias y asumir responsabilidades.
    
              .bg-color-white.box-shadow.p-3(x="27%" y="66%" numero="+")
                h5 Flexibilidad cognitiva
                p Se aprende que equivocarse no es fallar, sino una parte valiosa del camino. Cambiar de estrategia es una señal de adaptación, no de debilidad.
    
              .bg-color-white.box-shadow.p-3(x="40.5%" y="71%" numero="+")
                h5 Colaboración
                p Resolver problemas en grupo permite ejercitar habilidades sociales como la escucha, el diálogo, la negociación y el respeto por la diferencia.

    .bg-full-width.bg-color-8
      .p-4.p-md-5
        p En la educación infantil, el desarrollo de estas habilidades no debe esperar hasta etapas superiores. Desde muy temprano, las niñas y los niños pueden enfrentarse a situaciones problematizadoras adecuadas a su edad y nivel de desarrollo. 
        p.mb-5 Estas situaciones surgen naturalmente en la dinámica del aula:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/8.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Cuando se arma una torre de bloques que se cae repetidamente.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Al organizar turnos de juego donde algunos niños no quieren esperar.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Durante una actividad artística en la que faltan materiales.
          .col-lg-3.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Al intentar llegar a acuerdos en un juego de roles o dramatización.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left").mb-3 Cada una de estas situaciones puede ser aprovechada como una oportunidad pedagógica. Lo fundamental es el acompañamiento del docente, quien debe saber cómo transformar lo cotidiano en una experiencia de pensamiento, reflexión y construcción colectiva de soluciones.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 Según Mazarío (2009), el desarrollo de habilidades para resolver problemas va más allá de encontrar respuestas. Implica comprender una situación, explorar caminos posibles, tomar decisiones, asumir consecuencias y aprender del proceso. En este sentido, el aula se transforma en un espacio de experimentación, donde cada reto cotidiano, por simple que parezca, puede convertirse en una experiencia formativa.

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La resolución de problemas no se enseña a través de explicaciones teóricas, sino desde la vivencia. Por eso, el papel del docente no es dar respuestas, sino formular preguntas poderosas que despierten la reflexión: ¿Qué está pasando? ¿Qué harías diferente? ¿Por qué crees que sucedió eso? ¿Qué aprendiste con esta experiencia?
        p(data-aos="fade-left") El acompañamiento debe ser respetuoso, sin invalidar los errores, y estimulante, reconociendo cada avance. Se requiere un docente que observe con sensibilidad, propicie la comunicación, ofrezca alternativas sin imponer y confíe en la capacidad de los niños para construir sus propias soluciones.
        p Algunas estrategias efectivas en el aula de educación infantil son:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").order-2.p-5
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Juegos cooperativos donde se resuelvan misiones o retos. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Proyectos donde los niños busquen soluciones a necesidades reales de su entorno.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Dramatizaciones con finales abiertos, que inviten a construir desenlaces colectivos.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Experimentos sencillos que requieran observación, inferencia y toma de decisiones.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cuentos que presenten dilemas o conflictos que el grupo pueda analizar y resolver.
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema1/15.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se está ofreciendo en el aula el tiempo, el espacio y el acompañamiento necesario para que los niños piensen, decidan y resuelvan? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se valora el proceso tanto como el resultado? 
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-5(data-aos="fade-left")
          p Promover la resolución de problemas no es solo una estrategia metodológica, sino una apuesta ética y pedagógica por formar personas críticas, autónomas, creativas y colaborativas.
          p.mb-0 Cada problema es una oportunidad para aprender, y cada solución, una huella del pensamiento infantil en acción. Se invita a diseñar experiencias que despierten la curiosidad, fortalezcan la capacidad de análisis y preparen a las nuevas generaciones para enfrentar la complejidad del mundo con confianza, empatía y criterio propio.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Estrategias didácticas para fomentar el pensamiento crítico en la educación infantil
    
    p.mb-5 El desarrollo del pensamiento crítico desde la primera infancia exige estrategias didácticas intencionadas que estimulen la reflexión, el diálogo, la creatividad y la toma de decisiones.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Estrategias didácticas para fomentar el pensamiento crítico en la educación infantil
            p.mb-4(data-aos="fade-right") En el PDF <b>Estrategias didácticas para fomentar el pensamiento crítico en la educación infantil</b>, se presentan propuestas pedagógicas concretas que permiten transformar el aula en un espacio donde los niños y las niñas aprenden a cuestionar, argumentar y construir significados desde sus propias experiencias, promoviendo así una formación más ética, autónoma y participativa.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias didácticas para fomentar el pensamiento crítico en la educación infantil
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
    
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Pensamiento creativo como complemento del pensamiento crítico

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/21.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 ¿Qué ocurriría si el pensamiento lógico no se acompañara de imaginación? 
        .bg-color-6.p-5(data-aos="fade-left")
          p.mb-0 En la educación actual, ya no basta con formar niños y niñas que sepan analizar una situación o argumentar con claridad. También se requiere que puedan imaginar nuevas formas de resolver problemas, crear alternativas diferentes, y transformar la realidad desde la innovación. Es aquí donde el pensamiento creativo entra en juego como el complemento perfecto del pensamiento crítico.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7
              h5 Pensamiento crítico
              p Según Puertas (2016), el pensamiento crítico permite observar con detenimiento, cuestionar, comparar y tomar decisiones fundamentadas. En cambio, el pensamiento creativo abre posibilidades, genera ideas fuera de lo común y propone soluciones inesperadas. Ambos, en conjunto, potencian una formación integral que desarrolla cabeza, corazón y acción. No se trata de elegir entre uno u otro, sino de integrarlos como partes de una misma habilidad: pensar con profundidad y con libertad.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7
              h5 Pensamiento creativo
              p Por pensamiento creativo, se entiende la capacidad para generar ideas originales, plantear nuevas perspectivas y encontrar soluciones novedosas a diversas situaciones. En la infancia, esta habilidad se manifiesta de forma natural a través del juego simbólico, la curiosidad constante, la capacidad de asombro y la facilidad para imaginar mundos posibles. La labor del docente consiste, entonces, en proteger, nutrir y expandir esa capacidad innata.
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
      .col-lg
        p Promover el pensamiento creativo implica brindar espacios flexibles, materiales versátiles y actividades abiertas, donde no haya una única respuesta correcta, sino múltiples caminos por explorar. También significa valorar la iniciativa, el error, la expresión personal y las propuestas distintas a lo esperado.
        p.mb-0 Aunque suelen presentarse como habilidades diferentes, el pensamiento crítico y el creativo se entrelazan constantemente:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Pensamiento crítico y pensamiento creativo
    .tabla-a.color-acento-botones.pst.mb-5
      table
        thead
          tr
            th.text-center.text-white.bg-color-5 Pensamiento crítico
            th.text-center.text-white.bg-color-5 Pensamiento creativo
        tbody.bg-color-11
          tr
            th Analiza la información.
            td Genera nuevas ideas.
          tr
            th Evalúa argumentos.
            td Propone múltiples posibilidades.
          tr
            th Detecta errores.
            td Rompe con lo convencional.
          tr
            th Busca coherencia y evidencia.
            td Explora, imagina e innova.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-7.p-5(data-aos="fade-left").mb-3
          p.mb-0 En un aula infantil, ambas formas de pensamiento pueden desarrollarse simultáneamente. Por ejemplo, al resolver un problema de convivencia, los niños pueden analizar qué ocurrió (pensamiento crítico) y luego imaginar soluciones para que no vuelva a pasar (pensamiento creativo). Esta integración fortalece su autonomía, autoestima y sentido ético.

        p(data-aos="fade-left") Estrategias para fomentar el pensamiento creativo en educación infantil:
    
    .bg-full-width.bg-color-12
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Retos de imaginación
                p.text-center Proponer preguntas como “¿Y si los animales hablaran?” o “¿Qué pasaría si no existiera el sol?” abre caminos insospechados para la creación y la expresión.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Materiales no estructurados
                p.text-center Objetos como cajas, telas, tubos o tapitas permiten que los niños inventen sus propios juegos y construcciones, activando la creatividad.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Dramatización libre
                p.text-center Invitar a representar situaciones o personajes, sin guion definido, estimula la expresión espontánea, la invención y el pensamiento divergente.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Talleres de arte y creación
                p.text-center La pintura, la escultura con plastilina, el collage o la música invitan a combinar materiales, emociones e ideas de forma única.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Cuentos colectivos
                p.text-center Inventar historias entre todos, en las que cada uno agregue un elemento nuevo, favorece la construcción compartida de mundos imaginarios.
              .bg-color-white.h-100.shadow-app.p-4
                img(src='@/assets/curso/tema1/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h5.text-center Ambientes que inspiran
                p.text-center Un aula que estimula los sentidos, que cambia de vez en cuando, que incorpora naturaleza y juego simbólico, despierta la curiosidad y la exploración.

    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/25.png', alt='')

    p El pensamiento creativo se contagia. Un educador que se atreve a proponer, cambiar, jugar y crear junto a los niños, genera un ambiente donde se valora lo inesperado, se celebra la diferencia y se confía en la capacidad creadora de cada niño y niña. Enseñar de forma creativa no significa tener más recursos, sino usar los recursos disponibles con originalidad, intención pedagógica y amor.

    p.mb-5 Este enfoque permite que el futuro docente:

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center
            .col-lg-8(data-aos="fade-left").p-5
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Reconozca el valor del pensamiento creativo en la formación integral de las infancias. 
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Identifique estrategias didácticas que integren el pensamiento crítico y creativo.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Proponga actividades lúdicas, expresivas y abiertas, ajustadas a las características de los niños.
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Cultive su propia actitud creativa como base de una práctica pedagógica transformadora.
            .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema1/32.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/33.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se está dejando espacio suficiente en el aula para que los niños creen, inventen y se equivoquen sin miedo? 
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema1/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se valora más la respuesta correcta que el proceso de imaginar? 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/35.png", data-aos="zoom-in")
      .col-lg-8
        p Se invita a reflexionar sobre cómo, al integrar el pensamiento crítico con el creativo, se forma a seres humanos más completos, capaces de analizar el mundo, pero también de soñarlo diferente y mejorarlo desde su propia voz.
        .bg-color-1.p-5(data-aos="fade-left")
          p A lo largo de este recorrido temático se ha comprendido que el pensamiento crítico y la resolución de problemas no son habilidades aisladas, sino <b>componentes fundamentales</b> de una educación que forma ciudadanos autónomos, reflexivos y capaces de actuar de manera ética y transformadora.
          p.mb-0 Estas competencias permiten analizar situaciones desde múltiples perspectivas, tomar decisiones fundamentadas y buscar soluciones creativas ante los desafíos que plantea la vida escolar y social.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/36.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Sin embargo, pensar críticamente y resolver problemas no se realiza en solitario. La capacidad de dialogar, escuchar al otro, construir acuerdos y trabajar en equipo resulta indispensable para que estas habilidades realmente se integren en la práctica educativa. Por ello, el siguiente paso en este proceso de formación implica abordar dos pilares fundamentales de la educación del siglo XXI: la comunicación y la colaboración.
        
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/58701" target="_blank" rel="noopener noreferrer") Herrero, J. C. (2016). Elementos del pensamiento crítico: ( ed.). Marcial Pons Ediciones Jurídicas y Sociales.  

 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/221914" target="_blank" rel="noopener noreferrer") Henao Morales, L. Y. Mazorco Salas, J. E. & Pedreros Soler, N. H. (2022). Sistematización de una estrategia de apropiación social de la ciencia tecnología e innovación. Promoción del pensamiento crítico en niños, niñas y jóvenes en instituciones educativas del Tolima: (1 ed.). Universidad de Ibagué.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/60486 " target="_blank" rel="noopener noreferrer") Bellido Bautista, J. G. (2005). Motivar en el aula: el arte de hacer que hagan: ( ed.). Ediciones Aljibe. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/4772/477248390007.pdf " target="_blank" rel="noopener noreferrer") Buitrago, A. S. H., & Pineda, L. M. H. (2012). Ecosistemas escolares para el desarrollo del pensamiento creativo en los niños. Praxis & saber, 3(6), 142-164. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.rededuca.net/blog/educacion-y-docencia/desarrollar-pensamiento-critico " target="_blank" rel="noopener noreferrer") El uso del pensamiento crítico. (s.f.). Rededuca. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=92u6ibginyk " target="_blank" rel="noopener noreferrer") Educar Portal. (2019, 11 de julio). Microaprendizaje: ¿Qué es el pensamiento crítico y cómo desarrollarlo? [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1hSeX_YJiwE" target="_blank" rel="noopener noreferrer") COLEGIO CARDENAL SPÍNOLA HUELVA. (2021, 25 de febrero). Pensamiento crítico y creativo: Compara y contrasta - Infantil 4 años Cardenal Spínola Huelva [Video]. YouTube.   





          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
