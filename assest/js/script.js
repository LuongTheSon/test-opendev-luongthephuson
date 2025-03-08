document.addEventListener('DOMContentLoaded', () => {
  aos();
  hamburgerMenu();
  stickyHeader();
  swiper();
  scrollToTop();
  handleThumbnail();
});

// aos animation
function aos() {
  if (window.AOS) {
    AOS.init({ duration: 1000, once: true });
  }
}

// click change hamburger
function hamburgerMenu() {
  const hamburger = document.querySelector('.burger');
  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
  });
}

// sticky header
function stickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.dataset.sticky = window.scrollY > 50;
  });
}

// setup swiper
function swiper() {
  if (!document.querySelector('.swiper')) return;

  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    speed: 700,
    autoplay: { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true },
    pagination: { el: '.swiper-pagination', clickable: true },
  });
}

// click scroll to top
function scrollToTop() {
  const scrollTopBtn = document.getElementById('scrolltotop');
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// handle thumbnail
function handleThumbnail() {
  const listItems = document.querySelectorAll('ul li');
  const thumbnail = document.querySelector('.our-thumnail img');
  if (!listItems.length || !thumbnail) return;

  listItems.forEach(li => {
    li.addEventListener('click', function () {
      const newSrc = this.querySelector('img')?.dataset.src;
      if (!newSrc) return;

      thumbnail.src = newSrc;
      document.querySelector('ul li.active')?.classList.remove('active');
      this.classList.add('active');
    });
  });
}