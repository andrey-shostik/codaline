var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    najax = require('najax');

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

require('./routes')(app);

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.listen(3000);
