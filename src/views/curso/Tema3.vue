<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Desafíos y oportunidades'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La comunicación y la colaboración se consolidan como pilares esenciales en la educación infantil del siglo XXI. Ya no se conciben como habilidades aisladas, sino como competencias que atraviesan todos los procesos pedagógicos y que permiten construir vínculos significativos, resolver conflictos, generar aprendizajes colectivos y fortalecer la ciudadanía desde la primera infancia.
    
        .bg-color-2.p-4(data-aos="fade-left").mb-5
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/1-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde la mediación del lenguaje en el aula hasta la promoción del diálogo respetuoso y la interacción social, se ha resaltado el papel activo del docente como facilitador de encuentros, intérprete de emociones y promotor de espacios donde cada niño y niña pueda expresar su voz y construir saberes junto a otros.
        p Asimismo, la comunicación multimodal ha ampliado los horizontes de expresión y comprensión, especialmente en contextos mediados por tecnologías, lo que exige una mirada pedagógica flexible, crítica y creativa.
      
    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.px-5
            .col-lg-8(data-aos="fade-left").p-5
              h5 Este recorrido invita ahora a mirar hacia el futuro.
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿Qué desafíos enfrenta hoy la educación en un mundo que cambia vertiginosamente?
                li.mb-3.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 ¿Qué oportunidades pueden aprovecharse para transformar la práctica docente, fortalecer la innovación y responder con responsabilidad a las necesidades sociales, culturales y tecnológicas actuales?
              p A continuación, se explorarán los principales desafíos y oportunidades que enfrentan los educadores y las educadoras en el siglo XXI, especialmente en la formación de la infancia. 
            .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") ¿Que implica educar en un mundo que cambia a una velocidad sin precedentes? La educación del siglo XXI se encuentra en un momento decisivo, marcado por transformaciones sociales, tecnológicas, culturales y ambientales que invitan, y exigen, una profunda reflexión sobre el rol docente y las nuevas formas de enseñar y aprender.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Este tema propone abrir la mirada hacia los principales desafíos que enfrenta la educación actual, sin perder de vista las oportunidades que emergen cuando se actúa con creatividad, compromiso y visión crítica. Se abordarán temas como el impacto de la tecnología, la atención a la diversidad, la sostenibilidad, la inclusión, la equidad y la formación de competencias para un mundo global e incierto.
    
    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
      .col-lg
        p Se invita a recorrer este contenido con actitud abierta, reconociendo que cada reto trae consigo una posibilidad de crecimiento. Reflexionar sobre los cambios que atraviesan la educación es también asumir la responsabilidad de construir entornos pedagógicos más humanos, adaptativos e inspiradores para las nuevas generaciones.
        p.mb-0 ¡Adelante, el camino comienza aquí!
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Nuevas demandas sociales y su impacto en la educación infantil
    
    p.mb-5 Las transformaciones sociales del siglo XXI han generado nuevos retos que impactan directamente en la forma de concebir y desarrollar la educación desde los primeros años.
    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Nuevas demandas sociales y su impacto en la educación infantil
            p.mb-4(data-aos="fade-right") En el PDF <b>Nuevas demandas sociales y su impacto en la educación infantil</b>, se analiza cómo fenómenos como la globalización, la diversidad cultural, la crisis ambiental y los cambios en las dinámicas familiares influyen en la escuela y en la práctica pedagógica. Este contenido invita a los futuros docentes a reflexionar críticamente sobre su rol y a diseñar experiencias educativas inclusivas, contextualizadas y comprometidas con la realidad de las infancias.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Nuevas demandas sociales y su impacto en la educación infantil
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Diversidad e inclusión: un compromiso educativo del siglo XXI
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.p-4(data-aos="fade-left")
          p.mb-0 ¿Cómo se garantiza que todos los niños y las niñas aprendan, crezcan y participen plenamente en un mundo tan diverso? 
        .bg-color-6.p-4(data-aos="fade-left")
          p.mb-0 Esta pregunta orienta uno de los mayores retos de la educación actual: formar ciudadanos desde la infancia, reconociendo que cada estudiante es único, con sus propios ritmos, intereses, historias y formas de aprender. En este siglo, hablar de diversidad no es una excepción ni un añadido: es la esencia de la vida escolar.
    
    p.mb-5 La diversidad está presente en todos los espacios educativos: 

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1
              p Se manifiesta en las capacidades, culturas, lenguas, condiciones socioeconómicas, formas de comunicación, creencias, expresiones de género y experiencias familiares de los niños y las niñas. Este mosaico de realidades no debe generar barreras, sino abrir caminos para una educación más rica, justa y significativa. Por eso, la inclusión no se limita a integrar estudiantes en el aula, sino que exige transformar las prácticas pedagógicas, las actitudes docentes y las estructuras escolares para asegurar que todos participen y aprendan con equidad.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1
              p En este contexto, la educación inclusiva se convierte en un compromiso ético y político que reconoce a cada niño o niña como sujeto de derechos. No basta con permitir la asistencia a clase; se requiere crear condiciones reales de acceso, participación y logro para todos. Esto implica adaptar metodologías, flexibilizar el currículo, utilizar diversos lenguajes, ofrecer apoyos pertinentes y, sobre todo, construir relaciones pedagógicas basadas en el respeto, la empatía y el diálogo (Marchesi y Hernández, 2019).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.order-1
              p Desde la educación infantil, se sientan las bases de una sociedad incluyente. Es aquí donde los más pequeños aprenden a convivir con otros diferentes a ellos, a ponerse en el lugar del otro, a resolver conflictos pacíficamente y a valorar la riqueza de la diversidad. Para ello, el papel del docente es fundamental: no solo guía los aprendizajes, sino que actúa como mediador de relaciones, facilitador de procesos y garante del derecho a ser y a aprender.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-1
              p El compromiso con la inclusión requiere también reflexionar sobre los propios prejuicios, estereotipos o prácticas normalizadoras que puedan limitar el desarrollo integral de algunos estudiantes. Se necesita una disposición constante al aprendizaje y a la transformación personal para crear aulas donde todos se sientan valorados, reconocidos y seguros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-1
              p Promover la diversidad e inclusión en el aula significa también diseñar propuestas pedagógicas flexibles: juegos cooperativos, materiales accesibles, agrupamientos heterogéneos, rutinas que respeten los tiempos individuales y actividades que celebren las diferencias. Además, se debe involucrar activamente a las familias, como aliadas claves en la construcción de entornos de aprendizaje inclusivos.
          
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Finalmente, educar en la diversidad es sembrar semillas de justicia social. Es formar desde la infancia a seres humanos más conscientes, respetuosos, solidarios y comprometidos con una sociedad más equitativa. Una escuela que incluye es una escuela que transforma.

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿De qué manera se transforma la práctica pedagógica cuando se reconoce y valora la diversidad en el aula?
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-4.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué tan preparada está la educación infantil para ofrecer experiencias auténticamente inclusivas, más allá de los discursos o intenciones?

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Formación docente continua frente a los cambios educativos
    
    p.mb-5 La formación docente continua es un componente esencial para garantizar una educación de calidad que responda a las demandas de una sociedad en permanente transformación.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Formación docente continua frente a los cambios educativos
            p.mb-4(data-aos="fade-right") En el PDF <b>Formación docente continua frente a los cambios educativos</b>, se presentan reflexiones y propuestas sobre la importancia de actualizar y enriquecer constantemente la práctica pedagógica en el nivel infantil. A través del análisis de nuevas competencias, enfoques situados y estrategias de aprendizaje profesional colaborativo, se invita a repensar el rol del educador como un sujeto que aprende, se transforma y transforma su entorno educativo en función del bienestar y desarrollo integral de la infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Formación docente continua frente a los cambios educativos
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')


    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Educación para la ciudadanía global y el desarrollo sostenible
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 ¿Cómo educar para un mundo que cambia a gran velocidad, pero que sigue necesitando justicia, respeto y cuidado por la vida? 
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta pregunta invita a comprender que la educación del siglo XXI va mucho más allá de la transmisión de conocimientos. Se trata de formar seres humanos conscientes, empáticos y comprometidos con su comunidad local y global. Por ello, desde la infancia, se plantea el desafío de educar para la ciudadanía global y el desarrollo sostenible, una propuesta que integra valores, habilidades y actitudes necesarias para convivir y transformar positivamente la sociedad.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Ciudadanía global")
            p La ciudadanía global no se reduce a conocer otros países o culturas (Rodríguez y García Bayón, 2024). Es una forma de estar en el mundo que promueve el respeto por la diversidad, la responsabilidad compartida y el pensamiento crítico frente a los problemas comunes que afectan a la humanidad. Esto incluye desde la igualdad de género y la defensa de los derechos humanos, hasta el cuidado del medio ambiente y la promoción de la paz. Formar ciudadanos globales significa ayudar a los niños y las niñas a desarrollar una conciencia planetaria desde los primeros años de vida (Lozano y Fernández, 2021).
    
          .div(titulo="Desarrollo sostenible")
            p El desarrollo sostenible, se refiere a la necesidad de satisfacer las necesidades actuales sin comprometer la capacidad de las generaciones futuras para satisfacer las suyas. Esto implica enseñar a valorar y cuidar los recursos naturales, consumir responsablemente, respetar todas las formas de vida y comprender que todo está interconectado.

    .bg-full-width.bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-12
          .row.justify-content-center.align-items-center.px-5
            .col-lg-8(data-aos="fade-left").p-5
              p En la educación infantil, estas ideas se traducen en experiencias cercanas, lúdicas y significativas Por ejemplo, reciclar materiales, cuidar una huerta escolar, conocer las culturas de otros pueblos, participar en proyectos comunitarios o reflexionar sobre lo que se necesita para vivir en armonía. Cada una de estas acciones se convierte en una oportunidad para cultivar valores como la solidaridad, la cooperación, la justicia y el amor por la vida. 
            .col-lg-4(data-aos="zoom-in").mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema3/19.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 El docente desempeña un papel esencial como mediador y guía. Su responsabilidad es generar ambientes educativos donde se vivencien estos principios, no solo a través de los contenidos, sino también en las relaciones cotidianas. Educar para la ciudadanía global no significa enseñar desde el miedo o la culpa, sino desde la esperanza activa: se invita a los niños y las niñas a imaginar soluciones, a compartir sus ideas, a cuidar de otros y del entorno, y a reconocer que sus acciones, por pequeñas que sean, tienen valor.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, los Objetivos de Desarrollo Sostenible (ODS) propuestos por Naciones Unidas ofrecen una hoja de ruta concreta para integrar estos enfoques en las prácticas pedagógicas. Temas como el acceso al agua limpia, la salud, la educación de calidad, la igualdad, la protección de la biodiversidad o el trabajo digno, pueden ser abordados con sentido pedagógico en proyectos adaptados a la infancia.

    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
      .col-lg
        h2(data-aos="fade-left") Reflexionemos:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué valores se están cultivando en el aula día a día?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo ayudar a los niños y las niñas a cuidar su entorno y convivir con respeto desde edades tempranas?
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-2(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Qué prácticas pedagógicas podrían integrarse para que la infancia participe activamente en la transformación del mundo?

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/57192 " target="_blank" rel="noopener noreferrer") Rodríguez Pulido, J. Rodríguez Pulido, J. (Coord.) & Aguiar Perera, V. (2015). La educación del siglo XXI: ( ed.). Universidad de Las Palmas de Gran Canaria. Servicio de Publicaciones y Difusión Científica. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/74182" target="_blank" rel="noopener noreferrer") Matute, E. & Romo Beltrán, R. M. (Coord.). (2015). Los retos en la educación del siglo XXI: ( ed.). Universidad de Guadalajara.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=8820401  " target="_blank" rel="noopener noreferrer") Salgado, B. M. C. (2007). Educación ambiental y educación para el desarrollo sostenible en América Latina. Revista de la Cátedra Unesco sobre desarrollo sostenible, 1(1), 29-37. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.sydle.com/es/blog/nuevas-tecnologias-en-la-educacion-63ef92977f03ed13ae2d1909 " target="_blank" rel="noopener noreferrer") SYDLE. (2023, 17 de febrero). Nuevas tecnologías en la educación: influencia, ventajas y desafíos. Blog SYDLE. 



            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3pDJB8xISOA " target="_blank" rel="noopener noreferrer") CAF - Banco de Desarrollo de Latam y el Caribe-. (2021, 16 de noviembre). Los desafíos de la primera infancia en la pospandemia | #Educación [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HtARiQSJLL0" target="_blank" rel="noopener noreferrer") Catedra Kreanta. (2018, 14 de mayo). FORMACIÓN DOCENTE FRENTE A LOS DESAFÍOS DE LA EDUCACIÓN EN COLOMBIA. Conferencia de Isabel Carrillo [Video]. YouTube.  

 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
