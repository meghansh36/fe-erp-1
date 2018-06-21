//var express = require('express');
var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var dynamicStatic = require('express-dynamic-static')();
var book = require('./routes/book');
var app = express();

var clientIdentifier;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use(dynamicStatic);
app.use('/api', book);

//main get Route 
/* app.use('/client/:id', function(req,res,next){
  if(req.params.id){
    console.log(req.params.id)
    clientIdentifier = req.params.id;
  }
  dynamicStatic.setPath(path.resolve(__dirname, 'dist/'+clientIdentifier)) 
  res.sendFile("index.html", {root: "./dist/" + clientIdentifier })
}); */
app.use(express.static(path.join(__dirname, "dist")));
/**
 * Angular app serve route
 * All routes starting with "ng" are routed to serve angular's "index.html"
 */
app.get("/fe/*", (req, res) => {
  return res.sendFile(path.join(__dirname, "dist", "fe", "index.html"));
});

module.exports = app;
