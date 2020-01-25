var express = require('express');
var http = require('http');
var path = require('path');

const testFolder = '/images/asl_alphabet_train/';
const fs = require('fs');

var app = express();
var server = http.Server(app);

app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// Gets file tree from training set
fs.readdir(testFolder, function(err, files){
    console.log(files);
});