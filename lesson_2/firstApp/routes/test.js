module.exports = function ( app ) {
  var najax = require('najax');

  app.get('/test', function (req, res) {
    najax('http://echo.jsontest.com/id/1', function (res) {
        console.log(res);
    })
    .then(function() {
      return najax('http://echo.jsontest.com/id/2', function (res) {
        console.log(res);
      })
    })
    .then(function () {
      return najax('http://echo.jsontest.com/id/3', function (res) {
        console.log(res);
      })
    })
  })
}
