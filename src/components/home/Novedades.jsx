import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import LibroCardV1 from "../LibroCardV1";
import libros from "../../data/libros";

function Novedades() {
  return (
    <section className="novedades py-2">
      <h2 className="novedades__title text-3xl text-center font-semibold">Nuevas lecturas</h2>
      <h3 className="novedades__subtitle text-2xl text-center font-medium mb-6">Descubrí nuestras novedades</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper px-4"
      >
        {libros.map((item) => (
          <SwiperSlide key={item.id}>
            <LibroCardV1 libro={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Novedades;