let express = require("express");
let app = express();
const router = express.Router();
const path = require("path");
require("dotenv").config();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // Pasa al siguiente middleware o ruta
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", function (req, res) {
  let responseMessage = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    responseMessage = responseMessage.toUpperCase();
  }

  res.json({ message: responseMessage });
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  },
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;

  var { first: firstName, last: lastName } = req.query;

  res.json({
    name: `${firstName} ${lastName}`,
  });
});

module.exports = app; // Exportar la app para que sea utilizada en server.js
