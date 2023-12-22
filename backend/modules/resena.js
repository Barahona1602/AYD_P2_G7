const express = require('express');
const router = express.Router();
const connection = require('../database.js');

// Crear reseña de hotel (POST)
router.post('/resenaHotel', async (req, res) => {
  try {
    const { resena, calificacion, id_usuario } = req.body;
    const query = 'INSERT INTO RESENAS_HOTEL (resena, calificacion, id_usuario) VALUES (?, ?, ?)';
    connection.query(query, [resena, calificacion, id_usuario], (error, results) => {
      if (error) {
        console.error('Error al crear la reseña de hotel:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        const insertedResena = {
          id: results.insertId,
          resena,
          calificacion,
          id_usuario
        };
        res.status(201).json({ mensaje: 'Reseña de hotel creada correctamente', reseña: insertedResena });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la reseña de hotel' });
  }
});

// Eliminar reseña de hotel (DELETE)
router.delete('/resenaHotel/:id_resena_hotel', async (req, res) => {
    try {
      const id_resena_hotel = req.params.id_resena_hotel;
      const selectQuery = 'SELECT * FROM RESENAS_HOTEL WHERE id_resena_hotel = ?';
      
      // Realizar una consulta para verificar que la reseña de hotel existe
      connection.query(selectQuery, [id_resena_hotel], (selectError, selectResults) => {
        if (selectError) {
          console.error('Error al verificar la existencia de la reseña de hotel:', selectError);
          res.status(500).json({ error: 'Error en el servidor' });
        } else {
          const existingResenaHotel = selectResults[0];
  
          if (!existingResenaHotel) {
            res.status(404).json({ error: 'Reseña de hotel no encontrada' });
          } else {
            // Almacenar los datos antes de eliminar
            const deletedResenaHotel = existingResenaHotel;
  
            // Eliminar la reseña de hotel
            const deleteQuery = 'DELETE FROM RESENAS_HOTEL WHERE id_resena_hotel = ?';
            connection.query(deleteQuery, [id_resena_hotel], (deleteError) => {
              if (deleteError) {
                console.error('Error al eliminar la reseña de hotel:', deleteError);
                res.status(500).json({ error: 'Error en el servidor' });
              } else {
                res.status(200).json({ mensaje: 'Reseña de hotel eliminada correctamente', reseñaHotel: deletedResenaHotel });
              }
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la reseña de hotel' });
    }
  });
  
  

// Obtener reseñas de hotel por usuario (GET)
router.get('/resenaHotel/:idUsuario', async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
    const query = 'SELECT * FROM RESENAS_HOTEL WHERE id_usuario = ?';
    connection.query(query, [idUsuario], (error, results) => {
      if (error) {
        console.error('Error al obtener las reseñas de hotel para el usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'No se encontraron reseñas de hotel para el usuario' });
        } else {
          res.status(200).json(results);
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas de hotel para el usuario' });
  }
});

// Obtener todas las reseñas de hotel (GET)
router.get('/resenaHotel', async (req, res) => {
  try {
    const query = 'SELECT * FROM RESENAS_HOTEL';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener las reseñas de hotel:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas de hotel' });
  }
});

// Crear reseña de atención (POST)
router.post('/resenaAtencion', async (req, res) => {
  try {
    const { resena, calificacion, id_atencion } = req.body;
    const query = 'INSERT INTO RESENAS_ATENCION (resena, calificacion, id_atencion) VALUES (?, ?, ?)';
    connection.query(query, [resena, calificacion, id_atencion], (error, results) => {
      if (error) {
        console.error('Error al crear la reseña de atención:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        const insertedResena = {
          id: results.insertId,
          resena,
          calificacion,
          id_atencion
        };
        res.status(201).json({ mensaje: 'Reseña de atención creada correctamente', reseña: insertedResena });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la reseña de atención' });
  }
});


// Eliminar reseña de atención (DELETE)
router.delete('/resenaAtencion/:id_resena', async (req, res) => {
    try {
      const id_resena = req.params.id_resena;
      const selectQuery = 'SELECT * FROM RESENAS_ATENCION WHERE id_resena = ?';
      
      // Realizar una consulta para verificar que la reseña de atención existe
      connection.query(selectQuery, [id_resena], (selectError, selectResults) => {
        if (selectError) {
          console.error('Error al verificar la existencia de la reseña de atención:', selectError);
          res.status(500).json({ error: 'Error en el servidor' });
        } else {
          const existingResenaAtencion = selectResults[0];
  
          if (!existingResenaAtencion) {
            res.status(404).json({ error: 'Reseña de atención no encontrada' });
          } else {
            // Almacenar los datos antes de eliminar
            const deletedResenaAtencion = existingResenaAtencion;
  
            // Eliminar la reseña de atención
            const deleteQuery = 'DELETE FROM RESENAS_ATENCION WHERE id_resena = ?';
            connection.query(deleteQuery, [id_resena], (deleteError) => {
              if (deleteError) {
                console.error('Error al eliminar la reseña de atención:', deleteError);
                res.status(500).json({ error: 'Error en el servidor' });
              } else {
                res.status(200).json({ mensaje: 'Reseña de atención eliminada correctamente', reseñaAtencion: deletedResenaAtencion });
              }
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la reseña de atención' });
    }
  });
  
  

// Obtener reseñas de atención por usuario (GET)
router.get('/resenaAtencion/:idAtencion', async (req, res) => {
  try {
    const idAtencion = req.params.idAtencion;
    const query = 'SELECT * FROM RESENAS_ATENCION WHERE id_atencion = ?';
    connection.query(query, [idAtencion], (error, results) => {
      if (error) {
        console.error('Error al obtener las reseñas de atención para el usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'No se encontraron reseñas de atención para el usuario' });
        } else {
          res.status(200).json(results);
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas de atención para el usuario' });
  }
});

// Obtener todas las reseñas de atención (GET)
router.get('/resenaAtencion', async (req, res) => {
  try {
    const query = 'SELECT * FROM RESENAS_ATENCION';
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error al obtener las reseñas de atención:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas de atención' });
  }
});

// get de reseñas por trabajador
router.get('/resenaAtencionTrabajador/:idUsuario', async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;

    // Obtener las id_atencion asociadas al id_usuario en la tabla ATENCION_MASCOTAS
    const atencionesQuery = 'SELECT id_atencion FROM ATENCION_MASCOTAS WHERE id_usuario = ?';
    connection.query(atencionesQuery, [idUsuario], (error, atencionesResults) => {
      if (error) {
        console.error('Error al obtener las id_atencion para el usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
      } else {
        if (atencionesResults.length === 0) {
          res.status(404).json({ error: 'No se encontraron atenciones para el usuario' });
        } else {
          // Obtener las reseñas de atención para las id_atencion obtenidas
          const idAtenciones = atencionesResults.map((atencion) => atencion.id_atencion);
          const reseñasQuery = 'SELECT ra.* FROM RESENAS_ATENCION ra JOIN ATENCION_MASCOTAS am ON ra.id_atencion = am.id_atencion WHERE am.id_usuario = ?';
          connection.query(reseñasQuery, [idUsuario], (error, reseñasResults) => {
            if (error) {
              console.error('Error al obtener las reseñas de atención para el usuario:', error);
              res.status(500).json({ error: 'Error en el servidor' });
            } else {
              if (reseñasResults.length === 0) {
                res.status(404).json({ error: 'No se encontraron reseñas de atención para el usuario' });
              } else {
                res.status(200).json(reseñasResults);
              }
            }
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las reseñas de atención para el usuario' });
  }
});




module.exports = router;
