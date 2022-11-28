$(document).ready(() => {
 new Swiper(".mySwiper", {
  cssMode: true,
  loop:true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


new GLightbox({
  selector: '.glightbox'
});

})
