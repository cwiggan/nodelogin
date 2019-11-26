const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
app.use('/', require('./route/index'));
app.use('/user', require('./route/user'));


const PORT = process.env.PORT || 5000;

app.listen(PORT);