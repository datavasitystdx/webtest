const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close-menu');

toggle.onclick = () => menu.classList.add('open');
close.onclick = () => menu.classList.remove('open');

const buttons = document.querySelectorAll('.categories button');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        filter === 'all' || card.dataset.category === filter
        ? 'block'
        : 'none';
    });
  };
});
