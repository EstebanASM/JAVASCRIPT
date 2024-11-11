const express = require('express');
const app = express();
const port = 8585;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Node.js!');
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en http://localhost:${port}`);
});
