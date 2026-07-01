import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma.js";

const server = express();

server.use(cors());
server.use(express.json());


server.get("/", async (req, res) => {
  try {
    const users = await prisma.users.findMany();

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erro ao buscar usuários.",
    });
  }
});

server.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    console.log("usuario registrado")
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erro ao cadastrar usuário.",
    });
  }
});

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});