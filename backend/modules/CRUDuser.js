const express = require('express');
const router = express.Router();
const connection = require('../database.js');


router.get('/usuarios', (req, res) => {
    const query = 'SELECT * FROM USUARIOS';

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener los usuarios:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            res.status(200).json({ usuarios: results });
        }
    });
});



router.get('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM USUARIOS WHERE id_usuario = ?';

    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Error al obtener el usuario:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (results.length > 0) {
                res.status(200).json({ usuario: results[0] });
            } else {
                res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
        }
    });
});


router.put('/usuario/:id', (req, res) => {
    const userId = req.params.id;
    const { nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, verificado } = req.body;

    // Consultar el usuario antes de actualizarlo
    const selectQuery = 'SELECT * FROM USUARIOS WHERE id_usuario=?';
    connection.query(selectQuery, [userId], (selectError, selectResults) => {
        if (selectError) {
            console.error('Error al obtener el usuario:', selectError);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (selectResults.length > 0) {
                const usuarioAntesDeActualizar = selectResults[0];

                // Actualizar el usuario
                const updateQuery = 'UPDATE USUARIOS SET nombre=?, apellido=?, telefono=?, correo=?, password=?, temp_pass=?, fecha_nac=?, rol=?, verificado=? WHERE id_usuario=?';
                connection.query(updateQuery, [nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, verificado, userId], (updateError, updateResults) => {
                    if (updateError) {
                        console.error('Error al actualizar el usuario:', updateError);
                        res.status(500).json({ mensaje: 'Error en el servidor' });
                    } else {
                        if (updateResults.affectedRows > 0) {
                            res.status(200).json({ mensaje: 'Usuario actualizado correctamente', usuario: { id: userId, nombre, apellido, telefono, correo, password, fecha_nac, rol, verificado: verificado || usuarioAntesDeActualizar.verificado } });
                        } else {
                            res.status(404).json({ mensaje: 'Usuario no encontrado' });
                        }
                    }
                });
            } else {
                res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
        }
    });
});




router.delete('/usuario/:id', (req, res) => {
    const userId = req.params.id;

    // Consultar el usuario antes de eliminarlo
    const selectQuery = 'SELECT * FROM USUARIOS WHERE id_usuario=?';
    connection.query(selectQuery, [userId], (selectError, selectResults) => {
        if (selectError) {
            console.error('Error al obtener el usuario:', selectError);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (selectResults.length > 0) {
                const usuario = selectResults[0];

                // Eliminar el usuario
                const deleteQuery = 'DELETE FROM USUARIOS WHERE id_usuario=?';
                connection.query(deleteQuery, [userId], (deleteError, deleteResults) => {
                    if (deleteError) {
                        console.error('Error al eliminar el usuario:', deleteError);
                        res.status(500).json({ mensaje: 'Error en el servidor' });
                    } else {
                        if (deleteResults.affectedRows > 0) {
                            res.status(200).json({ mensaje: 'Usuario eliminado correctamente', usuario });
                        } else {
                            res.status(404).json({ mensaje: 'Usuario no encontrado' });
                        }
                    }
                });
            } else {
                res.status(404).json({ mensaje: 'Usuario no encontrado' });
            }
        }
    });
});




module.exports = router;