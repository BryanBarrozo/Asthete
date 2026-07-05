import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { prisma } from "./lib/prisma.js";

const server = express();

server.use(cors());
server.use(express.json());

async function authentication(req, res){
  try{
    
  }catch{

  }
}

server.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

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

server.listen(3000, () => {
  console.log("Servidor rodando");
});
