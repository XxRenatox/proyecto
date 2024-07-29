import { estructuraHTML} from "./estructuras.js";

const datos = [
    {
        "img": "https://via.placeholder.com/150?text=Imagen+3",
        "titulo": "Título de Ejemplo 1",
        "descripcion": "Descripción de ejemplo para la primera tarjeta. Este texto sirve como un resumen breve de la información presentada."
    },
    {
        "img": "https://via.placeholder.com/150?text=Imagen+3",
        "titulo": "Título de Ejemplo 2",
        "descripcion": "Descripción de ejemplo para la segunda tarjeta. Este texto proporciona más detalles sobre el contenido de la tarjeta."
    },
    {
        "img": "https://via.placeholder.com/150?text=Imagen+3",
        "titulo": "Título de Ejemplo 3",
        "descripcion": "Descripción de ejemplo para la tercera tarjeta. Aquí puedes añadir información adicional o contexto relevante."
    },
    {
        "img": "https://via.placeholder.com/150?text=Imagen+3",
        "titulo": "Título de Ejemplo 4",
        "descripcion": "Descripción de ejemplo para la cuarta tarjeta. Esta descripción puede incluir detalles adicionales sobre el tema presentado."
    },
    {
        "img": "https://via.placeholder.com/150?text=Imagen+5",
        "titulo": "Título de Ejemplo 5",
        "descripcion": "Descripción de ejemplo para la quinta tarjeta. Un texto explicativo que brinda más contexto sobre el contenido de la tarjeta."
    },
    {
        "img": "https://via.placeholder.com/150?text=Imagen+6",
        "titulo": "Título de Ejemplo 6",
        "descripcion": "Descripción de ejemplo para la sexta tarjeta. Proporciona un resumen de la información relevante para esta tarjeta."
    }
]


document.addEventListener("DOMContentLoaded", async () => {

    const seccion1 = document.getElementById("seccion-1");
    datos.forEach((info, index) => {
        seccion1.innerHTML += estructuraHTML(info, index);
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => expandCard(card));
    });

    const sections = document.querySelectorAll('.container-transform')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

function expandCard(card) {
    const expandedCard = document.querySelector('.card.expanded');
    if (expandedCard && expandedCard !== card) {
        expandedCard.classList.remove('expanded');
    }
    card.classList.toggle('expanded');
}