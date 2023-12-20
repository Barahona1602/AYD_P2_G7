const express = require('express');
const router = express.Router();
const connection = require('../database.js');


router.post('/login', (req, res) => {
    const { correo, password } = req.body;
    
    // Consulta SQL para verificar las credenciales y obtener el estado de verificación
    const query = 'SELECT * FROM USUARIOS WHERE correo = ?';
  
    connection.query(query, [correo], (error, results) => {
        if (error) {
            console.error('Error en la consulta:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (results.length > 0) {
                const usuario = results[0];

                // Verificar el estado del usuario
                if (!usuario.verificado) {
                    // Si no está verificado, verificar con temp_pass
                    if (usuario.temp_pass === password) {
                        // Actualizar el estado a verificado y enviar respuesta
                        const updateQuery = 'UPDATE USUARIOS SET verificado = true WHERE id_usuario = ?';
                        connection.query(updateQuery, [usuario.id_usuario], (updateError, updateResults) => {
                            if (updateError) {
                                console.error('Error al actualizar el estado del usuario:', updateError);
                                res.status(500).json({ mensaje: 'Error en el servidor' });
                            } else {
                                res.status(200).json({ mensaje: 'Acceso concedido', usuario });
                            }
                        });
                    } else {
                        res.status(401).json({ mensaje: 'Usuario no verificado, contraseña temporal incorrecta' });
                    }
                } else {
                    // Si está verificado, verificar con la contraseña normal
                    if (usuario.password === password) {
                        res.status(200).json({ mensaje: 'Acceso concedido', usuario });
                    } else {
                        res.status(401).json({ mensaje: 'Usuario verificado, contraseña incorrecta' });
                    }
                }
            } else {
                // Usuario no encontrado
                res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
            }
        }
    });
});



module.exports = router;