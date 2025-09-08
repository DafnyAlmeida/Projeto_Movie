// Faz a sidebar passar do estado fechado (closed) para o aberto (open) ao clicar em qualquer lugar dela
const sidebar = document.getElementById('sidebar')

sidebar.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('closed');
});

// Faz com que a classe active mude de um item para outro ao ser clicada
const items = document.querySelectorAll('#side_items .side-item');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        // Tirar depois a linha 16 - impede o href de ir pra outra página
        e.preventDefault();
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

