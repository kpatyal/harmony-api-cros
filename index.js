var app = require('express')();
var bodyParser = require('body-parser')
var port  = process.env.PORT || 8088;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var server = require('http').Server(app);


server.listen(port, () => {
	console.log('Server is running on Port', port)
});


var create = require('./apitest.js');
app.post('/auth', create.authentication);
app.post('/createFolder', create.createFolder);
app.post('folderInformation', create.folderInformation);
app.get('/createMessage', create.createMessage);
app.get('/sendProof', create.sendProof);




