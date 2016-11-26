module.exports = function ( app ) {
  var info = {
    firstName: 'Andrey',
    lastName: 'Shostik',
    email: 'aaa73731919@gmail.com',
  };

  app.get('/me', function (req, res) {
    res.render('me.ejs', { info: info } );
  })

  app.post('/me', function (req, res) {
    info = req.body;
    console.log(info)
    res.render('me.ejs', { info: info } );
  })
}
