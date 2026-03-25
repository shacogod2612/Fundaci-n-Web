 const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay");

    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Cerrar al hacer click en links
    document.querySelectorAll("#nav a").forEach(link => {
        link.addEventListener("click", () => {
            toggle.classList.remove("active");
            nav.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
    // LIGHTBOX
    const imagenes = document.querySelectorAll("#galeria img");
    const lightbox = document.getElementById("lightbox");
    const imgGrande = document.getElementById("img-grande");
    const cerrar = document.getElementById("cerrar");

    // Abrir imagen
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            imgGrande.src = img.src;
        });
    });

    // Cerrar con X
    cerrar.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Cerrar haciendo click afuera
    lightbox.addEventListener("click", (e) => {
        if (e.target !== imgGrande) {
            lightbox.style.display = "none";
        }
    });
const mostrarElementos = () => {
    const elementos = document.querySelectorAll('.revelar');
    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        // Si el elemento ya está a la vista (o casi a la vista), lo activamos
        if (posicion < window.innerHeight - 50) {
            el.classList.add('activo');
        }
    });
};

// 1. Escuchar el scroll (esto ya lo tienes)
window.addEventListener('scroll', mostrarElementos);

// 2. ¡EL TRUCO! Ejecutarlo apenas cargue el sitio
window.addEventListener('DOMContentLoaded', mostrarElementos);