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
// --- NUEVO SISTEMA DE ANIMACIÓN (Intersection Observer) ---
const observerOptions = {
    root: null, // usa la pantalla como referencia
    threshold: 0.08, // se activa cuando el 15% del elemento es visible
    rootMargin: "0px 0px -50px 0px" // margen inferior para anticipar la entrada
};

const aparecerAlScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('activo');
            // Una vez que aparece, dejamos de observarlo para ahorrar recursos
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Buscamos todos los elementos con la clase revelar y los ponemos a observar
document.addEventListener("DOMContentLoaded", () => {
    const elementosParaAnimar = document.querySelectorAll('.revelar');
    elementosParaAnimar.forEach(el => {
        aparecerAlScroll.observe(el);
    });
});
