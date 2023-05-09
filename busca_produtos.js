const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// essa parte abaixo copiei do servidor e colei aqui
var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "loja"

});
// Está => quer dizer que vai retornar o conteúdo dentro das chaves

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', "text/plain");
    //res.end("Oi Mundo");




});
server.listen(port, hostname, ()=> {
    console.log("Servidor executando em: http://"+ hostname + ":"+port+"");

});

