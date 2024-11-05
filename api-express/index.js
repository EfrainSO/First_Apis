const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API con Express');
});

app.listen(3000, () => console.log('API de Express corriendo en un puerto 3000'));