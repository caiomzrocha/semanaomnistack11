const express = require('express'); //importar o modulo express para a variavel express
const routes = require('./routes');
const cors = require('cors');

const app = express(); //variavel app para armazenar a aplicacao

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //aplicacao escutando na porta 3333