import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.css';
// import 'swiper/css/navigation';

const swiperNews = new Swiper('.news__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation]
});
const swiperMedia = new Swiper('.media__swiper', {
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation]
});