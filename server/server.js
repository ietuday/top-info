var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/top-info');

var Atm = require('./models/atmModel');
var Cards = require('./models/cardModel');
var Transactions = require('./models/transactionModel');


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

atmRouter = require('./Routes/atmRoutes')(Atm);
cardRouter = require('./Routes/cardRoutes')(Cards);
transactionRouter = require('./Routes/transactionRoutes')(Transactions);

app.use('/api', atmRouter);
app.use('/api', cardRouter);
app.use('/api', transactionRouter);



app.get('/', function(req, res){
    res.send('Welcome to Top InfoSolutions');
});

app.listen(port, function(){
    console.log('App is running my app on PORT: ' + port);
});