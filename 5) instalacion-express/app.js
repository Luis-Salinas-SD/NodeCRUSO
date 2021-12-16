//! Importar libreria Express
const { response } = require('express');
let express = require('express');

//! instanciamos
let app = express();

//! Direccionamiento a raiz
app.get('/login', function (peticion, respuesta) {
    respuesta.send('Ruta inicio')
});
//! Direccion a login
app.get('/login', function (peticion, respuesta) {
    respuesta.send('Ruta inicio')
})
//!Muestra en pantalla el contenido
app.listen(3000, function (reqest, response) {
    console.log('Hola Mundo');
})