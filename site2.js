import * as bootstrap from 'bootstrap';
import Swiper from 'swiper';

new Swiper('.app-swiper .swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.app-swiper-next',
      prevEl: '.app-swiper-prev',
    }
});
