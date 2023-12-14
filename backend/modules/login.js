const express = require('express');
const router = express.Router();
const connection = require('../database.js');


// Endpoint de login
router.post('/login', (req, res) => {
    const { correo, password } = req.body;
    // Consulta SQL para verificar las credenciales
    const query = 'SELECT * FROM USUARIOS WHERE correo = ? AND password = ?';
  
    connection.query(query, [correo, password], (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (results.length > 0) {
                const usuario = results[0]; 
                res.status(200).json({ mensaje: 'Acceso concedido', usuario });
            } else {
                // Usuario no autenticado
                res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
            }
        }
    });
  });


module.exports = router;