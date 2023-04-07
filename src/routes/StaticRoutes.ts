const { Router } = require('express');
const BuildPath = require('../utils/BuildPath');

const roteador = Router();

roteador.get('/', async function (req, res) {
  res.sendFile(`${BuildPath(__dirname)}/views/index.html`);
});