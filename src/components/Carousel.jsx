import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

function Carousel({ items, renderItem }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, FreeMode]}
      slidesPerView={'auto'}
      spaceBetween={10}       
      freeMode={true}         
      navigation
      className="mySwiper px-4 py-4 [--swiper-navigation-color:#FFFFFF] [--swiper-pagination-color:#FFFFFF]"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id || index} className="!w-auto">
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;