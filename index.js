var express = require('express');
var app = express();
const config = require('./config/database.js');
const path = require('path');

var mongoose = require('mongoose');
mongoose.connect(config.uri, (err) => {
    if(err){
        consile.log('There is an error : ', err);
    } else {
        console.log('Sunncessfully connected to DataBase : ', config.db);
    }
});

app.use(express.static(__dirname + '/clint/dist/'));

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/clint/dist/index.html'));
});

app.listen(3000, () => {
    console.log("Your app is runnimg on port: 3000");
});