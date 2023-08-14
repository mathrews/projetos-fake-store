let usersArray = []

const buscarUsers = () => {
    try {
        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(tratamento => {
            usersArray = tratamento;
            listarUsuariosNaTela(usersArray)
        })
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

buscarUsers()

const listarUsuariosNaTela = (lista) => {
    users.innerHTML = '';
    lista.map(item => {
        users.innerHTML += `
        <li>
            <h1>Nome: ${item.name.firstname}</h1>
            <h1>Sobrenome: ${item.name.lastname}</h1>
            <p>Email: ${item.email}</p>
            <p>telefone: ${item.phone}</p>
            <a href="https://www.google.com/maps?q=${item.address.geolocation.lat},${item.address.geolocation.long}" target="_blank">Localização</a>
        </li>
        `
    })
}

listarUsuariosNaTela(usersArray);