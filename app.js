const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const uuid = require('uuid');
const cookieParser = require('cookie-parser');

const FileStore = require('session-file-store')(session);
//var favicon = require('serve-favicon');

const logger = require('morgan');
const bodyParser = require('body-parser');
const dynamicStatic = require('express-dynamic-static')();
const book = require('./routes/book');
const login = require ('./fe-server/main/process/default/routes/login.js');
const login_ctrl = require('./fe-server/main/process/default/controllers/login.js')
const app = express(); 


app.use(login_ctrl);

app.use(logger('dev'));

app.use(dynamicStatic);

app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid() // use UUIDs for session IDs
  },
  key:'user_sid',
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,     //cookie won't be save for someone unauthorized(false)
  cookie:{
        maxAge:120000,
        expires:120000
  }
}));

// checks if user's cookie is saved in the browser when user is logout
app.use((req, res, next)=>{
  if(req.cookies.user_sid && !req.session.username){
    res.clearCookie('user_sid');
  }
  next();
});

app.use('/api', book);
app.use('/api/default/login', login);
app.use(passport.session());

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
  console.log("/fe/*");
  console.log(req.session);
  return res.sendFile(path.join(__dirname, "dist", "fe", "index.html"));
});

module.exports = app;
