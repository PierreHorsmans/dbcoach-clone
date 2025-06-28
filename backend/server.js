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

  console.log("Empfangene Daten:", name, email);

  res.status(200).json({ message: "Erfolgreich empfangen" });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
