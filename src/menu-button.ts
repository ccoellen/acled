const menuButton = document.querySelector('#menu-button');

function toggleMenu() {
    document.querySelector('header').classList.toggle('open-menu');
    menuButton.textContent = menuButton.textContent === 'Menu' ? 'Fermer' : 'Menu';
}

menuButton.addEventListener('click', toggleMenu);
