
// Obtener los elementos del DOM
const tecnicaButton = document.getElementById('tecnica-button');
const bachillerButton = document.getElementById('bachiller-button');
const contentSection = document.getElementById('content');

// Agregar evento click a los botones
tecnicaButton.addEventListener('click', () => {
  // Cambiar el contenido de la sección
  contentSection.innerHTML = `
    <h2>Información Técnica</h2>
    <p>Aquí va la información técnica...</p>
  `;
  // Activar el botón técnica
  tecnicaButton.classList.add('active');
  bachillerButton.classList.remove('active');
});

bachillerButton.addEventListener('click', () => {
  // Cambiar el contenido de la sección
  contentSection.innerHTML = `
    <h2>Información Bachiller</h2>
    <p>Aquí va la información bachiller...</p>
  `;
  // Activar el botón bachiller
  bachillerButton.classList.add('active');
  tecnicaButton.classList.remove('active');
});

// Cerrar sesión
const cerrarSesionButton = document.querySelector('button[innerHTML="Cerrar Sesión"]');
cerrarSesionButton.addEventListener('click', () => {
  // Redireccionar a la página de inicio de sesión
  window.location.href ="Menú/Menú.html";
});
