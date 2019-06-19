var path = require('path');
var express = require('express');
var routes = require('./routes/index.jsx');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});




