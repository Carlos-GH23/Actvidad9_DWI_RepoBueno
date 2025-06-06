document.addEventListener("DOMContentLoaded", ()=>{
    const userDiv = document.getElementById("user-info");

    fetch("https://reqres.in/api/users/2", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1"
        }
    })
    .then(response => response.json())
    .then(data => {
        const user=data.data;
        userDiv.innerHTML= `
        <img src="${user.avatar}" alt="avatar">
        <h2>Nombre Completo:</h2>
        <p>${user.first_name} ${user.last_name}</p>
        <h2>Email:</h2>
        <p>${user.email}</p>
        `;
    })
    .catch(error => {
        console.log('Error',error);
    });
});