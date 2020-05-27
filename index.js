const express = require("express");
const app = express();
const db = require("./api/data/db");

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000.');
});