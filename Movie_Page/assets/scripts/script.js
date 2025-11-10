document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn_open_opcao");
  const opcoes = document.getElementById("opcoes");

  btn.addEventListener("click", () => {
    opcoes.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !opcoes.contains(e.target)) {
      opcoes.classList.remove("show");
    }
  });
});


// DÚVIDAS

// Seleciona todas as setas dentro dos itens de dúvida
const arrows = document.querySelectorAll('.item_duvi .fa-angle-down');

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    const item = arrow.closest('.item_duvi'); // pega o item_duvi mais próximo
    const paragraph = item.querySelector('p');

    // Alterna a exibição do texto
    paragraph.classList.toggle('show');

    // Alterna a rotação da seta
    arrow.classList.toggle('rotated');
  });
});