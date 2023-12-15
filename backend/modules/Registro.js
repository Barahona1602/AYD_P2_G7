const express = require('express');
const router = express.Router();
const connection = require('../database.js');


router.use(express.json());

router.post('/usuario', (req, res) => {
    const { nombre, apellido, telefono, correo, fecha_nac, rol, password } = req.body;
    console.log('Body:', req.body);

    // Validar que se proporcionó una contraseña
    if (!password) {
        return res.status(400).json({ mensaje: 'Falta la contraseña en la solicitud' });
    }

    // Insertar el nuevo usuario en la base de datos
    const sql = 'INSERT INTO USUARIOS (nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, verificado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    // Generar una contraseña temporal
    const temp_pass = generarContrasena();
    const values = [nombre, apellido, telefono, correo, password, temp_pass, fecha_nac, rol, false];
    console.log('values:', values);

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al insertar usuario en la base de datos:', err);
            res.status(500).json({ mensaje: 'Error al registrar usuario' });
        } else {
            console.log('Usuario registrado con éxito');
            res.json({ mensaje: 'Usuario registrado con éxito', usuario: { nombre, apellido, telefono, correo, fecha_nac, rol, verificado: false } });
        }
    });
});



function generarContrasena() {
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresEspeciales = '!@#$%^&*()_+{}|[];:,.<>?';

    // Generar una mayúscula aleatoria
    const mayusculaAleatoria = caracteresMayusculas.charAt(Math.floor(Math.random() * caracteresMayusculas.length));

    // Generar un carácter especial aleatorio
    const especialAleatorio = caracteresEspeciales.charAt(Math.floor(Math.random() * caracteresEspeciales.length));

    // Generar 6 caracteres aleatorios adicionales
    const otrosCaracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let otrosAleatorios = '';
    for (let i = 0; i < 6; i++) {
        otrosAleatorios += otrosCaracteres.charAt(Math.floor(Math.random() * otrosCaracteres.length));
    }

    // Combinar todos los elementos para formar la contraseña de 8 caracteres o más
    const contrasena = mayusculaAleatoria + especialAleatorio + otrosAleatorios;

    return contrasena;
}

// Ejemplo de uso
const contrasenaGenerada = generarContrasena();
console.log(contrasenaGenerada);

module.exports = router;
