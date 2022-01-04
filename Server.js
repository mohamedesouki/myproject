const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
const Info = require("./models/info");
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

  // mongoose.connect('mongodb://root:test123@localhost:27017',{dbName: 'Test'});
  mongoose.connect('mongodb://mongo:27017/Test');
  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", function(callback){
    console.log("Connection Succeeded");
  });

app.use('/', async (req, res, next) => {
    await Info.insertMany({
      record:"hi from mongodb"
    });
    
    const result= await Info.find();
    res.json(result);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});