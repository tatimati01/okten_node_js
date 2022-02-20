const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const {engine} = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('view', path.join(__dirname, 'static'));


app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})

