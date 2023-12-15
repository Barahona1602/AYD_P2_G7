const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


//ACÁ VAN Las IMPORTACIONES DE LOS MÓDULOS
const holaMundo = require('./modules/holaMundo');
const login = require('./modules/login');
const crudUser = require('./modules/CRUDuser');
const crearMascota = require('./modules/crearMascota');
const hospedarMascota = require('./modules/hospedarMascota');





//ACÁ VAN LAS RUTAS
app.use('/', holaMundo);
app.use('/', login);
app.use('/', crudUser);
app.use('/', crearMascota);
app.use('/', hospedarMascota);





app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});