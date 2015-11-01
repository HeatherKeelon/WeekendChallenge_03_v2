/**
 * Created by user on 10/30/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));
app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on " + app.get("port"));
});

module.exports = app;