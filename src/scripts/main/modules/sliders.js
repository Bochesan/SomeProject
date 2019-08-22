var wwdSlider = document.querySelector('.wwdSection__slider');
if (wwdSlider) {
    new Swiper(wwdSlider,{
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4000,
      },
      speed: 4000,
    });
}

var wpsSlider = document.querySelector('.wpsSection__slider');
if (wpsSlider) {
    new Swiper(wpsSlider,{
      effect: 'fade',
      allowTouchMove: false,
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      autoplay: {
        delay: 4000,
      },
      speed: 4000,
      autoHeight: true,
      navigation: {
          nextEl: ".wpsSection__slider .swiper-button-next",
          prevEl: ".wpsSection__slider .swiper-button-prev",
      },
      on: {
          slideNextTransitionStart: function() {
              wpsSlider.classList.remove('prevSlide');
              wpsSlider.classList.add('nextSlide');
          },
          slidePrevTransitionStart: function() {
              wpsSlider.classList.remove('nextSlide');
              wpsSlider.classList.add('prevSlide');
          }
      }
    });
}
