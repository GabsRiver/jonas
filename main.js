/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerviw: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  breakpoins: {
    767: {
      slidesPerviw: 2,
      setWrapperSize: true
    }
  }
})

// Nav Show abri e fecha toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// clicar no item e direcionar
const link = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
