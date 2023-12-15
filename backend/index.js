const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());




//ACÁ VAN Las IMPORTACIONES DE LOS MÓDULOS
const holaMundo = require('./modules/holaMundo');
const login = require('./modules/login');
const registro = require('./modules/Registro');













//ACÁ VAN LAS RUTAS
app.use('/', holaMundo);
app.use('/', login);
app.use('/', registro);













app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});