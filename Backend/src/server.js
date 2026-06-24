const express = require("express");

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = express();
server.use(express.json()); //permitindo que o express use arquivos JSON

server.post("/register", async (req, res) => {
  const user = await prisma.users.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    },
  });

  return res.status(201).json(user);
});



server.listen(3000);

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
}),

users.push(req.body);
  //recebe informações da pagina e passa para a variavel users
  //"push" coloca na ultima posição da variavel
*/
