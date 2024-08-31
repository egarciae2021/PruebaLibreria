// miLibreria.js

// Definir la librería dentro de una IIFE (Immediately Invoked Function Expression)
(function(global) {
    // Crear un objeto para la librería
    const MiLibreria = {};

    // Agregar la función para mostrar el alert
    MiLibreria.saludar = function() {
        alert("Hola Mundoasdsdsds");
    };

    // Exponer la librería en el objeto global (window en un navegador)
    global.MiLibreria = MiLibreria;

})(this);
