var app = require('express')();
var bodyParser = require('body-parser')
var port  = process.env.PORT || 8088;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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




