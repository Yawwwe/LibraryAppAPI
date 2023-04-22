//ESTE CODIGO SINCRONIZA LAS COSAS CON LA BBDD CUIDAO

const express = require('express');
const { sequelize } = require('./models'); // Importa los modelos
const app = express();
 const port = 3000;

// Aquí va la configuración y definición de rutas de tu aplicación

//  Sincroniza la base de datos
sequelize.sync().then(() => {
   app.listen(port, () => {
     console.log(`App listening at http://localhost:${port}`);
   });
   }).catch((error) => {
   console.log('Error syncing database:', error);
  });
