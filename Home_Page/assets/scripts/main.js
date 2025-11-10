document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById("carrossel_principal");
  const slides = document.getElementById("slides");
  let items = document.querySelectorAll(".img-carro-principal");

  const total = items.length;

  // duplica os slides para loop infinito
  slides.innerHTML += slides.innerHTML;
  items = document.querySelectorAll(".img-carro-principal"); // atualiza NodeList após duplicar

  let index = 0;

  // pega largura real do slide
  const larguraSlide = items[0].offsetWidth;

  // pega o gap definido no CSS (#slides { gap: 20px; })
  const styleSlides = getComputedStyle(slides);
  const gap = parseInt(styleSlides.gap) || 0;

  const deslocamentoInicial = 0; // não usa margin-left externo

  function passarSlide() {
    index++;

    const deslocamento = deslocamentoInicial + index * (larguraSlide + gap);

    slides.style.transition = "transform 1s ease";
    slides.style.transform = `translateX(-${deslocamento}px)`;

    if (index >= total) {
      slides.addEventListener(
        "transitionend",
        () => {
          slides.style.transition = "none";
          slides.style.transform = `translateX(-${deslocamentoInicial}px)`;
          index = 0;
          void slides.offsetWidth; // força reflow
          slides.style.transition = "transform 1s ease";
        },
        { once: true }
      );
    }
  }

  setInterval(passarSlide, 3000);
});


document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carrosselSecundario');
  if (!track) return; // se não achar o carrossel, não faz nada

  const carousel = track.closest('.carrossel-secundario');
  const viewport = carousel.querySelector('.viewport');
  const btnPrev = carousel.querySelector('.seta.left');
  const btnNext = carousel.querySelector('.seta.right');

  let scrolled = 0;

  function getMaxScroll() {
    return Math.max(0, track.scrollWidth - viewport.offsetWidth);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateUI() {
    track.style.transform = `translateX(-${Math.round(scrolled)}px)`;
    const max = getMaxScroll();
    btnPrev.disabled = scrolled <= 0;
    btnNext.disabled = scrolled >= max;
  }

  function pageStep() {
    return viewport.offsetWidth; // anda exatamente uma "página"
  }

  btnNext.addEventListener('click', () => {
    scrolled = clamp(scrolled + pageStep(), 0, getMaxScroll());
    updateUI();
  });

  btnPrev.addEventListener('click', () => {
    scrolled = clamp(scrolled - pageStep(), 0, getMaxScroll());
    updateUI();
  });

  window.addEventListener('load', updateUI);
  window.addEventListener('resize', () => {
    scrolled = clamp(scrolled, 0, getMaxScroll());
    updateUI();
  });

  updateUI();
});


document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carrosselTerciario');
  if (!track) return; // se não achar o carrossel, não faz nada

  const carousel = track.closest('.carrossel-secundario');
  const viewport = carousel.querySelector('.viewport');
  const btnPrev = carousel.querySelector('.seta.left');
  const btnNext = carousel.querySelector('.seta.right');

  let scrolled = 0;

  function getMaxScroll() {
    return Math.max(0, track.scrollWidth - viewport.offsetWidth);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function updateUI() {
    track.style.transform = `translateX(-${Math.round(scrolled)}px)`;
    const max = getMaxScroll();
    btnPrev.disabled = scrolled <= 0;
    btnNext.disabled = scrolled >= max;
  }

  function pageStep() {
    return viewport.offsetWidth; // anda exatamente uma "página"
  }

  btnNext.addEventListener('click', () => {
    scrolled = clamp(scrolled + pageStep(), 0, getMaxScroll());
    updateUI();
  });

  btnPrev.addEventListener('click', () => {
    scrolled = clamp(scrolled - pageStep(), 0, getMaxScroll());
    updateUI();
  });

  window.addEventListener('load', updateUI);
  window.addEventListener('resize', () => {
    scrolled = clamp(scrolled, 0, getMaxScroll());
    updateUI();
  });

  updateUI();
});


// document.addEventListener('DOMContentLoaded', () => {
//   const track = document.getElementById('carrosselSecundario');
//   const viewport = track.closest('.viewport');
//   const btnPrev = track.closest('.carrossel-secundario').querySelector('.seta.left');
//   const btnNext = track.closest('.carrossel-secundario').querySelector('.seta.right');

//   let scrolled = 0;

//   function getMaxScroll() {
//     return Math.max(0, track.scrollWidth - viewport.offsetWidth);
//   }

//   function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

//   function updateUI() {
//     track.style.transform = `translateX(-${scrolled}px)`;
//     const max = getMaxScroll();
//     btnPrev.disabled = scrolled <= 0;
//     btnNext.disabled = scrolled >= max;
//   }

//   function pageStep() {
//     const max = getMaxScroll();
//     const step = viewport.offsetWidth;
//     return scrolled + step > max ? max - scrolled : step;
//   }

//   btnNext.addEventListener('click', () => { scrolled = clamp(scrolled + pageStep(), 0, getMaxScroll()); updateUI(); });
//   btnPrev.addEventListener('click', () => { scrolled = clamp(scrolled - viewport.offsetWidth, 0, getMaxScroll()); updateUI(); });

//   window.addEventListener('resize', () => { scrolled = clamp(scrolled, 0, getMaxScroll()); updateUI(); });

//   updateUI();
// });