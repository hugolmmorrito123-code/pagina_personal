// Mensaje de bienvenida
window.addEventListener("load", function() {
    console.log("Bienvenido a mi página personal");
});

// Interacción de los enlaces del menú
const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        console.log("Has seleccionado: " + enlace.textContent);

    });

});

// Mostrar el año actual
const footer = document.querySelector("footer");

footer.innerHTML = `
    <p>© ${new Date().getFullYear()} Hugo - Mi página personal</p>
`;
