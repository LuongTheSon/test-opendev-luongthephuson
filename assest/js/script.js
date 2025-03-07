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
      header.dataset.sticky = "true";
    } else {
      header.dataset.sticky = "false";
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

  function scrollToTop() {
    console.log("Clicked! Scrolling to top...");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  document.getElementById("scrolltotop").addEventListener("click", scrollToTop);
});


document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('ul li');
  const thumbnail = document.querySelector('.our-thumnail img');

  listItems.forEach((li) => {
    li.addEventListener('click', function () {
      const newSrc = this.querySelector('img').dataset.src;

      if (newSrc) {
        thumbnail.src = newSrc;
      }

      listItems.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
