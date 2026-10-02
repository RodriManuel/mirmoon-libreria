import portadaEsfera from "../assets/portada_esfera_luminosa.webp"
import portadaTresCuerpos from "../assets/portada_tres_cuerpos.webp"
import portadaBosqueOscuro from "../assets/portada_bosque_oscuro.webp"
import portadaFinDeLaMuerte from "../assets/portada_fin_de_la_muerte.webp"

const libros = [
    {
        id: 1,
        titulo: "La esfera luminosa",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaEsfera,
        precio: 50550.0,
        stock: 0,
    },
    {
        id: 2,
        titulo: "El problema de los tres cuerpos",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaTresCuerpos,
        precio: 42845.0,
        stock: 10,
    },
    {
        id: 3,
        titulo: "El bosque oscuro",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaBosqueOscuro,
        precio: 29470.0,
        stock: 22,
    },
    {
        id: 4,
        titulo: "El fin de la muerte",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaFinDeLaMuerte,
        precio: 42500.0,
        stock: 11,
    },
];

export default libros;