const app = require('./app'); //importamos la aplicación Express que definimos en app.js:
const sequelize = require('./config/database'); //importamos Sequelize y configuramos la conexión a la base de datos en database.js. A continuación, llamamos a sequelize.authenticate() para verificar la conexión a la base de datos

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    app.listen(3000, () => console.log('Server listening on port 3000'));
  } catch (error) {
    console.log('Database connection failed:', error);
  }
}

startServer();