const sidebar = document.getElementById('sidebar');
const content = document.getElementById("principal");
const items = document.querySelectorAll('#side_items .side-item');

// Abrir/fechar sidebar ao clicar nela
sidebar.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("closed");
  content.classList.toggle("shift");
});

// Ativar item clicado (sem fechar a sidebar)
items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation(); // impede que o clique afete a sidebar
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});