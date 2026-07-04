import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma.js";

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", async (req, res) => {});

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
    console.log("usuario registrado");
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error on register new user.",
    });
  }
});

server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      //encontrando email do usuario
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      }); //not found
    }
    if (user.password !== password) {
      return res.status(401).json({
        message: "Password is incorrect.",
      });
    }
    return res.status(200).json({
      message: "Login successful.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando");
});
