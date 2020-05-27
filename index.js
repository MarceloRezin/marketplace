const express = require("express");
const app = express();
const db = require("./api/data/db");

const rotaCategorias = require("./api/routes/categorias");

app.use(express.json());

app.use("/categorias", rotaCategorias);

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000.');
});