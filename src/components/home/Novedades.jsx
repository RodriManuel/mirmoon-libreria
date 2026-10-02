import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import LibroCardV1 from "../LibroCardV1";
import libros from "../../data/libros";

function Novedades() {
  return (
    <section className="novedades px-3 py-2">
      <h2 className="novedades__title text-3xl text-center font-semibold">Nuevas lecturas</h2>
      <h3 className="novedades__subtitle text-2xl text-center font-medium mb-6">Descubrí nuestras novedades</h3>

      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        slidesPerView={'auto'}
        spaceBetween={20}       
        freeMode={true}         
        navigation
        pagination={{ clickable: true }}
        className="mySwiper px-4 py-4"
      >
        {libros.map((item) => (
          <SwiperSlide key={item.id} className="!w-auto">
            <LibroCardV1 className="w-64" libro={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Novedades;