const express = require('express');
const router = express.Router();
const connection = require('../database.js');

// Actualizar estado de la mascota a "Recogido"
router.put('/recogerMascota/:idAtencion', (req, res) => {
  try {
    const idAtencion = req.params.idAtencion;

    // Verificar el estado actual de la atención
    const selectQuery = 'SELECT estado FROM ATENCION_MASCOTAS WHERE id_atencion = ?';
    connection.query(selectQuery, [idAtencion], (selectError, selectResults) => {
      if (selectError) {
        console.error('Error al obtener el estado de la atención:', selectError);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        const estadoActual = selectResults[0]?.estado;

        // Verificar si el estado actual es "Devuelto"
        if (estadoActual === 'Devuelto') {
          // Actualizar el estado a "Recogido"
          const updateQuery = 'UPDATE ATENCION_MASCOTAS SET estado = "Recogido" WHERE id_atencion = ?';
          connection.query(updateQuery, [idAtencion], (updateError, updateResults) => {
            if (updateError) {
              console.error('Error al actualizar el estado de la atención:', updateError);
              res.status(500).json({ error: 'Error en el servidor' });
            } else {
              if (updateResults.affectedRows > 0) {
                res.status(200).json({ mensaje: 'Estado de la mascota actualizado a Recogido' });
              } else {
                res.status(404).json({ mensaje: 'Atención no encontrada' });
              }
            }
          });
        } else {
          res.status(400).json({ mensaje: 'No se puede recoger la mascota. El estado actual no es Devuelto' });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el estado de la mascota' });
  }
});

module.exports = router;
