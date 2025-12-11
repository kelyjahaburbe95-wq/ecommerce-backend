require('dotenv').config();
const express = require('express');
const Stripe = require('stripe');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || '');
const prisma = new PrismaClient();

router.post('/create-session', async (req, res) => {
  try {
    const { items, successUrl, cancelUrl } = req.body;
    if (!items || !Array.isArray(items)) return res.status(400).json({ error: 'items required' });

    const line_items = await Promise.all(items.map(async (it) => {
      const product = await prisma.product.findUnique({ where: { id: it.productId } });
      if (!product) throw new Error('Product not found: ' + it.productId);
      return {
        price_data: {
          currency: 'eur',
          product_data: { name: product.name },
          unit_amount: product.priceCents
        },
        quantity: it.quantity
      };
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: successUrl || `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.FRONTEND_URL}/cancel`
    });

    res.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
