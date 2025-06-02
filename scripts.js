document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role').value;

      if (!name || !email || !password || !role) {
        alert('Por favor, complete todos los campos.');
        return;
      }

      const user = { name, email, password, role };
      localStorage.setItem('registeredUser', JSON.stringify(user));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      window.location.href = 'index.html';
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        alert('Inicio de sesión exitoso.');

        // Redirige según el rol
        const role = storedUser.role.toLowerCase();

        if (role === 'docente') {
          window.location.href = 'docente.html';
        } else if (role === 'estudiante') {
          window.location.href = 'home.html';
        } else if (role === 'administrador') {
          window.location.href = 'admin.html';
        } else {
          alert('Rol no reconocido. Verifica tu cuenta.');
        }

      } else {
        alert('Correo o contraseña incorrectos.');
      }
    });
  }
}); 
