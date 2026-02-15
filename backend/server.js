const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow frontend (Vite) to talk to backend
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend working ✅" });
});

// Main API
app.post("/api/check", (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({
      verdict: "Error",
      explanation: "No claim provided"
    });
  }

  const text = claim.toLowerCase();

  if (text.includes("antibiotics") && text.includes("flu")) {
    return res.json({
      verdict: "Quack",
      explanation: "Flu is caused by a virus. Antibiotics only work against bacteria."
    });
  }

  if (text.includes("water") && text.includes("healthy")) {
    return res.json({
      verdict: "Fact",
      explanation: "Drinking water is essential for hydration and overall health."
    });
  }

  return res.json({
    verdict: "Unknown",
    explanation: "This claim is not in our simple rule-based system yet."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



