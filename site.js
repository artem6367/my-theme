document.addEventListener('DOMContentLoaded', () => {
  (document.querySelectorAll('.navbar-burger') || [])
    .forEach((el) => {
      el.addEventListener('click', () => {
        const target = document.getElementById(el.dataset.target);
        el.classList.toggle('is-active');
        target.classList.toggle('is-active');
        el.ariaExpanded = el.ariaExpanded === 'false' ? 'true' : 'false';
      });
    });

  const swiper = new Swiper('.app-swiper .swiper', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.app-swiper-next',
      prevEl: '.app-swiper-prev',
    }
  });
});
