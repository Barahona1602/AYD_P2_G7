const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
app.use(express.json());
app.use(cors());


// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mylibrary',
    port: 3306
});
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});


//ACÁ VAN Las IMPORTACIONES DE LOS MÓDULOS
const holaMundo = require('./modules/holaMundo');













//ACÁ VAN LAS RUTAS
app.use('/', holaMundo);













app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
