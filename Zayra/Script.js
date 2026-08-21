// Base de datos de los destinos turísticos (Planetas)
const datosPlanetas = {
    "Mercurio": {
        gravedad: "3.7 m/s² (38% de la Tierra)",
        temperatura: "-173°C a 427°C",
        guia: "Lleva un traje con aislamiento térmico extremo. ¡No te pierdas las impresionantes vistas del Sol gigante en el horizonte!"
    },
    "Venus": {
        gravedad: "8.87 m/s² (90% de la Tierra)",
        temperatura: "462°C (Promedio)",
        guia: "Se requiere un traje resistente a la alta presión y lluvia de ácido sulfúrico. Visita los inmensos volcanes escudo."
    },
    "Tierra": {
        gravedad: "9.8 m/s²",
        temperatura: "15°C (Promedio)",
        guia: "Disfruta del clima templado y la abundante agua líquida. ¡El único destino con oxígeno respirable garantizado!"
    },
    "Marte": {
        gravedad: "3.71 m/s² (38% de la Tierra)",
        temperatura: "-153°C a 20°C",
        guia: "Traje presurizado obligatorio. Imprescindible visitar el Monte Olimpo (el volcán más grande) y los Valles Marineris."
    },
    "Júpiter": {
        gravedad: "24.79 m/s² (253% de la Tierra)",
        temperatura: "-110°C (En las nubes superiores)",
        guia: "Turismo orbital únicamente (gigante gaseoso). No olvides observar la Gran Mancha Roja desde la comodidad de tu nave."
    },
    "Saturno": {
        gravedad: "10.44 m/s² (106% de la Tierra)",
        temperatura: "-140°C",
        guia: "El mejor destino para fotografía espacial. Un tour panorámico por sus icónicos anillos de hielo es obligatorio."
    },
    "Urano": {
        gravedad: "8.69 m/s² (89% de la Tierra)",
        temperatura: "-195°C",
        guia: "Traje criogénico necesario. Disfruta de las auroras inusuales de este gigante de hielo que orbita de lado."
    },
    "Neptuno": {
        gravedad: "11.15 m/s² (114% de la Tierra)",
        temperatura: "-200°C",
        guia: "Prepárate para los vientos más fuertes del sistema solar (hasta 2,100 km/h). Observa su intenso color azul profundo, acentuado por nubes de metano."
    }
};

// Selección de elementos del DOM
const elementosPlanetas = document.querySelectorAll('.planeta');
const seccionDetalle = document.getElementById('detalle-planeta');
const tituloPlaneta = document.getElementById('nombre-planeta');
const spanGravedad = document.getElementById('gravedad');
const spanTemperatura = document.getElementById('temperatura');
const spanGuia = document.getElementById('guia');

// Lógica de interactividad para cada elemento
elementosPlanetas.forEach(elemento => {
    elemento.addEventListener('click', () => {
        // Extraer el identificador del planeta del atributo de datos HTML
        const nombre = elemento.getAttribute('data-planeta');
        const info = datosPlanetas[nombre];

        // Actualizar el DOM con la información científica
        tituloPlaneta.textContent = `Destino: ${nombre}`;
        spanGravedad.textContent = info.gravedad;
        spanTemperatura.textContent = info.temperatura;
        spanGuia.textContent = info.guia;

        // Mostrar el panel de información removiendo la clase 'oculto'
        seccionDetalle.classList.remove('oculto');
        
        // Pequeño efecto de transición de opacidad
        seccionDetalle.style.opacity = 0;
        setTimeout(() => {
            seccionDetalle.style.transition = 'opacity 0.4s ease-in';
            seccionDetalle.style.opacity = 1;
        }, 50);
    });
});