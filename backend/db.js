const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db4free.net",
  user: "pierre",
  password: "epw4dPsD!",
  database: "dbcoach"
});

db.connect(err => {
  if (err) {
    console.error("Fehler bei der DB-Verbindung:", err);
  } else {
    console.log("Mit MySQL-Datenbank verbunden.");
  }
});

module.exports = db;
