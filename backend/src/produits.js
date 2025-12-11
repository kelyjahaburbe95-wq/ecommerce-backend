import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

export default router;
