const pool = require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;
console.log("PORT-DEBUG:", process.env.PORT);

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

app.post("/api/anmelden", async (req, res) => {
  const { email, passwort } = req.body;

  const sql = "INSERT INTO users (email, passwort) VALUES ($1, $2)";
  try {
    await pool.query(sql, [name, email]);
    res.status(200).json({ message: "Erfolgreich gespeichert" });
  } catch (err) {
    console.error("Fehler beim Einfügen:", err);
    res.status(500).json({ error: "Fehler beim Speichern" });
  }
});
