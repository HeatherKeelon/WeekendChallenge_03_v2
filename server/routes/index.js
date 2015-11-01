/**
 * Created by user on 10/30/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var theMath = require('./doMath');
var bodyParser = require('body-parser');

router.post('/math', function(req, res, next){
    console.log(req);
    var calc = req.body;
    var data = theMath(calc);
    //console.log(data);
    res.send(JSON.stringify(data));//res.send(theMath(calc));
   // res.send('ok');
});

router.get('/*', function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});



module.exports = router;