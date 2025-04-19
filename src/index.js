import './styles.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function switchTab(tab) {
    clearContent();
    const content = document.getElementById('content');
    if (tab === 'home') {
        content.appendChild(loadHome());
    } else if (tab === 'menu') {
        content.appendChild(loadMenu());
    } else if (tab === 'contact') {
        content.appendChild(loadContact());
    }
}

// ⬇️ Todo el código está "envuelto" dentro de este bloque
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home'); // Cargar la pestaña por defecto

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('for');
            switchTab(tab);
        });
    });
});
