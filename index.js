// require modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var hbs = require('express-handlebars');

// listen on port 3000
http.listen(3000, function(){
   console.log('listening on *:3000') 
});

// setup
app.use('/assets', express.static(__dirname + '/assets'));
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routes
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
    res.send('<h1>route: contact</h1>');
});

app.get('/stash', function(req,res){
    res.send('<h1>route: stash</h1>');
});

app.get('*', function(req,res){
    res.status(404).send("<h1>Oops! There's nothing to be found here. Please check for a valid address.<h1>");
});