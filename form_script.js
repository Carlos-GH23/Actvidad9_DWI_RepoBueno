document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const responseDiv = document.getElementById('response');
  const avatar = "https://reqres.in/img/faces/1-image.jpg"; // avatar fijo

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const first_name = form.first_name.value.trim();
    const last_name = form.last_name.value.trim();
    const email = form.email.value.trim();

    const body = {
      first_name,
      last_name,
      email,
      avatar
    };

    try {
      const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'  // Aquí agregamos el header
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        throw new Error('Error en la respuesta de la red');
      }

      const simulatedUser = {
        id: 10,
        email,
        first_name,
        last_name,
        avatar
      };

      alert('¡Usuario registrado correctamente!');
      displayResponse(simulatedUser);
    } catch (error) {
      responseDiv.textContent = 'Error al enviar los datos: ' + error.message;
    }
  });

  function displayResponse(user) {
    responseDiv.innerHTML = `
      <h2>Usuario creado (Simulado):</h2>
      <div class="user-card">
        <img src="${user.avatar}" alt="Avatar de ${user.first_name}" />
        <div>
          <p><strong>${user.first_name} ${user.last_name}</strong></p>
          <p>Email: ${user.email}</p>
        </div>
      </div>
    `;
  }
});
