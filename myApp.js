let express = require('express');
let app = express();
const router = express.Router();
const path = require('path');
require('dotenv').config();


app.use('/public', express.static(path.join(__dirname, 'public')));

// Definir la ruta para el camino raíz '/'
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
    const message = process.env.MESSAGE_STYLE === 'uppercase' 
      ? 'Hello json'.toUpperCase() 
      : 'Hello json';
    
    res.json({ message });
  });
  
module.exports = app; // Exportar la app para que sea utilizada en server.js
