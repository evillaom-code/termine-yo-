//en la pagina principal las imagenes aumentaran de tamaño y te mandaran a la opcion elegida
document.addEventListener("DOMContentLoaded", function() {

    const images = document.querySelectorAll('.ruleta-track img');
    const imaneges2=document.querySelectorAll('.galeria-libros img');
    const descriptions = [
         "One Punch Man - Acción y comedia el  gran pelon.",
        "Dragon Ball - El padre del shonen.",
        "Haikyuu - No te gusta el deporte pues mira Voleibol .",
        "Terror - asustate un poco.",
        "Ficcion- la imaginacion es infinita.",
        "Manga - culturizate un poco .",

    ];

    images.forEach((img, index) => {
       let tooltip;
       
        img.addEventListener("mouseenter", function() {
            img.style.transform = "scale(1.1)";
            img.style.cursor = "pointer";

            tooltip = document.createElement("div");
            tooltip.textContent = descriptions[index];

            tooltip.style.position = "absolute";
            tooltip.style.background = "#111827";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "8px";
            tooltip.style.borderRadius = "6px";

             document.body.appendChild(tooltip);

            const rect = img.getBoundingClientRect();
            tooltip.style.left = rect.left + "px";
            tooltip.style.top = rect.top - 35 + "px";
        });

        img.addEventListener("mouseleave", function() {
            img.style.transform = "scale(1)";
             if (tooltip) tooltip.remove();
        });

        
        img.addEventListener("click", function() {

            if (index === 0) {
                window.location.href ="https://scanonepunchman.com" ;
            }

            if (index === 1) {
                window.location.href = "https://drakonball.com/dragon-ball-super-manga/";
            }

            if (index === 2) {
                window.location.href = "";
            }

            
        });

    });

 const descriptions2 = [
    
        "Terror - asustate un poco.",
        "Ficcion- la imaginacion es infinita.",
        "Manga - culturizate un poco .",
        "Naruto - El clasico de los clasicos.",
        "Bleach - El anime de los shinigamis.",
        "Blue Exorcist - El anime de los exorcistas.",
        "El exorcista  -  Una historia de terror y exorcismo que te mantendrá al borde de tu asiento."
    ];



 imaneges2.forEach((img, index) => {
       let tooltip;
       
        img.addEventListener("mouseenter", function() {
            img.style.transform = "scale(1.1)";
            img.style.cursor = "pointer";

            tooltip = document.createElement("div");
            tooltip.textContent = descriptions2[index];

            tooltip.style.position = "absolute";
            tooltip.style.background = "#111827";
            tooltip.style.color = "#fff";
            tooltip.style.padding = "8px";
            tooltip.style.borderRadius = "6px";

             img.parentElement.appendChild(tooltip);

          img.style.position = "relative";

             tooltip.style.position = "absolute";
             tooltip.style.bottom = "110%";
              tooltip.style.left = "50%";
             tooltip.style.transform = "translateX(-50%)";
            tooltip.style.zIndex = "1000";
        });

        img.addEventListener("mouseleave", function() {
            img.style.transform = "scale(1)";
             if (tooltip) tooltip.remove();
        });

        
        img.addEventListener("click", function() {

            if (index === 0) {
                window.location.href ="https://scanonepunchman.com" ;
            }

            if (index === 1) {
                window.location.href = "https://drakonball.com/dragon-ball-super-manga/";
            }

            if (index === 2) {
                window.location.href = "";
            }

        });

    });

});


//buscador 

const buscador = document.getElementById("buscador");
const sugerencias = document.getElementById("sugerencias");
const btnBuscar = document.getElementById("btnBuscar");
const mensajeError = document.getElementById("mensajeError");

// Aquí defines lo que ya tienes creado
const paginas = [
  { nombre: "Dr stone", url: "manga.html" },
  { nombre: "Full metal alchemist ", url: "manga.html" },
  { nombre: "Bleach", url: "manga.html" },
  { nombre: "it", url: "terror.html" },
   { nombre: "Narnia", url: "ficcion.html" }
];

buscador.addEventListener("input", function() {
  const texto = buscador.value.toLowerCase();
  sugerencias.innerHTML = "";

  if (texto === "") {
    sugerencias.style.display = "none";
    return;
  }

  const resultados = paginas.filter(pagina =>
    pagina.nombre.toLowerCase().includes(texto)
  );

  resultados.forEach(pagina => {
    const div = document.createElement("div");
    div.textContent = pagina.nombre;

    div.addEventListener("click", function() {
      window.location.href = pagina.url;
    });

    sugerencias.appendChild(div);
  });

  sugerencias.style.display = resultados.length ? "block" : "none";
});

btnBuscar.addEventListener("click", function() {
  const texto = buscador.value.toLowerCase();

  const paginaEncontrada = paginas.find(pagina =>
    pagina.nombre.toLowerCase() === texto
  );

  if (paginaEncontrada) {
    window.location.href = paginaEncontrada.url;
  } else {
    mensajeError.textContent = "Solicite el libro en recomendaciones o quejas";
    mensajeError.style.display = "block";

    setTimeout(function() {
      window.location.href = "../SERVICIO/contacto.html";
    }, 2000);
  }
});
