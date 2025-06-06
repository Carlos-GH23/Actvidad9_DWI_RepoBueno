 const url = 'https://reqres.in/api/users/';
        function consumirServicio() {
            const divPadre = document.querySelector('#padre');
            let numUsuario = Math.floor(Math.random() * (11 - 1 + 1)) + 1; // entre 1 y 12 inclusive

            fetch(url + numUsuario)
                .then(res => res.json())
                .then(data => {
                    const usuario = data.data;

                    console.log("Data en consumo de servicio: ", usuario);
                    divPadre.innerHTML = `
            <div class="card shadow-lg" style="width: 18rem;" id="usuario-${usuario.id}">
              <img src="${usuario.avatar}" class="card-img-top" alt="Avatar">
              <div class="card-body">
                <h5 class="card-title">Email: ${usuario.email}</h5>
                <p class="card-text">Nombre: ${usuario.first_name}</p>
                <p class="card-text">Apellido: ${usuario.last_name}</p>
              </div>
            </div>
          `;
                })
                .catch(e => {console.error("Error al consumir el servicio:", e)
                });
        }

        consumirServicio()