document.addEventListener('DOMContentLoaded', () => {
  // Hamburger
  const hamburger = document.querySelector('.burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
  });

  // header fixed
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('bg-blackRgb');
    } else {
      header.classList.remove('bg-blackRgb');
    }
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 700,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  swiper();
});
