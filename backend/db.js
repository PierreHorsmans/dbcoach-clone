const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "sql112.infinityfree.com",
  user: "if0_39345328",
  password: "LomOyzKZyE",
  database: "if0_39345328_dbcoach"
});

connection.connect((err) => {
  if (err) {
    console.error("Verbindungsfehler:", err);
  } else {
    console.log("Verbindung erfolgreich hergestellt.");
  }
});

module.exports = connection;
