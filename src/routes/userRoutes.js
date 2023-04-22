const express = require('express');

//Aqui, traemos los metodos que hemos creado en el user controler para asignarles una ruta para peticiones HTTP

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../controllers/usuarioController');

const router = express.Router();

// Rutas para obtener y crear usuarios
router.get('/users', getAllUsers);
router.post('/users', createUser);

// Rutas para obtener, actualizar y eliminar un usuario por su ID
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

//Generamos un "enrutador para poder exportarlo y trabajar con el"

module.exports = router;