var express = require('express'), app = express(), port = process.env.PORT || 8000,
morgan = require('morgan'), bodyParser = require('body-parser'),
methodOverride = require('method-override'),
parseUrlEncoded = bodyParser.urlencoded({ 'extended': 'true' });

app.use(express.static(__dirname + '/public/'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  	    res.header("Access-Control-Allow-Origin", "*");
    	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    	next();
	});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); 
});	

app.listen(port);
console.log('listening on port # ' + port + '.');
