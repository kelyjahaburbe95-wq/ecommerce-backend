require('dotenv').config();
const express = require('express');
const cors = require('cors');

const productsRouter = require('./routes/products');
const checkoutRouter = require('./routes/checkout');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/products', productsRouter);
app.use('/api/checkout', checkoutRouter);

// health
app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
