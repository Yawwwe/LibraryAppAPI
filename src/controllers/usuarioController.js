const { Op } = require('sequelize');


const { sequelize } = require('../models'); //IMPORTAMOS EL MODELO
const User = sequelize.define('usuario'); //CREAMOS UNA INSTANCIA DEL MODELO

//En este archivo declaramos los metodos de gestion de usuarios (CRUD) y una vez creados, los exportamos con el module.export

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error en getAllUsers' });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error encreateUser' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error en getUserById' });
  }
}

async function updateUserById(req, res) {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.update({ name, email, password });
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error en updateUserById' });
  }
}

async function deleteUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      await user.destroy();
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error en deleteUser' });
  }
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
};