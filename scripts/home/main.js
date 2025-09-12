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


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("div_lancamentos");
  const wrapper = container.parentElement;
  const btnLeft = document.getElementById("left");
  const btnRight = document.getElementById("right");

  const posters = Array.from(container.querySelectorAll(".img-container"));
  const gap = parseInt(getComputedStyle(container).gap) || 0;
  const posterWidth = posters[0].offsetWidth;

  const bloco = 4; // posters por clique
  const passo = bloco * (posterWidth + gap);
  let deslocamento = 0;

  btnRight.addEventListener("click", () => {
    deslocamento += passo;
    const maxScroll = container.scrollWidth - wrapper.offsetWidth;
    if (deslocamento > maxScroll) deslocamento = 0; // loop infinito
    container.style.transform = `translateX(-${deslocamento}px)`;
  });

  btnLeft.addEventListener("click", () => {
    deslocamento -= passo;
    if (deslocamento < 0) deslocamento = container.scrollWidth - wrapper.offsetWidth; // loop infinito
    container.style.transform = `translateX(-${deslocamento}px)`;
  });
});