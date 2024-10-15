// script.js
const userNameElement = document.getElementById('user-name');
const tecnicaButton = document.getElementById('tecnica-button');
const bachillerButton = document.getElementById('bachiller-button');
const tecnicaContent = document.getElementById('tecnica-content');
const bachillerContent = document.getElementById('bachiller-content');
const viewButtons = document.querySelectorAll('.view-button');

// Obtener el nombre del usuario (reemplaza con tu lógica)
const userName = 'Juan Pérez';
userNameElement.textContent = userName;

// Mostrar/ocultar la sección al hacer clic en los botones
tecnicaButton.addEventListener('click', () => {
    tecnicaButton.classList.add('active');
    bachillerButton.classList.remove('active');
    tecnicaContent.classList.add('active');
    bachillerContent.classList.remove('active');
});

bachillerButton.addEventListener('click', () => {
    bachillerButton.classList.add('active');
    tecnicaButton.classList.remove('active');
    bachillerContent.classList.add('active');
    tecnicaContent.classList.remove('active');
});

// Mostrar/ocultar el contenido adicional
viewButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const content = document.getElementById(targetId);
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});