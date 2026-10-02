import LibroCardV1 from "../LibroCardV1"
import libros from "../../data/libros"

function Novedades() {
  return (
    <section className="novedades">
        <h2 className="novedades__title text-3xl text-center font-semibold">Nuevas lecturas</h2>
        <h3 className="novedades__subtitle text-2xl text-center font-medium">Descubrí nuestras novedades</h3>
        {/* 
        <div className="swiper">
            <div className="swiper-wrapper">
              {libros.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <LibroCardV1 libro={item} />
                </div>
              ))}
            </div>
        </div>
        */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {libros.map((item) => (
                  <LibroCardV1 libro={item} key={item.id}/>
              ))}
        </section>

    </section>
  )
}

export default Novedades