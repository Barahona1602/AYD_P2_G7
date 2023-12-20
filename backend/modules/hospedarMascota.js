const express = require('express');
const router = express.Router();
const connection = require('../database.js');




router.post('/hospedarMascota', (req, res) => {
    const { id_mascota, fecha_devolucion } = req.body;
    const selectQuery = 'SELECT * FROM MASCOTAS WHERE id_mascota = ?';
    connection.query(selectQuery, [id_mascota], (selectError, selectResults) => {
        if (selectError) {
            console.error('Error al verificar la existencia de la mascota:', selectError);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (selectResults.length === 0) {
                res.status(404).json({ mensaje: 'La mascota con el ID proporcionado no existe' });
            } else {
                const verifyEstadoQuery = 'SELECT id_atencion FROM ATENCION_MASCOTAS WHERE id_mascota = ? AND estado != "Recogido"';
                connection.query(verifyEstadoQuery, [id_mascota], (verifyError, verifyResults) => {
                    if (verifyError) {
                        console.error('Error al verificar el estado de la mascota:', verifyError);
                        res.status(500).json({ mensaje: 'Error en el servidor' });
                    } else {
                        if (verifyResults.length > 0) {
                            res.status(400).json({ mensaje: 'La mascota no puede ser hospedada nuevamente hasta que esté en estado "Recogido"' });
                        } else {
                            const insertQuery = 'INSERT INTO ATENCION_MASCOTAS (id_mascota, fecha_devolucion, estado) VALUES (?, ?, "Hospedado")';
                            connection.query(insertQuery, [id_mascota, fecha_devolucion], (insertError, insertResults) => {
                                if (insertError) {
                                    console.error('Error al hospedar la mascota:', insertError);
                                    res.status(500).json({ mensaje: 'Error en el servidor' });
                                } else {
                                    const nuevoHospedajeId = insertResults.insertId;
                                    res.status(201).json({ mensaje: 'Mascota hospedada correctamente', id_hospedaje: nuevoHospedajeId });
                                }
                            });
                        }
                    }
                });
            }
        }
    });
});





module.exports = router;