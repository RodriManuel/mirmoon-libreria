import Carousel from "../Carousel"
import LibroCardV1 from "../LibroCardV1";
import libros from "../../data/libros";

function Novedades() {
  return (
    <section className="novedades px-2 py-3">
      <h2 className="novedades__title text-3xl text-center font-bold">Nuevas lecturas</h2>
      <h3 className="novedades__subtitle text-2xl text-center font-semibold mb-2">Descubrí nuestras novedades</h3>
 
      <Carousel items={libros} renderItem={(libro) => <LibroCardV1 libro={libro} />} />
    </section>
  );
}

export default Novedades;