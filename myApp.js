let express = require('express');
let app = express();

// Definir la ruta para el camino raíz '/'
app.get('/', (req, res) => {
  res.send('Hello Express'); // Enviar la respuesta "Hello Express"
});

module.exports = app; // Exportar la app para que sea utilizada en server.js
