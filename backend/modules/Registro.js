const express = require('express');
const router = express.Router();
const connection = require('../database.js');
const contrasenaGenerada = generarContrasena();
const { Resend } = require('resend');



router.use(express.json());

router.post('/usuario', (req, res) => {
    const { nombre, apellido, telefono, correo, fecha_nac, rol, password } = req.body;
    if (!password) {
        return res.status(400).json({ mensaje: 'Falta la contraseña en la solicitud' });
    }
    const sql = 'INSERT INTO USUARIOS (nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, verificado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const temp_pass = generarContrasena();
    const values = [nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, false];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al insertar usuario en la base de datos:', err);
            res.status(500).json({ mensaje: 'Error al registrar usuario' });
        } else {
            console.log('Usuario registrado con éxito');
            res.json({ mensaje: 'Usuario registrado con éxito', usuario: { nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, verificado: false } });
            const resend = new Resend('re_D24oPkNA_ABzaH3g78HRMxHRJzhdeDrym');
            console.log(correo)
            resend.emails.send({
                from: '3560855890101@ingenieria.usac.edu.gt',
                to: correo,
                subject: 'Password inicial',
                html: `<!DOCTYPE html>
                <html lang="es">
                <head>
                  <meta charset="UTF-8">
                  <title>Contraseña inicial</title>
                  <style>
                    body {
                      font-family: sans-serif;
                      font-size: 16px;
                    }
                
                    .container {
                      max-width: 500px;
                      margin: 0 auto;
                    }
                
                    .titulo {
                      font-size: 20px;
                      font-weight: bold;
                      text-align: center;
                      background-color: #d2691e;
                    }
                
                    .cuadro {
                      border: 1px solid #ccc;
                      padding: 10px;
                    }
                
                    .contrasena {
                      font-weight: bold;
                      color: #000;
                    }
                
                    .pie {
                      text-align: center;
                      margin-top: 20px;
                      background-color: #99ff99;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <header class="titulo">
                      <h1>Huellita feliz</h1>
                    </header>
                    <main>
                      <div class="cuadro">
                        <p>Tu contraseña inicial es:</p>
                        <p class="contrasena"><strong>${temp_pass}</strong></p>
                      </div>
                    </main>
                    <footer class="pie">
                      <p>© 2023 Huellita feliz</p>
                    </footer>
                  </div>
                </body>
                </html>
                `
            });
        }
    });
});


function generarContrasena() {
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresEspeciales = '!@#$%&()_+?';
    const mayusculaAleatoria = caracteresMayusculas.charAt(Math.floor(Math.random() * caracteresMayusculas.length));
    const especialAleatorio = caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));
    const otrosCaracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let otrosAleatorios = '';
    for (let i = 0; i < 6; i++) {
        otrosAleatorios += otrosCaracteres.charAt(Math.floor(Math.random() * otrosCaracteres.length));
    }
    const contrasena = mayusculaAleatoria + especialAleatorio + otrosAleatorios;
    return contrasena;
}





module.exports = router;
