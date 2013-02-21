
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , api = require('./routes/api');

var app = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);


app.post('/rest/insertdata', api.insertData);
app.get('/rest/readlocdata/:loc/:dis', api.readLocData);
app.get('/rest/readalldata', api.readAllData);

app.get('*', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port 3000");
});
