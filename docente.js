// Agrega nuevos campos para objetivos específicos
function agregarObjetivo() {
  const container = document.getElementById('objetivos-especificos');
  const fila = document.createElement('div');
  fila.className = 'fila';
  fila.innerHTML = `
    <input type="text" placeholder="Unidad temática">
    <input type="text" placeholder="Semanas">
    <input type="text" placeholder="Actividad asociada">
  `;
  container.appendChild(fila);
}

// Agrega nuevos campos para criterios de evaluación
function agregarCriterio() {
  const container = document.getElementById('criterios-evaluacion');
  const fila = document.createElement('div');
  fila.className = 'fila';
  fila.innerHTML = `
    <input type="text" placeholder="Criterio de evaluación">
    <input type="text" placeholder="Ponderación">
    <input type="text" placeholder="Semana">
  `;
  container.appendChild(fila);
}

// Se ejecuta cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-silabo');

  // Función para "Guardar como borrador"
  window.guardarBorrador = () => {
    alert('Formulario guardado como borrador.');
    window.location.href = 'borrador.html'; // Asegúrate de que este archivo exista
  };

  // Función para "Enviar a revisión"
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previene el comportamiento por defecto
    alert('Formulario enviado para revisión.');
    window.location.href = 'revision.html'; // Asegúrate de que este archivo exista
  });
});
