// importacion del modulo MySQL
var mysql = require('mysql');

//Creacion de la conección
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'dbPruebaNode',
    user: 'root',
    password: '123456'
})
/* Coneccion a la base de datos */
conexion.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log('Conección Exitosa');
        }
    }
);

//$ + + + + + + Mostrar + + + + + +
/* Consultas a la Tabla usuarios  */
/* conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error) {
        throw error;
    } else {
        //Muestra por consola los registros de la tabla usuarios
        results.forEach(element => {
            console.log(element);
        });
    }
}) */

//! + + + + + + Insertar + + + + + +

conexion.query('INSERT INTO usuarios (nombre, edad, numero, departamento) VALUES ("Sergio", "28", "008", "sistemas")', function (error, results,) {
    if (error) {
        throw error;
    } else {
        console.log('Registro Agregado!', results);
    }
})

//% Editar

/* conexion.query('UPDATE usuarios SET edad = 666, numero = 006, departamento= "finanzas" WHERE  nombre = "José"', function (error, results) {
    if (error) throw error;
    console.log('Actualizado con exito', results);


}) */

//& Eliminar

/* conexion.query('DELETE  FROM usuarios WHERE nombre = "Lucas"', function (error, results) {
    if (error) throw error;
    console.log('Registro Eliminado', results);

}) */


// Finaliza la conección
conexion.end();