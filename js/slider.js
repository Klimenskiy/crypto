const swiper = new Swiper('.roadmap-slider', {
    loop: false,
    slidesPerView: 'auto',
    autoHeight: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    breakpoints: {
        320: {
            spaceBetween: 12
          },
        480: {
          spaceBetween: 18
        },
        767.98: {
          spaceBetween: 22
        },
        1100: {
          spaceBetween: 0
        }
      },
});