module.exports = function ( app ) {
  require('./me')(app);
  require('./test')(app);
};
