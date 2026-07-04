const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Sample product catalog
let products = [
  { id: 1, sku: 'T-SHIRT-001', name: 'Organic Cotton T-Shirt', basePriceUSD: 20, description: 'Comfortable organic cotton t-shirt' },
  { id: 2, sku: 'MUG-001', name: 'Ceramic Mug', basePriceUSD: 10, description: '12oz ceramic mug' }
];

// Simple endpoint to get products. Accepts ?currency=EUR to simulate conversion (very simple conversion rates here for demo)
app.get('/api/products', (req, res) => {
  const currency = (req.query.currency || 'USD').toUpperCase();
  // Simple demo conversion table — replace with calls to a rates API
  const rates = { USD: 1, EUR: 0.92, GBP: 0.78, JPY: 146 };
  const rate = rates[currency] || 1;
  const converted = products.map(p => ({
    id: p.id,
    sku: p.sku,
    name: p.name,
    description: p.description,
    price: (p.basePriceUSD * rate).toFixed(2),
    currency
  }));
  res.json(converted);
});

// Placeholder: create a market expansion task for a product (e.g., list to marketplace, localize)
app.post('/api/expand', (req, res) => {
  const { productId, targetMarket } = req.body;
  // In a full app this would kick off workflows: translations, pricing rules, inventory, listings.
  console.log(`Expanding product ${productId} to market ${targetMarket}`);
  res.json({ ok: true, message: `Started expansion for product ${productId} to ${targetMarket}` });
});

// Health
app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`CARTO server listening at http://localhost:${port}`);
});
