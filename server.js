var express = require('express');

var app = express();

const PORT = 5000;

app.use('/assets', express.static(__dirname + '/assets'));

app.use(express.static(__dirname));

app.get('/:param', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


var server = app.listen(PORT, function () {
    console.log('Server is up and running on http://localhost:' + PORT + '...');
});