document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll(".animar");

    function mostrarElementos() {
        const alturaVentana = window.innerHeight;

        elementos.forEach(elemento => {
            const posicion = elemento.getBoundingClientRect().top;

            if (posicion < alturaVentana - 100) {
                elemento.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos();
});
// EFECTO HEADER SCROLL
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
