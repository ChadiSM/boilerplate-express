let express = require("express");
let app = express();
const router = express.Router();
const path = require("path");
require("dotenv").config();

app.use("/public", express.static(path.join(__dirname, "public")));

// Definir la ruta para el camino raíz '/'
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pasa al siguiente middleware o ruta
});

app.get("/json", function (req, res) {
  let responseMessage = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    responseMessage = responseMessage.toUpperCase();
  }

  res.json({ message: responseMessage });
});

module.exports = app; // Exportar la app para que sea utilizada en server.js
