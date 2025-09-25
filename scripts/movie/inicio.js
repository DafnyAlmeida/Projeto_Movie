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