const express = require('express');
const router = express.Router();
const connection = require('../database.js');

// Obtener todos los productos
router.get('/tienda', (req, res) => {
  try {
    const query = 'SELECT * FROM PRODUCTOS';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        res.status(200).json({ productos: results });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Obtener un producto específico por id_producto
router.get('/tienda/:idProducto', (req, res) => {
  try {
    const idProducto = req.params.idProducto;
    const query = 'SELECT * FROM PRODUCTOS WHERE id_producto = ?';
    connection.query(query, [idProducto], (error, results) => {
      if (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        if (results.length > 0) {
          res.status(200).json({ producto: results[0] });
        } else {
          res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

//crear los productos
router.post('/tienda', (req, res) => {
  const { nombre, precio, descripcion, cantidad, imagen } = req.body;

  // Validar que se proporcionaron todos los campos necesarios
  if (!nombre || !precio || !descripcion || !cantidad || !imagen) {
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios en la solicitud' });
  }

  // Insertar el nuevo producto en la base de datos
  const sql = 'INSERT INTO PRODUCTOS (nombre, precio, descripcion, cantidad, imagen) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, precio, descripcion, cantidad, imagen];

  connection.query(sql, values, (err, results) => {
      if (err) {
          console.error('Error al insertar producto en la base de datos:', err);
          res.status(500).json({ mensaje: 'Error al registrar producto' });
      } else {
          console.log('Producto registrado con éxito');
          res.status(201).json({ mensaje: 'Producto registrado con éxito' });
      }
  });
});

module.exports = router;
