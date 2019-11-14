const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser')

//initialize
const app = express();
const db = require('./database/db');

//Settings app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('dev'));
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//Routes
app.use('/', require('./routes/index'));



//Listen port
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));   
}) 
