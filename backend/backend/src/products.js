const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(products);
});

router.get('/:slug', async (req, res) => {
  const product = await prisma.product.findUnique({ where: { slug: req.params.slug } });
  if (!product) return res.status(404).json({ error: "Produit introuvable" });
  res.json(product);
});

// admin create (MVP : sans auth)
router.post('/', async (req, res) => {
  const p = await prisma.product.create({ data: req.body });
  res.json(p);
});

module.exports = router;
