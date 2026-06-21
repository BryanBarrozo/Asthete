const express = require("express");

const server = express();


/*
Sintaxe:
http://localhost:3000/hello?name=Jose&idade=23
Query params = ?name=Jose&idade=23
começa com um "?" e se usa o "&" para separa parametros

é geralmente usado para fazer filtragem de produtos ou coisas do genero
/products?categoria=camiseta&tamanho=M&precoMax=100

http://localhost:3000/hello/Jose
Route params = /hello/:nome
é geralmente usado para um produto especifico, exemplo e-commerce, usuario clica em um produto
o usuario vai para pagina especifica desse produto, id do produto é 29 "/products/29"



*/


server.get("/hello", (req, res) => {
    console.log("rota /hello chamada");
    return res.send("hello world");
    console.log("valor")
});

server.get("/product/:id", (req, res) =>{
    const id = req.params.id;

    return res.json({
        name: "vaso rustico",
        description: "lorem",
        price: 300,
        img: "src da imagem"
        
    })
})

server.listen(3000);
