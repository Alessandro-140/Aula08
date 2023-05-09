
/*
Tenho que instalar o npm install mysql.

Para executar no navegador eu copiar http://127.0.0.1:3000 e colar no navegador.

Primeiro coloco para rodar no terminal do VS x CODE.
PS C:\Users\Usuario\Desktop\aula08> node server.js
Servidor executando em: http://127.0.0.1:3000
SE EU DER CTRL + C no terminar ==> Vai parar de executar
*/


const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
// Está => quer dizer que vai retornar o conteúdo dentro das chaves

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', "text/plain");
    //res.end("Oi Mundo");

});
   
server.listen(port, hostname, ()=> {
    console.log("Servidor executando em: http://"+ hostname + ":"+port+"");

});

