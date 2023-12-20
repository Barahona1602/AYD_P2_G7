const express = require('express');
const router = express.Router();
const connection = require('../database.js');

router.use(express.json());

// Ruta para obtener todas las atenciones de mascotas para un id_usuario específico
router.get('/atencionMascota/:id_usuario', (req, res) => {
    const idUsuario = req.params.id_usuario;

    // Validar que se proporcionó el ID del usuario
    if (!idUsuario) {
        return res.status(400).json({ mensaje: 'Falta el ID del usuario en la solicitud' });
    }

    // Realizar la consulta en la base de datos
    const sql = 'SELECT * FROM ATENCION_MASCOTAS am JOIN MASCOTAS m ON m.id_mascota = am.id_mascota WHERE am.id_usuario = ? AND am.estado NOT IN (?, ?)';
    const values = [idUsuario, 'Devuelto', 'Recibido'];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al obtener atenciones de mascotas:', err);
            res.status(500).json({ mensaje: 'Error al obtener atenciones de mascotas' });
        } else {
            console.log('Atenciones de mascotas obtenidas con éxito');
            res.json({ atencionesMascotas: results });
        }
    });
});

// Ruta para obtener todas las atenciones de mascotas para un id_usuario específico
router.get('/atencionMascotaConteo/:id_usuario', (req, res) => {
    const idUsuario = req.params.id_usuario;

    // Validar que se proporcionó el ID del usuario
    if (!idUsuario) {
        return res.status(400).json({ mensaje: 'Falta el ID del usuario en la solicitud' });
    }

    // Realizar la consulta en la base de datos
    const sql = 'SELECT COUNT(*) AS conteo FROM ATENCION_MASCOTAS WHERE id_usuario = ? AND estado NOT IN (?, ?)';
    const values = [idUsuario, 'Devuelto', 'Recibido'];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al obtener atenciones de mascotas:', err);
            res.status(500).json({ mensaje: 'Error al obtener atenciones de mascotas' });
        } else {
            console.log('Atenciones de mascotas obtenidas con éxito');
            res.json({ atencionesMascotas: results });
        }
    });
});

router.put('/atencionMascota/:id_atencion/:id_usuario', (req, res) => {
    const idAtencion = req.params.id_atencion;
    const idUsuario = req.params.id_usuario;
    const nuevoEstado = req.body.estado;

    // Validar que se proporcionó un nuevo estado
    if (!nuevoEstado) {
        return res.status(400).json({ mensaje: 'Falta el nuevo estado en la solicitud' });
    }

    // Actualizar el estado de la atención de mascota en la base de datos
    const sql = 'UPDATE ATENCION_MASCOTAS SET estado = ? WHERE id_atencion = ? AND id_usuario = ?';
    const values = [nuevoEstado, idAtencion, idUsuario];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al actualizar el estado de la atención de mascota:', err);
            res.status(500).json({ mensaje: 'Error al actualizar el estado de la atención de mascota' });
        } else {
            if (results.affectedRows > 0) {
                console.log('Estado de la atención de mascota actualizado con éxito');
                res.json({ mensaje: 'Estado de la atención de mascota actualizado con éxito' });
            } else {
                res.status(404).json({ mensaje: 'No se encontró la atención de mascota con los ID proporcionados' });
            }
        }
    });
});


module.exports = router;
