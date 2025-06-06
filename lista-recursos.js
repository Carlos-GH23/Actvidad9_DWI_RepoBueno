
fetch('https://reqres.in/api/unknown')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const contenedor = document.getElementById("contenedor-recursos");

    data.data.forEach(recurso => {

      const col = document.createElement("div");
      col.className = "col-md-4";

    
      col.innerHTML = `
        <div class="card text-white mb-3" style="background-color: ${recurso.color};">
          <div class="card-body">
            <h5 class="card-title">${recurso.name}</h5>
            <p class="card-text">color: ${recurso.color}</p>    
          </div>
        </div>
      `;

      
      contenedor.appendChild(col);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
