//Work Order System
//Code by John Bailey
//Version 1.0
//Last Update 12/5/19

const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const db            = require('./config/db');

const app           = express();

const port = 3004;

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url,(err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log("App is running on " + port);
    })
})

