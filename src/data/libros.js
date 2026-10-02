import portadaEsfera from "../assets/portada_esfera_luminosa.webp"
import portadaTresCuerpos from "../assets/portada_tres_cuerpos.webp"
import portadaBosqueOscuro from "../assets/portada_bosque_oscuro.webp"
import portadaFinDeLaMuerte from "../assets/portada_fin_de_la_muerte.webp"
import portadaHormigasDinosaurios from "../assets/portada_sobre_hormigas_y_dinosaurios.webp"
import portadaPajaroQueDaCuerda from "../assets/portada_cronica_del_pajaro_que_da_cuerda_al_mundo.webp"
import portadaTokioBlues from "../assets/portada_tokio_blues.webp"
import portadaElIdiota from "../assets/portada_el_idiota.jpg"
import portadaCrimenCastigo from "../assets/portada_crimen_y_castigo.webp"
import portadaSubsuelo from "../assets/portada_memorias_del_subsuelo.webp"
import portadaPobreGente from "../assets/portada_pobre_gente.webp"
import portadaNochesBlancas from "../assets/portada_noches_blancas.webp"
import portadaLittorio from "../assets/portada_el_culto_del_littorio.webp"
import portadaQuienEsFascista from "../assets/portada_quien_es_fascista.jpg"

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
        precio: 47500.0,
        stock: 10,
    },
    {
        id: 3,
        titulo: "El bosque oscuro",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaBosqueOscuro,
        precio: 44600.0,
        stock: 21,
    },
    {
        id: 4,
        titulo: "El fin de la muerte",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaFinDeLaMuerte,
        precio: 42500.0,
        stock: 16,
    },
    {
        id: 5,
        titulo: "Sobre hormgigas y dinosaurios",
        categoria: "Ciencia Ficcón",
        autor: "Liu Cixin",
        imagen: portadaHormigasDinosaurios,
        precio: 34740.0,
        stock: 22,
    },
    {
        id: 6,
        titulo: "Crónica del pájaro que da cuerda al mundo",
        categoria: "Novela Psicológica",
        autor: "Haruki Murakami",
        imagen: portadaPajaroQueDaCuerda,
        precio: 47900.0,
        stock: 11,
    },
    {
        id: 7,
        titulo: "Tokyo Blues",
        categoria: "Romance",
        autor: "Haruki Murakami",
        imagen: portadaTokioBlues,
        precio: 27900.0,
        stock: 0,
    },
    {
        id: 8,
        titulo: "El idiota",
        categoria: "Novela Psicológica",
        autor: "Fiódor Dostoyevski",
        imagen: portadaElIdiota,
        precio: 34830.0,
        stock: 22,
    },
    {
        id: 9,
        titulo: "Crimen y castigo",
        categoria: "Novela Psicológica",
        autor: "Fiódor Dostoyevski",
        imagen: portadaCrimenCastigo,
        precio: 53990.0,
        stock: 12,
    },
    {
        id: 10,
        titulo: "Memorias del subsuelo",
        categoria: "Novela Psicológica",
        autor: "Fiódor Dostoyevski",
        imagen: portadaSubsuelo,
        precio: 24500.0,
        stock: 17,
    },
    {
        id: 11,
        titulo: "Pobre gente",
        categoria: "Epistolar",
        autor: "Fiódor Dostoyevski",
        imagen: portadaPobreGente,
        precio: 48175.0,
        stock: 5,
    },
    {
        id: 12,
        titulo: "Noches blancas",
        categoria: "Romance",
        autor: "Fiódor Dostoyevski",
        imagen: portadaNochesBlancas,
        precio: 42044.0,
        stock: 0,
    },
    {
        id: 13,
        titulo: "El culto del Littorio",
        categoria: "Ensayo",
        autor: "Emilio Gentile",
        imagen: portadaLittorio,
        precio: 43811.0,
        stock: 6,
    },
    {
        id: 14,
        titulo: "¿Quién es Fascista?",
        categoria: "Ensayo",
        autor: "Emilio Gentile",
        imagen: portadaQuienEsFascista,
        precio: 28900.0,
        stock: 9,
    },
];

export default libros;