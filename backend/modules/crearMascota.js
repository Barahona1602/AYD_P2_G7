const express = require('express');
const router = express.Router();
const connection = require('../database.js');



router.post('/mascota', (req, res) => {
    const { nombre_mascota, edad, especie, raza, comportamiento, contacto_vet, comentario, id_usuario } = req.body;

    const insertQuery = 'INSERT INTO MASCOTAS (nombre_mascota, edad, especie, raza, comportamiento, contacto_vet, comentario, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    connection.query(
        insertQuery,
        [nombre_mascota, edad, especie, raza, comportamiento, contacto_vet, comentario, id_usuario],
        (insertError, insertResults) => {
            if (insertError) {
                console.error('Error al agregar una nueva mascota :', insertError);
                res.status(500).json({ mensaje: 'Error en el servidor' });
            } else {
                const nuevaMascotaId = insertResults.insertId;

                const selectQuery = 'SELECT * FROM MASCOTAS WHERE id_mascota=?';
                connection.query(selectQuery, [nuevaMascotaId], (selectError, selectResults) => {
                    if (selectError) {
                        console.error('Error al obtener información de la mascota:', selectError);
                        res.status(500).json({ mensaje: 'Error en el servidor' });
                    } else {
                        const mascotaAgregada = selectResults[0];
                        res.status(201).json({ mensaje: 'Mascota agregada correctamente', mascota: mascotaAgregada });
                    }
                });
            }
        }
    );
});


// Endpoint para obtener una mascota específica de un usuario
router.get('/mascota/:idMascota', (req, res) => {
    const idMascota = req.params.idMascota;

    const selectQuery = `
    SELECT 
    m.id_mascota,
    m.comentario,
    m.comportamiento,
    m.contacto_vet,
    m.edad,
    m.especie,
    am.estado,
    am.fecha_atencion,
    am.fecha_devolucion,
    am.id_atencion,
    m.id_usuario,
    am.id_usuario AS id_trabajador,
    m.nombre_mascota,
    m.raza
    FROM MASCOTAS m 
    LEFT JOIN ATENCION_MASCOTAS am ON am.id_mascota = m.id_mascota AND am.estado NOT IN ('Devuelto', 'Recogido')
    WHERE m.id_mascota=?
    `;

    connection.query(selectQuery, [idMascota], (error, results) => {
        if (error) {
            console.error('Error al obtener información de la mascota:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            if (results.length > 0) {
                const mascota = results[0];
                res.status(200).json({ mascota });
            } else {
                res.status(404).json({ mensaje: 'Mascota no encontrada' });
            }
        }
    });
});

// Endpoint para obtener todas las mascotas de un usuario
router.get('/mascota/usuario/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;

    const selectQuery = `SELECT m.id_mascota, m.nombre_mascota, m.edad, m.especie, m.raza, m.comportamiento, m.contacto_vet, m.comportamiento, am.id_atencion, am.estado  FROM MASCOTAS m
    left join ATENCION_MASCOTAS am ON am.id_mascota = m.id_mascota and am.estado in ('Comiendo', 'Paseando', 'Bañado', 'Tomando la siesta', 'Jugando', 'Hospedado')
    WHERE m.id_usuario=?;`;

    connection.query(selectQuery, [idUsuario], (error, results) => {
        if (error) {
            console.error('Error al obtener mascotas:', error);
            res.status(500).json({ mensaje: 'Error en el servidor' });
        } else {
            res.status(200).json({ mascotas: results });
        }
    });
});







module.exports = router;