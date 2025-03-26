// Ocultar el loader después de 2 segundos
window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible"; // Mostrar contenido después del loader
    }, 2000); // 2 segundos de loader
});

// Mostrar/ocultar el menú en móviles
document.getElementById("mobile-menu").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll("#nav-links a").forEach(item => {
    item.addEventListener("click", function () {
        document.getElementById("nav-links").classList.remove("show");
    });
});


// Efectos de agrandar/reducir los botones
let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let noSize = 1;   // Tamaño inicial del botón "No"
let yesSize = 1;  // Tamaño inicial del botón "Sí"

if (yesBtn && noBtn) {
    noBtn.addEventListener("click", function() {
        // Hacer el botón "No" más pequeño
        noSize *= 0.8;
        // Hacer el botón "Sí" más grande
        yesSize *= 1.2;

        // Aplicar la transformación al botón "No" (reducir tamaño)
        noBtn.style.transform = `scale(${noSize})`;
        // Aplicar la transformación al botón "Sí" (aumentar tamaño)
        yesBtn.style.transform = `scale(${yesSize})`;
    });
} else {
    console.error("Los botones no se encontraron");
}

// Comprobar si localStorage está disponible
if (typeof(Storage) !== "undefined") {
    // Código que usa localStorage
} else {
    alert("Tu navegador no soporta localStorage. El contador no podrá funcionar correctamente.");
}

// Función para actualizar el contador en tiempo real
function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    let startDate = localStorage.getItem("startDate");

    // Si no se encuentra la fecha en localStorage, muestra la ventana emergente
    if (!startDate) {
        setTimeout(function() {
            alert("¡Bienvenidos a nuestra página!");
        }, 1000);
    } else {
        const currentDate = new Date().getTime();
        const timeDiff = currentDate - startDate;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        // Actualizamos el contador en tiempo real
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours % 24;
        document.getElementById("minutes").textContent = minutes % 60;
        document.getElementById("seconds").textContent = seconds % 60;
    }
}

// Llamar a la función de actualización cada segundo (1000ms)
setInterval(updateCountdown, 1000);

// Evento para el botón "Sí" en la página de pregunta
document.getElementById("yes").addEventListener("click", function() {
    const currentDate = new Date().getTime();
    localStorage.setItem("startDate", currentDate);
    window.location.href = "index.html";
});

// Mostrar el texto correspondiente al hacer clic en la tarjeta
function showText(id) {
    // Ocultar todos los textos
    const textos = document.querySelectorAll('.reason-text');
    textos.forEach(texto => {
        texto.style.display = 'none';
    });

    // Mostrar el texto correspondiente
    const texto = document.getElementById(id);
    texto.style.display = 'block';

    // Mostrar el área de texto
    document.querySelector('.text-container').style.display = 'block';
}
