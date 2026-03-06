const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API calculatrice opérationnelle");
});

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Les paramètres a et b doivent être numériques." });
  }

  return res.json({
    operation: "addition",
    a,
    b,
    resultat: a + b,
  });
});

app.get("/sub", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Les paramètres a et b doivent être numériques." });
  }

  return res.json({
    operation: "soustraction",
    a,
    b,
    resultat: a - b,
  });
});

module.exports = app;