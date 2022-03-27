const express = require('express');
const cors = require('cors');

const app = express();

const planetsRouter = require('./routes/planets/planets.route');

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/planets', planetsRouter);

module.exports = app;
