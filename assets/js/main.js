// Swiper 
const swiper = new Swiper('#property .swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,



  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      375: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 10,
      },

      1024: {
          slidesPerView: 4,
          spaceBetween: 10,
      },
  },


});

const swiper2 = new Swiper('#testimonial .swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  // centeredSlides: true,

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }

});