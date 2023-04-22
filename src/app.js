const express = require('express');
const userRoutes = require('./routes/userRoutes');
//creamos una instancia de Express:
const app = express();

// configuramos Express para analizar automáticamente las solicitudes entrantes con el formato JSON
app.use(express.json());

//Por último, utilizamos la ruta base /user y las rutas de usuario definidas en userRoutes.js:
app.use('/user', userRoutes);

//Finalmente, exportamos nuestra aplicación Express para que podamos usarla en index.js para arrancar el servidor
module.exports = app;