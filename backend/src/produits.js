import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const produits = await prisma.produit.findMany();
  res.json(produits);
});

export default router;
