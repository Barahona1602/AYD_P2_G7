const express = require('express');
const router = express.Router();
const connection = require('../database.js');

router.get('/mascotasHospedadas', (req, res) => {
    // Consulta SQL para obtener todas las mascotas hospedadas
    const sql = `
        SELECT *
        FROM ATENCION_MASCOTAS
        WHERE estado = 'Hospedado';
    `;

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener mascotas hospedadas:', err);
            res.status(500).json({ mensaje: 'Error al obtener mascotas hospedadas' });
        } else {
            console.log('Mascotas hospedadas obtenidas con éxito');
            res.json(results);
        }
    });
});


router.put('/atencionMascotas/:id_atencion/:id_usuario', (req, res) => {
    const idAtencionMascota = req.params.id_atencion;
    const nuevoIdUsuario = req.params.id_usuario; // Tomar el id_usuario de la URL

    // Realizar la actualización en la base de datos
    const sql = 'UPDATE ATENCION_MASCOTAS SET id_usuario = ? WHERE id_atencion = ?';
    const values = [nuevoIdUsuario, idAtencionMascota];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al actualizar id_usuario en ATENCION_MASCOTAS:', err);
            res.status(500).json({ mensaje: 'Error al actualizar id_usuario en ATENCION_MASCOTAS' });
        } else {
            console.log('Id_usuario actualizado con éxito en ATENCION_MASCOTAS');
            res.json({ mensaje: 'Id_usuario actualizado con éxito en ATENCION_MASCOTAS' });
        }
    });
});






module.exports = router;
