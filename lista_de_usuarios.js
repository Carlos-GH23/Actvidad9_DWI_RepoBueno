const API_URL = "https://reqres.in/api/users";

const headers = {
  "x-api-key": "reqres-free-v1"
};

function cargarUsuarios() {
  fetch(API_URL, {
    method: "GET",
    headers: headers
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    })
    .then(data => mostrarUsuarios(data.data))
    .catch(error => {
      document.getElementById("user-list").innerText = "Error al cargar usuarios.";
      console.error("Error:", error);
    });
}

function mostrarUsuarios(usuarios) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  usuarios.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <img src="${user.avatar}" alt="Avatar" width="60" height="60" />
      <div>
        <strong>${user.first_name} ${user.last_name}</strong><br />
        Email: ${user.email}
      </div>
    `;
    userList.appendChild(userCard);
  });
}

document.addEventListener("DOMContentLoaded", cargarUsuarios);
