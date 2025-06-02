function mostrarUsuarios() {
  const tabla = document.getElementById('tabla-usuarios');
  const tbody = tabla.querySelector('tbody');
  tbody.innerHTML = ''; // Limpiar contenido anterior

  // Datos ficticios para la tabla
  const usuarios = [
    { name: 'Juan Pérez', email: 'juan@example.com', role: 'Docente' },
    { name: 'Ana Gómez', email: 'ana@example.com', role: 'Estudiante' },
    { name: 'Carlos Ruiz', email: 'carlos@example.com', role: 'Administrador' }
  ];

  usuarios.forEach(usuario => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${usuario.name}</td>
      <td>${usuario.email}</td>
      <td>${usuario.role}</td>
    `;
    tbody.appendChild(fila);
  });

  tabla.classList.remove('hidden');
}

function limpiarLocalStorage() {
  if (confirm('¿Estás seguro de que deseas borrar todos los datos locales?')) {
    localStorage.clear();
    alert('Datos locales borrados correctamente.');
    const tabla = document.getElementById('tabla-usuarios');
    tabla.classList.add('hidden');
  }
}
