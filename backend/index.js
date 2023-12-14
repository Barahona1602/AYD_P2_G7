const express = require('express');
const app = express();
const port = 3000;

//ACÁ VAN Las IMPORTACIONES DE LOS MÓDULOS
const holaMundo = require('./modules/holaMundo');



//ACÁ VAN LAS RUTAS
app.use('/', holaMundo);




app.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
