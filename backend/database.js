const mysql = require('mysql');

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: '34.82.9.177',
    user: 'root',
    password: '1oRsA9s34Vb1oLd',
    database: 'huellitafeliz',
    port: 3306
});
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = connection;
