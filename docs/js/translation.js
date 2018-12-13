
$(document).ready(function () {

    var language = navigator.language || navigator.browserLanguage;
    language = language.substr(0, 2).toLowerCase();

    if (language == 'es') {

        var es = [{
            "background_link": "img/ep_background.jpg",
            "obra_link": "obras/pla/",
            "img_link": "img/eduardo_pla.jpg",
            "obras_name": "JARDINES FRACTALES",
            "artist_name": "EDUARDO PLA X TAXI",
            "artist_name_link": "espaciopla.com",
            "artist_bio": "Buenos Aires (1952-2012). Estudió diseño gráfico, publicidad, arquitectura, comunicación audiovisual y urbanismo. Su obra se caracteriza por ser digital, desde video graphics, imágenes digitales, modelación y animación 3D; siendo un adelantado en la utilización de estas tecnologías y en la consideración óptica-filosófica de otras realidades."
        },
        {
            "background_link": "img/bilatz.jpg",
            "obra_link": "obras/bilatz/",
            "img_link": "img/bilatz.gif",
            "obras_name": "PERDIDOS",
            "artist_name": "JAVIER BILATZ",
            "artist_name_link": "javierbilatz.com.ar",
            "artist_bio": "Buenos Aires, Argentina (1968). Estudió Arquitectura en la UBA; en los programas-becas del Espacio Fundación Telefónica fue seleccionado en la Sala Nacional de Artes visuales, categoría Nuevos formatos e instalaciones; en el 404 Festival - Astas Romas y en el Programa ART+TRUST, año 2006. Participó de muestras colectivas y ferias internacionales con obras tecnológicas y nuevos medios."
        },
        {
            "background_link": "img/tedesco.jpg",
            "obra_link": "obras/tedesco/",
            "img_link": "img/tedesco.gif",
            "obras_name": "LUNA",
            "artist_name": "SEBASTIAN TEDESCO",
            "artist_name_link": "sebastiantedesco.com.ar",
            "artist_bio": "Buenos Aires (1968). Artista visual y diseñador industrial. Interesado en la relación entre las antiguas y las nuevas tecnologías y lo que se desprende de este cruce. Desde el año 2011 asiste al taller y clínica de obra de Diana Aisenberg y es profesor del postgrado en Diseño Conceptual de la UNTREF y coordinador de Imagen y Comunicación del MUNTREF Arte y Ciencia."
        },
        {
            "background_link": "img/bellman.jpg",
            "obra_link": "obras/bellman/",
            "img_link": "img/bellman.gif",
            "obras_name": "RELOJ",
            "artist_name": "MAXIMILIANO BELLMANN",
            "artist_name_link": "cargocollective.com/search/maxi-bellmann",
            "artist_bio": "Entre Ríos, Argentina (1976). Estudió Bellas Artes, participó de la Beca Kuitca 2003-2005 y del taller de Diana Aisenberg. Forma parte del grupo Oligatega y su producción ronda temas como la relación forma-vacío, ecuaciones fractales, la dispersión de rayos eléctricos en diferentes materiales y paisajes de ciencia ficción, a través del video y la música principalmente."
        },
        {
            "background_link": "img/fernandez.jpg",
            "obra_link": "http://fernandezmanuel.com.ar/a/",
            "img_link": "img/fernandez.gif",
            "obras_name": "RECONSTRUCCION DEL FUTURO",
            "artist_name": "MANUEL ANTONIO FERNANDEZ",
            "artist_name_link": "fernandezmanuel.com.ar",
            "artist_bio": "Buenos Aires, Argentina (1976). Estudió fotografía en el SICA, realizó clínica de obra con Diana Aisenberg y realizó talleres de collage a cargo de Hernán Paganini y Rosana Schoijett. Ganó varios premios y realizó exposiciones individuales y colectivas en el Palais De Glace, Centro Cultural Borges y la Fundación Lebensohn."
        },
        {
            "background_link": "img/giraud.jpg",
            "obra_link": "obras/giraud/",
            "img_link": "img/giraud.gif",
            "obras_name": "LEVAR",
            "artist_name": "MARIANO GIRAUD",
            "artist_name_link": "flickr.com/photos/mariano_giraud",
            "artist_bio": "Buenos aires, Argentina (1977). Estudió en la Escuela Nacional de Bellas Artes P. Pueyrredón, se especializó en pintura. Desde el 2001 asistió al taller y las clínicas de obra a cargo de Diana Aisenberg. Forma parte del colectivo Oligatega desde 1999, y participó de los talleres para Artes Visuales del Centro Cultural Rojas de la UBA (Beca Kuitca) del 2003 al 2005."
        },
        {
            "background_link": "img/corallo.jpg",
            "obra_link": "obras/corallo/",
            "img_link": "img/corallo.gif",
            "obras_name": "VERSUS/TIEMPO GRAFICO",
            "artist_name": "GUIDO CORALLO",
            "artist_name_link": "gcrll.tumblr.com",
            "artist_bio": "Buenos Aires, Argentina (1978). Desarrolló tareas de investigación en los Laboratorios de Dispositivos Moleculares y de Neurociencia Integrativa mientras que estudiaba biología en la UBA y participó del taller de producción del MediaLab del Centro Cultural de España. Se dedica a proyectos de programación de imágenes y animaciones, aplicaciones gráficas y algo de interactivos."
        },
        {
            "background_link": "img/rud.jpg",
            "obra_link": "http://gabrielrud.com/a.html",
            "img_link": "img/rud.gif",
            "obras_name": "PIEZA",
            "artist_name": "GABRIEL RUD",
            "artist_name_link": "gabrielrud.com",
            "artist_bio": "Buenos Aires (1979). Especialista en Lógica y Técnica de la Forma y Diseñador de Imagen y Sonido de la UBA. Investigador en proyectoidis.org. Ganador del 1º premio del Salón Nacional, categoría nuevos soportes e instalaciones."
        },
        {
            "background_link": "img/amaral.jpg",
            "obra_link": "obras/amaral/",
            "img_link": "img/amaral.gif",
            "obras_name": "SINTETIZAR EL PANTANO",
            "artist_name": "MATEO AMARAL",
            "artist_name_link": "unapiedranegra.com",
            "artist_bio": "Buenos Aires, Argentina (1979). Estudió ilustración y animación y formó parte de la clínica de Diana Aisenberg y de la beca Kuitca. Forma parte del grupo Oligatega, una banda de punk \"Hipnoflautas\" y el dúo de video y música sintética abstracta \"Fosforo Líquido\". Trabaja con animación, música, video e instalaciones. Hace más de 12 años trabaja en un proyecto que se llama \"Una piedra negra\"."
        },
        {
            "background_link": "img/plano.jpg",
            "obra_link": "http://hipernarrativas.surwww.com/",
            "img_link": "img/plano.gif",
            "obras_name": "HIPERNARRATIVAS",
            "artist_name": "JAVIER PLANO",
            "artist_name_link": "jjplano.com.ar",
            "artist_bio": "Buenos Aires (1979). Es docente, productor, artista y curador independiente. Técnico en Realización Audiovisual, se encuentra finalizando la Licenciatura en Artes Electrónicas de la UNTREF. Docente en UNTREF y UNM. Ha recibido distinciones en el Premio MAMbA/Fundación Telefónica, el Salón Nacional de Artes Visuales, y el Concurso de Artes Electrónicas de la UNTREF, entre otros."
        },
        {
            "background_link": "img/odriozola.jpg",
            "obra_link": "http://listado.mercadolibre.com.ar/arte/_DisplayType_LF_CustId_99877106",
            "img_link": "img/odriozola.gif",
            "obras_name": "SUBASTA",
            "artist_name": "JUANE ODRIOZOLA",
            "artist_name_link": "boladenieve.org.ar/artista/22247/odriozola-juane",
            "artist_bio": "Buenos Aires (1980). Estudió Diseño de Imagen y Sonido en la UBA. Hizo clínica con Leopoldo Estol, Fabián Burgos y Ernesto Ballesteros y taller de color con Karina Peisajovich. Realizó muestras individuales en La Ene y Once Libre y varias colectivas en Mite, Benzacar, ArteBA, entre otros."
        },
        {
            "background_link": "img/rawski.jpg",
            "obra_link": "http://ojomicielo.tomasrawski.com.ar/",
            "img_link": "img/rawski.gif",
            "obras_name": "OJO, MI CIELO",
            "artist_name": "TOMAS RAWSKI",
            "artist_name_link": "tomasrawski.com.ar",
            "artist_bio": "Buenos Aires, Argentina. (1980). Ing. en Sistemas en la UAI. Rawski investiga las relaciones entre el mundo digital y él real, combinando la tecnología, programación y las artes visuales. Actualmente es docente de Lenguaje de Programación para Artistas en UNA, creador del directorio para artistas Té de Artistas y es co-fundador de Nemeos, una red social para deportistas."
        },
        {
            "background_link": "img/viadana.jpg",
            "obra_link": "obras/viadana/",
            "img_link": "img/viadana.gif",
            "obras_name": "THE OTHERNESS",
            "artist_name": "FLORENCIA VIADANA",
            "artist_name_link": "leninax.tv",
            "artist_bio": "Buenos Aires (1986). Su nombre artístico es LENINA, trabaja en el campo audiovisual utilizando la tecnología (digital y analógica) y la programación como herramienta de investigación y producción. Su obra principalmente se enfoca en el glitch-art, combinando práctica y experimentación con un background académico en artes visuales y diseño gráfico."
        },
        {
            "background_link": "img/guerra.jpg",
            "obra_link": "http://tardecircular.surwww.com/",
            "img_link": "img/guerra.gif",
            "obras_name": "TARDE CIRCULAR",
            "artist_name": "IGNACIO GUERRA",
            "artist_name_link": "igguerra.com.ar",
            "artist_bio": "Buenos Aires, Argentina (1988). Es artista y programador, profesor e investigador en formación de la Universidad Nacional de Tres de Febrero (UNTREF). Trabaja en distintos soportes pero la mayor parte de su producción se centra en la Web."
        },
        {
            "background_link": "img/monte.jpg",
            "obra_link": "obras/monte/",
            "img_link": "img/monte.gif",
            "obras_name": "MDLI PICK YOUR FANTASY",
            "artist_name": "AZUL DE MONTE",
            "artist_name_link": "azuldemonte.tumblr.com",
            "artist_bio": "Córdoba, Argentina (1988). Estudio Imagen y Sonido en la UBA. Es artista visual y utiliza programas como el Autodesk Maya, After Effects, entre otros. Participo en Premio Proyecto A y realizo residencias en Australia y Nueva York. Su obra relaciona la animación 3D con otros medios como la pintura y la escultura."
        }
        ];

        var obras_name = document.querySelectorAll(".obras_name");
        var artist_name = document.querySelectorAll(".artist_name");
        var artist_bio = document.querySelectorAll(".artist_bio");
        var contacts = document.querySelectorAll(".contact");
        var concepts = document.querySelectorAll(".concept");
        var artists = document.querySelector(".artists");

        if (obras_name.length > 0) {
            obras_name.forEach((el, index) => el.innerText = es[!((index + 2) % 2) ? (index + 2) / 2 - 1 : (index + 1) / 2 - 1]["obras_name"]);
        }

        if (artist_name.length > 0) {
            artist_name.forEach((el, index) => el.innerText = es[!((index + 2) % 2) ? (index + 2) / 2 - 1 : (index + 1) / 2 - 1]["artist_name"]);
        }

        if (artist_bio.length > 0) {
            artist_bio.forEach((el, index) => el.innerText = es[index]["artist_bio"]);
        }

        if (contacts.length > 0) {
            contacts.forEach(el => el.innerText = "contacto");
        }

        if (concepts.length > 0) {
            concepts.forEach(el => el.innerText = "concepto");
        }

        if (artists.length > 0) {
            artists.forEach(el => el.innerText = "artistas");
        }



    }
})







