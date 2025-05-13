let express = require('express');
let app = express();

// Definir la ruta para el camino raíz '/'
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  });

module.exports = app; // Exportar la app para que sea utilizada en server.js
