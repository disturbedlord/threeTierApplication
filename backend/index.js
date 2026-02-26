const express = require("express");
const app = express();

// Simple API endpoint
app.get("/api/rate", (req, res) => {
  // Simulate dynamic data with random gold price
  const goldPrice = 58000 + Math.floor(Math.random() * 500);
  res.json({
    gold_price: goldPrice,
    updated_at: new Date(),
  });
});

// Optional health check
app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
