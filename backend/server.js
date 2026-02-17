const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

/* ================== DEMO STORAGE ================== */

let users = [];
let claimHistory = {};

/* ================== HELPERS ================== */

function generateToken() {
  return Math.random().toString(36).substring(2);
}

function detectBias(text) {
  const emotionalWords = ["miracle", "shocking", "secret", "big pharma", "guaranteed"];
  let biasScore = 0;
  let triggers = [];

  emotionalWords.forEach(word => {
    if (text.includes(word)) {
      biasScore += 20;
      triggers.push(word);
    }
  });

  return {
    biasScore: Math.min(biasScore, 100),
    triggers
  };
}

function detectFallacies(text) {
  const fallacies = [];

  if (text.includes("everyone says"))
    fallacies.push("Bandwagon Fallacy");

  if (text.includes("big pharma"))
    fallacies.push("Conspiracy Appeal");

  if (text.includes("always") || text.includes("never"))
    fallacies.push("Black & White Thinking");

  return fallacies;
}

function calculateSeverity(verdict) {
  if (verdict === "Quack") return "High";
  if (verdict === "Misleading") return "Medium";
  return "Low";
}

function classifyCategory(text) {
  if (text.includes("antibiotic") || text.includes("flu"))
    return "Medicine";
  if (text.includes("diet") || text.includes("egg"))
    return "Nutrition";
  return "General Science";
}

/* ================== AUTH ================== */

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const token = generateToken();
  users.push({ username, password, token });
  claimHistory[username] = [];

  res.json({ token, username });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ token: user.token, username });
});

/* ================== CLAIM ANALYSIS ================== */

app.post("/api/check", (req, res) => {
  const { claim, token } = req.body;

  const user = users.find(u => u.token === token);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  const text = claim.toLowerCase();

  let verdict = "Fact";
  let explanation = "This claim aligns with scientific evidence.";

  if (text.includes("antibiotics") && text.includes("flu")) {
    verdict = "Quack";
    explanation = "Flu is viral. Antibiotics treat bacteria.";
  }

  if (text.includes("detox")) {
    verdict = "Misleading";
    explanation = "The body detoxifies naturally via liver and kidneys.";
  }

  const bias = detectBias(text);
  const fallacies = detectFallacies(text);
  const severity = calculateSeverity(verdict);
  const category = classifyCategory(text);

  const response = {
    verdict,
    explanation,
    confidence: verdict === "Fact" ? 90 : verdict === "Quack" ? 85 : 70,
    severity,
    category,
    bias,
    fallacies,
    sources: [
      { name: "WHO", credibility: 95 },
      { name: "CDC", credibility: 92 }
    ],
    mythEvolution: {
      origin: "Originated from early 1900s misinformation.",
      spread: "Spread through blogs and viral social media posts.",
      debunked: "Debunked by major health organizations."
    }
  };

  claimHistory[user.username].push({
    claim,
    verdict,
    severity,
    date: new Date().toISOString()
  });

  res.json(response);
});

/* ================== HISTORY ================== */

app.post("/api/history", (req, res) => {
  const { token } = req.body;

  const user = users.find(u => u.token === token);
  if (!user) return res.status(401).json({ message: "Unauthorized" });

  res.json(claimHistory[user.username]);
});

/* ================== LEARNING HUB ================== */

app.get("/api/learning", (req, res) => {
  res.json([
    {
      title: "How Misinformation Spreads",
      content: "Misinformation spreads through emotional triggers and repetition."
    },
    {
      title: "Logical Fallacies",
      content: "Common fallacies include bandwagon, strawman, and false dilemma."
    },
    {
      title: "How to Verify Sources",
      content: "Always check peer-reviewed journals and government sources."
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




