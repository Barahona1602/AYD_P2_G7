const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

console.log("Hola mundo");
//ACÁ VAN Las IMPORTACIONES DE LOS MÓDULOS
const holaMundo = require('./modules/holaMundo');
const login = require('./modules/login');
const registro = require('./modules/Registro');
const crudUser = require('./modules/CRUDuser');
const crearMascota = require('./modules/crearMascota');
const hospedarMascota = require('./modules/hospedarMascota');
const seleccionMascota = require('./modules/seleccionMascota');
const atencionMascota = require('./modules/atencionMascota');
const recogerMascota = require('./modules/recogerMascota');
const resena = require('./modules/resena');
const tienda = require('./modules/tienda');












//ACÁ VAN LAS RUTAS
app.use('/', holaMundo);
app.use('/', login);
app.use('/', registro);
app.use('/', crudUser);
app.use('/', crearMascota);
app.use('/', hospedarMascota);
app.use('/', seleccionMascota);
app.use('/', atencionMascota);
app.use('/', resena);
app.use('/', tienda);
app.use('/', recogerMascota);














app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});