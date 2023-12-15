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

module.exports = router;
