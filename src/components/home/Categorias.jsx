import Carousel from "../Carousel"
import LibroCardV1 from "../LibroCardV1";
import libros from "../../data/libros";

function Categorias() {
    const librosCienciaFiccion = libros.filter(libro => libro.categoria === "Ciencia Ficción");
    const librosNovelaPsicologica = libros.filter(libro => libro.categoria === "Novela Psicológica");
    const librosEnsayo = libros.filter(libro => libro.categoria === "Ensayo");

  return (
    <section className="novedades px-2 py-3 mt-4">
      <h2 className="novedades__title text-3xl text-center font-bold">Categorias</h2>

      <h3 className="novedades__subtitle text-2xl text-left font-semibold mb-1">Ciencia Ficción</h3>
      <Carousel items={librosCienciaFiccion} renderItem={(libro) => <LibroCardV1 libro={libro} />} />

      <h3 className="novedades__subtitle text-2xl text-left font-semibold mt-12 mb-1">Novela psicológica</h3>
      <Carousel items={librosNovelaPsicologica} renderItem={(libro) => <LibroCardV1 libro={libro} />} />

      <h3 className="novedades__subtitle text-2xl text-left font-semibold mt-12 mb-1">Ensayo</h3>
      <Carousel items={librosEnsayo} renderItem={(libro) => <LibroCardV1 libro={libro} />} />
    </section>
  )
}

export default Categorias