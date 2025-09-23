<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Comunicación y colaboración'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p(data-aos="fade-up") ¿Cómo se aprende a vivir con otros desde los primeros años? 
            p.mb-0 En la educación infantil, cada palabra, gesto o silencio comunica. Cada juego compartido, conflicto resuelto o idea construida en grupo, enseña a convivir, a dialogar y a construir con los demás. Por ello, hablar de comunicación y colaboración en el aula no es un tema menor, sino un pilar que sostiene las relaciones, el aprendizaje y el crecimiento integral de niños y niñas.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 En esta nueva sección, se propone reflexionar sobre la importancia de aprender a escuchar, expresarse con claridad, respetar turnos, reconocer las emociones del otro y construir juntos en lugar de competir. Además, se analizará cómo estas habilidades no solo fortalecen los vínculos en la infancia, sino que también preparan para una vida en sociedad basada en el respeto, la empatía y el trabajo en equipo.
    
        .bg-color-1.px-5.py-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de ejemplos, estrategias didácticas y experiencias prácticas, se invita a descubrir cómo, desde el rol docente, se puede fomentar una comunicación asertiva y crear ambientes colaborativos donde cada voz cuente y cada niño y niña se sienta parte activa de su proceso de aprendizaje.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] La importancia de la comunicación efectiva en contextos educativos
    
    p.mb-5 La comunicación efectiva es un pilar fundamental en el ámbito educativo, ya que permite construir vínculos significativos, facilitar el aprendizaje y promover la convivencia.
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") La importancia de la comunicación efectiva en contextos educativos
            p.mb-4(data-aos="fade-right") En el PDF <b>La importancia de la comunicación efectiva en contextos educativos</b>, se analizan los múltiples modos en que la comunicación incide en el desarrollo integral de la infancia, destacando el papel del docente como modelo y mediador de un diálogo respetuoso, empático y coherente. Este enfoque invita a repensar cada interacción en el aula como una oportunidad para educar desde la palabra, el gesto y la escucha activa.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> La importancia de la comunicación efectiva en contextos educativos
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estrategias para promover la colaboración en el aula de primera infancia
  
    .bg-color-4.p-4(data-aos="fade-left").h-100.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 ¿Cómo se aprende a convivir y construir con otros desde los primeros años de vida? 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Esta pregunta permite comprender que, en la educación infantil, no solo se enseña a contar, leer o escribir, sino también a vivir con otros. Desde esta perspectiva, la colaboración se convierte en un eje fundamental del desarrollo integral y del aprendizaje significativo.
    
        .bg-color-1.p-5(data-aos="fade-left").mb-5
          p A diferencia de lo que ocurre en modelos individualistas de enseñanza, el enfoque colaborativo promueve un aula en la que <b>cada voz cuenta</b>, donde los logros se celebran de manera colectiva y donde las diferencias se convierten en oportunidades de crecimiento. 
          p.mb-0 En este escenario, el docente actúa como guía, facilitando experiencias que permiten que los niños y las niñas aprendan a comunicarse, a tomar decisiones juntos, a compartir recursos, a respetar turnos y a resolver conflictos de forma pacífica.
    
    p Promover la colaboración en la primera infancia requiere planificación, intención pedagógica y sensibilidad. 
    p.mb-5 A continuación, se presentan algunas estrategias claves que pueden aplicarse en el aula:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1
              h5 Juegos cooperativos
              p A través del juego, se aprende a colaborar de manera natural. Se sugiere incorporar actividades en las que el objetivo no sea ganar individualmente, sino alcanzar una meta en grupo: construir una torre entre todos, trasladar objetos de un lugar a otro sin que caigan, o inventar una coreografía grupal. Estos juegos fortalecen la empatía, el trabajo en equipo y la comunicación.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1
              h5 Proyectos de aula en pequeños grupos
              p El aprendizaje por proyectos permite que los niños y las niñas participen activamente en procesos significativos. Investigar sobre los animales de la selva, crear una exposición de arte o preparar una receta en grupo son ejemplos de cómo se puede promover la toma de decisiones conjunta, la distribución de tareas y la responsabilidad compartida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1
              h5 Lectura colaborativa y conversación en grupo
              p La lectura dialógica, en la que se hace una pausa para preguntar, opinar o imaginar juntos lo que sigue en la historia, favorece el pensamiento crítico y la escucha activa. También es útil organizar espacios como "la hora del diálogo", donde se abordan temas del día, se resuelven desacuerdos o simplemente se comparten emociones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1
              h5 Rincones de aprendizaje colaborativo
              p Diseñar espacios de juego o exploración donde se necesite del otro para completar una actividad estimula la cooperación espontánea. Por ejemplo, en el rincón de construcción se puede invitar a diseñar una ciudad entre varios; en el rincón de dramatización, a interpretar una historia con diferentes personajes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1
              h5 Construcción colectiva de acuerdos y normas
              p Involucrar a los niños y las niñas en la creación de normas del aula fortalece la participación, el sentido de pertenencia y el compromiso. Se puede hacer mediante carteles con dibujos o símbolos que ellos mismos elaboren, para recordar cómo se cuidan entre todos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-1
              h5 Resolución de conflictos como oportunidad de aprendizaje
              p En lugar de evitar los conflictos, se propone abordarlos como una posibilidad de enseñar habilidades sociales. Con apoyo del docente, los niños y las niñas pueden expresar cómo se sienten, escuchar al otro y pensar juntos en soluciones. Este tipo de mediación fortalece el desarrollo de la empatía y la autorregulación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1
              h5 Modelado constante del adulto
              p Finalmente, no se puede olvidar que la mejor estrategia para enseñar a colaborar es modelar la colaboración. Cuando el docente escucha con atención, coopera con otros adultos y muestra respeto por las ideas de los niños y las niñas, está enseñando con el ejemplo.
    
    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se están generando oportunidades reales para que los niños y las niñas se escuchen, se ayuden y decidan juntos?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Se valoran los procesos colaborativos tanto como los logros individuales?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera se puede enriquecer el ambiente del aula para que cada niño y niña sienta que su voz y su acción hacen parte de un “nosotros”?
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] El rol del docente como mediador del diálogo y la interacción social
    
    p.mb-5 La mediación del docente en la construcción del lenguaje y la interacción social es esencial para el desarrollo integral durante la primera infancia.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") El rol del docente como mediador del diálogo y la interacción social
            p.mb-4(data-aos="fade-right") En el PDF <b>El rol del docente como mediador del diálogo y la interacción social</b>, se exploran estrategias y fundamentos pedagógicos que permiten al educador acompañar activamente los procesos comunicativos y relacionales de los niños y las niñas, fomentando ambientes de confianza, escucha y participación. Este contenido resalta la importancia de formar vínculos sólidos y respetuosos que favorezcan la convivencia y el aprendizaje compartido desde los primeros años.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El rol del docente como mediador del diálogo y la interacción social
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Comunicación multimodal en la era digital
    
    .bg-full-width.bg-color-8
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/96859" target="_blank" rel="noopener noreferrer") Sánchez Hernández, M. & Oliva Marañón, C. (2016). Formas de comunicación en el siglo XXI: ( ed.). Dykinson.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dspace.ucacue.edu.ec/items/a9768a38-75f7-457d-b542-674c7bc2e440 " target="_blank" rel="noopener noreferrer") Romero Vásquez, J. E. (2023). Estrategias metodológicas para la comunicación afectiva y efectiva en preescolar. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/274/27411927009.pdf" target="_blank" rel="noopener noreferrer") Cassà, È. L. (2005). La educación emocional en la educación infantil. Revista interuniversitaria de Formación del Profesorado, 19(3), 153-167.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.crece-edu.com/la-clave-del-exito-la-importancia-de-la-comunicacion-en-la-comunidad-educativa/ " target="_blank" rel="noopener noreferrer") La importancia de la comunicación en la comunidad educativa. (s.f.). Consultoría Educativa - CRECE. 




            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=pZQIMuiRiJw " target="_blank" rel="noopener noreferrer") INTEF. (2021, 13 de mayo). EDUcharla 12: Atención y educación en la primera infancia [Video]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
