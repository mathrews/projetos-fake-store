var usersArray = [];
var buscarUsers = function () {
    try {
        fetch('https://fakestoreapi.com/users')
            .then(function (res) { return res.json(); })
            .then(function (tratamento) {
            usersArray = tratamento;
            listarUsuariosNaTela(usersArray);
        });
    }
    catch (error) {
        console.log("Error: ".concat(error.message));
    }
};
buscarUsers();
var listarUsuariosNaTela = function (lista) {
    users.innerHTML = '';
    lista.map(function (item) {
        users.innerHTML += "\n        <li>\n            <h1>Nome: ".concat(item.name.firstname, "</h1>\n            <h1>Sobrenome: ").concat(item.name.lastname, "</h1>\n            <p>Email: ").concat(item.email, "</p>\n            <p>telefone: ").concat(item.phone, "</p>\n            <a href=\"https://www.google.com/maps?q=").concat(item.address.geolocation.lat, ",").concat(item.address.geolocation.long, "\" target=\"_blank\">Localiza\u00E7\u00E3o</a>\n        </li>\n        ");
    });
};
listarUsuariosNaTela(usersArray);
