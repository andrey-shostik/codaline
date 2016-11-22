var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var info = {
  firstName: 'Andrey',
  lastName: 'Shostik',
  email: 'aaa73731919@gmail.com',
};

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.render('index.ejs')
})

app.get('/me', function (req, res) {
  res.render('me.ejs', { info: info } );
})

app.post('/me', function (req, res) {
  info = req.body;
  console.log(info)
  res.render('me.ejs', { info: info } );
})

app.listen(3000, function () {
  console.log('log');
});
