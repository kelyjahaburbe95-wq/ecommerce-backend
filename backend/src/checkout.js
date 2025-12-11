import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const { total } = req.body;

  const commande = await prisma.commande.create({
    data: { total }
  });

  res.json({
    message: "Commande enregistrée",
    commande
  });
});

export default router;
