const express = require('express');
const app = express();
const consign = require('consign');
const bodyParser = require('body-parser')

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./app/public'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign({cwd: 'app'})
    .include('routes')
    .then('config/DBConnection.js')
    .then('controllers')
    .then('models')
    .into(app)

module.exports = app;