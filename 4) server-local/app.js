let http = require('http');

var servidor = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.write('<h3>Server Basico con NodeJS acción!!!</h3>');
    console.log('Estamos realizando una peticon web');
    response.end();
});

servidor.listen(3000);
console.log('Ejecuntando un local server con NodeJs');

