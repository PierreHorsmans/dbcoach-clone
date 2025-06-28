const db = require("./db");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;
console.log("PORT-DEBUG:", process.env.PORT); // zeigt, was Render gesetzt hat
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

app.use(cors());
app.use(bodyParser.json());

app.post("/api/anmelden", (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Fehler beim Einfügen:", err);
      return res.status(500).json({ error: "Fehler beim Speichern" });
    }
    res.status(200).json({ message: "Erfolgreich gespeichert" });
  });
});
