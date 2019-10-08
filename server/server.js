'use strict';

require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');
});
mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}`));