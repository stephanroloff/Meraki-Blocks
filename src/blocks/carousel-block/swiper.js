setTimeout(() => {

  function startSwiper() {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      direction: 'horizontal',
      // loop: true,
      loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      // autoplay: {
      //   delay: 5000,
      // },
      autoplay: false,

      // slidesPerView: numberOfSliders
      slidesPerView: '1',
    });

  }


  let swiperClass = document.querySelector('.swiper_');
  let swiperWrapperClass = document.querySelector('.swiper-wrapper_');
  let allSwiperSliderClass = document.querySelectorAll('.slide_');
  let swiperPaginationClass = document.querySelector('.swiper-pagination_');
  let swiperBtnPrevClass = document.querySelector('.swiper-button-prev_');
  let swiperBtnNextClass = document.querySelector('.swiper-button-next_');

  //RESPONSIVE---------------------------------------------
  //IF YOU DISCOMMENT THESE LINES
  //GIVES AN OPTION TO TRANSFORM STATICS COLUMNS IN DESKTOP TO A CARROUSEL
  //INSTEAD OF PUTTING THEM ONE BELOW THE OTHER

  // let x = window.matchMedia("(max-width: 700px)")
  // if (x.matches) { // If media query matches

  if (
    !swiperClass ||
    !swiperWrapperClass ||
    !allSwiperSliderClass ||
    !swiperPaginationClass ||
    !swiperBtnPrevClass ||
    !swiperBtnNextClass
  ) return;

  swiperClass.classList.add('swiper');
  swiperWrapperClass.classList.add('swiper-wrapper');
  swiperPaginationClass.classList.add('swiper-pagination');
  swiperBtnPrevClass.classList.add('swiper-button-prev');
  swiperBtnNextClass.classList.add('swiper-button-next');

  allSwiperSliderClass.forEach(element => {
    element.classList.add('swiper-slide');
  })

  startSwiper();

  // }

  //-------------------------------------------------------

}, 1000)