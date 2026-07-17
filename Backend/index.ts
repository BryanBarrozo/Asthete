import express from "express";

import cors from "cors";

import "dotenv/config";
import { prisma } from "./lib/prisma.js";

//security
import { registerSchema } from "./schemas/schemaZod.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const server = express();

server.use(cors());
server.use(express.json());

//User
server.post("/register", async (req, res) => {
  try {
    const result = registerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues
      });
    }
    const { name, email, password } = result.data;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.users.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});
server.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const passwordIsCorrect = await bcrypt.compare(password, user.password);
    if (!passwordIsCorrect) {
      return res.status(401).json({
        message: "Password is incorrect.",
      });
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1h",
      },
    );
    return res.status(200).json({
      message: "Login successful.",
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});

//Profile
server.get("/profile/:id", async (req, res) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.status(200).json(user);
  } catch {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});

server.put("/profile/:id", async (req, res) => {
  //temporario ate o token ficar concluido
  try {
    const id = Number(req.params.id);
    const userId = await prisma.users.findUnique({
      where: { id },
    });
    if (!userId) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const { name, email, password } = req.body;
    const data = { name, email, password };
    if (name) data.name = name;
    if (email) data.email = email;
    if (password) data.password = await bcrypt.hash(password, 10);

    await prisma.users.update({
      where: { id },
      data,
    });
    return res.status(200).json({
      message: "User updated.",
    });
  } catch {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});

//Products
server.get("/collection", async (req, res) => {
  try {
    const products = await prisma.products.findMany();
    const productsBeta = products.slice(0, 6); //temporario
    return res.status(200).json(productsBeta);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});
server.get("/product/:id", async (req, res) => {
  try {
    const product = await prisma.products.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }
    return res.status(200).json(product);
  } catch {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
});

//Iniciando server
server.listen(3000, () => {
  console.log("Servidor rodando");
});

//zod
/*{
  success: true,
  data: {
    name: "teste",
    email: "teste@teste",
    password: "12345678"
  }
} 
  */
