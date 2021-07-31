var express = require("express");

var app = express();

app.use(express.static('public'));
app.use(express.static('img'));
//make way for some custom css, js and images
app.use('/public', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/img'));
var server = app.listen(9005, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
