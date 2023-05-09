

/*
Tenho que instalar o npm install mysql.

Para executar no navegador eu copiar http://127.0.0.1:3000 e colar no navegador.

Primeiro coloco para rodar no terminal do VS x CODE.
PS C:\Users\Usuario\Desktop\aula08> node server.js
Servidor executando em: http://127.0.0.1:3000

SE EU DER CTRL + C no terminar ==> Vai parar de executar
*/



var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "loja"

});
conn.connect( function(erro){
    if(!erro){
        sql = "SELECT * FROM produto ORDER bY nome";
        conn.query(sql, function(err, result, fields){
            if( !err){
                console.log(result);

            }else{
                console.log(err);
            }
        });
    }
});