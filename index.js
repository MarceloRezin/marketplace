const express = require("express");
const app = express();
const db = require("./api/data/db");

const rotaCategorias = require("./api/routes/categorias");
const rotaUsuarios = require("./api/routes/usuarios");
const rotaAnuncios = require("./api/routes/anuncios");

app.use(express.json());

app.use("/categorias", rotaCategorias);
app.use("/usuarios", rotaUsuarios);
app.use("/anuncios", rotaAnuncios);

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000.');
});